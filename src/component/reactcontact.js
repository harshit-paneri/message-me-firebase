import React ,{useState} from "react";

const Reactcontact = () => {
    const [user,setUser] = useState({
        name : "",
        email : "",
        mobile : "",
        message : "",
    });

    const getUserData = () => {}
  return (
    <>
      <h1>Message from Techspeed</h1>
      <form action="">
        <span>Message Me</span>
        <div>
        <span>Your Name</span>
        <input type="text" name="name" value={user.name} onChange={getUserData} id="" />
        </div>

        <div>
        <span>Your Email</span>
        <input type="text" name="email" value={user.name} onChange={getUserData} id="" />
        </div>

        <div>
        <span>Your Mobile</span>
        <input type="text" name="mobile" value={user.name} onChange={getUserData} id="" />
        </div>

        <div>
        <span>Your Message</span>
        <textarea name="message" value={user.name} onChange={getUserData} id="" />
        </div>
      </form>
    </>
  );
};

export default Reactcontact;
