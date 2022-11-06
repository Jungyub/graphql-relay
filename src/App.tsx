import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './relayEnvironment';
import { SearchPage } from './pages/SearchPage';

const { Suspense } = React;

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <SearchPage />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
