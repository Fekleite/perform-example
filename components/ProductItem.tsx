import { memo, useState } from "react"
import dynamic from "next/dynamic"

import { AddProductToWishlistProps } from "./AddProductToWishlist"

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import("./AddProductToWishlist").then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

interface SearchResultsProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: SearchResultsProps ) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>

      {isAddingToWishlist && (
        <AddProductToWishlist 
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})