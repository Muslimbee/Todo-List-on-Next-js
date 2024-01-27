
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mainTask, setMainTask] = useState([])

  const sumbitHandleder = (e) => {
    e.preventDefault()
    setMainTask([...mainTask , {title, desc}])
    console.log(mainTask);



    setTitle('')
    setDesc('')   
}

const deleteHandleder = (i) => {
    let copyTast = [...mainTask]
    copyTast.splice(i,1)
    setMainTask(copyTast)
}



  let renderTast = <h2>No Tast Availabde</h2>

  if(mainTask.length > 0 ) {
    renderTast = mainTask.map((t,i) => {
      return (
       <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between  w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
          onClick={() => {
            deleteHandleder(i)
          }}
          className=" bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
      )
 })
  }

  return (
    <>
      <h1 className=" bg-black text-white p-5 text-5xl font-bold text-center">My Todo List</h1>
      <form onSubmit={sumbitHandleder} >
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-2" 
        placeholder="Enter Title here "
        value={title}
        onChange={(e)=> {
             setTitle(e.target.value)          
        }}
        />
        <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-2" 
        placeholder="Enter Descroption here "
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value)
        }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded  m-5">Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
          <ul>
            {renderTast}
          </ul>
      </div>
    </>
  );
}
