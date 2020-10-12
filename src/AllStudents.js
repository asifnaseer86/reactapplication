import React from 'react';

function Students(props) {
return(
    <div>
        <h1>We all are the Students of {props.CollageName}</h1>
        <h1>{props.AIStudentName} is studing AI </h1>
        <h1>{props.OtherStudentName} are studing CNC</h1>
    </div>
);
}

export default Students;