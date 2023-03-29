import React, { useState } from "react";


const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setName("");
      setEmail("");
      setPassword("");
      alert("Please fill in all fields");
    } else {
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
      setIsRegistered(true);
      alert("Registration successful! You can now login.");

      setTimeout(() => {
        history.push("/pages/Login");
      }, 2000);
    }
  };

  const handleAutofill = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
<div style={{textAlign: "center", maxWidth: "500px", margin: "0 auto", padding: "2rem"}}>
  <h1 style={{marginBottom: "20px", fontSize: "2em"}}>Register</h1>
  {!isRegistered ?
    <form onSubmit={handleSubmit} onReset={handleAutofill}>
      <div style={{marginBottom: "20px"}}>
        <label htmlFor="name" style={{display: "block", fontSize: "1.2em", marginBottom: "5px"}}>Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}
          style={{width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", fontSize: "1.2em"}}/>
      </div>
      <div style={{marginBottom: "20px"}}>
        <label htmlFor="email" style={{display: "block", fontSize: "1.2em", marginBottom: "5px"}}>Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}
          style={{width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", fontSize: "1.2em"}}/>
      </div>
      <div style={{marginBottom: "20px"}}>
        <label htmlFor="password" style={{display: "block", fontSize: "1.2em", marginBottom: "5px"}}>Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}
          style={{width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", fontSize: "1.2em"}}/>
      </div>
      <button type="submit" style={{backgroundColor: "#0062cc", color: "white", padding: "12px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "1.2em", width: "100%"}}>Submit</button>
      <button type="reset" style={{backgroundColor: "#ccc", color: "white", padding: "12px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "1.2em", width: "100%", marginTop: "10px"}}>Reset</button>
    </form>
  :
    <p>Thanks for registering, {name}!</p>
  }
</div>
  );
}

export default Register;