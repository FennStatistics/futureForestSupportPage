"use client";

import { useState, useEffect } from "react";
import { signup } from "./actions";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [updates, setUpdates] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    affiliation?: string;
    updates?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [password, email, affiliation, updates]);

  // Validate form
  const validateForm = () => {
    let errors: {
      email?: string;
      password?: string;
      affiliation?: string;
      updates?: string;
    } = {};

    if (!email) {
      console.log("Email is required.");
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("Email is invalid.");
      errors.email = "Email is invalid.";
    }

    if (!password) {
      console.log("Password is required.");
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      console.log("Password must be at least 6 characters.");
      errors.password = "Password must be at least 6 characters.";
    }

    if (!affiliation) {
      console.log("Affiliation is required.");
      errors.affiliation = "Affiliation is required.";
    }

    if (!updates) {
      console.log("Email updates is required.");
      errors.updates = "If you want to receive email updates is required.";
    }

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Submit
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Form submitted successfully!");

      await signup(email, password, affiliation, updates);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-gray-200 border rounded-lg flex flex-col p-3">
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
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <label
        htmlFor="Password"
        className="block font-medium leading-6 text-gray-900 mt-5"
      >
        Password:
      </label>
      <input
        id="password"
        name="password"
        className="w-4/5"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      <label
        htmlFor="affiliation"
        className="block font-medium leading-6 text-gray-900 mt-5"
      >
        Affiliation:
      </label>
      <select
        id="affiliation"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-4/5 p-3"
        value={affiliation}
        onChange={(e) => setAffiliation(e.target.value)}
      >
        <option value="" disabled selected>
          Select your affiliation
        </option>
        <option value="researcher">Researcher at University</option>
        <option value="privateCompany">Private Company</option>
        <option value="student">Student</option>
        <option value="other">Other</option>
      </select>
      {errors.affiliation && (
        <p className="text-red-500 text-sm">{errors.affiliation}</p>
      )}

      <label
        htmlFor="emailupdates"
        className="block font-medium leading-6 text-gray-900 mt-5"
      >
        Do you want to receive email updates:
      </label>
      <select
        id="emailupdates"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-4/5 p-3"
        value={updates}
        onChange={(e) => setUpdates(e.target.value)}
      >
        <option value="" disabled selected>
          Select if you want to receive updates
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      {errors.updates && (
        <p className="text-red-500 text-sm">{errors.updates}</p>
      )}

      <button
        disabled={!isFormValid}
        onClick={handleSubmit}
        // formAction={signup}
        className="py-2 mt-4 rounded-md bg-gray-400 hover:bg-gray-600 disabled:bg-red-200 text-xl"
      >
        Submit
      </button>
    </div>
  );
}
