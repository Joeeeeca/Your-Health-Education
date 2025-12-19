import { HeroSection } from "@/components/HeroSection"
import { MissionSection } from "@/components/MissionSection"
import { CourseSection } from "@/components/CourseSection"
import { SubscribeFooter } from "@/components/SubscribeFooter"

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans antialiased">
      <HeroSection />
      <MissionSection />
      <CourseSection />
      <SubscribeFooter />
    </main>
  )
}