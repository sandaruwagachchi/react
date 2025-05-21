
function Student(props){
return(
    <div className="student">
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
)
//props to pass (export) values from a parent component to a child component.this parent component is App.jsx
}
export default Student;