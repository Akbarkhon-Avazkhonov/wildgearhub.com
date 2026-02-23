"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "CHEF MARCUS R.",
    role: "Executive Chef, NYC",
    quote:
      "WildGearHub transformed my chaotic pantry into a precision-operated command center. Every ingredient is where it should be. Every. Single. Time.",
    rating: 5,
    image: "/images/avatar-marcus.jpg",
  },
  {
    name: "SARAH K.",
    role: "Home Operations Specialist",
    quote:
      "I thought I was organized before. Then I deployed the full Tactical Storage System. I was not organized before. These containers are military-grade serious.",
    rating: 5,
    image: "/images/avatar-sarah.jpg",
  },
  {
    name: "JAMES T.",
    role: "Professional Meal Prepper",
    quote:
      "The vacuum seal kit alone saved me hundreds in food waste. The spice rack? That's just showing off. Absolutely 10/10 field-grade kitchen equipment.",
    rating: 5,
    image: "/images/avatar-james.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-flour py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-saffron" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-saffron">
              FIELD REPORTS
            </span>
            <div className="h-px w-8 bg-saffron" />
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase tracking-tight text-jungle md:text-5xl">
            OPERATOR REVIEWS
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
            Verified dispatches from kitchen operators in the field.
            Real missions. Real results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col border-2 border-border bg-card p-6 transition-all hover:border-saffron"
            >
              <Quote className="mb-4 h-6 w-6 text-saffron/30" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/80">
                {`"${t.quote}"`}
              </p>
              {/* Rating */}
              <div className="mb-4 flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-saffron text-saffron"
                  />
                ))}
              </div>
              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-saffron/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-foreground">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
