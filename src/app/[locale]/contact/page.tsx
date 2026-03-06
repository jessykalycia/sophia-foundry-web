"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-32">
      <section className="py-[clamp(4rem,7vw,6rem)]">
        <div className="container max-w-xl">
          <FadeIn>
            <h1 className="font-raleway text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-text-primary">
              {t("title")}
            </h1>
            <p className="mt-4 font-figtree text-lg text-text-secondary">
              {t("intro")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-figtree text-sm font-medium text-text-secondary"
                >
                  {t("name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-figtree text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-figtree text-sm font-medium text-text-secondary"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-figtree text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-figtree text-sm font-medium text-text-secondary"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full resize-none rounded-md border border-border-default bg-bg-surface px-4 py-3 font-figtree text-text-primary placeholder:text-text-muted focus:border-border-strong focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-md bg-purple-primary px-8 py-3.5 font-figtree text-[0.9375rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-purple-bright disabled:opacity-50"
              >
                {status === "sending" ? "..." : t("send")}
              </button>

              {status === "sent" && (
                <p className="font-figtree text-sm text-purple-primary">
                  {t("success")}
                </p>
              )}
              {status === "error" && (
                <p className="font-figtree text-sm text-destructive">
                  {t("error")}
                </p>
              )}
            </form>

            <p className="mt-8 font-figtree text-sm text-text-secondary">
              {t("orEmail")}{" "}
              <a
                href="mailto:jessyka@sophiafoundry.com"
                className="text-text-primary transition-colors hover:text-purple-bright"
              >
                jessyka@sophiafoundry.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
