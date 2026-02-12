import phoneHand from "../assets/Collect-Payments.gif";

export default function Payments() {
  const methodsLeft = ["Card", "Bank Account", "Bank Transfer", "USSD"];
  const methodsRight = ["Apple Pay", "Visa QR", "Mobile Money", "POS"];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Simple, easy payments
        </h2>
        <p className="mt-3 text-lg text-bold">
          Building a business is hard. Getting paid shouldn be.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <LeftImageCard />
          <RightContent methodsLeft={methodsLeft} methodsRight={methodsRight} />
        </div>
      </div>
    </section>
  );
}

function LeftImageCard() {
  return (
    <div className=" p-8 lg:p-10">
      <div className="flex items-end justify-center lg:h-[520px]">
        <img
          src={phoneHand}
          alt="Phone in hand"
          className="h-[480px] w-auto object-contain lg:h-[580px]  lg:h-[420px]"
          draggable="false"
        />
      </div>
    </div>
  );
}

function RightContent({ methodsLeft, methodsRight }) {
  return (
    <div className="pt-0">
      <h3 className="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
        Delight customers with a
        <br />
        seamless payments
        <br />
        experience
      </h3>

      <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">
        Give your customers the gift of modern, frictionless, painless payments.
        Integrate Paystack once and let your customers pay you however they want.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <ul className="space-y-4">
          {methodsLeft.map((m) => (
            <li key={m}>
              <MethodPill label={m} />
            </li>
          ))}
        </ul>

        <ul className="space-y-4">
          {methodsRight.map((m) => (
            <li key={m}>
              <MethodPill label={m} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MethodPill({ label }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg bg-[#e9f7ef] px-4 py-3">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
        <CheckIcon className="h-4 w-4 text-green-600" />
      </span>
      <span className="text-base font-semibold text-slate-900">{label}</span>
    </div>
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
