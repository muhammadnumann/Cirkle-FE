import BellIcon from 'components/icons/Headericon/icon-bell';
import styles from './header.module.css';
import ModeButton from 'components/modebtn';
import { FC } from 'react';
import { useRouter } from 'next/router';

const HeaderSecond: FC = () => {
  const isSelected = false;
  const router = useRouter();

  return (
    <div className={`${styles.header} fluid-container my-4 second-header`}>
      <div className="row p-3 ">
        <div className="col-sm-9 col-8 ps-0">
          <div className="d-flex align-items-center justify-content-start">
            <button className={`${styles.backBtn} btn ms-3`} onClick={() => router.back()}>
              <span>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                >
                  <path
                    d="M18 5.24003C18 5.43895 17.921 5.62971 17.7803 5.77036C17.6397 5.91102 17.4489 5.99003 17.25 5.99003H2.5605L5.7795 9.20903C5.91612 9.35048 5.99171 9.53994 5.99001 9.73658C5.9883 9.93323 5.90942 10.1213 5.77036 10.2604C5.63131 10.3995 5.4432 10.4783 5.24655 10.48C5.0499 10.4817 4.86045 10.4062 4.719 10.2695L0.219 5.76953C0.149601 5.70054 0.0945263 5.6185 0.056942 5.52814C0.0193577 5.43779 5.72205e-06 5.34089 0 5.24303V5.24003C0 5.14253 0.0194988 5.04503 0.0584984 4.95353C0.0958805 4.86261 0.150946 4.78001 0.220501 4.71053L4.7205 0.210534C4.86195 0.0739153 5.0514 -0.00168046 5.24805 2.8352e-05C5.4447 0.00173717 5.63281 0.0806137 5.77186 0.21967C5.91092 0.358726 5.9898 0.546835 5.99151 0.743483C5.99321 0.940131 5.91762 1.12958 5.781 1.27103L2.5605 4.49003H17.25C17.4489 4.49003 17.6397 4.56905 17.7803 4.7097C17.921 4.85036 18 5.04112 18 5.24003Z"
                    fill="url(#paint0_linear_1268_3055)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1268_3055"
                      x1="14.5385"
                      y1="1.61232"
                      x2="9.19148"
                      y2="12.4658"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6E0674" />
                      <stop offset="1" stopColor="#4660AF" />
                    </linearGradient>
                  </defs>
                </svg>
                Go Back
              </span>
            </button>
            <button className="ms-3 btn btn-theme-primary">Schedule Meeting</button>
          </div>
        </div>
        <div className="col-sm-3 col-4 d-flex align-items-center justify-content-end">
          <ModeButton />
          <div className="mx-3">
            <BellIcon isSelected={isSelected} />
          </div>
          {/* <img src="C:\Users\92324\Desktop\cirkle_crm_frontend\public\images\profile.jpg" alt="" style={profile}> */}

          <div className="dropdown">
            <button
              className="btn text-black dropdown-toggle"
              type="button"
              id="Linkopen"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <DropIcon isSelected={isSelected} /> */}
            </button>
            <div className="dropdown-menu" aria-labelledby="Linkopen">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;
