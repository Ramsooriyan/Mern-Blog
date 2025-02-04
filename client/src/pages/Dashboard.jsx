import React, { Profiler, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import DashPost from '../Components/DashPost';
import DashUsers from '../Components/DashUsers';
import DashComments from '../Components/DashComments';
import DashboardComponents from '../Components/DashboardComponents';

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if(tabFormUrl){
      setTab(tabFormUrl);
    }
  },[location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* Dashboard */}
      {tab === 'dash' && <DashboardComponents/>}
      {/* profile.. */}
      {tab === "profile" && <DashProfile />}
      {/* post */}
      {tab === 'posts' && <DashPost />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments */}
      {tab === 'comments' && <DashComments/>}
    </div>
  )
}

export default Dashboard