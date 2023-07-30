import Title from '../components/title'
import Layout from '../components/layout'
import { name } from '../lib/constants'
import Homepage from '../components/home'

export default function Home() {
  return (
    <Layout home>
      <Title>
        {name} 
      </Title>
      <Homepage />
    </Layout>
  )
}

