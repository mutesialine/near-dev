import Subtitle from "../layout/Subtitle";
import Title from "../layout/Title";
export default function Complete() {
  return (
    <div className=" mx-auto flex flex-col font-secondary ">
      <div className="w-eigthyeight mx-auto flex justify-center">
        <img
          className=" hidden lg:block w-40 h-32 items-center"
          src="/Icons/line.svg"
        />
      </div>

      <div className="flex mt-16 lg:mt-0 flex-col lg:flex-row justify-between items-center w-eigthyeight mx-auto">
        <img className=" w-3/5 lg:w-1/3" src="/Icons/circleallow.svg" />

        <div className="flex flex-col items-center lg:items-start  pt-10 lg:pt-0 gap-3 w-4/5 lg:w-1/2">
          <Title heading="Complete the course" />
          <Subtitle text="In three simple modules, learn:" />
          <div className="flex flex-col items-center lg:flex-row gap-3">
            <img
              className="w-8 h-8"
              src="https://dacade-nearbalkans.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fessential.daf4f0ca.png&w=256&q=75"
              alt="icon"
            />
            <Subtitle text="Essential NEAR concepts" />
          </div>
          <div className=" flex flex-col items-center lg:flex-row gap-3">
            <img
              className="w-8 h-8"
              src="https://dacade-nearbalkans.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontract.ba589e37.png&w=64&q=75"
              alt="icon"
            />
            <Subtitle text="How to write smart contracts on NEAR" />
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-3">
            <img
              className="w-8 h-8"
              src="https://dacade-nearbalkans.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode.172d3d64.png&w=64&q=75"
              alt="icon"
            />
            <Subtitle text="How to build dapps on the NEAR blockchain" />
          </div>
        </div>
      </div>
    </div>
  );
}
