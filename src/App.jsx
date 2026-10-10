import { useState } from 'react'
import ArticleModal from './components/ArticleModal'
import Articles from './components/Articles'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Game from './components/Game'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OrderForm from './components/OrderForm'
import Skills from './components/Skills'
import Tools from './components/Tools'

export default function App() {
  const [article, setArticle] = useState(null)

  return (
    <div className="min-h-screen bg-void text-sand">
      <div className="grain" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Tools />
        <Articles onOpen={setArticle} />
        <Game />
        <OrderForm />
      </main>
      <Footer />
      <ArticleModal article={article} onClose={() => setArticle(null)} />
    </div>
  )
}
