import { useState } from "react";

export function useFormValidation() {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = (form) => {
    const newErrors = {};
    const { name, surname, email, phone } = form;

    if (name.length < 2) {
      newErrors.name = "მინიმუმ ორი სიმბოლო";
    }

    if (surname.length < 2) {
      newErrors.surname = "მინიმუმ ორი სიმბოლო";
    }

    if (!email.includes("@redberry.ge")) {
      newErrors.email = "გამოიყენეთ @redberry.ge ფოსტა";
    }

    if (!/^\d+$/.test(phone) || phone.length !== 9) {
      newErrors.phone = "მხოლოდ რიცხვები";
    }

    setErrors(newErrors);
    // no errors ? true
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  return {
    errors,
    validate,
    isFormValid,
  };
}
