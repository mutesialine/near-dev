import Subtitle from "../layout/Subtitle";
import Title from "../layout/Title";

export default function Certificate(){
return (
  <div className=" w-4/5 lg:w-eigthyeight mx-auto mt-16  lg:mt-0  flex flex-col justify-between items-center text-center font-secondary">
    <img
      className="hidden lg:block w-[164px] h-[132px] "
      src="/icons/line2.svg"
      alt="line right"
    />
    <div className="lg:w-1/2">
      <Title heading="Claim NEAR certificate" />
      <Subtitle
        text="Upon course completion, receive the NEAR dev 101
certificate as an NFT on your NEAR wallet."
      />
    </div>
    <div className="mt-24 w-4/5">
      <img classname="" src="/img/cartificate.png" alt="cerificate" />
    </div>
  </div>
);
}