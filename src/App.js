
import Landing from "./Pages/Landing.jsx";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Comedy from "./Pages/Comedy.jsx";
import Trending from "./Pages/Trending.jsx"
import Action from "./Pages/Action.jsx"
import Horror from "./Pages/Horror.jsx"
import Romance from "./Pages/Romance.jsx"
import TrailerPage from "./Pages/TrailerPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/comedy" element={<Comedy />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/action" element={<Action />}></Route>
          <Route path="/horror" element={<Horror />}></Route>
          <Route path="/romance" element={<Romance />}></Route>
          <Route path="/:ID" element={<TrailerPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
