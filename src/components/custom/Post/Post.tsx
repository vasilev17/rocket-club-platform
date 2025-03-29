import { useState } from 'react';
import './Post.css';
import avatarImage from '../../../assets/avatar_default.png';

function Post({ post }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { 
          id: comments.length + 1, 
          username: 'Current User', 
          content: newComment,
          avatar: avatarImage 
        }
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <img 
            src={post.avatar || avatarImage}
            alt={post.username} 
            className="avatar"
          />
          <span className="username">{post.username}</span>
        </div>
      </div>

      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-text">{post.content}</p>
      </div>

      <div className="post-actions">
        <button 
          className={`action-button like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <span className="action-icon">♥</span>
          <span className="action-count">{likes}</span>
        </button>

        <button 
          className="action-button comment-button"
          onClick={() => setIsCommentsOpen(!isCommentsOpen)}
        >
          <span className="action-icon">💬</span>
          <span className="action-count">{comments.length}</span>
        </button>
      </div>

      {isCommentsOpen && (
        <div className="comments-section">
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <img 
                  src={comment.avatar || avatarImage}
                  alt={comment.username}
                  className="comment-avatar"
                />
                <div className="comment-content-wrapper">
                  <div className="comment-header">
                    <span className="comment-username">{comment.username}</span>
                  </div>
                  <p className="comment-content">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="comment-input"
            />
            <button type="submit" className="submit-comment">Post</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Post;
