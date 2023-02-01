import { FC } from 'react';
import { v1Address, v1AddressFull } from '../../internal/fetcher/types';

type Props = {
  address: v1Address | v1AddressFull;
};
const Address: FC<Props> = ({ address }: Props) => {
  const {
    line1,
    line2,
    line3,
    city,
    zipOrPostcode,
    stateProvinceCounty,
    countryCode,
    otherDetails,
  } = address;

  return (
    <div className="address-widget">
      <h5>Mailing Address</h5>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>
      <p>
        {city}, {stateProvinceCounty} {zipOrPostcode}
      </p>
      <p>{countryCode}</p>
      {otherDetails && (
        <>
          <p>Address Notes:</p>
          <p>{otherDetails}</p>
        </>
      )}
    </div>
  );
};

export default Address;
