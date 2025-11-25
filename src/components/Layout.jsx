import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={`w-full overflow-hidden min-h-screen bg-black '}`}>
        <div className="max-w-[1320px] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
