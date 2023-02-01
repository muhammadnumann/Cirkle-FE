import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/logo-cirkle-ai.png';
import Link from 'next/link';
import CLoseIcon from 'components/icons/close-btn';
import SelectedTick from 'components/icons/selectedtick';

export default function LandingPage() {
  return (
    <>
      <div className="landing-page position-absolute full-front">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex flex-column align-items-center gap-5  text-center  landing-page-content p-5">
                <div className="w-50">
                  <Image src={logo} />
                </div>
                <div>
                  <h1 className="font-36 font-weight-600 text-white mb-5">
                    AI Powered Staffing OS
                  </h1>
                  <p className="font-18 text-white font-weight-400 line-32">
                    Cirkle.ai is bringing FAANG level technical standards to Staffing & Recruiting
                    Tech. Founded by a team of recruiters, staffing firm owners, and FAANG engineers
                    to bring the next generation of CRM, ATS, Time Tracking, Invoicing, Scheduling,
                    Performance & Talent in an All-In-One solution for your growing staffing firm.
                    Join our movement to disrupt the aging tech-stack of ATSs on the market with our
                    Deep Learning Architecture, and Conversational AI features.
                  </p>
                </div>
                <div>
                  <h2 className="font-24 font-weight-600 line-32 text-white text-uppercase mb-3">
                    Get early access to cirkle
                  </h2>
                  <form className="d-flex flex-column align-items-center w-100 gap-2">
                    <input
                      type="text"
                      placeholder="Full Name "
                      className="InformationInput w-100"
                    />
                    <input type="text" placeholder="Email ID " className="InformationInput w-100" />
                    {/* <button
                      type="submit"
                      className="globle-gradient-btn border-r-6 text-white form-control my-2 mt-4"
                    >
                      Submit
                    </button> */}
                    <button
                      type="button"
                      className="globle-gradient-btn border-r-6 text-white form-control my-2 mt-4"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Submit
                    </button>
                  </form>
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
                <div className="modal-header py-4 position-relative">
                  <div className=" w-20 m-auto">
                    <SelectedTick ClassName="verifiedImg" />
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
                  <div className="text-center">
                    <h2 className="text-black font-weight-600 font-18 line-23">Congratulations</h2>
                    <p className="font-14 font-weight-400 text-darkgray w-50 m-auto pb-4">
                      Your detials has been successfully submitted.
                    </p>
                    <p className="font-14 font-weight-400 text-black w-50 m-auto">
                      Someone will contact you from Cirkle within 24 hours
                    </p>
                    <Link href={'/'}>
                      <a className="globle-gradient-btn border-r-6 text-white form-control my-2 mt-4 w-75 m-auto">
                        Go to home
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
