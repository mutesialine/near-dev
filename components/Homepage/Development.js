import Button from "../layout/Button";
import Title from "../layout/Title";

export default function Development(){
  return (
    <>
      <div className=" lg:bg-gradient-to-l from-white via-light-green to-white   max-w-full px-36 py-5 space-y-6 items-center mt-44 flex flex-col-reverse lg:flex-row justify-between font-secondary">
        <div className=" flex flex-col justify-center text-center lg:text-left lg:items-start space-y-4">
          <Title heading="NEAR Development 101" />
          <Button
            text="Start The Course"
            styles=" text-primary border border-light-gray"
          />
        </div>
        <div>
          <img
            className="object-fill w-96 h-96"
            src="/img/ml.png"
            alt=""
          />
        </div>
       
      </div>
    </>
  );
}