import type { FC } from 'react'
import { useGetPostsDataQuery } from '../../services/post'

interface PostsProps {}
interface PostProps {}

interface PostProps {
  id: string
  userId: string
  date: string
  title: string
  content: string
  upvotes: number
  downvotes: number
}

const Posts: FC<PostsProps> = ({}) => {
  const { data: posts, isLoading } = useGetPostsDataQuery()

  if (isLoading) {
    return <section className='space-y-4 pb-3'>posts are loading...</section>
  }

  return (
    <section className='space-y-4 pb-3'>
      {posts?.map((post) => {
        return <Post key={post.id} {...post} />
      })}
    </section>
  )
}

const Post: FC<PostProps> = ({ title, content, upvotes, downvotes, date }) => {
  return (
    <section>
      <article className='p-3 bg-base-100 rounded-lg '>
        <h2 className='text-xs text-gray-500'>Posted by Frank Malkov {date}</h2>
        <h3 className='font-bold text-lg leading-6 m-0'>{title}</h3>
        <p className='leading-5 pt-2'>{content}</p>
        <div className='flex justify-between pt-5'>
          <button className='btn btn-sm'>21 Comments</button>
          <div className='space-x-2'>
            <button className='btn btn-sm btn-success'>Upvote</button>
            <button className='btn btn-sm btn-error'>Downvote</button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Posts
