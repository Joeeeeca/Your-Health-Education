import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, ShoppingCart } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/Button"

export function CartDrawer() {
  const { items, getTotal, isDrawerOpen, setIsDrawerOpen } = useCart()

  // Ref for focus management
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Move focus into drawer when it opens
  useEffect(() => {
    if (isDrawerOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isDrawerOpen])

  return (
    <div
      className={`fixed right-0 top-0 h-full bg-background border-l border-border shadow-2xl z-50 transition-transform duration-300 ease-in-out w-96 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isDrawerOpen}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Your Cart</h2>
          </div>

          <button
            ref={closeButtonRef}
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover"
                    loading="lazy"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-primary font-bold mt-2">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">
                ${getTotal().toLocaleString()}
              </span>
            </div>

            <Link to="/cart" onClick={() => setIsDrawerOpen(false)}>
              <Button className="w-full" size="lg">
                View Cart & Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
