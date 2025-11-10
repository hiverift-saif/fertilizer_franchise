import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle, Database, Users, Globe, Clock } from 'lucide-react';

export function PrivacyPage() {
  const keyPoints = [
    'What personal information do we process?',
    'Do we process any sensitive personal information?',
    'Do we collect information from third parties?',
    'How do we process your information?',
    'In what situations and with whom do we share your information?',
    'What are your rights?',
    'How do you exercise your rights?'
  ];

  const tableOfContents = [
    { id: 'section1', title: 'What Information Do We Collect?' },
    { id: 'section2', title: 'How Do We Process Your Information?' },
    { id: 'section3', title: 'When and With Whom Do We Share Your Information?' },
    { id: 'section4', title: 'How Do We Handle Social Logins?' },
    { id: 'section5', title: 'How Long Do We Keep Your Information?' },
    { id: 'section6', title: 'What Are Your Privacy Rights?' },
    { id: 'section7', title: 'Controls for Do-Not-Track Features' },
    { id: 'section8', title: 'Do Other Regions Have Specific Privacy Rights?' },
    { id: 'section9', title: 'Do We Make Updates to This Notice?' },
    { id: 'section10', title: 'How Can You Contact Us?' }
  ];

  const personalInfo = [
    'Full name',
    'Phone number',
    'Email address',
    'Mailing address',
    'Business information',
    'GST number'
  ];

  const processingPurposes = [
    'Deliver and maintain our services',
    'Improve website functionality and customer experience',
    'Communicate with you for marketing or customer support',
    'Detect and prevent fraud or misuse',
    'Comply with legal and regulatory obligations'
  ];

  const sharingCases = [
    {
      title: 'Business Transfers',
      description: 'In case of a merger, acquisition, or sale of assets.'
    },
    {
      title: 'Legal Obligations',
      description: 'When required by law, court order, or government request.'
    },
    {
      title: 'Service Providers',
      description: 'With vendors or partners assisting in website operations, marketing, or analytics.'
    }
  ];

  const privacyRights = [
    'Access, correct, or delete your personal information',
    'Withdraw consent at any time',
    'Object to or restrict processing of your data',
    'Request data portability',
    'Lodge a complaint with a data protection authority'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">Privacy Policy</h1>
            <p className="text-green-50">
              This privacy notice for Fertilizer Franchise ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services.
            </p>
            <p className="text-green-100">Last Updated: August 20, 2023</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-700">
              This privacy notice describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Visit our website at fertilizerfranchise.co.in or any website of ours that links to this Privacy Policy</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Engage with us in other related ways, including any sales, marketing, or events</span>
              </li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
              <h3 className="text-gray-800 mb-2">Questions or concerns?</h3>
              <p className="text-gray-700">
                Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us at <a href="mailto:info@fertilizerfranchise.co.in" className="text-green-600 hover:underline">info@fertilizerfranchise.co.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary of Key Points */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-green-800 mb-6">Summary of Key Points</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-gray-700 mb-6">
              This summary provides key points from our Privacy Policy. You can learn more details by referring to the sections below.
            </p>
            <ul className="space-y-3">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-green-800 mb-6">Table of Contents</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index} className="text-gray-700">
                  <a href={`#${item.id}`} className="hover:text-green-600 transition-colors">
                    {index + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Database className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">1. What Information Do We Collect?</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-800 mb-3">Personal Information You Provide to Us</h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide when you express interest in our products or services, register on our website, or contact us. This may include:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{info}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-gray-800 mb-3">Sensitive Information</h3>
              <p className="text-gray-700">
                With your consent, we may process sensitive information such as financial data for transaction or franchise purposes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-gray-800 mb-3">Social Media Login Data</h3>
              <p className="text-gray-700">
                If you choose to log in using a social media account (e.g., Facebook, X), we may collect certain profile details such as name, email, and profile picture.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-gray-800 mb-3">Information from Other Sources</h3>
              <p className="text-gray-700">
                We may collect information from public databases, marketing partners, social media, and data providers to enhance service and marketing effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">2. How Do We Process Your Information?</h2>
          </div>

          <p className="text-gray-700 mb-6">
            We process your personal information to:
          </p>

          <div className="space-y-3">
            {processingPurposes.map((purpose, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">{purpose}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">3. When and With Whom Do We Share Your Information?</h2>
          </div>

          <p className="text-gray-700 mb-6">
            We may share your data in the following cases:
          </p>

          <div className="space-y-4">
            {sharingCases.map((case_, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-gray-800 mb-2">{case_.title}</h3>
                <p className="text-gray-700">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section4" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Globe className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">4. How Do We Handle Your Social Logins?</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              If you use a social media login to register or log in, we may receive certain details from that platform (e.g., name, email, profile photo). We use this information only to facilitate your login or personalize your experience.
            </p>
            <p className="text-gray-700">
              We encourage you to review your social media provider's privacy policy for more details.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section5" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">5. How Long Do We Keep Your Information?</h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700">
              We retain your personal information only as long as necessary for legitimate business purposes or as required by law. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section6" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">6. What Are Your Privacy Rights?</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Depending on your region, you may have the right to:
          </p>

          <div className="space-y-3">
            {privacyRights.map((right, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">{right}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-gray-700">
              You can exercise these rights by contacting us at <a href="mailto:info@fertilizerfranchise.co.in" className="text-green-600 hover:underline">info@fertilizerfranchise.co.in</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section7" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">7. Controls for Do-Not-Track Features</h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700">
              Our site does not currently respond to Do-Not-Track (DNT) signals due to a lack of standardization. If such standards are established in the future, we will update this Privacy Policy accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section8" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Globe className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">8. Do Other Regions Have Specific Privacy Rights?</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-gray-800 mb-3">Australia</h3>
            <p className="text-gray-700 mb-3">
              We comply with the Privacy Act 1988 (Cth) regarding the collection, use, and management of your data.
            </p>
            <p className="text-gray-700">
              You may request access to or correction of your personal data by contacting us.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 */}
      <section id="section9" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">9. Do We Make Updates to This Notice?</h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700">
              Yes. We may update this Privacy Policy periodically to remain compliant with laws or reflect business changes. Revisions will be indicated by an updated "Last Updated" date at the top of this notice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10 - Contact */}
      <section id="section10" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-green-800">10. How Can You Contact Us About This Notice?</h2>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-lg p-8">
            <p className="text-green-50 mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-3">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@fertilizerfranchise.co.in" className="text-white hover:underline">
                  info@fertilizerfranchise.co.in
                </a>
              </p>
              <div>
                <p><strong>Address:</strong></p>
                <p className="text-green-50 mt-2">
                  Fertilizer Franchise<br />
                  A-10, Sector - 22, Noida<br />
                  Distt. Gautam Budh Nagar (U.P)<br />
                  India – 201301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
