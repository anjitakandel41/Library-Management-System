import { industries } from "@/data/ndustries";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: `Industries | ${site.fullName}`,
  description: "Industries we support.",
};

export default function IndustriesPage() {
  return (
    <main className="flex-1">
      <PageHero title="Industries We Support" trail={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      <section className="pt-20 pb-20 bg-paper">
        <div className="container px-6">
          <p className="font-body text-ink-soft text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            We work with businesses across a wide range of industries, all across Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <span key={industry} className="font-body text-sm text-ink bg-blush-soft border border-line rounded-full px-5 py-2.5">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
