import TopPromoBar from "./TopPromoBar";
import MainNavbar from "./MainNavbar";

export default function Header() {
  return (
    <header className="w-full">
      <TopPromoBar />
      <MainNavbar />
    </header>
  );
}
