import React from 'react';
import { DateRangePicker } from 'rsuite';
import leftArrow from '../public/icons/leftArrow.svg';
import RightArrow from '../public/icons/RightArrow.svg';

import Image from 'next/image';
export default function CustomCalender() {
  return (
    <>
      <div className="d-flex ">
        <div className="">
          {/*daterangepicker => header => display block*/}
          <DateRangePicker
            appearance="default"
            placeholder="This Week"
            placement="autoVerticalEnd"
          />
        </div>
        <div className="arrows position-relative ">
          <div className=" position-absolute leftArrow ">
            <Image src={leftArrow} />
          </div>
          <div className=" position-absolute rightArrow ">
            <Image src={RightArrow} />
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import { RangeDatePicker } from 'react-google-flight-datepicker';
// import 'react-google-flight-datepicker/dist/main.css';

// export default function CustomCalender() {
//   return (
//     <div className="">
//       <RangeDatePicker
//         startDate={new Date(2020, 0, 15)}
//         endDate={new Date(2020, 1, 1)}
//         className="range-date-picker"
//         onFocus={null}
//         startDatePlaceholder="This Week"
//       />
//     </div>
//   );
// }
