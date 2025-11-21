'use server'

import { createClient } from '@/utils/supabase/server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function updatePassword(password: string, accessToken: string ) {
  console.log("reset password", password)
  console.log("reset password accessToken", accessToken)
 
  const supabase = createClient()

  await supabase.auth.exchangeCodeForSession(accessToken)
  const { error } = await supabase.auth.updateUser({ password: password })

  console.log("error", error)

  if(!error){
    console.log("Password was updated successfully. You are now logged in.");
    revalidatePath('/', 'layout')
    redirect('/dashboard')
}else{
  return null
}
}