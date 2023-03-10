const Arrow = ({ Selected }) => (
  <svg
    className={`${Selected ? 'trans-90 ' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
  >
    <path
      d="M8.702 9.67334C8.712 9.66134 8.716 9.64534 8.726 9.63334L15.7075 1.91987C16.0975 1.4859 16.0975 0.781946 15.7075 0.347976C15.7035 0.343976 15.6995 0.341977 15.6955 0.339977C15.6088 0.234895 15.5001 0.150027 15.3771 0.0913042C15.2541 0.0325818 15.1198 0.00142129 14.9836 0H1.01853C0.879764 0.00224228 0.743183 0.0349271 0.618434 0.0957461C0.493686 0.156565 0.383814 0.244035 0.29658 0.351976L0.292581 0.347976C0.103854 0.566332 0 0.845309 0 1.13392C0 1.42253 0.103854 1.70151 0.292581 1.91987L7.2901 9.67334C7.37721 9.77545 7.48544 9.85745 7.60732 9.91368C7.7292 9.96991 7.86183 9.99903 7.99605 9.99903C8.13027 9.99903 8.2629 9.96991 8.38478 9.91368C8.50666 9.85745 8.61489 9.77545 8.702 9.67334Z"
      fill="url(#paint0_linear_1822_4710)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1822_4710"
        x1="3.07692"
        y1="1.53831"
        x2="8.39476"
        y2="11.5948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E0674" />
        <stop offset="1" stopColor="#4660AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Arrow;
