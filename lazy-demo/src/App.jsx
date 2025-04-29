import { lazy, Suspense, useState, useEffect } from 'react';

// Improved lazy loader with error handling
const createLazyWithPrefetch = (path) => {
  let promise;
  const load = () => {
    if (!promise) {
      promise = import(/* @vite-ignore */ path)
        .catch(err => console.error('Failed to load component:', err));
    }
    return promise;
  };
  const Component = lazy(load);
  return { Component, prefetch: load };
};

// Components with explicit extensions
const { Component: DashboardStats, prefetch: prefetchStats } = 
  createLazyWithPrefetch('./DashboardStats.jsx');
const { Component: UserActivity, prefetch: prefetchActivity } = 
  createLazyWithPrefetch('./UserActivity.jsx');
const { Component: RecentOrders, prefetch: prefetchOrders } = 
  createLazyWithPrefetch('./RecentOrders.jsx');

export default function App() {
  const [activeTab, setActiveTab] = useState('stats');

  useEffect(() => {
    // Optional: Only prefetch if likely to be used soon
    prefetchStats();
  }, []);

  return (
    <div className="dashboard">
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('stats')}
          onMouseEnter={prefetchStats}
        >Statistics</button>
        
        <button 
          onClick={() => setActiveTab('activity')}
          onMouseEnter={() => {
            prefetchActivity();
            prefetchOrders(); // Cascade prefetch
          }}
        >User Activity</button>
        
        <button 
          onClick={() => setActiveTab('orders')}
          onMouseEnter={prefetchOrders}
        >Recent Orders</button>
      </div>

      <Suspense fallback={<div className="loading">Loading module...</div>}>
        {activeTab === 'stats' && <DashboardStats />}
        {activeTab === 'activity' && <UserActivity />}
        {activeTab === 'orders' && <RecentOrders />}
      </Suspense>
    </div>
  );
}