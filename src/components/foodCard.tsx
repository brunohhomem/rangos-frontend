import { Calculator, LeafyGreen, Vegan } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Button } from './ui/button'
import { Label } from './ui/label'

export function FoodCard() {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>Banana</CardTitle>
        <CardDescription className="flex text-sm">
          <Label className="text-green-500">
            Vegetariano <LeafyGreen />
          </Label>
          <Label className="text-green-500">
            Vegano <Vegan />
          </Label>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex justify-between">
            <span>Calorias</span>
            <span>90Kcal</span>
          </li>
          <li className="flex justify-between">
            <span>Carboidrato</span>
            <span>90g</span>
          </li>
          <li className="flex justify-between">
            <span>Proteína</span>
            <span>90g</span>
          </li>
          <li className="flex justify-between">
            <span>Lipídeos</span>
            <span>90g</span>
          </li>
          <li className="flex justify-between">
            <span>Colesterol</span>
            <span>90mg</span>
          </li>
          <li className="flex justify-between">
            <span>Fibras</span>
            <span>90mg</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button>
          Calcular Quantidade
          <Calculator />
        </Button>
      </CardFooter>
    </Card>
  )
}
