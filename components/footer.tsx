import Link from "next/link"

const footerSections = [
  {
    title: "SUPPLY CHAIN",
    links: [
      "Deployment Crates",
      "Spice Armory",
      "Shelf Systems",
      "Vacuum Ops",
      "Wall Command",
    ],
  },
  {
    title: "FIELD OPS",
    links: [
      "About HQ",
      "Operator Stories",
      "Bulk Orders",
      "Affiliate Program",
      "Press Kit",
    ],
  },
  {
    title: "COMMAND CENTER",
    links: [
      "Contact Support",
      "Shipping Intel",
      "Returns Policy",
      "Track Deployment",
      "FAQ",
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-jungle-dark text-flour">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center border border-saffron bg-saffron">
                <span className="font-heading text-sm font-bold text-jungle">
                  W
                </span>
              </div>
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-saffron">
                WildGearHub
              </span>
            </div>
            <p className="mb-6 text-xs leading-relaxed text-flour/50">
              Professional-grade tactical kitchen organization. Where every
              ingredient has a position and every meal is a mission accomplished.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["IG", "TW", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center border border-flour/10 text-[10px] font-bold text-flour/40 transition-all hover:border-saffron hover:text-saffron"
                  aria-label={`${s} social link`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-flour/40 transition-colors hover:text-flour"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-flour/10 pt-8 md:flex-row">
          <p className="text-[10px] text-flour/30">
            {'2026 WILDGEARHUB. ALL RIGHTS RESERVED. BUILT FOR BATTLE.'}
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[10px] text-flour/30 transition-colors hover:text-flour/60"
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
