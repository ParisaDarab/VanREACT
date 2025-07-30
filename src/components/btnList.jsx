import React from "react";

export const BtnList = ({ btnArray }) => {
  return (
    <ul className="flex flex-wrap justify-between gap-[20px] w-full my-[40px]" dir="rtl">
      {btnArray?.map((i) => {
        const { name, id } = i;
        return (
          <li className="w-[226px] h-[60px] rounded-lg bg-black text-white flex items-center justify-center">
            <a>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
