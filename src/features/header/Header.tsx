import Image from 'next/image'
import type { FC } from 'react'

interface headerProps {
  url: string
}

const Header: FC<headerProps> = ({url}) => {
  return (
    <header className='h-44 relative bg-accent'>
      <Image
        src={url}
        layout='fill'
        alt='pjharvey'
        width={20}
        height={20}
        objectFit='cover'
      />
    </header>
  )
}
export default Header
