console.log("LAB-1:");
//
// Function to show a specific contact
function showContact(contacts, index) {
    if (!Array.isArray(contacts)) {
        console.error("Error: Contacts must be an array.");
        return;
    }
    if (index < 0 || index >= contacts.length) {
        console.error("Error: Invalid index.");
        return;
    }
    console.log(contacts[index]);
}

// Function to show all contacts
function showAllContacts(contacts) {
    if (!Array.isArray(contacts)) {
        console.error("Error: Contacts must be an array.");
        return;
    }
    contacts.forEach((contact, index) => {
        console.log(`Contact ${index + 1}:`, contact);
    });
}

// Function to add a new contact
function addNewContact(contacts, name, phone, email) {
    if (!Array.isArray(contacts)) {
        console.error("Error: Contacts must be an array.");
        return;
    }
    if (!name || !phone || !email) {
        console.error("Error: All contact details must be provided.");
        return;
    }
    contacts.push({ name, phone, email });
}

// Example usage
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Show a specific contact
showContact(contacts, 1);

// Show all contacts
showAllContacts(contacts);

// Add a new contact
addNewContact(contacts, "John Doe", "1234567890", "john.doe@example.com");

console.log("");
console.log("LAB-1:");
//
//