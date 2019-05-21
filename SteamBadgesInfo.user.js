// ==UserScript==
// @name         Steam Badges Info
// @namespace    https://steamcommunity.com
// @version      0.2
// @description  This script shows you more information in the badges section
// @author       MrMarble
// @match        https://steamcommunity.com/id/*/badges/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/MrMarble/SteamBadgesInfo/master/SteamBadgesInfo.user.js
// @downloadURL  https://raw.githubusercontent.com/MrMarble/SteamBadgesInfo/master/SteamBadgesInfo.user.js

// ==/UserScript==

(function() {
    'use strict';

    let badges_count = document.getElementsByClassName('badge_craft_button').length;

    let next_badges_count = Object.assign([], document.getElementsByClassName('badge_progress_info')).map(e => {
        let regex = /(\d+)[a-z ]+(\d+)/
        if(regex.match(e.innerText)){
            let cardsLeft = parseInt(regex.exec(e.innerText)[2]) - parseInt(regex.exec(e.innerText)[1]);
            return cardsLeft;
        }
    }).filter(e => e === 1).length;

    document.querySelector('.profile_paging').childNodes[2].data+= ` (${badges_count} ready | ${next_badges_count} left)`;
})();
