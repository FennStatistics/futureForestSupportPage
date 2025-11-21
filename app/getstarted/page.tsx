import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import Link from "next/link";

import ButtonRegister from "@/components/Buttons/Register";

export default async function GetStartedPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">
        Step by step everything is explained to get started and to set up your
        first study:
      </div>

      <div className="relative mt-5 text-left">
        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 1</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10 w-full">
            <div className="font-bold -ml-5">
              Explore the Cognitive-Affective Map Tools
            </div>
            <div className="my-3">
              <ul className="list-disc space-y-2 px-2 mt-5">
                <li>
                  <span className="font-bold">Data Collection</span> - Use our
                  developed{" "}
                  <Link
                    href="https://camgalaxy.github.io/?external=true"
                    className="px-1 text-blue-500 hover:underline"
                    target="_blank"
                  >
                    Data Collection Tool
                  </Link>{" "}
                  that enable participants to draw CAMs. It is
                  constructed to support large-scale online-studies to gather
                  CAM data of many participants.
                </li>
                <li>
                  <span className="font-bold">Data Analysis</span> - Use our
                  developed
                  <Link
                    href="https://fennapps.shinyapps.io/DataAnalysis/"
                    className="px-1 text-blue-500 hover:underline"
                    target="_blank"
                  >
                    Data Analysis Tool
                  </Link>
                  to analyze the resulting data, whereby you are guided within
                  every implemented module. The single modules allows you to
                  pre-process the data (summarizing drawn concepts) and to
                  analyze your data (e.g., aggregating data or computing network
                  parameters).
                </li>
              </ul>
            </div>
          </div>
        </div>
<br></br>
        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 2</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10 w-full">
            <div className="font-bold -ml-5">Register an account</div>
            <div className="my-3">
              <ul className="list-disc space-y-2 px-2 mt-5">
                <li>
                  Simply using our registration form to create an account, click
                  on:
                  <p className="md:w-1/6 sd:w-full mt-3">
                    <ButtonRegister />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 3</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10 w-full">
            <div className="font-bold -ml-5">Set up your first study</div>
            <div className="my-3">
              After you are logged in you can create your first study. On the
              dashboard page you can click on "ADD EXPERIMENT", a pop-up window
              will appear where you can (a) provide a name for your CAM study,
              (b) set up the configuration and (c) provide a redirect link after
              your participants have drawn the CAM. For detailed information
              please read the
              <Link
                href="https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/"
                className="pl-1 text-blue-500 hover:underline"
                target="_blank"
              >
                instructions in the online documentation
              </Link>
              .
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 4</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10 w-full">
            <div className="font-bold -ml-5">Collect your first data</div>
            <div className="my-3">
              After you have added your first study, you can start collecting
              data. You can share the link to your study with your participants
              and they can start drawing their CAMs. The data will be stored in
              our database and can be accessed by clicking on "Enter Experiment".
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex items-center relative">
          <div className="hidden md:block w-32">
            <div className="font-bold italic">Step 5</div>
          </div>

          <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"></div>

          <div className="ml-10 w-full">
            <div className="font-bold -ml-5">Analyze your data</div>
            <div className="my-3">
          After entering a single experiment simply click on "DOWNLOAD DATA" to download your collected CAMs as a .json file. This file can be uploaded to our Data Analysis Tool for further analysis. Please read the           <Link
            href="https://camtools-documentation.readthedocs.io/en/master/Data%20Analysis%20Tool/"
            className="pl-1 text-blue-500 hover:underline"
            target="_blank"
          >
            Data Analysis Tool online documentation
          </Link>.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
