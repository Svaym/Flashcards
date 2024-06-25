import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../shared/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import ModalWord from '../ModalTask/ModalWord'
import { open } from '../../store/features/modalSlice'

interface DeckCardProps {
  onClick?: () => void
}
// { onClick }
const DeckCard: FC<DeckCardProps> = () => {
  const modalCard = useAppSelector(state => state.modal.value)
  const dispatch = useAppDispatch()
  // const { id } = useParams()
  const openModalCard = (): void => {
    dispatch(open())
  }
  return (
    <section>
      <Container>
        <Link to={'/'} className='transition duration-500 ease-in-out hover:scale-125'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 transform transition duration-500 ease-in-out hover:scale-125">
            <path strokeLinecap="round" className='' strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </Link>
        <button onClick={openModalCard} className='text-7xl block mx-auto text-mainColor transition-colors duration-500 ease-linear hover:text-lime-400'>
          &#x2B;
        </button>
        {modalCard && <ModalWord/>}
      </Container>
    </section>
  )
}

export default DeckCard