import { useSession, signIn, signOut, getSession, getProviders } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

interface LoginProps {}

const Login: NextPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession()

  const providersArr: any[] = Object?.values(providers) || []

  if (session) {
    return (
      <div>
        Signed in as {session?.user?.email} <br />
        <button
          onClick={() => {
            signOut()
          }}>
          Sign out
        </button>
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
              {providersArr?.map((provider) => (
                <div key={provider?.name} className="flex justify-center">
                  <button
                    className='btn btn-secondary'
                    onClick={() => signIn(provider?.id)}>
                    Sign in with {provider?.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default Login
