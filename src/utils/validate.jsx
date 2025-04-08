export const checkValidate = (email,password) => {
    //const isnameValid = /^[A-Za-z]+/.test(name);
    const isemailValid  = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //if(!isnameValid) return "name cannot contain numbers or underscores";
    if(!isemailValid) return "Email is not valid";
    if(!ispasswordValid) return "password is not valid";

    return null;

}