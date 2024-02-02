import { useReducer } from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE INPUT":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "TOGGLE":
        return {
          ...state,
          isMail: !state.isMail,
        };
      case "TOGGLE-2":
        return {
          ...state,
          isPayroll: !state.isPayroll,
        };
      case "TOGGLE-3":
        return {
          ...state,
          isSelfService: !state.isSelfService,
        };
      case "CLEAR":
        return {
          [action.field]: "",
        };
      default:
        return state;
    }
  };

  const initials = {
    username: "",
    password: "",
    city: "",
    webserver: "",
    role: "",
    isMail: false,
    isPayroll: false,
    isSelfService: false,
  };

  const [inputs, dispatch] = useReducer(reducer, initials);

  const errors = () => {
    let uName = document.querySelector("#username").value;
    let pass = document.querySelector("#password").value;

    const passed = /^(?=.*\d)[A-Za-z0-9]{8,}$/;
    let password = passed.test(pass);

    if (uName === "" || uName === " ") {
      document.querySelector("#e1").innerHTML = "Username is required !";
    } else {
      document.querySelector("#e1").innerHTML = "";
    }

    if (pass === "" || pass === " ") {
      document.querySelector("#e2").innerHTML = "Password is required !";
    } else if (!password) {
      document.querySelector("#e2").innerHTML =
        "Password must have 8 characters and at least 1 digit";
    } else {
      document.querySelector("#e2").innerHTML = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "HANDLE INPUT",
      field: e.target.name,
      value: e.target.value,
    });
    errors();
    if (
      inputs.username &&
      inputs.password &&
      inputs.city &&
      inputs.webserver &&
      inputs.role
    ) {
      console.log(inputs);
      document.querySelector("#success").innerHTML =
        "Form submitted successfully!!";
      dispatch({
        type: "CLEAR",
      });
    }
  };

  return (
    <>
      <div className="form-container">
        <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>Form</h2>
        <form action="" style={{ padding: "20px" }} onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="username">Username : </label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={inputs.username || ""}
                  onChange={(e) => handleSubmit(e)}
                />
                <span id="e1"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password : </label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={inputs.password || ""}
                  onChange={(e) => handleSubmit(e)}
                />
                <span id="e2"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="city">City of Employment : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={inputs.city || ""}
                  onChange={(e) => handleSubmit(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="webserver">Web Server : </label>
              </td>
              <td>
                <select
                  name="webserver"
                  id="webserver"
                  value={inputs.webserver || ""}
                  onChange={(e) => handleSubmit(e)}
                >
                  <option value="apache">Apache</option>
                  <option value="nginx">Nginx</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="role">PLease Specify your role : </label>
              </td>
              <td>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={inputs.role === "admin"}
                  onChange={(e) => handleSubmit(e)}
                />
                Admin
                <br />
                <input
                  type="radio"
                  name="role"
                  value="engineer"
                  checked={inputs.role === "engineer"}
                  onChange={(e) => handleSubmit(e)}
                />
                Engineer <br />
                <input
                  type="radio"
                  name="role"
                  value="manager"
                  checked={inputs.role === "manager"}
                  onChange={(e) => handleSubmit(e)}
                />
                Manager <br />
                <input
                  type="radio"
                  name="role"
                  value="guest"
                  checked={inputs.role === "guest"}
                  onChange={(e) => handleSubmit(e)}
                />
                Guest
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="sign">Single sign on the following : </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  value="mail"
                  checked={inputs.isMail}
                  onChange={() => dispatch({ type: "TOGGLE" })}
                />
                Mail <br />
                <input
                  type="checkbox"
                  value="payroll"
                  checked={inputs.isPayroll}
                  onChange={() => dispatch({ type: "TOGGLE-2" })}
                />
                Payroll <br />
                <input
                  type="checkbox"
                  value="self-service"
                  checked={inputs.isSelfService}
                  onChange={() => dispatch({ type: "TOGGLE-3" })}
                />
                Self-service
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <button type="submit" value="submit">
                  Submit
                </button>
              </td>
              <td>
                <button
                  type="reset"
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  Reset
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p id="success"></p>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}
