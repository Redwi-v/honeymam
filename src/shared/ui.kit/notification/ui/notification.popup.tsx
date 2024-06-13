import { FC } from "react";
import s from './notification.popup.module.scss'
interface NotificationProps {
  text: string
}
 
export const Notification: FC<NotificationProps> = ({ text }) => {
  return ( 
    <div className = { s.container }>
      { text }
    </div>
   );
}
 