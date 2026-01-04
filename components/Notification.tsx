import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

export type NotificationType = 'success' | 'error';

interface NotificationProps {
    message: string;
    type: NotificationType;
    isVisible: boolean;
    onClose: () => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const NotificationContainer = styled.div<{ $isVisible: boolean; $type: NotificationType }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  background: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  max-width: 90vw;
  border-left: 6px solid ${props => props.$type === 'success' ? '#27013D' : '#e53e3e'};
  
  animation: ${props => props.$isVisible ? css`${slideIn} 0.4s ease-out forwards` : css`${slideOut} 0.4s ease-in forwards`};
  
  /* Setup unmount delay handling in parent or use transitions */
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`;

const IconWrapper = styled.div<{ $type: NotificationType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$type === 'success' ? '#27013D' : '#e53e3e'};
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #1a202c;
  flex-grow: 1;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #a0aec0;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #4a5568;
  }
`;

const Notification: React.FC<NotificationProps> = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Auto close after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <NotificationContainer $isVisible={isVisible} $type={type}>
            <IconWrapper $type={type}>
                {type === 'success' ? (
                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                ) : (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </IconWrapper>
            <Message>{message}</Message>
            <CloseButton onClick={onClose}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </CloseButton>
        </NotificationContainer>
    );
};

export default Notification;
