import React, { useState } from "react";

const Reactcontact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {name,email,mobile,message} = user;

    const res = await fetch(
      "https://message-app-40387-default-rtdb.firebaseio.com/message-data.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          message,
        }),
      }
    );
  };
  return (
    <>
      <h1>Message from Techspeed</h1>
      <form action="" method="POST">
        <span>Message Me</span>
        <div>
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={getUserData}
            id=""
            required
          />
        </div>

        <div>
          <span>Your Email</span>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={getUserData}
            id=""
          />
        </div>

        <div>
          <span>Your Mobile</span>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={getUserData}
            id=""
          />
        </div>

        <div>
          <span>Your Message</span>
          <textarea
            name="message"
            value={user.message}
            onChange={getUserData}
            id=""
          />
        </div>

        <div>
          <button onClick={postData}>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Reactcontact;
