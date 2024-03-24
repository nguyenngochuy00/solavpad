import { useState } from 'react';
import SolPageTitle from '../../../components/molecules/page-title';
import SolSupportsContactForm from '../../../components/organisms/supports/contact-form';
import SolSupportsCookiesPolicy from '../../../components/organisms/supports/cookies-policy';
import SolSupportsPrivacyPolicy from '../../../components/organisms/supports/privacy-policy';
import SolSupportsTabs from '../../../components/organisms/supports/tabs';
import SolSupportsTermsOfUse from '../../../components/organisms/supports/terms-of-use';
import SolSupportsTemplate from '../../../components/templates/supports';
import { TabType } from '../../../types';

const SolSupportsMainContainer = () => {
	const TABS: TabType[] = [
		{ key: 'PrivacyPolicy', text: 'Privacy Policy' },
		{ key: 'CookiesPolicy', text: 'Cookies Policy' },
		{ key: 'TermsOfUse', text: 'Terms Of Use' }
	];
	const INIT_FORM_DATA = { email: '', subject: '', message: '' };
	const [formData, setFormData] = useState(INIT_FORM_DATA);
	const [activeTab, setActiveTab] = useState<string>(TABS[0].key);

	const handleSubmit = (email: string, subject: string, message: string) => {
		setFormData(INIT_FORM_DATA);
	};

	const handleTabChange = (tabKey: string) => {
		setActiveTab(tabKey);
	};

	return (
		<SolSupportsTemplate
			header={<SolPageTitle>Solav Supports</SolPageTitle>}
			form={
				<SolSupportsContactForm
					title="Customer Support"
					image="/images/support.png"
					formData={formData}
					onSubmit={handleSubmit}
				/>
			}
			tabs={
				<SolSupportsTabs
					tabs={TABS}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			}
		>
			<>
				{activeTab === TABS[0].key ? <SolSupportsPrivacyPolicy /> : <></>}
				{activeTab === TABS[1].key ? <SolSupportsCookiesPolicy /> : <></>}
				{activeTab === TABS[2].key ? <SolSupportsTermsOfUse /> : <></>}
			</>
		</SolSupportsTemplate>
	);
};
export default SolSupportsMainContainer;
