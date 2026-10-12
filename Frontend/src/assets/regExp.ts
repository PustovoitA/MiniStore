

export const firstNameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/;
export const lastNameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/;
export const middleNameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const uaPhoneRegex = /^(?:\+?38)?\s*\(?0?(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export const streetRegex = /^[a-zа-яіїєґё][a-zа-яіїєґё\s.'’-]{1,49}$/iu;
export const houseNumberRegex = /^\d+[a-zа-яіїєґ]?(?:[/-]\d+[a-zа-яіїєґ]?)?$/iu;
export const apartmentRegex = /^\d{1,5}$/;