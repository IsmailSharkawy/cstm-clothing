import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "../signup-form/signup-form.styles.scss";
import "../signin-form/signin-form.styles.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    password: "",
    confirmPassword: "",
    email: "",
    displayName: "",
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, password, confirmPassword, email } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
    }
  };
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Display name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={(e) => handleChange(e)}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => handleChange(e)}
        />

        <Button buttonType={"google"} type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
