import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[client_project_id]',
      query: { id: 'roy', client_project_id: 'projecta' },
    });
  }

  return (
    <div>
      <h1>Projects of an Given Client</h1>
      <h2>{router.query.id}</h2>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default withPageAuthRequired(ClientProjectsPage);
