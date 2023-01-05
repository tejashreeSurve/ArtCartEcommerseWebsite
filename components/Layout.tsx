import { useRouter } from "next/router";
import React, { Component, useEffect } from "react";
import { ROUTES } from "../constants/routes";
import { Footer } from "./Footer";
import { Header } from "./Header";

function Layout({ children }: any) {
  const router = useRouter();
  const pathname = router.pathname;
  const isLoginPage = [
    ROUTES.LOGIN,
    ROUTES.FORGOT_PASSWORD,
    ROUTES.REGISTER_USER,
    ROUTES.RESET_PASSWORD,
  ].includes(pathname);

  if (isLoginPage) return <div>{children}</div>;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
