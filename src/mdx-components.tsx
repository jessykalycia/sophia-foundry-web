import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 font-raleway text-2xl font-bold text-text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-raleway text-xl font-semibold text-text-primary">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 font-figtree text-[1.0625rem] leading-[1.75] text-text-secondary">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-4 list-disc space-y-2 font-figtree text-text-secondary">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-text-accent underline underline-offset-4 transition-colors hover:text-purple-bright"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-purple-primary/50 pl-6 font-figtree italic text-text-secondary">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-bg-elevated px-1.5 py-0.5 font-space-mono text-sm text-text-primary">
        {children}
      </code>
    ),
    hr: () => <hr className="my-8 border-border-subtle" />,
    ...components,
  };
}
