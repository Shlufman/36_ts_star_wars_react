type TFriendItem={
    src: string;
    alt:string;
}

type TNavItem = string;

const navItems:Array<TNavItem> = ['Home', 'About me', 'Star wars', 'Contact'];
const friendItems: Array<TFriendItem> = [{src: 'friend1.jpg', alt: 'friend1'},
    {src: 'friend2.jpg', alt: 'friend2'},
    {src: 'friend3.jpg', alt: 'friend3'},
    {src: 'friend4.jpg', alt: 'friend4'},
    {src: 'friend5.jpg', alt: 'friend5'},
    {src: 'friend6.jpg', alt: 'friend6'},
    {src: 'friend7.jpg', alt: 'friend7'},
    {src: 'friend8.jpg', alt: 'friend8'},
    {src: 'friend9.jpg', alt: 'friend9'},

];
const urlImageSrc :string = '../../styles/images/';

export {navItems, friendItems, urlImageSrc};
export {type TNavItem, type TFriendItem}