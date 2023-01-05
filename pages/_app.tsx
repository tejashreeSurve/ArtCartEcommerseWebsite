import React, { useEffect, createContext, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ROUTES } from "../constants/routes";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { EmptyLoader } from "../components/Loaders/EmptyLoader";
import { QueryClientProvider, QueryClient } from "react-query";
import { theme } from "../styles/theme";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";

export const cookies = new Cookies();
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const AdHocCommonContext = React.createContext<any>({
  context: {},
  setContext: (value: any) => {},
});
export const AuthWrapper: React.FC = ({ children }: any) => {
  const router = useRouter();
  const pathname = router.pathname;
  const isLoginPage = [ROUTES.LOGIN].includes(pathname);
  const accessToken = cookies.get("_artcartapp");
  const disableLoginCall = !accessToken || isLoginPage;

  useEffect(() => {
    // if (isLoginPage) {
    //   if (accessToken) cookies.remove("_artcartapp");
    // } else {
    //   if (accessToken) {
    //     // set access Token
    //   } else {
    //     console.log("page");
    //     router.push("/");
    //   }
    // }
  }, [isLoginPage, router, accessToken]);

  if (isLoginPage || Boolean(accessToken)) return <>{children}</>;
  return <EmptyLoader />;
};
export default function MyApp({ Component, pageProps }: AppProps) {
  const [context, setContext] = useState({});
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AdHocCommonContext.Provider value={{ context, setContext }}>
            <Provider store={store}>
              <Layout>
                {/* <ErrorBoundary> */}
                <Component {...pageProps} />
                {/* </ErrorBoundary> */}
              </Layout>
            </Provider>
          </AdHocCommonContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
