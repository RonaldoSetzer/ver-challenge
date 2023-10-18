import { PaymentMethod, Person, Profile } from "@/types";

export interface UserAccountDto {
  id: string;
  email: string;
  profiles?: Profile[]
}

export class UserAccount {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public profiles: Profile[],
  ) { }

  getProfile(profileId: string): Profile | undefined {
    return this.profiles.find((profile) => profile.id === profileId);
  }

  getPerson(profileId:string, personId: string): Person | undefined {
    const profile = this.getProfile(profileId);
    return profile?.persons.find((person) => person.id === personId);
  }

  getPaymentMethod(profileId: string, paymentMethodId: string): PaymentMethod | undefined {
    const profile = this.getProfile(profileId);
    return profile?.paymentMethods.find((paymentMethod) => paymentMethod.id === paymentMethodId);
  }

  removeProfile(profileId: string): void {
    this.profiles = this.profiles.filter((profile) => profile.id !== profileId);
  }

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
