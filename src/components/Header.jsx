import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header
        className={`w-full sticky top-0 lg:py-8 py-6 shadow-lg bg-black z-50 shadow-[#5b7553] text-white '}`}
      >
        <div className="max-w-[1320px] mx-auto flex sm:flex-row flex-col px-3 gap-y-5 items-center justify-between">
          <a href="/">
            <h2 className="logo text-[25px]  text-white flex items-end gap-[4px] font-bold font-[Poppins]">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#5b7553]  text-white lg:text-[30px] text-[25px] font-bold">
                H
              </span>
              arsh Gaur
            </h2>
          </a>

          <div className="flex px-2 gap-4 items-center">
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
}
