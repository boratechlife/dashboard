import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-03.svg';
import Progress from 'react-circle-progress-bar'

function DashboardCard03( { kip, edit}) {



  return (
    <div className="flex flex-col col-span-full  bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <div className={edit ? "absolute top-0  right-2 flex justify-end px-4 pt-3" : "hidden"}>
         {/* Menu button */}
         <span className='inline-flex hover:text-yellow-500'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>

          </span>
      </div>
      <div className='absolute right-1 top-2 mt-12'>
      <Progress progress={75} className="w-2 h-2" style={{width: "80px"}} strokeWidth={10} ballStrokeWidth={30} />
      </div>
      <div className="px-4 py-5 w-3/4">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 03" />
         
        </header>
        <h2 className="text-base font-semibold text-slate-800 mb-2">{kip.name}</h2>
        <div className="text-xs font-medium text-slate-400  mb-1">vs Prev Month</div>
        <div className="flex items-start">
          <div className="text-2xl font-bold text-slate-800 mr-2">$9,962</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>

    </div>
  );
}

export default DashboardCard03;
