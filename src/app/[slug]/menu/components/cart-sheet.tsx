import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext)

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-4/5">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full py-5">
          <div className="flex-auto">
            {products.map(product => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>

          <Card className="mb-6">
            <CardContent className="p-5 flex flex-col gap-5">
              <div className="flex justify-between border-b">
                <p className="text-sm text-muted-foreground">Descontos</p>
                <p className="text-sm font-semibold">{formatCurrency(0)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full rounded-full">
            Finalizar pedido
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;