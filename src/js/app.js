/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       RUCHELLE BAYBAYAN
 *      Student ID: 019315159
 *      Date:       November 29th 2024
 */

const { artists, songs } = window;

function createSongCard(song) {
  const card = document.createElement("div");
  card.classList.add("card");

  const link = document.createElement("a");
  link.href = song.url;
  link.classList.add("card-link");
  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;

  link.appendChild(songImg);
  songImg.classList.add("card-image");

  let title = document.createElement("h2");
  title.textContent = song.title;
  title.classList.add("card-title");

  let year = document.createElement("time");
  year.textContent = song.year;
  year.classList.add("card-year");

  const br = document.createElement("br");

  let time = document.createElement("span");
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration - minutes * 60;
  time.textContent = minutes + ":";
  if (seconds < 10) {
    time.textContent += "0";
  }
  time.textContent += seconds;
  time.classList.add("card-time");

  card.appendChild(link);
  card.appendChild(title);
  card.appendChild(year);
  card.appendChild(br);
  card.appendChild(time);

  return card;
}

function addLinks(artist, currentArtist) {
  artist.urls.forEach((e, index) => {
    const artistLink = document.createElement("a");
    artistLink.setAttribute("href", e.url);
    artistLink.innerHTML = e.name;
    currentArtist.appendChild(artistLink);
    if (index < artist.urls.length - 1) {
      artistLink.innerHTML += ", ";
    }
  });
}

function showDetails(artist) {
  const artistHeading = document.querySelector("#selected-artist");
  if (artistHeading) {
    artistHeading.textContent = artist.name + " (";
    addLinks(artist, artistHeading);
    artistHeading.appendChild(document.createTextNode(")"));
  }

  const main = document.getElementById("main");

  let cardContainer = document.querySelector(".card-container");
  if (!cardContainer) {
    cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    main.appendChild(cardContainer);
  } else {
    cardContainer.innerHTML = "";
  }

  const songList = songs.filter((song) => artist.artistId === song.artistId);
  songList.forEach((song) => {
    const card = createSongCard(song);
    cardContainer.appendChild(card);
  });
}

showDetails(artists[0]);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("laufeyBtn").addEventListener("click", () => showDetails(artists[0]));
  document.getElementById("eloiseBtn").addEventListener("click", () => showDetails(artists[1]));
  document.getElementById("brunoBtn").addEventListener("click", () => showDetails(artists[2]));
  document.getElementById("newArtist").addEventListener("click", () => {
    window.location.href = "new-artist.html";
  });
});

/* NEWSLETTER FORM */
// listen to change in input + post on submit
const newsletter = document.getElementById("email-form");
const newsSubmitBtn = document.getElementById("newsSubmitBtn");
const email = document.getElementById("email");

email.addEventListener("change", () => {
  if (email.value.trim()) {
    newsSubmitBtn.removeAttribute("disabled");
  }
});

newsletter.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({ email: email.value }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Success:", res.status, data); // log the 200 OK if its ok
    } else {
      console.error("Error:", res.status, res.statusText);
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
});
