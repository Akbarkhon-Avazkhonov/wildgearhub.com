import { Package, Flame, Grid3X3, Archive, Maximize2, Wrench } from "lucide-react"

const categories = [
  {
    icon: Package,
    name: "DEPLOYMENT CRATES",
    description: "Airtight containers for long-term food storage operations.",
    count: 24,
  },
  {
    icon: Flame,
    name: "SPICE ARMORY",
    description: "Organize your flavor arsenal with precision-grade spice systems.",
    count: 18,
  },
  {
    icon: Grid3X3,
    name: "SHELF SYSTEMS",
    description: "Modular shelving units built for pantry domination.",
    count: 15,
  },
  {
    icon: Archive,
    name: "VACUUM OPS",
    description: "Preservation tech to keep your provisions fresh and combat-ready.",
    count: 12,
  },
  {
    icon: Maximize2,
    name: "WALL COMMAND",
    description: "Mount your tools for instant access during any kitchen mission.",
    count: 9,
  },
  {
    icon: Wrench,
    name: "TACTICAL TOOLS",
    description: "Specialized utensils and gadgets for the professional operator.",
    count: 21,
  },
]

export function Categories() {
  return (
    <section id="categories" className="bg-jungle py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-saffron" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-saffron">
              OPERATION ZONES
            </span>
            <div className="h-px w-8 bg-saffron" />
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase tracking-tight text-flour md:text-5xl">
            CHOOSE YOUR SECTOR
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-flour/60">
            Navigate through our specialized divisions. Each sector is loaded
            with gear tailored for specific kitchen operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col border border-flour/10 bg-jungle-light p-6 transition-all hover:border-saffron hover:bg-jungle-dark"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-saffron/30 bg-saffron/10">
                  <cat.icon className="h-5 w-5 text-saffron" />
                </div>
                <span className="text-[10px] font-bold text-flour/30 transition-colors group-hover:text-saffron/60">
                  {cat.count} ITEMS
                </span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold uppercase text-flour">
                {cat.name}
              </h3>
              <p className="text-xs leading-relaxed text-flour/50">
                {cat.description}
              </p>
              <div className="mt-4 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
