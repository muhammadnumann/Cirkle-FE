import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../public/images/logo-cirkle-ai.png';
import PhoneIcon from 'components/icons/phoneIcon';
import LocationIcon2 from 'components/icons/locationIcon2';
import FaceBookIcon from 'components/icons/faceBookIcon';
import InstGramIcon from 'components/icons/instGramIcon';
import LinkedInIcon from 'components/icons/linkedInIcon';
import ModalImg from '../../public/images/female.svg';
import Link from 'next/link';
import CLoseIcon from 'components/icons/close-btn';

export default function LandingPage1() {
  const [isSubmit, setIsSubmmit] = useState(false);

  return (
    <>
      <div className="bg-white w-100 h-100 position-absolute full-front">
        <div className="landing-page-female position-relative w-100 h-100">
          <div className="w-100 h-100 position-absolute top-0">
            <div className="container-fluid px-0 d-flex flex-column justify-content-between align-items-sm-start align-items-center h-100">
              <div className="row px-5 mx-3 pt-5 align-items-center justify-content-between">
                <div className="w-25">
                  <div className="w-50 ">
                    <Image src={logoImg} />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-end gap-4 w-75">
                  <div className="d-flex align-items-center">
                    <PhoneIcon />
                    <p className="ps-2 mb-0 text-black font-18 font-weight-600 landing-p-text line-23">
                      +90-32-2323-12
                    </p>
                  </div>
                  <div className="d-flex align-items-center me-5">
                    <LocationIcon2 />
                    <p className="ps-2 mb-0 text-black font-18 landing-p-text font-weight-600 line-23">
                      USA - Jadih - Street
                    </p>
                  </div>
                </div>
              </div>
              <div className="row px-5 mx-3 landing-page1-content ">
                <div className=" landing-page1-content-bg z-1  w-100 p-4 p-lg-5">
                  <div className="my-5 me-5 z-5">
                    <h1 className="text-black font-weight-300 line-72 landing-page-text ">
                      Make your management
                      <span className="font-weight-600"> 10X faster</span> with Cirkle
                    </h1>
                    <button
                      type="button"
                      className="globle-gradient-btn border-r-6 text-white py-3 px-4 "
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Join the waitlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mx-0 align-items-center mt-5 justify-content-between py-2 px-5 landingpage-footer">
                <div className="w-25">
                  <div className="w-25 ">
                    <Image src={logoImg} />
                  </div>
                </div>
                <p className="mb-0 w-auto">copyright©cirkle.ai 2022</p>
                <div className="d-flex align-items-center justify-content-end gap-4 w-auto ">
                  <FaceBookIcon />
                  <LinkedInIcon />
                  <InstGramIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header position-relative border-0">
                  <div className="Modalbg w-50 m-auto">
                    <Image src={ModalImg} alt="modal img" className="position-absolute" />
                  </div>
                  <span
                    className="cursor-pointer position-absolute top-0 end-0 p-3 m-0 "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <CLoseIcon />
                  </span>
                </div>
                <div className="modal-body">
                  {isSubmit ? (
                    <div className="text-center">
                      <h2 className="text-black font-weight-600 font-18 line-23">
                        Congratulations
                      </h2>
                      <p className="font-14 font-weight-400 text-darkgray w-75 m-auto pb-3">
                        Your detials has been successfully submitted.
                      </p>
                      <p className="font-14 font-weight-400 text-black w-75 m-auto">
                        Someone will contact you from Cirkle within 24 hours
                      </p>
                      <Link href={'/'}>
                        <a className="globle-gradient-btn border-r-6 text-white form-control my-2 mt-4">
                          Go to home
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <form>
                      <div className="form-group pb-3">
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Here"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Here"
                        />

                        <button
                          type="submit"
                          onClick={() => {
                            setIsSubmmit(true);
                          }}
                          className="globle-gradient-btn border-r-6 text-white form-control my-2 mt-4"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
