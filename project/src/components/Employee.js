import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./Employee.css"
const Employee =(props)=>{
    return (
        <div style={{marginTop:'100px',display:'flex',justifyContent:'center'}}>
        <Card style={{width: '18rem'}}>
          <Card.Img style={{width:'400px'}} variant="top" src={props.individualData.photo}/>
          <Card.Body>
            <h1>{props.individualData.name}</h1>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>ID:{props.individualData.id}</ListGroup.Item>
            <ListGroup.Item>Start Date:{props.individualData.startDate}</ListGroup.Item>
            <ListGroup.Item>Role:{props.individualData.role}</ListGroup.Item>
            <ListGroup.Item>Department:{props.individualData.department}</ListGroup.Item>
          </ListGroup>
          <div role="button" onClick={props.home} style={{lineHeight:'30px',height:'30px',borderRadius:'20px',width:'400px',cursor:'pointer',backgroundColor:'#fff000',color:'#000',fontWeight:'bold',textAlign:'center',marginTop:"10px"}}>
            Back to Home</div>
        </Card>
        </div>
      );
}

export default Employee;