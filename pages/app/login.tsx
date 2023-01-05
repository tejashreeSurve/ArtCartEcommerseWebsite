import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Button,
  TextField,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import Router, { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { LoginFormSchema } from "../../types/auth.types";
import * as yup from "yup";
import { FormInput } from "../../components/FormInput";
import { MailOutlined, VisibilityOutlined } from "@mui/icons-material";
import { FontStyleTypo } from "../../components/StyledComponents";
import { FcGoogle } from "react-icons/fc";
import { LoginModalLayout } from "../../layout/LoginModalLayout";
import { ROUTES } from "../../constants/routes";

const initialValues: LoginFormSchema = { username: "", password: "" };
const validationSchema = yup.object().shape({
  username: yup.string().required().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});
function Login() {
  // { openModal, handleClose }: LoginProps
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const onSubmit = (value: LoginFormSchema) => {
    console.log(value);
  };

  const handleClose = () => {
    router.push(ROUTES.HOME);
  };
  return (
    <LoginModalLayout
      title="Login"
      subTitle="Log in to ArtCart to continue shopping"
      handleClose={handleClose}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Box mb={2} mt={4}>
              <FormInput
                label=""
                type="text"
                name="username"
                placeholder="jhonjosh@google.com"
                onChange={handleChange}
                value={values.username}
                error={touched.username && errors.username && errors.username}
                endAndornment={<MailOutlined sx={{ mr: 1 }} />}
              />
            </Box>
            <Box mb={1}>
              <FormInput
                label=""
                name="password"
                type={passwordVisibility ? "text" : "password"}
                placeholder="password"
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
            <Box mb={2} display="flex">
              <Typography mb={1}>
                <Link
                  href={ROUTES.FORGOT_PASSWORD}
                  sx={{
                    display: "inline",
                  }}
                >
                  Forgot your Password?
                </Link>
              </Typography>
            </Box>
            <Box display="flex">
              <Button variant="contained" fullWidth type="submit">
                Sign-in
              </Button>
            </Box>
            <Box mb={4} display="inline">
              <FontStyleTypo>
                Don't have an account?
                <Link href={ROUTES.REGISTER_USER} sx={{ ml: 2 }}>
                  Sign-up
                </Link>
              </FontStyleTypo>
            </Box>
            <Divider sx={{ marginBottom: 4 }}>OR</Divider>
            <Box>
              <Button variant="outlined" fullWidth>
                <FcGoogle style={{ marginRight: "2rem" }} />
                Continue with Google
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </LoginModalLayout>
  );
}

interface LoginProps {
  openModal: boolean;
  handleClose: () => void;
}

export default Login;

//  <Box>
//    <Dialog open={true} onClose={handleClose}>
//      <StyledDialogTitle sx={{ m: 1 }}>
//        <ArtCartAvatarLogo />
//        Login
//        <StyledDialogSubTitle>
//          Log in to ArtCart to continue shopping
//        </StyledDialogSubTitle>
//      </StyledDialogTitle>

//      <DialogContent sx={{ m: 3 }}>

//      </DialogContent>
//    </Dialog>
//  </Box>;
