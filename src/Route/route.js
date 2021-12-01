import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddContact from "../componets/AddContact";
import Contact from "../componets/Contact";
import ContactsList from "../componets/ContactList";
function route(){
<Router>
{/* <Switch> */}
<Route exact path="/" component={ContactsList} />
<Route exact path="/add" component={AddContact} />
<Route path="/contacts/:id" component={Contact} />
{/* </Switch> */}
</Router>
}
export default route
