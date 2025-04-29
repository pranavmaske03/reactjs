import { useState } from 'react';
import { lazy,Suspense } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('stats');

  const DashboardStats = lazy(() => import('./DashboardStats'));
  const UserActivity = lazy(() => import('./UserActivity'));
  const RecentOrders = lazy(() => import('./RecentOrders'));

  return (
    <>
      <div className='dashboard'>
        <div className='tabs'>
          <button onClick={() => setActiveTab('stats')}>Statistics</button>
          <button onClick={() => setActiveTab('activity')}>User Activity</button>
          <button onClick={() => setActiveTab('orders')}>Recent Orders</button>
        </div>
        <Suspense fallback={<div className="loading">Loading module...</div>}>
          {activeTab === 'stats' && <DashboardStats />}
          {activeTab === 'activity' && <UserActivity />}
          {activeTab === 'orders' && <RecentOrders />}
        </Suspense>
      </div>
    </>
  )
}

export default App
