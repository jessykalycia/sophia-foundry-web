"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/contact", label: "contact" },
] as const;

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border-subtle">
      <div className="container pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-raleway text-[1.5rem] font-bold text-purple-primary">
              Sophia Foundry
            </span>
            <p className="mt-2 font-space-mono text-sm text-text-muted">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-figtree text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {t(`nav.${label}`)}
              </Link>
            ))}
          </div>

          {/* Contact & Language */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${t("footer.email")}`}
              className="font-figtree text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t("footer.email")}
            </a>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8 text-center font-space-mono text-xs text-text-muted">
          &copy; 2026 {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
