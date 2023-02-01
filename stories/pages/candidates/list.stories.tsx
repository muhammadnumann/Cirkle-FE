import { ComponentMeta, ComponentStory } from '@storybook/react';
import CandidateListPage from '../../../pages/candidates';

export default {
  title: 'CandidatesListPage',
  component: CandidateListPage,
} as ComponentMeta<typeof CandidateListPage>;

const Template: ComponentStory<typeof CandidateListPage> = (args) => (
  <CandidateListPage {...args} />
);

export const CandidateListStory = Template.bind({});

CandidateListStory.args = {
  response: [
    {
      availableToPlaceDate: '2022-07-06T00:00:00Z',
      birthday: '2000-12-25T00:00:00Z',
      createdAt: '2022-06-18T19:25:01.753324-04:00',
      email: 'danielrusso@gmail.com',
      firstName: 'Daniel',
      fullName: 'Mr. Siri Russo',
      homePhone: '201-884-1212',
      id: 1,
      lastName: 'Siri-Russo',
      mobilePhone: '+660807240404',
      skills: null,
      tags: null,
      updatedAt: '2022-07-05T18:58:27.859177-04:00',
      weeklyAvailableHours: 69,
    },
    {
      availableToPlaceDate: null,
      birthday: null,
      createdAt: '2022-06-18T19:25:01.753324-04:00',
      email: '',
      firstName: null,
      fullName: 'test person',
      homePhone: null,
      id: 2,
      lastName: null,
      mobilePhone: null,
      skills: null,
      tags: null,
      updatedAt: '2022-07-01T13:56:27.62886-04:00',
      weeklyAvailableHours: null,
    },
    {
      availableToPlaceDate: null,
      birthday: null,
      createdAt: '2022-06-18T19:25:01.753324-04:00',
      email: '',
      firstName: null,
      fullName: 'xyz',
      homePhone: null,
      id: 3,
      lastName: null,
      mobilePhone: null,
      skills: null,
      tags: null,
      updatedAt: '2022-06-18T19:25:01.753324-04:00',
      weeklyAvailableHours: null,
    },
  ],
};
