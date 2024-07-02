"use client";
import Link from "next/link";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { validatePassword } from "@/libs/auths/validatePassword";
import "@/styles/animated/falling-leaves.scss";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
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
      password: ""
    });

    // Redirect or perform next action after successful submission
    // Example: redirect to dashboard or another page
    // router.push("/dashboard");
  };

  const Leaves = () => {
    return (
      <div id="leaves">
        {[...Array(15)].map((_, index) => (
          <i key={index}></i>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container flex justify-center">
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
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
                    <p className="text-red-500 text-sm mt-1">{errors.passwordLength}</p>
                  )}
                  {errors.passwordDigit && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordDigit}</p>
                  )}
                  {errors.passwordLowercase && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordLowercase}</p>
                  )}
                  {errors.passwordUppercase && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordUppercase}</p>
                  )}
                  {errors.passwordSpecialChar && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordSpecialChar}</p>
                  )}
                </div>
                <br />
                <button
                  type="submit"
                  className="text-gray-900 w-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                  Sign Up
                </button>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Do you already have an account ?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <Leaves />
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
