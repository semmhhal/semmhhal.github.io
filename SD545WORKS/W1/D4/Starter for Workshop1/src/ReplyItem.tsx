import avatar from "./images/bozai.png";

type Comment = {
  rpid: string | number;
  user: {
    avatar: string;
    uname: string;
    uid: string;
  };
  ctime: string;
  like: number;
  content: string;
  // Add other properties if any
};
type Props = {
  item: Comment;
  onDelete: (rpid: number | string) => void;
  user: { uid: string };
  avatar: string;
};

function ReplyItem(prop: Props) {
  const { item, onDelete, user, avatar } = prop;

  const handleDelete = () => {
    onDelete(item.rpid);
  };
  return (
    <div className="reply-item" key={item.rpid}>
      {/* profile */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt="Profile"
            src={item.user.avatar}
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{item.ctime}</span>
            {/* total likes */}
            <span className="reply-time">Like:{item.like}</span>

            {item.user.uid === user.uid && (
              <span className="delete-btn" onClick={handleDelete}>
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
