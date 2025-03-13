import './Mark.css'

function Mark({mark, idStudent, idMark, updateStudents}) {

    function handleSelectChange(e) {
        updateStudents(idMark, idStudent, +e.target.value);
    }

    return (
        <div className="mark-wrapper">
            <p className="mark-p">{mark}</p>
            <select
                className="mark-select"
                value={mark}
                onChange={handleSelectChange}
                name={`stud:${idStudent}=>${idMark}`}
            >
                <option value="-">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
    )
}

export default Mark