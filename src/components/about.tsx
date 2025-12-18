import { SubscribeFooter } from "@/components/SubscribeFooter"

export function AboutPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}about-me-picture.jpg`}
                  alt="Brad Salter"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl font-bold text-foreground">
                About <span className="text-primary">Brad Salter</span>
              </h1>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-bold text-foreground">BRAD SALTER</span>{" "}
                  is a pioneer in the health e-learning space, graduate BSc in
                  Sport and Exercise Nutrition from Manchester Metropolitan
                  University, personal trainer, and highly sought-after coach in
                  the health industry.
                </p>

                <p>
                  After early career success, he left the Royal Navy working as a
                  marine engineer in 2017 and ever since has been pioneering
                  methods to leveraging his health to pivot into every venture
                  he sets his sights on. Since 2022, he has coached 100&apos;s of
                  people to their health goals. In 2024, he founded{" "}
                  &apos;Your Health Education&apos; with a goal of growing it to
                  become one of the largest health coaching companies in the
                  world.
                </p>

                <p className="text-foreground font-medium">
                  He&apos;s also a proud partner, son, brother, uncle and
                  lifetime dreamer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribeFooter />
    </main>
  )
}
