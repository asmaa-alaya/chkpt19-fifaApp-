import './App.css';
import React from 'react';
import Carou from './components/Carou';
import Carousel3d from './components/Carousel3d';

function App() {
  const players=[
    {id:1,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250011668.webp',    name:'Thibaut Courtois',  team:'Real Madrid',         position:'🧤 Goalkeeper',infos:'The most dominant big-game keeper when fit. Insane reflexes.'},

    {id:2,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250088061.webp',    name:'Achraf Hakimi',     team:'PSG',                 position:'🛡️ Defense (RB)',infos:'Speed, stamina, goals, assists — modern fullback perfection.'},
    {id:3,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250058220.webp',    name:'Rúben Dias',        team:'Man City',            position:'🛡️ Defense (CB)',infos:'Defensive leader, elite positioning, boss mentality.'},
    {id:4,img:'https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250127439.webp', name:'William Saliba',    team:'Arsenal (CB)',        position:'🛡️ Defense',infos:'Calm, strong, fast — one of the best defenders on the planet right now.'},
    {id:5,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250128120.webp',    name:'Alphonso Davies',   team:'Bayern Munich (LB)',  position:'🛡️ Defense',infos:'Explosive pace + attacking threat from the left.'},

    {id:6,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250082664.webp',    name:'Rodri',             team:'Man City',position:'⚙️ Midfield (CDM)',infos:'The brain of the game. Controls tempo, scores clutch goals. World-class.'},
    {id:7,img:'https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250128377.webp', name:'Jude Bellingham',   team:'Real Madrid',position:'⚙️ Midfield (CM)',infos:'Box-to-box monster. Goals, assists, leadership — already elite.'},
    {id:8,img:'https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250008901.webp', name:'Kevin De Bruyne',   team:'Man City',position:'⚙️ Midfield (CM)',infos:'When fit, still the best passer in football. Vision is unreal.'},

    {id:9,img:'https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-09/mohamed-salah-2025-26-body-shot-straight_1eed4e039fbd8ced5f98958fdf8b6235.png?itok=hWA7K4zm',name:'Mohamed Salah',team:'Liverpool',position:'🔥 Attack (RW)',infos:'Consistency machine. Goals every season, still top level.'},
    {id:10,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250103758.webp',    name:'Erling Haaland',    team:'Man City',position:'🔥 Attack (ST)',infos:'Pure striker dominance. Strength, positioning, insane goal numbers.'},
    {id:11,img:'https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250121533.webp',    name:'Vinícius Júnior',   team:'Real Madrid',position:'🔥 Attack (LW)',infos:'Explosive dribbling, big-match player, constant danger.'},


  ];
  return (
    <div className='app'>
      <Carou 
      players={players}
      />
      <Carousel3d/>
     
    </div>
  );
}

export default App;

