// src/components/OrderSummary.tsx
import { Button } from "@/components/ui/Button"
import { useCart } from "@/lib/cart-context"
import { Link } from "react-router-dom"

export function OrderSummary() {
  const { items} = useCart()

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const tax = 0
  const total = subtotal + tax

  return (
    <div className="rounded-2xl border border-border p-6 space-y-6 bg-background">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      {/* Items */}
      <div className="space-y-4 border-b pb-6">
        {items.map((item) => (
          <div key={item.slug} className="flex gap-4 items-start">
            <img
              src={item.image}
              alt={item.title}
              className="h-16 w-16 rounded-md object-cover"
            />

            <div className="flex-1">
              <p className="font-medium leading-tight">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                Qty: {item.quantity}
              </p>
            </div>

            <p className="font-semibold">
              ${(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Tax</span>
          <span>$0</span>
        </div>
      </div>

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span className="text-primary">
          ${total.toLocaleString()}
        </span>
      </div>

      <Link to="/CheckoutPage"> <Button size="lg" className="w-full text-lg py-6 cursor-pointer">
        Complete Order
      </Button>
      
</Link>
      <p className="text-xs text-muted-foreground text-center">
        By completing your order, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}
