"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const EXAMPLES = [
  "anything"
];

export default function Home() {
  const [product, setProduct] = useState(EXAMPLES[0]);

  useEffect(() => {
    const idx = Math.floor(Math.random() * EXAMPLES.length);
    setProduct(EXAMPLES[idx].slice(0, 20));
  }, []);

  const handleProductChange = (value: string) => {
    setProduct(value.slice(0, 20));
  };

  return (
    <>
      <Head>
        <title>Sell More {product} | Design-Driven Growth</title>
        <meta
          name="description"
          content="We help you sell more by designing everything you need to get attention—posters, banners, reels, posts, stories, and more—online and offline. $5000/month. If you don't make at least that much more from our work, we'll halve our fee. "
        />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 sm:px-12 py-12 sm:py-24 font-sans">
        <div className="max-w-6xl w-full flex flex-col gap-20 text-left">
          <header className="flex flex-col gap-6" role="banner">
            <div className="flex items-center gap-4 mb-4">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
              >
                <circle cx="22" cy="22" r="22" fill="black" />
              </svg>
              <span className="text-xl font-semibold">The Sell More Promise</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-2 text-foreground">
              Sell more {" "}
              <EditableProduct
                value={product}
                onChange={handleProductChange}
                placeholder="x"
              />
              .
            </h1>
            <div className="flex flex-row gap-4 w-full">
              <Button
                size="lg"
                className="flex-1 h-16 text-md sm:text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a call to sell more ${product}`}>Book a call</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-16 text-md sm:text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#get-started" aria-label="Start Selling More">Start Selling More</a>
              </Button>
            </div>
          </header>

          <section className="flex flex-col gap-6" aria-labelledby="work-gallery-heading">
            <h2 id="work-gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Customers we&apos;ve helped sell more.
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">We helped <a href="https://caphillkitchens.com/s/halal-smash-brgr/1525-13th-ave-seattle/2085b5c6-53f5-413d-9773-48f07cdcce2d" target="_blank" rel="noopener noreferrer" className="underline text-primary">Halal Smash Brgrs</a> sell <span className="font-bold text-primary">2500+</span> more smashed burgers. <br />That&apos;s over <span className="font-bold text-primary">$30,000</span> in additional monthly revenue.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
              <Image src="/001.png" alt="Branding and packaging for Sweet Treats Bakery" className="w-full h-auto rounded-xs shadow" width={600} height={800} priority />
              <Image src="/002.png" alt="Fitness campaign poster for Urban Fitness" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/US_11.png" alt="Plant shop spring collection ad for Green Thumb Plants" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Free_2_ID_Cards_Mockup.png" alt="Professional ID card design for TechFlow Consulting" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Business Cards Mockups.png" alt="Business card set for Bella Boutique" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Free Lightbox Mockup.png" alt="Lightbox signage for Fresh Bites Cafe" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Free_Delivery_Bag_Mockup_3.png" alt="Delivery bag branding for local restaurant" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Free_2_Paper_Food_Bag_Mockup.png" alt="Paper food bag design for takeout service" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
              <Image src="/Free_Billboard_Mockup.png" alt="Billboard campaign for retail store" className="w-full h-auto rounded-xs shadow" width={600} height={800} />
            </div>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              We find who is looking for you.
            </h2>
            <ul className="list-disc list-inside pl-6">
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground mb-2">
                Demographics: Age, location, income, and interests.
              </li>
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
                Behaviors: Shopping habits, social media usage, and buying triggers.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="designs-heading">
            <h2 id="designs-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              To design what gets their attention.
            </h2>
            <ul className="list-disc list-inside pl-6">
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground mb-2">
                Print: Posters, banners, business cards, and packaging.
              </li>
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
                Digital: Websites, Instagram posts, stories, reels, and ads.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="places-heading">
            <h2 id="places-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              At places where their attention is.
            </h2>
            <ul className="list-disc list-inside pl-6">
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground mb-2">
                Offline: Local events, in-store displays, and community boards.
              </li>
              <li className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
                Online: Instagram, Google, Facebook, and TikTok.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="brand-included-heading">
            <h2 id="brand-included-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              Need a new brand or website?
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
              No worries, branding and website are included in the package.
            </p>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              $5000/month. If you don&apos;t make at least that much more from our work, we&apos;ll halve our fee. Yes, really.
            </h2>
          </section>

          <section className="flex flex-col gap-6" role="contentinfo" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-2 text-foreground">
              Ready to sell more <span className="text-primary">{product}</span>?
            </h2>
            <div className="flex flex-row gap-4 w-full">
              <Button
                size="lg"
                className="flex-1 h-16 text-md sm:text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a call to sell more ${product}`}>Book a call</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-16 text-md sm:text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#get-started" aria-label="Start Selling More">Start Selling More</a>
              </Button>
            </div>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">Questions? We got you.</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">What if I don&apos;t make $5000 more?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  We&apos;ll halve our fee for you that month. We share the risk—if you don&apos;t win, we don&apos;t win.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">What do I get for $5000?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  Everything you need to get attention and sell more: custom branding, a website, and unlimited design assets—posters, banners, reels, posts, stories, and more—delivered every month, tailored to your business and audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">I don&apos;t have a brand or website yet. Can I still sign up?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  Absolutely. Branding and website are included in the package. We&apos;ll help you build a strong foundation from scratch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">How fast do I get my designs?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  Most requests are delivered within 3-5 business days. We work fast so you can move fast.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">Can I cancel anytime?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  Yes, you can cancel at any time. There are no long-term contracts or hidden fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-2xl sm:text-3xl font-semibold text-foreground">What if I don&apos;t like the designs?</AccordionTrigger>
                <AccordionContent className="text-xl sm:text-2xl text-muted-foreground">
                  We offer unlimited revisions until you&apos;re happy. Your satisfaction is our priority.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <section className="flex flex-col gap-6" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Local presence, global excellence.
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
              Two local teams backed by our global talent, all dedicated to your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-8">
              <div className="flex flex-col gap-2">
                <Avatar className="w-32 h-32 border-2 border-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">MA</AvatarFallback>
                </Avatar>
                <span className="text-2xl font-semibold text-foreground mt-2">Maged Abdelsalam</span>
                <span className="text-2xl text-muted-foreground">Brand and product design.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Avatar className="w-32 h-32 border-2 border-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">YO</AvatarFallback>
                </Avatar>
                <span className="text-2xl font-semibold text-foreground mt-2">Yasmin Ouf</span>
                <span className="text-2xl text-muted-foreground">Digital marketing and strategy.</span>
              </div>
            </div>
          </section>
          <footer className="flex flex-col gap-6" aria-labelledby="copyright-heading">
            <h2 id="copyright-heading" className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-2 text-foreground">
              Still haven&apos;t decided? Let&apos;s talk.
            </h2>
            <div className="flex flex-row gap-4 w-full">
              <Button
                size="lg"
                className="flex-1 h-16 text-md sm:text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a no-obligation call to discuss selling more ${product}`}>Book a call</a>
              </Button>
            </div>
            <span className="text-xl text-muted-foreground">© The Sell More Promise.</span>
          </footer>
        </div>
      </main>
    </>
  );
}

function EditableProduct({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  useEffect(() => {
    setTemp(value);
  }, [value]);

  function handleBlur() {
    setEditing(false);
    if (!temp.trim()) onChange(placeholder || "x");
    else onChange(temp.trim().slice(0, 20));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLInputElement).blur();
    }
  }

  return editing ? (
    <span className="relative inline-block align-baseline">
      <input
        ref={inputRef}
        value={temp}
        onChange={e => setTemp(e.target.value.slice(0, 20))}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-background border-b-2 border-primary text-primary text-5xl sm:text-6xl md:text-7xl font-semibold focus:outline-none transition-all"
        aria-label="What do you sell? (20 character limit)"
        maxLength={20}
        size={Math.max((temp || placeholder || 'x').length, 1)}
      />
      <span
        aria-hidden
        className="invisible whitespace-pre text-5xl sm:text-6xl md:text-7xl font-semibold"
      >
        {temp || placeholder || "x"}
      </span>
    </span>
  ) : (
    <span
      className="text-primary cursor-pointer underline decoration-dotted underline-offset-16 hover:decoration-solid transition-all"
      tabIndex={0}
      role="button"
      aria-label="Edit product name"
      onClick={() => setEditing(true)}
      onKeyDown={e => (e.key === "Enter" || e.key === " " ? setEditing(true) : undefined)}
    >
      {value || placeholder || "x"}
    </span>
  );
}
