/* eslint-disable no-unused-vars */
import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";
export default function Index( props ){
	return(
		<Layout title="Home" {...props}>
			<Link href="/profile">
				<a>Go to Profile</a>
			</Link>
		</Layout>
	);
}

Index.getInitialProps = authInitialProps();