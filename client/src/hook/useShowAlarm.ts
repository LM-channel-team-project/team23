import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { SERVER_URL } from '../Config';
import { IUser } from '../api/users';

interface IAlarm {
  Contents: string;
  createdAt: Date;
  isRead: boolean;
  receivedId: string;
  senderId: IUser;
  type: number;
}

const SHOW_ALARM = 'showAlarm';

const useShowAlarm = () => {
  const [alarmList, setAlarmList] = useState<Array<IAlarm>>();
  const socketRef = useRef<any>();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL);
    socketRef.current.on(SHOW_ALARM, (data: any) => {
      setAlarmList(data);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const requestAlarm = () => {
    socketRef.current.emit(SHOW_ALARM, {
      userID: userId,
    });
  };

  return { alarmList, requestAlarm };
};

export default useShowAlarm;
