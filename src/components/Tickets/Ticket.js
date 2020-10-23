import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import EventIcon from '@material-ui/icons/Event';

export default function Ticket() {
  return (
    <div className='text-gray-600 bg-info rounded-md p-4 flex justify-between items-center'>
      <div>
        <h3 className='text-primary font-bold text-xl tracking-wide'>Avenger</h3>
        <div className='mt-3'>
          <EventIcon className='mr-2 ' />
          <span className='mt-1 text-gray-600 text-md font-semibold'>23 Januari 2000</span>
        </div>
        <div className='mt-3'>
          <AccessTimeIcon className='mr-2 ' />
          <span className='mt-1 text-gray-600 text-md font-semibold'>09:00</span>
        </div>
        <div className='mt-3'>
          <AirlineSeatReclineNormalIcon className='mr-2' />
          <span className='text-gray-600 text-md font-semibold'>23</span>
        </div>
      </div>
      <AcUnitIcon className='text-primary' style={{ fontSize: 70 }} />
    </div>
  );
}
