import type { Metadata } from "next";
import Link from "next/link";
import { BookText } from "lucide-react";
import "./globals.css";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.fullName} | Bookkeeping, Payroll & Business Advisory`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

const dropdownItems = new Set(["Services", "Industries"]);

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-blush">
      <div className="container flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full icon-badge">
            <BookText className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-ink">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 hover:text-maroon transition-colors"
            >
              {item.name}
              {dropdownItems.has(item.name) && <span className="text-red-accent">+</span>}
            </Link>
          ))}
        </nav>
        <Link
          href="/services"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-2.5 font-body text-sm font-semibold text-white hover:bg-maroon-deep transition-colors"
        >
          Explore Services
        </Link>
      </div>
      <nav className="md:hidden flex items-center gap-5 overflow-x-auto px-6 pb-3 font-body text-sm font-medium text-ink">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-maroon transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full icon-badge">
              <BookText className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-extrabold">{site.name}</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            {site.description}
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
            Menu
          </h3>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
            Software We Support
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Xero</li>
            <li>MYOB</li>
            <li>QuickBooks</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container px-6 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
