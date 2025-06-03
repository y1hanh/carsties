import Search from "./Search";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex  justify-between bg-white p-4 text-gray-800 items-center shadow-md">
      <Logo />
      <Search />
      <div>Login</div>
    </header>
  );
}
