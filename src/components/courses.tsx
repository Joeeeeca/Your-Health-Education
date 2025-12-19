import { Helmet } from "react-helmet-async"
import { CourseCard } from "@/components/course-card"
import { SubscribeFooter } from "@/components/SubscribeFooter"
import { courses } from "@/lib/course-data"
import { usePageFocus } from "@/hooks/usePageFocus"

export function CoursesPage() {
  usePageFocus()
  
  return (
    <>
    <Helmet>
  <title>Courses | Your Health Education</title>

  <meta
    name="description"
    content="Explore evidence-based health and nutrition courses designed to improve physical and mental performance."
  />

  <link
    rel="canonical"
    href="https://joeeeeca.github.io/Your-Health-Education/#/courses"
  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Courses | Your Health Education" />
  <meta
    property="og:description"
    content="Explore evidence-based health and nutrition courses designed to improve physical and mental performance."
  />
  <meta
    property="og:url"
    content="https://joeeeeca.github.io/Your-Health-Education/#/courses"
  />
</Helmet>

      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                Available Courses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform your health journey with our evidence-based courses.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {courses.map((course) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  title={course.title}
                  price={course.price}
                  features={course.features}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SubscribeFooter />
    </>
  )
}
