"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
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

          <div className="flex flex-col">
            <div className="flex items-center gap-2 py-4">
              <Avatar>
                <AvatarFallback>
                  {/* {data.user.name?.[0].toUpperCase()} */}
                </AvatarFallback>

                {/* {data.user.image && <AvatarImage src={data.user.image} />} */}
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium"></p>
                <p className="text-sm opacity-75">Boas compras!</p>
              </div>
            </div>
            <Separator />
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
