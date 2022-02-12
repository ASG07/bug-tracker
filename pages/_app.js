import '../styles/globals.scss'
import { useState } from 'react'
import { cardsArray } from '../data/cards';
import { employeesArray } from '../data/employees';

function MyApp({ Component, pageProps }) {
  const [cards, setCards] = useState(cardsArray);
  const [employees, setEmployees] = useState(employeesArray);
  const data = {cards, setCards, employees, setEmployees};

  return <Component {...pageProps} data={data}/>
}

export default MyApp
