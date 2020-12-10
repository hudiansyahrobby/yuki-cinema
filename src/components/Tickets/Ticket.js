import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import EventIcon from '@material-ui/icons/Event';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { format } from 'date-fns';
import id from 'date-fns/locale/id';
import QRCode from 'qrcode.react';

export default function Ticket({ ticket }) {
  return (
    <>
      <div className='text-gray-600 bg-info rounded-md p-4 flex text-left justify-between items-center'>
        <div>
          <h3 className='text-primary font-bold text-xl tracking-wide'>
            {capitalizeFirstLetter(ticket.movie)}
          </h3>
          <div className='mt-3'>
            <EventIcon className='mr-2 ' />
            <span className='mt-1 text-gray-600 text-md font-semibold'>
              {format(new Date(ticket.schedule), 'd MMMM yyyy', { locale: id })}
            </span>
          </div>
          <div className='mt-3'>
            <AccessTimeIcon className='mr-2 ' />
            <span className='mt-1 text-gray-600 text-md font-semibold'>
              {format(new Date(ticket.schedule), 'HH:mm', { locale: id })}
            </span>
          </div>
          <div className='mt-3'>
            <AirlineSeatReclineNormalIcon className='mr-2' />
            <span className='text-gray-600 text-md font-semibold'>{ticket.seatNumber}</span>
          </div>
        </div>
        <QRCode
          value={`${ticket.movie} ${format(new Date(ticket.schedule), 'd MMMM yyyy', {
            locale: id,
          })} ${format(new Date(ticket.schedule), 'HH:mm', { locale: id })} ${ticket.seatNumber} `}
          size={80}
        />
        {/* <AcUnitIcon className='text-primary' style={{ fontSize: 70 }} /> */}
      </div>
    </>
  );
}
