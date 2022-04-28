import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';

import Banner from '../partials/Banner';
import BreadCrumb from '../partials/BreadCrumb';
import kips from '../data/kip'

import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';

const SortableItem = SortableElement(({kip}) =>  ( <DashboardCard03  kip={kip} />));

const SortableList = SortableContainer(({KPIS}) => {


  return (
    <>
{KPIS.map((item,index)=> {
               return (
                 <div key={index} className='card border rounded shadow  shadow-slate-400'>
                     <div className='top py-2 px-2 h-40 rounded bg-gray-800'>
                       {item.category}
                     </div>
                     <div className="grid grid-cols-12 gap-4">
                       {item.options.map((opt, indx)=> {
                         return ( <SortableItem key={indx} index={indx} kip={opt} />)
                       })}
    
                     </div>
                 </div>
               )
             })}
    </>
  );
});

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [crumbs, setCrumbs] = useState(['home'])
  const [KPIS, setKPIS] = useState(kips);

  const onSortEnd = ({oldIndex, newIndex}) => {
   console.log(`old:${oldIndex} New:${newIndex}`)
   const options = arrayMoveImmutable(KPIS[0].options, oldIndex, newIndex);
   console.log(arrayMoveImmutable(KPIS[0].options, oldIndex, newIndex));
       setKPIS([{
         ...KPIS[0],
         options:options
       }])
  };


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* BREADCRUMB */}
            <BreadCrumb crumbs={crumbs} />

            {/* Welcome banner */}
            <WelcomeBanner />



            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <SortableList KPIS={KPIS}  onSortEnd={onSortEnd}/>
              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard02 /> */}
              {/* Line chart (Acme Professional) */}
             {KPIS.map((item,index)=> {
               return (
                 <div key={index} className='card border rounded shadow  shadow-slate-400'>
                     <div className='top py-2 px-2 h-40 rounded bg-gray-800'>
                       {item.category}
                     </div>
                     <div className="grid grid-cols-12 gap-4">
                       {item.options.map((opt, indx)=> {
                         return ( <DashboardCard03 key={indx} kip={opt} />)
                       })}
    
                     </div>
                 </div>
               )
             })}

              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;