import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function Navigation() {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" aria-label="Go to homepage" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}home-logo.png`}
            alt="Your Health Education"
            className="h-12 w-auto"
            loading="eager"
          />
        </Link>

        <div className="flex gap-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors focus-visible:text-primary">
            Home
          </Link>

          <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors focus-visible:text-primary">
            About
          </Link>

          <Link to="/courses" className="text-foreground hover:text-primary font-medium transition-colors focus-visible:text-primary">
            Courses
          </Link>

          <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors focus-visible:text-primary">
            Contact
          </Link>

          <Link to="/cart" aria-label="View shopping cart" className="relative text-foreground hover:text-primary transition-colors focus-visible:text-primary">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
