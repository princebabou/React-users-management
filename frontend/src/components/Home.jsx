import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers(); 
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h3 className="card-title">Registered Users</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Business Arena</th>
              <th>Employees</th>
              <th>Street</th>
              <th>Additional Info</th>
              <th>Zip Code</th>
              <th>Place</th>
              <th>Country</th>
              <th>Code</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Terms</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.title}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
                <td>{user.company}</td>
                <td>{user.businessArena}</td>
                <td>{user.employees}</td>
                <td>{user.street}</td>
                <td>{user.additionalInfo}</td>
                <td>{user.zipCode}</td>
                <td>{user.place}</td>
                <td>{user.country}</td>
                <td>{user.code}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.terms ? "Accepted" : "Not Accepted"}</td>
                <td>
                  <Link to={`/edit/${user._id}`} className="btn btn-info btn-sm">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-danger btn-sm ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
