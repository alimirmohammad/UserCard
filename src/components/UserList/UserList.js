import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import styles from './UserList.module.scss';
import loader from '../../assets/svg-loaders/puff.svg'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    if (link) {
      fetch(link)
        .then(res => res.json())
        .then(res => {
          setUsers([...users, res.results[0]]);
          setStatus(false);
          setLoading(false);
        });
    }
  }, [link]);

  const handleLink = myLink => {
    setLoading(true);
    setLink("");
    setTimeout(() => {
      setLink(myLink);
    }, 1000);
  };

  const cardLists = users.map((user, index) => <UserCard key={index} myuser={user} />);
  const svgLoader = <img className={styles.Loader} src={loader} alt="loading" />;

  return (
    <>
      <div>
        {loading && svgLoader}
        {!status && cardLists}
        <button className={styles.NewBtn} onClick={() => handleLink("https://api.randomuser.me/")}>
          Add Card
        </button>
      </div>
    </>
  );
};

export default UserList;
