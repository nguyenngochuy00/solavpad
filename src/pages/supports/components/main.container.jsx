import { useState } from "react"
import SolPageTitle from "src/components/molecules/page-title"
import SolSupportsContactForm from "src/components/organisms/supports/contact-form"
import SolSupportsCookiesPolicy from "src/components/organisms/supports/cookies-policy"
import SolSupportsPrivacyPolicy from "src/components/organisms/supports/privacy-policy"
import SolSupportsTabs from "src/components/organisms/supports/tabs"
import SolSupportsTermsOfUse from "src/components/organisms/supports/terms-of-use"
import SolSupportsTemplate from "src/components/templates/supports"

const SolSupportsMainContainer = () => {
    const TABS = [
        { key: 'PrivacyPolicy', text: 'Privacy Policy' },
        { key: 'CookiesPolicy', text: 'Cookies Policy' },
        { key: 'TermsOfUse', text: 'Terms Of Use' }
    ]
    const INIT_FORM_DATA = { email: '', subject: '', message: '' }
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const [activeTab, setActiveTab] = useState(TABS[0].key);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(INIT_FORM_DATA);
    }

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    }

    return <SolSupportsTemplate
        header={<SolPageTitle>Solav Supports</SolPageTitle>}
        form={<SolSupportsContactForm
            title="Customer Support"
            image="/images/support.png"
            formData={formData}
            onSubmit={handleSubmit}
        />}
        tabs={<SolSupportsTabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
        />}
    >
        {
            activeTab === TABS[0].key ? <SolSupportsPrivacyPolicy /> : <></>
        }
        {
            activeTab === TABS[1].key ? <SolSupportsCookiesPolicy /> : <></>
        }
        {
            activeTab === TABS[2].key ? <SolSupportsTermsOfUse /> : <></>
        }
    </SolSupportsTemplate>
}
export default SolSupportsMainContainer