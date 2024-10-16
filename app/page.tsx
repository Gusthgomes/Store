import Link from "next/link";

import PromoBanner from "@/components/Promo-banner";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <PromoBanner />
        </Link>
      </div>
    </>
  );
}
