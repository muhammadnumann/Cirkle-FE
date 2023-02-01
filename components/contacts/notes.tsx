import React, { useState } from 'react';
import {
  Content,
  CTimeline,
  DateHeading,
  DetailDate,
} from 'components/timeline/timeline-interface';
import { AddNote } from 'components/forms/contacts/addnote';

const ContactNotes = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {isSelected && <div className="overlay"></div>}
      <div className={`w-100 mx-0`}>
        <div className="main-activity-parent py-2">
          <div className={`main-heading-tab d-flex justify-content-between`}>
            <h3 className={`globle-heading-h3 mb-0 mt-3`}>Notes</h3>
            <button
              className={`btn bg-gradient-purple text-white rounded px-4 font-12 font-weight-600 font-poppin`}
              onClick={() => setIsSelected(true)}
            >
              Add Note
            </button>
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
      {isSelected && <AddNote setIsSelected={setIsSelected} />}
    </>
  );
};

export default ContactNotes;
