"use client";

import { useState, useEffect } from "react";
import { updatePassword } from "./actions";

export default function RestPasswordForm() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState<{
    password1?: string;
    password2?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [password1, password2]);

  // Validate form
  const validateForm = () => {
    let errors: { password1?: string; password2?: string } = {};

    if (!password1) {
      errors.password1 = "Password is required.";
    } else if (password1.length < 6) {
      errors.password1 = "Password must be at least 6 characters.";
    }

    if (!password2) {
      errors.password2 = "Password is required.";
    } else if (password2.length < 6) {
      errors.password2 = "Password must be at least 6 characters.";
    } else if (password1 !== password2) {
      errors.password2 = "Passwords do not match.";
    }

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };


  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form update password successfully.");
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('code');
    
      if(accessToken !== null){
       const getFeedback = updatePassword(password1, accessToken)

       if(getFeedback != null){
        console.log("Form update password has no errors.");
       }else{
          alert("Please try again it was not possible to reset your password.")
       }
      }
    } 
  };



  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-gray-200 border rounded-lg flex flex-col p-3">
      <label
        htmlFor="Password"
        className="block font-medium leading-6 text-gray-900 mt-5"
      >
        New password:
      </label>
      <input
        id="password1"
        name="password1"
        className="w-4/5"
        placeholder="Enter new password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        type="password"
      />
      {errors.password1 && (
        <p className="text-red-500 text-sm">{errors.password1}</p>
      )}

      <label
        htmlFor="Password"
        className="block font-medium leading-6 text-gray-900 mt-5"
      >
        Confirm new password:
      </label>
      <input
        id="password2"
        name="password2"
        className="w-4/5"
        placeholder="Confirm new password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
      />
      {errors.password2 && (
        <p className="text-red-500 text-sm">{errors.password2}</p>
      )}

      <button
        type="submit"
        disabled={!isFormValid}
        onClick={(event) => handleLogin(event)}
        className="py-2 mt-4 rounded-md bg-gray-400 hover:bg-gray-600 disabled:bg-red-200 text-xl"
      >
        Update password
      </button>
    </div>
  );
}
