import stripe from "../assets/logo/stripe.png";

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* CTA band */}
      <div className="relative overflow-hidden">
        {/* faint green wave */}
        <WaveBackground />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-slate-500">Try Paystack Now</div>
              <h2 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Start accepting payments in <br className="hidden sm:block" />
                just 30 minutes
              </h2>
            </div>

            <div className="md:pt-6">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-7 text-sm font-semibold text-white hover:bg-green-700 transition"
              >
                Create a free account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links + contact section */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* link columns */}
        <div className="grid gap-10 border-t border-slate-100 pt-12 md:grid-cols-4">
          <FooterCol
            title="Why Paystack"
            links={[
              { label: "Why Choose Paystack", href: "#" },
              { label: "Success Rates", href: "#" },
              { label: "For Entrepreneurs", href: "#" },
              { label: "For Corporates", href: "#" },
              { label: "For International Companies", href: "#" },
              { label: "For Startups", href: "#" },
              { label: "For Fintechs", href: "#" },
              { label: "For Agencies", href: "#" },
              { label: "For Schools", href: "#" },
              { label: "For Betting", href: "#" },
            ]}
          />

          <div className="space-y-10">
            <FooterCol
              title="Pricing"
              links={[
                { label: "Nigeria", href: "#" },
                { label: "Ghana", href: "#" },
                { label: "South Africa", href: "#" },
                { label: "Kenya", href: "#" },
                { label: "Côte d'Ivoire", href: "#" },
              ]}
            />

            <FooterCol
              title="Customers"
              links={[{ label: "Testimonials", href: "#" }]}
            />

            <FooterCol
              title="Learn"
              links={[
                { label: "Blog", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Video Tutorials", href: "#" },
                { label: "Decode Fintech", href: "#" },
                { label: "Commerce", href: "#" },
                { label: "Terminal", href: "#" },
              ]}
            />
          </div>

          <div className="space-y-10">
            <FooterCol
              title="Developers"
              links={[
                { label: "Overview", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Integrations", href: "#" },
                { label: "Status Page", href: "#" },
              ]}
            />

            <FooterCol
              title="Community"
              links={[
                { label: "Service Partner Directory", href: "#" },
                { label: "Nigeria Logos", href: "#" },
              ]}
            />

            <FooterCol
              title="Support"
              links={[
                { label: "Help Desk", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Why Was I Debited?", href: "#" },
                { label: "Register Your Business", href: "#" },
              ]}
            />
          </div>

          <FooterCol
            title="About"
            links={[
              { label: "Company", href: "#" },
              { label: "Changelog", href: "#" },
              { label: "Subscribe", href: "#" },
              { label: "Compliance", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Media Kit", href: "#" },
              { label: "Privacy & Terms", href: "#" },
            ]}
          />
        </div>

        {/* divider */}
        <div className="mt-12 border-t border-slate-100 pt-12">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Contact block */}
            <div>
              <div className="text-sm font-semibold text-slate-900">Contact</div>

              <a
                href="mailto:hello@paystack.com"
                className="mt-3 inline-block text-sm text-sky-600 hover:text-sky-700"
              >
                hello@paystack.com
              </a>

              <div className="mt-4 flex items-center gap-4 text-slate-500">
                <SocialIcon href="#" label="Facebook">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon href="#" label="Twitter/X">
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon href="#" label="Instagram">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon href="#" label="LinkedIn">
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon href="#" label="YouTube">
                  <YouTubeIcon />
                </SocialIcon>
              </div>

              <div className="mt-6 text-sm text-slate-500">
                Paystack is a Stripe company
              </div>

              {/* Optional stripe logo */}
              {stripe ? (
                <img
                  src={stripe}
                  alt="Stripe"
                  className="mt-3 h-6 w-auto opacity-70"
                />
              ) : null}
            </div>

            {/* Offices */}
            <Office
              title="Lagos"
              lines={[
                "126 Joel Ogunnaike Street,",
                "Ikeja GRA, Ikeja,",
                "Lagos, Nigeria",
                "+234 201 631 6160",
              ]}
              linkLineIndex={3}
            />

            <div className="space-y-10">
              <Office
                title="San Francisco"
                lines={[
                  "354 Oyster Point Blvd.,",
                  "South San Francisco,",
                  "CA 94080",
                  "United States",
                ]}
              />
              <Office
                title="Dubai"
                lines={[
                  "Office 338,",
                  "Building 16,",
                  "Dubai Internet City, Dubai,",
                  "United Arab Emirates",
                ]}
              />
              <Office
                title="Abidjan"
                lines={[
                  "AfricaWorks,",
                  "Rue Du 7 Décembre,",
                  "Zone 4/C,",
                  "Abidjan, Côte d'Ivoire",
                ]}
              />
            </div>

            <div className="space-y-10">
              <Office
                title="Cape Town"
                lines={[
                  "Unit 6, 22fifty Building 1,",
                  "32 Jamieson Street,",
                  "Cape Town 8000",
                  "South Africa",
                ]}
              />
              <Office
                title="Nairobi"
                lines={[
                  "The Pavilion (1st Floor)",
                  "Lower Kabete Road, Westlands",
                  "Nairobi, Kenya",
                ]}
              />
              <Office
                title="Accra"
                lines={[
                  "VIVO Place,",
                  "A2 Cantonments City Street,",
                  "Cantonments,",
                  "Accra, Ghana",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Office({ title, lines, linkLineIndex = -1 }) {
  return (
    <div>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-4 space-y-2">
        {lines.map((line, idx) => {
          const isLink = idx === linkLineIndex && line.startsWith("+");
          if (isLink) {
            const tel = line.replace(/\s+/g, "");
            return (
              <a
                key={idx}
                href={`tel:${tel}`}
                className="block text-sm text-sky-600 hover:text-sky-700"
              >
                {line}
              </a>
            );
          }
          return (
            <div key={idx} className="text-sm text-slate-600">
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-50 transition"
    >
      <span className="h-5 w-5">{children}</span>
    </a>
  );
}

function WaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="absolute left-1/2 top-0 h-[280px] w-[1400px] -translate-x-1/2 opacity-60"
        viewBox="0 0 1400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* dotted wave lines */}
        <path
          d="M0 140 C 220 40, 420 40, 700 140 C 980 240, 1180 240, 1400 140"
          stroke="rgb(34 197 94)"
          strokeWidth="2"
          strokeDasharray="4 10"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M0 155 C 220 55, 420 55, 700 155 C 980 255, 1180 255, 1400 155"
          stroke="rgb(34 197 94)"
          strokeWidth="2"
          strokeDasharray="4 10"
          strokeLinecap="round"
          opacity="0.28"
        />
        <path
          d="M0 125 C 220 25, 420 25, 700 125 C 980 225, 1180 225, 1400 125"
          stroke="rgb(34 197 94)"
          strokeWidth="2"
          strokeDasharray="4 10"
          strokeLinecap="round"
          opacity="0.22"
        />
      </svg>
    </div>
  );
}

/* Icons (inline SVG) */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.57V12h2.8l-.45 2.88h-2.35v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.7L5.3 22H2l7.3-8.4L1 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.7L6.9 3.9H5.1L17.7 20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M6.94 6.5A2.44 2.44 0 1 1 6.94 2a2.44 2.44 0 0 1 0 4.5zM4.5 22V8h4.9v14H4.5zm7.4-14h4.7v1.9h.07c.65-1.2 2.24-2.47 4.6-2.47 4.9 0 5.8 3.2 5.8 7.3V22h-4.9v-6.4c0-1.5-.03-3.5-2.2-3.5-2.2 0-2.5 1.7-2.5 3.4V22h-4.9V8z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
