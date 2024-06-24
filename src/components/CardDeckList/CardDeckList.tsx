import React, { FC } from 'react'
import Container from '../../shared/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { open } from '../../store/features/modalSlice'
import Modal from '../Modal/Modal'

const CardDeckList: FC = () => {
  const modalWindow = useAppSelector(state => state.modal.value)
  const dispatch = useAppDispatch()
  const openModal = (): void => {
    // console.log()
    dispatch(open())
  }
  return (
    <section>
      <Container>
        {/* <Button className='transition duration-300 ease-linear hover:brightness-200'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button> */}
        <button onClick={openModal} className='text-7xl block mx-auto text-mainColor transition-colors duration-500 ease-linear hover:text-lime-400'>
          &#x2B;
        </button>
        {modalWindow && <Modal />}
      </Container>
    </section>
  )
}

export default CardDeckList