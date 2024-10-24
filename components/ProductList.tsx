import ProductItem from "./Product-item";
import { Product } from "@prisma/client";

import { computeProductTotalPrice } from "@/helpers/products";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            ...product,
            totalPrice: computeProductTotalPrice(product),
          }}
          className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
        />
      ))}
    </div>
  );
};

export default ProductList;
