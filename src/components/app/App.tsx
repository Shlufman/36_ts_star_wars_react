import './App.css';
import {Header} from "../header";
import {Footer} from "../footer";
import {Main} from "../main";

import {friendItems,navItems, urlImageSrc, TNavItem, TFriendItem} from "../../utils/constants";
import React, {Component} from "react";

interface PropsApp{

}

interface StateApp{
    friendItems :Array<TFriendItem>;
    navItems:Array<TNavItem>;
    urlImageSrc:string;
}

class App extends Component<PropsApp, StateApp>
{
    constructor(props:PropsApp) {
        super(props);
        this.state={
            friendItems,
            navItems,
            urlImageSrc
        };
    }
    render():React.ReactNode {
        return (
            <div className="container-fluid">
                <Header {...this.state}/>
                <Main {...this.state}/>
                <Footer />
            </div>
        );
    }
}

export default App;