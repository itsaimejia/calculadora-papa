import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm } from '@mantine/form'
import { Button, Stack, TextInput } from '@mantine/core'
import { useState } from 'react'


export default function Home() {
  const [fullTicket, setFullTicket] = useState('')
  const [halfTicket, setHalfTicket] = useState('')
  const [expenses, setExpenses] = useStatezgt
  const getSalary = () => {

  }

  return (
    <Stack align="center" sx={{ backgroundColor: 'white' }}>
      <TextInput label="Boletos completos" value={fullTicket} />
      <TextInput label="Boletos medios" value={halfTicket} />
      <TextInput label="Boletos medios" value={halfTicket} />

      <Button type="submit" mt="sm">
        Submit
      </Button>
    </Stack>
  );
}
