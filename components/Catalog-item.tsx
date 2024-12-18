"use client";

import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface CategoryItemProps {
  category: Category;
}

const CatalogItem = ({ category }: CategoryItemProps) => {
  const { data } = useSession();

  if (!data?.user.id) return redirect("/");

  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="rounded-bl-lg rounded-br-lg bg-accent py-6">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
