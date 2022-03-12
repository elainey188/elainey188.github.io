namespace core{
    export class User
    {
        //private  members
        private m_displayName: string;
        private m_emailAddress: string;
        private m_username: string;
        private m_password: string;


        public get DisplayName(): string
        {
             return this.m_displayName;
        }
        public set DisplayName (displayName: string)
        {
             this.m_displayName = displayName;
        }
        public get EmailAddress(): string
        {
             return this.m_emailAddress;
        }
        public set EmailAddress (emailAddress: string)
        {
             this.m_emailAddress= emailAddress;
        }
        public get Username(): string
        {
             return this.m_username;
        }
        public set Username (username: string)
        {
             this.m_username = username;
        }
        public get Password(): string
        {
             return this.m_password;
        }
        public set Password (password: string)
        {
             this.m_password = password;
        }

        //constructor
        constructor(displayName = "", emailAddress = "", username = "", password =""){
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        /**
         * Overrides built-in to String() method and returns a comma separated string containing the object's property values.
         * @override
         * @returns string
         */
        //overriden methods
        toString()
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUser name : ${this.Username}`;
        }


        //utility methods
      
        toJSON(): {DisplayName: string,EmailAddress: string, Username: string,Password: string}
        {
            return{
                 "DisplayName": this.DisplayName,
                 "EmailAddress": this.EmailAddress,
                 "Username": this.Username,
                "Password" : "[HIDDEN]"
            }
        }
        //TODO : need to fix parameter data type
        fromJSON(data: User) : void
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }
        /**
         * Converts the objects properties into a comma separated string
         * @returns {(string | null)}
         */
        serialize(): string |null 
        {
            if(this.DisplayName !=="" && this.EmailAddress !=="" && this.Username !=="")
            {
                return  `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            else{
                console.error("One or more properties of the User object are missing!");
                return null;
            }
           
       }
    
       deserialize(data : string)
       {
             let propertyArray = data.split(",");
             this.DisplayName = propertyArray[0];
             this.EmailAddress = propertyArray[1];
             this.Username = propertyArray[2];
       }
       

    }
     
    
}