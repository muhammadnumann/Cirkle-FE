import React from 'react';
import Image from 'next/future/image';
export default function TotalHoursWorked(props) {
  return (
    <>
      <div>
        <div className={`rounded-20 p-3 bg-white px-3 ${props.className}`}>
          <div className="d-flex justify-content-between">
            <div className=" ">
              <div className="font-weight-400 font-14 line-21 text-gray">{props.title}</div>
              <div className="d-flex">
                <div className="font-weight-700 font-24 line-34 text-white text-black">
                  {props.time}
                </div>
                <div
                  className={`font-weight-700 font-18 line-25 font-abhaya mt-1 ps-2 ${props.textColor}`}
                >
                  {props.value}
                </div>
              </div>
            </div>
            <div className="">
              {/* <img require src={props.src} alt="img"/> */}
              {/* {console.log(props.src)} */}
              <Image src={props.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
