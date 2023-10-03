import axios from "axios";
import React from 'react';
import './editUser.scss';

class EditUser extends React.Component {

    constructor(props) {
      super(props)
      this.state = { 
         formValues: [{ id: "", name: "", email: "", mobile: "", created_at: "", updated_at: "" }]
       };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

   

    handleChange(i, e) {
      let formValues = this.state.formValues;
      formValues[i][e.target.name] = e.target.value;
      this.setState({ formValues });
    }
  
 

    //Here, compare to find id associated with name
    getUsers() {
        let formValues = this.state.formValues; 
        let foundId = 0;
        axios.get('http://localhost:4300/backend/index').then(function(response) {
            console.log(response.data);
            console.log(formValues[0].name);
            console.log(response.data[1].name);

            console.log(response.data.length);
            for(let i = 0; i < response.data.length; i++){
              console.log(response.data[i].name)
              if(response.data[i].name === formValues[0].name){

                foundId = response.data[i].id;
                response.data[i].email = formValues[0].email;
                response.data[i].mobile = formValues[0].mobile;
                console.log("Match", foundId );
                console.log(response.data[i]);


        
                axios.put(`http://localhost:4300/backend/index/${i}`, response.data[i])    
                .then(function(response){
                    console.log(response.data);
                    console.log("Updated");     
                });
                //updateNow(foundId, formValues);


              }
            }    
        });
    }
    /*
    updateNow(i, d) {
      axios.put(`http://localhost:4300/backend/index/${i}`, response.data[i])    
      .then(function(response){
          console.log(response.data);
          console.log("Updated");     
      });
    }
    */
 
    handleSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.state.formValues));
    }
  
    render() {
  
      return (
      
          <form  onSubmit={this.handleSubmit}>
              <label>Now in EDIT Mode!</label>
            {this.state.formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <label>Name:</label>
                <input type="text" name="name" value={element.name || ""} onChange={e => this.handleChange(index, e)} />
                <label>Email:</label>
                <input type="text" name="email" value={element.email || ""} onChange={e => this.handleChange(index, e)} />
                <label>Mobile:</label>
                <input type="text" name="mobile" value={element.mobile || ""} onChange={e => this.handleChange(index, e)} />
                {
                  index ? 
                    <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                  : null
                }
              </div>
            ))}
            <div className="button-section">
                
                <button className="button submit" type="submit" onClick={() => this.getUsers()}>Submit Edit</button>
            </div>
        </form>
      );
    }
  }
  export default EditUser;



/*
export default function EditUser() {
    const testData = {
        id: "10",
        name: "me",
        email:  "t@hotmail.com",
        mobile: "3333333333",
        updated_at: "1111-11-11",
        created_at: "2222-22-22"
     };

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:4300/backend/index').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const confirmEdit = (id) => {
        
        testData.id = id;
        axios.put(`http://localhost:4300/backend/index/${testData.id}`, testData)    
        .then(function(response){
            console.log(response.data);
            console.log(testData);
            getUsers();
        });

    }

    const editUser = (id, name) => {
        testData.id = id;
        testData.name = name;
        console.log(testData.name);
        console.log(testData.id);
      
    }
    return (


        <div className = "editUsersArea">
            <h1>Edit Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                            
                                <button onClick={() => confirmEdit(user.id)}>Edit</button>
                            </td>
                            


                        </tr>
                        


                        
                    )}


                    
                </tbody>
           
           </table>

           <table className="inputTable">
                        <thead className = "tableHeader">
                       <td>Editing: </td> 
                        </thead>
                        <tbody>
                            <tr>
                            <th><label>Name: </label></th>
                            <td>
                            <input type="text" name="name" />   
                            </td>
                            </tr>

                             <tr>    
                             <th><label>Email: </label></th>
                             <td>    
                             <input type="text" name="email" />
                             </td>
                             </tr>

                              <tr>
                              <th><label>Mobile: </label></th>
                              <td>
                              <input type="text" name="mobile" />
                              </td>
                              </tr>

                                <tr>
                                <td colSpan="2" align="right">
                                </td>
                                </tr>

                                
                        </tbody>
                    </table> 
          

        </div>
    )
}
*/