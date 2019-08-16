/* eslint-disable no-unused-vars */
import Document, { Head, Main, NextScript } from "next/document";
import { getUserScript,getServerSideToken } from "../lib/auth";

export default class MyDocument extends Document{
	static async getInitialProps( ctx ){
		const props = await Document.getInitialProps( ctx );
		const userData = await getServerSideToken( ctx.req );
        
		return { ...props, ...userData };
	}
    
	render(){
		const{ user ={} } =this.props;
		return(
			<html>
				<Head/>

				<body>
					<Main/>
					<script dangerouslySetInnerHTML={{ __html: getUserScript( user ) }}/>
					<NextScript/>
				</body>
			</html>
		);

	}
}