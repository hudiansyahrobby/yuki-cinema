import React from 'react';
import Card from './Card';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import EventIcon from '@material-ui/icons/Event';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const feature = [
  {
    icon: <EuroSymbolIcon style={{ fontSize: 100 }} className='mt-10 text-secondary' />,
    title: 'Bioskop Termurah',
  },
  {
    icon: <PlayCircleFilledIcon style={{ fontSize: 100 }} className='mt-10 text-primary' />,
    title: 'Tonton Movie Terbaik',
  },
  {
    icon: <EventIcon style={{ fontSize: 100 }} className='mt-10 text-secondary' />,
    title: 'Buka Setiap Hari',
  },
];

export default function Cards() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 justify-center text-center gap-5 w-5/6 mx-auto mt-20'>
      {feature.map(({ icon, title }) => {
        return <Card key={title} title={title} icon={icon} />;
      })}
    </div>
  );
}
