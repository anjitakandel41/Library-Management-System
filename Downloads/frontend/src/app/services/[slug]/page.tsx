import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ThumbsUp, Send } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | ${site.fullName}`,
    description: service.fullDescription || service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="flex-1">
      <PageHero
        title={service.title}
        trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="pt-16 pb-16 bg-paper">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-maroon transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>
          <span className="flex h-16 w-16 items-center justify-center rounded-full icon-badge mx-auto mb-6">
            <Send className="w-6 h-6" strokeWidth={1.75} />
          </span>
          <p className="font-body text-ink-soft leading-relaxed">
            {service.fullDescription || service.description}
          </p>
        </div>
      </section>

      <section className="pb-20 bg-paper">
        <div className="container px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-4">What's Included</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle2 className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-4">Why It Helps</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-ink-soft">
                    <ThumbsUp className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-blush-soft">
          <div className="container px-6 max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-extrabold text-ink mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group bg-white border border-line rounded-2xl p-5 hover:border-maroon transition-colors"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-maroon transition-colors">{r.title}</h3>
                  <p className="font-body text-sm text-ink-soft mt-1">{r.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-maroon">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-ink text-white text-center">
        <div className="container px-6 max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold">Explore the rest of our services</h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-maroon px-7 py-3.5 font-body font-semibold text-white hover:bg-maroon-deep transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
