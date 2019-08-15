/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
import{ loginUser } from "../lib/auth";
// eslint-disable-next-line no-unused-vars
import Router from "next/router";

// eslint-disable-next-line no-undef
class LoginForm extends React.Component {
    state ={
    	email:"Sincere@april.biz", password:"hildegard.org", error:"", isLoading:false
    };
    handleChange = event => {
    	this.setState( { [event.target.name]: event.target.value } );
    }

    handleSubmit = event =>{
    	const { email,password }= this.state;
    	event.preventDefault();
    	this.setState( { error:"" , isLoading:true } );
    	loginUser( email,password ).then( ()=>{
    		Router.push( "/profile" );
    	} )
    		.catch( this.showError );
    	
    };
	
	showError = err =>{
		console.error( err );
		const error =err.response && err.response.data || err.message;
		this.setState( { error, isLoading:false } );
	}
   
	render() {
    	const { email, password,error, isLoading }=this.state;
    	return (
    		<form onSubmit={this.handleSubmit}>
    			<div>
    				<input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange}/>
    				<input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange}/>
    			</div>

    			<button disabled={isLoading} type="submit"> {isLoading ?"Sending":"Submit"} </button>
    			{error && <div>{error}</div> }	
    		</form>
    	);
	}
}

export default LoginForm;