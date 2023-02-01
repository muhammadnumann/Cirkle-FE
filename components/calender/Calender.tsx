/* eslint-disable react-hooks/rules-of-hooks */
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views
} from "react-big-calendar";
import React, { useState } from 'react'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from './data'
import CustomCalender from "components/CustomCalender";
moment.locale("en-GB");
//momentLocalizer(moment);
const localizer = momentLocalizer(moment);





const container = {
  height: '80vh'
}

export default function CustomCalendar() {

  const [currentEvent, setCurrentEvent] = useState(events[0])
  const handleSelectEvent = (events) => {
    console.log(events)
    setCurrentEvent(events.event)
  }
  const handleSelectSlot = (events) => {
    console.log(events)
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between align-items-center pt-1 w-60 blue-shadow">
        <div>
          <h1 className="heading">Calender</h1>
        </div>
        <div className="">
          <CustomCalender />
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-8 mb-lg-0 mb-3 mt-5">
          <div style={container}>
            <BigCalendar
              selectable
              localizer={localizer}
              events={events}
              defaultView={Views.WEEK}
              views={[Views.WEEK]}
              steps={30}
              defaultDate={new Date(new Date(new Date().setDate(2)).setHours(1))}
              toolbar={false}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              components={
                {
                  eventWrapper: (events) => {
                    const [isSelected, setIsSelected] = useState(false)
                    return (
                      <>
                        <div className="d-flex position-absolute cursor-pointer" style={{ top: (new Date(events.event.start).getHours()) * 4.16 + '%' }} onClick={() => { console.log("asd"); handleSelectEvent(events) }}>
                          <div className="position-relative d-inline-flex justify-content-between align-items-center h-50px border-r-100 z-5 ps-1" style={{ background: events.event.color, }}>
                            <div className="d-flex position-absolute">
                              {
                                events.event.imgSrc.map((imgsrc, index) => {
                                  return (
                                    <img src={imgsrc} height="45px"
                                      key={index}
                                      width="45px"
                                      className='position-relative eventImg'
                                      style={{ left: index * -25 + 'px' }} />
                                  )
                                })
                              }
                            </div>
                            <div
                              className="font-13 font-weight-600 line-19 text-center ms-5 text-white"
                              style={{ width: '200px' }}
                            >
                              {events.event.title}
                            </div>
                            {
                              !isSelected ? <button
                                className={`rounded-circle eventButton me-2 z-10  text-white position-absolute`}
                                style={{ left: '220px' }}
                                onClick={() => {
                                  setIsSelected(!isSelected)
                                }}
                              >
                              </button> : ''
                            }


                            {
                              isSelected ?
                                <div className="z-10 position-absolute d-flex ps-4 align-items-center h-50px border-r-right"
                                  style={{
                                    gap: '10px',
                                    left: '230px',
                                    background: events.event.color + '20',
                                    width: (events.event.imgSrc.length * (50) + 50) + 'px',
                                  }}>
                                  {
                                    events.event.imgSrc.map((imgsrc, index) => {
                                      return (
                                        <img src={imgsrc} height="45px"
                                          key={index}
                                          width="45px"
                                          className='eventImg' />
                                      )
                                    })
                                  }
                                  <button
                                    className={`rounded-circle eventButton ms-2 collapse-close position-absolute text-white`}
                                    style={{
                                      right: '-5px',
                                      top: '15px',
                                      background: events.event.color
                                    }}
                                    onClick={() => {
                                      setIsSelected(!isSelected)
                                    }}
                                  >
                                  </button>
                                </div>
                                : ''
                            }
                          </div>
                        </div>
                      </>
                    )
                  }
                }
              }
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-white border-r-20">
            <div className="eventModalHeader">
              <div className="d-flex justify-content-between px-4 pt-4">
                <div
                  className="modal-title font-24 font-weight-500 line-32 text-lightblack"
                  id="exampleModalLabel"
                >
                  Upcoming
                </div>
              </div>
              <div className="modalHeaderDate text-lightgray font-14 font-weight-400 line-22">
                {new Date(currentEvent?.start).getDay()}
              </div>
            </div>
            <div className="modal-body mt-5">
              <div className="d-flex ">
                <div className="text-lightblack font-48 font-weight-600 line-56">{new Date(currentEvent?.start).getHours() + ':' + new Date(currentEvent?.start).getMinutes()}</div>
                <div className="ms-4">
                  <span className="purpleBorder rounded"></span>
                </div>
                <div className=" font-14 font-weight-400 line-22 text-lightgrey mt-2 ms-2">
                  Design
                  <div className=" font-18 font-weight-400 line-26 text-lightblack">
                    UX Wireframes
                  </div>
                </div>
              </div>
              <div>
                <div className="font-14 font-weight-400 line-22 text-lightblack mt-3">
                  Participants:
                </div>
                <div className="d-flex ">
                  {currentEvent.imgSrc.map((val, index) => {
                    return (
                      <img src={val} alt=""
                        key={index}
                        height="48px"
                        width="48px"
                        className="rounded-circle mt-2 me-2" />
                    )
                  })}
                </div>
              </div>
              <div className="mt-4">
                <div className="font-14 font-weight-400 line-22 text-lightblack mt-3">
                  Platform:
                </div>
                <div className="d-flex mt-2 ">
                  {currentEvent.imgSrc.map((val, index) => {
                    return (
                      <img src={val} alt=""
                        key={index}
                        height="48px"
                        width="48px"
                        className="rounded-circle mt-2 me-2" />
                    )
                  })}
                </div>
              </div>
              <div className="mt-4">
                <div>SubTasks:</div>
                <div className=" justify-content-between bgModal-lightblue rounded-pill">
                  <label className=" ps-3 py-2 font-16 font-weight-400 line-24 text-blue">
                    Prepare Figma file
                    <div className="container1">
                      <input type="checkbox" checked={true} />
                      <span className="checkmark pe-3 mt-2" />
                    </div>
                  </label>
                </div>
                <div className=" justify-content-between bgModal-lightblue rounded-pill mt-2">
                  <label className="container1 ps-3 py-2 font-16 font-weight-400 line-24 text-blue">
                    Get materials from the client
                    <div className="container1">
                      <input type="checkbox" />
                      <span className="checkmark pe-3 mt-2" />
                    </div>
                  </label>
                </div>
                <div className=" justify-content-between bgModal-lightblue rounded-pill mt-2">
                  <label className="container ps-3 py-2 font-16 font-weight-400 line-24 text-blue">
                    Design UX Wireframes
                    <div className="container1">
                      <input type="checkbox" />
                      <span className="checkmark pe-3 mt-2" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
