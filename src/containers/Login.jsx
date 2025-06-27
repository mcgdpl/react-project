import { Key, LogInIcon, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Login
 */
function Login() {
    const [formData, setFormData] = useState({username: "", password: ""});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    // Validation
    const validate = () => {
        const valErr = {};
        if(!formData.username || formData.username.length === 0) {
            valErr.username = 'Username is required!';
        }
        if(!formData.password) {
            valErr.password = 'Password is required!';
        }
        return valErr;
    }
    
    // Handle login
    const handleLogIn = (e) => {
        e.preventDefault();
        // Check validation
        const validationErrors = validate();
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            // Check login
            // Create login in Local storage
            localStorage.setItem('authToken', 'fake-token');
            // Redirect to home
            navigate('/');
        }
    }
    
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 hidden md:block">
                <div className="hero min-h-screen">
                    <div className="hero-content text-center">
                        <img src="https://www.shutterstock.com/image-vector/gas-oil-pipeline-inspection-maintenance-600nw-2258229957.jpg" alt="Login-banner" />
                    </div>
                </div>
            </div>
            <div className="h-screen bg-green-100">
                <div className="hero min-h-screen">
                    <div className="">
                        <h2 className="text-3xl sm:text-2xl lg:text-3xl">Welcome To Megha Gas!</h2>
                        <h3 className="text-left">Please sign-in to your account.</h3>
                        <div className="mt-7">
                            <form onSubmit={handleLogIn}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <UserRound />
                                    <input type="text" className="w-full" name="username" placeholder="Username" value={ formData.username } onChange={handleChange} />
                                </label>
                                {errors.username && (<div className="text-right text-red-600 text-xs">{errors.username}</div>)}
                                <label className="input input-bordered flex items-center gap-2 mt-5">
                                    <Key />
                                    <input type="password" className="w-full" name="password" placeholder="Password" value={ formData.password } onChange={handleChange} />
                                </label>
                                {errors.password && (<div className="text-right text-red-600 text-xs">{errors.password}</div>)}
                                <button className="btn btn-primary w-full text-white mt-5" type="sumit">
                                    <LogInIcon />Log in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;