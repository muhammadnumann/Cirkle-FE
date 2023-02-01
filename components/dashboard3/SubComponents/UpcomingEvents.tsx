import React from 'react';
import Image from 'next/future/image';
import bellBlue from '../../../public/icons/bellBlue.svg';
import bellyellow from '../../../public/icons/bellyellow.svg';
bellyellow;
function UpcomingEvents() {
  return (
    <>
      <div className="bg-white rounded-20 p-4 UpComingEvents">
        <div className="font-weight-600 font-18 line-26 text-black ps-2">Upcoming events</div>
        <div className="d-flex ">
          <div className="">
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellyellow} />
          </div>

          <div className="ms-5">
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellBlue} />
          </div>
        </div>
        <div className="d-flex ">
          <div className="">
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellBlue} />
          </div>

          <div className="ms-5">
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellyellow} />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellyellow} />
          </div>

          <div className="ms-5">
            <EventName name="Event Name" date="  27 March 2020, at 12:30 PM" src={bellBlue} />
          </div>
        </div>
      </div>
    </>
  );
}
export default UpcomingEvents;

function EventName(props) {
  return (
    <>
      <div className="d-flex p-2">
        <div>
          <Image src={props.src} />
        </div>
        <div className="ps-3 pt-2">
          <div className="font-weight-400 font-12 line-17 text-black">{props.name}</div>
          <div className="font-weight-400 font-14 line-20 text-gray">{props.date}</div>
        </div>
      </div>
    </>
  );
}
export { EventName };
