import { Featured } from '../../components/Featured'
import { HomeContainer } from './styles'
import { Card } from './Card'
import { productsData } from '../../helpers/product-temp-db'

export function Home() {
  return (
    <HomeContainer>
      <Featured />

      <section className="Shop">
        <h1>Nossos cafés</h1>

        <div className="Display">
          {productsData.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                categories={product.categories}
              />
            )
          })}
        </div>
      </section>
    </HomeContainer>
  )
}
