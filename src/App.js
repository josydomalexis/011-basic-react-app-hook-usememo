import logo from "./logo.svg";
import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const totalApple = 10;
  const totalOrange = 30;
  const totalBanana = 40;
  const [apple, setApple] = useState(totalApple);
  const [orange, setOrange] = useState(totalOrange);
  const [banana, setBanana] = useState(totalBanana);
  const [soldFruits, setSoldFruits] = useState(0);

  const handleApple = () => {
    if (apple != 0) {
      setApple(apple - 1);
      setSoldFruits(soldFruits + 1);
    }
  };

  const handleOrange = () => {
    if (orange != 0) {
      setOrange(orange - 1);
      setSoldFruits(soldFruits + 1);
    }
  };

  const handleBanana = () => {
    if (banana != 0) {
      setBanana(banana - 1);
      setSoldFruits(soldFruits + 1);
    }
  };

  const AllAppleSold = useMemo(() => {
    console.log("1 Apple sold!");
    return totalApple - apple;
  }, [apple]);

  const AllOrangeSold = useMemo(() => {
    console.log("1 Orange sold!");
    return totalOrange - orange;
  }, [orange]);

  const AllBananaSold = useMemo(() => {
    console.log("1 Banana sold!");
    return totalBanana - banana;
  }, [banana]);

  const allSoldFruits = () => {
    return soldFruits;
  };

  const style_1 = { border: "1px solid #ccc", margin: "10px auto", padding:"10px" };
  return (
    <div className="App">
      <h2>Fruits to sell</h2>
      <table style={style_1}>
        <thead>
          <tr>
            <th>Apple</th>
            <th>Orange</th>
            <th>Banana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{apple}</td>
            <td>{orange}</td>
            <td>{banana}</td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleApple()}>Buy 1</button>
            </td>
            <td>
              <button onClick={() => handleOrange()}>Buy 2</button>
            </td>
            <td>
              <button onClick={() => handleBanana()}>Buy 3</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>All Sold Fruits by Name</h2>
      <table style={style_1}>
        <tr>
          <td>Apple</td>
          <td>Orange</td>
          <td>Banana</td>
        </tr>
        <tr>
          <td>{AllAppleSold}</td> 
          <td>{AllOrangeSold}</td>
          <td>{AllBananaSold}</td>
          {/* this functions re-execute each time react re-render, but state does not 
          change. useMemo help to prevent. using dependency solve the proplem */}
        </tr>
      </table>

      <h2>Total Sold Fruits</h2>
      <table style={style_1}>
        <tr>
          <td>All Sold Fruits</td>
        </tr>
        <tr>
          <td>{allSoldFruits()}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
