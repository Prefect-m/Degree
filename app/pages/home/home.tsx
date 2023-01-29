import React from 'react'
import Layout from '@/layout/Layout'
import { Hero } from '@/components/ui'

export const Home = () => {

  return (
    <Layout title="Главная, " description='Добро пожаловать в Свадебный салон что-то'
      meta={[{ name: "keywords", content: "Свадебный салон, стиль, красота, макияж" }]}>
      <Hero />
    </Layout>
  )
}