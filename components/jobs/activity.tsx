import {
  CTimeline,
  DateHeading,
  DetailDate,
  Content,
} from 'components/timeline/timeline-interface';
import React, { FC } from 'react';

const JobActivity: FC = () => {
  return (
    <div className="main-activity-parent mt-3 me-2">
      <div className={`main-heading-tab`}>
        <h3 className="globle-heading-h3">All Activity</h3>
      </div>
      <div className={`my-4 me-2`} style={{ borderBottom: '0.5px solid #697A8D' }}></div>
      <div className="activity-main ps-2">
        <CTimeline>
          <DateHeading>
            <span>Today</span>
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

export default JobActivity;
