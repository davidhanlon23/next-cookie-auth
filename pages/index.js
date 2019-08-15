/* eslint-disable no-unused-vars */
import Layout from "../components/Layout";
import Link from "next/link";

export default function Index(){
	return(
		<Layout title="Home">
			<Link href="/profile">
				<a>Go to Profile</a>
			</Link>
		</Layout>
	);
}