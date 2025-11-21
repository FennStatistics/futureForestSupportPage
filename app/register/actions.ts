'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'




export async function signup(email: string, password: string, affiliation: string, updates: string) {

  console.log("signup data", email, password, affiliation, updates)
  const supabase = createClient()

  // get all registered researchers
  const { data: researchersExists } = await supabase.from('researcher').select('email').eq('email', email)

    if(researchersExists != undefined && researchersExists?.length == 0){
      console.log("researcher not exists")

      const data_sent = {
        email: email as string,
        password: password as string,
      }
    
      // https://supabase.com/docs/reference/javascript/auth-signup
      const { error } = await supabase.auth.signUp(data_sent)
      console.log("signup error", error)
    
      if (error) {
        redirect('/error')
      }else{
        // add to the researcher table
        await supabase.from('researcher').insert({ email: email, affiliation: affiliation, emailupdates: updates})

        revalidatePath('/', 'layout')
        redirect('/success')
      }
  }else{
    redirect('/error')
  }
}