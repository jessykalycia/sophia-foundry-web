import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";
import { HeroBackground } from "@/components/hero-background";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 text-center">
          <FadeIn>
            <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
              {t("hero.eyebrow")}
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mt-6 font-raleway text-[clamp(3rem,8vw,7rem)] font-extrabold leading-none tracking-tight text-text-primary" style={{ letterSpacing: "-0.02em" }}>
              {t("hero.tagline")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mx-auto mt-6 max-w-[580px] font-figtree text-[1.0625rem] leading-relaxed text-text-secondary">
              {t("hero.subline")}
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <a
              href="https://sophiaforge.com"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-purple-primary px-8 py-3.5 font-figtree text-[0.9375rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-purple-bright"
            >
              {t("hero.cta")}
            </a>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-space-mono text-[0.6875rem] uppercase tracking-[0.15em] text-text-muted">
            scroll
          </span>
          <div className="h-12 w-px animate-scroll-pulse bg-gradient-to-b from-purple-dim to-transparent" />
        </div>
      </section>

      {/* Mission */}
      <section className="pt-4 pb-[clamp(4rem,7vw,6rem)]">
        <div className="container text-center">
          <FadeIn>
            <p className="mx-auto max-w-[780px] font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
              {t("mission.text")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-[clamp(4rem,7vw,6rem)]">
        <div className="container">
          <FadeIn>
            <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
              {t("whatWeBuild.eyebrow")}
            </span>
            <h2 className="mt-3 font-raleway text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-tight text-text-primary">
              {t("whatWeBuild.title")}
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-12 grid w-full grid-cols-1 gap-6">
            {/* Games */}
            <FadeInStaggerChild>
              <div className="grid grid-cols-[140px_1fr] items-start gap-8 rounded-xl border border-border-default border-l-2 border-l-purple-primary bg-bg-surface px-10 py-8 transition-all duration-250 hover:border-purple-border hover:bg-purple-ghost">
                <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
                  {t("whatWeBuild.games.label")}
                </span>
                <div>
                  <h3 className="font-raleway text-[1.25rem] font-semibold text-text-primary">
                    {t("whatWeBuild.games.title")}
                  </h3>
                  <p className="mt-2 font-figtree text-text-secondary leading-[1.75]">
                    {t("whatWeBuild.games.description")}
                  </p>
                </div>
              </div>
            </FadeInStaggerChild>

            {/* Tools */}
            <FadeInStaggerChild>
              <a
                href="https://sophiaforge.com"
                className="group grid grid-cols-[140px_1fr] items-start gap-8 rounded-xl border border-border-default border-l-2 border-l-purple-primary bg-bg-surface px-10 py-8 transition-all duration-250 hover:border-purple-border hover:bg-purple-ghost"
              >
                <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
                  {t("whatWeBuild.tools.label")}
                </span>
                <div>
                  <h3 className="font-raleway text-[1.25rem] font-semibold text-text-primary">
                    Sophia Forge
                  </h3>
                  <p className="mt-2 font-figtree text-text-secondary leading-[1.75]">
                    {t("whatWeBuild.tools.forgeDescription")}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-figtree text-sm text-text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    sophiaforge.com &rarr;
                  </span>
                </div>
              </a>
            </FadeInStaggerChild>
          </FadeInStagger>
        </div>
      </section>

      {/* Sophia Forge Highlight */}
      <section className="py-[clamp(4rem,7vw,6rem)]">
        <div className="container grid gap-12 md:grid-cols-[2fr_3fr] md:items-center">
          <FadeIn>
            <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
              {t("forgeHighlight.label")}
            </span>
            <h2 className="mt-3 whitespace-nowrap font-raleway text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-text-primary">
              {t("forgeHighlight.title")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
              {t("forgeHighlight.pitch")}
            </p>
            <a
              href="https://sophiaforge.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-purple-primary px-8 py-3.5 font-figtree text-[0.9375rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-purple-bright"
            >
              {t("forgeHighlight.cta")}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-[clamp(4rem,7vw,6rem)]">
        <div className="container text-center">
          <FadeIn>
            <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
              {t("founderNote.title")}
            </span>
            <blockquote className="mt-6 font-figtree text-xl italic leading-relaxed text-text-secondary sm:text-2xl">
              &ldquo;{t("founderNote.text")}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-raleway font-semibold text-text-primary">
                {t("founderNote.name")}
              </p>
              <p className="mt-1 font-space-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                {t("founderNote.role")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
