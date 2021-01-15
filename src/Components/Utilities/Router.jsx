import React from "react";
import { Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ContactUs from "../Pages/ContactUs";


const Router = (props) => {
    return(
        <div>
            <Route exact path={["/visotek", "/visotek/contact-us"]}
                render={props => (
                    <React.Fragment>
                        <Homepage {...props } />
                        <ContactUs />
                    </React.Fragment>
                )}
            />
        </div>
    )
}


export default Router;