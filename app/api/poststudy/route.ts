"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


// see: https://www.youtube.com/watch?v=ibGncZF-XIU

const POST = async (req: any) => {
  const requestData = await req.json();
  console.log("requestData - total", requestData);
  //console.log("requestData - nameStudy", requestData['nameStudy']);
  //console.log("requestData - cam", requestData['cam'])

  const supabase = createClient();
  // check if study name already exists
  const { data: studyNameExits } = await supabase.from('studies').select('namestudy').eq('namestudy', requestData['namestudy'])
  console.log("studyNameExits", studyNameExits)


  if(studyNameExits != undefined && studyNameExits?.length == 1){
    console.log("study name exists")

    // check if participant name already exists
    const { data: participantNameNotExists } = await supabase.from('collectedcams').select('camid').eq('camid', requestData['camid'])
    if(participantNameNotExists?.length == 0){
      console.log("participant name do not exists")

    const { data, error } = await supabase.from('collectedcams').insert({ 
      camid: requestData['camid'], 
      namestudy: requestData['namestudy'], 
      participantid: requestData['participantid'], 
      datestart: requestData['datestart'], 
      dateend: requestData['dateend'],
      datediff: requestData['datediff'], 
      numconcepts: requestData['numconcepts'], 
      numconnectors: requestData['numconnectors'], 
      avgvalence: requestData['avgvalence'], 
      cam: requestData['cam']
 })
}
  }else{
    redirect('/error') // !!!
}




  return Response.json({ message: "Post data" });
}

export { POST };

// participantID
// CAM
// experiment
// type study (collaborative, individual)