"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cloud,
  ShieldCheck,
  Clock,
  Wallet,
  MapPinned,
  Star,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Data arrays - MUST be defined before use
const whyChooseUs = [
  { icon: Sparkles, title: "Personalised service", description: "Tailored solutions for your specific business needs." },
  { icon: Wallet, title: "Affordable pricing", description: "Quality service at competitive rates with no hidden fees." },
  { icon: Cloud, title: "Cloud-based bookkeeping", description: "Real-time access to your financial data, anywhere, anytime." },
  { icon: Clock, title: "Fast turnaround", description: "Efficient service without compromising on quality or accuracy." },
  { icon: MapPinned, title: "Australian small business experience", description: "We know the local rules, regulations and rhythms." },
  { icon: ShieldCheck, title: "Confidential & secure", description: "Your financial information is handled with the utmost care." },
];

const howWeWork = [
  { title: "Get in touch", description: "Reach out and tell us about your business needs and goals." },
  { title: "We understand your business", description: "We learn your goals, systems and pain points in detail." },
  { title: "We set up your systems", description: "Your bookkeeping software and processes, configured properly." },
  { title: "We maintain your books", description: "Ongoing, accurate bookkeeping each month without fail." },
  { title: "You get clear reports", description: "Regular financial reporting you can actually understand and use." },
];

// Team members data
const teamMembers = [
  { 
    name: "Sarah Mitchell", 
    role: "Lead Bookkeeper", 
    photo: "/images/team/sarah.jpg",
    experience: "10+ years"
  },
  { 
    name: "James Wilson", 
    role: "Senior Accountant", 
    photo: "/images/team/james.jpg",
    experience: "8+ years"
  },
  { 
    name: "Emily Chen", 
    role: "Payroll Specialist", 
    photo: "/images/team/emily.jpg",
    experience: "6+ years"
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "David Thompson",
    business: "Thompson & Co. Construction",
    quote: "Since switching to this team, our financial reporting has been flawless. They saved us countless hours and helped us grow.",
    avatar: "/images/testimonials/david.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Lisa Martinez",
    business: "Martinez Design Studio",
    quote: "The most professional bookkeeping service we've ever used. They truly understand the needs of creative businesses.",
    avatar: "/images/testimonials/lisa.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Park",
    business: "Park Medical Practice",
    quote: "Exceptional attention to detail and proactive advice. They've been instrumental in our practice's financial health.",
    avatar: "/images/testimonials/robert.jpg",
    rating: 4
  },
];

const clientLogos = [
  "/images/clients/client1.svg",
  "/images/clients/client2.svg",
  "/images/clients/client3.svg",
  "/images/clients/client4.svg",
  "/images/clients/client5.svg",
];

// Mock services data
const services = [
  { id: 1, slug: "bookkeeping", title: "Bookkeeping", description: "Accurate, timely bookkeeping services to keep your financial records in order." },
  { id: 2, slug: "payroll", title: "Payroll Administration", description: "Complete payroll management ensuring your employees are paid correctly and on time." },
  { id: 3, slug: "advisory", title: "Business Advisory", description: "Strategic financial advice to help your business grow and succeed." },
  { id: 4, slug: "tax", title: "Tax Compliance", description: "Expert tax preparation and compliance services for your peace of mind." },
  { id: 5, slug: "software", title: "Software Support", description: "Setup, training and support for Xero, MYOB and other accounting software." },
  { id: 6, slug: "consulting", title: "Business Consulting", description: "Professional business consulting to optimize your operations and profits." },
];

const industries = [
  "Retail", "Healthcare", "Construction", "Professional Services", 
  "Hospitality", "Manufacturing", "Real Estate", "Technology", 
  "Education", "Non-Profit"
];

const faqs = [
  { question: "What bookkeeping services do you offer?", answer: "We offer comprehensive bookkeeping including accounts payable/receivable, bank reconciliation, payroll processing, financial reporting, and tax preparation." },
  { question: "How much do your services cost?", answer: "Our pricing is tailored to your specific needs. We offer flexible packages starting from $X/month. Contact us for a custom quote." },
  { question: "Are you based in Australia?", answer: "Yes, we are an Australian company with expert knowledge of local regulations and business practices." },
  { question: "What software do you use?", answer: "We work with Xero, MYOB, QuickBooks and other major accounting software platforms. We can also work with your existing systems." },
];

const site = {
  tagline: "Books in order. Business ahead.",
  description: "Professional bookkeeping, payroll administration, business consulting and accounting software support for small businesses across Australia.",
  intro: "We help Australian small businesses stay on top of their finances with expert bookkeeping and advisory services tailored to your needs."
};

// Image component with fallback
const SafeImage = ({ src, alt, className, fallbackSrc }: { src: string; alt: string; className?: string; fallbackSrc?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

// Avatar component with fallback
const AvatarImage = ({ name, src, className }: { name: string; src: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=8B1A4A&color=fff&size=128`;
  
  return (
    <img
      src={imgSrc}
      alt={name}
      className={className}
      onError={() => setImgSrc(fallbackUrl)}
    />
  );
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#fdf6f3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#8B1A4A] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 pt-20 pb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            Bookkeeping · Payroll · Advisory
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mt-6 max-w-4xl mx-auto">
            Books in order. Business ahead.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
            Professional bookkeeping, payroll administration, business consulting and accounting software support for small businesses across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B1A4A] px-7 py-3.5 font-semibold text-white hover:bg-[#6b1238] transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-7 py-3.5 font-semibold text-gray-900 hover:border-[#8B1A4A] hover:text-[#8B1A4A] transition-colors bg-white/80 backdrop-blur-sm"
            >
              About Us
            </Link>
          </div>
        </div>
        
        {/* Hero Banner Image */}
        <div className="container mx-auto px-6 pb-16 relative z-10">
          <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] bg-gradient-to-r from-[#8B1A4A]/20 via-[#fdf6f3] to-[#8B1A4A]/20 shadow-2xl">
            <SafeImage 
              src="/images/hero-banner.jpg" 
              alt="Professional bookkeeping services for Australian businesses" 
              className="w-full h-full object-cover"
              fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='500'%3E%3Crect width='1200' height='500' fill='%23fdf6f3'/%3E%3Ctext x='600' y='250' font-family='Arial' font-size='24' fill='%238B1A4A' text-anchor='middle'%3EBookkeeping Services%3C/text%3E%3C/svg%3E"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-white text-xl md:text-2xl font-bold">
                    Trusted by 500+ Australian Businesses
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Expert bookkeeping services tailored to your needs
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-white text-sm font-semibold">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#8B1A4A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-white/70" />
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <p className="text-white/70 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-white/70" />
              <div className="text-3xl md:text-4xl font-bold">15+</div>
              <p className="text-white/70 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-white/70" />
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <p className="text-white/70 text-sm mt-1">Client Retention</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-white/70" />
              <div className="text-3xl md:text-4xl font-bold">4.9</div>
              <p className="text-white/70 text-sm mt-1">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-2xl md:text-3xl text-gray-900 leading-snug font-semibold">
            {site.intro}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#fcf5f0]" id="services">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">
            Business Support Built Around Your Goals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Whatever stage your business is at, we bring the mix of accuracy and practical advice it needs.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-r from-[#8B1A4A]/10 to-[#fdf6f3]">
                  <SafeImage 
                    src={`/images/services/${service.slug}.jpg`} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23fdf6f3'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='20' fill='%238B1A4A' text-anchor='middle'%3EService Image%3C/text%3E%3C/svg%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-900">
                      Learn More →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B1A4A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">Built Around Small Business</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            We understand the unique challenges of running a small business in Australia
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B1A4A]/10 shrink-0">
                  <item.icon className="w-6 h-6 text-[#8B1A4A]" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#fcf5f0]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">
              Meet Your Bookkeeping Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Experienced professionals dedicated to your business success
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-4 border-4 border-[#8B1A4A]/20">
                  <AvatarImage 
                    name={member.name}
                    src={member.photo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#8B1A4A] font-semibold mt-1">{member.role}</p>
                <p className="text-xs text-gray-600 mt-2">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8B1A4A]/20">
                    <AvatarImage 
                      name={testimonial.name}
                      src={testimonial.avatar}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-3">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#fcf5f0]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            Industries
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">Industries We Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Specialized bookkeeping services for various industries
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <span
                key={industry}
                className="text-sm text-gray-900 bg-white border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#8B1A4A] hover:text-[#8B1A4A] hover:shadow-md transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            A simple, transparent process designed for your peace of mind
          </p>
          <div className="mt-14 max-w-3xl mx-auto text-left">
            {howWeWork.map((step, index) => (
              <div key={step.title} className="flex gap-6 border-l-2 border-[#8B1A4A]/30 pl-6 pb-10 last:pb-0 relative group">
                <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#8B1A4A] text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <div className="bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-[#fcf5f0]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A] mb-6">
            FAQs
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Quick answers to common questions about our services
          </p>
          <div className="mt-12 space-y-3 text-left">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group border border-gray-200 rounded-2xl px-6 py-4 bg-white hover:shadow-md transition-shadow open:shadow-md">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 flex items-center justify-between gap-4 list-none">
                  {faq.question}
                  <span className="text-[#8B1A4A] group-open:rotate-45 transition-transform text-2xl leading-none font-light">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed pt-3 border-t border-gray-200">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 font-semibold text-[#8B1A4A] hover:text-[#6b1238] transition-colors group">
              View all FAQs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Ready to get your books in order?
              </h2>
              <p className="text-white/70 mt-4 leading-relaxed">
                Have a look through our services and find the support that fits your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B1A4A] px-8 py-4 font-semibold text-white hover:bg-[#6b1238] transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-[#8B1A4A]" />
                <span>1300 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-[#8B1A4A]" />
                <span>hello@yourbookkeeping.com.au</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-[#8B1A4A]" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}