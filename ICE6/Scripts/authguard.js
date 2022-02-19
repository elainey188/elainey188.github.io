(function()
{
    //check if user is logged in
    if(!sessionStorage.getItem("user"))
    {
        //redireect to login page
        location.href = "login.html";
    }
})();
