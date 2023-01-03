import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Address {
  zipcode: string
  street: string
  houseNumber: number
  complement?: string
  district: string
  city: string
  state: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  categories: string[]
}

export interface OrderItem {
  product: Product
  amount: number
}

interface Order {
  items: OrderItem[]
  address: Address
  paymentMethod?: string
}

interface OrdersContextType {
  order: Order
  addToOrder: (ItemToAdd: OrderItem) => void
  removeFromOrder: (ItemId: string) => void
  increaseAmountFromOrder: (ItemId: string) => void
  decreaseAmountFromOrder: (ItemId: string) => void
  updateCheckoutInformation: (
    newAddress: Address,
    newPaymentMethod: string,
  ) => void
  finishOrder: () => void
}

interface OrdersContextProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [order, setOrder] = useState<Order>(getLocalStorageData())

  useEffect(() => {
    const stateJSON = JSON.stringify(order)

    localStorage.setItem('@coffee-delivery:orders-1.0.0', stateJSON)
  }, [order])

  function getLocalStorageData(): Order {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:orders-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      items: [],
      address: {
        zipcode: '',
        street: '',
        houseNumber: -1,
        complement: '',
        district: '',
        city: '',
        state: '',
      },
      paymentMethod: undefined,
    }
  }

  function increaseAmountFromOrder(ItemIdToChange: string) {
    const updatedItems: OrderItem[] = order.items.map((item) => {
      if (item.product.id === ItemIdToChange) {
        item.amount += 1
      }
      return item
    })

    const updatedOrder: Order = {
      items: updatedItems,
      address: order.address,
      paymentMethod: order.paymentMethod,
    }

    setOrder(updatedOrder)
  }

  function decreaseAmountFromOrder(ItemIdToChange: string) {
    const updatedItems: OrderItem[] = order.items.map((item) => {
      if (item.product.id === ItemIdToChange) {
        item.amount -= 1
      }
      return item
    })

    const updatedOrder: Order = {
      items: updatedItems,
      address: order.address,
      paymentMethod: order.paymentMethod,
    }

    setOrder(updatedOrder)
  }

  function removeFromOrder(ItemIdToRemove: string) {
    const newItems = order.items.filter(
      (item) => item.product.id !== ItemIdToRemove,
    )

    const updatedOrder: Order = {
      items: newItems,
      address: order.address,
      paymentMethod: order.paymentMethod,
    }

    setOrder(updatedOrder)
  }

  function addToOrder(ItemToAdd: OrderItem): void {
    const productFound = order.items.find((item) => {
      return item.product.name === ItemToAdd.product.name
    })

    if (productFound) {
      if (productFound.amount + ItemToAdd.amount > 99) {
        alert(
          'Não foi possível adicionar o produto. (máx 99 do mesmo tipo de café)',
        )
        return
      }

      productFound.amount += ItemToAdd.amount

      const newItems = order.items.map((item) => {
        if (item.product.name === ItemToAdd.product.name) {
          return productFound
        }
        return item
      })

      const updatedOrder: Order = {
        items: newItems,
        address: order.address,
        paymentMethod: order.paymentMethod,
      }
      setOrder(updatedOrder)
    } else {
      const newOrder: Order = {
        items: [...order.items, ItemToAdd],
        address: order.address,
        paymentMethod: order.paymentMethod,
      }
      setOrder(newOrder)
    }
  }

  function updateCheckoutInformation(
    newAddress: Address,
    newPaymentMethod: string,
  ) {
    const updatedOrder: Order = {
      items: order.items,
      address: newAddress,
      paymentMethod: newPaymentMethod,
    }

    setOrder(updatedOrder)
  }

  function finishOrder() {
    const emptyOrder: Order = {
      items: [],
      paymentMethod: order.paymentMethod,
      address: order.address,
    }

    setOrder(emptyOrder)
  }

  return (
    <OrdersContext.Provider
      value={{
        order,
        addToOrder,
        removeFromOrder,
        increaseAmountFromOrder,
        decreaseAmountFromOrder,
        updateCheckoutInformation,
        finishOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
