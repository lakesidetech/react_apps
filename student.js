import React from 'react';
class Student extends React.Component {
    constructor (props) {
      super(props);
      this.state={
      name: "Ruth",
      studentID: 1009,
      year:2019,
      };
    }
    render()
    {
      return (<div>
        <p style={{color:"green"}}>My Name is  {this.state.name}    
      {} and my Student_ID is {} {this.state.studentID}
      {} from {this.state.year} at PODII academy {2+2}.</p>
            </div>
  
      );
    }
  }
  export default Student;