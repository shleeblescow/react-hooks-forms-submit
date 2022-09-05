import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      firstName: firstName,
      lastName: lastName
    }
    const dataArray = [
      ...submittedData,
      formData
    ]
    //props.sendFormDataSomewhere();
    setSubmittedData(dataArray)
    setFirstName("") // clear input field
    setLastName("") // clear input field
  }

  const listOfSubmissions = submittedData.map(((eachUser, index) => {
    return (
      <div key={index + 1}>
        {index+1}: {eachUser.firstName} {eachUser.lastName}
      </div>
    )
  }))

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <p>Previous Submission</p>
      <p>{listOfSubmissions}</p>
    </>
  );
}

export default Form;
