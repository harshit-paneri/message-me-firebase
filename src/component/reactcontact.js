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
    const { name, email, mobile, message } = user;

    if (name && email && mobile && message) {
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

      if (res) {
        setUser({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        alert("Data Stored Successfuly");
      }
    } else {
      alert("Please fill all the Data");
    }
  };
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
      <div className="all row">
        <h1 className="head col-8">Message from Techspeed</h1>

        <form action="" method="POST" className="form col-6">
          <span className="span">Message Me</span>
          <div className="name">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              className="inp"
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
      </div>
    </>
  );
};

export default Reactcontact;
