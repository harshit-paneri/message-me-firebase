import React ,{useState} from "react";

const Reactcontact = () => {
    const [user,setUser] = useState({
        name : "",
        email : "",
        mobile : "",
        message : "",
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({...user , [name] : value});
    };
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
        <input type="text" name="email" value={user.email} onChange={getUserData} id="" />
        </div>

        <div>
        <span>Your Mobile</span>
        <input type="text" name="mobile" value={user.mobile} onChange={getUserData} id="" />
        </div>

        <div>
        <span>Your Message</span>
        <textarea name="message" value={user.message} onChange={getUserData} id="" />
        </div>
      </form>
    </>
  );
};

export default Reactcontact;
