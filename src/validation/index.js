export const emailvalidator = (email) => {
    let valid = true
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        valid = (true)
    }
    alert("You have entered an invalid email address!")
    valid = (false)
    return valid
};
// const dobvalidator = (dob) => {
//     let valid = true
//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
//         valid = (true)
//     }
//     alert("You have entered an invalid email address!")
//     valid = (false)
//     return valid
// };
// const namevalidator = (name) => {
//     let valid = true
//     return valid
// };

// export {
//     emailvalidator
// }