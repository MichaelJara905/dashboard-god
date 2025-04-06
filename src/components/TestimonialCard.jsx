const TestimonialCard = ({ image, name, title }) => {
  return (
    <div className="flex items-center w-full h-20 bg-black/7 rounded-sm">
      <img src={image} className="w-13 rounded-lg ml-4" alt={`Imagen de ${name}`} />
      <div className="flex justify-between items-center w-full h-full">
        <div className="ml-5">
            <h1 style={{ fontFamily: "'Mint Sans', sans-serif" }} className="text-[15px] font-bold">{name}</h1>
            <p style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-[11px] font-medium mr-2">{title}</p>
        </div>
        <div className="flex items-center justify-center bg-black p-2 rounded-lg w-15 mr-5">
            <h1 style={{ fontFamily: "'Mint Sans', sans-serif" }} className="text-white font-bold text-[13px]">Ver</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;