import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../shared/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import ModalWord from '../ModalTask/ModalWord'
import { open } from '../../store/features/modalSlice'
import { removeCard } from '../../store/features/cardSlice'

interface DeckCardProps {
  onClick?: () => void
}
const DeckCard: FC<DeckCardProps> = () => {
  const selectDeck = useAppSelector(state => state.title.newTitle)
  //  Клик по карте показывает слово
  const [showWord, setShowWord] = useState<{[key: number]: boolean}>({})
  const toggleShowWord = (id: number) => {
    setShowWord(word => ({
      [id]: !word[id]
    }))
  }
  const modalCard = useAppSelector(state => state.modal.value)
  const cardsList = useAppSelector(state => state.card.cards)
  //  Сортировка по названию колоды
  const filteredDeckList = cardsList.filter((item) => item.uniqueValue === selectDeck)
  const dispatch = useAppDispatch()
  const openModalCard = (): void => {
    dispatch(open())
  }
  const deleteCard = (id: number): void => {
    dispatch(removeCard(id))
  }
  return (
    <section>
      <Container>
        <Link to={'/'} className='transition duration-500 ease-in-out hover:scale-125'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 transform transition duration-500 ease-in-out hover:scale-125">
            <path strokeLinecap="round" className='' strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </Link>
        <div className='grid grid-cols-5 gap-3 mt-3 max-h-96 overflow-y-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1'>
          {filteredDeckList.map((item, idx) => (
            <div key={idx} className='border-2 border-accentColor rounded-md animate-fade-in-up flex items-center justify-between cursor-pointer p-2'>
              {showWord[item.id] ?
              (<h2 className='font-bold transition duration-300 ease-linear hover:text-lime-400 overflow-y-auto max-h-10' onClick={() => toggleShowWord(item.id)}>
                {item.title}
              </h2>) :
              (<h2 className='font-bold transition duration-300 ease-linear hover:text-lime-400 overflow-y-auto max-h-10' onClick={() => toggleShowWord(item.id)}>
                {item.translatedTitle}
              </h2>)}
              <button onClick={() => deleteCard(item.id)} className='block ml-auto transition duration-300 ease-linear hover:bg-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button onClick={openModalCard} className='text-7xl block mx-auto text-mainColor transition-colors duration-500 ease-linear hover:text-lime-400'>
          &#x2B;
        </button>
        {modalCard && <ModalWord/>}
      </Container>
    </section>
  )
}

export default DeckCard
