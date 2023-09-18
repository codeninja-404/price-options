import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-green-500 rounded-md text-black p-4 flex flex-col ">
      <div className="pb-10">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>
      </div>
      <div className="pl-6 flex-grow">
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      </div>
      <button className="mt-5 bg-blue-700 hover:bg-blue-400 text-white font-bold w-full p-2 rounded-lg">Buy Now</button>
    </div>
  );
};

export default PriceOption;
