import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiComponent: React.FC = () => {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get("https://localhost:7273/api/User/GetAllUsers")
            .then((response) => {
                console.log("Full API Response:", response.data); // Log the complete response
                console.log("Extracted Data:", response.data.data); // Log extracted data
                if (response.data && Array.isArray(response.data.data)) {
                    console.log("First Item Structure:", response.data.data[0]); // Log one item
                }
                setData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);



    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-xl font-bold mb-4">Fetched Data</h1>
            {console.log("Rendering Data:", data)}

            {data && Array.isArray(data) && data.length > 0 ? (
                data.map((user: any, index: number) => {
                    console.log("User Object:", user); // Check each object
                    return (
                        <p key={index} className="border-b py-2">
                            <strong>{user?.FirstName ?? "No Name"}</strong> {user?.LastName ?? "No LastName"}- {user?.Email ?? "No Email"}- {user?.PhoneNumber ?? "No PhoneNumber"}- {user?.Address ?? "No Address"}
                        </p>
                    );
                })
            ) : (
                <p className="text-gray-500">No data available</p>
            )}




        </div>
    );
};

export default ApiComponent;
