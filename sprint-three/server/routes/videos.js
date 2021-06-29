const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const videoDetail = require("../data/video-details.json");

router.get('/', (_req, res) => {
    res.status(200).json(videos);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    for (let video of videoDetail) {
        if (video.id === id) {
            res.json(video);
            return;
        }
    }
    res.status(404).send('Video not found');
});

router.post('/', (req, res) => {
    const video = req.body;
    videos.push(video);
    videoDetail.push(video);
    res.send(video);
});

router.post('/:id/comments', (req, res) => {
    const id = req.params.id;

    for (let video of videoDetail) {
        if (video.id === id) {
            const comment = req.body;
            video.comments.push(comment);
            res.json(comment);
            return;
        }
    }
});

router.delete('/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;

    for (let video of videoDetail) {
        if (video.id === videoId) {
            video.comments = video.comments.filter(comment => {
                if (comment.id !== commentId) {
                    return true;
                }
                return false;
            });
        }
    }
    res.send('Video is deleted');
});

module.exports = router;