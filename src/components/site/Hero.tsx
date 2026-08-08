import heroImage from "@/assets/hero-addis.jpg";
import heroVideo from "@/assets/hero-addis.mp4";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImage}
        alt={t.hero.imageAlt}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        poster={heroImage}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="ink-veil absolute inset-0" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <p className="eyebrow rise-in">{t.hero.eyebrow}</p>

        <h1 className="rise-in mt-6 max-w-5xl text-[2.6rem] uppercase sm:text-6xl lg:text-[5.2rem]">
          {t.hero.titleA}
          <span className="text-primary">{t.hero.titleHighlight}</span>
          {t.hero.titleB}
        </h1>

        <p className="rise-in mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          {t.hero.body}
        </p>

        <div className="rise-in mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#divisions"
            className="border border-foreground/40 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {t.hero.locations}
        </p>
      </div>

      <div className="tibeb-rule absolute inset-x-0 bottom-0" />
    </section>
  );
}
