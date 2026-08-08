import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#divisions", label: t.nav.divisions },
    { href: "#approach", label: t.nav.approach },
    { href: "#focus", label: t.nav.focus },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langToggle = (
    <div
      aria-label={t.nav.langLabel}
      className="flex items-center border border-border text-[0.65rem] font-bold uppercase tracking-[0.16em]"
    >
      {(["en", "am"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`px-3 py-2 transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
          }`}
        >
          {l === "en" ? "EN" : "አማ"}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-background/92 border-b border-border backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="leading-none">
          <span className="font-display text-xl tracking-tight">
            STRATEGY<span className="text-primary">*</span>
          </span>
          <span className="block text-[0.6rem] font-semibold tracking-[0.42em] text-muted-foreground">
            INNOVATIONS
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          {langToggle}
          <a
            href="#contact"
            className="bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {langToggle}
          <button
            type="button"
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.16em]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
