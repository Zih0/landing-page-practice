import React, { forwardRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "twin.macro";

const ContactContainer = styled.div`
	${tw`
        w-full
        flex
        flex-col
        items-center
    `}
`;

const Title = styled.h2`
	${tw`
        text-4xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

const ContactForm = styled.form`
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
	min-width: 20em;
	max-width: 30em;
	${tw`
        flex
        flex-col
        gap-3
        items-center
        mt-12
        mb-12
        p-12
        md:w-1/3
    `}
`;

const FormLabel = styled.label`
	${tw`
        font-bold
        text-lg
    `}
`;

const FormInput = styled.input`
	${tw`
        w-full
        text-center
        text-sm
        border-b-2
    `}
`;

const FormSubmit = styled.input`
	${tw`
        pl-3
        pr-3
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        mr-1
        mb-1
		bg-black
        hover:bg-transparent
        hover:text-black
        hover:border-black
    `}
`;

const FormTextarea = styled.textarea`
	${tw`
        w-full
        text-center
        text-sm
        h-10
        border-b-2
    `}
`;

const ErrorMessage = styled.p`
	${tw`
        text-xs
        text-red-500
    `}
`;

interface IFormData {
	name: string;
	email: string;
	content: string;
}

const Contact = forwardRef<any>((_, ref) => {
	const [isSendingEmail, setIsSendingEmail] = useState(false);

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IFormData>({
		defaultValues: { name: "", email: "", content: "" },
	});

	async function onSubmit(data: IFormData) {
		setIsSendingEmail(true);
		await emailjs.send(
			process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
			{ name: data.name, email: data.email, content: data.content },
			process.env.REACT_APP_EMAILJS_USER_ID
		);
		setIsSendingEmail(false);

		setValue("name", "");
		setValue("email", "");
		setValue("content", "");
	}

	return (
		<ContactContainer ref={ref}>
			<Title>CONTACT</Title>
			<ContactForm onSubmit={handleSubmit(onSubmit)}>
				<FormLabel htmlFor="name">Name</FormLabel>
				<Controller
					control={control}
					name="name"
					render={({ field }) => (
						<FormInput
							disabled={isSendingEmail}
							placeholder="Please input your name"
							type="text"
							{...field}
						/>
					)}
					rules={{ required: true }}
				/>
				{errors.name && console.log(errors)}
				{/* {errors.name && <ErrorMessage>이름을 입력해주세요</ErrorMessage>} */}
				<FormLabel htmlFor="email">Email</FormLabel>
				<Controller
					control={control}
					name="email"
					render={({ field }) => (
						<FormInput
							disabled={isSendingEmail}
							placeholder="Please input your email address"
							type="email"
							{...field}
						/>
					)}
					rules={{
						required: true,
						pattern: {
							message: "이메일 주소를 형식에 맞게 입력해주세요.",
							value: /\S+@\S+\.\S+/,
						},
					}}
				/>
				{errors.email && <ErrorMessage>이메일을 적어주세요</ErrorMessage>}
				<FormLabel htmlFor="content">Content</FormLabel>
				<Controller
					control={control}
					name="content"
					render={({ field }) => (
						<FormTextarea
							disabled={isSendingEmail}
							placeholder="Please input email content"
							{...field}
						/>
					)}
					rules={{ required: true }}
				/>
				{errors.content && <ErrorMessage>내용을 적어주세요</ErrorMessage>}
				<FormSubmit type="submit" value="SEND EMAIL" />
			</ContactForm>
		</ContactContainer>
	);
});

export default Contact;
