import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
} from 'phosphor-react'

import { CheckoutContainer } from './styles'
import { PreviewCard } from './PreviewCard'
import { useContext, useEffect, useState } from 'react'
import { Address, OrdersContext } from '../../context/OrdersContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import axios from 'axios'

export function Checkout() {
  const { order, updateCheckoutInformation } = useContext(OrdersContext)

  const { register, watch, handleSubmit, setValue } = useForm()

  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('Invalid')

  const deliveryFee = 3.5
  const navigationTimeout = 2000

  function handlePaymentMethodChange(e: any) {
    setPaymentMethod(e.target.value)
  }

  function isActiveButton(type: string) {
    const isActive = paymentMethod === type ? 'Active' : 'Inactive'
    return isActive
  }

  function calculateTotal(): number {
    const itemPrices = order.items.map((item) => {
      return item.amount * item.product.price
    })
    return itemPrices.reduce((a, b) => a + b, 0)
  }

  const onSubmit = (data: any) => {
    const newAddress: Address = {
      city: data.city,
      district: data.district,
      houseNumber: data.houseNumber,
      state: data.state,
      street: data.street,
      zipcode: data.zipcode,
      complement: data.complement,
    }

    if (paymentMethod === 'Invalid') {
      alert('Por favor selecione um modo de pagamento.')
      return
    }

    if (order.items.length === 0) {
      alert('Não é possível fazer um pedido vazio.')
      return
    }

    updateCheckoutInformation(newAddress, paymentMethod)
    setTimeout(() => {
      navigate('/checkout/success')
    }, navigationTimeout)
  }

  const zipcode = watch('zipcode', '')

  useEffect(() => {
    if (zipcode.length === 9) {
      axios
        .get(`https://viacep.com.br/ws/${zipcode.replace('-', '')}/json/`)
        .then((response) => {
          setValue('street', response.data.logradouro)
          setValue('district', response.data.bairro)
          setValue('city', response.data.localidade)
          setValue('state', response.data.uf)
        })
        .catch((error) =>
          console.log(
            'Não foi possível completar o request c/ API de CEP',
            error,
          ),
        )
    }
  }, [setValue, zipcode])

  return (
    <CheckoutContainer>
      <main>
        <h1>Complete seu pedido</h1>
        <form id="customerInformationForm" onSubmit={handleSubmit(onSubmit)}>
          <section className="Address">
            <div className="Title">
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="InputContainer">
              <InputMask
                mask={'99999-999'}
                maskChar=""
                type="text"
                placeholder="CEP"
                required
                {...register('zipcode')}
              />

              <input
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />

              <div>
                <input
                  type="numeric"
                  placeholder="Número"
                  required
                  maxLength={5}
                  {...register('houseNumber')}
                />

                <input
                  type="text"
                  placeholder="Complemento"
                  className="Flex"
                  {...register('complement')}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('district')}
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  className="Flex"
                  maxLength={40}
                  required
                  {...register('city')}
                />

                <input
                  type="text"
                  placeholder="UF"
                  className="UF"
                  required
                  {...register('state')}
                />
              </div>
            </div>
          </section>
        </form>

        <section className="Payment">
          <div className="Title">
            <CurrencyDollar size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="Buttons">
            <button
              onClick={handlePaymentMethodChange}
              value="Crédito"
              className={isActiveButton('Crédito')}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </button>

            <button
              onClick={handlePaymentMethodChange}
              value="Débito"
              className={isActiveButton('Débito')}
            >
              <Bank size={16} />
              Cartão de débito
            </button>

            <button
              onClick={handlePaymentMethodChange}
              value="Dinheiro"
              className={isActiveButton('Dinheiro')}
            >
              <Money size={16} />
              Dinheiro
            </button>
          </div>
        </section>
      </main>

      <aside>
        <h1>Cafés selecionados</h1>
        <div className="Wrapper">
          <section className="Cards">
            {order.items.map((item) => {
              return (
                <PreviewCard
                  key={item.product.id}
                  product={item.product}
                  amount={item.amount}
                />
              )
            })}
          </section>

          <section className="Details">
            <p>
              <span>Total de itens</span>
              <span>R$ {calculateTotal().toFixed(2)}</span>
            </p>

            <p>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </p>

            <p>
              <strong>Total</strong>
              <strong>R$ {(calculateTotal() + deliveryFee).toFixed(2)}</strong>
            </p>
            <button form="customerInformationForm" className="FinishOrder">
              Confirmar Pedido
            </button>
          </section>
        </div>
      </aside>
    </CheckoutContainer>
  )
}
