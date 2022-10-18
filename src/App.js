// import { useForm } from "react-hook-form";
// import { useState } from "react";
import Form from "./Form";

const App = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   phone: "",
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // console.log(errors);
  // const handleFormData = (e) => {
  //   const { name, value } = e.target;
  //   const getData = { ...formData, [name]: value };
  //   setFormData(getData);
  // };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   if (!formData.password === formData.confirmPassword) {
  //     alert("Password not matched!");
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, password, confirmPassword, phone } = formData;
  //   if (!name || !email || !password || !confirmPassword || !phone) {
  //     alert("Fill all the fields!");
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     alert("password and confirm password are not same!");
  //     return;
  //   }

  // console.log("hhhjhjhjh");
  //};

  return (
    <>
      <Form />
    </>
    // <div className="ui three column centered grid">
    //   <div className="column">
    //     <form action="" onSubmit={handleSubmit(onSubmit)} className="ui form">
    /* <label htmlFor="name">UserName</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            name="name"
            onChange={handleFormData}
          /> */

    /* <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
          />
          <br />
          <br />
          <label htmlFor="confirmPassword">ConfirmPassword</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFormData}
          />
          <br />
          <br />
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormData}
          />
          <br />
          <br /> */
    /* <input type="submit" className="ui button" /> */
    //     </form>
    //   </div>
    // </div>
  );
};
export default App;
//-------------------------------------------
// const App = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 5,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="app">

//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
