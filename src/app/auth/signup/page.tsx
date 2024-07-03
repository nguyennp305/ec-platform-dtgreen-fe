"use client";
import Link from "next/link";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { validatePassword } from "@/libs/auths/validatePassword";
import "@/styles/animated/falling-leaves.scss";
import { paths } from "@/paths";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    passwordLength: "",
    passwordDigit: "",
    passwordLowercase: "",
    passwordUppercase: "",
    passwordSpecialChar: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidPassword = validatePassword(formData.password, setErrors);
    if (!isValidPassword) {
      return; // Stop submission if password is invalid
    }

    // Submit form data (mock example)
    console.log("Form data:", formData);
    // Replace with your form submission logic (e.g., API call)

    // Clear form after submission (if needed)
    setFormData({
      email: "",
      username: "",
      password: "",
    });

    // Redirect or perform next action after successful submission
    // Example: redirect to dashboard or another page
    // router.push("/dashboard");
  };

  return (
    <div className="container flex justify-center">
      <div className="w-full rounded-lg8 bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Sign up to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="michael"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className={`focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                    errors.passwordLength ||
                    errors.passwordDigit ||
                    errors.passwordLowercase ||
                    errors.passwordUppercase ||
                    errors.passwordSpecialChar
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
              {errors.passwordLength && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.passwordLength}
                </p>
              )}
              {errors.passwordDigit && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.passwordDigit}
                </p>
              )}
              {errors.passwordLowercase && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.passwordLowercase}
                </p>
              )}
              {errors.passwordUppercase && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.passwordUppercase}
                </p>
              )}
              {errors.passwordSpecialChar && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.passwordSpecialChar}
                </p>
              )}
            </div>
            <br />
            <button
              type="submit"
              className="mb-2 w-full rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
            >
              Sign Up
            </button>
            <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
              Do you already have an account ?{" "}
              <Link
                href={paths.auth.signIn}
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
