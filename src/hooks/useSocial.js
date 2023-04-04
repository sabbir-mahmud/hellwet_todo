import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import generateToken from "./useJwt";
import useUser from "./useUser";

const useSocial = () => {
  const { setError, setUser, setLoading } = useUser();
  // navigate to
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(from);
        const email = result.user.email;
        generateToken(email);
        toast.info("You are logged in!");
        setLoading(false);
        setError(null);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return { handleGoogleSignIn };
};

export default useSocial;
