import { Form, Formik } from "formik";
import React from "react";
import { LoginModalLayout } from "../../layout/LoginModalLayout";
import { ForgotPasswordSchema } from "../../types/auth.types";
import * as yup from "yup";
import { Box } from "@mui/material";
import { MailOutlined } from "@mui/icons-material";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { ROUTES } from "../../constants/routes";
import { useRouter } from "next/router";

const initialValues: ForgotPasswordSchema = {
  email: "",
};

const validationSchema = {
  email: yup.string().required().label("Email"),
};

const ForgotPassword = () => {
  const router = useRouter();

  const onSubmit = (values: ForgotPasswordSchema) => {
    console.log(values);
  };

  const handleClose = () => {
    router.push(ROUTES.LOGIN);
  };
  return (
    <LoginModalLayout
      title="Forgot Password"
      subTitle="Enter your email address for password reset instructions."
      handleClose={handleClose}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Box mb={2} mt={3}>
              <FormInput
                label=""
                type="text"
                name="email"
                placeholder="jhon@google.com"
                onChange={handleChange}
                value={values.email}
                error={touched.email && errors.email && errors.email}
                endAndornment={<MailOutlined sx={{ mr: 1 }} />}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button variant="contained" fullWidth type="submit">
                Continue
              </Button>
              <Link href={ROUTES.LOGIN}>Back To Home Page</Link>
            </Box>
          </Form>
        )}
      </Formik>
    </LoginModalLayout>
  );
};

export default ForgotPassword;
