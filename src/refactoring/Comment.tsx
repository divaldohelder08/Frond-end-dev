import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle } from "lucide-react";

export default function Comment() {
  return (
    <div className="grid items-center justify-center h-screen">
      <Card className="min-w-[35rem]">
        <CardHeader>
          <CardTitle>Adicionar um novo comentário</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Avatar className="rounded-md">
            <AvatarImage src="/src/assets/user1.jpg" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
          <div className="w-full flex flex-col">
            <Textarea
              className="w-full"
              placeholder="Type your message here."
            />
            <CardFooter className="flex justify-between py-3 px-0">
              <div className="flex text-muted-foreground stroke-foreground items-center space-x-2">
                <HelpCircle size={19} />
                <Label>Some HTML is OK.</Label>
              </div>
              <Button>Enviar Comentário</Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
