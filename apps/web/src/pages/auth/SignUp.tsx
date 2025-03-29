import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { Card } from '@happiness-bomb/ui';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Happiness Bomb</h1>
          <p className="mt-2 text-gray-600">Create your account</p>
        </div>
        <Card>
          <div className="p-6">
            <ClerkSignUp
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
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

export default SignUp; 