export const validateData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        .test(email);
    const strongPassword = /^(?=(.*[A-Z]){2,})(?=(.*[!@#$&*]){1,})(?=(.*[0-9]){2,})(?=(.*[a-z]){3,}).{8,}$/
        .test(password);

    if (!isEmailValid) return "Invalid Email ID";
    if (!strongPassword) return "Password must contain at least 2 uppercase letters, 2 digits, 3 lowercase letters, and 1 special character.";

    return true;
};
