import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CatalogItem from "@/components/Catalog-item";

const CatalogPage = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
