import type { FC } from 'react'

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
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

      <button className='btn btn-primary rounded-lg block ml-auto'>
        Create a new post
      </button>
    </section>
  )
}
export default Menu
