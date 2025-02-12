import AuthLayout from "../../components/layout/AuthLayout"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfilePhotoSelector from "../../components/input/ProfilePhotoSelector"
import AuthInput from "../../components/input/AuthInput"
import { Link } from "react-router-dom"
import { validateEmail } from "../../utils/helper"

const SignUpForm = () => {

  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if(!fullName){
      setError("Please enter the full name");
      return;
    }

    if(!validateEmail(email)){
        setError("Please enter a valid email address.");
        return;
    }
    
    if(!username){
      setError("Please enter username");
      return;
    }

    if(!password){
        setError("Please enter the password");
        return;
    }
    
    setError("");
  }

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-5xl font-semibold flex justify-center">Create your account</h3>
        <p className="text-xl flex justify-center mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>
        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <AuthInput 
              value={fullName}
              onChange={({target}) => setFullName(target.value)}
              label="Full Name"
              placeholder="Ninja"
              type="text"
            />
            <AuthInput
             value={email}
             onChange={({target}) => setEmail(target.value)}
             label="Email Address"
             placeholder="pro@example.com"
             type="text"
             />
             <AuthInput
             value={username}
             onChange={({target}) => setUsername(target.value)}
             label="Username"
             placeholder="@"
             type="text"
             />
             <AuthInput
              value={password}
             onChange ={({target}) => setPassword(target.value)}
             label="Password"
             placeholder="12345678"
             type="password"
             />
          </div>
          {error && <p className="text-xs pb-2.5">{error}</p>}

          <button type="submit" className="w-full text-xl text-white bg-black shadow-md p-[5px] rounded-md relative group">
              <span className="group-hover:hidden">Create Account</span>
              <span className="hidden group-hover:inline">-&gt;</span>
          </button>

          <p className="text-[15px] mt-3 flex justify-center">
              Already have an account?{" "}
              <Link className="font-medium underline text-[15px] ml-2" to="/login">
                  Login
              </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUpForm