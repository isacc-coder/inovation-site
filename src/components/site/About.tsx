import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="border-b border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h2 className="mt-5 max-w-4xl text-3xl uppercase sm:text-4xl lg:text-5xl">
          {t.about.heading}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>{t.about.p3}</p>
            <p>
              {t.about.p4}
              <span className="text-foreground">{t.about.p4Emphasis}</span>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.about.pillars.map((p) => (
            <div key={p.title} className="card-panel card-panel-hover border-0 p-8">
              <div className="tibeb-rule w-12" />
              <h3 className="mt-5 text-base uppercase leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
