import { useEffect, useState } from "react";
import { Contact } from "./types/contact";
import { getContacts } from "./services/api";
import { ContactCard } from "./components/ContactCard";
import { ContactDetails } from "./components/ContactDetails";
import { SearchBar } from "./components/SearchBar";
import { Users } from "lucide-react";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (err) {
        console.log({ err });
        setError("Failed to load contacts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Users className="w-8 h-8 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          </div>
          <div className="w-full sm:w-96">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

        {filteredContacts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No contacts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onClick={setSelectedContact}
              />
            ))}
          </div>
        )}

        {selectedContact && (
          <ContactDetails
            contact={selectedContact}
            onClose={() => setSelectedContact(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
