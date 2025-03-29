import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Pages
import Dashboard from './pages/dashboard/Dashboard';
import CreateBomb from './pages/create/CreateBomb';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

const AppWithProviders = () => {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ApolloProviderWithAuth>
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="/sign-in/*" element={<SignIn />} />
            <Route path="/sign-up/*" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateBomb />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApolloProviderWithAuth>
    </ClerkProvider>
  );
};

const ApolloProviderWithAuth = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  
  // Create an HTTP link
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL || 'http://localhost:3001/graphql',
  });

  // Add the auth token to the headers
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    };
  });

  // Create the Apollo Client
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

function App() {
  return <AppWithProviders />;
}

export default App; 