namespace core{
     export class Contact
 {

    //private instance members
    private m_fullName : string;
    private m_contactNumber:string;
    private m_emailAddress:string;
   //public properties(getters and setters)
   public get FullName(): string
   {
       return this.m_fullName;
   }
   public set FullName(fullName:string)
   {
       this.m_fullName = fullName;
   }
   public get ContactNumber():string
   {
       return this.m_contactNumber;
   }
   public set ContactNumber(contactNumber:string)
   {
       this.m_contactNumber = contactNumber;
   }
   public get EmailAddress():string
   {
       return this.m_emailAddress;
   }
   public set EmailAddress(emailAddress:string)
   {
       this.m_emailAddress = emailAddress;
   }




   //constructor
   constructor(fullName:string ="",contactNumber: string ="",emailAddress:string="")
   {
       this.m_fullName = fullName;
       this.m_contactNumber = contactNumber;
       this.m_emailAddress = emailAddress;

   }

   //public utility methods
   /**
    * 
    * @returns {(string|null)}
    */

   serialize():string | null{
        if(this.FullName !=="" && this.ContactNumber !=="" && this.EmailAddress !==""){
            return  `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("One or more properties of the contact object are missing!")
         return null;
   }

   /**
    * 
    * @param {string} data 
    * @returns {void}
    */
   deserialize(data : string) : void
   {
         let propertyArray:string[] = data.split(",");
         this.FullName = propertyArray[0];
         this.ContactNumber = propertyArray[1];
         this.EmailAddress = propertyArray[2];
   }
   
   //public override
   /**
    * Overrides the built-in toString() method and returns a string that contains the values of the object
    * @returns {string}
    */
   toString()
   {
       return `FullName    : ${this.FullName}\nContactNumber : ${this.ContactNumber}\nEmailAddress : ${this.EmailAddress}`;
   }


}
}