import { Routes, Route, Navigate } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import  HomePage  from "@/components/HomePage"
import { AboutPage } from "@/components/about"
import { CoursesPage } from "@/components/courses"
import { CourseDetailPage } from "@/components/CourseDetailPage"
import { ContactPage } from "@/components/ContactPage"
import { CartPage } from "@/components/CartPage"
import { CheckoutPage } from "@/components/CheckoutPage"

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  )
}

export default App
