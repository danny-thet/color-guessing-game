import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ColorGuessingMain } from "../components/ColorGuessingMain";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return <div>loading...</div>;
	}

	return (
		<main className={styles.main}>
			<ColorGuessingMain />
		</main>
	);
};

export default Home;
