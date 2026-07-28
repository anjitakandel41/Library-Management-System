"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Trail {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  trail?: Trail[];
}

export function PageHero({ title, subtitle, trail }: PageHeroProps) {
  return (
    <section className="bg-[#fdf6f3] border-b border-gray-200">
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Breadcrumb */}
        {trail && trail.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            {trail.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#8B1A4A] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
                {index < trail.length - 1 && <ChevronRight className="w-4 h-4" />}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function EyebrowPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#8B1A4A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A4A]">
      {children}
    </span>
  );
}