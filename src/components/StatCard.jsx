const StatCard = ({ value, label, bgColor = "bg-black/7" }) => {
    return (
      <div className={`${bgColor} rounded-lg flex items-center justify-center flex-col text-center w-full`}>
        <h1 className="text-[30px] font-black">{value}</h1>
        <h1  style={{ fontFamily: "'Mint Sans', sans-serif" }} className="text-[12px] font-black">{label}</h1>
      </div>
    );
  };
  
  export default StatCard;