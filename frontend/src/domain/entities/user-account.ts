import { Profile } from "@/types";

export interface UserAccountDto {
  id: string;
  email: string;
  profiles?: Profile[]
}

export class UserAccount {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly profiles: Profile[],
  ) { }

  numProfiles(): number {
    return this.profiles.length;
  }

  numPaymentMethods(): number {
    return this.profiles.length;
  }

  numPersons(): number {
    return this.profiles.reduce((acc, profile) => acc + profile.persons.length, 0);
  }

  numAddresses(): number {
    return this.profiles.reduce((acc, profile) => acc + profile.addresses.length, 0);
  }

  numMeters(): number {
    return this.profiles.reduce((acc, profile) => acc + profile.addresses.reduce((acc, address) => acc + address.meters.length, 0), 0);
  }
}
