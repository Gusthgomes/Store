import Link from "next/link";

import { db } from "@/lib/prisma";

import PromoBanner from "@/components/Promo-banner";
import CategoryList from "@/components/Category-list";
import ProductList from "@/components/ProductList";
import PromoMouseBanner from "@/components/Promo-mouse-banner";
import PromoHeadPhoneBanner from "@/components/Promo-headphone-banner";
import PromoShippingBanner from "@/components/Promo-shipping-banner";

import SectionTitle from "@/components/Section-title";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await db.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await db.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <PromoBanner />
        </Link>
      </div>

      <div className="px-5 py-6 lg:mt-2">
        <CategoryList />
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Todas as ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="flex flex-col lg:flex-row py-6">
        <Link href="/category/mouses" className="flex flex-1">
          <PromoMouseBanner />
        </Link>
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div className="flex flex-col lg:flex-row py-6">
        <Link href="/category/headphones" className="flex flex-1">
          <PromoHeadPhoneBanner />
        </Link>
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionTitle className="pl-5">Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>

      <div className="flex flex-col lg:flex-row py-6">
        <Link href="/catalog" className="flex flex-1">
          <PromoShippingBanner />
        </Link>
      </div>
    </>
  );
}
