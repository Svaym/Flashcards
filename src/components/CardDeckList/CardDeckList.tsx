import { FC } from 'react'
import Container from '../../shared/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { open } from '../../store/features/modalSlice'
import Modal from '../Modal/Modal'
import { removeDeck } from '../../store/features/deckSlice'
import { Link } from 'react-router-dom'

const CardDeckList: FC = () => {
  const modalWindow = useAppSelector(state => state.modal.value)
  const deckList = useAppSelector(state => state.decks.decks)
  const dispatch = useAppDispatch()
  const openModal = (): void => {
    dispatch(open())
  }
  const deleteDeck = (id: string): void => {
    dispatch(removeDeck(id))
  }
  return (
    <section>
      <Container>
        <div className='grid grid-cols-4 gap-3 mt-5 max-h-96 overflow-y-auto'>
          {deckList.map((item, idx) => (
              <div key={idx} className='border-2 p-2 flex justify-between border-gray-400 rounded-md'>
                <Link className='transition-colors duration-300 ease-linear hover:text-gray-400' to={`/deck/${item.id}`}>
                  {item.title}
                </Link>
                <button onClick={() => deleteDeck(item.id)} className='transition duration-300 ease-linear hover:brightness-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" className='stroke-red-400' d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
          ))}
        </div>
        <button onClick={openModal} className='text-7xl block mx-auto text-mainColor transition-colors duration-500 ease-linear hover:text-lime-400'>
          &#x2B;
        </button>
        {modalWindow && <Modal />}
      </Container>
    </section>
  )
}

export default CardDeckList