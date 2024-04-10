import { useState, useRef } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import ReplyItem from "./ReplyItem";

interface comment {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
  {
    rpid: 4,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content: "Follow Me",
    ctime: "10-18 09:00",
    like: 77,
  },
];
// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [commentList, setCommentList] = useState<comment[]>(
    _.orderBy(defaultList, "like", "desc")
  );
  const [activeType, setActiveType] = useState("hot");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const deleteComment = (rpid: number | string) => {
    setCommentList(commentList.filter((item) => item.rpid !== rpid));
  };

  const makePost = () => {
    const newComment = {
      rpid: uuidv4(),
      user,
      content: textareaRef.current!.value,
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };

    setCommentList([...commentList, newComment]);
    textareaRef.current!.value = "";
    textareaRef.current!.focus();
  };

  const changeActiveType = (type: string) => {
    setActiveType(type);

    if (type === "hot") {
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };
  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{commentList.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                className={classNames("nav-item", {
                  active: tab.type === activeType,
                })}
                key={tab.type}
                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img
                className="bili-avatar-img"
                src={user.avatar}
                alt="Profile"
              />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              ref={textareaRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>

        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((item) => (
            <ReplyItem
              key={item.rpid}
              onDelete={deleteComment}
              item={item}
              user={user}
              avatar={item.user.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
