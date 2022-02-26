
(function(core){
    class Router
    {

        //public properties
        /**
         *
         *@returns {string}
         */
        get ActiveLink()
        {
            return this.m_ActiveLink;    
        }
        /**
         *
         *@param{string} link
         *@returns{void}
         */
        set ActiveLink(link)
        {
            this.m_ActiveLink = link;
        }

        //Constructor
        constructor(){
            this.ActiveLink = "";
        }
          
        /**
         * This method adds a new route to the routing table
         * @param {string} route 
         * @returns {void}
         */

        //public methods
        Add(route)
        {
            this.m_routingTable.push(route);
        }


        /**
         * This method replaces the reference for the routing table with a new one
         * Note: Routes should start with a forward slash character
         * @param {string[]} routingTable 
         * @returns {void}
         */
        AddTable(routingTable)
        {
              this.m_routingTable = routingTable;
        }

        /**
         * Finds and returns the index of the route in the routing table.Returns 
         * -1 if not found
         * @param {string} route 
         * @returns {number}
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route)
        }
        /**
         * This method removes a route from the routing table and returns true
         * if successfully removed otherwise false
         * @param {string} route 
         * @returns {boolean}
         */
        Remove(route)
        {
            if(this.Find(route) > -1)
            {
                //remove the route
                this.m_routingTable.splice(this.Find(route),1);
                return true;
            }
            return false;
        }
         //override methods

        /**
         * This method overrides built-in toString method returns the routing table in a comma separated string
         * @override
         * @returns {string}
         */

       
        toString()
        {
           return this.m_routingTable.toString();
        }
    }
     core.Router = Router;

})(core || (core = {}));

let router = new core.Router();
let routingTable=[
    "/" , //default route
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit"

     
];

router.AddTable(routingTable);

let route = location.pathname;

if (router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else{
    router.ActiveLink = "404";
}

