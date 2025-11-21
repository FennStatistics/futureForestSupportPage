"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


// see: https://www.youtube.com/watch?v=ibGncZF-XIU

const GET = async (req: any) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    console.log("searchParams", searchParams.get('study'));

    const supabase = createClient();

    const { data: singleStudy, error } = await supabase
      .from("studies")
      .select()
      .eq("namestudy",searchParams.get('study'));

         // redirect to error page if no data is found
    if (singleStudy?.length === 0 || singleStudy === undefined || singleStudy === null) {
        console.log("No data is found for respective study name");
        return redirect("/error"); // !!!
        // return Response.json({ message: "No data is found for respective study name" });
      }else{
        var nameStudy = singleStudy[0]['namestudy'];
        var configCAM = singleStudy[0]['configcam'];
        var defaultCAM = singleStudy[0]['defaultcam'];
        var redirectLink = singleStudy[0]['redirectlink'];

        /*
        console.log("nameStudy", nameStudy);
        console.log("configCAM", configCAM);
        console.log("defaultCAM", defaultCAM);
        console.log("redirectLink", redirectLink);
*/
        return Response.json({ nameStudy: nameStudy, configCAM: configCAM, defaultCAM: defaultCAM, redirectLink: redirectLink})
      }
}

export { GET };

// participantID
// CAM
// experiment
// type study (collaborative, individual)