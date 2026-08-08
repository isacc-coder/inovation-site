import tibeb from "@/assets/tibeb-texture.jpg";
import { useI18n } from "@/lib/i18n";

export function Focus() {
  const { t } = useI18n();

  return (
    <section id="focus" className="relative isolate overflow-hidden border-b border-border py-24 lg:py-32">
      <img
        src={tibeb}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={640}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">{t.focus.eyebrow}</p>
        <h2 className="mt-5 max-w-4xl text-3xl uppercase sm:text-4xl lg:text-5xl">
          {t.focus.heading}
        </h2>

        <div className="mt-10 grid gap-8 text-base leading-relaxed text-muted-foreground lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <p>
              {t.focus.p1a}
              <span className="text-foreground">{t.focus.p1Emphasis}</span>
              {t.focus.p1b}
            </p>
            <p>{t.focus.p2}</p>
          </div>
          <div className="space-y-5">
            <p>{t.focus.p3}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
          {t.focus.facts.map((f) => (
            <div key={f.title} className="card-panel card-panel-hover border-0 p-8">
              <h3 className="text-base uppercase leading-snug text-primary">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
