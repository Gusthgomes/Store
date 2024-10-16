import Image from "next/image";

const PromoMouseBanner = () => {
  return (
    <Image
      height={150}
      width={350}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt="Banner de desconto"
      src="/banner-home-02.png"
    />
  );
};

export default PromoMouseBanner;
