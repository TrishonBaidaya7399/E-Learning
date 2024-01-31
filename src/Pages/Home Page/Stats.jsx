const Stats = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-primary text-white px-2 md:pl-12 lg:pl-[200px] rounded-none w-full">
  
        <div className="stat text-white">
          <div className="">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat text-white">
          <div className="">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="">↗︎ 400 (22%)</div>
        </div>
        
        <div className="stat text-white">
          <div className="">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="">↘︎ 90 (14%)</div>
        </div>
        
      </div>
    );
};

export default Stats;