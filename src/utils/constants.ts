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

let title ='title: The Empire Strikes Back episode: 5 release_date: 1980-05-17 opening\n' +
    '            crawl: It is\n' +
    '            a dark\n' +
    '            time for the\n' +
    '            Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces\n' +
    '            from their\n' +
    '            hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of\n' +
    '            freedom\n' +
    '            fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.\n' +
    '            The evil\n' +
    '            lord\n' +
    '            Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into\n' +
    '            the far\n' +
    '            reaches of space.... ';


const urlImageSrc :string = '../../styles/images/';

export {navItems, friendItems, urlImageSrc, title};
export {type TNavItem, type TFriendItem}