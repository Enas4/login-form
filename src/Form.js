import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_repeat: "",
    phone: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    if (!formData.password === formData.confirmPassword) {
      alert("Password not matched!");
    }
  };

  return (
    <div className="ui three column centered grid">
      <div className="column">
        <form action="" onSubmit={handleSubmit(onSubmit)} className="ui form">
          {/* //------------------------------------------------------ */}
          <label>User Name :</label>
          <input
            placeholder="Enter user name"
            {...register("username", {
              required: "it is required",
            })}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username.message}</span>
          )}
          <br />
          {/* //------------------------------------------------------ */}
          <label>Email :</label>
          <input
            placeholder="Enter email"
            {...register("email", {
              required: "Email required",
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
          <br />
          {/* //------------------------------------------------------ */}
          <label>Contact :</label>
          <input
            placeholder="Enter contact no"
            type="number"
            {...register("contact", {
              required: "Contact necessary",
            })}
          />
          {errors.contact && (
            <span style={{ color: "red" }}>{errors.contact.message}</span>
          )}
          <br />
          {/* //------------------------------------------------------ */}
          <label>Enter password :</label>
          <input
            type="password"
            ref={register("password", {
              required:
                "password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
            })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
          {/* //------------------------------------------------------ */}
          <label>Repeat password</label>
          <input
            name="password_repeat"
            type="password"
            ref={register("password_repeat", {
              validate: (value) =>
                value === formData.password.current ||
                "The passwords do not match",
            })}
          />
          {errors.password_repeat && (
            <span>{errors.password_repeat.message}</span>
          )}

          {/* //------------------------------------------------------ */}
          {/* <label>Password :</label>
          <input
            placeholder="Enter Password"
            type="password"
            {...register("password", {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
              required:
                "password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
            })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
          <br /> */}
          {/* //------------------------------------------------------ */}
          {/* <label>Confirm Password :</label>
          <input
            placeholder="Enter confirm password"
            type="password"
            {...register("confirmPassword", {
              required: "Password not matched",
            })}
          />
          {!formData.password === formData.confirmPassword ? (
            <span>error found</span>
          ) : (
            formData.confirmPassword
          )}
          <br />
          <br /> */}
          {/* //------------------------------------------------------ */}

          <input type="submit" className="ui button" />
        </form>
      </div>
    </div>
  );
};
export default Form;
//-------------------------------------------

// import React, { useRef } from "react";
// import ReactDOM from "react-dom";
// import useForm from "react-hook-form";

// import "./styles.css";

// function App() {
//   const { register, errors, handleSubmit, watch } = useForm({});
//   const password = useRef({});
//   password.current = watch("password", "");
//   const onSubmit = async (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <label>Password</label>
//       <input
//         name="password"
//         type="password"
//         ref={register({
//           required: "You must specify a password",
//           minLength: {
//             value: 8,
//             message: "Password must have at least 8 characters",
//           },
//         })}
//       />
//       {errors.password && <p>{errors.password.message}</p>}

//       <label>Repeat password</label>
//       <input
//         name="password_repeat"
//         type="password"
//         ref={register({
//           validate: (value) =>
//             value === password.current || "The passwords do not match",
//         })}
//       />
//       {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

//       <input type="submit" onClick={handleSubmit(onSubmit)} />
//     </form>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
