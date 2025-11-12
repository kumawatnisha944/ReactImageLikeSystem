import React, { useState } from "react";
import "./style.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    setShares(shares + 1);
    alert("Post shared successfully!");
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="app-container">
      <div className="post">
      <img
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  alt="Beautiful Nature"
  className="post-img"
/>


        <h2 className="post-title">Beautiful Nature 🌿</h2>

        <div className="actions">
          <button
            onClick={handleLike}
            className={isLiked ? "liked" : ""}
          >
            ❤️ {likes}
          </button>

          <button onClick={handleShare}>🔁 {shares}</button>

          <button
            onClick={handleSubscribe}
            className={isSubscribed ? "subscribed" : "subscribe"}
          >
            {isSubscribed ? "🔔 Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="comment-section">
          <form onSubmit={handleComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>

          <div className="comments-list">
            {comments.map((comment, index) => (
              <p key={index}>💬 {comment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
