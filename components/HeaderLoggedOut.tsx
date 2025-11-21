import ButtonHome from "./Buttons/Home";
import ButtonInformation from "./Buttons/Information";
import ButtonGetStarted from "./Buttons/GetStarted";
import ButtonOnlineDocumentation from "./Buttons/OnlineDocumentation";
import ButtonCAMELparticipant from "./Buttons/CAMELparticipant";


import ButtonBlog from "./Buttons/Blog";


import ButtonRegister from "./Buttons/Register";
import ButtonLogin from "./Buttons/Login";

import ButtomDates from "./TopDown/dates";
import ButtonSupportiveInformation from "./TopDown/supportiveInformation";
import ButtonTools from "./TopDown/tools";



import Image from "next/image";
import logoFutureForest from "../public/images/logoFutureForest.jpg";


export default function HeaderLoggedOut() {

  return (
    <>
      {/* TITLE + LOGO ROW */}
      <div className="w-full max-w-6xl mx-auto mt-5 relative flex items-center justify-center">
        {/* Centered title */}
        <div className="text-4xl font-semibold text-center">
          Future Forests Support Portal
        </div>

        {/* Logo top-right next to text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src={logoFutureForest.src}         // same pattern as in your other file
            width={200}
            height={200}
            alt="Future Forests logo"
            className="object-contain"
          />
        </div>
      </div>

      {/* Subtitle */}
      <div className="w-full max-w-6xl text-center text-lg font-light mb-2 italic">
        Logged Out
      </div>

      {/* Navbar */}
    <nav className="w-full sm:flex border-b h-16 mb-2 max-w-6xl hidden">
    <div className="w-full flex space-x-5 items-center p-5 text-sm justify-start">
      <ButtonHome/>
      <ButtomDates/>
      <ButtonSupportiveInformation/>
      <ButtonTools/>
      <ButtonBlog/>
      {/*
           <ButtonInformation/>
      <ButtonGetStarted/>
      <ButtonOnlineDocumentation/>
      <ButtonCAMELparticipant/>
      */}
 
      </div>
      <div className=".w-2/5 flex space-x-10 items-center p-5 text-sm justify-end">
      <ButtonRegister/>
      <ButtonLogin/>
    </div>
  </nav>
     </>
  );
}