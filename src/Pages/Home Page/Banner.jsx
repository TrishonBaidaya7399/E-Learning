
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 px-2 md:px-10 lg:px-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/rF788np/Screenshot-2024-01-31-151938-removebg-preview.png" className="w-full md:max-w-1/2 rounded-lg" />
          <div className=" w-full md:max-w-1/2">
            <h1 className="text-5xl font-bold">WELCOME TO THE</h1>
            <h1 className="text-3xl font-bold text-blue-500 pt-5">LEARNING REVOLUTION</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
         <div className="flex gap-6">
         <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-primary">Watch</button>
         </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;