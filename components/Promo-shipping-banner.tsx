import Image from "next/image";

const PromoShippingBanner = () => {
  return (
    <Image
      height={150}
      width={350}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt="Banner de desconto"
      src="/free-shipping-banner.png"
    />
  );
};

export default PromoShippingBanner;
