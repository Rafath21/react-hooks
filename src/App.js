import React from "react";
import List from "./List";
import { useState } from "react";
import Modal from "./Modal";
import { useEffect } from "react";
function App() {
  let [userData, setUserData] = useState([]);
  let [modal, setVisibility] = useState(false);
  useEffect(() => {
    fetch(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.dataseries );
        setUserData(json.dataseries);
      });
  }, []);
  return (
    <div>
      <List data={userData} />
    </div>
  );
}
export default App;
