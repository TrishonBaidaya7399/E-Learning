const NewsLetter = () => {
  return (
    <div className="my-12">
      <h1 className="text-blue-500 font-bold text-3xl text-center pt-12">
        Subscribe News Letter
      </h1>
      <p className="w-3/4 text-lg text-gray-500 text-center mx-auto pt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vitae
        tempora natus, iste aperiam illum. Error sed, nesciunt dolore sequi
        debitis blanditiis corporis facilis repellendus reprehenderit? Rerum
        fugit nulla deleniti modi est, id dolores asperiores dicta consectetur!
        Autem natus quasi commodi delectus eligendi provident.
      </p>
      <div className="join flex justify-center pt-6">
        <input className="input input-bordered join-item" placeholder="Enter your email" />
        <button className="btn join-item btn-primary rounded-r-lg">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
