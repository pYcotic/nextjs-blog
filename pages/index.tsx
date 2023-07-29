import Title from '../components/title'
import Layout from '../components/layout'
import { siteTitle } from '../lib/constants'
import About from '../components/about'

export default function Home() {
  return (
    <Layout home>
      <Title>
        {siteTitle} 
      </Title>
      <About />
    </Layout>
  )
}

