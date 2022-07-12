import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Header from '../features/header/Header'
import Layout from '../features/layout/Layout'
import Menu from '../features/menu/Menu'
import Posts from '../features/posts/Posts'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex-grow'>
      <Head>
        <title>PJ Forum</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header url='/assets/pjhv-header.jpg' />
      <Menu />
      <Posts />
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
