import Link from "next/link";

import { Category } from "@prisma/client";

import { Badge } from "./ui/badge";

import { CATEGORY_ICON } from "@/constants/category-icon";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
