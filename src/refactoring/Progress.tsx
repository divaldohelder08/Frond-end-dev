import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Progre() {
  return (
    <div className="grid items-center justify-center h-screen">
      <Card className="min-w-[20rem]">
        <CardHeader>
          <CardTitle>50 customer reviews</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="flex items-center gap-4">
            <p>5 star</p>
            <Progress value={50} className="w-1/2" />
            <b>50%</b>
          </div>
          <div className="flex items-center justify-between">
            <p>4 star</p>
            <Progress value={20} className="w-1/2" />
            <b>20%</b>
          </div>
          <div className="flex items-center justify-between">
            <p>3 star</p>
            <Progress value={14} className="w-1/2" />
            <b>14%</b>
          </div>
          <div className="flex items-center justify-between">
            <p>2 star</p>
            <Progress value={2} className="w-1/2" />
            <b>2%</b>
          </div>
          <div className="flex items-center justify-between">
            <p>1 star</p>
            <Progress value={8} className="w-1/2" />
            <b>8%</b>
          </div>
          <div className="py-4">
            <h3>Avaliar esse projeto</h3>
            <CardDescription>Share your thoughts with other customers</CardDescription>
            </div>
            <Button variant="secondary">Escrever comentário</Button>
        </CardContent>
      </Card>
    </div>
  );
}
