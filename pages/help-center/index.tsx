import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  CAccordian,
  AccordianItem,
  AccordianHeading,
  AccordianCollapse,
} from 'components/accordian';
import React, { FC } from 'react';
import styles from './help-center.module.css';

const ContactsListPage: FC = () => {
  return (
    <div id={styles.page}>
      <div className="main-help-center-parent ps-2 py-4">
        <div className={`main-heading-tab`}>
          <h3 className={styles.deatailheading}>FAQs</h3>
        </div>
        <div className={`text-lightgray font-12 font-weight-500 mb-4`}>
          All your asnwers in one place
        </div>
        <div className="help-center-main pt-3">
          <CAccordian>
            <AccordianItem>
              <AccordianHeading id="accordion-header" target={'collapsedOne'}>
                1. What is a Payment Gateway?
              </AccordianHeading>
              <AccordianCollapse ClassName="show" id={'collapsedOne'}>
                Pecorino cheese triangles ricotta babybel feta red leicester red leicester ricotta.
                Fondue feta parmesan bocconcini when the cheese comes out everybody happy goat
                smelly cheese swiss. Pecorino cheese triangles ricotta babybel feta red leicester
                red leicester ricotta. Fondue feta parmesan bocconcini when the cheese comes out
                everybody happy goat smelly cheese swiss.
              </AccordianCollapse>
            </AccordianItem>
            <AccordianItem>
              <AccordianHeading
                id="accordion-headerTwo"
                btnClass="collapsed"
                target={'collapsedTwo'}
              >
                2. What is a Payment Gateway?
              </AccordianHeading>
              <AccordianCollapse ClassName="" id={'collapsedTwo'}>
                Pecorino cheese triangles ricotta babybel feta red leicester red leicester ricotta.
                Fondue feta parmesan bocconcini when the cheese comes out everybody happy goat
                smelly cheese swiss. Pecorino cheese triangles ricotta babybel feta red leicester
                red leicester ricotta. Fondue feta parmesan bocconcini when the cheese comes out
                everybody happy goat smelly cheese swiss.
              </AccordianCollapse>
            </AccordianItem>
          </CAccordian>
        </div>
      </div>
    </div>
  );
};

export default withPageAuthRequired(ContactsListPage);
