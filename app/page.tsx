import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SeekersFeatures />
        <ProvidersFeatures />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect with Top Sustainability Service Providers</h1>
        <p className="text-xl md:text-2xl mb-8">
          Empowering companies and institutions to achieve their sustainability goals
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/for-seekers">I'm a Seeker</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/for-providers">I'm a Provider</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SeekersFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">For Companies and Institutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Find the Best Providers"
            description="Access a curated list of top sustainability service providers to meet your specific needs."
          />
          <FeatureCard
            title="Read Independent Reviews"
            description="Make informed decisions with transparent, user-generated reviews from other companies."
          />
          <FeatureCard
            title="Post RFPs"
            description="Easily create and manage RFPs to receive competitive bids from qualified providers."
          />
        </div>
      </div>
    </section>
  )
}

function ProvidersFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">For Consultants and Service Providers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Get Discovered"
            description="Increase your visibility and generate leads passively through our platform."
          />
          <FeatureCard
            title="Respond to RFPs"
            description="Access a steady stream of relevant project opportunities and submit competitive bids."
          />
          <FeatureCard
            title="Promote Your Services"
            description="Boost your visibility with targeted advertising options on our platform."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CallToAction() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sustainability Journey?</h2>
        <p className="text-xl mb-8">
          Join our platform today and connect with the right partners for your sustainability goals.
        </p>
        <Button asChild size="lg">
          <Link href="/signup">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}

