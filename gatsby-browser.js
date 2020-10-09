import React from "react"
import Layout from "./src/components/Layout"
import { GlobalStyles } from "./src/styles"
import CartProvider from "./src/context"

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
