import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { SubscribeFooter } from "@/components/SubscribeFooter"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import { OrderSummary } from "@/components/OrderSummary"
import { usePageFocus } from "@/hooks/usePageFocus"

export function CheckoutPage() {
  usePageFocus()
  
  const { items, clearCart } = useCart()
  const navigate = useNavigate()
 const [, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    navigate("/checkout/success")
  }

  /* ---------------- Empty Cart ---------------- */
  if (items.length === 0) {
    return (
      <>
        <main className="min-h-screen py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/50" />
              <h1 className="text-4xl md:text-5xl font-bold">Your Cart is Empty</h1>
              <p className="text-lg text-muted-foreground">
                Add some courses to your cart before checking out.
              </p>

              <Link to="/courses">
              <Button size="lg" className="mt-6">
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

  /* ---------------- Checkout ---------------- */
  return (
    <>
      <main className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Checkout</h1>

            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* FORM */}
                <div className="lg:col-span-2 space-y-8">

                  {/* Customer Info */}
                  <div className="bg-card border rounded-xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Customer Information</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>

                  {/* Billing */}
                  <div className="bg-card border rounded-xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Billing Address</h2>

                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province *</Label>
                        <Input id="state" name="state" required value={formData.state} onChange={handleInputChange} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP / Postal Code *</Label>
                        <Input id="zipCode" name="zipCode" required value={formData.zipCode} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input id="country" name="country" required value={formData.country} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="bg-card border rounded-xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Payment Information</h2>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input id="cardName" name="cardName" required value={formData.cardName} onChange={handleInputChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input id="cardNumber" name="cardNumber" required value={formData.cardNumber} onChange={handleInputChange} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input id="expiryDate" name="expiryDate" required value={formData.expiryDate} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input id="cvv" name="cvv" required value={formData.cvv} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ORDER SUMMARY */}
              <div className="lg:col-span-1">
  <OrderSummary />
</div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <SubscribeFooter />
    </>
  )
}
