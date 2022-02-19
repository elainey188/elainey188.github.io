(function(){

    /**
     * This function uses AJAX to open a connection to the server and returns
     * the data payload to the call back function
     * 
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */

    function AjaxRequest(method,url,callback){

            //Ajax steps
      //Step 1 - Instantiate an XHR object.
      let XHR =new XMLHttpRequest();

      //Step 2- add an event listener for readystatechange.
      XHR.addEventListener("readystatechange",() =>
      {
          if(XHR.readyState === 4 && XHR.status === 200)
          {
              if(typeof callback === "function")
              {
                callback(XHR.responseText);
              }
              
              else{
                console.error("ERROR: callback not a function");
              }
             
          }
         
      });
      
      

      //Step 3- Open a connection to the server
      XHR.open(method,url);
      //Step 4- Send request to server
      XHR.send();
        
    }
    /**
     * This function loads the nav bar content into the page.
     * @param {string} data 
     */

    function LoadHeader(data)
    {
        $("header").html(data);
          $(`li>a:contains(${document.title})`).addClass("active");
          CheckLogin();

    }

    function DisplayHomePage(){

        console.log("Home Page");

      $("#AboutUsButton").on("click",() =>{
          location.href = "about.html";
      })
    
  
    
    }
       
    function DisplayProductPage(){

        console.log("Products Page");
    }
    function DisplayServicesPage(){
        console.log("Services Page");
    }
    function DisplayAboutPage(){
        console.log("About Us Page");
    }
   
    function CheckLogin()
    {
        if(sessionStorage.getItem("user"))
        {
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i>Logout</a>`
            );
            $("#logout").on("click", function()
            {
                sessionStorage.clear();

                location.href = "login.html";
            })
        }

    }

    
    function DisplayRegisterPage(){

        console.log("Register");

      };
    function DisplayLoginPage(){
        console.log("Login");
        let messageArea = $("#messageArea");
        messageArea.hide();
  
        $("#loginButton").on("click", function()
        {
            let success = false;

            
           

            $.get("./Data/users.json", function(data)
            {
                for (const user of data.users)
                {
                    if (username.value == user.Username && password.value == user.Password)
                    {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }
                if(success)
                {
                    sessionStorage.setItem("user",newUser.serialize());
    
                    //hiding error message
                    messageArea.removeAttr("class").hide();
    
                   // redirect the user
                   location.href = "contact-list.html";
                }
                else{
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
            });
            });

        $("#cancelButton").on("click", function()
        {
            document.forms[0].reset();

            
        }
        )
    }

    
    function ValidateField(input_field_ID,regular_expression,error_message)
    {
        let messageArea = $("#messageArea").hide();

       

        $("#" + input_field_ID).on("blur",function()
        {
           let inputFieldText = $(this).val();
           if(!regular_expression.test(inputFieldText))
           {
               //fails regex test
               $(this).trigger("focus");
               $(this).trigger("select");
               messageArea.addClass("alert alert-danger");
               messageArea.text("Please enter a valid full name.");
               messageArea.show(error_message);
           }
           
           else
           {
               messageArea.removeAttr("class").hide();
              
           }
        })

    }
   
    function ContactFormValidation(){
        ValidateField("emailAddress", /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,"Please enter a valid email address!");
        ValidateField("fullName",/^([A-Z][a-z]{1,})((\s|,|-)([A-Z][a-z]{1,}))*(\s|,|-)([A-Z][a-z]{1,})$/,"Please enter a valid full name!");

        ValidateField("contactNumber",/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,"Please enter a valid contact number!")

    }
    function DisplayContactPage(){
        console.log("Contact Page");


    }




    //Added Function
    function DisplayContactListPage(){
        console.log("Contact List Page")
       

        if (localStorage.length  > 0)
        {
            let contactList = document.getElementById("contactList");
            let data = "";
            let keys = Object.keys(localStorage);
            let index = 1;

            for (const key of keys)
            {
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);

                //add a repeatable row
                data += `<tr>
                <th scope = "row" class = "text-center">${index}</th>
                <td>${contact.fullName}</td>
                <td>${contact.contactNumber}</td>
                <td>${contact.emailAddress}</td>
                <td class="text-center">button value ="${key}" class="btn btn-primary btn-lg"</td>
                <td class="text-center">button value ="${key}" class="btn btn-danger btn-lg"</td>
                `;
                index ++;
            }
        }
    }
    
    
    function Start()
    {
        console.log("App Started!");
        AjaxRequest("GET", "header.html", LoadHeader);
        
    
        switch(document.title){
            case "Home":
            DisplayHomePage();
                break;
            case "Our Products":
            DisplayProductPage();
               break;
            case "Our Services":
            DisplayServicesPage();
               break;
            case "About Us":
            DisplayAboutPage();
               break;
            case "Contact Us":
                ContactFormValidation();
                case "Register":
                DisplayRegisterPage();
            case "login":
                DisplayLoginPage();
            DisplayContactPage();
            case "ContactList":
            DisplayContactListPage();
               break;
           



         

        }
      
    }
  
  window.addEventListener("load",Start);
   
  
})();

