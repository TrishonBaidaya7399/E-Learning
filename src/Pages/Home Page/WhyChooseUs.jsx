import { MdLiveTv, MdSupportAgent } from "react-icons/md";
import { TbNavigationCheck } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";

const WhyChooseUs = () => {
    return (
<div className="bg-blue-200 px-3 md:px-12 lg:px-[100px]">
    <div className="flex gap-6 flex-col py-12">

    <h1 className="text-blue-500 text-3xl font-bold text-center">WHY CHOOSE US</h1>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Xt55xT2/Online-Learning-Vector-Illustration-removebg-preview.png" className="w-full lg:w-1/2" />
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl text-blue-500 font-bold">WE CREATE FULL SUPPORT <br/> FOR YOUR AMAZING CAREER!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="text-3xl md:text-8xl flex flex-row gap-6">
      <MdSupportAgent className=" text-blue-700"/>
      <MdLiveTv className=" text-blue-700"/>
      <TbNavigationCheck className=" text-blue-700"/>
      <GiBookshelf className=" text-blue-700"/>
      </div>
    </div>
    </div>
  </div>
</div>
    );
};

export default WhyChooseUs;