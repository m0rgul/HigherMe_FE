import { AccountType } from "../../constants/enums/accountTypes";

export interface User {
  id: number;
  email: string;
  role: AccountType;
  profile: Profile;
}

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  profilePicture: string;
  languages: string[];
  workExperience: WorkExperience[];
  assessments: Assessment[];
  location: Location;
}

export interface Assessment {
  id: number;
  title: string;
}

export interface WorkExperience {
  startDate: Date;
  endDate: Date;
  title: string;
  company: string;
  description: string;
  stillWorkingThere: boolean;
}

export interface Location {
  id: number;
  city: string;
  state: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface UserState {
  user: Partial<User>;
  authenticated: boolean | undefined;
}
