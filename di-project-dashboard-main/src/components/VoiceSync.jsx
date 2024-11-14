import React from 'react';
import MicIcon from '@mui/icons-material/Mic';

const VoiceSync = () => {
  const items = [
    { label: 'UX Research', enabled: true },
    { label: 'Onboarding', enabled: false },
    { label: 'Usability Testing', enabled: false },
    { label: 'Website Research', enabled: false },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className='inline-flex text-gray-600 mb-4 border-b-2'>
        <h2 className="text-gray-600 font-semibold mb-4 mr-56">Voice Sync</h2>
        <MicIcon fontSize='small'/>
        </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="flex items-center py-4 border-b">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.enabled ? 'text-green-500' : 'text-gray-500'}`}>
            <MicIcon/>
            </div>
            <span className="ml-4 text-lg text-gray-600 font-medium">{item.label}</span>
          </div>
          <div className="flex -space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white "></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white text-center text-white text-sm p-1">4+</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default VoiceSync;
