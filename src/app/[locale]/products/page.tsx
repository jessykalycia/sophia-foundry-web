import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/motion";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("title") };
}

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("products");

  return (
    <div className="pt-32">
      <section className="py-[clamp(4rem,7vw,6rem)]">
        <div className="container">
          <FadeIn>
            <h1 className="font-raleway text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-text-primary">
              {t("header")}
            </h1>
          </FadeIn>

          <FadeInStagger className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {/* Sophia Forge */}
            <FadeInStaggerChild>
              <a
                href="https://sophiaforge.com"
                className="group flex h-full flex-col rounded-xl border border-border-default border-l-2 border-l-purple-primary bg-bg-surface p-10 transition-all duration-250 hover:border-purple-border hover:bg-purple-ghost"
              >
                <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-purple-primary">
                  {t("forgeTitle")}
                </span>
                <p className="mt-4 flex-1 font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
                  {t("forgeDesc")}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-figtree text-sm text-text-accent">
                  {t("forgeLink")} &rarr;
                </span>
              </a>
            </FadeInStaggerChild>

            {/* Coming Soon */}
            <FadeInStaggerChild>
              <div className="flex h-full flex-col rounded-xl border border-dashed border-border-default bg-transparent p-10 opacity-50">
                <span className="font-space-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                  // {t("comingTitle")}
                </span>
                <p className="mt-4 font-figtree text-[1.0625rem] leading-[1.75] text-text-muted">
                  {t("comingDesc")}
                </p>
              </div>
            </FadeInStaggerChild>
          </FadeInStagger>

          <FadeIn delay={0.3}>
            <p className="mt-16 font-figtree text-sm italic text-text-secondary">
              {t("philosophy")}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
