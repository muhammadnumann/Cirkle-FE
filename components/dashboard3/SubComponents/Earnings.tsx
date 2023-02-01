import React from 'react';

export default function Earnings() {
  return (
    <>
      <div>
        <div className="earnings py-5 position-relative overflow-hidden">
          <div className="font-weight-400 font-22 line-22 text-white">Earnings</div>
          <div className="font-weight-700 font-44 line-100 text-white p-3">$15,800</div>
          <div className="font-weight-700 font-10 line-15 text-greenish bg-light rounded p-1 ps-2 pe-2">
            +15% SINCE LAST WEEK
          </div>
          <div>
            <span className="dot1" />
            <span className="dot2" />
            <span className="dot3" />
          </div>
        </div>
      </div>
    </>
  );
}
