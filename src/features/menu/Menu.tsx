import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import ButtonCreatePost from '../../components/ButtonCreatePost'

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { data: session } = useSession()

  return (
    <section className='flex justify-between sticky my-4'>
      <div className='dropdown'>
        <label tabIndex={0} className='btn m-0'>
          Hot
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a>New</a>
          </li>
          <li>
            <a>Top</a>
          </li>
        </ul>
      </div>

      {session && <ButtonCreatePost />}
    </section>
  )
}

// get serversideprops typescript snippet
// Language: typescript

export default Menu
