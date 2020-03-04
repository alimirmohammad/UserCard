import React, { useState, useEffect } from "react";
import styles from "./UserSelfCard.module.scss";
import { FaRegUser, FaMapMarkedAlt } from "react-icons/fa";
import { GoMail, GoCalendar } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

const UserSelfCard = ({ user }) => {
  const [textStatus, setTExtStatus] = useState("name");
  
  const [textContent, setTextContent] = useState({
    header: "Hi, My name is",
    content: `${user.name.first} ${user.name.last}`
  });

  useEffect(() => handleHover(textStatus), [user]);

  const handleHover = (status) => {
    setTExtStatus(status);

    switch (status) {
      case "name":
        setTextContent({
          header : "Hi, My name is",
          content : `${user.name.first} ${user.name.last}`
        });
        break;

      case "email":
        setTextContent({
          header : "My email address is",
          content : user.email
        });
        break;

      case "birthday":
        setTextContent({
          header : "My birthday is",
          content : user.dob.date.slice(0, 10).replace(/-/g,'/')
        });
        break;

      case "address":
        setTextContent({
          header : "My address is",
          content : user.location.city
        });
        break;

      case "phone":
        setTextContent({
          header : "My phone number is",
          content : user.phone
        });
        break;

      default:
        setTextContent({
          header : "My password is",
          content : user.login.password
        });
        break;
    }
  }

  return (
    <>
      <div className={styles.card}>
        <div>
          <img className={styles.image} src={user.picture.large} />
        </div>
        <div className={styles.detail}>
          <p className={styles.header}>{textContent.header}</p>
          <p className={styles.content}>{textContent.content}</p>
        </div>
        <ul className={styles.HoverItems}>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("name")}><FaRegUser /></li>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("email")}><GoMail /></li>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("birthday")}><GoCalendar /></li>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("address")}><FaMapMarkedAlt /></li>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("phone")}><FiPhone /></li>
          <li className={styles.HoverItem} onMouseOver={() => handleHover("password")}><AiOutlineLock /></li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default UserSelfCard;
