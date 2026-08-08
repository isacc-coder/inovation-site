import { useI18n } from "@/lib/i18n";

export function Approach() {
  const { t } = useI18n();

  return (
    <section id="approach" className="border-b border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">{t.approach.eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-3xl uppercase sm:text-4xl lg:text-5xl">
          {t.approach.heading}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t.approach.intro}
        </p>

        <ol className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-5">
          {t.approach.stages.map((s) => (
            <li key={s.n} className="card-panel card-panel-hover border-0 p-8">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-primary">
                {s.n}
              </span>
              <h3 className="mt-4 text-2xl uppercase">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
