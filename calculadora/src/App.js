// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           MAR-ONE IS THE BEST
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>
//         This is my first <br />
//         page
//       </p>
//     </div>
//   );
// }
// import HelloWorld from "./HelloWorld.js";
// export default function App() {
//   return (
//     <div>
//       <HelloWorld />
//     </div>
//   );
// }
// import Hello from "./Hello.js";
// export default function App() {
//   let jhon = "Jhon";
//   return (
//     <div>
//       <Hello nom="Pers" />
//       <Hello nom={jhon} />
//       <Hello nom={<strong>Paul</strong>} />
//     </div>
//   );
// }
// import Box from "./Box.js";
// export default function App() {
//   return (
//     <Box>
//       <Box>
//         <h1>HelloBox</h1>
//       </Box>
//     </Box>
//   );
// }
// function mateixaLinia() {
//   return 1 + 2;
// }
// function liniaPartida() {
//   return 1
//   + 2;
// }

// function diferentLinia() {
//   return
//     1 + 2
//  }
//  function parentesis() {
//   return (
//     1 + 2
//   )
//  }

// alert(liniaPartida());
// export default function HelloWorld() {
//   let helloWorld = <h1>Hello World1</h1>;
//   console.log(helloWorld);
//   return helloWorld;
// }

// import Comment from "./comment.js";
// export default function App() {
//   return (
//     <Comment
//       author={{
//         avatarUrl:
//           "https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg",
//         name: "Ward Cunninghan",
//       }}
//       text="Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community."
//       date="June 2009"
//     />
//   );
// }

// 09/02/2022 pol calculadora
import "./App.css";
import CalFrame from "./CalFrame";
export default function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline shadow-xl">
        calculador apple
      </h1>
      <CalFrame />
    </div>
  );
}
