import Image from "next/image"
import { Star, ShoppingCart, Flame } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Airtight Deployment Crates",
    category: "CONTAINERS",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 312,
    image: "/images/product-containers.jpg",
    badge: "BEST SELLER",
    badgeColor: "bg-saffron text-jungle",
  },
  {
    id: 2,
    name: "Rotating Spice Command Center",
    category: "SPICE ARMORY",
    price: 89.99,
    rating: 4.8,
    reviews: 187,
    image: "/images/product-spice-rack.jpg",
    badge: null,
    badgeColor: "",
  },
  {
    id: 3,
    name: "Pantry Assault Organizer Pro",
    category: "ORGANIZERS",
    price: 129.99,
    rating: 5.0,
    reviews: 95,
    image: "/images/product-organizer.jpg",
    badge: "NEW INTEL",
    badgeColor: "bg-jungle text-flour",
  },
  {
    id: 4,
    name: "Vacuum Seal Ops Kit",
    category: "PRESERVATION",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.7,
    reviews: 243,
    image: "/images/product-vacuum-seal.jpg",
    badge: "HOT DEAL",
    badgeColor: "bg-chili text-flour",
  },
  {
    id: 5,
    name: "Stackable Ammo Bins",
    category: "STORAGE",
    price: 34.99,
    rating: 4.6,
    reviews: 421,
    image: "/images/product-bins.jpg",
    badge: null,
    badgeColor: "",
  },
  {
    id: 6,
    name: "Wall-Mount Weapon System",
    category: "WALL SYSTEMS",
    price: 74.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/product-wall-system.jpg",
    badge: "TACTICAL PICK",
    badgeColor: "bg-saffron text-jungle",
  },
]

export function Products() {
  return (
    <section id="products" className="bg-flour py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-saffron" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-saffron">
              SUPPLY DEPOT
            </span>
            <div className="h-px w-8 bg-saffron" />
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase tracking-tight text-jungle md:text-5xl">
            TACTICAL GEAR
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
            Every item in our arsenal has been field-tested and approved for
            maximum kitchen efficiency. Choose your weapons wisely.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative overflow-hidden border-2 border-border bg-card transition-all hover:border-saffron hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute left-0 top-4 flex items-center gap-1.5 px-3 py-1.5 ${product.badgeColor}`}
                  >
                    {product.badge === "HOT DEAL" && (
                      <Flame className="h-3 w-3" />
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {product.badge}
                    </span>
                  </div>
                )}
                {/* Quick Add */}
                <button
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-saffron text-jungle opacity-0 transition-all group-hover:opacity-100"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                  {product.category}
                </div>
                <h3 className="mb-3 text-sm font-bold uppercase leading-tight text-foreground">
                  {product.name}
                </h3>
                {/* Rating */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-saffron text-saffron"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-jungle bg-jungle px-8 py-4 text-xs font-bold uppercase tracking-widest text-flour transition-all hover:bg-jungle-light"
          >
            VIEW ALL SUPPLY
          </a>
        </div>
      </div>
    </section>
  )
}
