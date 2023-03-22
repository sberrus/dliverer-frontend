// imports
import { Container } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// style
import style from "./register.module.scss";
// types

type InputsType = {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
};

const Register = () => {
	const { handleSubmit, register } = useForm<InputsType>();

	const onSubmit: SubmitHandler<InputsType> = (values) => console.log(values);

	return (
		<Container className={style.mainContainer}>
			{/* form Container */}
			<div className={style.formContainer}>
				{/* back to login */}
				<div className={style.haveAccount}>
					Already have an account?{" "}
					<Link to="/auth/login" className={style.link}>
						go to Login
					</Link>
				</div>
				<h1 className={style.title}>Create an Account</h1>

				{/* Form Container */}
				<Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					{/* username */}
					<label>Username</label>
					<input
						title="username"
						placeholder="hiper coconut"
						className={style.inputField}
						type="username"
						{...register("username", {
							required: true,
						})}
					/>
					{/* email */}
					<label>Email</label>
					<input
						title="email"
						placeholder="jhondoe@domain.com"
						className={style.inputField}
						type="email"
						{...register("email", {
							required: true,
						})}
					/>

					{/* password */}
					<div className={style.passwordContainer}>
						<div className={style.inputContainer}>
							<label>Password</label>
							<input
								title="password"
								placeholder="**********"
								className={style.inputField}
								type="password"
								{...register("password", { required: true, minLength: 5 })}
							/>
						</div>
						<div className={style.inputContainer}>
							<label>Confirm Password</label>
							<input
								title="password confirm"
								placeholder="**********"
								className={style.inputField}
								type="confirmPassword"
								{...register("confirmPassword", { required: true, minLength: 5 })}
							/>
						</div>
					</div>
					<button type="submit" className={style.submit}>
						Create an account
					</button>
				</Form>
			</div>
		</Container>
	);
};

export default Register;
