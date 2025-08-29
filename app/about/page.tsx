 import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">About Prime Axis Express</h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Prime Axis Express provides fast, reliable logistics across the region and worldwide. With real-time
              tracking, 24/7 support, and a trusted global network, we handle millions of shipments with a strong
              commitment to speed, security, and customer satisfaction.
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Door-to-door service</h2>
              <p className="mt-2 text-gray-800">
                When you request a shipment, we will come to the door of your house to pick up the package and deliver
                it to the receiver&apos;s door in Juba if requested. This convenient end-to-end service ensures a smooth
                and secure experience for both senders and recipients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Packages Delivered</div>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reuse the existing About content with features and stats */}
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
