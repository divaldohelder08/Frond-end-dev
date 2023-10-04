import { api } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CircleDashed,
  Eye,
  EyeOff,
  Github,
  Lock,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const UserSchema = z
  .object({
    password: z
      .string()
      .nonempty("A password é obrigatória")
      .min(8, "A password deve conter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
    nome: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(8, "Min 8")
      .max(150, "Max 150")
      .transform((nome) => {
        return nome
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .email("Formato Invalido")
      .nonempty("O email é obrigatório"),
    username: z
      .string()
      .min(1)
      .max(20, "Max 20")
      .regex(/^[a-z0-9]+$/, "Formato invalido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As passwords não coincidem",
    path: ["confirmPassword"],
  });

type UserData = z.infer<typeof UserSchema>;

export default function Signup() {
  const [output, setOutput] = useState("");
  const [delay, setDelay] = useState<boolean>(false);
  const [next, setNext] = useState(false);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });


  const signData = (data: UserData) => {
    setDelay(true);

     api
       .post("/create/user", data)
       .then((response) => {
         toast({
           title: `Conta criada com ${response.data.user.username}`,
           description: `Enviamos um e-mail de confirmação para o ${response.data.user.email}`,
         });
         setOutput(JSON.stringify(response.data, null, 2));
       })
       .catch((error) => {
         console.error(error);
         toast({
           variant: "destructive",
           title: "Erro",
           description: error.response.data.mensagem,
         });
       })
       .finally(() => {
         setDelay(false);
       });
  };
  return (
    <div className="flex h-screen">
      <div className="w-4/12 border bg-card text-card-foreground shadow py-5 px-9">
        <h1 className=" font-extrabold text-cyan-800 hover:underline">
          Job<b className="text-primary">On</b>
        </h1>
        <div className="w-full h-full">
          {!next && (
            <>
              <CardHeader className="px-6 py-0">
                <CardTitle className="font-normal mt-8 mb-2 text-2xl lg:text-3xl">
                  Seja, bem-vindo
                </CardTitle>
                <CardDescription>Criar uma conta</CardDescription>
                <div className="w-full flex flex-col space-y-5 py-6">
                  <Button
                    variant="secondary"
                    size="lg"
                    className=" w-full text-center gap-1.5"
                  >
                    <Github size="16" />
                    Criar conta com o Github
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-center gap-1.5"
                  >
                    <Lock size="16" />
                    Criar conta com o Google
                  </Button>
                </div>
              </CardHeader>
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-scale-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-2 text-sm text-scale-1200">
                    ou
                  </span>
                </div>
              </div>
            </>
          )}
          <form
            onSubmit={handleSubmit(signData)}
            className={`flex flex-col gap-4 mt-4`}
          >
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <div>
                <Input
                  type="text"
                  autoComplete="nome"
                  placeholder="insira o seu nome"
                  {...register("nome")}
                />
              </div>
              {errors.nome && (
                <p className="text-[0.8rem] font-medium text-destructive ">
                  {errors.nome.message}
                </p>
              )}
            </div>{" "}
            <div className="space-y-2">
              <Label htmlFor="username">username</Label>
              <div>
                <Input
                  type="text"
                  placeholder="insira o seu username"
                  autoComplete="username"
                  {...register("username")}
                />
              </div>
              {errors.username && (
                <p className="text-[0.8rem] font-medium text-destructive ">
                  {errors.username.message}
                </p>
              )}
            </div>
            {next && (
              <>
                <div className="space-y-2">
                  <Label className="">E-mail</Label>
                  <div>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="insira o seu e-mail"
                      {...register("email")}
                      className={errors.email && ""}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[0.8rem] font-medium text-destructive ">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="">Senha</Label>
                  <div className="space-x-2">
                    <Input
                      type={show ? "text" : "password"}
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="">Confirmar senha</Label>
                  <div className="flex space-x-2">
                    <Input
                      type={show ? "text" : "password"}
                      {...register("confirmPassword")}
                      className={errors.email && "text-destructive "}
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="secondary"
                      className="w-9 text-accent-foreground"
                      onClick={() =>{
                        if(show){ setShow(false)}else{ setShow(true);}}}
                    >
                      {!show ? <Eye size={18} /> : <EyeOff size={18} />}
                    </Button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-[0.8rem] font-medium text-destructive">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <div className="space-x-2">
                  <Checkbox required className="w-4 h-4" />
                  <Label className="text-xs sm:mx-auto sm:max-w-sm">
                    Você concorda com os
                    <a
                      className="underline hover:text-scale-1100"
                      href="https://supabase.com/terms"
                    >
                      {" "}
                      Termos de Serviço
                    </a>{" "}
                    e a
                    <a
                      className="underline hover:text-scale-1100"
                      href="https://supabase.com/privacy"
                    >
                      Política de Privacidade
                    </a>{" "}
                    do jobOn
                  </Label>
                </div>
              </>
            )}
            {next && (
              <Button size="lg" className="w-full text-accent-foreground">
                {delay ? <CircleDashed className="animate-spin" /> : "Criar agora"}
              </Button>
            )}
          </form>
          {!next && (
            <Button
              size="lg"
              className="mt-4 w-full text-accent-foreground gap-2"
              onClick={() => setNext(true)}
            >
              Criar <ArrowRight size={17.5} />
            </Button>
          )}
          <div className="sm:text-center text-muted-foreground">
            <div className="mx-auto my-8 text-sm">
              <div>
                <span>Já tens uma conta? </span>
                <Link
                  className="underline transition hover:text-scale-1100"
                  to="/entrar"
                >
                  Entre agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center">
        {output && (
          <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg max-w-lg overflow-hidden">
            {output}
          </pre>
        )}
      </div>
    </div>
  );
}
