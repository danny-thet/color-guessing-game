import type { NextPage } from "next";
import { ColorGuessingMain } from "../src/components/ColorGuessingMain";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<main className={styles.main}>
			<ColorGuessingMain />;
		</main>
	);
};

export default Home;
