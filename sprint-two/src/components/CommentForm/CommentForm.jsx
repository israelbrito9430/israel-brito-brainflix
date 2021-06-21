import React from 'react';
import UserPic from '../../assets/images/Mohan-muruge.jpg'
import './CommentForm.scss'

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  } 

  handleChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleClick = () => {
    this.props.handleClick(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="CommentForm">
        <div className="CommentForm__container">
          <img className="CommentForm__container__pic" src={UserPic} alt="User Pic" />
          <div className="CommentForm__container__box">
            <label className="CommentForm__container__box__label">JOIN THE CONVERSATION</label>
            <textarea 
              className="CommentForm__container__box__input"
              type="text" 
              placeholder="Write comment here"
              value={this.state.value}
              onChange={this.handleChange} />
          </div>
        </div>
        <button className="CommentForm__button blueButton" onClick={this.handleClick}>COMMENT</button>
      </div>
    )
  }
}

export default CommentForm;