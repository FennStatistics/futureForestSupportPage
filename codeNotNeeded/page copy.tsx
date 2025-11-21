"use server"

import { createClient } from "@/utils/supabase/server";

import Image from "next/image";
import logoCAM from "../public/images/logoCAM.svg";


import ButtonInformation from "@/components/Buttons/Information";
import ButtonGetStarted from "@/components/Buttons/GetStarted";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'

import BrowserMobile from "./index/differentVersions";

import LikeButton from "./test/like-button"
/*
import { isMobile, isBrowser, BrowserView, MobileView } from 'react-device-detect';

import { redirect } from 'next/navigation'
  console.log("isMobile, isBrowser", isMobile, isBrowser)
if(isMobile){
  redirect('/notes')
}
    console.log("isMobile, isBrowser", isMobile, isBrowser)
            <BrowserView>
  <h1>This is rendered only in browser</h1>
</BrowserView>
<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>

*/

export default async function Index() {



  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
    /*

      const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  //console.log("error", error)


  const { error3 } = await supabase.from('countries').insert({ id: 4, name: 'Denmark' })

  const { data: todos, error2 } = await supabase.from('countries').select('*')
  console.log("todos", todos)


  const { error4 } = await supabase.from('countries').delete().eq('id', 1)
*/

  //     <div className="flex-1 w-full flex flex-col gap-20 items-center">

  return (
      <main className="flex flex-col gap-5 md:max-w-6xl sm:max-w-xl px-3 md:text-xl sm:text-sm animate-in">
        <BrowserMobile/>
           {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <div className="grid grid-cols-2 gap-2 place-items-center">
          <div className="md:text-2xl sd:text-sm font-semibold">
          "Cognitive Affective Map" tools to easily create and integrate CAM studies into online experiments.
          <p className="md:text-xl sd:text-sm font-light text-gray-600"> Build fully functional and accessible "Cognitive Affective Map" experiments - faster than ever! </p>
          </div>
          <div>
          <Image src={logoCAM.src} width={350} height={350} alt="CAM logo" className="sm-w-32"/>
          </div>
        </div>

        <ul className="list-disc space-y-5 px-14 mt-5">
          <li>
            <span className="font-bold">Online based</span> - all our tools are running online, so there is no need to set up any server (although you could)
          </li>
          <li>
            <span className="font-bold">Free and open source</span> - all our tools have MIT license, you can use the CAM tools in any project (just don't forget to quote us)
          </li>
          <li>
            <span className="font-bold">Tested systematically</span> - all of the provided tools were tested, ensuring best data quality
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-10 place-items-center mx-40">
          <div className="md:text-xl sm:text-sm font-semibold">
          For further information, please read the information page:
          <p className="md:w-1/2 sd:w-full mt-3">
            <ButtonInformation/> 
          </p>
          </div>
          <div className="md:text-xl sm:text-sm font-semibold">
         If you just want to get started, please read the get started page:
          <p className="md:w-1/2 sd:w-full mt-3">
            <ButtonGetStarted/> 
          </p>
          </div>
        </div>
      </main>
  );
}
