import { useEffect, useRef, useState } from "react";

function Flag({ children }) {
  return (
    <span className="inline-flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-white">
      {children}
    </span>
  );
}

function FlagCoteDIvoire() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="1" height="2" x="0" y="0" fill="#F77F00" />
        <rect width="1" height="2" x="1" y="0" fill="#FFFFFF" />
        <rect width="1" height="2" x="2" y="0" fill="#009E60" />
      </svg>
    </Flag>
  );
}

function FlagEgypt() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="0.6667" x="0" y="0" fill="#CE1126" />
        <rect width="3" height="0.6667" x="0" y="0.6667" fill="#FFFFFF" />
        <rect width="3" height="0.6667" x="0" y="1.3334" fill="#000000" />
      </svg>
    </Flag>
  );
}

function FlagGhana() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="0.6667" x="0" y="0" fill="#CE1126" />
        <rect width="3" height="0.6667" x="0" y="0.6667" fill="#FCD116" />
        <rect width="3" height="0.6667" x="0" y="1.3334" fill="#006B3F" />
      </svg>
    </Flag>
  );
}

function FlagKenya() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="0.6667" x="0" y="0" fill="#000000" />
        <rect width="3" height="0.3333" x="0" y="0.6667" fill="#FFFFFF" />
        <rect width="3" height="0.3333" x="0" y="1.0" fill="#BB0000" />
        <rect width="3" height="0.3333" x="0" y="1.3333" fill="#FFFFFF" />
        <rect width="3" height="0.6667" x="0" y="1.3333" fill="#006600" />
      </svg>
    </Flag>
  );
}

function FlagRwanda() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="1.0" x="0" y="0" fill="#00A1DE" />
        <rect width="3" height="0.5" x="0" y="1.0" fill="#FAD201" />
        <rect width="3" height="0.5" x="0" y="1.5" fill="#20603D" />
      </svg>
    </Flag>
  );
}

function FlagSouthAfrica() {
  return (
    <Flag>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="1" x="0" y="0" fill="#E03C31" />
        <rect width="3" height="1" x="0" y="1" fill="#002395" />
        <path d="M0 0 L1.2 1 L0 2 Z" fill="#000000" />
        <path d="M0.2 0.15 L1.35 1 L0.2 1.85 Z" fill="#FFB81C" />
        <path d="M0.35 0.3 L1.5 1 L0.35 1.7 Z" fill="#007A4D" />
      </svg>
    </Flag>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 5h14a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm14 4H3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Zm0 6H3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
    </svg>
  );
}

export default function CountryDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const INCLUDE_NIGERIA = true;
  const items = [
    { name: "Côte d'Ivoire", href: "#", icon: <FlagCoteDIvoire /> },
    { name: "Egypt", href: "#", icon: <FlagEgypt /> },
    { name: "Ghana", href: "#", icon: <FlagGhana /> },
    { name: "Kenya", href: "#", icon: <FlagKenya /> },
    { name: "Rwanda", href: "#", icon: <FlagRwanda /> },
    { name: "South Africa", href: "#", icon: <FlagSouthAfrica /> },
    { name: "Others", href: "#", icon: <MenuIcon className="h-4 w-5 text-slate-600" /> },
  ];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-white/60"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open country menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <span className="w-6">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
