import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("studioTitle") };
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("about");

  return (
    <div className="pt-32">
      {/* Studio Identity */}
      <section className="pt-[clamp(4rem,7vw,6rem)] pb-[clamp(1rem,2vw,1.5rem)]">
        <div className="container">
          <FadeIn>
            <div className="max-w-[780px]">
              <h1 className="font-raleway text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-text-primary">
                {t("studioTitle")}
              </h1>
              <p className="mt-8 font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
                {t("studioText")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="pt-[clamp(1rem,2vw,1.5rem)] pb-6">
        <div className="container">
          <FadeIn>
            <div className="max-w-[780px]">
              <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
                {t("founderTitle")}
              </span>
              <h2 className="mt-4 font-raleway text-2xl font-bold text-text-primary">
                {t("founderName")}
              </h2>
              <p className="mt-1 font-space-mono text-sm text-text-muted">
                {t("founderRole")}
              </p>
              <p className="mt-6 font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
                {t("founderBio")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="pt-6 pb-[1.5rem]">
        <div className="container">
          <FadeIn>
            <div className="max-w-[780px]">
              <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
                {t("missionTitle")}
              </span>
              <p className="mt-6 font-figtree text-xl leading-relaxed text-text-secondary">
                {t("missionText")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="pt-[1.5rem] pb-[clamp(4rem,7vw,6rem)]">
        <div className="container">
          <FadeIn>
            <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
              {t("valuesTitle")}
            </span>
          </FadeIn>
          <FadeInStagger className="mt-8 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {(["coherence", "craft", "access"] as const).map((value) => (
              <FadeInStaggerChild key={value} className="h-full">
                <div className="h-full rounded-xl border border-border-default border-l-2 border-l-purple-primary bg-bg-surface p-10 transition-all duration-250 hover:border-purple-border hover:bg-purple-ghost">
                  <h3 className="font-raleway text-[1.25rem] font-semibold text-text-primary">
                    {t(value)}
                  </h3>
                  <p className="mt-3 font-figtree text-text-secondary leading-[1.75]">
                    {t(`${value}Desc`)}
                  </p>
                </div>
              </FadeInStaggerChild>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
