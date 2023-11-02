type TFriendItem = {
    src: string;
    alt: string;
}

type TNavItem = 'Home' | 'About me' | 'Star wars' | 'Contact';

const navItems: Array<TNavItem> = ['Home', 'About me', 'Star wars', 'Contact'];
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

let title = 'title: The Empire Strikes Back episode: 5 release_date: 1980-05-17 opening\n' +
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

const starsWarInfo = ['Star Wars is an American epic space opera media franchise created by George Lucas, which began with\n' +
    '                the\n' +
    '                eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been\n' +
    '                expanded into various films and other media, including television series, video games, novels, comic\n' +
    '                books,\n' +
    '                theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star\n' +
    '                Wars is\n' +
    '                one of the highest-grossing media franchises of all time.',
'The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels\n' +
'                Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the\n' +
'                original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy,\n' +
'                consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode\n' +
'                III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his\n' +
'                ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens\n' +
'                (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).',
' All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards,\n' +
'                with wins going to the first two releases. Together with the theatrical live action "anthology" films\n' +
'                Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10\n' +
'                billion, making Star Wars the third-highest-grossing film franchise of all time.'];

const urlImageSrc: string = '../../styles/images/';

const url = 'https://sw-info-api.herokuapp.com/v1/' as const;
const period: number = 1000 * 60 * 60 * 24;

export {navItems, friendItems, urlImageSrc, title, starsWarInfo, url, period};
export {type TNavItem, type TFriendItem}