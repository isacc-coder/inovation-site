import { useState } from "react";
import marketsImage from "@/assets/markets.jpg";
import techImage from "@/assets/tech.jpg";
import { useI18n } from "@/lib/i18n";

export function Divisions() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"one" | "two">("one");
  const cards = tab === "one" ? t.divisions.one : t.divisions.two;

  return (
    <section id="divisions" className="border-b border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">{t.divisions.eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-3xl uppercase sm:text-4xl lg:text-5xl">
          {t.divisions.heading}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t.divisions.intro}
        </p>

        <div className="mt-12 flex flex-wrap gap-px border border-border bg-border">
          <button
            type="button"
            onClick={() => setTab("one")}
            className={`flex-1 px-6 py-5 text-left transition-colors ${
              tab === "one" ? "bg-primary text-primary-foreground" : "bg-surface hover:bg-surface-raised"
            }`}
          >
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.24em] opacity-70">
              {t.divisions.tabOneLabel}
            </span>
            <span className="mt-1 block font-display text-lg uppercase">
              {t.divisions.tabOneTitle}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setTab("two")}
            className={`flex-1 px-6 py-5 text-left transition-colors ${
              tab === "two" ? "bg-primary text-primary-foreground" : "bg-surface hover:bg-surface-raised"
            }`}
          >
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.24em] opacity-70">
              {t.divisions.tabTwoLabel}
            </span>
            <span className="mt-1 block font-display text-lg uppercase">
              {t.divisions.tabTwoTitle}
            </span>
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {tab === "one" ? (
              <>
                <p>{t.divisions.oneP1}</p>
                <p className="text-foreground">{t.divisions.oneP2}</p>
              </>
            ) : (
              <>
                <p>
                  <span className="text-primary">{t.divisions.twoBuild}</span>
                  {t.divisions.twoP1}
                </p>
                <p>{t.divisions.twoP2}</p>
                <p className="text-foreground">{t.divisions.twoP3}</p>
              </>
            )}
          </div>

          <img
            src={tab === "one" ? marketsImage : techImage}
            alt={tab === "one" ? t.divisions.imageOneAlt : t.divisions.imageTwoAlt}
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full border border-border object-cover"
          />
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.n} className="card-panel card-panel-hover border-0 p-8">
              <span className="font-display text-3xl text-primary/40">{c.n}</span>
              <h3 className="mt-4 text-lg uppercase leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.lead}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
