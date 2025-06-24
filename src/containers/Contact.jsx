import React from "react";
import Breadcrumb from "../components/Breadcrumb";

/**
 * Contact form
 */
class Contact extends React.Component {
    render() {
        return(
            <div className="p-3">
                <Breadcrumb title="Contact Us" />
                <h2>Contact form</h2>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm" />
                <div className="max-w-sm mx-auto mt-10">
                <label for="email" className="text-sm">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered input-sm"
                />
                </div>

            </div>
        );
    }
}

export default Contact;