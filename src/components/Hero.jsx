import AnimatedMap from "./AnimatedMap";
import dominos from "../assets/logo-wall/dominos.svg";
import mtn from "../assets/logo-wall/mtn.svg";
import bolt from "../assets/logo-wall/bolt.svg";
import axa from "../assets/logo-wall/axa-mansard.svg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#eaf7ee]">
      <div className="absolute  inset-0 z-0" style={{opacity: 1.5}}>
        <AnimatedMap />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-24 lg:pt-20">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

function HeroLeft() {
  const logos = [dominos, mtn, bolt, axa];

  return (
    <div>
      <h1 className="text-[35px] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-[52px]">
        Modern online and offline payments for Africa
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">
        Paystack helps business in africa get paid by anyone, anywhere in the world
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-semibold text-white hover:bg-green-700 transition">
          Create a free account
        </a>

        <a href="#" className="inline-flex h-11 items-center justify-center text-green-600 px-6 text-sm font-semibold transition">
          or Contact Sales
        </a>
      </div>

      <div className="mt-10 text-base font-semibold text-slate-800">
        Trusted by over 200,000 businesses
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-6 w-auto" />
        ))}
      </div>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="relative flex flex-col">
      <div className="mx-auto w-full max-w-md rounded-2xl p-6 flex flex-col">
        <div className="h-40" />

        <a href="#" className="block font-semibold text-slate-900">
          Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack
        </a>
      </div>

      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
    </div>
  );
}