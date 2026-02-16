import TopPromoBar from './TopPromoBar';
export default function TopPromoBar() {
  return (
    <div className="w-full bg-slate-800 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4 text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-2 opacity-95 hover:opacity-100"
        >
          <span aria-hidden="true">🚀</span>
          <span>Register your business and get a corporate bank account — fast</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
