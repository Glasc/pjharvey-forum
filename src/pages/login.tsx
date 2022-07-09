import type { FC } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex align-center'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-base-content'>Login now!</h1>
            <p className='py-6'>Join to the biggest PJ Harvey Community.</p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <button className='btn btn-accent' onClick={() => signIn()}>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
