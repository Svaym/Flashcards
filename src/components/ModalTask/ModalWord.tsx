import { useState } from 'react'
import Button from '../../shared/Button/Button'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { close } from '../../store/features/modalSlice'
import { Card, addNewCard } from '../../store/features/cardSlice'
import { useAppSelector } from '../../hooks/useAppSelector'

const ModalWord = () => {
  const valueDeck = useAppSelector(state => state.title.newTitle)
  const dispatch = useAppDispatch()
  const ModalWordOpen = (): void => {
    dispatch(close())
  }
  //  Слово на лицевой стороне
  const [word, setWord] = useState('')
  //  Слово на задней стороне
  const [translatedWord, setTranslatedWord] = useState('')
  const addWords = (): void => {
    if ((word.trim() !== '') && (translatedWord.trim() !== '')) {
      const newWord: Card = {
        id: Math.random(),
        uniqueValue: valueDeck,
        title: word,
        translatedTitle: translatedWord
      }
      dispatch(addNewCard(newWord))
      setWord('')
      setTranslatedWord('')
    }
  }
  return (
    <section>
      <div onClick={ModalWordOpen} className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in bg-white p-5 h-72 rounded-md w-1/2 md:w-4/5 xs:w-[90%] xxs:w-[95%]">
        <button onClick={ModalWordOpen} className='block ml-auto transition duration-300 ease-linear hover:bg-red-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <input type="text" value={word} onChange={(eve) => setWord(eve.target.value)} placeholder='Лицевая сторона' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full mt-5 transition-colors duration-300 ease-linear focus:border-gray-500' />
        <input type="text" value={translatedWord} onChange={(eve) => setTranslatedWord(eve.target.value)} placeholder='Задняя сторона' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full mt-5 transition-colors duration-300 ease-linear focus:border-gray-500' />
        <Button onClick={addWords} className='bg-mainColor px-4 py-2 mt-12 rounded-md text-white block mx-auto transition-colors duration-300 ease-in hover:bg-green-700' >
          Добавить карту
        </Button>
      </div>
    </section>
  )
}

export default ModalWord
