import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Divisions } from "@/components/site/Divisions";
import { Approach } from "@/components/site/Approach";
import { Focus } from "@/components/site/Focus";
import { Contact, Footer } from "@/components/site/Contact";
import { ChatWidget } from "@/components/site/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategy Innovations — Building Institutions in Emerging Markets" },
      {
        name: "description",
        content:
          "We design, licence and stand up regulated financial institutions in East Africa — and build the technology platforms and engineering teams that run them.",
      },
      {
        property: "og:title",
        content: "Strategy Innovations — Building Institutions in Emerging Markets",
      },
      {
        property: "og:description",
        content:
          "From feasibility and licensing to capital structure, go-live and the technology behind it. Capital markets, institutions, technology and talent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Approach />
        <Focus />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </LanguageProvider>
  );
}
