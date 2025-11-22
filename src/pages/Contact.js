import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [data, setData] = useState([
    { name: "Zaydan", email: "zaydan.liftlab@gmail.com", phone: "88/242255" },
    { name: "Yorgo", email: "yorgo.liftlab@gmail.com", phone: "77/567577" },
    { name: "Layla", email: "layla@liftlab.com", phone: "66/123456" },
    { name: "Rami", email: "rami@liftlab.com", phone: "55/987654" },
    { name: "Nour", email: "nour@liftlab.com", phone: "44/112233" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="sort-buttons">
        <button onClick={() => setSortOrder("asc")}>Sort Asc</button>
        <button onClick={() => setSortOrder("desc")}>Sort Desc</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
