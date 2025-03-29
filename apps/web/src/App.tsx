import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Pages
import Dashboard from './pages/dashboard/Dashboard';
import CreateBomb from './pages/create/CreateBomb';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

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
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </ClerkProvider>
  );
}

export default App; 