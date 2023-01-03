import { CheckoutSuccessContainer } from './styles'
import checkoutSuccessImage from '../../assets/checkoutSuccess.svg'
import { KeypointCircleContainer } from '../../components/KeypointCircle/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

export function CheckoutSuccess() {
  const { order, finishOrder } = useContext(OrdersContext)

  const capitalizedCity =
    order.address.city.charAt(0).toUpperCase() + order.address.city.slice(1)
  const capitalizedState = order.address.state.toUpperCase()

  const capitalizedDistrict =
    order.address.district.charAt(0).toUpperCase() +
    order.address.district.slice(1)

  const capitalizedStreet =
    order.address.street.charAt(0).toUpperCase() + order.address.street.slice(1)

  useEffect(() => {
    finishOrder()
  }, [])

  return (
    <CheckoutSuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="InformationContainer">
          <div>
            <KeypointCircleContainer>
              <MapPin size={16} weight={'fill'} />
            </KeypointCircleContainer>
            <span>
              Entrega em{' '}
              <strong>
                {capitalizedStreet}, {order.address.houseNumber}
              </strong>
              <p>
                {capitalizedDistrict} - {capitalizedCity}, {capitalizedState}
              </p>
            </span>
          </div>

          <div>
            <KeypointCircleContainer>
              <Timer size={16} weight={'fill'} />
            </KeypointCircleContainer>
            <span>
              Previsão de entrega
              <p>
                <strong>20 - 30 min</strong>
              </p>
            </span>
          </div>

          <div>
            <KeypointCircleContainer>
              <CurrencyDollar size={16} weight="regular" />
            </KeypointCircleContainer>
            <span>
              Pagamento na entrega
              <p>
                <strong>{order.paymentMethod}</strong>
              </p>
            </span>
          </div>
        </div>
      </section>
      <img src={checkoutSuccessImage} alt="" />
    </CheckoutSuccessContainer>
  )
}
