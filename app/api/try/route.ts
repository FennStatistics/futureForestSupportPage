import { createClient } from "@/utils/supabase/server";


// see: https://www.youtube.com/watch?v=ibGncZF-XIU

const GET = async (req: any) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const parsedData = await response.json();
    return Response.json(parsedData)
}


const POST = async (req: any) => {
    const requestData = await req.json();
    console.log("requestData - name", requestData['name']);
    console.log("requestData - cam", requestData['cam'])
    console.log("requestData - cam - nodes", requestData['cam'].nodes)
    console.log("requestData - welcomeYourGirl", requestData['welcomeYourGirl'])


    if(true){
        const supabase = createClient();
        const { error } = await supabase.from('countries').insert({ id: 444, name: requestData['cam'] })
    }

    return Response.json({ message: "Post data" });
}

export { GET, POST };


// participantID
// CAM
// experiment
// type study (collaborative, individual)