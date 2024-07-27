import React from "react";

const NewsSection = () => {
  return (
    <div className="mt-24 px-3 md:px-24 mb-28">
      <div className="flex justify-between">
        <p className="poppins-medium text-2xl  md:text-6xl text-white text-center">
          News
        </p>
        <button className="hidden md:block bg-[#7951B3] text-white px-6 py-4 rounded-full poppins-medium text-base">
          View all news
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-0 md:mt-28 ">
        <div className="w-full md:w-1/2">
          <div className="max-h-[460px] w-full">
            <img
              src="assets/pictures/mainNews.png"
              className="bg-cover rounded-xl"
              alt=""
            />
          </div>
          <div className="flex mt-[18px] gap-2 md:mt-8">
            <TagButton label="Company" />
            <TagButton label="Contrasts" />
          </div>
          <div>
            <p className="poppins-regular text-lg mt-4 md:mt-6 md:text-4xl text-white">
              We specialize in fostering effective partnerships with supportive
              companies to drive mutual success.
            </p>
            <p className="poppins-regular text-base mt-4 md:text-lg text-[#646A69]">
              We are committed to building effective partnerships with
              supporting companies, contributing to the advancement,
              development, and expansion of the sector through diverse
              capabilities, expertise, and technological innovation.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <SubNewsCard
            headline={
              "We incorporate the formation of public partnerships as a core aspect of our operations."
            }
            imageSrc={"assets/pictures/subNews1.png"}
            tags={["Company", "Contrasts"]}
          />
          <SubNewsCard
            headline={
              "We incorporate the formation of public partnerships as a core aspect of our operations."
            }
            imageSrc={"assets/pictures/subNews2.png"}
            tags={["Company", "Contrasts"]}
          />
          <SubNewsCard
            headline={
              "We incorporate the formation of public partnerships as a core aspect of our operations."
            }
            imageSrc={"assets/pictures/subNews3.png"}
            tags={["Company", "Contrasts"]}
          />
        </div>
      </div>
      <button className="block md:hidden bg-[#7951B3] mt-9 text-white px-6 py-4 rounded-full w-full poppins-medium text-base">
        View all news
      </button>
    </div>
  );
};

export default NewsSection;

const TagButton = ({ label }: { label: string }) => {
  return (
    <button className="bg-white rounded-full poppins-regular py-1 px-3 text-[#1D1F1E] text-sm">
      {label}
    </button>
  );
};

const SubNewsCard = ({
  headline,
  imageSrc,
  tags,
}: {
  headline: string;
  imageSrc: string;
  tags: string[];
}) => {
  return (
    <div className="flex gap-4 md:gap-8">
      <div className="h-[115px] w-[115px] md:h-[246px] md:w-[221px] flex-shrink-0">
        <img
          src={imageSrc}
          className="w-full h-full rounded-xl object-cover"
          alt="Main News"
        />
      </div>
      <div>
        <p className="poppins-regular text-base mt-4 md:mt-6 md:text-2xl text-white">
          {headline}
        </p>
        <div className="flex mt-[18px] gap-2 md:mt-8">
          {tags.map((x) => {
            return <TagButton label={x} key={x} />;
          })}
        </div>
      </div>
    </div>
  );
};
