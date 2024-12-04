
// Define a type for a companion
interface Companion {
  name: string;
  photoUrl: string;
}

// Define a type for a guest
interface Guest {
  id: number;
  name: string;
  photoUrl: string;
  companions: Companion[];
  confirmed: boolean;
}

// Define a type for a present
interface Present {
  name: string;
  photoUrl: string;
}

// Define the main structure for the data
interface EventData {
  guests: Guest[];
  presentList: Present[];
}
