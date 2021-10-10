interface Plan {
  billed: number;
  description: string;
  end_date: Date; // "2021-10-07T16:50:44.000Z"
  id: number;
  start_date: Date; //"2021-09-27T08:19:44.000Z"
  title: string; // "3 Days Trial"
}

interface User {
  authenticated: boolean;
  currentSubscription: "trial" | "premium" | null;
  accessToken: string;
  me: unknown | null;
  language: {
    selected: string;
  };
  subscription: {
    plans: Plan[];
  };
}

export default User;
