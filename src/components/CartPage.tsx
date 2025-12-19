import { SubscribeFooter } from "@/components/SubscribeFooter"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/lib/cart-context"
import { Link } from "react-router-dom"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { OrderSummary } from "@/components/OrderSummary"
import { Helmet } from "react-helmet-async"
import { usePageFocus } from "@/hooks/usePageFocus"

export function CartPage() {
  usePageFocus()

  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart()

  // Empty cart state
  if (items.length === 0) {
    return (
      <>

        <main className="min-h-screen py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/50" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-muted-foreground">
                Start adding courses to your cart to begin your health education
                journey.
              </p>

<Link to="/courses">
              <Button size="lg" className="mt-6 cursor-pointer">
                Browse Courses
              </Button>
              </Link>
            </div>
          </div>
        </main>

        <SubscribeFooter />
      </>
    )
  }

  return (
    <>
<Helmet>
  <title>Your Cart | Your Health Education</title>

  <meta
    name="description"
    content="Review your selected courses and proceed to secure checkout."
  />

  <link
    rel="canonical"
    href="https://joeeeeca.github.io/Your-Health-Education/#/cart"
  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Your Cart | Your Health Education" />
  <meta
    property="og:description"
    content="Review your selected courses and proceed to secure checkout."
  />
</Helmet>


      <main className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl md:text-5xl font-bold">
                Shopping Cart
              </h1>

              <Button
                variant="outline"
                onClick={clearCart}
                className="text-muted-foreground hover:text-destructive cursor-pointer"
              >
                Clear Cart
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="bg-card border rounded-xl p-6 flex gap-6"
                  >
                    <div className="w-32 h-32 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link
                            to={`/courses/${item.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            <h3 className="text-xl font-semibold">
                              {item.title}
                            </h3>
                          </Link>

                          <p className="text-2xl font-bold text-primary mt-2">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          size="md"
                          onClick={() => removeFromCart(item.slug)}
                          className="text-muted-foreground hover:text-destructive cursor-pointer"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="cursor-pointer"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>

                        <span className="text-lg font-medium w-12 text-center">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity + 1)
                          }
                          className="cursor-pointer"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             <div className="lg:col-span-1">
  <OrderSummary />
</div>
            </div>
          </div>
        </div>
      </main>

      <SubscribeFooter />
    </>
  )
}