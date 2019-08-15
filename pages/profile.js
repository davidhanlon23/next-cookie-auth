/* eslint-disable no-mixed-spaces-and-tabs */
import { getUserProfile } from "../lib/auth";
// eslint-disable-next-line no-unused-vars
import Layout from "../components/Layout";

// eslint-disable-next-line no-undef
class Profile extends React.Component {
    
    state = { 
    	user:null
    }
    componentDidMount(){
    	getUserProfile().then( user => this.setState( { user } ) );
    }
    render() {
    	return (
    		<Layout title="Profile">
    			<pre>{JSON.stringify( this.state.user,null,2 )}</pre>
    		</Layout>
    		
    	);
    }
}

export default Profile;