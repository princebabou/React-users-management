import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/users/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) =>
          console.error("There was an error fetching the user!", error)
        );
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = id ? axios.put : axios.post;
    const url = id ? `/api/users/${id}` : "/api/users";

    apiCall(url, user)
      .then(() => navigate("/"))
      .catch((error) =>
        console.error("There was an error saving the user!", error)
      );
  };

  return (
    <div className="container">
      <h2>{id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <select
            className="form-select"
            id="title"
            name="title"
            value={user.title}
            onChange={handleChange}
          >
            <option>Select</option>
            <option>Mr</option>
            <option>Ms</option>
            <option>Mrs</option>
          </select>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <select
            className="form-select"
            id="position"
            name="position"
            value={user.position}
            onChange={handleChange}
          >
            <option>Select</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Designer</option>
            <option>Tester</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={user.company}
            onChange={handleChange}
            placeholder="Company"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="businessArena" className="form-label">
            Business Arena
          </label>
          <input
            type="text"
            className="form-control"
            id="businessArena"
            name="businessArena"
            value={user.businessArena}
            onChange={handleChange}
            placeholder="Business Arena"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="employees" className="form-label">
            Employees
          </label>
          <select
            className="form-select"
            id="employees"
            name="employees"
            value={user.employees}
            onChange={handleChange}
          >
            <option>Select</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>501+</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={user.street}
            onChange={handleChange}
            placeholder="Street"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="additionalInfo" className="form-label">
            Additional Info
          </label>
          <input
            type="text"
            className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            value={user.additionalInfo}
            onChange={handleChange}
            placeholder="Additional Info"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zipCode" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zipCode"
            name="zipCode"
            value={user.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            Place
          </label>
          <input
            type="text"
            className="form-control"
            id="place"
            name="place"
            value={user.place}
            onChange={handleChange}
            placeholder="Place"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={user.country}
            onChange={handleChange}
            placeholder="Country"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            value={user.code}
            onChange={handleChange}
            placeholder="Code"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
