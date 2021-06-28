import { useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { SERVER_URL } from '../Config';

const REQUEST_ALARM = 'requestAlarm';

interface IProps {
  receivedNickname: string;
  type: number;
}
interface IMsg {
  makeAlarm: boolean;
}
const useCreateAlarm = ({ receivedNickname, type }: IProps) => {
  const socketRef = useRef<any>();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL);
    socketRef.current.on(REQUEST_ALARM, (message: IMsg) => {
      if (message.makeAlarm) {
        alert('알람이 전송되었습니다.');
        location.reload();
      } else {
        alert(
          '이미 전송한 알람이 있습니다. 상대방이 승낙했다면 채팅창이 생성됩니다.'
        );
        location.reload();
      }
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageBody: string) => {
    socketRef.current.emit(REQUEST_ALARM, {
      msg: messageBody,
      senderId: userId,
      receivedNickname,
      type,
    });
  };

  return { sendMessage };
};

export default useCreateAlarm;
