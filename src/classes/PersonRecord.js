// TODO - reconcile and integrate PersonRecord class with Professor class

export default class PersonRecord {
  personalInformation = {
    role: "",
    namePrefix: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    name: "",
    preferredName: "",
    maidenName: "",
    title: "",
    image: "",
    department: "",
    age: "",
    alternateId: "",
    ssn: "",
    alienId: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    citizenship: "",
    nationality: "",
    ethnicity1: "",
    ethnicity2: "",
    race1: "",
    race2: "",
    veteranStatus: "",
    militaryBranch: "",
    disability: "",
    accommodation: "",
    personalMessage: "",
    onlineStatus: "",
    timezone: "",
  };
  communicationPreferences = {
    languages: [],
    primaryLanguage: "",
    secondaryLanguage: "",
    tertiaryLanguage: "",
    emailAddress: "",
    phoneNumbers: [],
    officePhone: "",
    mobilePhone: "",
    url: "https://www.ahea.edu/about-ahea/college-of-business/bdexter",
    receiveSMS: false,
  };

  contactInformation = {
    primary: {
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      county: "",
      country: "",
      mailName: "",
      phoneNumber: "",
      phoneNumberType: "",
      emailAddress: "",
      emailAddressType: "",
    },
    secondary: {
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      county: "",
      country: "",
      mailName: "",
      phoneNumber: "",
      phoneNumberType: "",
      emailAddress: "",
      emailAddressType: "",
    },
  };
  emergencyContacts = {
    primary: {
      name: "",
      relationship: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      county: "",
      country: "",
      mailName: "",
      phoneNumber: "",
      phoneNumberType: "",
      emailAddress: "",
      emailAddressType: "",
    },
    secondary: {
      name: "",
      relationship: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      county: "",
      country: "",
      mailName: "",
      phoneNumber: "",
      phoneNumberType: "",
      emailAddress: "",
      emailAddressType: "",
    },
  };
  credentials = {
    educationLevel: "",
    degrees: [], // array of objects containing name, discipline, institution, graduationYear
    additionalGraduateHours: [], // array of objects containing areaOfStudy, institution, numberOfHours
    certificates: [], // array of objects containing name, institution, numberOfHours
    certifications: [], // array of objects containing name, governingBody and expirationDate
  };
}
