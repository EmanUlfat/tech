import React, { useState } from "react";
import axios from "axios";

const CreateUser: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7273/api/User/CreateUser", {
                name,
                email
            });
            console.log("User Created:", response.data);
            setMessage("User successfully created!");
        } catch (error) {
            console.error("Error Creating User:", error);
            setMessage("Failed to create user");
        }
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-xl font-bold mb-4">Create User</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
                    Create User
                </button>
            </form>
            {message && <p className="mt-2 text-blue-500">{message}</p>}
        </div>
    );
};

export default CreateUser;
