import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./signin-form.styles.scss";
const SignInForm = () => {
  const defaultFormFields = {
    password: "",
    email: "",
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(err);
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
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
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

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
