import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {GoogleSignIn} = useContext(AuthContext)
    const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

   const handleGoogleSignIn = () =>{
        GoogleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .then(error => {
            console.log(error.message)
        })
   }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
