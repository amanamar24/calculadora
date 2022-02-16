import { useState } from "react";

export default function CalBtn({
  clickeado,
  setClickeado,
  estilos,
  simbolo,
  func,
}) {
  // const [mensj, setMensj] = useState("Alert Button");
  //  const clickar = () =>
  // mensj === "Alert Button"
  //   ? setMensj("hasclickado")
  //   : setMensj("Alert Button");
  //   const clickar = (simbolo) => {
  //     alert(simbolo);
  //   };
  // const [clickeadoChild, setClickeadoChild] = useState(clickeado);

  let estilosClick = estilos.replace(
    "bg-orange-500 hover:bg-orange-200",
    "bg-orange-200"
  );

  function clicks() {
    console.log(clickeado, simbolo);
    // ternario classname
    setClickeado(true);
    // clickeado = true;
  }
  estilos = estilos + " square";
  return (
    <button
      className={!clickeado ? estilos : estilosClick}
      // className={!operacion !==simbolo ? estilos : estilosClick}
      onClick={() => {
        func(simbolo);
        clicks();
      }}
    >
      {simbolo}
    </button>
  );
}
