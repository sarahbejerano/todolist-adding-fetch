
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Todos = props => {
  //initialize the tasks variable to an empty array and hook it to setTasks function
  const [tasks, setTasks] = useState(null);
  //this function useEffect will run only one time, when the component is finally lodaded the first time.
  useEffect(
    () =>
      // here i fetch my todos from the API
      fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
        .then(r => r.json()) //convert incoming JSON formated response into an object
        .then(data => setTasks(data)), //here it re-set the variable tasks with the incoming data
    [] // <---- thanks to this empty array the use effect will be called only once
  );
  return (
    <div>
      <input
        onKeyUp={e =>
          //listen to the key up and wait for the return key to be pressed (KeyCode === 13)
          e.keyCode === 13 &&
          setTasks(tasks.concat({ label: e.target.value, done: false }))
        }
      />
      <ul>
        {tasks === null
          ? "Loading..."
          : tasks.map(t => (
              <li>
                {t.label} ({t.done ? "done" : "not done"})
              </li>
            ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<Todos />, document.getElementById("root"));

