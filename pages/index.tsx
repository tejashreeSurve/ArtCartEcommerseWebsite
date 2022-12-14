import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { theme } from "../styles/theme";
import products from "../product.json";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <div className={styles.container}> */}
        <Header />

        {/* <ProductList items={products} /> */}
        <ProductDetails />
        <Footer />
        {/* </div> */}
      </ThemeProvider>
    </>
  );
}
