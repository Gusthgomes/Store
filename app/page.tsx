import Link from "next/link";

import { db } from "@/lib/prisma";

import PromoBanner from "@/components/Promo-banner";
import CategoryList from "@/components/Category-list";
import ProductList from "@/components/ProductList";
import PromoMouseBanner from "@/components/Promo-mouse-banner";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
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
        <ProductList products={deals} />
      </div>

      <div className="flex flex-col lg:flex-row py-6">
        <Link href="/category/mouses" className="flex flex-1">
          <PromoMouseBanner />
        </Link>
      </div>
    </>
  );
}
