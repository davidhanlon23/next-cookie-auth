import axios from "axios";

axios.defaults.withCredentials =true;


export const getServerSideToken = ( req ) =>{
	//const { signedCookies }= req||{};
	//const { signedCookies } = {} || req ;
	const { signedCookies = {} } = req || {};
	// let { signedCookies }= {};

	// if( req ){
	// 	signedCookies = req;
	// }
	//console.log( "SignedCookies: "+signedCookies );
	
	if( !signedCookies ){
		return{};
	}
	else if( !signedCookies.token ){
		return{};
	}
	else{
		return { user:signedCookies.token };
	}


};


export const getClientSideToken = () =>{
	if( typeof window !=="undefined" ){
		const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
		return { user };
	}
	return { user:{} };
};

const WINDOW_USER_SCRIPT_VARIABLE="__USER__";
export const getUserScript = user =>{
	return `${WINDOW_USER_SCRIPT_VARIABLE}= ${JSON.stringify( user )}`;
};



export const authInitialProps =()=>( { req } )=>{
	const auth = req ? getServerSideToken( req ) : getClientSideToken();
	return { auth };
};



export const loginUser = async ( email,password )=>{
	const { data } = await axios.post( "/api/login",{ email,password } );
	if( typeof window !=="undefined" ){
		window[WINDOW_USER_SCRIPT_VARIABLE]= data ||{};
	}
};

export const getUserProfile = async () =>{
	const { data } = await axios.get( "/api/profile" );
	return data;
};
