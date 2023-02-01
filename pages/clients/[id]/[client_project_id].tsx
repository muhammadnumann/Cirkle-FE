import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function SelectedClientProjectPage() {
  return (
    <div>
      <h1>Selected Project page for selected Client</h1>
    </div>
  );
}

export default withPageAuthRequired(SelectedClientProjectPage);
