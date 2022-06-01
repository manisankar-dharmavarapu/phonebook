import React, { useState } from "react";
import "./PhoneBook.css";

const PhoneBook = () => {
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const onUserInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onAddContact = (e) => {
    e.preventDefault();
    if(userInfo.firstName==='' || userInfo.lastName === '' || userInfo.phoneNumber === ''){
        alert('fill all the details')
    }else{
        setUserData([...userData, userInfo]);
        setUserInfo({
          firstName: "",
          lastName: "",
          phoneNumber: "",
        });
    }
  };

  const onDeleteContact = (firstName) => {
    const res = userData.filter((user) => user.firstName !== firstName);
    setUserData(res);
  };

  return (
    <div>
      <h1 className="tittle">PhoneBook</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
        {userData.map((user) => {
          return (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button onClick={() => onDeleteContact(user.firstName)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <form className="form-container" onSubmit={(e) => onAddContact(e)}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstName"
          className="custom-input"
          value={userInfo.firstName}
          onChange={(e) => onUserInput(e)}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastName"
          className="custom-input"
          value={userInfo.lastName}
          onChange={(e) => onUserInput(e)}
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="number"
          id="phonenumber"
          name="phoneNumber"
          className="custom-input"
          value={userInfo.phoneNumber}
          onChange={(e) => onUserInput(e)}
        />
        <button type="submit" className="add-contact-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default PhoneBook;
