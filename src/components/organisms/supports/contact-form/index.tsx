import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
// import SolButton from "src/components/atoms/button"
// import SolCard from 'src/components/molecules/card';
// import SolFormGroup from 'src/components/molecules/form-group';
import SolButton from '../../../atoms/button';
import SolCard from '../../../molecules/card';
import SolFormGroup from '../../../molecules/form-group';
import './index.scss';

interface SolSupportsContactFormProps {
	title: string;
	image: string;
	formData?: any;
	onSubmit?: (email: string, subject: string, message: string) => void;
}

const SolSupportsContactForm = ({
	title,
	image,
	formData,
	onSubmit
}: SolSupportsContactFormProps) => {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		setEmail(formData?.email ?? '');
		setSubject(formData?.subject ?? '');
		setMessage(formData?.message ?? '');
	}, [formData]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (onSubmit) {
			onSubmit(email, subject, message);
		}
	};

	return (
		<div className="sol-support-contact-form">
			<SolCard title={title}>
				<Row className="gx-xl-5 align-items-center">
					<Col xl="6" lg="7">
						<form onSubmit={handleSubmit}>
							<div className="sol-support-contact-form-body">
								<SolFormGroup
									label="Email *"
									type="email"
									required={true}
									placeholder="Your email address"
									leftIcon={
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											fillOpacity={0.2}
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
												fill="white"
											/>
											<path
												d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
												fill="white"
											/>
										</svg>
									}
									value={email}
									onChange={setEmail}
								/>
								<SolFormGroup
									label="Subject"
									type="email"
									placeholder="Subject"
									value={subject}
									onChange={setSubject}
								/>
								<SolFormGroup
									label="Message"
									type="textarea"
									placeholder="Your message"
									value={message}
									onChange={setMessage}
								/>
								<SolButton caption="Submit" type="submit" variant="primary" />
							</div>
						</form>
					</Col>
					<Col xl="6" lg="5">
						<div className="d-none d-lg-block">
							{image ? <img className="img-fluid" src={image} alt="" /> : <></>}
						</div>
					</Col>
				</Row>
			</SolCard>
		</div>
	);
};
export default SolSupportsContactForm;
