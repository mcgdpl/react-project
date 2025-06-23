import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

/**
 * Get users and display
 */
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Fetch data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUsers(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error('Error in fetch:', err);
            setLoading(false);
        })
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        try {
            const resp = await axios.post('http://10.99.0.10/cgd/Polaris/smartPayment/response', formData, {
                headers: {
                    Authorization: `Basic ${btoa('smartuser:piBlaPlrs2025')}`,
                },
            });
            console.log(resp);
        }
        catch(err) {
            console.error(err);
        }
    }

    if(loading) return (<div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>);

    return(
        <div className="p-3 bg-white">
            <Breadcrumb title="Users" />
            <div>
                {users && (
                    <table className="table border">
                        <thead>
                            <tr className="bg-base-200 text-sm">
                                <th className="border" width="1%" nowrap>S.No</th>
                                <th className="border">Name</th>
                                <th className="border">Email</th>
                                <th className="border">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="border">{index + 1}</td>
                                    <td className="border">{user.name}</td>
                                    <td className="border">{user.email}</td>
                                    <td className="border">{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="border border-gray-500 m-2 p-2">
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" className="border rounded px-1" value={formData.name} onChange={handleInputChange} />
                    <label>Email:</label>
                    <input type="text" name="email" className="border rounded px-1" value={formData.email} onChange={handleInputChange} />
                    <label>Phone:</label>
                    <input type="text" name="phone" className="border rounded px-1" value={formData.phone} onChange={handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Users;