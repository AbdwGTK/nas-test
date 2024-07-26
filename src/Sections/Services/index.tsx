const ServicesSection = () => {
  return (
    <div className="mt-40 px-8 md:px-28">
      <div className="flex flex-col items-center w-full px-3">
        <p className="poppins-medium text-2xl md:text-6xl text-white text-center">
          Our services
        </p>
        <p className="poppins-regular text-lg mt-3 md:mt-8 text-center text-white ">
          Transforming your online presence with innovative digital strategies
        </p>
      </div>
      <div className="grid grid-cols-2 mt-10 md:mt-32 gap-6 md:gap-28 md:grid-cols-3 ">
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
        <ServiceCard
          label={"Label"}
          description={"Random text to fill space"}
        />
      </div>
    </div>
  );
};

export default ServicesSection;

const ServiceCard = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[118px] h-[118px] md:w-[152px] md:h-[152px] bg-[#7D4283] rounded-3xl" />
      <p className="poppins-medium text-lg md:text-xl text-white mt-8 ">
        {label}
      </p>
      <p className="poppins-medium text-center  text-[#646A69] mt-2 text-[14px] md:text-lg ">
        {description}{" "}
      </p>
    </div>
  );
};
