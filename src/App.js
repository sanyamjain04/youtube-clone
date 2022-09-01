import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Feed, VideoDetail,
   SearchFeed,
   Navbar, 
   ChannelDetail
  } from "./components"

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#000"}}>
        <Navbar />
         <Routes>
          <Route path="/" exact element={<Feed />} />
          {/* <Route path="/video/:id" element={<VideoDetail />} /> */}
          {/* <Route path="/channel/:id" element={<ChannelDetail />} /> */}
          {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
