import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Storyard",
  description: "Read the Storyard terms and conditions. By using our site you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Terms and Conditions</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 06-06-2026</p>
      <p className="mt-4 text-slate-600">
        These Terms and Conditions govern your use of Storyard, available at https://storyard.co.uk. By using Storyard, you agree to these Terms. If you do not agree, you should not use the website.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">1. About Storyard</h2>
      <p className="mt-3 text-slate-600">Storyard is a marketplace, directory and lead-generation platform that helps users find, compare and request quotes from storage operators. Storage services listed on Storyard may include container storage, self-storage, household storage, business storage, trade storage, vehicle storage, document storage, removals storage and related services.</p>
      <p className="mt-3 text-slate-600">Unless expressly stated otherwise:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>Storyard does not own storage facilities;</li>
        <li>Storyard does not operate storage yards or self-storage sites;</li>
        <li>Storyard is not the storage provider;</li>
        <li>Storyard does not control storage availability, prices, access terms, security arrangements or contracts offered by storage operators;</li>
        <li>any storage agreement is between the customer and the relevant storage operator.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">2. Who operates Storyard</h2>
      <p className="mt-3 text-slate-600">Storyard is operated by:</p>
      <p className="mt-2 text-slate-600">ASTERISK SOLUTIONS LTD<br />SUITE 9D, ENGINE HOUSE, CASTLETOWN, IM9 1TG, ISLE OF MAN<br />Email: ukwebsitebusiness@gmail.com<br />Website: https://storyard.co.uk</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">3. Use of public business information</h2>
      <p className="mt-3 text-slate-600">Storyard may publish listings for storage operators and related businesses using publicly available business information. This may include business names, websites, phone numbers, service areas, public descriptions, publicly displayed prices, facility details and other information available from public sources. Where a listing has not been claimed or verified by the operator, we aim to show this clearly.</p>
      <p className="mt-3 text-slate-600">A listing on Storyard does not mean:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>the business has approved the listing;</li>
        <li>the business is partnered with Storyard;</li>
        <li>the business is endorsed by Storyard;</li>
        <li>Storyard is endorsed by that business;</li>
        <li>the information is guaranteed to be complete or current.</li>
      </ul>
      <p className="mt-3 text-slate-600">If you own or represent a listed business, you may contact us to claim, correct, update or request removal of your listing.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">4. Accuracy of listings, prices and availability</h2>
      <p className="mt-3 text-slate-600">We aim to keep information useful and accurate, but we do not guarantee that all information on Storyard is complete, accurate, current or error-free. Storage prices, offers, availability, deposits, access hours, security features and terms may change without notice.</p>
      <p className="mt-3 text-slate-600">Any prices shown on Storyard are for guidance only unless expressly confirmed by the storage operator. Users should confirm all important details directly with the storage operator before making a decision.</p>
      <p className="mt-3 text-slate-600">Storyard is not responsible for:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>inaccurate public information supplied by third parties;</li>
        <li>changes made by storage operators after information was collected;</li>
        <li>errors in operator websites or public listings;</li>
        <li>expired offers or outdated prices;</li>
        <li>lack of availability;</li>
        <li>differences between guide prices and final quoted prices.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">5. Quote requests and enquiries</h2>
      <p className="mt-3 text-slate-600">When you submit a quote request or enquiry through Storyard, you authorise us to process your enquiry and, where appropriate, share it with relevant storage operators. We may share your name, contact details, preferred storage location, storage type and size requirements, move-in date, duration, information about what you need to store, and any message or notes you provide.</p>
      <p className="mt-3 text-slate-600">Submitting a quote request does not guarantee availability, a fixed price, a response from any operator, acceptance by a storage operator, or that a storage contract will be formed. Storage operators are responsible for responding to enquiries and confirming their own prices, availability and terms.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">6. Relationship with storage operators</h2>
      <p className="mt-3 text-slate-600">Storyard may introduce users to storage operators, but we are not responsible for the acts, omissions, services, contracts, goods, pricing, availability, safety, security, insurance, storage conditions or customer service of any storage operator. Any contract, booking, payment, deposit, storage agreement, access arrangement or dispute is between the user and the relevant storage operator.</p>
      <p className="mt-3 text-slate-600">Users should carry out their own checks before entering into any agreement, including checking prices, deposits, minimum terms, insurance requirements, access hours, security arrangements, cancellation rules, prohibited goods, and suitability of the unit or facility.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">7. No guarantee or endorsement</h2>
      <p className="mt-3 text-slate-600">Storyard may show operators, listings, prices, ratings, badges, tags, features or recommendations. Unless expressly stated, this does not mean that we guarantee, endorse, inspect, verify or certify the operator. Badges such as “claimed”, “verified”, “featured”, “public price data” or similar are for marketplace information purposes only and do not replace your own checks.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">8. Claimed and verified listings</h2>
      <p className="mt-3 text-slate-600">Storage operators may be able to claim a listing or provide updated information. A claimed listing means the operator or someone representing the operator has requested control of the listing and we have approved that request. A verified listing, where shown, means we have taken additional steps to check certain information. It does not mean we guarantee all aspects of the operator’s services. We may refuse, suspend or remove claimed or verified status at our discretion.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">9. Operator obligations</h2>
      <p className="mt-3 text-slate-600">If you are a storage operator using Storyard, you agree that:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>information you provide must be accurate and not misleading;</li>
        <li>you have authority to represent the business;</li>
        <li>you will keep prices, availability and service details up to date;</li>
        <li>you will respond to enquiries professionally and lawfully;</li>
        <li>you will not use Storyard to mislead customers;</li>
        <li>you will comply with all applicable laws, regulations and industry obligations;</li>
        <li>you are responsible for your own contracts, storage terms, insurance requirements and customer communications.</li>
      </ul>
      <p className="mt-3 text-slate-600">We may edit, suspend or remove listings where we believe information is inaccurate, misleading, unlawful, inappropriate or harmful to Storyard or users.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">10. Prohibited use</h2>
      <p className="mt-3 text-slate-600">You must not use Storyard to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>submit false, misleading or fraudulent information;</li>
        <li>impersonate another person or business;</li>
        <li>claim a business without authority;</li>
        <li>scrape, copy or misuse Storyard content;</li>
        <li>interfere with website security or functionality;</li>
        <li>upload malicious code;</li>
        <li>send spam;</li>
        <li>harass, abuse or threaten others;</li>
        <li>use the website for unlawful purposes;</li>
        <li>attempt to damage Storyard’s reputation or systems.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">11. Intellectual property</h2>
      <p className="mt-3 text-slate-600">Storyard owns or licenses the website design, branding, layout, text, software, database structure, graphics and other content created for the platform. You may not copy, reproduce, scrape, republish, sell, reverse engineer or commercially exploit Storyard content without our written permission, except where permitted by law.</p>
      <p className="mt-3 text-slate-600">Third-party business names, trademarks, logos and website links remain the property of their respective owners. Reference to a third-party business is for identification and marketplace information purposes only. If you believe content on Storyard infringes your rights, contact us with details and supporting evidence.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">12. Third-party links</h2>
      <p className="mt-3 text-slate-600">Storyard may contain links to third-party websites. We are not responsible for third-party websites, their content, security, privacy practices, accuracy, availability or services. You access third-party websites at your own risk.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">13. AI-assisted tools</h2>
      <p className="mt-3 text-slate-600">Storyard may offer AI-assisted tools, including storage size recommendations, enquiry summaries, lead matching, listing improvement suggestions and SEO content assistance. AI outputs are provided for guidance only. They may be incomplete, inaccurate or unsuitable for your specific circumstances. Users and operators should check important information before relying on AI-generated suggestions. Storyard does not use AI outputs as a guarantee of price, availability, quality, security or suitability of any storage operator.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">14. Website availability</h2>
      <p className="mt-3 text-slate-600">We aim to keep Storyard available, but we do not guarantee uninterrupted access. We may suspend, withdraw, update or restrict access to all or part of the website at any time for maintenance, security, legal, commercial or operational reasons.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">15. Limitation of liability</h2>
      <p className="mt-3 text-slate-600">Nothing in these Terms excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation or any other liability that cannot be excluded by law.</p>
      <p className="mt-3 text-slate-600">Subject to that, Storyard is not liable for:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>storage operator acts or omissions;</li>
        <li>inaccurate, outdated or incomplete listing information;</li>
        <li>loss or damage to stored goods;</li>
        <li>disputes between users and storage operators;</li>
        <li>loss of profits, business, revenue, data, goodwill or opportunity;</li>
        <li>indirect or consequential loss;</li>
        <li>website downtime or technical errors;</li>
        <li>reliance on guide prices or AI-assisted outputs;</li>
        <li>third-party website content or services.</li>
      </ul>
      <p className="mt-3 text-slate-600">If we are found liable for any claim relating to your use of Storyard, our liability will be limited to the greater of the amount you paid directly to Storyard for the relevant service in the 3 months before the claim, or £100. This limit does not apply where liability cannot legally be limited.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">16. Indemnity</h2>
      <p className="mt-3 text-slate-600">If you are a storage operator, business representative or user who submits information to Storyard, you agree to indemnify us against losses, claims, costs, damages and expenses arising from inaccurate or misleading information you provide, unauthorised claim of a listing, breach of these Terms, unlawful use of the website, infringement of third-party rights, or your dealings with customers or storage operators.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">17. Complaints, corrections and takedown requests</h2>
      <p className="mt-3 text-slate-600">If you believe a listing is inaccurate, misleading, outdated, unauthorised or infringes your rights, contact us at ukwebsitebusiness@gmail.com. Please include the listing URL, business name, your name and relationship to the business, details of the issue, evidence supporting your request, and the correction or action requested. We will review reasonable requests and may correct, update, suspend or remove content at our discretion.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">18. Privacy</h2>
      <p className="mt-3 text-slate-600">Our use of personal information is explained in our Privacy Policy. By using Storyard, submitting an enquiry, claiming a listing or listing a business, you acknowledge that we will process information as described in our Privacy Policy.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">19. Changes to these Terms</h2>
      <p className="mt-3 text-slate-600">We may update these Terms from time to time. The latest version will be posted on this page with the updated date. By continuing to use Storyard after changes are published, you accept the updated Terms.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">20. Governing law and jurisdiction</h2>
      <p className="mt-3 text-slate-600">These Terms are governed by the laws of England and Wales, unless a different governing law is required by applicable mandatory law. The courts of England and Wales will have exclusive jurisdiction over disputes relating to these Terms, except where applicable law provides otherwise. If Storyard is operated from or through the Isle of Man, we may update this section to reflect the appropriate Isle of Man governing law and jurisdiction.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">21. Contact</h2>
      <p className="mt-3 text-slate-600">For questions about these Terms, contact:</p>
      <p className="mt-2 text-slate-600">Storyard<br />Email: ukwebsitebusiness@gmail.com</p>
    </div>
  );
}
