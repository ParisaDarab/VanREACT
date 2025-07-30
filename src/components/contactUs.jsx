import React from "react";

export const ContactUs = () => {
  return (
    <div className="mt-[97px]" dir="rtl">
      <div className="flex items-center gap-3" dir="rtl">
        <img src="/assets/images/Vector.svg" className="pt-2" />
        <span className="text-[#939393] text-[16px]">تماس با ما</span>
      </div>
      <h3 className="py-2 text-right text-[28px] font-normal">
        با ما در تماس باشید.{" "}
      </h3>

      <div className="flex justify-between mt-[16px]">
        <div className="w-1/2">
          <p className="text-[14px] text-right ">
            گفت‌وگو، آغاز هر پیوند است. اگر پرسشی دارید، مایلید بیشتر درباره ما
            بدانید یا ایده‌ای در ذهن دارید، خوشحال می‌شویم از شما بشنویم.
          </p>
          <form
            method="POST"
            className="bg-[#F5F5F5] text-[14px] p-[40px] rounded-[24px] mt-[24px]"
          >
            <ul className="">
              <div className="w-full flex gap-[20px] items-center">
                <li className="w-1/2 text-right ">
                  <label className="block">نام/نام شرکت:</label>
                  <div className="relative ">
                    <input
                      className="bg-white w-full rounded-[24px] h-[40px] mt-4 px-5 pr-10"
                      placeholder="نام"
                    />
                    <div className="flex items-center gap-2 absolute right-0 top-5 p-1">
                      <img alt="call" src="/assets/images/sms.png" />{" "}
                      <span className="text-[#9F9F9F]">|</span>
                    </div>
                  </div>
                </li>
                <li className="w-1/2 text-right">
                  <label>دسته بندی:</label>
                  <div className="relative ">
                    <select className="bg-white rounded-[24px] w-full h-[40px] mt-4 px-5 pr-10">
                      <option>دسته بندی را انتخاب کنید...</option>
                    </select>
                    <div className="flex items-center gap-2 absolute right-0 top-5 p-1">
                      <img alt="call" src="/assets/images/category.png" />{" "}
                      <span className="text-[#9F9F9F]">|</span>
                    </div>
                  </div>
                </li>
              </div>
              <div className="w-full flex gap-[20px] items-center mt-[20px]">
                <li className="w-1/2 text-right ">
                  <label className="block">شماره تماس:</label>
                  <div className="relative ">
                    <input
                      type="number"
                      className="bg-white w-full rounded-[24px] h-[40px] mt-4 px-5 pr-10"
                      placeholder="شماره تماس"
                    />
                    <div className="flex items-center gap-2 absolute right-0 top-5 p-1">
                      <img alt="call" src="/assets/images/call.png" />{" "}
                      <span className="text-[#9F9F9F]">|</span>
                    </div>
                  </div>
                </li>
                <li className="w-1/2 text-right">
                  <label>ایمیل:</label>
                  <div className="relative ">
                    <input
                      placeholder="ایمیل"
                      type="email"
                      className="bg-white w-full rounded-[24px] h-[40px] mt-4 px-5 pr-10"
                    />
                    <div className="flex items-center gap-2 absolute right-0 top-5 p-1">
                      <img alt="call" src="/assets/images/sms.png" />{" "}
                      <span className="text-[#9F9F9F]">|</span>
                    </div>
                  </div>
                </li>
              </div>
              <li className="mt-[20px] text-right">
                <label>درخواست:</label>
                <div className="relative ">
                  <textarea
                    id=""
                    className="bg-white rounded-[24px] w-full h-[130px] p-2  mt-4 pr-10"
                    placeholder="درخواست خود را بنویسید..."
                  ></textarea>
                  <div className="flex items-center gap-2 absolute right-0 top-5 p-1">
                    <img alt="call" src="/assets/images/sms-tracking.png" />{" "}
                    <span className="text-[#9F9F9F]">|</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="w-full flex justify-end mt-[37px]">
              <button className="px-[43px] py-[9px] bg-black text-white  rounded-[24px]">
                {" "}
                ارسال
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-[77px] content-between justify-start">
          <img
            alt="address"
            src="/assets/images/address.svg"
            width={482}
            height={427}
          />
          <ul className="flex flex-row-reverse justify-center  gap-[27px] items-end h-full">
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/Linkedin.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/X.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/Email.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/telephone.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/tele.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li className="w-[40px] h-[40px]">
              <a href="#" className="w-full h-full">
                <img
                  src="/assets/images/whatsApp.png"
                  className="object-cover"
                  alt="linkedin"
                  height={40}
                  width={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
