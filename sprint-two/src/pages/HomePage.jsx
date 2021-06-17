import React from 'react';

// Data
import videos from '../Data/videos.json'
import videoDetails from '../Data/video-details.json'

// Components
import Header from '../components/Header';
import MediaCard from '../components/MediaCard';
import MainPhoto from '../components/MainPhoto';
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import MediaList from "../components/MediaList";

class HomePage extends React.Component {

    state = {
        current: videoDetails[0],
        videoList: videos,
        };

        handleClick = (event) => {
        const newVideo = videoDetails.filter(item => item.id === event.id)[0];
        this.setState({ current: newVideo });

        const newVideoList = videos.filter(item => item.id !== event.id);
        this.setState({ videoList: newVideoList });
        }

  render() {
    return (
        <>
            <Header />
                <MainPhoto video={this.state.current} />
                <div className="Container" style={{ display: 'flex' }}>
                    <div style={{ width: '60%' }}>
                        <MediaCard video={this.state.current} />
                        <div>{this.state.current.comments.length} Comments</div>
                        <CommentForm />
                        <hr style={{ backgroundColor: 'gray', width: '100%' }} />
                        {this.state.current.comments.map(comment => (
                            <CommentList key={comment.id} data={comment} />
                        ))}
                    </div>
                    <div className="suggestions" style={{ width: '40%' }}>
                        <div className="suggestions--title">NEXT VIDEO</div>
                        <MediaList data={this.state.videoList} click={this.handleClick.bind(this)} />
                    </div>
                </div>
        </>
    );
  }
}

export default HomePage;