import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { SERVER_URL } from '../Config';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

interface IProps {
  roomId: string;
  receivedNickname: string;
}
const useSocket = ({ roomId, receivedNickname }: IProps) => {
  const [messages, setMessages] = useState<Array<any>>([]);
  const socketRef = useRef<any>();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL, {
      query: { roomId },
    });
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      setMessages((messages: Array<any>) => [...messages, message]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody: string) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      msg: messageBody,
      senderId: userId,
      receivedNickname,
    });
  };

  return { messages, sendMessage };
};

export default useSocket;
