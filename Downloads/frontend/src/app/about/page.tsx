import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, EyebrowPill } from "@/components/PageHero";

export const metadata = {
  title: `About | ${site.fullName}`,
  description: site.intro,
};

const whyChooseUs = [
  "Personalised service",
  "Affordable pricing",
  "Cloud-based bookkeeping",
  "Fast turnaround",
  "Experienced with Australian small businesses",
  "Confidential and secure handling of information",
  "Flexible monthly packages",
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero 
        title="A Steady Hand on Your Books" 
        trail={[{ label: "Home", href: "/" }, { label: "About" }]} 
      />

      <section className="pt-20 pb-20 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-gray-600 leading-relaxed text-lg">{site.intro}</p>
        </div>
      </section>

      <section className="py-20 bg-[#fcf5f0]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <EyebrowPill>Why Choose Us</EyebrowPill>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-5 mb-10">Why Choose Us</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 text-gray-600">
                <span className="text-[#8B1A4A] text-lg leading-none">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl font-extrabold">See how we can help your business</h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-[#8B1A4A] px-7 py-3.5 font-semibold text-white hover:bg-[#6b1238] transition-colors"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}