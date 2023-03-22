// imports
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// style
import style from "./index.module.scss";

const Index = () => {
	return (
		<>
			<main className={style.mainContainer}>
				<Container className={style.heroContainer}>
					<h1 className={style.title}>Dliverer app</h1>
					<Link to="/auth/login" className={style.linkContainer}>
						<Button className={style.button}>Get Started</Button>
					</Link>
				</Container>
			</main>
		</>
	);
};

export default Index;
