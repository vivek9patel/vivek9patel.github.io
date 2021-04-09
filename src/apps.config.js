import displayUbuntuStore from './components/apps/ubuntuStore';
import displayTodoist from './components/apps/todoist';
import displayTeams from './components/apps/msteams';
import displaySpotify from './components/apps/spotify';
import { displayTerminal } from './components/apps/terminal';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: () => { },
    },

    {
        id: "file-manager",
        title: "Files",
        icon: './themes/Yaru/apps/filemanager-app.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: () => { },
    },
    {
        id: "todo-ist",
        title: "Todoist",
        icon: './themes/Yaru/apps/todoist.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTodoist,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: true,
        favourite: true,
        desktop_shortcut: false,
        screen: () => { },
    },
    {
        id: "msteams",
        title: "Microsoft Teams",
        icon: './themes/Yaru/apps/msteams.png',
        disabled: true,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTeams,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // India Top 50 Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: true,
        favourite: true,
        desktop_shortcut: false,
        screen: () => { },
    },
    {
        id: "store",
        title: "Software Store",
        icon: './themes/Yaru/apps/software-store.png',
        disabled: true,
        favourite: true,
        desktop_shortcut: false,
        screen: displayUbuntuStore,
    },
    {
        id: "home_folder",
        title: "Home",
        icon: './themes/Yaru/system/user-home.png',
        disabled: true,
        favourite: false,
        desktop_shortcut: true,
        screen: () => { },
    },

    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: true,
        favourite: false,
        desktop_shortcut: true,
        screen: () => { },
    },
]

export default apps;