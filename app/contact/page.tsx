import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Storyard — Isle of Man Storage Marketplace",
  description: "Get in touch with Storyard. Questions, feedback, listing claims and business enquiries welcome.",
};

export default function ContactPage() {
  return <ContactForm />;
}
