import React from 'react';
import Students from './AllStudents';
import './App.css';

function App() {
  return (
    <div className='App'>
  <Students CollageName='PIAIC' AIStudentName = 'Asif' OtherStudentName='All Others' />
  <hr />
  <Students CollageName='PNY' AIStudentName = 'Zubair' OtherStudentName='Nazia and Ali' />
  <hr />
  <Students CollageName='PNY' AIStudentName = 'Aliya' OtherStudentName='Wahab and Arham' />
  </div>
    );
    
  
}

export default App;
