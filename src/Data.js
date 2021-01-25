import React, { Component } from 'react'
class ShowData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:'',
             name:'',
             address:'',
             city:'',
             resume:'',
             array:[],
             ten:'',
             twelve:'',
             exp:'',
             skill:'',


        }
    }
    componentDidMount(){
        let data=JSON.parse(localStorage.getItem("user"));
        
                console.log(data[0].name);
                this.setState({
                    array:data
                })
            }
            render() {
                const ad=this.state.array.map((res) =>
                <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{res.name}</h5>
    <p className="card-text">Address : {res.address}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Contact No. : {res.phno}</li>
    <li className="list-group-item">E-Mail : {res.email}</li>
    <li className="list-group-item">City : {res.city}</li>
  </ul>
  <div className="card-body">
  <a href={res.resume} download>Click to download resume</a>
  </div>
  <br></br>
  <hr></hr>
</div>);
return(
<div>
{ad}
</div>
)
}
}
export default ShowData;