import "./Employees.css"
const Employees =(props)=>{
    const indiviualOn=(employeeId)=>{
        props.indiv(employeeId);
        console.log(employeeId);
    }
    return <>
        <p style={{fontSize:"100px",fontWeight:"blod",textAlign:'center',lineHeight:'200px',height:'200px'}}>Employee List</p>
        <div>{
        props.data.map(Employee=>{
            return <li onClick={()=>{indiviualOn(Employee.id)}} style={{marginLeft:'38%',textAlign:'center',cursor:'pointer',width:'500px'}}
             role="button" >
                <b>{Employee.name} </b>from {Employee.department} department
            </li>
        })
        }</div>
        </>
}

export default Employees;