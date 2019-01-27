import React from 'preact';

import './styles.scss';

import Footer from 'components/Footer';

class Privacy extends React.Component {
    render() {
        return (
            <div className="page privacy">
                <div className="content">
                <h1>Privacy Policy for Backpulse</h1>

                    <p>At Backpulse, accessible from https://www.backpulse.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Backpulse and how we use it.</p>

                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at contact@backpulse.io</p>

                    <h2>Privacy Policies</h2>

                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Backpulse. Our Privacy Policy was created with the help of the <a href="https://privacypolicygenerator.info">GDPR Privacy Policy Generator</a> and the <a href="https://termsandconditionstemplate.net">Terms and Conditions Template</a>.</p>

                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Backpulse, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                    <p>Note that Backpulse has no access to or control over these cookies that are used by third-party advertisers.</p>

                    <h2>Third Pary Privacy Policies</h2>

                    <p>Backpulse's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                    <h2>Children's Information</h2>

                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                    <p>Backpulse does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                    <h2>Online Privacy Policy Only</h2>

                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Backpulse. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                    <h2>Consent</h2>

                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Privacy;