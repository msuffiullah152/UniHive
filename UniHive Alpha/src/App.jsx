import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "./models";

function App() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState();
  const postData = async () => {
    await DataStore.save(
      new Users({
        name: "The Admin Guy's Vite Friend",
        college_level: "Senior",
        email: "zecharydouglas@testemail.com",
        password: "adfadf",
        college: "Cuny College of Staten Island",
        major: "Computer Science",
        course_interests: "Data Structures",
      })
    );
  };

  const fetchData = async () => {
    const newData = await DataStore.query(Users);
    setdata(newData);
    console.log(data);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className=" mr-3" onClick={postData}>
          Post some data
        </button>
        <button onClick={fetchData}>Fetch some data</button>
        <p></p>
      </div>
      <table className="read-the-docs">
        <tbody>
          {data &&
            data.map((model) => (
              <tr>
                <td>{model.name}</td>
                <td>{model.college_level}</td>
                <td>{model.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
