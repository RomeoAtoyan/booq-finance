/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (title: string, content: ReactNode) => {
    setTitle(title);
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setTitle("");
      setContent(null);
    }, 200);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, title, content, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
