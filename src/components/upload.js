import React, { Component } from 'react';
class UserData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      state:'',
      graduation:'',
      email:'',
      name:'',
      city:'',
      resume:'',
      address:'',
      phno:'',
    }
    this.submit = this.submit.bind(this);
  }
  onphnochange=(e)=>{
    this.setState({
      phno:e.target.value
    })
  }
  onnamechange=(e)=>{
    this.setState({
      name:e.target.value
      })
  }
  oncitychange=(e)=>{
    this.setState({
      city:e.target.value
      })
  }
  onaddresschange=(e)=>{
    this.setState({
      address:e.target.value
      })
  }
  onresumechange=(e)=>{
    let resume=e.target.files[0]
    let reader=new FileReader();
    reader.onload=(e)=>{
    this.setState({
    resume:reader.result
    })
    }
    reader.readAsDataURL(resume);
    console.log(this.state.resume)

  }
  onstateChange=(e)=>{
    this.setState({
    state:e.target.value
    })
    }
    ongraduationChange=(e)=>{
    this.setState({
    graduation:e.target.value
    })
    }
    onemailChange=(e)=>{
    this.setState({
    email:e.target.value
    })
    }
    submit(e){
      e.preventDefault();
      console.log(this.state);
      var data=localStorage.getItem('user');
      console.log(data);
      var userdata=data?JSON.parse(data):[];
      userdata.push(this.state);
      localStorage.setItem('user',JSON.stringify(userdata));
  
      this.setState({
        state:'',
        graduation:'',
        email:'',
        name:'',
        city:'',
        resume:'',
        address:'',
      })
  
    }
  render() {
    
    return (
      
      <div>
           <div className="form1">
            <form onSubmit={this.submit}>
            <div className="form-row">
    <div className="form-group col-md-6">
      <label>Name</label>
      <input type="text" className="form-control" id="name1" placeholder="Full Name" value={this.state.name}
          onChange={this.onnamechange}/>
    </div>
    <div className="form-group col-md-6">
      <label >Phone No.</label>
      <input type="number" className="form-control" id="lastname1" placeholder="Phone No." value={this.state.phno}
          onChange={this.onphnochange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label >Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={this.state.email} onChange={this.onemailChange} />
    </div>
    <div className="form-group col-md-6">
      <label>Graduation Percentage</label>
      <input type="number" className="form-control" id="inputPassword4" placeholder="Graduation Percentage" value={this.state.graduation} onChange={this.ongraduationChange}/>
    </div>
  </div>
  <div className="form-group">
    <label>Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.address} onChange={this.onaddresschange}/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>City</label>
      <input type="text" placeholder="City" className="form-control" id="inputCity" value={this.state.city} onChange={this.oncitychange}/>
    </div>
    <div className="form-group col-md-6">
      <label>State</label>
      <input type="text" placeholder="State" className="form-control" id="inputZip" value={this.state.state} onChange={this.onstateChange} />
    </div>
  </div>
  <div className="form-group">
    <label >Upload Your CV here</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"
          onChange={this.onresumechange} />
  </div>
  <input type="submit" className="btn btn-primary btn-block" value="Save" />
</form>
        </div>
</div>
    )
  }
}

export default UserData;