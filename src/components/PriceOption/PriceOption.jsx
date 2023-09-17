import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-green-500 rounded-md text-black p-4 text-center">
      <h2>
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
    </div>
  );
};

export default PriceOption;
