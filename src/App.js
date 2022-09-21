import { Routes } from 'react-router-dom';
import { Route }  from 'react-router-dom';

import AllMeetupsPage from './pages/Allmeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>      
    </div>
  );
}

export default App;
