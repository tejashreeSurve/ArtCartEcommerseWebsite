import { Form, Formik } from "formik";
import React, { useState } from "react";
import { LoginModalLayout } from "../../layout/LoginModalLayout";
import { RegisterSchema } from "../../types/auth.types";
import * as yup from "yup";
import "yup-phone";
import { Box, IconButton } from "@mui/material";
import { FormInput } from "../../components/FormInput";
import {
  MailOutlined,
  VisibilityOutlined,
  PersonOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";
import { FontStyleTypo } from "../../components/StyledComponents";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { ROUTES } from "../../constants/routes";
import { useRouter } from "next/router";

const initialValues: RegisterSchema = {
  username: "",
  mobileNo: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required().label("Username"),
  mobileNo: yup.string().phone().required().label("Mobile No"),
  email: yup.string().required().label("Email"),
  password: yup.string().required().min(6).label("Password"),
  confirmPassword: yup.string().required().min(6).label("Confirm Password"),
});
function Register() {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const onSubmit = (values: RegisterSchema) => {
    console.log(values);
  };

  const handleClose = () => {
    router.push(ROUTES.LOGIN);
  };
  return (
    <LoginModalLayout
      title="Welcome"
      subTitle="Create New Account to Sign in"
      handleClose={handleClose}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, touched }) => (
          <Form>
            <Box mb={2} mt={1}>
              <FormInput
                label=""
                type="text"
                name="username"
                placeholder="Jhon Shane"
                onChange={handleChange}
                value={values.username}
                error={touched.username && errors.username && errors.username}
                endAndornment={<PersonOutlined sx={{ mr: 1 }} />}
              />
            </Box>
            <Box mb={2}>
              <FormInput
                label=""
                type="text"
                name="mobileNo"
                placeholder="9884388787"
                onChange={handleChange}
                value={values.mobileNo}
                error={touched.mobileNo && errors.mobileNo && errors.mobileNo}
                endAndornment={<LocalPhoneOutlined sx={{ mr: 1 }} />}
              />
            </Box>
            <Box mb={2}>
              <FormInput
                label=""
                type="text"
                name="email"
                placeholder="jhon@gmail.com"
                onChange={handleChange}
                value={values.email}
                error={touched.email && errors.email && errors.email}
                endAndornment={<MailOutlined sx={{ mr: 1 }} />}
              />
            </Box>
            <Box mb={2}>
              <FormInput
                label=""
                name="password"
                type={passwordVisibility ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                error={touched.password && errors.password && errors.password}
                value={values.password}
                endAndornment={
                  <IconButton onClick={() => setPasswordVisibility((p) => !p)}>
                    <VisibilityOutlined />
                  </IconButton>
                }
              />
            </Box>
            <Box mb={3}>
              <FormInput
                label=""
                name="confirmPassword"
                type={confirmPasswordVisibility ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={handleChange}
                error={
                  touched.confirmPassword &&
                  errors.confirmPassword &&
                  errors.confirmPassword
                }
                value={values.confirmPassword}
                endAndornment={
                  <IconButton
                    onClick={() => setConfirmPasswordVisibility((p) => !p)}
                  >
                    <VisibilityOutlined />
                  </IconButton>
                }
              />
            </Box>
            <Box display="inline">
              <Button variant="contained" fullWidth type="submit">
                Sign-Up
              </Button>
              <FontStyleTypo>
                Already have an account?
                <Link href={ROUTES.LOGIN} sx={{ ml: 2 }}>
                  Login
                </Link>
              </FontStyleTypo>
            </Box>
          </Form>
        )}
      </Formik>
    </LoginModalLayout>
  );
}

export default Register;
