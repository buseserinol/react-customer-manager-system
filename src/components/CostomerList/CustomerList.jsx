import React from "react";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

const customerData = [
  {
    id: "1",
    customerName: "Buse",
  },
  {
    id: "2",
    customerName: "Caner",
  },
  {
    id: "3",
    customerName: "Birkan",
  },
  {
    id: "1",
    customerName: "Çiğdem",
  },
];

const CustomerList = () => {
  return (
    <ul className="customer-list">
      {customerData.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} />
      ))}
    </ul>
  );
};

export default CustomerList;
