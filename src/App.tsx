import React, {Component} from "react";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Main} from "./components/main";
import {friendItems, navItems, TNavItem, TFriendItem} from "./utils/constants";
import './App.css';
import {StarWarContext} from "./utils/starWarContext";
import {StateProviderApp} from "./data/StateProviderApp";

interface PropsApp {

}

interface StateApp {

}

class App extends Component<PropsApp, StateApp> {
    constructor(props: PropsApp) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <StateProviderApp>
                    <Header />
                    <StarWarContext.Consumer>
                        {value => <Main activePage={value.activePage} />}
                    </StarWarContext.Consumer>
                    <Footer/>
                </StateProviderApp>
            </div>
        );
    }
}

export {App};