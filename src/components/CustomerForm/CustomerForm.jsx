import React from "react";
import "./CustomerForm.css";

const CustomerForm = () => {
  return (
    <form className="customerForm">
      <input
        type="text"
        className="customerInput"
        placeholder="Add a new customer"
      />
      <button className="btn">
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
