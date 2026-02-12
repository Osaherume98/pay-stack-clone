import apiIllustration from "../assets/Robust-Suite.png";

export default function ApiSection() {
  const points = [
    "Collect one-time and recurring payments from your app or website",
    "Make instant transfers",
    "Retrieve all your transaction and customer data",
    "Verify the identity of customers",
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              Build custom payments
              <br />
              experiences with well-
              <br />
              documented APIs
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">
              Developers love our thorough, well-documented APIs that let you to build
              everything from simple weekend projects, to complex financial products
              serving hundreds of thousands of customers. If you can imagine it, you can
              build it with Paystack.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e9f7ef]">
                    <CheckIcon className="h-5 w-5 text-green-600" />
                  </span>
                  <span className="text-base font-semibold leading-6 text-slate-900">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 text-base font-semibold text-green-600 hover:text-green-700"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-green-600">
                <ArrowIcon className="h-4 w-4" />
              </span>
              Paystack API Quickstart
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={apiIllustration}
              alt="API illustration"
              className="w-full max-w-xl object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42 0L3.29 9.25a1 1 0 1 1 1.42-1.4l3.64 3.69 6.49-6.55a1 1 0 0 1 1.414-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.2 4.8a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4l2.3-2.3H4a1 1 0 1 1 0-2h9.5l-2.3-2.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
