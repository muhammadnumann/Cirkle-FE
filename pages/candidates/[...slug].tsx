// Catch all for other query params after /candidates dir
// Filter candidates by query params, show filtered results

import { useRouter } from 'next/router';

function FilteredCandidates() {
  const router = useRouter();
  console.log('Filtered Candidates query', router.query);
  return (
    <div>
      <h1>Filtered Candidates Page</h1>
    </div>
  );
}

export default FilteredCandidates;
