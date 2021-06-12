import logo from './logo.svg';

import Header from './components/Header'
import MediaCard from './components/MediaCard'
import MainPhoto from './components/MainPhoto'

import Comments from './components/Comments'
import MediaList from './components/MediaList'

import videoDetails from './Data/video-details.json'


function App() {

  return (
    <div className="App">
      <Header />
      <MainPhoto video={videoDetails[0]} />
      <MediaCard video={videoDetails[0]} />
      <Comments data={videoDetails[0].comments} />

      {/* {<MediaList />} */}
    </div>
  );
}


export default App;
