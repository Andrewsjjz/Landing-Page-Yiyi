import { Html, Head, NextScript, Main } from 'next/document'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      <Head />
      <body className='text-black'>
        <Main/>
        <NextScript />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </body>
    </Html>
  )
}
