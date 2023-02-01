import Candidate from './candidate';

function CandidateList(props) {
  const { candidates } = props;

  return (
    <div id="candidateList">
      <h1>Candidate List</h1>
      <ul>
        {candidates.map((candidate) => {
          return <Candidate key={candidate.id} candidate={candidate} />;
        })}
      </ul>
    </div>
  );
}

export default CandidateList;
