import { BrowserRouter, Route, Routes } from "react-router-dom"
import CardDeckList from "./components/CardDeckList/CardDeckList"
import Header from "./components/Header/Header"
import DeckCard from "./components/DeckCard/DeckCard"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500);
  }, [])
  return (
    <>
      {isLoading ? (
        <section className="h-screen flex items-center justify-center">
          <ClipLoader color="#4cd34f" loading={isLoading} size={100} />
        </section>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CardDeckList />} />
            <Route path="/deck/:id" element={<DeckCard />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App