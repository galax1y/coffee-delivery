import americano from '../assets/coffee-types/type-americano.svg'
import tradicional from '../assets/coffee-types/type-expresso.svg'
import cremoso from '../assets/coffee-types/type-cremoso.svg'
import arabe from '../assets/coffee-types/type-arabe.svg'
import cafecomleite from '../assets/coffee-types/type-cafecomleite.svg'
import gelado from '../assets/coffee-types/type-cafegelado.svg'
import capuccino from '../assets/coffee-types/type-capuccino.svg'
import chocolatequente from '../assets/coffee-types/type-chocolatequente.svg'
import cubano from '../assets/coffee-types/type-cubano.svg'
import havaiano from '../assets/coffee-types/type-havaiano.svg'
import irlandes from '../assets/coffee-types/type-irlandes.svg'
import latte from '../assets/coffee-types/type-latte.svg'
import macchiato from '../assets/coffee-types/type-macchiato.svg'
import mocaccino from '../assets/coffee-types/type-mocaccino.svg'
import { v4 as uuidv4 } from 'uuid'
import { OrderItem, Product } from '../context/OrdersContext'

export const productsData: Product[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    image: tradicional,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 1.9,
    categories: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    image: americano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 2.9,
    categories: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    image: cremoso,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 3.9,
    categories: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    image: gelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 4.9,
    categories: ['Tradicional', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    image: cafecomleite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 5.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Latte',
    image: latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 6.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    image: capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    image: macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 8.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    image: mocaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    image: chocolatequente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 10.9,
    categories: ['Especial', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    image: cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 11.9,
    categories: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    image: havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 12.9,
    categories: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    image: arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 13.9,
    categories: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    image: irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 14.9,
    categories: ['Especial', 'Alcoólico'],
  },
]

export const orderItemsPlaceholder: OrderItem[] = [
  {
    product: {
      id: productsData.find(
        (product) => product.name === 'Expresso Tradicional',
      )?.id!,
      name: 'Expresso Tradicional',
      image: tradicional,
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 1.9,
      categories: ['Tradicional'],
    },
    amount: 10,
  },
  {
    product: {
      id: productsData.find((product) => product.name === 'Expresso Americano')
        ?.id!,
      name: 'Expresso Americano',
      image: americano,
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 2.9,
      categories: ['Tradicional'],
    },
    amount: 10,
  },
]
