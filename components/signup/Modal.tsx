import { closeModal } from '@/redux/features/modal-slice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Importa la acción del nuevo slice

const Modal: React.FC = () => {
  const isModalOpen = useSelector((state: any) => state.modal.isOpen) // Accede al estado del nuevo slice
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal()) // Usa la acción del nuevo slice para cerrar el modal
  }

  return (
    <div style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div>
        {/* Contenido del modal */}
        <p>Este es tu modal</p>
        <button onClick={handleCloseModal}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal
