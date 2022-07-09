import type { FC } from 'react'

interface PostsProps {}
interface PostProps {}

const Posts: FC<PostsProps> = ({}) => {
  return (
    <section className='space-y-4 pb-3'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  )
}

const Post: FC<PostsProps> = ({}) => {
  return (
    <section>
      <article className='p-3 bg-base-100 rounded-lg '>
        <h2 className='text-xs text-gray-500'>Posted by Frank Malkov 1 day ago</h2>
        <h3 className='font-bold text-lg leading-6 m-0'>
          {`Is it an unpopular opinion to consider “Is This Desire?” one of Polly's
            best albums?`}
        </h3>
        <p className='leading-5 pt-2'>
          {`In fact, if I'm being honest, I much prefer it to the highly lauded Stories
            From The City, Stories From The Sea. I'm largely drawn to the dark, menacing...`}
        </p>
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
