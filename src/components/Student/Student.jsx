import './Student.css'

import Mark from '../Mark/Mark.jsx'

function Student({student, updateStudents}) {
    const {id, first_name, last_name, marks, photo} = student

    return (
        <div className="student-item">
            <div className="student-photo-wrapper">
                <img className="student-photo" src={photo} alt={`${first_name} ${last_name}`}/>
            </div>
            <div className="student-info">
                <h2>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                </h2>
            </div>
            <div className="student-marks">
                {
                    marks.map((mark, i) => {
                        return (
                            <Mark key={i} mark={mark} idStudent={id} idMark={i} updateStudents={updateStudents} />
                        )
                    })
                }
            </div>
            <div className="student-add-mark">
                <Mark mark="-" idStudent={id} idMark={-1} updateStudents={updateStudents}/>
            </div>
        </div>
    )
}

export default Student