import globalBrands from "../assets/International-Businesses.svg";
import entrepreneurs from "../assets/For-entrepreneurs.svg";
import largeOrgs from "../assets/For-Large-Corporations.svg";

export default function TrustedSection() {
  const cards = [
    {
      img: globalBrands,
      title: "Paystack for\nGlobal Brands",
      body: "We help global brands accept payments from across Africa",
    },
    {
      img: entrepreneurs,
      title: "Paystack for\nEntrepreneurs",
      body: "From startup to scale-up, we can support you at every stage of your businesses’ growth",
    },
    {
      img: largeOrgs,
      title: "Paystack for\nLarge Organizations",
      body: "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
    },
  ];

  return (
    <section className="w-full bg-[#eaf6fb]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Trusted by 200,000+
            <br />
            businesses
          </h2>
          <p className="mt-5 text-lg leading-7 text-slate-700">
            Thousands of organizations of all sizes trust Paystack to grow their business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <TrustedCard key={c.body} img={c.img} title={c.title} body={c.body} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedCard({ img, title, body }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.08)]">
      <img src={img} alt="" className="h-16 w-auto" draggable="false" />

      <h3 className="mt-6 whitespace-pre-line text-2xl font-bold leading-snug text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-700">{body}</p>

      <a
        href="#"
        className="mt-7 inline-flex items-center gap-3 text-base font-semibold text-slate-900 hover:text-green-700"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-green-600 text-green-600">
          <ArrowIcon className="h-4 w-4" />
        </span>
        Learn More
      </a>
    </div>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.2 4.8a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4l2.3-2.3H4a1 1 0 1 1 0-2h9.5l-2.3-2.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
