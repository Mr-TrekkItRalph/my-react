import { useEffect, useState } from "react";
import StudentCard from "./components/student-card";
import { getStudents } from "./api";
import { Outlet } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);
  // const [count, setCount] = useState(1);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  // useEffect(() => {
  //   console.log("effect has been triggered!");
  // }, [count]);

  return (
    <main className="w-screen h-screen flex flex-wrap justify-center gap-2 overflow-auto p-5">
      {/* <button onClick={() => setCount(count + 1)}>click me</button> */}
      {students?.map((student) => (
        <StudentCard key={student.id} data={student} />
      ))}
    </main>
  );
}

export default App;
