import InformationTabs from './informationtabs';
const ContactDetailTabs = () => {
  return (
    <div className="d-flex">
      <InformationTabs />
      <div className="tab-content w-75" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="generalinformationcontent"
          role="tabpanel"
          aria-labelledby="generalinformation"
        >
          Home
        </div>
      </div>
    </div>
  );
};

export default ContactDetailTabs;
