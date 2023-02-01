import { FC } from 'react';
import { useMutation } from 'react-query';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { date, number, string } from 'yup';
import Address from '../../components/address';
import InlineEdit from '../../components/inlineedit';
import SkillWidget from '../../components/skills';
import TagWidget from '../../components/tags';
import { defaultMutateOpts } from '../../hooks/mutate';
import { CrmApiClientWorker } from '../../internal/fetcher';
import { v1GetCandidateResponse, v1UpdateCandidateRequest } from '../../internal/fetcher/types';

const getQueryKey = (id: number): [string, number] => ['candidate', id];

const CandidateDetail = dynamic(() => import('./candidateDetail'));

type CandidateProps = {
  candidate: v1GetCandidateResponse;
  client: CrmApiClientWorker;
};

const Candidates: FC<CandidateProps> = (props: CandidateProps) => {
  const { candidate, client } = props;
  const name = `${candidate.fullName} (${candidate.firstName} ${candidate.lastName})`;
  const queryKey = getQueryKey(candidate.id);

  const { mutate: updateCandidate } = useMutation(
    async (c: v1UpdateCandidateRequest['body']['candidate']) => {
      const updatedCandidate = { ...candidate, ...c };

      const updated = await client.updateCandidate({
        id: candidate.id,
        body: { candidate: updatedCandidate },
      });
      return updated.candidate;
    },
    defaultMutateOpts(queryKey, 'candidate')
  );

  return (
    <>
      <CandidateDetail />

      <div className="candidate d-none">
        <Toaster toastOptions={{ position: 'top-center' }} />
        <h3>{name}</h3>
        <div className="field">
          Full name
          <InlineEdit
            value={candidate.fullName}
            setValue={(fullName) => updateCandidate({ fullName })}
            validationSchema={string()
              .required('Requried field')
              .typeError('Must be a valid text entry')}
          />
        </div>
        <SkillWidget skills={candidate.skills} />
        <TagWidget tags={candidate.tags} />
        <div className="field">
          Available to place date:
          <InlineEdit
            value={candidate.availableToPlaceDate}
            setValue={(availableToPlaceDate) =>
              updateCandidate({ availableToPlaceDate, ...candidate })
            }
            validationSchema={date().nullable(true).typeError('Must be a valid date')}
          />
        </div>
        <div className="field">
          Weekly remaining hours:
          <InlineEdit
            value={candidate.weeklyAvailableHours}
            setValue={(weeklyAvailableHours) =>
              updateCandidate({ weeklyAvailableHours, ...candidate })
            }
            inputType="number"
            validationSchema={number()
              .nullable(true)
              .typeError('Must be a valid number')
              .min(0, 'Must be empty or greater than or equal to 0')}
          />
        </div>

        <div className="candidate-contact">
          <h5>Contact</h5>
          <div className={`$field} email`}>
            Email:
            <InlineEdit
              value={candidate.email}
              setValue={(email) => updateCandidate({ email, ...candidate })}
              validationSchema={string().email('Must be a valid email').nullable(true)}
            />
          </div>
          <div className={`$field} phone`}>
            Mobile phone:
            <InlineEdit
              value={candidate.mobilePhone}
              setValue={(mobilePhone) => updateCandidate({ mobilePhone, ...candidate })}
              validationSchema={string().nullable(true).typeError('Must be a valid text entry')}
            />
          </div>
          <div className={`$field} phone`}>
            Home phone:
            <InlineEdit
              value={candidate.homePhone}
              setValue={(homePhone) => updateCandidate({ homePhone, ...candidate })}
              validationSchema={string().nullable(true).typeError('Must be a valid text entry')}
            />
          </div>
          {candidate.mailingAddress ? <Address address={candidate.mailingAddress} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Candidates;
