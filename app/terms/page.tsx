import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Storyard",
  description: "Read the Storyard terms and conditions. By using our site you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Storyard Terms and Conditions</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 06-06-2026</p>
      <p className="mt-4 text-slate-600">
        These Terms and Conditions govern your use of Storyard, available at https://storyard.co.uk. By using Storyard, submitting an enquiry, using our storage size helper, claiming a listing, listing a business, or contacting a storage operator through Storyard, you agree to these Terms. If you do not agree, you must not use Storyard.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">1. Who we are</h2>
      <p className="mt-3 text-slate-600">Storyard is operated by:</p>
      <p className="mt-2 text-slate-600">ASTERISK SOLUTIONS LTD<br />SUITE 9D, ENGINE HOUSE, CASTLETOWN, IM9 1TG, ISLE OF MAN<br />Email: ukwebsitebusiness@gmail.com<br />Website: https://storyard.co.uk</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">2. What Storyard is</h2>
      <p className="mt-3 text-slate-600">Storyard is a marketplace, directory and lead-generation platform that helps users find, compare and request quotes from storage operators and related businesses. Storage services listed on Storyard may include container storage, self-storage, household storage, business storage, trade storage, vehicle storage, document/archive storage, removals storage and related storage services.</p>
      <p className="mt-3 text-slate-600">Unless expressly stated otherwise, Storyard:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>does not own storage facilities;</li>
        <li>does not operate storage yards;</li>
        <li>does not provide storage services;</li>
        <li>does not inspect storage facilities;</li>
        <li>does not manage customer goods;</li>
        <li>does not guarantee storage availability;</li>
        <li>does not set operator prices;</li>
        <li>does not control operator contracts;</li>
        <li>is not a party to any storage agreement between you and a storage operator.</li>
      </ul>
      <p className="mt-3 text-slate-600">Any storage contract, booking, payment, deposit, insurance requirement, access arrangement or dispute is between the user and the relevant storage operator.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">3. Use of publicly available business information</h2>
      <p className="mt-3 text-slate-600">Storyard may publish business listings using publicly available information. This may include business names, trading names, websites, public phone numbers, public emails, public addresses or service areas, storage types, public price information, public facility information and public descriptions of services.</p>
      <p className="mt-3 text-slate-600">Public sources may include operator websites, public directories, search results, public business pages, public social media profiles, public registers and information supplied by users or operators.</p>
      <p className="mt-3 text-slate-600">A listing on Storyard does not mean that:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>the operator has approved the listing;</li>
        <li>the operator has claimed the listing;</li>
        <li>the operator is verified;</li>
        <li>the operator is a partner of Storyard;</li>
        <li>Storyard is endorsed by the operator;</li>
        <li>the operator is endorsed by Storyard;</li>
        <li>all information is complete, accurate or current.</li>
      </ul>
      <p className="mt-3 text-slate-600">Where a listing is unclaimed or unverified, we aim to display this clearly.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">4. Unclaimed listings</h2>
      <p className="mt-3 text-slate-600">Unclaimed listings may be based on publicly available information and may not be managed directly by the storage operator. Users should confirm all important details directly with the storage operator before making a decision.</p>
      <p className="mt-3 text-slate-600">Operators may contact Storyard to claim, update, correct or request removal of a listing. Storyard may refuse, amend, suspend or remove listings at its discretion.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">5. Claimed and verified listings</h2>
      <p className="mt-3 text-slate-600">A claimed listing means that a person claiming to represent the business has requested control of the listing and Storyard has approved that claim. A verified listing, where shown, means Storyard has taken additional steps to check certain information.</p>
      <p className="mt-3 text-slate-600">Claimed or verified status does not mean that Storyard guarantees the operator’s services, prices, availability, security standards, suitability, insurance, customer service, legal compliance, quality of facilities or protection of stored goods.</p>
      <p className="mt-3 text-slate-600">We may remove claimed or verified status at any time if we believe it is inaccurate, misleading, unauthorised or inappropriate.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">6. Prices, availability and facility details</h2>
      <p className="mt-3 text-slate-600">Prices, deposits, offers, unit sizes, insurance requirements, access hours, availability, service areas and facility details may change without notice. Any prices shown on Storyard are provided for guidance and comparison only, unless expressly confirmed by the storage operator.</p>
      <p className="mt-3 text-slate-600">Prices may be based on publicly available information, operator-supplied information or admin-entered data. They may not include all fees, deposits, VAT, insurance, minimum terms or optional services.</p>
      <p className="mt-3 text-slate-600">Before making a booking or entering into a contract, you must confirm all relevant information directly with the storage operator.</p>
      <p className="mt-3 text-slate-600">Storyard is not responsible for outdated public prices, price changes, inaccurate operator information, unavailable units, differences between guide prices and final quotes, operator terms, deposits or insurance requirements, errors on third-party websites, or storage operator acts or omissions.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">7. Quote requests and enquiries</h2>
      <p className="mt-3 text-slate-600">When you submit a quote request or enquiry, you authorise Storyard to process the enquiry and, where appropriate, share relevant details with one or more storage operators.</p>
      <p className="mt-3 text-slate-600">Submitting a quote request does not guarantee a response, availability, a fixed price, acceptance by an operator, a booking, a contract or suitability of any facility. Operators are responsible for responding to enquiries and confirming their own prices, availability, terms and services.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">8. Storage size helper and AI-assisted tools</h2>
      <p className="mt-3 text-slate-600">Storyard may provide AI-assisted, automated or rule-based tools, including storage size helpers, lead summaries, suggested operator matching, listing quality suggestions and content recommendations. These tools are provided for general guidance only.</p>
      <p className="mt-3 text-slate-600">They do not constitute professional advice and should not be relied upon as a guarantee that a storage unit or facility is suitable. Users should check all recommendations with the relevant storage operator.</p>
      <p className="mt-3 text-slate-600">Storyard does not use AI tools to knowingly invent prices, availability, reviews, verification status, partnerships or operator claims.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">9. User responsibilities</h2>
      <p className="mt-3 text-slate-600">When using Storyard, you agree that you will:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>provide accurate information;</li>
        <li>not submit false, misleading or fraudulent enquiries;</li>
        <li>not impersonate another person or business;</li>
        <li>not misuse contact forms;</li>
        <li>not use Storyard for unlawful purposes;</li>
        <li>not interfere with website security;</li>
        <li>not attempt to scrape, copy or commercially exploit Storyard content;</li>
        <li>not submit malicious code, spam or abusive content;</li>
        <li>confirm all important storage details directly with the operator.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">10. Operator responsibilities</h2>
      <p className="mt-3 text-slate-600">If you are a storage operator or business representative, you agree that:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>you have authority to represent the business;</li>
        <li>information you provide is accurate, lawful and not misleading;</li>
        <li>you will keep your listing, prices and availability up to date;</li>
        <li>you will not claim a listing without authority;</li>
        <li>you will respond to enquiries lawfully and professionally;</li>
        <li>you will comply with consumer, data protection, advertising and trading laws that apply to your business;</li>
        <li>you are responsible for your own storage contracts, terms, insurance requirements, customer communications and disputes.</li>
      </ul>
      <p className="mt-3 text-slate-600">If you provide inaccurate, unauthorised, misleading or unlawful information, you may be responsible for resulting claims, losses or costs.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">11. Listing correction, claim and removal policy</h2>
      <p className="mt-3 text-slate-600">If you believe a listing is inaccurate, outdated, misleading, unauthorised, infringing or should be removed, contact: ukwebsitebusiness@gmail.com</p>
      <p className="mt-3 text-slate-600">Please include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>listing URL;</li>
        <li>business name;</li>
        <li>your name;</li>
        <li>your role or relationship to the business;</li>
        <li>details of the issue;</li>
        <li>requested correction or action;</li>
        <li>supporting evidence where appropriate.</li>
      </ul>
      <p className="mt-3 text-slate-600">We aim to review reasonable requests within 7 working days, although complex matters may take longer. We may correct, update, suspend, anonymise or remove content at our discretion. We may require proof of authority before granting listing control.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">12. Reviews and endorsements</h2>
      <p className="mt-3 text-slate-600">Storyard does not publish customer reviews unless clearly stated. If reviews, ratings or testimonials are introduced in future, we will use a review policy designed to reduce fake, misleading, incentivised, manipulated or unverifiable reviews.</p>
      <p className="mt-3 text-slate-600">You must not submit fake reviews, misleading endorsements, paid reviews that are not clearly disclosed, or reviews that impersonate another person. Storyard may remove or refuse reviews, ratings or endorsements at its discretion.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">13. Intellectual property</h2>
      <p className="mt-3 text-slate-600">Storyard owns or licenses the website design, branding, software, layout, database structure, original text, graphics, icons and other platform content. You must not copy, reproduce, scrape, republish, sell, reverse engineer, extract, train AI systems on, or commercially exploit Storyard content without written permission, except where permitted by law.</p>
      <p className="mt-3 text-slate-600">Third-party business names, trademarks, logos and website links remain the property of their respective owners. Reference to a third-party business is for identification and marketplace information purposes only. If you believe content on Storyard infringes your rights, contact us with details and supporting evidence.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">14. Third-party websites and services</h2>
      <p className="mt-3 text-slate-600">Storyard may link to third-party websites, including storage operator websites. We are not responsible for third-party websites, including their content, security, availability, pricing, privacy practices, accuracy, services or conduct. You access third-party websites at your own risk.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">15. No guarantee of availability or uninterrupted service</h2>
      <p className="mt-3 text-slate-600">We aim to keep Storyard available and useful, but we do not guarantee that the website will always be available, uninterrupted, secure or error-free. We may suspend, restrict, update or withdraw any part of the website at any time.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">16. Limitation of liability</h2>
      <p className="mt-3 text-slate-600">Nothing in these Terms excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation, or any other liability that cannot legally be excluded or limited.</p>
      <p className="mt-3 text-slate-600">Subject to the above, Storyard is not liable for acts or omissions of storage operators, loss of or damage to stored goods, disputes between users and storage operators, inaccurate, outdated or incomplete listing information, changes in prices or availability, operator contract terms, third-party website content, reliance on guide prices, reliance on storage size helper or AI-assisted outputs, loss of profits, business, revenue, opportunity, goodwill or data, indirect or consequential loss, or website downtime or technical faults.</p>
      <p className="mt-3 text-slate-600">Where liability cannot be fully excluded but can be limited, Storyard’s total liability arising out of or in connection with your use of the website will be limited to the greater of the amount you paid directly to Storyard for the relevant service in the 3 months before the claim, or £100. This clause does not affect any statutory rights that cannot legally be excluded or limited.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">17. Consumer rights</h2>
      <p className="mt-3 text-slate-600">Nothing in these Terms affects legal rights that cannot be excluded or restricted under applicable consumer law. If any term is found to be unfair, invalid or unenforceable, the remaining terms will continue to apply.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">18. Indemnity</h2>
      <p className="mt-3 text-slate-600">If you are a storage operator, business representative, or user who submits information to Storyard, you agree to indemnify Storyard against losses, claims, damages, costs and expenses arising from inaccurate, false or misleading information you provide, unauthorised listing claims, breach of these Terms, unlawful use of Storyard, infringement of third-party rights, disputes caused by information you supplied, or your dealings with customers or storage operators. This indemnity does not apply to the extent that liability is caused by Storyard’s own unlawful conduct or cannot legally be recovered.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">19. Suspension and removal</h2>
      <p className="mt-3 text-slate-600">We may suspend, restrict or remove access to Storyard, remove content, remove listings, block submissions, or refuse services where we believe information is inaccurate or misleading, a listing claim is unauthorised, the website is being misused, spam, fraud or security risk is present, legal risk exists, these Terms have been breached, or removal is in Storyard’s legitimate interests.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">20. Privacy</h2>
      <p className="mt-3 text-slate-600">Our use of personal information is explained in our <a href="/privacy/" className="text-teal-700 underline">Privacy Policy</a>. By using Storyard, submitting an enquiry, claiming a listing or listing a business, you acknowledge that your information will be processed as described in the Privacy Policy.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">21. Changes to these Terms</h2>
      <p className="mt-3 text-slate-600">We may update these Terms from time to time. The latest version will be posted on this page. By continuing to use Storyard after changes are published, you accept the updated Terms.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">22. Governing law and jurisdiction</h2>
      <p className="mt-3 text-slate-600">These Terms are governed by the laws of England and Wales, unless a different law is required by applicable mandatory rules. The courts of England and Wales will have exclusive jurisdiction over disputes relating to these Terms, except where applicable law provides otherwise. If Storyard is operated by an Isle of Man entity or primarily administered from the Isle of Man, this clause should be reviewed and may be amended to Isle of Man law and jurisdiction.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">23. Contact</h2>
      <p className="mt-3 text-slate-600">For questions about these Terms, contact:</p>
      <p className="mt-2 text-slate-600">Storyard<br />Email: ukwebsitebusiness@gmail.com</p>
    </div>
  );
}
