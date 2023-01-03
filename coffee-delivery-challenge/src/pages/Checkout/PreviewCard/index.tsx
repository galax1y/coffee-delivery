import { Trash, Plus, Minus } from 'phosphor-react'
import { PreviewCardContainer } from './styles'
import { OrderItem, OrdersContext } from '../../../context/OrdersContext'
import { useContext } from 'react'

export function PreviewCard({ product, amount }: OrderItem) {
  const {
    order,
    removeFromOrder,
    increaseAmountFromOrder,
    decreaseAmountFromOrder,
  } = useContext(OrdersContext)

  function handleRemoveFromOrder() {
    removeFromOrder(product.id)
  }

  function handleIncreaseAmount() {
    const amount = order.items.find((item) => item.product.id === product.id)
      ?.amount!

    if (amount <= 98) increaseAmountFromOrder(product.id)
  }

  function handleDecreaseAmount() {
    const amount = order.items.find((item) => item.product.id === product.id)
      ?.amount!

    if (amount > 1) decreaseAmountFromOrder(product.id)
  }

  return (
    <PreviewCardContainer className="PreviewCard">
      <div className="Row">
        <img src={product.image} alt="" />

        <div className="Column">
          <p>{product.name}</p>
          <section className="OrderInteraction">
            <div className="Amount">
              <button onClick={handleDecreaseAmount}>
                <Minus size={14} weight={'bold'} />
              </button>

              <span>{amount}</span>

              <button onClick={handleIncreaseAmount}>
                <Plus size={14} weight={'bold'} />
              </button>
            </div>

            <button onClick={handleRemoveFromOrder}>
              <Trash size={16} /> Remover
            </button>
          </section>
        </div>
      </div>
      <p>R$ {product.price.toFixed(2)}</p>
    </PreviewCardContainer>
  )
}
