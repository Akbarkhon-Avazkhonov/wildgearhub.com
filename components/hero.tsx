import Image from "next/image"
import { ArrowRight, Shield, Wind, Leaf } from "lucide-react"

const callouts = [
  { label: "AIR-TIGHT SEAL", icon: Wind, x: "left-[10%]", y: "top-[20%]" },
  { label: "BPA FREE", icon: Leaf, x: "right-[10%]", y: "top-[30%]" },
  { label: "MIL-SPEC GRADE", icon: Shield, x: "left-[15%]", y: "bottom-[25%]" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-jungle pt-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,159,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,159,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-4 lg:flex-row lg:gap-12 lg:px-8">
        {/* Left Content */}
        <div className="z-10 flex-1 py-12 text-center lg:py-0 lg:text-left">
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 border border-saffron/30 bg-saffron/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse bg-chili" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-saffron">
              MISSION: ORGANIZE
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-flour md:text-6xl lg:text-7xl">
            GEAR UP
            <br />
            <span className="text-saffron">YOUR</span>
            <br />
            KITCHEN.
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-md text-sm leading-relaxed text-flour/70 lg:text-base">
            At WildGearHub, we build battle-ready pantries.
            Professional-grade storage solutions for those who take their
            ingredients seriously.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 bg-saffron px-8 py-4 text-xs font-bold uppercase tracking-widest text-jungle transition-all hover:bg-saffron/90 hover:gap-4"
            >
              DEPLOY NOW
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 border-2 border-flour/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-flour transition-all hover:border-saffron hover:text-saffron"
            >
              VIEW ARSENAL
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 border-t border-flour/10 pt-8 lg:justify-start">
            {[
              { num: "10K+", label: "Kitchens Armed" },
              { num: "150+", label: "Tactical Products" },
              { num: "4.9", label: "Field Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl font-bold text-saffron">
                  {stat.num}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-flour/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square max-w-lg overflow-hidden border-2 border-saffron/20">
            <Image
              src="/images/hero-pantry.jpg"
              alt="Tactical kitchen pantry organization system with transparent containers and spice racks"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Technical callouts */}
            {callouts.map((callout) => (
              <div
                key={callout.label}
                className={`absolute ${callout.x} ${callout.y} hidden items-center gap-2 bg-jungle/90 px-3 py-1.5 backdrop-blur-sm md:flex`}
              >
                <callout.icon className="h-3 w-3 text-saffron" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-flour">
                  {callout.label}
                </span>
              </div>
            ))}
            {/* Corner decorations */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-saffron" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-saffron" />
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-saffron" />
    </section>
  )
}
