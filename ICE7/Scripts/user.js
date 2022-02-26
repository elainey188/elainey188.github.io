(function(core){
    class User
    {
        //constructor
        constructor(displayName = "", emailAddress = "", username = "", password =""){
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        
        //overriden methods
        toString()
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUser name : ${this.Username}`;
        }


        //utility methods
        toJSON()
        {
            return{
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }
        fromJSON(data)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }
        serialize(){
            if(this.DisplayName !=="" && this.EmailAddress !=="" && this.UserName !==""){
                return  `${this.DisplayName},${this.EmailAddress},${this.UserName}`;
            }
            console.error("One or more properties of the User object are missing!");
             return null;
       }
    
       deserialize(data)
       {
             let propertyArray = data.split(",");
             this.DisplayName = propertyArray[0];
             this.EmailAddress = propertyArray[1];
             this.UserName = propertyArray[2];
       }
       

    }
     
    
})