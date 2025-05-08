'use client';
import ForgetPassword from '@/component/modals/newPassword';
import { createContext, useState, useContext } from 'react';


const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: null, // 'logout' or 'resetPassword'
    props: {} // additional props for the modal
  });

  const openModal = (type, props = {}) => {
    setModal({ isOpen: true, type, props });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null, props: {} });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {modal.type === 'logout' && <ForgetPassword {...modal.props} onClose={closeModal} />}
          {/* {modal.type === 'resetPassword' && <ResetPasswordModal {...modal.props} onClose={closeModal} />} */}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);