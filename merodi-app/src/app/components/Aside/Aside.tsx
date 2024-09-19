"use client";
import React from "react";
import "./Aside.module.scss";
import Image from "next/image";

interface Props {
    Image: string;  
}

const Aside = () => {
    return (
        <div className="main-aside">
        <div className="merodi-logo-container">
            <Image 
            src={'/images/BurgerMenu/Favorite.svg'}
            alt={'Favorite Frame'}
            width={48}
            height={48} />
            {/* <img src="./images/merodi-logo.png" alt="" />
            <p>merodi</p> */}
        </div>
        <div>
            <div className="house-logo-div">
                <img src="./images/house-logo.png" alt="" />
                <p>Home</p>
            </div>
        </div>
        <div className="main-playlist-div">
            <div className="add-playlist-div">
                <img src="./images/add-button.png" alt="" />
                <input type="text" placeholder="Add New Playlist" />
            </div>
            <div className="favorite-playlist-div">
                <img src="./images/like-button.png" alt="" />
                <div className="playlist-songs-div">
                    <p>Your Favorites</p>
                    <button>
                        <img src="./images/music-icon.png" alt="" />
                        <p>Playlist ◦ 98 Songs</p>
                    </button>
                </div>
            </div>
            <div className="favorite-playlist-div">
                <img src="./images/jazz-logo.png" alt="" />
                <div className="playlist-songs-div">
                    <p>Jazz Vibes</p>
                    <button className="playlist-button">
                        <img src="./images/music-icon.png" alt="" />
                        <p>Playlist ◦ 45 Songs</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aside;