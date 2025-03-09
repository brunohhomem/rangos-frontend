import { Label } from '@radix-ui/react-label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './ui/select'

export default function TMB() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Taxa Metabólica Basal</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-2 py-2">
          <div className="items-center gap-4">
            <Label htmlFor="hasAcucar" className="text-right">
              Cálculo
            </Label>

            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo de Cálculo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo de Cálculo</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Label htmlFor="descricao" className="text-right">
              Descricao
            </Label>
            <Input
              id="descricao"
              type="text"
              placeholder="Suco de Laranja"
              // value={bebida.descricao}
              // onChange={handleChange}
              className="col-span-3"
            />

            <Label htmlFor="preco" className="text-right">
              Preço
            </Label>
            <Input
              id="preco"
              type="number"
              // value={bebida.preco}
              // onChange={handleChange}
              className="col-span-3"
            />
          </div>

          <div className="flex">
            <Button type="submit" className="bg-emerald-500 flex-grow ">
              Calcular
            </Button>
            <Button
              type="button"
              variant="destructive"
              // onClick={() => setIsOpen(false)}
            >
              Limpar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
