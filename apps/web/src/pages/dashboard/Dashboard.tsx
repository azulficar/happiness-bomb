import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardContent } from '@happiness-bomb/ui';
import Layout from '../../components/Layout';

// Normally we'd get this from the GraphQL API
// This is a placeholder for now
const mockBombs = [
  {
    id: '1',
    title: 'Happy Birthday',
    creatorId: 'user_1',
    creatorName: 'John Doe',
    recipientId: 'user_2',
    recipientName: 'Jane Smith',
    status: 'SENT',
    createdAt: '2023-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    title: 'Congratulations',
    creatorId: 'user_2',
    creatorName: 'Jane Smith',
    recipientId: 'user_1',
    recipientName: 'John Doe',
    status: 'READY',
    createdAt: '2023-01-02T00:00:00.000Z',
  },
];

const Dashboard = () => {
  const { user } = useUser();
  
  const sentBombs = mockBombs.filter(bomb => bomb.creatorId === 'user_1');
  const receivedBombs = mockBombs.filter(bomb => bomb.recipientId === 'user_1');

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Welcome, {user?.firstName || 'Friend'}!
        </h1>
        
        <Tabs defaultValue="sent">
          <TabsList>
            <TabsTrigger value="sent">Bombs I Sent</TabsTrigger>
            <TabsTrigger value="received">Bombs I Received</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sent">
            <div className="mt-6 space-y-4">
              {sentBombs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">You haven't sent any Happiness Bombs yet.</p>
                </div>
              ) : (
                sentBombs.map((bomb) => (
                  <Card key={bomb.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{bomb.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          bomb.status === 'SENT' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bomb.status}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        To: {bomb.recipientName}
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(bomb.createdAt).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="received">
            <div className="mt-6 space-y-4">
              {receivedBombs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">You haven't received any Happiness Bombs yet.</p>
                </div>
              ) : (
                receivedBombs.map((bomb) => (
                  <Card key={bomb.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{bomb.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          bomb.status === 'SENT' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bomb.status}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        From: {bomb.creatorName}
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(bomb.createdAt).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard; 