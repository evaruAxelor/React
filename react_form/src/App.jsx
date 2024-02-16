import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"; 
import "./index.css";
import { Input } from "./Components/Input";
import Button from "./Components/Button";
import Option from "./Components/Option";

const SERVERS = ["apache", "oracle", "nginx"];

function App() {
  
  const formRef = useRef();
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const [success,setSuccess] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^(?=.*\d)[A-Za-z0-9]{8,}$/;
    const { username, password } = credentials;
    if (!username) {
      setErrors((error) => ({ ...error, username: "Username is required !" }));
    }
    if (!password) {
      return setErrors((error) => ({
        ...error,
        password: "Password is required !",
      }));
    }
    if (!regex.test(password)) {
      setErrors({
        ...errors,
        password: "Password must have 8 characters & at least 1 digit",
      });
    } else {
      setErrors({ ...errors, password: "" });
      setSuccess("Form submitted successfully !!")
      formRef.current.reset()
    }
    
  };
  
  const handleReset =()=>{
    formRef.current.reset()
  }

  useEffect(()=>{
    setErrors({});
  },[credentials])

  return (
    <div className="App">
        <h2>Form</h2>
        <p id="success">{success}</p>
      <div className="container">
        <form action="" method="post" onSubmit={handleSubmit} ref={formRef}>
          <div className="items">
            <Input
              label="Username"
              type="text"
              id="username"
              name="username"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              errors={errors}
            />
          </div>

          <div className="items">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              errors={errors}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>

          <div className="items">
            <Input
              label="City of Employment"
              type="text"
              id="city"
              name="city"
              errors={errors}
            />
          </div>

          <div className="items">
            <label>Web server: </label>
            <select name="server">
              <option value="server">--Choose a server--</option>
              {SERVERS.map((server,index) => (
                <Option key={index} >{server}</Option>
              ))}
            </select>
          </div>

          <div className="check">
            <label>Please specify your role: </label>
            <div className="box">
              <div className="items">
                <input type="radio" name="role" id="adm" /> &nbsp;
                <label>Admin</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="eng" /> &nbsp;
                <label>Engineer</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="Manager" /> &nbsp;
                <label>Manager</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="guest" /> &nbsp;
                <label>Guest</label>
              </div>
            </div>
          </div>
          <div className="check">
            <label htmlFor="sign-on"> Single Sign-on to the following: </label>
            <div className="box">
              <div className="items">
                <input type="checkbox" name="admin" id="admin" /> &nbsp;
                <label htmlFor="admin">Admin</label>
              </div>
              <div className="items">
                <input type="checkbox" name="Payroll" id="Payroll" /> &nbsp;
                <label htmlFor="Payroll">Payroll</label>
              </div>
              <div className="items">
                <input type="checkbox" name="Self-service" id="Self-service" /> &nbsp;
                <label htmlFor="Self-service">Self-service</label>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button type="submit">Submit</Button>
            <input type="button" value="Reset" className="button" onClick={handleReset}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;