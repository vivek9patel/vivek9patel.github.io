import React from 'react';
import $ from 'jquery';

export function Settings(props) {
    let wallpapers = [
        { path: "./images/wallpapers/wall-1.jpg" },
        { path: "./images/wallpapers/wall-2.png" },
        { path: "./images/wallpapers/wall-3.jpg" },
        { path: "./images/wallpapers/wall-4.jpg" },
        { path: "./images/wallpapers/wall-5.jpg" },
        { path: "./images/wallpapers/wall-6.png" },
        { path: "./images/wallpapers/wall-7.png" },
        { path: "./images/wallpapers/wall-8.jpg" },
    ];

    let changeBackgroundImage = (e) => {
        props.changeBackgroundImage($(e.target).data("path"));
    }

    return (
        <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey"}>
            <div className="flex justify-center items-center my-4">
                <img className=" w-2/5" src={props.currBgImg} alt="Ubuntu Current Wallpaper" />
            </div>
            <div className="flex flex-wrap justify-center items-center border-t border-gray-900">
                {
                    wallpapers.map(wallpaper => {
                        return (
                            <div tabIndex="2" onFocus={changeBackgroundImage} data-path={wallpaper.path} className={((wallpaper.path === props.currBgImg) ? " border-yellow-700 " : " border-transparent ") + " px-28 py-20 outline-none border-4 border-opacity-80 m-4"} style={{ backgroundImage: `url(${wallpaper.path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Settings


export const displaySettings = () => {
    return <Settings> </Settings>;
}
