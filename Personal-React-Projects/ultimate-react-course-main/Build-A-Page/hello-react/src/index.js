import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoname="sem.jpeg" />
      <div className="data">
        <Intro
          name="Semhal Berhe"
          content="Full Stack Web developer. when im not coding I enjoy singing and working out. I also love to cook and just read my bible."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = (props) => {
  return (
    <img className="avatar" src={props.photoname} alt="Semhal Berhe"></img>
  );
};

const Intro = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.content}</p>
    </div>
  );
};

const SkillList = (props) => {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="🤝" color="blue" />
      <Skill name="Javascript" emoji="🤌" color="red" />
      <Skill name="Web Design" emoji="👏" color="yellow" />
      <Skill name="Git and Github" emoji="🙌" color="pink" />
      <Skill name="React" emoji="🤛" color="orange" />
      <Skill name="Svelte" emoji="👍" color="green" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
