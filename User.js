const Contact = require("./Contact.js")


class User {
    static allUser = []
    static id = 0
    constructor(name, age, gender, isAdmin) {
        this.name = name
        this.age = age
        this.gender = gender
        this.isAdmin = isAdmin
        this.id = User.id++
        this.contact = []
    }
  
    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error('Invalid name')
            }
            if (typeof age != 'number') {
                throw new Error('Invalid age')
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error('Invalid gender')
            }
            return new User(name, age, gender, true)

        } catch (error) {
            console.log(error.message);
        }

    }

    #updateName(newValue, index) {
        if (typeof newValue != 'string') {
            throw new Error("Invalid Name")
        }
        User.allUser[index].name = newValue

    }
    #updateAge(newValue, index) {
        if (typeof newValue != 'number') {
            throw new Error("Invalid age")
        }
        User.allUser[index].age = newValue
    }

    #updateGender(newValue, index) {
        if (typeof newValue != 'string') {
            throw new Error("Invalid Gender")
        }
        User.allUser[index].gender = newValue
    }

    newUser(name, age, gender) {

        try {
            if (!this.isAdmin) {
                return new Error("Only admin can access")
            }
            if (typeof name != 'string') {
                throw new Error("Invalid name")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid age")
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error("Invalid gender")
            }
            let newUser = new User(name, age, gender, false)
            User.allUser.push(newUser)
            return newUser

        } catch (error) {
            console.log(error.message);
        }
    }

    getAllUser() {
        try {

            if (!this.isAdmin) {
                throw new Error("Only admin can access")
            }
            return User.allUser
        } catch (error) {
            console.log(error.message);
        }

    }

    updateUser(userId, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin ca access")
            }

            let index = User.#findUser(userId)
            if (index == null) {
                throw new Error("Invalid User Id")
            }
            switch (parameter) {
                case 'name':
                    this.#updateName(newValue, index)
                    break
                case 'age':
                    this.#updateAge(newValue, index)
                    break
                case 'gender':
                    this.#updateGender(newValue, index)
                    break
                default:
                    return "Invalid Parameter"
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    static #findUser(userId) {
        try {

            if (typeof userId != 'number') {
                throw new Error("Invalid User Id")
            }
            for (let index = 0; index < User.allUser.length; index++) {
                if (userId == User.allUser[index].id) {
                    return index
                }
            }
            return -1

        } catch (error) {
            console.log(error.message);
        }
    }

    deleteUser(userId) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin Can Access");
            }
            let index = User.#findUser(userId);
            if (index == null) {
                throw new Error("Invalid User Id")
            }
            User.allUser.splice(index, 1);
        } catch (error) {
            console.log(error.message);

        }
    }

    createContact(name){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            let newContact = Contact.newContact(name)
            this.contact.push(newContact)
            return newContact
        } catch (error) {
            console.log(error.message);
        }
    }

    getAllContact(){
        try {
            if(this.isAdmin){
                throw new Error ("Admin Access Prohibited")
            }
            return this.contact
        } catch (error) {
            console.log(error.message);
        }
    }

    updateContact(contactId,parameter,newValue){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(contactId <0 || typeof contactId !='number'){
                throw new Error("Invalid input")

            }
            let [contactToBeUpdated,index]=this.#findContact(contactId)
            if(contactToBeUpdated ==  null){
                throw new Error("Invalid Id")
            }
            contactToBeUpdated.updateContact(parameter,newValue)
              
        } catch (error) {
            console.log(error.message);
        }
    }

    #findContact(contactId){
        if (typeof contactId != 'number') {
            throw new Error("Invalid User Id")
        }
        for (let index = 0; index < this.contact.length; index++) {
            if (contactId == this.contact[index].id) {
                return [this.contact[index],index]
            }

        }
        return[null,-1]
    }

    deleteContact(contactId){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(typeof contactId != 'number'){
                throw new Error("Invalid input")
            }

             let [contactToBeDeleted,index]=this.#findContact(contactId)
             if(index==-1){
                throw new Error("Invalid Id")
             }
             this.contact.splice(index,1)
        } catch (error) {
            console.log(error.message);
        }
    }

    createContactInfo(contactId,typeOfContact,valueOfContact){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(typeof contactId != 'number'){
                throw new Error("Invalid input")
            }

            let [contactInfoToBeCreated,index]=this.#findContact(contactId)

           let contactInfo= contactInfoToBeCreated.createContactInfo(typeOfContact,valueOfContact)
           return contactInfo
        } catch (error) {
            console.log(error.message);
        }
    }

    getAllContactInfo(contactId){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(typeof contactId != 'number'){
                throw new Error("Invalid input")
            }
            let [contactInfoToBeDisplayed,index]=this.#findContact(contactId)
            let allcontactinfo=contactInfoToBeDisplayed.getAllContactInfo()
            return allcontactinfo

        } catch (error) {
            console.log(error.message);
        }
    }

    updateContactInfo(contactId,contactInfoId,parameter,newValue){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(typeof contactId != 'number'){
                throw new Error("Invalid input")
            }
            if(typeof contactInfoId != 'number'){
                throw new Error("Invalid Id")
            }
            
            let [contactInfoToBeUpdated,index]=this.#findContact(contactId)
            if(contactInfoToBeUpdated ==  null){
                throw new Error("Invalid Id")
            }
            contactInfoToBeUpdated.updateContactInfo(contactInfoId,parameter,newValue)
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
    deleteContactInfo(contactId,contactInfoId){
        try {
            if(this.isAdmin){
                throw new Error("Admin Access Prohibited")
            }
            if(typeof contactId != 'number'){
                throw new Error("Invalid Id")
            }
            if(typeof contactInfoId != 'number'){
                throw new Error("Invalid Id")
            }

            let [contactInfoToBeDeleted,index]=this.#findContact(contactId)
            if(contactInfoToBeDeleted ==  null){
                throw new Error("Invalid Id")
            }
            contactInfoToBeDeleted.deleteContactInfo(contactInfoId)

        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = User