import type { NextPage } from 'next'
import Head from 'next/head'
import PersonList from '../features/person-list/PersonList'

const Home: NextPage = () => {
  return (
    <div className=''>
      <PersonList />
    </div>
  )
}

export default Home
