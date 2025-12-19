import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import App from "./App"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/ScrollToTop"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { PageWrapper } from "@/components/page-wrapper"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
        <HelmetProvider>
    <ScrollToTop />
      <CartProvider>
        <PageWrapper>
          <App />
        </PageWrapper>

        <CartDrawer />
      </CartProvider>
     </HelmetProvider>
    </HashRouter>
  </StrictMode>
)
