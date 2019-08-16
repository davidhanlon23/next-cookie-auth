// eslint-disable-next-line no-unused-vars
import LoginForm from "../components/LoginForm";
// eslint-disable-next-line no-unused-vars
import Layout from "../components/Layout";
import { authInitialProps } from "../lib/auth";

export default function Login ( props ){
	return (
		<Layout title="Login " {...props}>
			<LoginForm/>
		</Layout>
		
	);
}

Login.getInitialProps = authInitialProps();