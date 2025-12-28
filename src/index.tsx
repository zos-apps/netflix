import React from 'react';

interface NetflixProps { onClose: () => void; }

const Netflix: React.FC<NetflixProps> = ({ onClose }) => (
  <div className="h-full w-full bg-[#141414]">
    <iframe src="https://www.netflix.com/" className="w-full h-full border-0" allow="encrypted-media; autoplay" title="Netflix" />
  </div>
);

export default Netflix;
