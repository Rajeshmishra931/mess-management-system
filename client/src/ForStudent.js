// import nfc from './nfc.svg';
import "./App.css";
import Scan from "./containers/Scan";
import Write from "./containers/Write";
import { useState } from "react";
import { ActionsContext } from "./contexts/context";
import { Routes, Link, Route } from "react-router-dom";
import Meal from "./components/admin/Meal";
import Header from "./components/admin/Header";
import AddStudent from "./components/admin/AddStudent";
import ShowStudent from "./components/admin/ShowStudent";

function ForStudent() {
  const [actions, setActions] = useState(null);
  const { scan, write } = actions || {};

  const actionsValue = { actions, setActions };

  const onHandleAction = (actions) => {
    setActions({ ...actions });
  };

  return (
    <div className="App">
      <div className="img"></div>
      <div className="App-container">
        <button
          onClick={() => onHandleAction({ scan: "scanning", write: null })}
          className="btn"
        >
          Scan
        </button>
        <button
          onClick={() => onHandleAction({ scan: null, write: "writing" })}
          className="btn"
        >
          Write
        </button>
      </div>
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
        {write && <Write />}
      </ActionsContext.Provider>
    </div>
  );
}

export default ForStudent;
