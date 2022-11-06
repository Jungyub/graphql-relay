import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './relay';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <SearchPage />
    </RelayEnvironmentProvider>
  );
}

export default App;
