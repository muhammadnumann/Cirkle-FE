import React from 'react';
import {
  Content,
  CTimeline,
  DateHeading,
  DetailDate,
} from 'components/timeline/timeline-interface';

const ContactActivity = () => {
  return (
    <div className={`w-100  mx-0`}>
      <div className="main-activity-parent py-2">
        <div className={`main-heading-tab mt-3`}>
          <h3 className={`globle-heading-h3`}>Activity</h3>
        </div>
        <div className={`mt-4`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
        <div className="activity-main ps-2">
          <CTimeline>
            <DateHeading>
              <span>Today</span>
            </DateHeading>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DateHeading ClassName="mt-5">
              <span>yesterday</span>
            </DateHeading>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
          </CTimeline>
        </div>
      </div>
    </div>
  );
};

export default ContactActivity;
