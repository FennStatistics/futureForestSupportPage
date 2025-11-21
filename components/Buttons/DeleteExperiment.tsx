"use client";

import { deleteCAMstudy } from "@/app/study/[id]/actions";

import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const ButtonDeleteExperiment = ({
  currentStudy,
}: {
  currentStudy: any;
}) => {
  const [open, setOpen] = useState(false);

  const [namestudy, setNamestudy] = useState("");

  const [errors, setErrors] = useState<{
    namestudy?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [namestudy]);

  // Validate form
  const validateForm = () => {
    let errors: { namestudy?: string } = {};

    if (!namestudy) {
      errors.namestudy = "To delete the name of your study is requiered.";
    } else if (namestudy != currentStudy) {
      errors.namestudy = "Please provide the exact name of your study.";
    }

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleOpen = () => setOpen(!open);

  // Submit
  const handleDeleteExperiment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isFormValid) {
      await deleteCAMstudy(currentStudy);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="py-3 px-6 flex rounded-xl bg-red-400 hover:bg-red-800 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Delete Study
      </Button>
      <Dialog
        placeholder="Dialog placeholder"
        open={open}
        handler={handleOpen}
        className="overflow-auto max-h-screen"
      >
        <DialogHeader placeholder="Dialog header placeholder">
          Confirm the deletion of your CAM study:
        </DialogHeader>
        <DialogBody placeholder="Dialog body placeholder" className="text-xl">
          <div className="mt-5 ml-5">
            <label
              htmlFor="NameStudy"
              className="block font-medium leading-6 text-gray-900 text-2xl mb-2"
            >
              Please enter the name of your CAM study to confirm the deletion
              and press "Conifrm Deletion":
            </label>
            <input
              id="name"
              name="NameStudy"
              className="w-4/5 border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-300"
              placeholder="Name of the CAM study"
              value={namestudy}
              onChange={(e) => setNamestudy(e.target.value)}
            />
            {errors.namestudy && (
              <p className="text-red-500 text-lg">{errors.namestudy}</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter placeholder="Dialog footer placeholder">
          <div className="text-sm font-light text-gray-600">
            The conifrm deletion button is disabled till you provided the name
            of your study.
          </div>
          <Button
            placeholder="Button close placeholder"
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder="Button add experiment placeholder"
            variant="gradient"
            color="red"
            disabled={!isFormValid}
            onClick={handleDeleteExperiment}
          >
            <span>CONFIRM DELITION</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ButtonDeleteExperiment;
