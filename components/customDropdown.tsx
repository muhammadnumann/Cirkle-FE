import React, { useState } from 'react';
// import {
//   CModal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from '../components/customModal/customModal';
import Image from 'next/image';
import remove from '../public/icons/remove.svg';
import { CustomDropdownA, DButton, Search } from './customDropdown/CustomDropdown';

export default function CustomDropdown() {
  const [check, setcheck] = useState(true);
  return (
    <>
      <DButton text="Select Task" setcheck={setcheck} check={check} />
      {!check ? (
        <ul className="custom-dropmenu border-0 ">
          <Search />
          <CustomDropdownA text="Task Name" AddTask={true} />
          <CustomDropdownA text="Task Name" AddTask={true} />
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

export const Modal = () => {
  const [check, setcheck] = useState(false);
  return (
    <>
      <div
        className="modal CustomModal-bg fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="CustomModal-content">
            <div className="modal-header customModal-header">
              <div className=" font-weight-600 font-16 line-23 font-poppin text-lightblack">
                Save Time Entries
              </div>
              <Image
                src={remove}
                alt="Picture of the player"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body CustomModal-body">
              <p className="selectTask CustomModalContentMargin">
                <DButton text="Select Project and Task" setcheck={setcheck} check={check} />
              </p>

              {!check ? (
                <ul className="customModalDropdown border-0 mt-2 ">
                  <Search />
                  <CustomDropdownA text="Task Name" AddTask={true} />
                  <CustomDropdownA text="Task Name" AddTask={true} />
                </ul>
              ) : (
                ''
              )}
            </div>
            <div className="modal-footer customModal-Footer">
              <button className={` border-r-100 py-2 px-5 pt-2  border-blue ${'bg-blue '}`}>
                <span className={'font-weight-600 font-12 text-white'}>Save</span>
              </button>
              <button
                className={` border-r-100 py-2 px-5 pt-2 border-blue ${'bg-lightblue'}`}
                data-bs-dismiss="modal"
              >
                <span className={' font-weight-600 font-12  text-blue'}>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <CModal id="exampleModal">
        <ModalContent>
          <ModalHeader>
            <div className=" font-weight-600 font-16 line-23 font-poppin text-lightblack">
              Save Time Entries
            </div>
          </ModalHeader>
          
          <ModalBody ClassName="modalDropdown">
            <p className="selectTask">
              <DButton text="Select Task" setcheck={setcheck} check={check} />
              {!check ? (
                <ul className="custom-dropmenu border-0 ">
                  <Search />
                  <CustomDropdownA text="Task Name" AddTask={true} />
                  <CustomDropdownA text="Task Name" AddTask={true} />
                </ul>
              ) : (
                ''
              )}
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={` border-r-100 py-2 px-4  border-blue ${'bg-blue '}`}
            >
              <span className={'font-weight-600 font-12 text-white'}>Save</span>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={` border-r-100 py-2 px-4 border-blue ${'bg-lightblue'}`}
            >
              <span className={' font-weight-600 font-12  text-blue'}>Cancel</span>
            </button>
          </ModalFooter>
        </ModalContent>
      </CModal> */}
    </>
  );
};
