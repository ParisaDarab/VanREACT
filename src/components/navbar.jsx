import React from "react";

export const Navbar = () => {
  return (
    <div>
      <video
        className="w-full relative bg-black h-[650px] w-full"
        type="video/mp4"
        muted
        controls
      >
        <source src="" />
      </video>
      <nav className="absolute top-0 right-0 flex text-white gap-2 w-full p-[42px] text-[14px]">
        <section className="w-1/4 flex justify-center">
          <button className="w-[88px] h-[32px] font-medium bg-white text-black flex justify-center gap-1 items-center rounded-2xl">
            <img src="/assets/images/arrow-down.png" />
            <span>فا</span>
          </button>
        </section>
        <section className="w-full ">
          <ul className="flex justify-center w-full gap-[54px] cursor-pointer">
            <li>
              <a>موقعیت های شغلی</a>
            </li>
            <li>
              <a>تماس با ما </a>
            </li>
            <li>
              <a> معرفی شرکت ها</a>
            </li>
            <li>
              <a>وبلاگ</a>
            </li>
            <li>
              <a>دریاره ما</a>
            </li>
          </ul>
        </section>
        <section className="w-1/4 flex justify-center">
          <img src="/assets/images/Group.png" width={50} height={50} />
        </section>
      </nav>
    </div>
  );
};
