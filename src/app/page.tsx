import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Tekitera — Digital solutions for growing businesses
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We build scalable websites, consult on growth strategy, and deliver measurable results. Partner with us to transform your digital presence and drive revenue.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0f172a] text-white px-5 transition-colors md:w-[180px]"
            href="mailto:hello@tekitera.com"
          >
            Contact Sales
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:bg-black/[.04] md:w-[180px]"
            href="/services"
          >
            Our Services
          </a>
        </div>
      </main>
    </div>
  );
}
