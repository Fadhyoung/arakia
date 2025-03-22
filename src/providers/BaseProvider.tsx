'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export interface BaseProviderContextProps {
  modalState: {
    isOpen: boolean;
    message: string;
    isSuccess: boolean;
    redirectTo?: string | null;
  };
  openModalMessage: (
    message: string,
    isSuccess: boolean,
    redirectTo?: string | null
  ) => void;
  closeModalMessage: () => void;
}

export const BaseProviderContext = createContext<BaseProviderContextProps>({
  modalState: {
    isOpen: false,
    message: '',
    isSuccess: false,
  },
  openModalMessage: () => {},
  closeModalMessage: () => {},
});

export const BaseProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [modalState, setModalState] = useState<
    BaseProviderContextProps['modalState']
  >({
    isOpen: false,
    message: '',
    isSuccess: false,
    redirectTo: null,
  });

  const openModalMessage = (
    message: string,
    isSuccess: boolean,
    redirectTo?: string | null
  ) => {
    setModalState({
      isOpen: true,
      message,
      isSuccess,
      redirectTo: redirectTo ?? null,
    });
  };

  const closeModalMessage = () => {
    setModalState({
      isOpen: false,
      message: '',
      isSuccess: false,
      redirectTo: null,
    });
    if (modalState.redirectTo) {
      redirect(modalState.redirectTo);
    }
  };

  useEffect(() => {
    setModalState({
      isOpen: false,
      message: '',
      isSuccess: false,
      redirectTo: null,
    });
  }, [setModalState]);

  return (
    <BaseProviderContext.Provider
      value={{
        modalState,
        openModalMessage,
        closeModalMessage,
      }}
    >
      {children}
    </BaseProviderContext.Provider>
  );
};

export const useBaseProvider = () => useContext(BaseProviderContext);
