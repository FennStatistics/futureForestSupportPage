'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteCAMstudy( name: string) {

  console.log("name", name)

  const supabase = createClient();

  // get all CAMids of studies to delete
  const { data: IDsCollectedcams } = await supabase.from('collectedcams').select('namestudy, camid').eq('namestudy', name).select('camid')
  console.log("IDsCollectedcams", IDsCollectedcams)

  // get name of studies to delete
  const { data: NameStudy } = await supabase.from('studies').select('namestudy').eq('namestudy', name)
  console.log("NameStudy", NameStudy)

  // delete all CAMs of respective study
  const responseCAMs = await supabase
    .from('collectedcams')
    .delete()
    .eq('namestudy', name)

  // delete study file
  const responseStudies = await supabase
  .from('studies')
  .delete()
  .eq('namestudy', name)


  console.log("Experiment deleted successfully!");

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}