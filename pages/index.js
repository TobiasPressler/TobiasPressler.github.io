import Head from 'next/head'
import Portfolio from '../components/Portfolio/Portfolio'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Tobias Pressler</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js"></script>
      </Head>
      <Portfolio></Portfolio>
    </div>
  )
}
