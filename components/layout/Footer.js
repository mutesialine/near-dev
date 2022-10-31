import Subtitle from "./Subtitle";

export default function Footer() {
  return (
    <div className="w-eigthyeight mx-auto py-24 px-6 text-primary text-lg flex flex-col items-center font-primary">
      <div className="flex justify-center text-center pb-20 lg:pb-0">
        <p>
          Visit<span className="font-bold"> nearbalkans.org </span> and make
          sure to follow us on our social and community channels!
        </p>
      </div>
      <div className="flex justify-center items-center space-x-16 pt-10 ">
        <img src="/Icons/logo3.svg" alt="logo" />
        <div className="bg-gray-300 w-0.5 h-8"></div>
        <div className=" flex  items-center gap-5">
          <img className="w-7 h-6" src="/Icons/twitter.svg" alt="twitter" />
          <img className="w-7 h-6" src="/Icons/icon2.svg" alt="logo" />
          <img className="w-7 h-5" src="/Icons/telegram.svg" alt="logo" />
          <img className="w-4 h-7" src="/Icons/facebook.svg" alt="logo" />
          <img className="w-7 h-7" src="/Icons/instagram.svg" alt="logo" />
          <img className="w-8 h-4" src="/Icons/icon3.svg" alt="logo" />
        </div>
      </div>
      <div className=" w-4/5 mx-auto flex flex-col gap-2 lg:flex-row lg:justify-between items-center pt-10 lg:gap-10">
        <Subtitle text="NEAR Balkans 2022 " />
        <Subtitle text="info@nearbalkans.org" />
        <Subtitle text="Privacy Policy" />
        <Subtitle text="Cookie Policy" />
        <Subtitle text="Terms &amp Conditions" />
      </div>
      <p class=" w-4/5 mx-auto pt-9 text-center">
        NEAR Balkans Hub: Bosnia &amp; Herzegovina, Bulgaria, Croatia,
        Montenegro, North Macedonia, Serbia, and Slovenia
      </p>
    </div>
  );
}
