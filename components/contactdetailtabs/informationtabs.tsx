import React from 'react';

const InformationTabs = () => {
  const data = [
    { title: 'General Information', isActive: true, id: 'general-information' },
    { title: 'Work Information', isActive: false, id: 'work-information' },
    { title: 'Contact Information', isActive: false, id: 'contact-information' },
    { title: 'Company Contacts', isActive: false, id: 'company-contacts' },
    { title: 'Email Permission', isActive: false, id: 'email-permission' },
    { title: 'Groups', isActive: false, id: 'groups' },
    { title: 'Activity', isActive: false, id: 'activity' },
    { title: 'Communication', isActive: false, id: 'communication' },
    { title: 'Notes', isActive: false, id: 'notes' },
  ];
  return (
    <div
      className="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      {data.map((val, index) => {
        return (
          <a
            key={`${index}-ahs`}
            className={`nav-link ${index === 0 ? 'active' : ''}`}
            id={`${val.id}-tab`}
            data-toggle="pill"
            href={`${val.id}-content`}
            role="tab"
            aria-controls={`${val.id}-content`}
            aria-selected={val.isActive}
          >
            {val.title}
          </a>
        );
      })}
    </div>
  );
};

export default InformationTabs;
