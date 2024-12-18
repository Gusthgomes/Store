import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/Product-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { db } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

export const metadata = {
  title: "Ofertas",
  description: "Ofertas da DevStore",
};

const DealsPage = async () => {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
