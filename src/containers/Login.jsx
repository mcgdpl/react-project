import { Key, LogInIcon, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Login
 */
function Login() {
    const navigate = useNavigate();
    
    // Handle login
    const handleLogIn = (e) => {
        e.preventDefault();
        // Check login
        // Create login in Local storage
        localStorage.setItem('authToken', 'fake-token');
        // Redirect to home
        navigate('/');
    }

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 hidden md:block">
                <div className="hero min-h-screen">
                    <div className="hero-content text-center">
                        <img src="https://www.shutterstock.com/image-vector/gas-oil-pipeline-inspection-maintenance-600nw-2258229957.jpg" alt="Image" />
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
                                    <input type="text" placeholder="Username" className="" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-5">
                                    <Key />
                                    <input type="password" placeholder="Password" className="" />
                                </label>
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