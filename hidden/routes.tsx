import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { api } from "./Api/Api";

const UserSchema = z.object({
  email: z.string().email("Formato invalido").nonempty("O email é obrigatório"),
  password: z.string().min(5, "Min 5").max(50, "Max 50"),
  nome: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(10, "Min 10")
    .max(100, "Max 100")
    .transform((full) => {
      return full
        .trim()
        .split(" ")
        .map((nome) => {
          return nome[0].toUpperCase().concat(nome.substring(1));
        }).join(" ");
    }),
  username: z.string().min(5, "Min 10").max(15, "Max 100"),
});

type UserData = z.infer<typeof UserSchema>;

export default function MyForm() {
  const [output, setOutput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });

  const onMySubmit = (data: UserData) => {
    console.log(data);
    setOutput(JSON.stringify(data, null, 2));
    api.post("/create/user",data)
  };

  return (
    <div className="min-h-screen w-full items-center flex gap-8 justify-center">
      <div>
        {output && (
          <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
            {output}
          </pre>
        )}
      </div>
      <Card className="min-h-fit min-w-[320px] max-w-[400]">
        <CardHeader>
          <CardTitle>SingIn</CardTitle>
          <CardDescription>
            Make a login to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onMySubmit)}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome:</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Informe o seu nome completo"
                {...register("nome")}
              />
              {errors.nome && (
                <span className="text-red-500 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">username:</Label>
              <Input
                id="username"
                type="text"
                placeholder="Informe o username"
                {...register("username")}
              />
              {errors.username && (
                <span className="text-red-500 text-xs">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                placeholder="Informe o seu email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password:</Label>
              <Input
                id="password"
                type="password"
                placeholder="Informe a sua password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button>Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
