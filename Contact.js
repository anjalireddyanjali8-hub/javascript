import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Contact Our Team</h1>

        <p>
          Feel free to reach out to our support team for any questions or help.
        </p>

        <div className="contact-cards">
          <div className="card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.BVqRl5JkZkoe4SuUU2ENggHaHa?pid=Api&P=0&h=180"
              alt="Support Manager"
            />
            <h3>Ravi Kumar Reddy</h3>
            <p>Support Manager</p>
            <p>Email: ravi@onlineshop.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="Customer Executive"
            />
            <h3>Dharithri</h3>
            <p>Customer Executive</p>
            <p>Email: dharithri@onlineshop.com</p>
            <p>Phone: +91 91234 56789</p>
          </div>

          <div className="card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.lg2cHJKM6-YQVdw7C8q4owHaHa?pid=Api&P=0&h=180"
              alt="Technical Support"
            />
            <h3>Karthik Reddy</h3>
            <p>Technical Support</p>
            <p>Email: Karthik Reddy@onlineshop.com</p>
            <p>Phone: +91 99887 66554</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setUsers(response.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Website</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersTable;
