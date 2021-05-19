import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults"

type Result = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
}

export default function Home() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<Result[]>([])

  async function handleSearch(e: FormEvent) {
    e.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => {
      return {
        ...product,
        priceFormatted: formatter.format(product.price)
      }
    })

    setResults(products)
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch} >
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />

        <button type="submit" >Buscar</button>
      </form>

      <SearchResults 
        results={results} 
        onAddToWishList={addToWishList}
      />
    </div>
  )
}
