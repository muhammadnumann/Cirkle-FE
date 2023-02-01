import Link from 'next/link';

function Candidate(props) {
  const { candidate } = props;
  return (
    <div>
      <li key={candidate.id}>
        <Link href={`/candidates/${candidate.id}`}>{candidate.fullName}</Link>
      </li>
    </div>
  );
}

export default Candidate;
