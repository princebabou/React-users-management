import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function Form() {
  const [formData, setFormData] = useState({
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
    terms: false,
  });

  console.log(formData);

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData
      );
      setUsers([...users, response.data]);
      setFormData({
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
        terms: false,
      });
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 left-section">
            <h3 className="card-title">General Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <select
                  className="form-select"
                  id="title"
                  value={formData.title}
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
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
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
                  value={formData.position}
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
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
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
                  placeholder="Business Arena"
                  value={formData.businessArena}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="employees" className="form-label">
                  Employees
                </label>
                <select
                  className="form-select"
                  id="employees"
                  value={formData.employees}
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
            </form>
          </div>
          <div className="col-md-6 right-section">
            <h3 className="card-title">Contact Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="street" className="form-label">
                  Street + Nr
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  placeholder="Street + Nr"
                  value={formData.street}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="additionalInfo" className="form-label">
                  Additional Information
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="additionalInfo"
                  placeholder="Additional Information"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="zipCode" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="place" className="form-label">
                    Place
                  </label>
                  <select
                    className="form-select"
                    id="place"
                    value={formData.place}
                    onChange={handleChange}
                  >
                    <option>Place</option>
                    <option>Rwanda</option>
                    <option>Uganda</option>
                    <option>DRC</option>
                    <option>South Africa</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Rwanda</option>
                  <option>Uganda</option>
                  <option>DRC</option>
                  <option>South Africa</option>
                </select>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="code" className="form-label">
                    Code +
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Code +"
                    value={formData.code}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="terms">
                  I do accept the{" "}
                  <a href="#" className="text-white text-decoration-underline">
                    Terms and Conditions
                  </a>{" "}
                  of your site.
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary w-50 rounded-5"
              >
                Register Badge
              </button>

              <Link to={`/list`} className="btn btn-primary w-40 rounded-5">
                View Users
              </Link>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
