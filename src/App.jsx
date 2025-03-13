import './App.css'

import StudentsJSON from './assets/StudentsJSON.jsx';
import StudentList from "./components/StudentList/StudentList.jsx";
import Student from "./components/Student/Student.jsx";
import {useState} from "react";



function App() {
    const [students, setStudents] = useState(JSON.parse(StudentsJSON));

    function updateStudents(idMark, idStudent, newMark) {
        console.log(idMark, idStudent, newMark);
        
        const newStudents = students.map(student => {
            if (student.id === idStudent) {
                if (isNaN(newMark)) {
                    student.marks.splice(idMark, 1);
                } else if (idMark === -1){
                    student.marks.push(newMark);
                } else {
                    student.marks[idMark] = newMark;
                }
            }
            return student
        })
        setStudents(newStudents);
    }

    return (
        <StudentList>
            {
                students.map((student) => {
                    return (
                        <Student key={student.id} student={student} updateStudents={updateStudents} />
                    )
                })
            }
        </ StudentList>
    )
}

export default App
