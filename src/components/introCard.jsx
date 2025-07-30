import React from 'react'

export const IntroCard = () => {
  return (
    <div className="bg-white rounded-[24px] flex flex-col gap-[24px] items-center p-[24px] w-[280px] h-[306px]">
      <img alt="logo" src="/assets/images/Logo.png" height={130} width={130} />
      <p className="text-[14px] text-center">
        دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛
        سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.
      </p>
    </div>
  );
}
