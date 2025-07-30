import React from "react";

export const Footer = () => {
  return (
    <div className="mt-[167px]">
      <div className="flex items-center justify-center mb-[45px]">
        <img
          alt="logo"
          src="/assets/images/Logo.png"
          width={196}
          height={147}
          className="w-[196px] h-[147px] object-cover"
        />
      </div>
      <ul className="flex md:w-[911px] m-auto justify-between">
        <li className="flex flex-col gap-[16px] items-center">
          <img
            src="/assets/images/Email.png"
            alt="email"
            height={40}
            width={40}
          />
          <p>info1@one-holding.ir</p>
        </li>
        <li className="flex flex-col gap-[16px] items-center">
          <img
            src="/assets/images/location.png"
            alt="loc"
            height={40}
            width={40}
          />
          <p>تهران، جهان کودک، برج دات وان</p>
        </li>
        <li className="flex flex-col gap-[16px] items-center">
          <img
            src="/assets/images/telephone.png"
            alt="tele"
            height={40}
            width={40}
          />
          <p>021-42101000</p>
        </li>
      </ul>
      <ul className="mt-[59px] flex flex-row-reverse justify-around">
        <li className="flex flex-col text-[14px] justify-center gap-4">
          <label className="font-semibold">دسترسی سریع</label>
          <p>تماس با ما</p>
          <p>درباره ما</p>
          <p>شرکت ها</p>
          <p>استخدام</p>
          <p>اخبار</p>
        </li>
        <li className="flex flex-col text-[14px] justify-center gap-4">
          <label className="font-semibold">لینک ها</label>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
        </li>
        <li className="flex flex-col text-[14px] justify-center gap-4">
          <label className="font-semibold">لینک ها</label>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
        </li>
        <li className="flex flex-col text-[14px] justify-center gap-4">
          <label className="font-semibold">لینک ها</label>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
          <p>www.link.com</p>
        </li>
      </ul>
      <div className="mt-[60px] flex gap-3 justify-center items-center">
        <p className="pb-4">
          ______________________________________________________
        </p>
        <p className="text-[14px] font-light">
          هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @
        </p>
        <p className="pb-4">
          ______________________________________________________
        </p>
      </div>
    </div>
  );
};
