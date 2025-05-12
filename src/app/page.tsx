"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground">
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
                className="flex-1 h-16 text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a call to sell more ${product}`}>Book a call</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-16 text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#get-started" aria-label="Get started">Get started</a>
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

          <section className="flex flex-col gap-6" aria-labelledby="designs-heading">
            <h2 id="designs-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">
              We design what gets their attention.
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
                className="flex-1 h-16 text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a call to sell more ${product}`}>Book a call</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-16 text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#get-started" aria-label="Get started">Get started</a>
              </Button>
            </div>
          </section>

          <section className="flex flex-col gap-6" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-foreground">Still got questions?</h2>
            <div className="flex flex-col gap-8">
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">What if I don&apos;t make $5000 more?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">We&apos;ll halve our fee for you that month. We share the risk—if you don&apos;t win, we don&apos;t win.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">What do I get for $5000?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Everything you need to get attention and sell more: custom branding, a website (if you need one), and unlimited design assets—posters, banners, reels, posts, stories, and more—delivered every month, tailored to your business and audience.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">I don&apos;t have a brand or website yet. Can I still sign up?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Absolutely. Branding and website are included in the package. We&apos;ll help you build a strong foundation from scratch.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">How fast do I get my designs?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Most requests are delivered within 3-5 business days. We work fast so you can move fast.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">Can I cancel anytime?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Yes, you can cancel at any time. There are no long-term contracts or hidden fees.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">What if I don&apos;t like the designs?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">We offer unlimited revisions until you&apos;re happy. Your satisfaction is our priority.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">Can I request revisions?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Yes! We&apos;ll keep working with you until the designs are just right.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">How do I communicate my needs?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">You&apos;ll have a dedicated point of contact and can communicate via email, chat, or scheduled calls—whatever works best for you.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">What industries do you work with?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">We work with all industries—from retail and food to tech, services, and more. If you sell, we can help you sell more.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">How do I get started?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Just book a call or click &quot;Get started.&quot; We&apos;ll discuss your needs, answer any questions, and get you set up right away.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">Is everything really unlimited?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Yes—unlimited requests and revisions, delivered one at a time, as fast as possible. We want you to get the most value every month.</p>
              </article>
              <article>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-foreground">What if I already have a brand or website?</h3>
                <p className="text-xl sm:text-2xl text-muted-foreground">Great! We&apos;ll work with your existing assets or help you refresh them as needed.</p>
              </article>
            </div>
          </section>
          <section className="flex flex-col gap-6" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Small team, big results.
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-muted-foreground">
              We&apos;re a small team of two, but we&apos;re dedicated to helping you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-8">
              <div className="flex flex-col gap-2">
                <Avatar className="w-40 h-40 border-2 border-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">MA</AvatarFallback>
                </Avatar>
                <span className="text-2xl font-semibold text-foreground mt-2">Maged Abdeslalam</span>
                <span className="text-2xl text-muted-foreground">Brand and product design.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Avatar className="w-40 h-40 border-2 border-secondary">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">YO</AvatarFallback>
                </Avatar>
                <span className="text-2xl font-semibold text-foreground mt-2">Yasmin Ouf</span>
                <span className="text-2xl text-muted-foreground">Digital marketing and strategy.</span>
              </div>
            </div>
          </section>
          <footer className="flex flex-col gap-6" aria-labelledby="copyright-heading">
            <h2 id="copyright-heading" className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-2 text-foreground">
              Still worried? Let&apos;s talk.
            </h2>
            <div className="flex flex-row gap-4 w-full">
              <Button
                size="lg"
                className="flex-1 h-16 text-xl rounded-2xl flex items-center justify-center"
                asChild
              >
                <a href="#book-call" aria-label={`Book a no-obligation call to discuss selling more ${product}`}>Book a call</a>
              </Button>
            </div>
            <span className="text-xl text-muted-foreground">© Sell More Promise.</span>
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
