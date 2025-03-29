import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { Card } from '@happiness-bomb/ui';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Happiness Bomb</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <Card>
          <div className="p-6">
            <ClerkSignIn
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full shadow-none p-0',
                },
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignIn; 