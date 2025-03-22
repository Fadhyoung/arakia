'use client';

import React, { useRef } from 'react';
import clsx from 'clsx';

export type ModalProps = {
  title?: string;
  closeIcon?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose?: () => void;
};

const sizeClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

const Modal: React.FC<ModalProps> = ({
  title,
  closeIcon,
  body,
  footer,
  open = false,
  size = 'lg',
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal if clicking outside the modal content
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose?.();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className={clsx('bg-white rounded-lg shadow-lg p-6 w-full', sizeClasses[size])}
      >
        {/** HEADER */}
        <div className="flex justify-end items-center border-b pb-2">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {closeIcon && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              {closeIcon}
            </button>
          )}
        </div>

        {/** BODY */}
        <div className="py-4">{body}</div>

        {/** FOOTER */}
        {footer}
      </div>
    </div>
  );
};

export default Modal;
