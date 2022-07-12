import { useSession } from 'next-auth/react'
import { ReactElement, useEffect, useState } from 'react'
import Layout from '../features/layout/Layout'
import { Post, useAddPostMutation } from '../services/post'
import { NextPageWithLayout } from './_app'

const Create: NextPageWithLayout = ({}) => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')
  const { data: session }: any = useSession()

  const [addPost, { isSuccess }] = useAddPostMutation()

  useEffect(() => {
    if (isSuccess) {
      setInputTitle('')
      setInputContent('')
    }
  }, [isSuccess])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!session?.id) return

    const newPost: Post = {
      title: inputTitle,
      content: inputContent,
      upvotes: 0,
      downvotes: 0,
      userId: session?.id || 'breh',
    }

    addPost(newPost)
  }

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    const inputChanged = e.target.name
    switch (inputChanged) {
      case 'title':
        setInputTitle(inputValue)
        break
      case 'content':
        setInputContent(inputValue)
        break
    }
  }

  return (
    <div className='flex-grow bg-base-100'>
      <form className='bg-base-200 my-5 p-3 rounded-lg space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <label className='block font-semibold' htmlFor='title'>
            Title
          </label>
          <input
            className='input input-bordered text-md w-full max-w-xs'
            onChange={handleInputChange}
            value={inputTitle}
            name='title'
            type='text'
          />
        </div>
        <div className='space-y-2'>
          <label className='block font-semibold' htmlFor='content'>
            Content
          </label>
          <textarea
            className='textarea textarea-bordered w-full'
            onChange={handleInputChange}
            value={inputContent}
            rows={9}
            name='content'
          />
        </div>
        <button className='btn btn-primary block ml-auto' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

Create.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Create
