import { profile1, profile2 } from "./__mocks__";
import { UserAccount } from "./user-account";


describe('UserAccount', () => {
  const id = "1";
  const email = "joe doe";
  let userAccount: UserAccount;

  beforeEach(() => {
    userAccount = new UserAccount(id, email, []);
  });

  it('should create an instance', () => {
    expect(userAccount).toBeTruthy();
  });

  it('constructor should set passed values', () => {
    const profiles = [profile1, profile2];

    userAccount = new UserAccount(id, email, profiles as any);

    expect(userAccount.id).toEqual(id);
    expect(userAccount.email).toEqual(email);
    expect(userAccount.profiles).toEqual(profiles);
  });

  describe('getProfile', () => {
    it('should return profile with passed id', () => {
      userAccount.profiles = [profile1, profile2] as any;
      const [, profile] = userAccount.profiles;

      expect(userAccount.getProfile(profile.id)).toEqual(profile);
    });

    it('should return undefined if no profile with passed id', () => {
      const profile = profile1;
      userAccount.profiles = [profile] as any;

      expect(userAccount.getProfile("4")).toBeUndefined();
    });
  });
  describe('getPerson', () => {
    it('should return person with passed id', () => {
      userAccount.profiles = [profile1, profile2] as any;
      const [, profile] = userAccount.profiles;
      const [, person] = profile.persons;

      expect(userAccount.getPerson(profile.id, person.id)).toEqual(person);
    });

    it('should return undefined if no person with passed id', () => {
      const profile = profile1;
      userAccount.profiles = [profile] as any;

      expect(userAccount.getPerson(profile.id, "4")).toBeUndefined();
    });
  });
  describe('getPaymentMethod', () => {
    it('should return paymentMethod with passed id', () => {
      userAccount.profiles = [profile1, profile2] as any;
      const [, profile] = userAccount.profiles;
      const [, paymentMethod] = profile.paymentMethods;

      expect(userAccount.getPaymentMethod(profile.id, paymentMethod.id)).toEqual(paymentMethod);
    });

    it('should return undefined if no paymentMethod with passed id', () => {
      const profile = profile1;
      userAccount.profiles = [profile] as any;

      expect(userAccount.getPaymentMethod(profile.id, "4")).toBeUndefined();
    });
  });
  describe('getAddress', () => {
    it('should return address with passed id', () => {
      userAccount.profiles = [profile1, profile2] as any;
      const [, profile] = userAccount.profiles;
      const [, address] = profile.addresses;

      expect(userAccount.getAddress(profile.id, address.id)).toEqual(address);
    });

    it('should return undefined if no address with passed id', () => {
      const profile = profile1;
      userAccount.profiles = [profile] as any;

      expect(userAccount.getAddress(profile.id, "4")).toBeUndefined();
    });
  });
  describe('removeProfile', () => {
    it('should remove profile with passed id', () => {
      userAccount.profiles = [profile1, profile2] as any;
      const [, profile] = userAccount.profiles;

      userAccount.removeProfile(profile.id);

      expect(userAccount.profiles).toEqual([profile1]);
    });
  });
  describe('numProfiles', () => {
    it('should return number of profiles', () => {
      const profiles = [profile1, profile2];
      userAccount.profiles = profiles as any;

      expect(userAccount.numProfiles()).toEqual(profiles.length);
    });
  });
  describe('numPaymentMethods', () => {
    it('should return number of paymentMethods', () => {
      const profiles = [profile1, profile2];
      const paymentMethods = [...profile1.paymentMethods, ...profile2.paymentMethods];

      userAccount.profiles = profiles as any;

      expect(userAccount.numPaymentMethods()).toEqual(paymentMethods.length);
    });
  });
  describe('numPersons', () => {
    it('should return number of persons', () => {
      const profiles = [profile1, profile2];
      const persons = [...profile1.persons, ...profile2.persons];
      userAccount.profiles = profiles as any;

      expect(userAccount.numPersons()).toEqual(persons.length);
    });
  });
  describe('numAddresses', () => {
    it('should return number of addresses', () => {
      const profiles = [profile1, profile2];
      const addresses = [...profile1.addresses, ...profile2.addresses];
      userAccount.profiles = profiles as any;

      expect(userAccount.numAddresses()).toEqual(addresses.length);
    });
  });
  describe('numMeters', () => {
    it('should return number of meters', () => {
      const profiles = [profile1, profile2];
      const addresses = [...profile1.addresses, ...profile2.addresses];
      const meters = addresses.reduce((acc, address) => acc + address.meters.length, 0);
      userAccount.profiles = profiles as any;

      expect(userAccount.numMeters()).toEqual(meters);
    });
  });
});
