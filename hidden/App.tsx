import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useChat } from "ai/react"
export default function Apps() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:"http://127.0.0.1:5500/src/api/chat/"
  })
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[440px] h-[650px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>Usando o Vercel SDK para criar u chatboot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {messages.map(message =>
          (<div key={message.id} className="flex gap-3 text-slate-600 text-sm">
            {
              message.role === "user" && (
                <Avatar>
                  <AvatarFallback>DH</AvatarFallback>
                  <AvatarImage src="/src/assets/user.jpg" />
                </Avatar>)
            }
            {
              message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>DH</AvatarFallback>
                  <AvatarImage src="/src/assets/react.svg" />
                </Avatar>)
            }
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">
                {message.role === "user" ? "Divaldo Hélder" : "AI"}
              </span>
              {message.content}
            </p>
          </div>)
          )}
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="Como posso te ajudar" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
