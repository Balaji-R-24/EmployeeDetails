import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

class Receivejson extends React.Component {
  constructor(props){
    super(props);
     this.state = {
      posts: {}
    }

  }
  componentDidMount()
   {
      
    axios.get(`http://localhost:5002/student1`)
    .then(res=>{
        console.log(res.data.recordset);
        this.setState({posts:res.data.recordset})
    })
  }

  render() {

//     const subject={...this.state.posts.data};
//     const postitems=Object.values(subject).map((item,i)=>(
//     Object.values(item).map((items,i)=>(
//         Object.values(items).map((itemss,i)=>(
//         <div key={i}>
              
//                <form>
//                    username:<input type="text" value={items.usernamedb} readOnly/>
//                    password:<input type="text" value={items.passworddb} readOnly/>
//                </form>
//                 {console.log(itemss.usernamedb)}
         
            
//             </div>
//  ))))));
    const getdata={...this.state.posts}
    // for (let i in getdata){
    //   console.log(getdata[i])
    // }
    let tablerows=Object.values(getdata).map((data,i)=>(
      
      <tbody key={i} >
        <tr >
          <td>{data.Employee_Id}</td>
          <td>{data.Employee_Name}</td>
          <td>{data.Address_Line1}</td>
          <td>{data.Address_Line2}</td>
          <td>{data.City}</td>
          <td>{data.State}</td>
          <td>{data.Country_ID}</td>
          <td>{data.Department_Id}</td>
          <td>{data.Location_Id}</td>
          {/* <td>{data.Location_Id}</td>
          <td>{data.Location_Address}</td> */}
          </tr>
      </tbody>
    ))
    return(
        <div>
          <h1>hello</h1>
          <Table striped bordered hover  responsive="xl" >
              <thead >
                <tr>
                  <th>Employee_Id</th>
                  <th>Employee_Name</th>
                  <th>Address_Line1</th>
                  <th>Address_Line2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country_ID</th>
                  <th>Department_Id</th>
                  <th>Location_Id</th>
                </tr>
              </thead>
            {tablerows}
         </Table>
          
             
           
         
      </div>
    );
  }
}


export default Receivejson;
