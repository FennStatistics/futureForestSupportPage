"use client";

import { useState, useEffect } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    affiliation?: string;
    updates?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [password, email]);

  // Validate form
  const validateForm = () => {
    let errors: { email?: string; password?: string } = {};

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

    setErrors(errors);
    console.log(errors);
    console.log(Object.keys(errors));
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Submit
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form log in successfully!");
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

      <button
      type="submit"
        disabled={!isFormValid}
        formAction={login}
        className="py-2 mt-4 rounded-md bg-gray-400 hover:bg-gray-600 disabled:bg-red-200 text-xl"
      >
        Log in
      </button>
    </div>
  );
}
