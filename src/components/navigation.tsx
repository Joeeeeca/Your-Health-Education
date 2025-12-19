import { Link } from "react-router-dom"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "../lib/cart-context" // adjust path if needed
import { useState } from "react"

export function Navigation() {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}home-logo.png`}
              alt="Your Health Education"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex gap-8 items-center">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary font-medium transition-colors">
              Courses
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </Link>

            <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}home-logo.png`}
              alt="Your Health Education"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors p-2">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

     {/* Mobile menu */}
<div
  className={`
    md:hidden
    overflow-hidden
    border-t border-border
    bg-background
    transition-all
    duration-300
    ease-out
    ${
      mobileMenuOpen
        ? "max-h-96 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }
  `}
>
  <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
    {["/", "/about", "/courses", "/contact"].map((path, i) => (
      <Link
        key={path}
        to={path}
        className="text-foreground hover:text-primary font-medium transition-colors py-2 text-lg"
        onClick={() => setMobileMenuOpen(false)}
      >
        {["Home", "About", "Courses", "Contact"][i]}
      </Link>
    ))}
  </div>
</div>
    </nav>
  )
}
