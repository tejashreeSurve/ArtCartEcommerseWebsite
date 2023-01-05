import React, { FC, ReactNode } from "react";
import {
  Box,
  DialogTitle,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArtCartAvatarLogo from "../components/ArtCartAvatarLogo";
import { useRouter } from "next/router";

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Stint Ultra Expanded",
  fontWeight: "300",
  fontSize: "30px",
}));

const StyledDialogSubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Stint Ultra Expanded",
  fontWeight: "300",
  fontSize: "16px",
  display: "flex",
}));

export const LoginModalLayout = ({
  title,
  subTitle,
  children,
  handleClose,
}: LoginModalLayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Box>
        <Dialog open={true} onClose={handleClose} scroll="body">
          <StyledDialogTitle sx={{ m: 1 }}>
            <ArtCartAvatarLogo />
            {title}
            <StyledDialogSubTitle>{subTitle}</StyledDialogSubTitle>
          </StyledDialogTitle>

          <DialogContent sx={{ m: 3 }}>{children}</DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

interface LoginModalLayoutProps {
  title: string;
  subTitle: string;
  children: ReactNode;
  handleClose: () => void;
}
{
  /* <StyledDialogSubTitle>{subTitle}</StyledDialogSubTitle>; */
}
