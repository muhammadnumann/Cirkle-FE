import React from 'react';
import NoteHand from './icons/noteHand';

function ImportantNote() {
  return (
    <div className="position-absolute w-25 note-postion">
      <div className="d-flex align-items-center px-3 py-2 bg-light-blue border-r-20">
        <NoteHand />
        <p className="ps-3 mb-0 font-12 font-weight-400 text-black">
          Note: All the fields should be filled as a domain best practice
        </p>
      </div>
    </div>
  );
}

export default ImportantNote;
