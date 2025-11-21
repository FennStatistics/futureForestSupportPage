"use client";
import Link from "next/link";

import { addCAMstudy } from "@/app/dashboard/actions";

import { resetpassword } from "@/app/login/actions";

import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ButtonForgotPassword() {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [email]);

  // Validate form
  const validateForm = () => {
    let errors: { email?: string } = {};

    if (!email) {
      console.log("Email is required.");
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("Email is invalid.");
      errors.email = "Email is invalid.";
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

      const getFeedback = await resetpassword(email);
      if (getFeedback === null) {
        alert(
          "Email does not exist. Please enter the email you have registered with."
        );
      } else {
        alert("An email has been sent to you.");
        setOpen(!open);
      }
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="py-3 px-6 flex rounded-xl bg-gray-400 hover:bg-gray-700 md:text-xl sm:text-sm justify-center items-center"
        placeholder="Button open placeholder"
      >
        Reset Password
      </Button>
      <Dialog
        placeholder="Dialog placeholder"
        open={open}
        handler={handleOpen}
        className="overflow-auto max-h-screen"
      >
        <DialogHeader placeholder="Dialog header placeholder">
          Please enter your Email to reset your password.
        </DialogHeader>
        <DialogBody placeholder="Dialog body placeholder" className="text-xl">
          In the following form please enter the email adress you have
          registered yourself. We will send you an email with a link to reset
          your password. Please check your spam folder if you do not receive the
          email within the next 5 minutes. If you still have problems, please
          contact us.
          <div className="mt-5 ml-3">
            <label
              htmlFor="Email"
              className="block font-medium leading-6 text-gray-900"
            >
              Email address:
            </label>
            <input
              id="email"
              name="email"
              className="w-4/5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter placeholder="Dialog footer placeholder">
          <div className="text-sm font-light text-gray-600">
            The send email is disabled till you filled out the form.
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
            <span>Send Email</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
