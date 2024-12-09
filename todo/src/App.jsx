
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  let todos = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : { sahifasiz: [] };

  let todoDued = JSON.parse(localStorage.getItem("listDued"))
    ? JSON.parse(localStorage.getItem("listDued"))
    : {};

  function setTodos() {
    localStorage.setItem("list", JSON.stringify(todo));
  }

  function setTodoDoeds() {
    localStorage.setItem("listDued", JSON.stringify(todoDued));
  }

  let [todo, todoDo] = useState(todos);

  const paragraph = useRef(null);
  const text = useRef(null);
  const paragInf = useRef(null);
  const textInf = useRef(null);

  return (
    <>
      <div className="wrapper w-full bg-teal-100 p-0 py-12 ">
        <div className="border-2 p-4 datas w-[600px]  flex gap-x-4 mx-auto mb-2">
          <input
            className=" p-2 border-2"
            type="text"
            placeholder="paragraph"
            ref={paragraph}
          />
          <button
            onClick={() => {
              paragraph.current.value = "";
            }}
          >
            o
          </button>
          <input
            className=" p-2 border-2"
            type="text"
            placeholder="text"
            ref={text}
          />
          <button
            onClick={() => {
              text.current.value = "";
            }}
          >
            o
          </button>
          <button
            className="border-2 p-2 rounded-md "
            onClick={() => {
              const textIn = text.current.value.replace(/\s+/g, "");
              const paragIn = paragraph.current.value.replace(/\s+/g, "");
              console.log("x");

              if (textIn) {
                console.log("z");

                if (!paragIn && !todo.sahifasiz?.includes(textIn)) {
                  const newTodos = {
                    ...todo,
                    sahifasiz: [...todo.sahifasiz, textIn],
                  };
                  todoDo(newTodos);
                  setTodos();
                  console.log("a");
                } else if (
                  paragIn != "" &&
                  !Object.keys(todo)?.includes(paragIn)
                ) {
                  const newTodos = {
                    ...todo,
                    [paragIn]: [...(todo[paragIn] || []), textIn],
                  };
                  todoDo(newTodos);
                  setTodos();
                  console.log("b");
                } else if (paragIn != "" && !todo[paragIn]?.includes(textIn)) {
                  const newTodos = {
                    ...todo,
                    [paragIn]: [...(todo[paragIn] || []), textIn],
                  };
                  todoDo(newTodos);
                  setTodos();
                  console.log("s");
                }
              }
            }}
          >
            jonatish
          </button>
        </div>
        <div className="border-2 p-4 datas w-[600px] bg-teal-100 flex flex-col gap-x-4 mx-auto">
          {Object.keys(todo).map((parag, index) => {
            return (
              <div className="border-2 p-4  " key={index}>
                <h1 className="text-left  p-3" ref={paragInf}>
                  {parag}
                </h1>
                {todo[parag].map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-3"
                    >
                      <div className="flex items-center ">
                        <p>{index + 1}.</p>
                        <p>{x}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          className="border-2 p-2 rounded-md "
                          onClick={() => {
                            




                          }}
                        >
                          Сделано
                        </button>
                        <button
                          className="border-2 p-2 rounded-md  "
                          onClick={(e) => {
                            const newTodos = {
                              ...todo,
                              [parag]: todo[parag].filter((a, b) => b != index),
                            };
                            if (
                              todo[parag].length <= 1 &&
                              parag != "sahifasiz"
                            ) {
                              delete newTodos[parag];
                            }
                            todoDo(newTodos);
                            setTodos();
                          }}
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="border-2 p-4 datas w-[600px] bg-teal-100 flex flex-col gap-x-4 mx-auto">
          <h2>Bajarildi</h2>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}


export default App;
