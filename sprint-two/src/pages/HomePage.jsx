import React from 'react';
import { withRouter } from "react-router";

// Data
// import videos from '../Data/videos.json'
// import videoDetails from '../Data/video-details.json'

// Components
import Header from '../components/Header/Header'
import MediaCard from '../components/MediaCard/MediaCard'
import MainPhoto from '../components/MainPhoto/MainPhoto'
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import MediaList from "../components/MediaList/MediaList";
import VideoUpload from '../components/VideoUpload/VideoUpload'

// api
import { GetVideos, GetVideoById, AddCommentById, DeleteCommentById } from "../api/videoAPI";

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            current: null,
            videoList: [],
        };
    }
    

    componentDidMount() {
        const videoId = this.props.match.params.id;
        let newList = [];

        GetVideos().then((res => {
            if(!videoId) {
                this.getVideoById(res[0].id);
                newList = res.filter(item => item.id !== res[0].id)
            } else {
                newList = res.filter(item => item.id !== videoId)
            }

            this.setState({ videoList:  newList});
        }));
    };

    componentDidUpdate(prevProps) {
        const prevVideoId = prevProps.match.params.id;
        const videoId = this.props.match.params.id;

        if (videoId !== prevVideoId){
            this.getVideoById(videoId);

            const newList = this.state.videoList.filter(item => item.id !== videoId);
            this.setState({ videoList: newList });
        }
    };

    getVideoById = (id) => {
        GetVideoById(id).then((res => {
            this.setState({ current: res});
        }));
    };

    addCommentById = (id, data) => {
        AddCommentById(id, data).then((res => {
          console.log('add: ', res);
      }));
    };

    deleteCommentById = (id) => {
        DeleteCommentById(id).then((res => {
          console.log('delete: ', res)
      }));
    };

    handleClick = (event) => {
        console.log('event: ', event);

        // const newVideo = videoDetails.filter(item => item.id === event.id)[0];
        // this.setState({ current: newVideo });

        // const videosCopy = this.state.videoList;

        // const newVideoList = videosCopy.filter(item => item.id !== event.id);
        // this.setState({ videoList: newVideoList });
    };

    render() {
        return (
            <>
            { this.state.current ? (
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
                        <MediaList data={this.state.videoList} />
                    </div>
                </div>
                </>
            ) : <p>Loading...</p>}
            </>
        );
    }
}

export default HomePage;