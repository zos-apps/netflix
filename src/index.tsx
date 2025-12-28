import React, { useState } from 'react';

interface NetflixProps { onClose: () => void; }

const shows = [
  { title: 'Stranger Things', year: '2024', match: '98%', rating: 'TV-14', seasons: '5 Seasons', img: 'from-red-900 to-red-600' },
  { title: 'Wednesday', year: '2023', match: '95%', rating: 'TV-14', seasons: '2 Seasons', img: 'from-purple-900 to-purple-600' },
  { title: 'The Witcher', year: '2024', match: '92%', rating: 'TV-MA', seasons: '4 Seasons', img: 'from-gray-900 to-gray-600' },
  { title: 'Squid Game', year: '2024', match: '97%', rating: 'TV-MA', seasons: '2 Seasons', img: 'from-pink-900 to-pink-500' },
  { title: 'Money Heist', year: '2021', match: '94%', rating: 'TV-MA', seasons: '5 Parts', img: 'from-red-800 to-amber-600' },
];

const continueWatching = [
  { title: 'Breaking Bad', episode: 'S3:E7', progress: 65, img: 'from-green-900 to-yellow-600' },
  { title: 'The Crown', episode: 'S6:E3', progress: 30, img: 'from-yellow-700 to-amber-500' },
  { title: 'Dark', episode: 'S2:E4', progress: 80, img: 'from-gray-900 to-blue-900' },
];

const categories = [
  { name: 'Trending Now', shows: shows },
  { name: 'Popular on Netflix', shows: [...shows].reverse() },
  { name: 'New Releases', shows: shows.slice(0, 4) },
];

const Netflix: React.FC<NetflixProps> = ({ onClose }) => {
  const [selectedShow, setSelectedShow] = useState<typeof shows[0] | null>(null);

  if (selectedShow) {
    return (
      <div className="h-full bg-[#141414] text-white overflow-auto">
        <div className={`h-96 bg-gradient-to-br ${selectedShow.img} relative`}>
          <button onClick={() => setSelectedShow(null)} className="absolute top-4 left-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">←</button>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#141414]">
            <h1 className="text-5xl font-bold mb-4">{selectedShow.title}</h1>
            <div className="flex gap-4 mb-4">
              <button className="px-8 py-3 bg-white text-black rounded font-bold flex items-center gap-2">▶ Play</button>
              <button className="px-4 py-3 bg-white/30 rounded font-bold">+ My List</button>
              <button className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">👍</button>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="flex gap-4 mb-4 text-sm">
            <span className="text-green-500 font-bold">{selectedShow.match} Match</span>
            <span>{selectedShow.year}</span>
            <span className="border border-white/40 px-1">{selectedShow.rating}</span>
            <span>{selectedShow.seasons}</span>
          </div>
          <p className="text-lg mb-6">
            An epic tale of mystery, adventure, and supernatural occurrences that has captivated audiences worldwide. 
            Follow our heroes as they navigate through challenging situations and uncover hidden truths.
          </p>
          <div className="text-sm text-white/60">
            <p><span className="text-white/40">Cast:</span> Famous Actor, Popular Actress, Rising Star</p>
            <p><span className="text-white/40">Genres:</span> Drama, Thriller, Sci-Fi</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#141414] text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-6 p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="text-3xl font-bold text-red-600">NETFLIX</div>
        <nav className="flex gap-4 text-sm">
          <button className="hover:text-white/60">Home</button>
          <button className="hover:text-white/60">TV Shows</button>
          <button className="hover:text-white/60">Movies</button>
          <button className="hover:text-white/60">New & Popular</button>
          <button className="hover:text-white/60">My List</button>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <button>🔍</button>
          <button>🔔</button>
          <div className="w-8 h-8 bg-blue-600 rounded"></div>
        </div>
      </div>

      {/* Hero */}
      <div className={`h-[480px] bg-gradient-to-br ${shows[0].img} relative flex-shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
        <div className="absolute bottom-20 left-12 max-w-lg">
          <h1 className="text-6xl font-bold mb-4">{shows[0].title}</h1>
          <p className="text-lg mb-6">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
          <div className="flex gap-3">
            <button className="px-8 py-3 bg-white text-black rounded font-bold flex items-center gap-2 hover:bg-white/80">▶ Play</button>
            <button onClick={() => setSelectedShow(shows[0])} className="px-6 py-3 bg-white/30 rounded font-bold flex items-center gap-2 hover:bg-white/40">ℹ More Info</button>
          </div>
        </div>
      </div>

      {/* Content rows */}
      <div className="flex-1 overflow-auto -mt-20 relative z-10">
        {/* Continue Watching */}
        <div className="px-12 mb-6">
          <h2 className="text-xl font-bold mb-3">Continue Watching</h2>
          <div className="flex gap-2">
            {continueWatching.map((show, i) => (
              <div key={i} className="w-48 cursor-pointer group">
                <div className={`aspect-video bg-gradient-to-br ${show.img} rounded relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <span className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                    <div className="h-full bg-red-600" style={{ width: `${show.progress}%` }}></div>
                  </div>
                </div>
                <p className="text-xs text-white/60 mt-1">{show.episode}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        {categories.map((cat, i) => (
          <div key={i} className="px-12 mb-6">
            <h2 className="text-xl font-bold mb-3">{cat.name}</h2>
            <div className="flex gap-2">
              {cat.shows.map((show, j) => (
                <div key={j} onClick={() => setSelectedShow(show)} className="w-48 cursor-pointer group">
                  <div className={`aspect-video bg-gradient-to-br ${show.img} rounded overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <span className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Netflix;
