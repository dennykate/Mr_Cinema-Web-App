import Image from "next/image";
import React from "react";

const HowToUseBody = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto h-auto bg-white bg-opacity-10 backdrop-blur-lg p-4 py-8 sm:p-10 mb-2">
        <div className="w-full h-full">
          <div className="text-md sm:text-lg font-bold text-red-500 mb-5">
            မဂ်လာပါခင်ဗျာ <b>Mr Pussy</b> မှကြိုဆိုပါတယ်
          </div>
          <div className="text-white text-sm sm:text-md leading-6 tracking-widee mb-7">
            မိတ်ဆွေတို့ အဆင်ပြေလွယ်ကူစွာကြည့်ရှု့နိုင်ဖို့အတွက်
            ကျွန်တော်တို့admin team ကနေ website အသုံးပြုပုံအဆင့်ဆင့်ကို
            ရှင်းပြပေးသွားပါမယ်
          </div>
          <div className="text-xs sm:text-sm tracking-wide mb-3">
            ၁. ကိုယ်ကြည့်ရှူ့ချင်တဲ့ ဇာတ်ကားကိုနှိပ်လိုက်ပါ
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၂. နှိပ်လိုက်ပြီဆိုရင် ဇာတ်ကားpage ထဲရောက်သွားပါပြီ
            ဇာတ်ကားနဲ့ပတ်သတ်တဲ့(size,ကြာချိန်)တို့ကိုတွေ့မြင်နိုင်ပါတယ်
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၃. အောက်ကိုနည်းနည်းဆွဲချလိုက်ပြီဆိုရင် ဇာတ်ကားdownload
            လုပ်လို့ရမယ့်နေရာကိုတွေ့မြင်ရမှာဖြစ်ပါတယ်
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၄. severတွေအများကြီးထဲကနေ ကိုယ်နဲ့အဆင်ပြေမယ်ထင်တဲ့ severကိုရွေးပါ
            (မှတ်ချက် - Mr Pussy sever ရှိရင် အဲ့တာကိုပဲရွေးပေးပါ)
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၅. Mr Pussy sever ထဲကိုရောက်ပြီဆိုရင် တိုက်ရိုက်လဲကြည့်နိုင်သလို
            အလွယ်တူ တိုက်ရိုက်download လုပ်လို့လဲရမှာဖြစ်ပါတယ်
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၆. မိတ်ဆွေတို့အနေနဲ့ တစ်စုံတစ်ခုအဆင်မပြေတာပဲဖြစ်ဖြစ်
            ဇာတ်ကားအသစ်တွေတောင်းဆိုချင်တာပဲဖြစ်ဖြစ်
            စတဲ့အကြောင်းအရာများရှိလာခဲ့ရင် အောက်မှာပေးထားတဲ့ social media
            account တွေမှာတိုက်ရိုက်ဆက်သွယ်နိုင်ပါတယ်
          </div>
          <div className="text-xs sm:text-sm tracking-wide leading-5 mb-3">
            ၇. ကြေငြာကိစ္စအတွက် ဆွေးနွေးချင်ရင်လဲ အောက်မှာပေးထားတဲ့ social media
            account တွေမှာပဲတိုက်ရိုက်ဆက်သွယ်နိုင်ပါတယ်
          </div>

          <div className="w-full sm:w-1/2 h-12 sm:h-24 flex justify-evenly items-center mt-10 text-xs sm:text-lg">
            <a
              href="fb://page/109861845115784"
              className="text-blue-600 font-bold hover:underline"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://www.facebook.com/Mr-Pussy-109861845115784"
              className="text-blue-300 font-bold hover:underline"
              target="_blank"
            >
              Messenger
            </a>
            <a
              href="https://t.me/mrpussy_3minmen"
              className="text-yellow-600 font-bold hover:underline"
              target="_blank"
            >
              Telegram
            </a>
            <a
              href="mailto:dennykate22@gmail.com?subject=MrPussy-Website"
              className="text-cyan-600 font-bold hover:underline"
            >
              Email
            </a>
            <a
              href="https://msng.link/o/?09964470356=vi"
              className="text-green-600 font-bold hover:underline"
              target="_blank"
            >
              Viber
            </a>
          </div>

          <div className="text-sm sm:text-xl mt-6 text-white">
            ကြည့်ရှူ့အားပေးမှုအတွက် ကျေးဇူးအထူးတင်ရှိပါတယ်
          </div>
        </div>
      </div>
      <BannerAds />
    </div>
  );
};

const BannerAds = () => (
  <div className="w-full h-auto px-0 sm:px-2">
    <div className="w-full">
      <Image
        src={"https://i.postimg.cc/kGmTS9Wz/animation-3.gif"}
        alt="ads"
        width={1200}
        height={200}
        className="z-50"
      />
    </div>
  </div>
);

export default HowToUseBody;
