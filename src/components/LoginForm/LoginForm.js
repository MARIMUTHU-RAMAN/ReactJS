import React, { useState } from "react";
import "./LoginForm.css";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
// import LogoPath from "@assets/novac.jfif";
// import Captcha from "@components/Captcha/Captcha";
// import { useNavigate } from "react-router-dom";
// import { Email, Lock } from "@mui/icons-material";
// import { API_GET_CHITS } from "@configuration/configuration";
import LogoPath from "../../assets/novac.jfif";
import Captcha from "../Captcha/Captcha";
import { useNavigate } from "react-router-dom";
import { Email, Lock } from "@mui/icons-material";
import { API_GET_CHITS } from "../../config/configuration";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string("Enter Email")
    .email("Email Format not Correct")
    .required("Email Required"),
  password: yup
    .string("Enter Password")
    .min(5, "Minimum Length 5")
    .required("Password Required"),
});

const LoginForm = ({ registerStatus, submitStatus }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userText, setUserText] = useState("");

  function handleChange() {
    let value = true;
    registerStatus(value);
  }

  const handleSubmit = () => {
    submitStatus(true);
  };

  const Navigate = useNavigate();
  //formik object

  const formik = useFormik({
    initialValues: {
      email: "r.marimuthu@novactech.in",
      password: "Rvmbe",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(captchaText, captchaText.length, userText.length);
      if (captchaText === userText) {
        console.log(API_GET_CHITS + values.email + "/" + values.password);
        axios
          .get(API_GET_CHITS + values.email + "/" + values.password)
          .then((response) => {
            if (response.data !== "" && response.data.constructor === Object) {
              let responseData = [
                "id",
                "firstName",
                "lastName",
                "email",
                "phone",
              ];

              let indepth = ["firstName", "lastName"];

              responseData?.map((resData) => {
                if (indepth.includes(resData)) {
                  return sessionStorage.setItem(
                    resData,
                    response.data?.name?.[resData]
                  );
                } else {
                  return sessionStorage.setItem(
                    resData,
                    response.data?.[resData]
                  );
                }
              });
              handleSubmit();
              Navigate("/dashboard");
            } else {
              Navigate("/");
            }
          });
      } else {
        submitStatus(false);
      }
    },
  });

  const handleCaptchaChange = (val1, val2) => {
    setCaptchaText(val1);
    setUserText(val2);
  };

  return (
    <div>
      <img alt="logo" src={LogoPath} className="login-image" />
      <form className="form-style" onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="dense"
        ></TextField>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
          margin="dense"
        ></TextField>
        <Captcha captchaStatus={handleCaptchaChange} />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <p>
          New User? <button onClick={handleChange}>Create User Account</button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
