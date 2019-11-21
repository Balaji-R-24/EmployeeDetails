import React from 'react';
class Pull_Data extends React.Component
{

    componentDidMount(){
        fetch('http://localhost:5002/student1')
        .then((res)=>res.json())
        .then((data)=>console.log(data))


    }
    render(){
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}
export default Pull_Data;