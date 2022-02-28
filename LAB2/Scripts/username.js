    /**
     * Displays username between contact us and login on the navbar when user
     * clicks login button.
     */

     (function(core){

                      $("#loginButton").on("click", function()
                      {

                        document.getElementsByClassName("navbar navbar-expand-lg navbar-dark bg-dark").append(`<a id="username" class="nav-item" href="#">Username</a>`)
                        
                      })
              
    
       
    })(core || (core = {}))