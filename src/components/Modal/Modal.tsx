import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { close } from '../../store/features/modalSlice'
import Button from '../../shared/Button/Button'
import { addNewDeck } from '../../store/features/deckSlice'
import { Deck } from '../../store/features/deckSlice'

const Modal: FC = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const modalClose = (): void => {
    dispatch(close())
  }
  const addDeck = (): void => {
    if (value.trim() !== '') {
      const newDeck: Deck = {
        id: Math.random(),
        title: value
      }
      dispatch(addNewDeck(newDeck))
      setValue('')
    }
  }
  return (
    <section>
      <div onClick={modalClose} className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 h-56 rounded-md w-1/2 md:w-4/5 xs:w-[90%] xxs:w-[95%]">
        <button onClick={modalClose} className='block ml-auto transition duration-300 ease-linear hover:bg-red-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <input type="text" value={value} onChange={(eve) => setValue(eve.target.value)} placeholder='Название колоды' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full mt-5 transition-colors duration-300 ease-linear focus:border-gray-500' />
        <Button onClick={addDeck} className='bg-mainColor px-4 py-2 mt-12 rounded-md text-white block mx-auto transition-colors duration-300 ease-in hover:bg-green-700'>
          Добавить колоду
        </Button>
      </div>
    </section>
  )
}

export default Modal



