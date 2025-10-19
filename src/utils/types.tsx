interface contactType {
  createdAt: string;
  id: string;
  name: string;
  number: string;
}

interface contactsType {
  items: contactType[];
  loading: boolean;
  error: null | string;
}

interface filterType {
  value: string;
}

interface stateType {
  contacts: contactsType;
  filters: filterType;
}

interface RootState {
  contacts: { items: contactType[] };
  filters: { value: string };
}

export type { contactType, stateType, contactsType, filterType, RootState };
