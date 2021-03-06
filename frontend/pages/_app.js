import '../styles/globals.css'
import store from '../store'
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getActiveUser, selectActiveUser, setToken } from '../store/auth';
import { getGenres } from '../store/genres/slice';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const user = selectActiveUser(store.getState());


  useEffect(() => {
    const token = localStorage.getItem('access');
    const isAuthenticated = !!token
    store.dispatch(getGenres())
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      if (!user) {
        store.dispatch(setToken(token))
        store.dispatch(getActiveUser())
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='bg-light'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
