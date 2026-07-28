import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: `FAQ | ${site.fullName}`,
  description: "Frequently asked questions.",
};

export default function FaqPage() {
  return (
    <main className="flex-1">
      <PageHero title="Frequently Asked Questions" trail={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <section className="pt-20 pb-20 bg-paper">
        <div className="container px-6 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-line rounded-2xl px-6 py-4 bg-white open:shadow-sm">
              <summary className="cursor-pointer font-display text-lg font-semibold text-ink flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-red-accent group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="font-body text-sm text-ink-soft mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
