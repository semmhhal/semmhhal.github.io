import "./App.scss";
import avatar from "./images/bozai.png";
import App1 from "./App-Copy";
import { ChangeEvent, useRef, useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

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

type Props = {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
  deleteComment: (rpid: number | string) => void;
};

function ReplyItems(props: Props) {
  const { rpid, user, content, ctime, like, deleteComment } = props;

  return (
    <div className="reply-item">
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" src={user.avatar} alt="Profile" />
        </div>
      </div>
      <div className="content-wrap">
        <div className="user-info">
          <div className="user-name">{user.uname}</div>
        </div>
        <div className="root-reply">
          <span className="reply-content">{content}</span>
          <div className="reply-info">
            <span className="reply-time">{ctime}</span>
            <span className="reply-time">Like: {like}</span>
            {props.user.uid === user.uid && (
              <span className="delete-btn" onClick={() => deleteComment(rpid)}>
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Comment List data
const defaultList: any = [
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
    rpid: 2,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content: "follw me",
    ctime: "10-19 09:00",
    like: 22,
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
  const commentList = useRef<comment[]>(_.orderBy(defaultList, "like", "desc"));
  const activeType = useRef<string>("hot");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const deletecomment = (rpid: number | string) => {
    commentList.current = commentList.current.filter(
      (item: any) => item.rpid !== rpid
    );
  };

  const changeActiveType = (type: string) => {
    activeType.current = type;

    if (type === "hot") {
      commentList.current = _.orderBy(commentList.current, "like", "desc");
    } else {
      commentList.current = _.orderBy(commentList.current, "ctime", "desc");
    }
  };

  const makePost = () => {
    const newComment = {
      rpid: uuidv4(),
      user,
      content: textareaRef.current!.value,
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };

    commentList.current = [...commentList.current, newComment];
    textareaRef.current!.value = "";
    textareaRef.current!.focus();
  };
  return (
    <div className="app">
      Nav Tab
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                key={tab.type}
                className={classNames("nav-item", {
                  active: tab.type === activeType.current,
                })}
                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}

            {/* /* the other way of doing this part is:
           {
              tabs.map(tab=>{
                let classnames=''
                if(tab.type===activeType){
                  classnames='nav-item active'
                }else{
                  classnames='nav-item'
                }
                return(
                  <span key={tab.type} className={'nav-item'} onClick={()=>setActiveType(tab.type)}>{tab.text}</span> 
                )
              })
            } */}
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
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
          {commentList.current.map((elements: any) => (
            <ReplyItems
              key={elements.rpid}
              rpid={elements.rpid}
              user={elements.user}
              content={elements.content}
              ctime={elements.ctime}
              like={elements.like}
              deleteComment={deletecomment}
            />
          ))}
        </div>
      </div>
      <App1 />
    </div>
  );
};

export default App;

// This assignment builds upon Lab3 - the workshop1 forum.

// Your task is to create a new component specifically for the "reply-item" feature. Please refer to the attached lab4.png for inspiration.

// To complete this assignment, define the new component within the "App.tsx" file, in the same location as the "App" Component. We will explore organizing components into separate files in Lecture 6.

// You are required to implement this functionality in one way:

// use parent-to-children communication
// Wishing you a wonderful weekend.
