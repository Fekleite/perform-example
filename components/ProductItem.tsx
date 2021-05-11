interface SearchResultsProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem({ product }: SearchResultsProps ) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}