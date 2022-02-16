import CalInput from "./CalInput.js";
import CalBtn from "./CalBtn.js";
import { useState } from "react";

// let oper1 = 0;
// let oper2 = 0;
let operacion = "";
let resultado = 0;
export default function CalFrame() {
  const [operando, setOperando] = useState("");
  let [oper1, setOper1] = useState(0);
  let [oper2, setOper2] = useState(0);
  const [clickeado, setClickeado] = useState(false);
  // let clickeado = false;
  //   const [ecuac, setEcuac] = useState(0);

  // const [operando2, setOperando2] = useState("");
  function clickar(simbolo) {
    //clickeado = false;
    setClickeado(false);
    //alert(simbolo);
    //alert(simbolo);

    // console.log(simbolo);
    if (
      simbolo === "+" ||
      simbolo === "-" ||
      simbolo === "*" ||
      simbolo === "/"
    ) {
      operacion = simbolo;
      // sumar o restar
      // oper1 = operando;
      setOper1(operando);
      // alert("oper1");

      setOperando("");
      //   alert(oper1);
    } else {
      if (simbolo === "=") {
        // hacer la ecuacion
        // oper2 = operando;
        setOper2(operando);
        setOperando("");
        // setEcuac(operacion === "+" ? oper1 + oper2 : 0);
        // setEcuac(operacion === "-" ? oper1 - oper2 : 0);
        if (operacion === "+") {
          //   setEcuac(oper1.parseInt() + oper2.parseInt());
          resultado = +oper1 + +oper2;
        }
        if (operacion === "-") {
          //   setEcuac(oper1.parseInt() - oper2.parseInt());
          resultado = +oper1 - +oper2;
        }
        if (operacion === "*") {
          //   setEcuac(oper1.parseInt() - oper2.parseInt());
          resultado = +oper1 * +oper2;
        }
        if (operacion === "/") {
          //   setEcuac(oper1.parseInt() - oper2.parseInt());
          resultado = +oper1 / +oper2;
        }
        oper1 = 0;
        oper2 = 0;
        // alert(resultado);
        // alert(oper1);
        // alert(oper2);
      } else {
        if (simbolo === "C") {
          //   setEcuac(0);
          //alert(resultado);
          // console.log(operando);
          resultado = 0;
          setOperando("");
          // oper1 = 0;
          // oper2 = 0;
          setOper1(0);
          setOper1(0);
        } else {
          let aux = operando + simbolo;
          setOperando(aux);
        }
      }
      // setOper1(oper1);
      // setOper1(oper2);
    }

    //alert(operando1);
  }
  let cssButtonDg =
    "bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full"; // meto aqui clases tailwind
  let cssButtonOp =
    "bg-orange-500 hover:bg-orange-200 text-white font-bold py-2 px-4 rounded-full"; // meto aqui clases tailwind
  let cssButtonTop =
    "bg-slate-300 hover:bg-slate-100 text-white font-bold py-2 px-4 rounded-full"; // meto aqui clases tailwind
  let cssButtonRow =
    "pl-[3px] bg-gray-900 h-56 grid grid-cols-4 gap-1 content-around board-row";
  let cssButtonRow3b =
    "pl-[3px] bg-gray-900 h-56 grid grid-flow-col auto-cols-max gap-1 content-around board-row";

  let cssFrame = "ml-80 frame";
  return (
    <div>
      <div className={cssFrame}>
        <CalInput entrada={resultado === 0 ? operando : resultado} />
        <div className={cssButtonRow}>
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonTop}
            simbolo={"C"}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonTop}
            simbolo={"+/-"}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonTop}
            simbolo={"%"}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonTop}
            simbolo={"/"}
            func={clickar}
          />
        </div>
        <div className={cssButtonRow}>
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={1}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={2}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={3}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonOp}
            simbolo={"*"}
            func={clickar}
          />
        </div>
        <div className={cssButtonRow}>
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={4}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={5}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={6}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonOp}
            simbolo={"-"}
            func={clickar}
          />
        </div>
        <div className={cssButtonRow}>
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={7}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={8}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={9}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonOp}
            simbolo={"+"}
            func={clickar}
          />
        </div>
        <div className={cssButtonRow3b}>
          {/* <CalBtn clickeado = {clickeado} estilos={cssButtonDg} simbolo={"."} func={clickar} /> */}
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg}
            simbolo={"."}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonDg + " w-[177px]"}
            simbolo={0}
            func={clickar}
          />
          <CalBtn
            setClickeado={setClickeado}
            clickeado={clickeado}
            estilos={cssButtonOp}
            simbolo={"="}
            func={clickar}
          />
        </div>
      </div>
    </div>
  );
}
