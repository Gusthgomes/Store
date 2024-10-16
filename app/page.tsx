import Link from "next/link";

import PromoBanner from "@/components/Promo-banner";
import CategoryList from "@/components/Category-list";

export default function Home() {
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
    </>
  );
}
