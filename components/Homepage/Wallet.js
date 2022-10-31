import Subtitle from "../layout/Subtitle";
import Title from "../layout/Title";
import Button from "../layout/Button";

export default function Wallet(){
  return (
    <div className="w-eigthyeight mx-auto mt-36 flex flex-col-reverse lg:flex-row justify-between  items-center  font-primary">
      <div className=" flex flex-col gap-8 text-center lg:text-left pt-6 lg:pt-0 lg:w-1/2 ">
        <div className="gap-y-1">
          <Title heading="Open NEAR wallet" />
          <Subtitle
            text="Opening a NEAR wallet is the first step and
         essential part of joining the NEAR community
         as well as starting this course."
         color="text-light-gray"
          />
        </div>
        <Button
          text="Create Wallet"
          styles="bg-white text-black border border-primary"
        />
      </div>
      <div className="">
        <img
          className="w-twohundreds h-twohundendnighty"
          src="https://dacade-nearbalkans.netlify.app/_ipx/w_1200,q_75/%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png?url=%2F_next%2Fstatic%2Fmedia%2Fnear.3a79378e.png&w=1200&q=75"
          href=""
        />
      </div>
    </div>
  );
}