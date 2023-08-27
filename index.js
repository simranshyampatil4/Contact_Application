const User = require("./User");

let admin1= User.newAdmin('Simran',23,'F')
console.log(admin1);
let user1= admin1.newUser("Madhura",22,'F')
console.log(user1);
let user2= admin1.newUser("Rahul",21,'M')
console.log(user2);
console.log("All Users list");
console.log(admin1.getAllUser());
admin1.updateUser(1,'name','Rohit')
// admin1.updateUser(1,'age',20)
// admin1.updateUser(1,'gender','F')
console.log(admin1.getAllUser())
admin1.deleteUser(1)
console.log(admin1.getAllUser())
user1.createContact('Sanika')
user1.createContact('Deepanshu')
user1.createContact('Richa')
console.log(user1.getAllContact())
user1.updateContact(0,'name','Tanaya')
console.log(user1.getAllContact())
user1.deleteContact(2)
console.log(user1.getAllContact())
user1.createContactInfo(0,'mobileNo',12345678909)
console.log(user1.getAllContactInfo(0));
user1.createContactInfo(0,'company','AurionPro')
console.log(user1.getAllContactInfo(0));
user1.updateContactInfo(0,0,'valueOfContact',9876543223)
console.log(user1.getAllContactInfo(0));
user1.updateContactInfo(0,1,'typeOfContact','address')
console.log(user1.getAllContactInfo(0));
user1.deleteContactInfo(0,1)
console.log(user1.getAllContactInfo(0));