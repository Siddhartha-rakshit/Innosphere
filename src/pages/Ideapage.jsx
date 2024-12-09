import React from 'react';
import Leftsidebar from '../components/Leftsidebar';
import IdeaPage from '../components/IdeaPage';

function Ideapage() {
  return (
    <div className="flex"> {/* Flexbox container */}
      <div className="w-1/4"> {/* Sidebar takes 1/4th of the width */}
        <Leftsidebar />
      </div>
      <div className="w-3/4"> {/* Main content takes the remaining 3/4th */}
        <IdeaPage />
      </div>
    </div>
  );
}

export default Ideapage;