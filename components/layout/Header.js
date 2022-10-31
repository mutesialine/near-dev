import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <div className="fixed top-0 z-20 w-full  bg-white">
      <div className=" flex justify-between w-4/5 mx-auto my-12 lg:my-6  text-primary">
        <div className="flex items-center  gap-3">
          <img className=" w-12 lg:w-16" src="/Icons/logo.svg" />
          <p className="hidden lg:block font-bold text-lg">Decade</p>
          <div className="bg-gray-300 w-0.5 h-8"></div>
          <Link href="/">
            <img
              className="object-fill hidden lg:block"
              src="/Icons/logo3.svg"
            />
            <img
              className="object-fill  w-12  block lg:hidden"
              src="/Icons/logo2.svg"
            />
          </Link>
        </div>
        <div className="flex items-center gap-14 font-semibold text-large">
          <Link href="/StartCourses" className=" hidden lg:block text-lg">
            Start The course
          </Link>
          <Button
            href="/CreateWallet"
            text="Create wallet"
            styles="bg-primary text-white text-base"
          />
        </div>
      </div>
    </div>
  );
}
