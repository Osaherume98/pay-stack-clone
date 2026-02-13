import radarImg from "../assets/videoframe_1139.png"; 

export default function SecuritySection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <LeftMedia />
          <RightFeatures />
        </div>
      </div>
    </section>
  );
}

function LeftMedia() {
  return (
    <div className="rounded-2xl bg-white">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={radarImg}
          alt="Fraud detection and reporting illustration"
          className="w-full max-w-[520px] rounded-2xl object-cover md:max-w-none"
          draggable="false"
        />
      </div>
    </div>
  );
}

function RightFeatures() {
  return (
    <div className="pt-1">
      <FeatureBlock
        title={
          <>
            Protect yourself and your
            <br />
            customers with advanced
            <br />
            fraud detection
          </>
        }
        body="Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."
      />

      <div className="mt-14">
        <FeatureBlock
          title={
            <>
              Detailed reporting for
              <br />
              accounting, reconciliation,
              <br />
              and audits
            </>
          }
          body="Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."
        />
      </div>
    </div>
  );
}

function FeatureBlock({ title, body }) {
  return (
    <div>
      <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-4xl">
        {title}
      </h3>
      <p className="mt-5 max-w-xl text-lg leading-7 text-slate-700">{body}</p>
    </div>
  );
}
