import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetUser from "./pages/GetUser";
import CreateUser from "./pages/CreateUser";
import DelUser from "./pages/DelUser";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                    <Link to="/get-user" className="px-4 py-2 bg-blue-500 text-white rounded">Get Users</Link>
                    <Link to="/create-user" className="px-4 py-2 bg-green-500 text-white rounded">Create User</Link>
                    <Link to="/del-user" className="px-4 py-2 bg-red-500 text-white rounded">Delete User</Link>
                </div>

                {/* Page Routes */}
                <Routes>
                    <Route path="/get-user" element={<GetUser />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/del-user" element={<DelUser />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
