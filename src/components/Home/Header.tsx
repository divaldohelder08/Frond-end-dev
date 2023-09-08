import { CgMenu } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import { ModeToggle } from "../Mode";
import { PerfilButton } from "@/components/PerfilButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const routes = [
  {
    href: "/",
    label: "Produtos"
  },
  {
    href: "/",
    label: "Categoria"
  },
  {
    href: "/",
    label: "On Sale"
  }
]
export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet >
              <SheetTrigger>
                <CgMenu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {
                    routes?.map((route, key) => {
                      return (
                        <a href={route.href} key={key} className="block px-2 py-1 text-lg">
                          {route.label}</a>
                      )
                    })
                  }
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Headers</h1>
            </a>
          </div>
          <nav className="mx-65 items-center space-x-4 lg:space-x-6 hidden md:block">
            {
              routes?.map((route, key) => {
                return (
                  <Button asChild variant={"ghost"}>
                    <a href={route.href} key={key} className="text-sm font-medium">{
                      route.label
                    }</a>
                  </Button>
                )
              })
            }
          </nav>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
            >
              <AiOutlineShoppingCart size={20} />
              <span className="sr-only">
                Shopping Cart
              </span>
            </Button>
            <ModeToggle />
            <PerfilButton />
          </div>
        </div>
      </Container>
    </header>
  )
}
