import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import { Play } from "lucide-react";

/**
 * Home page JSX
 */
class Home extends React.Component {
    render() {
        return(
            <>
            <HomeCarousel/>
            {/* Content block 1 */}
            <div className="hero bg-base-200 min-h-full">
                <div className="hero-content text-center">
                    <div className="max-w-2xl py-10">
                        <h1 className="text-5xl font-bold">Welcome to Megha Gas&reg;</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">
                            <Play strokeWidth={2} />
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* Content block 2 */}
            <div
                className="hero min-h-full"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Content block 3 */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary"><Play strokeWidth={1} />Get Started</button>
                    </div>
                </div>
            </div>
            {/* Content block 4 */}
            <div className="carousel">
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    alt="Burger" />
                </div>
            </div>
            </>
        );
    }
}

export default Home;