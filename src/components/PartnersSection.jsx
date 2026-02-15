import stripeLogo from "../assets/logo/Stripe.png";
import visaLogo from "../assets/logo/Visa.png";
import ycLogo from "../assets/logo/ycombinator-logo.png";

import patrickImg from "../assets/patrick.jpg";
import ottoImg from "../assets/otto-williams.jpeg";
import michaelImg from "../assets/michael-siebel-headshot.jpeg";

export default function PartnersSection() {
  const cards = [
    {
      brandLogo: stripeLogo,
      brandAlt: "Stripe",
      quote:
        "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
      personImg: patrickImg,
      personName: "Patrick Collison",
      personTitle: "CEO, Stripe",
    },
    {
      brandLogo: visaLogo,
      brandAlt: "Visa",
      quote:
        "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
      personImg: ottoImg,
      personName: "Otto Williams",
      personTitle: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa",
    },
    {
      brandLogo: ycLogo,
      brandAlt: "Y Combinator",
      quote:
        "As YC’s first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
      personImg: michaelImg,
      personName: "Michael Seibel",
      personTitle: "CEO, Partner, Y Combinator",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* faint ring pattern on the right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-60">
        <RingPattern />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Backed by strong global
            <br />
            partners
          </h2>
          <p className="mt-5 text-lg leading-7 text-slate-700">
            Paystack is backed by notable investors as well as some of the best payments companies on the planet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((c) => (
            <PartnerCard key={c.brandAlt} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  brandLogo,
  brandAlt,
  quote,
  personImg,
  personName,
  personTitle,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <img src={brandLogo} alt={brandAlt} className="h-8 w-auto" />

      <p className="mt-6 text-base leading-7 text-slate-700">{quote}</p>

      <div className="mt-10 flex items-center gap-4">
        <img
          src={personImg}
          alt={personName}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="text-base font-semibold text-slate-900">{personName}</div>
          <div className="mt-0.5 text-sm text-slate-600">{personTitle}</div>
        </div>
      </div>
    </div>
  );
}


function RingPattern() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dashRing"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <rect width="16" height="16" fill="transparent" />
          <circle cx="8" cy="8" r="1.2" fill="#e6eef6" />
        </pattern>
      </defs>

      {/* big faint rings */}
      <circle cx="520" cy="120" r="210" fill="none" stroke="url(#dashRing)" strokeWidth="36" />
      <circle cx="520" cy="120" r="150" fill="none" stroke="url(#dashRing)" strokeWidth="28" />
      <circle cx="520" cy="120" r="95" fill="none" stroke="url(#dashRing)" strokeWidth="22" />
    </svg>
  );
}
