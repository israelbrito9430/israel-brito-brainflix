import videos from './Data/videos.json'
import videoDetails from './Data/video-details.json'

import Header from './components/Header'
import MediaCard from './components/MediaCard'
import MainPhoto from './components/MainPhoto'

import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import MediaList from "./components/MediaList";

const App = () => {

  return (
    <div className="App">
      <Header />
      <MainPhoto video={videoDetails[0]} />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '60%' }}>
          <MediaCard video={videoDetails[0]} />

          <div>{videoDetails[0].comments.length} Comments</div>
          <CommentForm />
          <hr style={{ backgroundColor: 'gray', width: '100%' }} />

          { videoDetails[0].comments.map(comment => (
            <CommentList key={comment.id} data={comment} />
          ))}

        </div>
        <div style={{ width: '40%' }}>
          <div>NEXT VIDEO</div>
          <MediaList data={videos} />
        </div>
      </div>
    </div>
  );
}

export default App;
