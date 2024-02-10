import css from "./FriendListItem.module.css";
import clsx from "clsx";

const line = true;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  // const statusClass = clsx(css.status, true && css.offline);
  const text = isOnline ? "Online" : "Offline";
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online)}>{text}</p>
    </div>
  );
};
