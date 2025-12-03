export const cleanPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/\D/g, '');
};
