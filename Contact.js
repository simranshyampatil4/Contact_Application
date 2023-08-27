const ContactInfo = require("./ContactInfo")


class Contact{

    static id=0
    constructor(name){
        this.name=name
        this.id= Contact.id++
        this.ContactInfo=[]
    }

    static newContact(name){
        if(typeof name != 'string'){
            throw new Error("Invalid Name")
        }
        return new Contact(name)
        
    }

    #updateName(parameter,newValue){

        if(typeof parameter != 'string'){
            throw new Error("Invalid Parameter")
        }
        this.name=newValue
    }

    updateContact(parameter,newValue){
        switch(parameter){
            case 'name': 
            this.#updateName(parameter,newValue)
            break
            default: 
                throw new Error("Invalid Parameter")
        }
    }

    createContactInfo(typeOfContact,valueOfContact){
        let contactInfo= ContactInfo.createContactInfo(typeOfContact,valueOfContact)
        this.ContactInfo.push(contactInfo)
        return contactInfo
    }

    getAllContactInfo(){
        return this.ContactInfo
    }

    updateContactInfo(contactInfoId,parameter,newValue){
        let [contactInfoToBeUpdated,index]=this.#findContactinfo(contactInfoId)
            if(contactInfoToBeUpdated ==  null){
                throw new Error("Invalid Id")
            }
        switch(parameter){
            case 'typeOfContact':
                contactInfoToBeUpdated.updateTypeofContactInfo(parameter,newValue)
                break
            case 'valueOfContact':
                contactInfoToBeUpdated.updateValueofContactInfo(parameter,newValue)
                break
            default:
                throw new Error("Invalid parameter")
        }
    }

    #findContactinfo(contactInfoId){
        if (typeof contactInfoId != 'number') {
            throw new Error("Invalid Id")
        }
        for (let index = 0; index < this.ContactInfo.length; index++) {
            if (contactInfoId == this.ContactInfo[index].id) {
                return [this.ContactInfo[index],index]
            }
        }
        return[null,-1]
    }

    deleteContactInfo(contactInfoId){
        let [contactInfoToBeDeleted,index]=this.#findContactinfo(contactInfoId)
        if(index==-1){
            throw new Error("Invalid Id")
        }
        this.ContactInfo.splice(index,1)
    }
}

module.exports=Contact