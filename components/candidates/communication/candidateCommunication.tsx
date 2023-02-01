import React from 'react';
import {
  Content,
  CTimeline,
  DateHeading,
  DetailDate,
  IconCircle,
  Sender,
} from 'components/timeline/timeline-interface';
import EmailIcon from 'components/icons/email';
import CommentIcon from 'components/icons/icon-comment';
import PhoneIcon from 'components/icons/icon-phone';

const CandidateCommuncication = () => {
  return (
    <div className={`w-100 mx-0 mt-3`}>
      <div className="main-activity-parent py-2">
        <div className={`main-heading-tab`}>
          <h3 className="globle-heading-h3">Communication</h3>
        </div>
        <div className={`mt-4`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
        <div className="communication-main ps-2">
          <CTimeline ClassName="ps-5 circle-space">
            <DateHeading>
              <span>Today</span>
            </DateHeading>
            <DetailDate>
              <IconCircle>
                <EmailIcon />
              </IconCircle>
              <Sender>Sofía Alcocer</Sender>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <IconCircle>
                <EmailIcon />
              </IconCircle>
              <Sender>Sofía Alcocer</Sender>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <IconCircle>
                <CommentIcon />
              </IconCircle>
              <Sender>Sofía Alcocer</Sender>
              <span>Name | Date | Time</span>
              <Content>
                Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage
                cheese cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet
                cheese strings edam cheese on toast cheese and wine caerphilly.
              </Content>
            </DetailDate>
            <DetailDate>
              <IconCircle>
                <PhoneIcon />
              </IconCircle>
              <Sender>Sofía Alcocer</Sender>
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

export default CandidateCommuncication;
