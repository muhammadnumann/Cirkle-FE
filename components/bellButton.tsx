import React, { useState } from 'react';
import BellIcon from './icons/Headericon/icon-bell';
import SelectedTick from './icons/selectedtick';
import { SVGProps } from 'react';
import UserImage from './icons/userimgicon';

export interface NotificationProps extends SVGProps<SVGSVGElement> {
  sender: string;
  action: string;
  reciever: string;
  Request?: boolean;
  time: string;
  message?: string;
  Class?: string;
  messageClass?: string;
}

const BellBtn = () => {
  const [isSelected, setisSelected] = useState(false);
  const [isRead, setisRead] = useState(false);

  return (
    <>
      <div>
        <span
          className=""
          onClick={() => {
            setisSelected(!isSelected);
          }}
          id="dropdownBellbtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BellIcon isSelected={isSelected} />
        </span>
        <div></div>
        <div className="bell-list rounded pb-2  dropdown-menu" aria-labelledby="dropdownBellbtn">
          <div className="row m-0 px-2 pt-2 pb-3">
            <div className="col-6 d-flex justify-content-left align-items-center p-0">
              <span className="m-0  font-14 me-1 ">Notification</span>
              <select
                id="inputState"
                className="bell-icon-select form-control w-69px font-12 font-weight-500 p-0 px-1 border-0 bg-light"
              >
                <option selected>All</option>
                <option>Unread</option>
                <option>Unseen</option>
              </select>
            </div>
            <div className="col-6 text-align-end p-0">
              <span
                onClick={() => {
                  setisRead(!isRead);
                }}
                className="m-0 d-flex justify-content-end font-14 cursor-pointer font-weight-300 "
              >
                Mark all as read
                <span className="ps-2">{isRead === true ? <SelectedTick /> : ''}</span>
              </span>
            </div>
          </div>
          <MessagesList
            sender="Ray Arnold"
            action="left 5 comments on"
            reciever="UNIX directory tree hierarchy"
            time="Today at 9:42 AM"
            Class="BorderClass"
            Request={true}
          />
          <MessagesList
            sender="Ray Arnold"
            action="left 5 comments on"
            reciever="UNIX directory tree hierarchy"
            time="Today at 9:42 AM"
            Class="BorderClass"
          />
          <MessagesList
            sender="Ray Arnold"
            action="left 5 comments on"
            reciever="UNIX directory tree hierarchy"
            time="Today at 9:42 AM"
            Class="BorderClass"
            messageClass="notification-message"
            message='"Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese cheese and wine blue castello swiss roquefort." '
          />
          <MessagesList
            sender="Ray Arnold"
            action="left 5 comments on"
            reciever="UNIX directory tree hierarchy"
            time="Today at 9:42 AM"
          />
        </div>
      </div>
    </>
  );
};
export default BellBtn;

const MessagesList = ({
  sender,
  action,
  reciever,
  Request,
  time,
  message,
  Class,
  messageClass,
}: NotificationProps) => {
  return (
    <>
      <div className={`${Class} px-2 py-3`}>
        <span className="d-flex">
          <span className="pe-2">
            <UserImage />
          </span>
          <div>
            <span className="font-14 m-0 line-20 pb-3 font-weight-600 ">
              {' '}
              {sender}
              <span className="font-14 ps-1 font-weight-400 ">{action}</span> {reciever}
            </span>
            {Request ? (
              <div className="d-flex pb-2">
                <button className="globle-gradient-btn border-6 me-2">Accept</button>
                <button className="filterbtn">
                  <span>Reject</span>
                </button>
              </div>
            ) : (
              ''
            )}
            <div className={`${messageClass} font-14 line-20 m-0  pb-1`}>{message}</div>
            <span className="font-14 pt-2 m-0">{time}</span>
          </div>
        </span>
      </div>
    </>
  );
};
