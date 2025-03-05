import { FoodCard } from './foodCard'

export default function FoodCardList() {
  return (
    <div className="flex gap-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FoodCard key={i} />
      ))}
    </div>
  )
}
