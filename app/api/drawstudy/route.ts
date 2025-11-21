"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


// see: https://www.youtube.com/watch?v=ibGncZF-XIU

const GET = async (req: any) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    console.log("searchParams - study", searchParams.get('study'));
    console.log("searchParams - participantID", searchParams.get('participantID'));

    const supabase = createClient();

    /*
    const [singleStudyConfig, singleStudyCAM] = await Promise.all([
      supabase
        .from("studies")
        .select()
        .eq("namestudy", searchParams.get('study')),
      supabase
        .from("collectedcams")
        .select()
        .eq("camid", searchParams.get('participantID'))
    ]);
    */

      if(searchParams.get('study') != null){
      // get default config
      const { data: singleStudyConfig } = await supabase
      .from("studies")
      .select()
      .eq("namestudy",searchParams.get('study'));

        if(singleStudyConfig != null){
          var nameStudy = singleStudyConfig[0]['namestudy'];
          var configCAM = singleStudyConfig[0]['configcam'];
          configCAM.ShowResearcherButtons = true;
          configCAM.fullScreen = false;
          configCAM.setLanguage = "English";
          var redirectLink = singleStudyConfig[0]['redirectlink'];
        }
      }

      if(searchParams.get('participantID') != null){
      // get drawn CAM
      const { data: singleStudyCAM } = await supabase
      .from("collectedcams")
      .select()
      .eq("camid",searchParams.get('participantID'));

        if(singleStudyCAM != null){
          var drawnCAM = singleStudyCAM[0]['cam'];
        }
      }


      // console.log("get", { nameStudy: nameStudy, configCAM: configCAM, defaultCAM: drawnCAM, redirectLink: redirectLink})

      return Response.json({ nameStudy: nameStudy, configCAM: configCAM, defaultCAM: drawnCAM, redirectLink: redirectLink})
}

export { GET };

// participantID
// CAM
// experiment
// type study (collaborative, individual)