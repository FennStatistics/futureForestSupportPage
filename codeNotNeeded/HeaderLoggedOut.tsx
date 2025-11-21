import { createClient } from "@/utils/supabase/server";

import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";
import ButtonOnlineDocumentation from "./Buttons/OnlineDocumentation";

import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";


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

export default function HeaderLoggedOut() {

  return (
    <nav className="w-full flex border-b h-16 mb-10 max-w-6xl">
    <div className="w-full flex space-x-10 items-center p-5 text-sm justify-start">
      <ButtonHome/>
      <ButtonInformation/>
      <ButtonGetStarted/>
      <ButtonOnlineDocumentation/>
      </div>
      <div className=".w-2/5 flex space-x-10 items-center p-5 text-sm justify-end">
      {isSupabaseConnected && <ButtonRegister/>}
      {isSupabaseConnected && <ButtonLogin/>}
    </div>
  </nav>
  );
}
