import { useMemo, useState } from "react";
import CountryDropdown from "./CountryDropdown";
import PaystackLogoiMG from "../assets/Paystack-logo.png";

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PauseIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM13 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function PaystackLogo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src={PaystackLogoiMG}
        alt="Paystack"
        className="h-6 w-auto"
        draggable="false"
      />
    </a>
  );
}


function NavItemDropdown({ label, items = [] }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 hover:text-slate-900"
      >
        <span>{label}</span>
        <ChevronDownIcon className="h-4 w-4 text-slate-500" />
      </button>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-3 w-64 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
          <ul className="space-y-1">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <div className="font-medium">{it.label}</div>
                  {it.desc ? (
                    <div className="mt-0.5 text-xs text-slate-500">
                      {it.desc}
                    </div>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdowns = useMemo(
    () => ({
      "Why Paystack": [
        { label: "Payments", href: "#", desc: "Accept online payments" },
        { label: "In-person", href: "#", desc: "POS and offline options" },
        { label: "Security", href: "#", desc: "Fraud and risk controls" },
      ],
      Learn: [
        { label: "Blog", href: "#", desc: "Guides and announcements" },
        { label: "Guides", href: "#", desc: "How to use Paystack" },
        { label: "Support", href: "#", desc: "Help articles" },
      ],
      Developers: [
        { label: "Documentation", href: "#", desc: "API references" },
        { label: "Libraries", href: "#", desc: "SDKs and tools" },
        { label: "Status", href: "#", desc: "System uptime" },
      ],
      Support: [
        { label: "Help Center", href: "#", desc: "FAQs and troubleshooting" },
        { label: "Contact", href: "#", desc: "Reach the team" },
      ],
    }),
    []
  );

  return (
    <div className="w-full bg-[#eaf7ee]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <PaystackLogo />

            <nav className="hidden items-center gap-6 lg:flex">
              <NavItemDropdown label="Why Paystack" items={dropdowns["Why Paystack"]} />
              <a
                href="#"
                className="text-sm font-medium text-slate-800 hover:text-slate-900"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-800 hover:text-slate-900"
              >
                Pricing
              </a>
              <NavItemDropdown label="Learn" items={dropdowns["Learn"]} />
            </nav>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <NavItemDropdown label="Developers" items={dropdowns["Developers"]} />
            <NavItemDropdown label="Support" items={dropdowns["Support"]} />
            <a
              href="#"
              className="text-sm font-medium text-slate-800 hover:text-slate-900"
            >
              Login
            </a>

            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-5 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              Create free account
            </a>

            <button
              type="button"
              aria-label="Pause"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-white/60"
            >
              <CountryDropdown/>
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-white/60 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-slate-900" />
            <span className="mt-1 block h-0.5 w-6 bg-slate-900" />
            <span className="mt-1 block h-0.5 w-6 bg-slate-900" />
          </button>
        </div>

        {mobileOpen ? (
          <div className="pb-4 lg:hidden">
            <div className="rounded-lg bg-white/70 p-4">
              <div className="grid gap-3">
                <a className="text-sm font-medium text-slate-800" href="#">
                  Why Paystack
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Customers
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Pricing
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Learn
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Developers
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Support
                </a>
                <a className="text-sm font-medium text-slate-800" href="#">
                  Login
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-5 text-sm font-semibold text-white hover:bg-green-700 transition"
                >
                  Create free account
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
