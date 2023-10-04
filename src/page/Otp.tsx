import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";
import OtpInput from "otp-input-react";
import { useState } from "react";

export default function Otp() {
  const [opt, setOpt] = useState("");

  return (
    <div className="grid items-center justify-center h-screen">
      <Card className="py-7 px-7 flex flex-col gap-5 items-center justify-center">
        <CardTitle className="h-14 w-14 bg-primary rounded-full grid items-center justify-center">
          <ShieldCheck size="2rem" />
        </CardTitle>
        <CardDescription>
          Insira o seu código de autentificação aqui
        </CardDescription>
        <CardContent>
          <form className="grid gap-5">
            <div className="flex gap-4">
              <OtpInput
                value={opt}
                onChange={setOpt}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="w-11 h-11 text-center"
                inputStyles={{
                  className:
                    "flex rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                }}
              />
            </div>
            <div className="flex gap-4">
              <Input type="text" className="w-11 h-11 text-center" />
              <Input type="text" disabled className="w-11 h-11 text-center" />
              <Input type="text" disabled className="w-11 h-11 text-center" />
              <Input type="text" disabled className="w-11 h-11 text-center" />
              <Input type="text" disabled className="w-11 h-11 text-center" />
            </div>
            <Button disabled>Verificar OTG</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
