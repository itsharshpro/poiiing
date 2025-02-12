import AuthLayout from "../../components/layout/AuthLayout"
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import AuthInput from "../../components/input/AuthInput"
import {validateEmail} from "../../utils/helper"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError("Please enter a valid email address.");
            return;
        }

        if(!password){
            setError("Please enter the password");
            return;
        }

        setError("");
    };
    
    return (
        <div className="">
            <AuthLayout>
                <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                    <h3 className="flex justify-center text-5xl font-semibold text-black">Welcome Baby !</h3>
                    <p className="flex justify-center text-xl text-black mt-[5px] mb-6">
                        Please enter your details to login
                    </p>
                    <form onSubmit={handleLogin}>
                       <AuthInput
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="pro@example.com"
                        type="text"
                        />

                        <AuthInput
                        value={password}
                        onChange ={({target}) => setPassword(target.value)}
                        label="Password"
                        placeholder="12345678"
                        type="password"
                        />

                        {error && <p className="text-xs pb-2.5">{error}</p>}

                        <button type="submit" className="w-full text-xl text-white bg-black shadow-md p-[5px] rounded-md relative group">
                            <span className="group-hover:hidden">Login</span>
                            <span className="hidden group-hover:inline">-&gt;</span>
                        </button>

                        <p className="text-[15px] mt-3 flex justify-center">
                            Don&apos;t have an account?{" "}
                            <Link className="font-medium underline text-[15px] ml-2" to="/signup">
                                SignUp
                            </Link>
                        </p>
                    </form>
                </div>
            </AuthLayout>
        </div>
    )
}

export default LoginForm