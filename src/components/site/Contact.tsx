import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="mt-5 text-4xl uppercase sm:text-5xl lg:text-6xl">
              {t.contact.headingA}
              <span className="text-primary">{t.contact.headingHighlight}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t.contact.body}
            </p>
            <div className="tibeb-rule mt-10 w-32" />
          </div>

          <dl className="grid gap-px self-start border border-border bg-border">
            <div className="card-panel border-0 p-8">
              <dt className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {t.contact.email}
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:peter.morris@strategy-innovations.com"
                  className="font-display text-lg text-foreground transition-colors hover:text-primary"
                >
                  peter.morris@strategy-innovations.com
                </a>
              </dd>
            </div>
            <div className="card-panel border-0 p-8">
              <dt className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {t.contact.phone}
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:+447557162457"
                  className="font-display text-lg text-foreground transition-colors hover:text-primary"
                >
                  +44 7557 162457
                </a>
              </dd>
            </div>
            <div className="card-panel border-0 p-8">
              <dt className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {t.contact.company}
              </dt>
              <dd className="mt-2 font-display text-lg">{t.contact.person}</dd>
              <dd className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {t.contact.offices}
              </dd>
              <dd className="mt-1 text-sm text-foreground">{t.contact.uk}</dd>
              <dd className="text-sm text-foreground">{t.contact.et}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="tibeb-rule" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span className="font-display text-lg uppercase">
          Strategy<span className="text-primary">*</span> Innovations
        </span>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {t.contact.uk} / {t.contact.et}
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {t.contact.footerTag}
        </p>
      </div>
    </footer>
  );
}
