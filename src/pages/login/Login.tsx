// imports
import { SubmitHandler, useForm } from "react-hook-form";
// types

type InputsType = {
	email: string;
	password: string;
};

const Login = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<InputsType>();

	const onSubmit: SubmitHandler<InputsType> = (values) => console.log(values);

	return (
		<main>
			<div>
				<h1>Login Form</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<h6>email</h6>
						<input
							type="email"
							{...register("email", {
								required: true,
							})}
						/>
						{errors.email && errors.email.message}
					</div>
					<div>
						<h6>password</h6>
						<input type="password" {...register("password", { required: true, minLength: 5 })} />
						{errors.password && errors.password.message}
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</main>
	);
};

export default Login;
