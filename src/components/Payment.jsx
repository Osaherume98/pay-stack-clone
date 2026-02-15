import phoneHand from "../assets/Collect-Payments.gif";

export default function Payments() {
  const methodsLeft = ["Card", "Bank Account", "Bank Transfer", "USSD"];
  const methodsRight = ["Apple Pay", "Visa QR", "Mobile Money", "POS"];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Simple, easy payments
        </h2>
        <p className="mt-3 text-lg font-semibold text-slate-700">
          Building a business is hard. Getting paid shouldn't be.
        </p>

        {/* Grid Layout: Left image and Right content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Image */}
          <div className="flex justify-center lg:h-[500px]">
            <img
              src={phoneHand}
              alt="Phone in hand"
              className="h-[480px] w-auto object-contain lg:h-[580px]"
              draggable="false"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
              Delight customers with a seamless payments experience
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">
              Give your customers the gift of modern, frictionless, painless payments.
              Integrate Paystack once and let your customers pay you however they want.
            </p>

            {/* Payment Methods */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Left Column */}
              <ul className="space-y-4">
                {methodsLeft.map((m) => (
                  <li key={m} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#e0f7e1] text-green-600">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-base font-semibold text-slate-900">{m}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="space-y-4">
                {methodsRight.map((m) => (
                  <li key={m} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#e0f7e1] text-green-600">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-base font-semibold text-slate-900">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Rate Section */}
            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Enjoy phenomenal transaction success rates
            </h3>
            <p className="mt-4 text-lg text-slate-700">
              We automatically route payments through the most optimal channels, ensuring
              the highest transaction success rates in the market.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center text-base font-semibold text-[#2fb344] hover:text-[#25963a]"
            >
              <GreaterThanIcon className="h-2 w-2 text-[#2fb344] border-2 border-[#2fb344] rounded-full flex items-center justify-center p-1" />
                Find out how we achieve high success rates

              <svg
                className="ml-1 h-4 w-4 text-[#2fb344]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 10.707a1 1 0 0 0 0-1.414L8.707 6.707a1 1 0 0 0-1.414 1.414L10.586 10H4a1 1 0 1 0 0 2h6.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
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

// GreaterThanIcon Component
function GreaterThanIcon({ className = "" }) {
  return (
    <span className={`${className} inline-flex items-center justify-center rounded-full border-2 border-[#2fb344] bg-white p-2`}>
      &gt; {/* Greater-than symbol */}
    </span>
  );
}



