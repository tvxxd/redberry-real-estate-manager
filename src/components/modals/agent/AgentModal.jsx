import SelectButton from "../../SelectButton";
import UploadFile from "../../UploadFile";
import Input from "../Input";
import styles from "./AgentModal.module.css";
import CancelButton from "../../CancelButton";
import Checkmark from "../../../icons/Checkmark";
import { useState, useEffect } from "react";
import { useFormValidation } from "../../../utils/hooks/validateForm";

const API_KEY = "9cfc18f5-4b59-4d0d-94d7-c06ab5b1c807";

function AgentModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    avatar: "",
  });

  const { errors, validate, isFormValid } = useFormValidation();

  useEffect(() => {
    validate(form);
  }, [form.name, form.surname, form.email, form.phone]);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    if (!isFormValid) {
      return;
    }

    data.append("name", form.name);
    data.append("surname", form.surname);
    data.append("email", form.email);
    data.append("phone", form.phone);
    if (form.avatar) {
      data.append("avatar", form.avatar);
    }

    try {
      const response = await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          body: data,
        }
      );
      if (response.ok) {
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prevData) => ({
      ...prevData,
      avatar: e.target.files[0],
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <form onSubmit={handleSubmit}>
        <div className={styles.agentModal}>
          <span
            style={{
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "3.875rem",
            }}
          >
            აგენტის დამატება
          </span>
          <div className={styles.wrapper}>
            <div>
              <label className={styles.label} htmlFor="name">
                სახელი <span className={styles.required}>*</span>
              </label>
              <Input
                value={form.name}
                onChange={handleInputChange}
                minChar={2}
                name="name"
              />
              <span style={{ color: errors.name ? "inherit" : "#45A849" }}>
                <Checkmark stroke={errors.name ? "#021526" : "#45A849"} />{" "}
                {errors.name || "მინიმუმ ორი სიმბოლო"}
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="lastname">
                გვარი
              </label>
              <Input
                value={form.surname}
                onChange={handleInputChange}
                minChar={2}
                required={false}
                name="surname"
              />
              <span style={{ color: errors.surname ? "inherit" : "#45A849" }}>
                <Checkmark stroke={errors.surname ? "#021526" : "#45A849"} />{" "}
                {errors.surname || "მინიმუმ ორი სიმბოლო"}
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="mail">
                ელ-ფოსტა <span className={styles.required}>*</span>
              </label>
              <Input
                value={form.email}
                onChange={handleInputChange}
                name="email"
              />
              <span style={{ color: errors.email ? "inherit" : "#45A849" }}>
                <Checkmark stroke={errors.email ? "#021526" : "#45A849"} />{" "}
                {errors.email || "გამოიყენეთ @redberry.ge ფოსტა"}
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="number">
                ტელეფონის ნომერი
              </label>
              <Input
                maxLength={9}
                minChar={9}
                value={form.phone}
                onChange={handleInputChange}
                required={false}
                name="phone"
              />
              <span style={{ color: errors.phone ? "inherit" : "#45A849" }}>
                <Checkmark stroke={errors.phone ? "#021526" : "#45A849"} />{" "}
                {errors.phone || "მხოლოდ რიცხვები"}
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="avatar">
                ატვირთეთ ფოტო <span className={styles.required}>*</span>
              </label>
              <UploadFile htmlFor="avatar" />
              <Input
                onChange={handleFileChange}
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <CancelButton onClick={onClose} />
            <SelectButton type="submit" text="დაამატე აგენტი" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AgentModal;
