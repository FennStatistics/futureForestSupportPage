"use client";

import { Button } from "@material-tailwind/react";

const ButtonDownloadExperiment = ({
  data,
  namestudy,
}: {
  data: any;
  namestudy: any;
}) => {
  const downloadJson = (data: any, filename: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadExperiment = () => {
    if (data !== undefined || data !== null) {
      var CAMs: any[] = [];
      data.forEach((element: { cam: any }) => {
        CAMs.push(element.cam);
      });

      if (CAMs.length >= 1) {
        var dateDownload = new Date();
        downloadJson(CAMs, namestudy + "_" + dateDownload.toISOString());
      }
    }
  };

  return (
    <>
      <Button
        onClick={handleDownloadExperiment}
        className="py-3 px-6 flex rounded-xl bg-green-400 hover:bg-green-800 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Download Data
      </Button>
    </>
  );
};

export default ButtonDownloadExperiment;

/*
export default function ButtonDownloadExperiment() {



  return (
    <>
      <Button
        onClick={handleDownloadExperiment}
        className="py-3 px-6 flex rounded-xl bg-green-400 hover:bg-green-800 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Download Data
      </Button>
    </>
  );
}
  */
