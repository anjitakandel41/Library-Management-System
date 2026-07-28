import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/ndustries";
import { site } from "@/data/site";
import { PageHero, EyebrowPill } from "@/components/PageHero";

export const metadata = {
  title: `Our Services | ${site.fullName}`,
  description: site.description,
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Expert Bookkeeping & Business Services for Australian Businesses"
        trail={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="pt-20 pb-24 bg-paper">
        <div className="container px-6 text-center">
          <EyebrowPill>Our Services</EyebrowPill>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink mt-5">
            Business Services Built Around Your Goals
          </h2>
          <p className="font-body text-ink-soft max-w-2xl mx-auto mt-4 leading-relaxed">
            {site.description}
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 text-left max-w-4xl mx-auto">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <span className="flex h-14 w-14 items-center justify-center rounded-full icon-badge mb-5 group-hover:bg-maroon-deep transition-colors">
                  <Send className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-maroon transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-ink-soft mt-2 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-maroon">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blush-soft">
        <div className="container px-6 text-center">
          <EyebrowPill>Industries</EyebrowPill>
          <h2 className="font-display text-3xl font-extrabold text-ink mt-5">Industries We Support</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <span key={industry} className="font-body text-sm text-ink bg-white border border-line rounded-full px-4 py-2">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
