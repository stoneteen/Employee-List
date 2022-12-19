import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Employee from './components/Employee';
import Employees from './components/Employees';
import axios from 'axios';
import {useEffect, useState} from 'react';
// https://api.matgargano.com/employees/

function App() {

  const [loading,setLoading]=useState(true);
  const [employeeData,setemployeeData]=useState([]);
  const [individual,setindividual]=useState(null);

  const reset=()=>{
    setLoading(true);
    setemployeeData([]);
    setindividual(null);
    getData();
  }

  const getData=(id=null)=>{
    setLoading(true);
    let individual =false;
    let actualid='';
    //making sure the id is integer
    if(!!id &&parseInt(id,10)>0){
      actualid=parseInt(id,10);
    }
    if(!!id){
      individual=true;
    }
    axios.get(`https://api.matgargano.com/employees/${actualid}`)
    .then(res=>{
      setemployeeData(res.data);
      setLoading(false);
    })
  }

  useEffect(()=>{
    if(!!individual){
      getData(individual);
    }
  },[individual])

  useEffect(()=>{
    getData(); 
  },[]);

  return (
    <div className="App">
      {!!loading && <Loading />}
      {!loading && <>
        {!individual &&<Employees data={employeeData} indiv={setindividual}/>}
        {!!individual &&<Employee home={reset} individualData={employeeData}/>}
      </>}
    </div>
  );
}

export default App;
