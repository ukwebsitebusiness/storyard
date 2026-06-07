import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Storyard",
  description: "Read the Storyard privacy policy. How we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 06-06-2026</p>
      <p className="mt-4 text-slate-600">
        This Privacy Policy explains how Storyard collects, uses and protects personal information when you use our website, submit an enquiry, request a quote, claim a listing, list a storage business, contact us, or otherwise interact with Storyard.
      </p>
      <p className="mt-4 text-slate-600">
        Storyard is a storage marketplace and directory platform. We help users find and compare storage options, including container storage, self-storage, business storage, household storage, trade storage, vehicle storage and related storage services. Storyard does not own or operate the storage facilities listed on this website unless expressly stated.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">1. Who we are</h2>
      <p className="mt-3 text-slate-600">Storyard is operated by:</p>
      <p className="mt-2 text-slate-600">ASTERISK SOLUTIONS LTD<br />SUITE 9D, ENGINE HOUSE, CASTLETOWN, IM9 1TG, ISLE OF MAN<br />Email: ukwebsitebusiness@gmail.com<br />Website: https://storyard.co.uk</p>
      <p className="mt-3 text-slate-600">For the purposes of data protection law, we are the controller of personal information that we collect directly through Storyard, unless stated otherwise.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">2. Information we collect</h2>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">2.1 Information you provide to us</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>your name;</li>
        <li>email address;</li>
        <li>telephone number;</li>
        <li>postcode or preferred storage location;</li>
        <li>details of what you need to store;</li>
        <li>preferred unit size or storage type;</li>
        <li>move-in date and expected storage duration;</li>
        <li>whether the enquiry is personal, business, trade, vehicle or other use;</li>
        <li>messages, notes or special requirements;</li>
        <li>business details if you list or claim a storage business;</li>
        <li>proof or supporting information submitted when claiming a listing;</li>
        <li>contact details submitted through our contact forms.</li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold text-slate-800">2.2 Information about storage businesses</h3>
      <p className="mt-3 text-slate-600">Storyard may display information about storage operators, storage facilities and related businesses. This may include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>business name; trading name; website address; business telephone number; business email address; business address or service area;</li>
        <li>publicly available descriptions of services, pricing information, access, security or facility details.</li>
      </ul>
      <p className="mt-3 text-slate-600">Some business listing information may be collected from publicly available sources, including operator websites, business directories, search engine results, public social media pages, public listings, Companies Registry/Companies House style records where relevant, or information supplied by the operator.</p>
      <p className="mt-3 text-slate-600">Where a listing is not claimed or verified by the storage operator, we aim to clearly mark it as such.</p>

      <h3 className="mt-6 text-lg font-semibold text-slate-800">2.3 Technical information</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>IP address; browser type and version; device type; pages visited; referring website;</li>
        <li>approximate location derived from technical information; date and time of visit;</li>
        <li>website usage and analytics information; cookie and similar technology data.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">3. How we use your information</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>process storage quote requests; match users with relevant storage operators; send enquiries to storage operators where appropriate;</li>
        <li>respond to messages and support requests; operate, improve and secure the website; maintain and improve storage listings;</li>
        <li>allow businesses to claim, correct or update listings; prevent spam, fraud, misuse or unlawful activity;</li>
        <li>analyse website usage and improve user experience; create internal reports about enquiries and marketplace performance;</li>
        <li>send service-related communications; comply with legal obligations.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">4. Publicly available business information</h2>
      <p className="mt-3 text-slate-600">Storyard may include storage business listings created using publicly available business information. We do this to help users find storage options and to help storage operators receive relevant enquiries. We take reasonable steps to present such information fairly and accurately, but we do not guarantee that all public information is complete, current or error-free.</p>
      <p className="mt-3 text-slate-600">If you own or represent a business listed on Storyard, you may contact us to claim your listing, correct inaccurate information, update your business details, request removal of information where appropriate, or provide verified pricing, availability, photos or service details.</p>
      <p className="mt-3 text-slate-600 font-medium">Unclaimed listings may display a notice such as:</p>
      <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">“This listing may use publicly available business information and is not yet managed directly by the operator. Prices and availability should be confirmed with the storage provider.”</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">5. Lawful bases for processing</h2>
      <p className="mt-3 text-slate-600">We rely on one or more lawful bases when using personal information, including:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li><strong>Consent</strong> — where you submit an enquiry, contact form, claim request, or ask us to contact you.</li>
        <li><strong>Contract or steps before a contract</strong> — where processing is necessary to respond to your request, provide marketplace services, or support operator listing services.</li>
        <li><strong>Legitimate interests</strong> — where we process information to operate and improve Storyard, display publicly available business information, prevent misuse, manage leads, improve listings, analyse performance, and provide a useful storage marketplace. When relying on legitimate interests, we consider the nature of the information, the impact on individuals, and whether they would reasonably expect the information to be used in this way.</li>
        <li><strong>Legal obligation</strong> — where processing is required to comply with laws, regulatory duties, tax obligations, dispute resolution, or lawful requests.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">6. Sharing your information</h2>
      <p className="mt-3 text-slate-600">We may share your information with:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li><strong>Storage operators</strong> — if you submit a quote request or enquiry, we may share relevant enquiry details with one or more storage operators who may be able to assist you. This may include your name, contact details, location, storage requirements, move-in date, and message.</li>
        <li><strong>Service providers</strong> — we may use trusted service providers for hosting, analytics, email delivery, security, form handling, CRM, lead management, AI tools, storage, backups and technical support.</li>
        <li><strong>Legal or regulatory parties</strong> — we may disclose information where required by law, court order, regulator, enforcement authority, or to protect our legal rights.</li>
        <li><strong>Business transfer</strong> — if Storyard or its assets are sold, merged, restructured or transferred, information may be transferred as part of that transaction, subject to appropriate safeguards.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">7. AI-assisted features</h2>
      <p className="mt-3 text-slate-600">Storyard may use AI-assisted features to improve user experience and lead quality. These may include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>storage size recommendations; enquiry summaries; lead scoring; suggested matching operators;</li>
        <li>listing quality suggestions; draft wording for operator responses or SEO content.</li>
      </ul>
      <p className="mt-3 text-slate-600">AI outputs are intended to assist users and administrators. They may not always be accurate or complete. Users and operators should check important information before relying on it. We do not knowingly use AI to invent prices, availability, reviews, partnerships or verification status.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">8. Cookies and analytics</h2>
      <p className="mt-3 text-slate-600">Storyard may use cookies and similar technologies to operate the website, remember user preferences, improve performance, understand website usage, measure traffic and enquiries, and protect against spam or misuse.</p>
      <p className="mt-3 text-slate-600">Some cookies may be strictly necessary. Others, such as analytics or marketing cookies, may require your consent depending on how they are used. You can control cookies through your browser settings and, where available, through our cookie banner or cookie preferences tool.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">9. How long we keep information</h2>
      <p className="mt-3 text-slate-600">We keep personal information only for as long as necessary for the purposes described in this Privacy Policy. Typical retention periods may include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>quote enquiries: up to 24 months;</li>
        <li>operator claim requests: up to 6 years where needed for records/disputes;</li>
        <li>contact form messages: up to 24 months;</li>
        <li>analytics data: according to the settings of the analytics provider;</li>
        <li>legal, tax or dispute records: as required by law or legitimate business need.</li>
      </ul>
      <p className="mt-3 text-slate-600">We may retain anonymised or aggregated information indefinitely where it no longer identifies an individual.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">10. Your rights</h2>
      <p className="mt-3 text-slate-600">Depending on the circumstances, you may have rights to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>access your personal information; request correction of inaccurate information; request deletion of your information;</li>
        <li>object to processing; restrict processing; request data portability;</li>
        <li>withdraw consent where processing is based on consent; complain to a supervisory authority.</li>
      </ul>
      <p className="mt-3 text-slate-600">To exercise your rights, contact us at: ukwebsitebusiness@gmail.com. We may need to verify your identity before responding.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">11. Business listing corrections and removal requests</h2>
      <p className="mt-3 text-slate-600">If you believe a business listing is inaccurate, misleading, outdated or should be removed, contact us at: ukwebsitebusiness@gmail.com. Please include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>business name; listing URL; your relationship to the business;</li>
        <li>details of the correction or removal request; supporting evidence where appropriate.</li>
      </ul>
      <p className="mt-3 text-slate-600">We will review reasonable correction or removal requests and respond as soon as practicable.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">12. Third-party websites</h2>
      <p className="mt-3 text-slate-600">Storyard links to third-party websites, including storage operator websites. We are not responsible for the privacy practices, content, accuracy, availability or security of third-party websites. You should review the privacy policy and terms of any third-party website you visit.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">13. Security</h2>
      <p className="mt-3 text-slate-600">We use reasonable technical and organisational measures to protect personal information. However, no website, internet transmission or storage system can be guaranteed to be completely secure. Users should take care when submitting sensitive information online.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">14. International transfers</h2>
      <p className="mt-3 text-slate-600">Some service providers may process information outside the UK, Isle of Man or European Economic Area. Where this happens, we will take reasonable steps to ensure appropriate safeguards are in place.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">15. Children</h2>
      <p className="mt-3 text-slate-600">Storyard is not intended for children. We do not knowingly collect personal information from children.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">16. Changes to this Privacy Policy</h2>
      <p className="mt-3 text-slate-600">We may update this Privacy Policy from time to time. The latest version will be posted on this page with the updated date.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">17. Contact us</h2>
      <p className="mt-3 text-slate-600">For privacy questions, listing corrections or data rights requests, contact:</p>
      <p className="mt-2 text-slate-600">Storyard<br />Email: ukwebsitebusiness@gmail.com</p>
    </div>
  );
}
