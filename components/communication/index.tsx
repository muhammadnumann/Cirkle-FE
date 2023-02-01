import React from 'react';
import dynamic from 'next/dynamic';
import {
  CTimeline,
  DateHeading,
  DetailDate,
  Content,
  IconCircle,
  Sender,
} from 'components/timeline/timeline-interface';

const EmailIcon = dynamic(() => import('components/icons/email'));
const CommentIcon = dynamic(() => import('components/icons/icon-comment'));
const PhoneIcon = dynamic(() => import('components/icons/icon-phone'));

export default function CommunicationDetail() {
  return (
    <div id="page" className="pt-4 ps-3">
      <div className={`main-heading-tab`}>
        <h3 className="globle-heading-h3">Communication</h3>
      </div>
      <div className={`globle-lg-p`}>
        Here you can see the logs or activities done in the system
      </div>
      <div className="communication-main ps-4">
        <CTimeline ClassName="ps-5 circle-space">
          <DateHeading ClassName={`darkCircle`}>
            <span>Today</span>
          </DateHeading>
          <DetailDate>
            <IconCircle>
              <EmailIcon />
            </IconCircle>
            <Sender>Sofía Alcocer</Sender>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
            <IconCircle>
              <CommentIcon />
            </IconCircle>
            <Sender>Sofía Alcocer</Sender>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
            <IconCircle>
              <PhoneIcon />
            </IconCircle>
            <Sender>Sofía Alcocer</Sender>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
        </CTimeline>
      </div>
    </div>
  );
}
