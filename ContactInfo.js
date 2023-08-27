class ContactInfo{

    static id=0
    constructor(typeOfContact,valueOfContact){
        this.typeOfContact=typeOfContact
        this.valueOfContact=valueOfContact
        this.id=ContactInfo.id++

    }

     static createContactInfo(typeOfContact,valueOfContact){
        if(typeof typeOfContact !='string'){
            throw new Error("Invalid input")
        }
        if(typeof valueOfContact != 'number' && typeof valueOfContact!='string'){
            throw new Error("Invalid input")
        }
       return new ContactInfo(typeOfContact,valueOfContact)
     }

     updateTypeofContactInfo(parameter,newValue){
        if(typeof parameter != 'string'){
            throw new Error("Invalid parameter")
        }
        if(typeof newValue != 'string'){
            throw new Error("Invalid parameter")
        }
        this.typeOfContact=newValue
    }

    updateValueofContactInfo(parameter,newValue){
        if(typeof parameter != 'string'){
            throw new Error("Invalid parameter")
        }
        this.valueOfContact=newValue
    }
}

module.exports=ContactInfo