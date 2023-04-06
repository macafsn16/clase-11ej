import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from './componente/button'
import Cardgroud from './componente/cardgroup.js'
import Video from './componente/videos'
import Audio from './componente/audio'
import Youtube from './componente/youtube'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ejercicio Clase 11 ej</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Hello world!!!
        <h1> Ejercicio 11</h1>      
        <br></br>
        <Button></Button>
        
        <div className='cardgroup'>
          <Cardgroud></Cardgroud>
        </div>
        <br></br>
        <Youtube></Youtube>
        <br></br>
        <Audio></Audio>
        <br></br>
        <Video></Video>

      </main>
    </>
  )
}