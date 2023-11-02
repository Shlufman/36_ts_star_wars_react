import React, {Component} from 'react';
import {StarWarContext} from "../utils/starWarContext";
import {friendItems, navItems, TFriendItem, TNavItem} from "../utils/constants";

interface PropsApp {
    children: React.ReactNode;
}
interface StateApp {
    friendItems: Array<TFriendItem>;
    navItems: Array<TNavItem>;
    activePage: TNavItem;
}

type TFChangePage = (page: TNavItem) => void;
class StateProviderApp extends Component<PropsApp,StateApp> {
    constructor(props: PropsApp) {
        super(props);
        this.state = {
            activePage: navItems[0],
            friendItems,
            navItems,
        };
    }

    changePage: TFChangePage = (page: TNavItem) => this.setState({activePage: page});
    render() {
        return (
                <StarWarContext.Provider value={
                    {
                        friendItems: this.state.friendItems,
                        changePage: this.changePage,
                        navItems: this.state.navItems,
                        activePage:this.state.activePage,
                    }
                }>
                    {this.props.children}
                </StarWarContext.Provider>
        );
    }
}

export {StateProviderApp, type TFChangePage};