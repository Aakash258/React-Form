/*import { useState } from 'react'
function Body(){

    const [firstname, setText] = useState('')
    const [lastname, setLastname] = useState('')
    const [resume,setfilename] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
        setLastname('')
        setfilename('')
        localStorage.setItem('First Name', firstname);
        localStorage.setItem('Last Name', lastname);
        localStorage.setItem('filename', resume.replace("C:\\fakepath\\", "/Users/aakashagrawal/Desktop/my-app/src/components/"));

    }
    return(
        <div className="form1">
            <form onSubmit={this.submit}>
            <div className="form-row">
    <div className="form-group col-md-6">
      <label for="name1">First Name</label>
      <input type="text" className="form-control" id="name1" placeholder="First Name" value={this.state.name}
          onChange={this.onnamechange}/>
    </div>
    <div className="form-group col-md-6">
      <label for="lastname1">Last Name</label>
      <input type="text" className="form-control" id="lastname1" placeholder="Last Name" value={this.state.address}
          onChange={this.onaddresschange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={this.state.phno} onChange={this.onphnochange} />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <label for="exampleFormControlFile1">Upload Your CV here</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" value={resume}
          onChange={this.onresumechange} />
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <input type="submit" className="btn btn-primary btn-block" value="Save" />
</form>
        </div>
    )
}
export default Body;*/