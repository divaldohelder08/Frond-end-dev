import Container from "@/components/Home/Container";
import Hero from "@/components/Home/Hero";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const routes = [
  {
    href: "/",
    label: "Produtos",
  },
  {
    href: "/",
    label: "Categoria",
  },
  {
    href: "/",
    label: "On Sale",
  },
];
export default function Home() {
  return (
    <>
      <header className="sm:flex sm:justify-between py-2 px-4 border-b">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between w-full">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger>
                  <Menu className="h-6 md:hidden w-6" />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {routes?.map((route, key) => {
                      return (
                        <a
                          href={route.href}
                          key={key}
                          className="block px-2 py-1 text-lg"
                        >
                          {route.label}
                        </a>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>
              <a href="/" className="ml-4 lg:ml-0">
                <h1 className="text-xl font-bold">Headers</h1>
              </a>
            </div>
            <nav className="mx-65 items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes?.map((route, key) => {
                return (
                  <Button asChild variant={"ghost"}>
                    <a
                      href={route.href}
                      key={key}
                      className="text-sm font-medium"
                    >
                      {route.label}
                    </a>
                  </Button>
                );
              })}
            </nav>
            <div className="flex items-center justify-between gap-2">
              <Link to="cadastrar">
                <Button>
                  <span className="mr-1">Cadastrar</span>
                  <User size={17} />
                </Button>
              </Link>
              <Link to="entrar">
                <Button variant="outline" className="group">
                  <span className="mr-1">Entrar</span>
                  <ArrowRight
                    size={17}
                    className="group-hover:animate-bouncex"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <Hero />
    </>
  );
}
