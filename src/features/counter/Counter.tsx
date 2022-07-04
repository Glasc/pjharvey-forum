import type { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/types'
import { increment, selectCount } from './counterSlice'

interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectCount)

  const handleClick = () => dispatch(increment())

  return (
    <section>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={handleClick}>Increment</button>
    </section>
  )
}
export default Counter
