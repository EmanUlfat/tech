import React, { useState } from "react";
import axios from "axios";

const DelUser: React.FC = () => {
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://localhost:7273/api/User/DelteUser/03`);
            console.log("User Deleted:", response.data);
            setMessage("User successfully deleted!");
        } catch (error) {
            console.error("Error Deleting User:", error);
            setMessage("Failed to delete user");
        }
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-xl font-bold mb-4">Delete User</h1>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            <button onClick={handleDelete} className="w-full bg-red-500 text-white py-2 mt-4 rounded">
                Delete User
            </button>
            {message && <p className="mt-2 text-blue-500">{message}</p>}
        </div>
    );
};

export default DelUser;
