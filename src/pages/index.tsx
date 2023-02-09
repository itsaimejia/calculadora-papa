import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm } from '@mantine/form'
import { Button, Card, Group, Stack, TextInput, Title } from '@mantine/core'
import { useState } from 'react'


export default function Home() {
  const [fullTicket, setFullTicket] = useState('')
  const [halfTicket, setHalfTicket] = useState('')
  const [expenses, setExpenses] = useState('')
  const [salary, setSalary] = useState('')
  const [bossMoney, setBossMoney] = useState('')
  const getSalary = () => {
    console.log(fullTicket)
    const pFullTicket = parseFloat(fullTicket)
    const pHalfTicket = parseFloat(halfTicket)
    console.log(pFullTicket)
    const pExpenses = expenses == '' ? 0 : parseFloat(expenses)
    const totalFullTicket = pFullTicket * 13
    const totalHalfTicket = pHalfTicket * 6
    const calculateSalary = pFullTicket < 100 ? 300 : pFullTicket < 150 ? 450 :
      pFullTicket < 220 ? 600 : pFullTicket < 240 ? 650 : pFullTicket < 260 ? 700 : pFullTicket < 280 ? 750 :
        pFullTicket < 300 ? 800 : pFullTicket < 320 ? 850 : pFullTicket < 340 ? 900 : pFullTicket < 360 ? 950 : pFullTicket < 380 ? 1000 :
          pFullTicket < 400 ? 1050 : pFullTicket < 420 ? 1100 : pFullTicket < 440 ? 1150 : pFullTicket < 460 ? 1200 : pFullTicket < 480 ? 1250 :
            pFullTicket < 500 ? 1300 : 300

    const calculateBossMoney = totalFullTicket + totalHalfTicket - calculateSalary - pExpenses
    setSalary(calculateSalary.toFixed(2))
    setBossMoney(calculateBossMoney.toFixed(2))

  }

  const cleanAll = () => {
    setFullTicket('')
    setHalfTicket('')
    setExpenses('')
    setSalary('')
    setBossMoney('')
  }

  return (


    <Stack align="center" sx={{ backgroundColor: 'white', paddingTop: 50 }}>
      <TextInput label="Boletos completos" value={fullTicket} onChange={(e: any) => setFullTicket(e.currentTarget.value)} />
      <TextInput label="Boletos medios" value={halfTicket} onChange={(e: any) => setHalfTicket(e.currentTarget.value)} />
      <TextInput label="Gastos" value={expenses} onChange={(e: any) => setExpenses(e.currentTarget.value)} />
      <Title color='black'>Salario:{salary}</Title>
      <Title color='black'>Dinero patron:{bossMoney}</Title>
      <Button size="md" color='green' onClick={() => getSalary()}>
        Calcular
      </Button>
      <Button size="xs" color='red' onClick={() => cleanAll()}>
        Limpiar
      </Button>
    </Stack>





  );
}
