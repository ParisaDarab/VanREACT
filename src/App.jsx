import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { BtnList } from "./components/btnList";
import { buttons, Cards, smallCards } from "./data";
import { Card } from "./components/cards";
import { IntroCard } from "./components/introCard";
import { ContactUs } from "./components/contactUs";
import { Footer } from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className=" px-5 md:px-[108px] pb-[60px]">
        <section className=" mt-[43px] m-auto text-right">
          <div className="flex gap-5 pb-20">
            <p className="text-[14px] w-full" dir="rtl">
              وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری
              هوشمندانه و ساماندهی خردمندانه، زیرساخت های لازم برای آبادانی و
              سودرسانی همگانی را فراهم می آورد، تا کسانی که پویا و کوشا هستند،
              مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است
              که با شعار»آسایش برای همگان« نقشی محوری در زمینه‌های کلیدی مانند
              حمل و نقل، پولی-مالی، سرمایه‌گذاری، کارآفرینی، توسعه تجارت
              بین‌المللی، رسانه، فناوری و ارتباطات ایفا خواهد نمود.
            </p>
            <h3 className="w-1/3 text-[34px] ">گروه ارزش آفرین وان</h3>
          </div>
          <section className="bg-[url()] rounded-[24px] bg-[#F5F5F5] py-[38px] px-[23px]">
            <p className="text-center text-[16px] w-[794px] m-auto" dir="rtl">
              ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و
              افزودن ارزشی به جهان امروز ؛ چرا که باور داریم: «فردا، فرزند امروز
              است.»
            </p>
          </section>
        </section>

        <section className="mt-[93px]" dir="rtl">
          <div className="flex items-center gap-3">
            <img src="/assets/images/Vector.svg" className="pt-1" />

            <p className="text-[#939393] text-[16px]">دسته‌بندی شرکت ها</p>
          </div>
          <h3 className="my-[10px] text-[28px] text-right">
            جمله کوتاه یا یک تایتل
          </h3>
          <BtnList btnArray={buttons} />
        </section>

        <section className="mt-[93px]" dir="rtl">
          <div className="flex items-center gap-3">
            <img src="/assets/images/Vector.svg" className="pt-1" />

            <p className="text-[#939393] text-[16px]">وبلاگ</p>
          </div>
          <h3 className="my-[10px] text-[28px] text-right">
            جمله کوتاه یا یک تایتل
          </h3>
        </section>

        <section className="flex flex-wrap justify-between gap-[24px]">
          {Cards.map((i, index) => {
            const {
              id,
              size,
              img,
              labels,
              date,
              title,
              description,
              iconPosition,
            } = i;
            return (
              <Card
                size={size}
                img={img}
                labels={labels}
                date={date}
                title={title}
                description={description}
                iconPosition={iconPosition}
                id={id}
              />
            );
          })}
          {smallCards.map((i, index) => {
            const {
              id,
              size,
              img,
              labels,
              date,
              title,
              description,
              iconPosition,
            } = i;
            return (
              <Card
                size={size}
                img={img}
                labels={labels}
                date={date}
                title={title}
                description={description}
                iconPosition={iconPosition}
                id={id}
              />
            );
          })}
        </section>

        <section className="mt-[80px] flex gap-[35px]">
          <div className="w-full p-[14px] bg-[#F5F5F5] mt-10 rounded-[40px]">
            <div className="flex items-center gap-3" dir="rtl">
              <img src="/assets/images/Vector.svg" className="pt-2" />
              <span className="text-[#939393] text-[16px]">معرفی شرکت ها</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <img
                alt="icon"
                src="/assets/images/arrowLeft.png"
                height={40}
                width={40}
              />
              <h3 className=" text-right text-[28px] font-normal">ترابری</h3>
            </div>
            <div>
              <div className="flex flex-wrap gap-[16px]" dir="rtl">
                <IntroCard />
                <IntroCard />
                <IntroCard />
              </div>
              <div className="mt-[80px]">
                <div className="flex items-center gap-3" dir="rtl">
                  <img src="/assets/images/Vector.svg" className="pt-2" />
                  <span className="text-[#939393] text-[16px]">
                    معرفی شرکت ها
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <img
                    alt="icon"
                    src="/assets/images/arrowLeft.png"
                    height={40}
                    width={40}
                  />
                  <h3 className=" text-right text-[28px] font-normal">
                    مالی اعتباری
                  </h3>
                </div>
                <div className="flex flex-wrap gap-[16px]" dir="rtl">
                  <IntroCard />
                  <IntroCard />
                  <IntroCard />
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/images/Tower.png" width={272} height={993} />
        </section>

        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
