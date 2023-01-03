import { FeaturedContainer } from './styles'
import featuredImage from '../../assets/featuredImage.png'
import { KeypointCircleContainer } from '../KeypointCircle/styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Featured() {
  return (
    <FeaturedContainer>
      <main>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <section className="Benefits">
          <div>
            <KeypointCircleContainer>
              <ShoppingCart size={20} weight={'fill'} />
            </KeypointCircleContainer>
            <span>Compra simples e segura</span>
          </div>

          <div>
            <KeypointCircleContainer>
              <Package size={20} weight={'fill'} />
            </KeypointCircleContainer>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <KeypointCircleContainer>
              <Timer size={20} weight={'fill'} />
            </KeypointCircleContainer>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <KeypointCircleContainer>
              <Coffee size={20} weight={'fill'} />
            </KeypointCircleContainer>
            <span>O café chega fresquinho até você</span>
          </div>
        </section>
      </main>

      <aside>
        <img src={featuredImage} alt="" />
      </aside>
    </FeaturedContainer>
  )
}
