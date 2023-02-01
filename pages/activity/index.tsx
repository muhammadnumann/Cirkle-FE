import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  CTimeline,
  DateHeading,
  DetailDate,
  Content,
} from 'components/timeline/timeline-interface';
import React, { FC } from 'react';

const ActivityPage: FC = () => {
  return (
    <div className="main-activity-parent ps-2 py-4">
      <div className={`main-heading-tab`}>
        <h3 className="globle-heading-h3">All Activity</h3>
      </div>
      <div className={`globle-lg-p`}>
        {' '}
        Here you can see the logs or activities done in the system
      </div>
      <div className="activity-main">
        <CTimeline>
          <DateHeading>
            <span>Today</span>
          </DateHeading>
          <DetailDate>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly. Blue castello chalk and
              cheese bocconcini. Gouda bocconcini mozzarella cottage cheese cheese and wine blue
              castello swiss roquefort. Gouda cheesecake cheesy feet cheese strings edam cheese on
              toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly. Blue castello chalk and
              cheese bocconcini. Gouda bocconcini mozzarella cottage cheese cheese and wine blue
              castello swiss roquefort. Gouda cheesecake cheesy feet cheese strings edam cheese on
              toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DateHeading ClassName="mt-5">
            <span>yesterday</span>
          </DateHeading>
          <DetailDate>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
            <span>Name | Date | Time</span>
            <Content>
              Blue castello chalk and cheese bocconcini. Gouda bocconcini mozzarella cottage cheese
              cheese and wine blue castello swiss roquefort. Gouda cheesecake cheesy feet cheese
              strings edam cheese on toast cheese and wine caerphilly.
            </Content>
          </DetailDate>
          <DetailDate>
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
};

export default withPageAuthRequired(ActivityPage);
