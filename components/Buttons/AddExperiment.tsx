"use client";
import Link from "next/link";

import { addCAMstudy } from "@/app/dashboard/actions";

import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ButtonAddExperiment() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [jsonContent, setJsonContent] = useState("");
  const [link, setLink] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    jsonContent?: string;
    link?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);
  var regexQuery =
    "^(https?:\\/\\/)?((([-a-z0-9]{1,63}\\.)*?[a-z0-9]([-a-z0-9]{0,253}[a-z0-9])?\\.[a-z]{2,63})|((\\d{1,3}\\.){3}\\d{1,3}))(:\\d{1,5})?((\\/|\\?)((%[0-9a-f]{2})|[-\\w\\+\\.\\?\\/@~#&=])*)?$";
  var testUrl = new RegExp(regexQuery, "i");
  useEffect(() => {
    validateForm();
  }, [name, jsonContent, link]);

  // Validate form
  const validateForm = () => {
    let errors: { name?: string; jsonContent?: string; link?: string } = {};

    if (!name) {
      errors.name = "Name for CAM study is required.";
    } else if (name.length < 6) {
      errors.name = "Name for CAM study must be at least 6 characters.";
    } else if (/\s/.test(name)) {
      errors.name = "Name for CAM study should not contain any whitespace.";
    } else if (/[^a-zA-Z0-9_]/.test(name)) {
      errors.name = "Name for CAM study should not contain special characters (only letters and numbers).";
    }

    if (!jsonContent) {
      errors.jsonContent = "JSON is required.";
    } else {
      try {
        let json = JSON.parse(jsonContent);
        let arrayJson = Object.keys(json);

        if (!(arrayJson.includes("config") && arrayJson.includes("CAM"))) {
          errors.jsonContent =
            "JSON is valid, but do not contain the required fields (config and CAM).";
        }
      } catch (err) {
        errors.jsonContent = "JSON is not valid.";
      }
    }

    if (!link) {
      errors.link = "Link to redirect participants is required.";
    } else if (!testUrl.test(link)) {
      errors.link = "Valid link is required.";
    }

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleOpen = () => setOpen(!open);

  // Submit
  const handleAddExperiment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Form submitted successfully!");

      let json = JSON.parse(jsonContent);
      const getFeedback = await addCAMstudy(name, json.config, json.CAM, link);
      if (getFeedback === null) {
        alert(
          "Study name already exists (maybe used by another researcher). Please choose another name. And click again on the button to add the study."
        );
      }else{
        setOpen(!open)
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="py-3 px-6 flex rounded-xl bg-blue-500 hover:bg-blue-900 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Add Study
      </Button>
      <Dialog
        placeholder="Dialog placeholder"
        open={open}
        handler={handleOpen}
        className="overflow-auto max-h-screen"
      >
        <DialogHeader placeholder="Dialog header placeholder">
          In the following form you can add a new CAM study:
        </DialogHeader>
        <DialogBody placeholder="Dialog body placeholder" className="text-xl">
          If this is your first time setting up a study, it is highly
          recommended to read the
          <Link
            href="https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/"
            className="px-1 text-blue-500 hover:underline"
            target="_blank"
          >
            instructions in the online documentation
          </Link>
          .
          <div className="mt-5 ml-5">
            <label
              htmlFor="NameStudy"
              className="block font-medium leading-6 text-gray-900 text-2xl mb-2"
            >
              Provide a name for the CAM study:
            </label>
            <input
              id="name"
              name="NameStudy"
              className="w-4/5 border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-300"
              placeholder="Name of the CAM study"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-lg">{errors.name}</p>
            )}

            <label
              htmlFor="jsonContent"
              className="block font-medium leading-6 text-gray-900 text-2xl mb-2 mt-5"
            >
              Paste JSON File Content:
            </label>
            <textarea
              id="jsonContent"
              name="jsonContent"
              rows={8}
              className="w-4/5 border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-300 mb-2"
              placeholder="Paste the JSON content here"
              value={jsonContent}
              onChange={(e) => setJsonContent(e.target.value)}
            />
            {errors.jsonContent && (
              <p className="text-red-500 text-lg">{errors.jsonContent}</p>
            )}

            <label
              htmlFor="RedirectLink"
              className="block font-medium leading-6 text-gray-900 text-2xl mb-2 mt-5"
            >
              Provide a redirect link for your participants:
            </label>
            <input
              id="link"
              name="RedirectLink"
              className="w-4/5 border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-300"
              placeholder="Redirect link for participants"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            {errors.link && (
              <p className="text-red-500 text-lg">{errors.link}</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter placeholder="Dialog footer placeholder">
          <div className="text-sm font-light text-gray-600">
            The add a new study button is disabled till you filled out the form.
          </div>
          <Button
            placeholder="Button close placeholder"
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder="Button add experiment placeholder"
            variant="gradient"
            color="green"
            disabled={!isFormValid}
            onClick={handleAddExperiment}
          >
            <span>Add a new study</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

/*
    <Link
    href="/dashboard"
    className="py-2 px-3 flex rounded-xl bg-blue-400 hover:bg-blue-800 md:text-xl sm:text-sm justify-center items-center"
  >
    Add Experiment
  </Link>
  */
