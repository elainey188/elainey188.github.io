"use strict"
(function()
{
    let protected_routes = [
        "contact-list"
    ];
    if(protected_routes.indexOf(router.ActiveLink) > -1)
    {
             //check if user is logged in
              if(!sessionStorage.getItem("user"))
              {
                   //redireect to login page
                    location.href = "/login";
              }


    }
  
})();
