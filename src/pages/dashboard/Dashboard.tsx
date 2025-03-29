import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { useQuery } from '@apollo/client';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardContent } from '@happiness-bomb/ui';
import Layout from '../../components/Layout';
import { GET_SENT_BOMBS, GET_RECEIVED_BOMBS } from '../../graphql/queries';

const Dashboard = () => {
  const { user } = useUser();
  const { loading: sentLoading, error: sentError, data: sentData } = useQuery(GET_SENT_BOMBS);
  const { loading: receivedLoading, error: receivedError, data: receivedData } = useQuery(GET_RECEIVED_BOMBS);

  const sentBombs = sentData?.mySentBombs || [];
  const receivedBombs = receivedData?.myReceivedBombs || [];

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
              {sentLoading && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Loading sent bombs...</p>
                </div>
              )}

              {sentError && (
                <div className="text-center py-12">
                  <p className="text-red-500">Error loading sent bombs: {sentError.message}</p>
                </div>
              )}
              
              {!sentLoading && !sentError && sentBombs.length === 0 ? (
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
                        To: {bomb.recipient.name} ({bomb.recipient.email})
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(bomb.createdAt).toLocaleDateString()}
                      </p>
                      {bomb.sentAt && (
                        <p className="text-sm text-gray-500">
                          Sent: {new Date(bomb.sentAt).toLocaleDateString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="received">
            <div className="mt-6 space-y-4">
              {receivedLoading && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Loading received bombs...</p>
                </div>
              )}

              {receivedError && (
                <div className="text-center py-12">
                  <p className="text-red-500">Error loading received bombs: {receivedError.message}</p>
                </div>
              )}
              
              {!receivedLoading && !receivedError && receivedBombs.length === 0 ? (
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
                        From: {bomb.creator.name} ({bomb.creator.email})
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(bomb.createdAt).toLocaleDateString()}
                      </p>
                      {bomb.sentAt && (
                        <p className="text-sm text-gray-500">
                          Sent: {new Date(bomb.sentAt).toLocaleDateString()}
                        </p>
                      )}
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