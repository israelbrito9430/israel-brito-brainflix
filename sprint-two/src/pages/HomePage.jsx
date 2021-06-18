import React from 'react';

// Data
import videos from '../Data/videos.json'
import videoDetails from '../Data/video-details.json'

// Components
import MediaCard from '../components/MediaCard/MediaCard';
import MainPhoto from '../components/MainPhoto/MainPhoto';
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import MediaList from "../components/MediaList/MediaList";

class HomePage extends React.Component {

    state = {
        current: videoDetails[0],
        videoList: videos,
        };

        handleClick = (event) => {
      

        const newVideoList = videos.filter(item => item.id !== event.id);
        this.setState({ videoList: newVideoList });
        }

        componentDidMount(){
            console.log("componentDidMount");
        }
        componentDidUpdate(){
            const newVideo = videoDetails.find(video => video.id === this.props.match.params.id);
            console.log(newVideo)
        }
        componentWillUnmount(){
            const newVideoList = videoDetails.find(video => video.id === this.props.match.params.id);
            console.log("componentWillUnmount")

        }

    render() {
    return (
        <>
           
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
                        <MediaList data={this.state.videoList} onClick={() => this.handleClick()} />
                    </div>
                </div>
        </>
    );
  }
}

export default HomePage;