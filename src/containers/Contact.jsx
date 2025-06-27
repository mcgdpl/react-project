import React from "react";
import Breadcrumb from "../components/Breadcrumb";

/**
 * Contact form
 */
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // this.name
        const {name, value } = e.target;
        this.setState((prev) => ({...prev, [name]:value}));
    }

    // Submit
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        
    }

    render() {
        return(
            <div className="p-3">
                <Breadcrumb title="Contact Us" />
                <h2>Contact form</h2>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" placeholder="Enter your name" className="input input-bordered input-sm" name="name" onChange={this.handleChange} value={this.state.name} /><br/>
                    Email: <input type="text" placeholder="Enter your email" className="input input-bordered input-sm" name="email" onChange={this.handleChange} value={this.state.email} /><br/>
                    Phone: <input type="text" placeholder="Enter your phone" className="input input-bordered input-sm" name="phone" onChange={this.handleChange} value={this.state.phone} /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;