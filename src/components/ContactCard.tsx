import { Contact } from "../types/contact";
import { Building2, Globe, Mail, Phone } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
  onClick: (contact: Contact) => void;
}

export function ContactCard({ contact, onClick }: ContactCardProps) {
  return (
    <div
      onClick={() => onClick(contact)}
      className="bg-white rounded-lg border-[1px]  p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-red-600">
            {contact.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {contact.name}
          </h3>
          <p className="text-sm text-gray-500">@{contact.username}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2" />
          <span>{contact.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Globe className="w-4 h-4 mr-2" />
          <span>{contact.website}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Building2 className="w-4 h-4 mr-2" />
          <span>{contact.company.name}</span>
        </div>
      </div>
    </div>
  );
}
