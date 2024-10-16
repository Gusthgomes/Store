import Image from "next/image";

const PromoHeadPhoneBanner = () => {
  return (
    <Image
      height={150}
      width={350}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt="Banner de desconto"
      src="/banner-home-03.png"
    />
  );
};

export default PromoHeadPhoneBanner;
