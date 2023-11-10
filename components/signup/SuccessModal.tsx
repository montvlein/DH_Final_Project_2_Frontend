import React, { useEffect } from 'react'
import Modal from 'react-modal'

interface RegistrationSuccessModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px'
  }
}

const SuccessModal: React.FC<RegistrationSuccessModalProps> = ({ isOpen, onRequestClose }) => {
  // Close the modal automatically after 3 seconds (adjust the duration as needed)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onRequestClose()
      }, 3000) // Close after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [isOpen, onRequestClose])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Registration Success Modal"
    >
      <h2 className="font-poppins text-2xl font-medium leading-10 text-center">
        Tu registro se ha realizado con éxito
      </h2>

      <button
        className="text-white font-poppins text-base font-medium w-[240px] rounded-xl h-14 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]"
        onClick={onRequestClose} // Close the modal on button click
      >
        Ok
      </button>
    </Modal>
  )
}

export default SuccessModal
