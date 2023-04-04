import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import generateToken from "./useJwt";
import useUser from "./useUser";

const useLogin = () => {
  const { setUser, setLoading, setError, handleLogout } = useUser();
  const navigate = useNavigate();

  const from = "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user?.user) {
          const email = user.user.email;
          setUser(user);
          generateToken(email);
          toast.info("You are logged in!");
          setLoading(false);
          navigate(from);
        } else {
          toast.error("Please verify your email address");
          handleLogout();
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return handleLogin;
};

export default useLogin;
