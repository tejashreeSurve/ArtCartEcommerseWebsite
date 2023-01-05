import React, { ReactNode } from "react";
import { Link as MUILink } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = (props: LinkProps) => {
  return (
    <NextLink passHref {...props}>
      <MUILink
        sx={{
          color: "primary.link",
          fontFamily: "Stint Ultra Condensed",
          fontSize: "24px",
          cursor: "pointer",
          textDecoration: "none",
          letterSpacing: 1,
          ...props.sx,
        }}
        target={props.target || "_self"}
        rel={props.isThirdPartyLink ? "noopener" : ""}
      >
        {props.children}
      </MUILink>
    </NextLink>
  );
};

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  sx?: any;
  target?: string;
  isThirdPartyLink?: boolean;
}
