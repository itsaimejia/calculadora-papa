import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm } from '@mantine/form'
import { Button, Card, Group, Stack, TextInput, Title, Text, NumberInput } from '@mantine/core'
import { useState } from 'react'


export default function Home() {
  const [date] = useState(new Date());
  const [fullTicket, setFullTicket] = useState(0.0)
  const [halfTicket, setHalfTicket] = useState(0.0)
  const [sumHalf, setSumHalf] = useState('')
  const [expenses, setExpenses] = useState('')

  const [salary, setSalary] = useState('')
  const [bossMoney, setBossMoney] = useState('')


  const totalFullTicket = () => fullTicket * 13
  const totalHalfTicket = () => halfTicket * 6
  const sumExpenses = () => expenses.split('+').map((e: any) => parseFloat(e)).reduce((a: any, b: any) => a + b)
  const getSalary = () => fullTicket == 0 ? 0 : fullTicket < 100 ? 300 : fullTicket < 150 ? 450 :
    fullTicket < 220 ? 600 : fullTicket < 240 ? 650 : fullTicket < 260 ? 700 : fullTicket < 280 ? 750 :
      fullTicket < 300 ? 800 : fullTicket < 320 ? 850 : fullTicket < 340 ? 900 : fullTicket < 360 ? 950 : fullTicket < 380 ? 1000 :
        fullTicket < 400 ? 1050 : fullTicket < 420 ? 1100 : fullTicket < 440 ? 1150 : fullTicket < 460 ? 1200 : fullTicket < 480 ? 1250 :
          fullTicket < 500 ? 1300 : 0

  const getBossMoney = () => totalFullTicket() + totalHalfTicket() - sumExpenses() - getSalary()

  const parseNaN = (n: any) => Number.isNaN(n) ? 0 : n

  const getDate = () => {
    date.getDay()
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    const formatDate = () => {
      const dateS = date.toDateString().split(' ')
      let dayM = dateS[2]
      let month = dateS[1]
      let year = dateS[3]
      return `${dayM} ${month} ${year}`
    }
    return `${days[date.getDay() - 1]} ${formatDate()}`

  }
  console.log(date.toDateString())

  const cleanAll = () => {
    setFullTicket(0)
    setHalfTicket(0)
    setExpenses('')
    setSalary('')
    setBossMoney('')
  }

  return (


    <Stack align="center" sx={{ backgroundColor: 'white', paddingTop: 50 }}>
      <Title color='black'>{getDate()}</Title>
      <NumberInput
        label="Boletos completos"
        value={fullTicket} onChange={(v: any) => setFullTicket(v)}
        size="lg"
        hideControls
      />
      <Text fw={500} size='lg' color='black'>Total boletos completos: {parseNaN(totalFullTicket())}</Text>
      <NumberInput
        label="Boletos medios" value={halfTicket}
        onChange={(v: any) => setHalfTicket(v)}
        size="lg"
        hideControls
      />
      <Text fw={500} size='lg' color='black'>Total boletos medios: {parseNaN(totalHalfTicket())}</Text>
      <TextInput size="lg" label="Gastos" value={expenses} onChange={(e: any) => setExpenses(e.currentTarget.value)} />
      <Text fw={500} size='lg' color='black'>Gastos: {expenses} = {parseNaN(sumExpenses())}</Text>
      <Title color='black'>Salario: {getSalary()}</Title>
      <Title color='black'>Patrón: {parseNaN(getBossMoney())}</Title>
      <Button size="xs" color='red' onClick={() => cleanAll()}>
        Limpiar
      </Button>
    </Stack>





  );
}
