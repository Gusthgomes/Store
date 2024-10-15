"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

import {
  Heart,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            {status === "authenticated" && data?.user && (
              <>
                <SheetClose asChild>
                  <Link href="/orders">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <PackageSearchIcon size={16} />
                      Meus Pedidos
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/wish-list">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <Heart size={16} />
                      Favoritos
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/deals">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <PercentIcon size={16} />
                      Ofertas
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/catalog">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <ListOrderedIcon size={16} />
                      Catálogo
                    </Button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">
            <b>S</b>
          </span>
          tore
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="relative">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[350px] lg:w-[600px] lg:max-w-[600px]"></SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
