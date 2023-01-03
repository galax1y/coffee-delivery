import { CardContainer } from './styles'
import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import {
  OrderItem,
  OrdersContext,
  Product,
} from '../../../context/OrdersContext'
import { useContext, useState } from 'react'
import { CardCategory } from './CardCategories'
import { v4 as uuid } from 'uuid'

export function Card({
  id,
  name,
  description,
  categories,
  price,
  image,
}: Product) {
  const { addToOrder } = useContext(OrdersContext)
  const [amount, setAmount] = useState(1)

  function handleNewOrderItem() {
    const newOrderItem: OrderItem = {
      amount,
      product: {
        id,
        description,
        image,
        name,
        price,
        categories,
      },
    }

    addToOrder(newOrderItem)
  }

  function handleIncreaseAmount() {
    if (amount < 99) handleAmountChange('plus')
  }

  function handleDecreaseAmount() {
    if (amount > 1) handleAmountChange('minus')
  }

  function handleAmountChange(type: string) {
    switch (type) {
      case 'plus':
        setAmount((prevState) => prevState + 1)
        break

      case 'minus':
        setAmount((prevState) => prevState - 1)
        break

      default:
        break
    }
  }

  return (
    <CardContainer>
      <img src={image} alt="" title="Card Image" />
      <div className="CardCategories">
        {categories.map((category) => (
          <CardCategory key={uuid()} category={category} />
        ))}
      </div>
      <h2>{name}</h2>
      <label>{description}</label>

      <section>
        <div className="Price">
          R$ <strong>{price.toFixed(2)}</strong>
        </div>

        <div className="CartInterface">
          <div className="Amount">
            <button onClick={handleDecreaseAmount}>
              <Minus size={14} weight={'bold'} />
            </button>

            <span>{amount}</span>

            <button onClick={handleIncreaseAmount}>
              <Plus size={14} weight={'bold'} />
            </button>
          </div>

          <div className="CheckoutButton">
            <button onClick={handleNewOrderItem}>
              <ShoppingCartSimple size={22} weight={'fill'} />
            </button>
          </div>
        </div>
      </section>
    </CardContainer>
  )
}
