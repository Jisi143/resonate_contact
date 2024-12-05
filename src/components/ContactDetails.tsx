import { Contact } from "../types/contact";
import { X, Building2, Globe, Mail, Phone, MapPin } from "lucide-react";

interface ContactDetailsProps {
  contact: Contact;
  onClose: () => void;
}

export function ContactDetails({ contact, onClose }: ContactDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-red-600">
                  {contact.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {contact.name}
                </h3>
                <p className="text-gray-500">@{contact.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-3" />
                  <span>{contact.website}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Building2 className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">{contact.company.name}</p>
                    <p className="text-sm text-gray-500">
                      {contact.company.catchPhrase}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <div>
                    <p>
                      {contact.address.street}, {contact.address.suite}
                    </p>
                    <p>
                      {contact.address.city}, {contact.address.zipcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
