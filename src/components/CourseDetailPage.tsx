import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { SubscribeFooter } from "@/components/SubscribeFooter"
import { Button } from "@/components/ui/Button"
import { Check, ShoppingCart } from "lucide-react"
import { getCourseBySlug } from "@/lib/course-data"
import { useCart } from "@/lib/cart-context"

export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const course = slug ? getCourseBySlug(slug) : undefined
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [addedToCart, setAddedToCart] = useState(false)

  /* ---------------------------
     Course NOT FOUND
  ---------------------------- */
  if (!course) {
    return (
      <>
        <Helmet>
          <title>Course Not Found | Your Health Education</title>
          <meta
            name="description"
            content="The course you are looking for does not exist."
          />
        </Helmet>

        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground">
              The course you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </>
    )
  }

  /* ---------------------------
     Handlers
  ---------------------------- */
  const handleAddToCart = () => {
    addToCart({
      slug: course.slug,
      title: course.title,
      price: course.price,
      image: course.image,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(
      {
        slug: course.slug,
        title: course.title,
        price: course.price,
        image: course.image,
      },
      { openDrawer: false }
    )

    navigate("/CheckoutPage")
  }

  /* ---------------------------
     Normal page render
  ---------------------------- */
  return (
    <>
      <Helmet>
        <title>{course.title} | Your Health Education</title>
        <meta name="description" content={course.description} />

        <link
  rel="canonical"
  href={`https://joeeeeca.github.io/Your-Health-Education/#/courses/${course.slug}`}
/>


        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.description} />
        <meta
          property="og:image"
          content={`${import.meta.env.BASE_URL}${course.image}`}
        />
      </Helmet>

      <main className="min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-start">
              
              {/* Image */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}${course.image}`}
                  alt={course.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    {course.title}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="bg-primary/10 rounded-xl p-6">
                  <p className="text-5xl font-bold text-primary">
                    ${course.price.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold mb-4">
                    What You'll Learn
                  </h2>

                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                      <p className="text-base md:text-lg leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    size="lg"
                    className="w-full text-lg py-7"
                    aria-label="Buy this course"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg py-7 bg-transparent"
                    aria-label="Add this course to your cart"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {addedToCart ? "Added to Cart!" : "Add to Cart"}
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {course.longDescription}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <SubscribeFooter />
    </>
  )
}
