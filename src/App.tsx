import { BrowserRouter, Route, Routes } from "react-router-dom"
import CardDeckList from "./components/CardDeckList/CardDeckList"
import Header from "./components/Header/Header"
import DeckCard from "./components/DeckCard/DeckCard"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<CardDeckList />} />
      <Route path="/deck/:id" element={<DeckCard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

