// imports
import { Container } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// style
import style from "./login.module.scss";
// types

type InputsType = {
	email: string;
	password: string;
};

const Login = () => {
	const { handleSubmit, register } = useForm<InputsType>();

	const onSubmit: SubmitHandler<InputsType> = (values) => console.log(values);

	return (
		<Container className={style.mainContainer}>
			{/* form Container */}
			<div className={style.formContainer}>
				<h1 className={style.title}>Log In</h1>
				{/* register section */}
				<section className={style.registerSection}>
					Need a Dliver account?{" "}
					<Link to="/auth/register" className={style.link}>
						Create an account!
					</Link>
				</section>

				{/* Form Container */}
				<Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					<label>Username or Email</label>
					<input
						title="email"
						placeholder="jhondoe@domain.com"
						className={style.inputField}
						type="email"
						{...register("email", {
							required: true,
						})}
					/>
					<label>Password</label>
					<input
						title="password"
						placeholder="**********"
						className={style.inputField}
						type="password"
						{...register("password", { required: true, minLength: 5 })}
					/>
					<button type="submit" className={style.submit}>
						Submit
					</button>
				</Form>
			</div>
		</Container>
	);
};

export default Login;
