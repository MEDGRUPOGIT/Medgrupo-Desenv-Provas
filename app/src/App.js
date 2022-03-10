import React from 'react';
import Card from "./components/Card/Card";
import cardInfo from "./utils/cardInfo";

function App() {
  const randomWeek = Math.round(Math.random() * 14);

  return (
    <main className="main--container">
      {
        cardInfo.map((info) => (
          <Card key={ info.week } props={ [info, randomWeek] } />
        ))
      }
    </main>
  );
}

export default App;
