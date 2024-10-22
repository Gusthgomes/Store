"use server";

import { db } from "@/lib/prisma";

export const addProductToWishlist = async (
  userId: string,
  productId: string,
  wishlistId?: string
) => {
  let wishlist;

  if (wishlistId) {
    wishlist = await db.wishList.findFirstOrThrow({
      where: {
        userId: userId,
        id: wishlistId,
      },
    });
  }

  if (!wishlistId) {
    wishlist = await db.wishList.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!wishlist) {
      wishlist = await db.wishList.create({
        data: {
          userId: userId,
          name: "Favoritos",
        },
      });
    }
  }

  await db.product.update({
    where: {
      id: productId,
    },
    data: {
      wishLists: {
        connect: {
          id: wishlist!.id,
        },
      },
    },
  });
};
