import type { FC } from 'react'
import { useGetPersonsDataQuery } from '../../services/person'

interface PersonListProps {}

const PersonList: FC<PersonListProps> = ({}) => {
  const { data } = useGetPersonsDataQuery()

  console.log(data)

  return (
    <div>
      <h1>Person List:</h1>
    </div>
  )
}
export default PersonList
