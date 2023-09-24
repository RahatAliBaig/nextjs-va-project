import { MdAdminPanelSettings } from 'react-icons/md';
import { RiCustomerService2Fill, RiFileSearchFill } from 'react-icons/ri';
import { BiSolidBookContent, BiLogoFacebookCircle, BiLogoDiscordAlt } from 'react-icons/bi';
import { SiMediamarkt } from 'react-icons/si';
import { GiTakeMyMoney } from 'react-icons/gi';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const navlink = [
    {
        title: 'Home',
        link: '/',
        submenu: false,
    },
    {
        title: 'About',
        link: '/about',
        submenu: false,
    },
    {
        title: 'Services',
        link: '#',
        submenu: true,
        subnavbar: [
            {
                icon: <MdAdminPanelSettings />,
                title: 'Administrative Tasks',
                link: '/services/administrative-tasks',
            },
            {
                icon: <RiCustomerService2Fill />,
                title: 'Customer Support',
                link: '/services/customer-support',
            },
            {
                icon: <BiSolidBookContent />,
                title: 'Content Creation',
                link: '/services/content-creation',
            },
            {
                icon: <RiFileSearchFill />,
                title: 'Research and Data Analysis',
                link: '/services/research-and-data-analysis',
            },
            {
                icon: <SiMediamarkt />,
                title: 'Social Media Management',
                link: '/services/social-media-management',
            },
            {
                icon: <GiTakeMyMoney />,
                title: 'Bookkeeping and Financial Tasks',
                link: '/services/bookkeeping-and-financial',
            },
        ]
    },
    {
        title: 'Pricing',
        link: '/pricing',
        submenu: false,
    },
    {
        title: 'Why Us?',
        link: '/why-us',
        submenu: false,
    },
    {
        title: 'FAQs',
        link: '/faqs',
        submenu: false,
    },
    {
        title: 'Blog',
        link: '/blogs',
        submenu: false,
    },
    {
        title: 'Contact',
        link: '/contact',
        submenu: false,
    },
]

const headerIcons = [
    {
        icon: <BiLogoFacebookCircle />,
        title: 'Facebook',
        link: 'https://facebook.com',
    },
    {
        icon: <AiFillInstagram />,
        title: 'Instagram',
        link: 'https://instagram.com',
    },
    {
        icon: <AiFillTwitterCircle />,
        title: 'Twitter',
        link: 'https://twitter.com',
    },
    {
        icon: <BiLogoDiscordAlt />,
        title: 'Discord',
        link: 'https://discord.com',
    },
]



export {
    navlink,
    headerIcons,
}