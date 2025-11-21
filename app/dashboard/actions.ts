'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'




export async function addCAMstudy( name: string, jsonConfig: JSON, jsonDefaultCAM: JSON, link: string) {

  console.log("name", name)
  console.log("jsonConfig", jsonConfig)
  console.log("jsonDefaultCAM", jsonDefaultCAM)
  console.log("link", link)

  const supabase = createClient();

  // get all names of created studies
  const { data: studyNameExits } = await supabase.from('studies').select('namestudy')
  console.log("studyNameExits", studyNameExits)

    if(studyNameExits != undefined && !studyNameExits.some(study => study.namestudy === name)){
      console.log("study name do not exists")

      const { data } = await supabase.auth.getUser();
      // console.log("possible error get user information: ", error)
      const { error } = await supabase.from('studies').insert({ email: data?.user?.email, namestudy: name, redirectlink: link, defaultcam: jsonDefaultCAM, configcam: jsonConfig})
     console.log("error sending data: ", error)

     revalidatePath('/', 'layout')
     redirect('/dashboard')
  }else{
    console.log("study name exists")
    return null
  }
}