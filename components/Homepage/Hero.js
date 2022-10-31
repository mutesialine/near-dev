import Subtitle from "../layout/Subtitle";
import Title from "../layout/Title";

export default function Hero(){
  return (
    <div className=" relative w-4/5 px-6 lg:w-eigthyeigh  mx-auto pt-80 lg:pt-44 pb-16 flex flex-col  justify-center items-center font-primary">
      <div className="block lg:hidden bg-backgroundone  absolute w-full h-[600px] -top-80"></div>
      <h1 className="text-7xl font-medium py-7 text-center text-primary  ">
        Get{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple1 via-light-blue to-white-green">
          NEAR
        </span>{" "}
        Certified!
      </h1>
      <div className="pt-5 pb-24  text-center text-twenty leading-7 text-light-gray">
        We, in NEAR Balkans, know how important it is to have regional and local
        support. Now you can become NEAR certified in a regional language of
        preference and connect with our team to support your further growth
        within the NEAR ecosystem."
      </div>
      <div>
        <img src="/icons/circle-down.svg" />
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-5xl font-medium text-primary  leading-15">
          Making your
          <br /> NEAR learning easy.
        </h2>
      </div>
    </div>
  );
}