import SingleComment from './SingleComment.jsx';

function CommentList({ comments, deleteComment, editComment }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment._id} className="mb-3" style={{ width: '50%', display: 'inline-block' }}>
          <SingleComment
            comment={comment}
            deleteComment={deleteComment}
            editComment={() => editComment(comment)}
          />
        </div>
      ))}
    </div>
  );
}

export default CommentList
