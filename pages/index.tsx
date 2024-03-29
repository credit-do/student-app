import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { Text } from '@chakra-ui/react'
import { auth } from '../firebase/clientApp';


export default function Home() {

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  console.log(user);
  // If login fails, display error
  if (error) {
    console.log(error);
    return <Text>error</Text>;
  }
  // If loading, display loading screen
  if (loading) {
    return (<div>loading...</div>);
  }
  // If user is not logged in, redirect to login page
  if (!user) {
    router.push('/login');
    return null;
  }
  // If user is logged in, redirect to homepage
  if (user) {

    router.push('/home');
    return null;
  }

  return (
    <div>
      <Head>
        <title>Student App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
