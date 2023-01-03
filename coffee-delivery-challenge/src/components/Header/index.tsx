import coffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.svg'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

export function Header() {
  const { order } = useContext(OrdersContext)

  function countTotalItems(): number {
    return order.items.reduce((total, item) => (total += item.amount), 0)
  }

  return (
    <HeaderContainer>
      <NavLink to={'/'} className="Logo">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <span>
        <a
          target={'blank'}
          href="https://goo.gl/maps/F5MAefCpvDBsz6Zc6"
          className="City"
          title="Nos visite!"
        >
          <MapPin size={22} weight={'fill'} />
        </a>

        <NavLink to={'/checkout'} className="Checkout">
          <ShoppingCart size={22} weight={'fill'} />
        </NavLink>

        <span className="OrderItemCount">{countTotalItems()}</span>
      </span>
    </HeaderContainer>
  )
}
