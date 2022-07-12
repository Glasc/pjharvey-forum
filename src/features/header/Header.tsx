import Image from 'next/image'
import type { FC } from 'react'

interface headerProps {
  url: string
}

const Header: FC<headerProps> = ({url}) => {
  return (
    <header className='h-44 relative bg-primary-focus'>
      <Image
        src={url}
        layout='fill'
        alt='pjharvey'
        objectFit='cover'
      />
    </header>
  )
}
export default Header
