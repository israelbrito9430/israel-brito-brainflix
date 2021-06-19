import React from 'react';

// Data
// import videos from '../Data/videos.json'
import videoDetails from '../Data/video-details.json'

// Components
import Header from '../components/Header/Header'
import MediaCard from '../components/MediaCard/MediaCard'
import MainPhoto from '../components/MainPhoto/MainPhoto'
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import MediaList from "../components/MediaList/MediaList";
import VideoUpload from '../components/VideoUpload/VideoUpload'

// api
import { getVideos, getVideoById } from "../api/videoAPI";

class HomePage extends React.Component {

    state = {
        current: videoDetails[0],
        videoList: [],
    };

    componentDidMount() {
        getVideos().then((res => {
            this.setState({ videoList: res });
        }));

        getVideoById('1af0jruup5gu').then((res => {
            console.log(res)
        }));


    };

    handleClick = (event) => {
        const newVideo = videoDetails.filter(item => item.id === event.id)[0];
        this.setState({ current: newVideo });

        const videosCopy = this.state.videoList;

        const newVideoList = videosCopy.filter(item => item.id !== event.id);
        this.setState({ videoList: newVideoList });
    };

    render() {
        return (
            <>
                <Header />
                <MainPhoto video={this.state.current} />
                <div className="container">
                    <div className="currentVideo">
                        <MediaCard video={this.state.current} />
                        <div className="quantityComments">{this.state.current.comments.length} Comments</div>
                        <CommentForm />
                        <div className="comments">
                            {this.state.current.comments.map(comment => (
                                <CommentList key={comment.id} data={comment} />
                            ))}
                        </div>
                    </div>
                    <div className="suggestions">
                        <div className="suggestions__title">NEXT VIDEO</div>
                        <MediaList data={this.state.videoList} click={this.handleClick.bind(this)} />
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;