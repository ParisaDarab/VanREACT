import React from "react";

export const Card = ({
  size,
  img,
  labels,
  date,
  title,
  description,
  position,
  id,
}) => {
  if (id <= 2) {
    return (
      <div
        className={`w-[600px] flex justify-between  ${
          id == 1 ? "bg-black text-white" : "bg-[#F5F5F5] text-black"
        }  h-[260px] items-center rounded-[24px] relative`}
      >
        <img src={img} alt={img} className="h-[232px] object-cover p-[14px]" />
        <div className="h-full p-[24px]" dir="rtl">
          <ul className="flex gap-[10px] mb-[24px]">
            {labels.map((i) => (
              <li className="text-[10px] text-black bg-white py-[6px] px-[16px] rounded-[10px]">
                {i}
              </li>
            ))}
          </ul>
          <h3 className="text-[18px] font-semibold text-right">{title}</h3>
          <p className="text-right text-[14px] font-light mt-[8px]">
            {description}
          </p>
        </div>
        <img
          src="/assets/images/arrowLeft.png"
          className="absolute bottom-[28px] left-[28px]"
          height={40}
          width={40}
        />
      </div>
    );
  }
  if (id > 2) {
    return (
      <div
        className={`w-[392px]   ${
          id == 1 ? "bg-black text-white" : "bg-[#F5F5F5] text-black"
        }  h-[260px]  rounded-[24px] relative p-[14px] flex flex-col `}
      >
        <div className="" dir="rtl">
          <div className="flex item-center justify-between mb-[16px] mt-[10px]">
            <ul className="flex gap-[10px]">
              {labels?.map((i) => (
                <li className="text-[10px] text-black bg-white py-[6px] px-[16px] rounded-[10px]">
                  {i}
                </li>
              ))}
            </ul>
            <p className="text-[10px] font-light">{date && date}</p>
          </div>
          <div
            className={`${
              id == 5 && "mt-[28px] mb-[32px]"
            } flex justify-between items-center`}
          >
            <h3 className="text-[18px] font-semibold text-right">{title}</h3>
            <img
              src="/assets/images/arrowLeft.png"
              height={40}
              width={40}
              className={`${id != 5 && "absolute bottom-[28px] left-[28px]"}`}
            />
          </div>
        </div>
        <img src={img} alt={img} className={` h-[150px] object-cover`} />
      </div>
    );
  }
};
