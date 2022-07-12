import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import type { FC } from 'react'

interface ButtonCreatePostProps {}

const ButtonCreatePost: FC<ButtonCreatePostProps> = () => {
  return (
    <Link href='/create'>
      <button className='btn btn-primary rounded-lg block ml-auto'>
        Create a new post
      </button>
    </Link>
  )
}

export default ButtonCreatePost
