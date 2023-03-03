import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Website!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi, I'm Lolzify 👋"/>
        <p className="description">
          I am a programmer who uses Node.js and Python.
        </p>
      </main>

      <Footer />
    </div>
  )
}
