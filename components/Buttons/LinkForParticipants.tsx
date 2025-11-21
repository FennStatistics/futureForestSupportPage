"use client";

const ButtonLinkForParticipants = ({
  namestudy
}: {
  namestudy: any;
}) => {
  return (
    <>
<button
className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-900"
onClick={() => {
  navigator.clipboard.writeText("https://camgalaxy.github.io/?link=https://camadministrative.vercel.app/api/getstudy?study=" + namestudy + "&participantID=");
  alert("Link copied to clipboard");
}}
>
Link Participants
</button>
    </>
  );
};

export default ButtonLinkForParticipants;

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










