
import { errorsDefault } from "@/app/auth/signin/page";

export const validatePassword = (password, setErrors) => {
  const errors = {...errorsDefault};

  if (password.length < 6) {
    errors.passwordLength = "Password must be at least 6 characters long.";
  } else if (!/\d/.test(password)) {
    errors.passwordDigit = "Password must contain at least one digit (0-9).";
  } else if (!/[a-z]/.test(password)) {
    errors.passwordLowercase = "Password must contain at least one lowercase letter (a-z).";
  } else if (!/[A-Z]/.test(password)) {
    errors.passwordUppercase = "Password must contain at least one uppercase letter (A-Z).";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.passwordSpecialChar = "Password must contain at least one special character.";
  }

  // Set the first error found
  setErrors(errors);

  // Return true if no errors, false if there are errors
  return Object.values(errors).every(error => error === "");
};
