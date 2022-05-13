import { useEffect } from "react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
const Login = () => {
  const asyncRedirectLogin = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => {
    asyncRedirectLogin();
  }, []);
  const loginGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={loginGoogleUser}>Login</button>
      <button onClick={signInWithGoogleRedirect}>Login Redirect</button>
    </div>
  );
};

export default Login;
