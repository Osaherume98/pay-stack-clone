import { useEffect, useMemo, useRef, useState } from "react";
import CountryDropdown from "./CountryDropdown";
import PaystackLogoiMG from "../assets/Paystack-logo.png";
import ChoseUS from "../assets/logo/why_chose_us.svg";
import Success from "../assets/logo/success_rates.svg";
import Demo from "../assets/logo/demo_db.svg";
import Bulb from "../assets/logo/blog_db.svg";
import Guide from "../assets/logo/guides_db.svg";
import Tutorials from "../assets/logo/tutorials_db.svg";
import Decode from "../assets/logo/decode_db.svg";

function ChevronDownIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM13 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function PaystackLogo() {
  return (
    <a href="/" className="flex items-center">
      <img src={PaystackLogoiMG} alt="Paystack" className="h-6 w-auto" draggable="false" />
    </a>
  );
}

function MenuIconBubble({ logoSrc = "", containerClass = "", logoClass = "" }) {
  return (
    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${containerClass}`}>
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="Logo"
          className={`h-8 w-8 object-cover rounded-full ${logoClass}`}  // Custom class for the image
        />
      ) : (
        <span className="font-bold text-white">?</span>  // Fallback text
      )}
    </div>
  );
}

  

function NavMegaDropdown({
  label,
  leftItems = [],
  rightSections = [],
  align = "left",
  panelWidthClass = "w-[620px]",
  textClasses = {}, 
  logoSrc = "",
}) {
  const alignClass = align === "right" ? "right-0" : "left-0";

  const styles = {
    trigger: "text-[15px] font-medium text-slate-800 hover:text-slate-900",
    leftTitle: "text-[15px] font-semibold leading-5 text-[#0b2746]",
    leftDesc: "mt-1 text-[13px] leading-5 text-slate-700",
    rightSectionTitle: "mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500",
    rightItem:
      "block rounded-md px-2 py-1.5 text-[15px] font-semibold text-[#0b2746] hover:bg-white hover:text-[#0a223f]",
    ...textClasses,
  };

  return (
    <div className="group relative">
      <button type="button" className={`inline-flex items-center gap-1 ${styles.trigger}`}>
        <span>{label}</span>
        <ChevronDownIcon className="h-4 w-4 text-slate-600" />
      </button>

      <div
        className={[
          "pointer-events-none absolute top-full z-50 pt-3 opacity-0 translate-y-1",
          "transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0",
          "group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0",
          alignClass,
        ].join(" ")}
      >
        <div
          className={[
            panelWidthClass,
            "max-w-[calc(100vw-2rem)] overflow-hidden rounded-md border border-slate-200",
            "bg-[#f6f8fb] shadow-[0_20px_45px_rgba(2,20,41,0.16)]",
          ].join(" ")}
        >
          <div className="grid grid-cols-[1.45fr_1fr]">
            <div className="bg-[#f3f6fa] p-5">
              <ul className="space-y-4">
                {leftItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="flex items-start gap-3 rounded-md p-1 hover:bg-white/70 transition">
                      <MenuIconBubble logoSrc={item.logoSrc} />
                      <div>
                        <div className={styles.leftTitle}>{item.label}</div>
                        {item.desc ? <p className={styles.leftDesc}>{item.desc}</p> : null}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l border-slate-200 bg-[#f7f9fc] p-5">
              {rightSections.map((section, idx) => (
                <div key={`${section.title}-${idx}`} className={idx === 0 ? "" : "mt-4 border-t border-slate-200 pt-4"}>
                  <p className={styles.rightSectionTitle}>{section.title}</p>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className={styles.rightItem}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavSimpleDropdown({ label, items = [] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-[15px] font-medium text-slate-800 hover:text-slate-900"
      >
        <span>{label}</span>
        <ChevronDownIcon className="h-4 w-4 text-slate-600" />
      </button>

      <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 translate-y-1 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0">
        <div className="w-72 rounded-md border border-slate-200 bg-white p-2 shadow-[0_20px_35px_rgba(2,20,41,0.14)]">
          <ul className="space-y-1">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  className="block rounded-md px-3 py-2 text-[14px] font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <div>{it.label}</div>
                  {it.desc ? <div className="mt-0.5 text-[12px] text-slate-500">{it.desc}</div> : null}
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

  const navRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const menuData = useMemo(
    () => ({
      whyPaystack: {
        left: [
          {
            label: "Why Choose Paystack",
            href: "#",
            desc: "Over 200,000 businesses trust Paystack. Here's why",
            logoSrc: ChoseUS,
          },
          {
            label: "Success Rates",
            href: "#",
            desc: "Get the best transaction success rates in the industry",
            logoSrc: Success,
          },
          {
            label: "Demo",
            href: "#",
            desc: "See the Paystack Checkout Form and Dashboard in action",
            logoSrc: Demo,
          },
        ],
        rightSections: [
          {
            title: "YOUR GROWTH STAGE",
            items: [
              { label: "For Entrepreneurs", href: "#" },
              { label: "For Corporates", href: "#" },
              { label: "For Global Brands", href: "#" },
              { label: "For Startups", href: "#" },
            ],
          },
          {
            title: "BY USE CASE",
            items: [
              { label: "Marketplaces", href: "#" },
              { label: "SaaS", href: "#" },
              { label: "Ecommerce", href: "#" },
            ],
          },
        ],
      },

      learn: {
        left: [
          {
            label: "Blog",
            href: "#",
            desc: "Original lessons about making the internet work for your business",
            logoSrc: Bulb,
          },
          {
            label: "Guides",
            href: "#",
            desc: "Big ideas in payments, explained in simple English",
            logoSrc: Guide,},
          {
            label: "Video Tutorials",
            href: "#",
            desc: "Quick video tutorials on how to use Paystack",
            logoSrc: Tutorials,
          },
          {
            label: "Decode Fintech",
            href: "#",
            desc: "The trade email newsletter and podcast for leaders in African fintech",
            logoSrc: Decode,
          },
        ],
        rightSections: [
          {
            title: "COMPANY",
            items: [
              { label: "About Us", href: "#" },
              { label: "Changelog", href: "#" },
              { label: "Subscribe", href: "#" },
            ],
          },
          {
            title: "RESOURCES",
            items: [
              { label: "Compliance", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Brand", href: "#" },
              { label: "Media Kit", href: "#" },
            ],
          },
        ],
      },

      developers: [
        { label: "Documentation", href: "#", desc: "API references and examples",},
        { label: "Libraries", href: "#", desc: "SDKs and integrations",},
        { label: "Status Page", href: "#", desc: "System uptime and incidents" },
      ],
      support: [
        { label: "Help Center", href: "#", desc: "FAQs and troubleshooting" },
        { label: "Contact", href: "#", desc: "Reach our support team" },
      ],
    }),
    []
  );

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const measure = () => setNavHeight(el.getBoundingClientRect().height);
    measure();

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const STICKY_AFTER = 8;
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsStuck(y > STICKY_AFTER);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: isStuck ? navHeight : 0 }} />

      <div
        ref={navRef}
        className={[
          "w-full transition-all duration-200",
          isStuck
            ? "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-[#eaf7ee]/95 backdrop-blur"
            : "relative bg-[#eaf7ee]",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-10">
              <PaystackLogo />

              <nav className="hidden items-center gap-7 lg:flex">
                <NavMegaDropdown
                  label="Why Paystack"
                  leftItems={menuData.whyPaystack.left}
                  rightSections={menuData.whyPaystack.rightSections} 
                  panelWidthClass="w-[560px]"
                  align="left"
                  logoSrc={ChoseUS} 
                />

                <a href="#" className="text-[15px] font-medium text-slate-800 hover:text-slate-900">
                  Customers
                </a>

                <a href="#" className="text-[15px] font-medium text-slate-800 hover:text-slate-900">
                  Pricing
                </a>

                <NavMegaDropdown
                  label="Learn"
                  leftItems={menuData.learn.left}
                  rightSections={menuData.learn.rightSections} 
                  panelWidthClass="w-[620px]"
                  align="left"
                />
              </nav>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              <NavSimpleDropdown label="Developers" items={menuData.developers} />
              <NavSimpleDropdown label="Support" items={menuData.support} />

              <a href="#" className="text-[15px] font-medium text-slate-800 hover:text-slate-900">
                Login
              </a>

              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2fb344] px-5 text-[15px] font-semibold text-white transition hover:bg-[#25963a]"
              >
                Create free account
              </a>

              <button
                type="button"
                aria-label="Country"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-white/60"
              >
                <CountryDropdown />
              </button>

              <button
                type="button"
                aria-label="Pause"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-white/60"
              >
                <PauseIcon className="h-5 w-5" />
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
              <div className="rounded-lg bg-white/80 p-4">
                <div className="grid gap-3">
                  <a className="text-[15px] font-semibold text-slate-800" href="#">
                    Why Paystack
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Customers
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Pricing
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Learn
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Developers
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Support
                  </a>
                  <a className="text-[15px] font-medium text-slate-800" href="#">
                    Login
                  </a>

                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#2fb344] px-5 text-[15px] font-semibold text-white transition hover:bg-[#25963a]"
                  >
                    Create free account
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
