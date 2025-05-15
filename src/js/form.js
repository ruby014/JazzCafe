// * WEB222 – Assignment 06
//  *
//  * I declare that this assignment is my own work in accordance with
//  * Seneca Academic Policy. No part of this assignment has been
//  * copied manually or electronically from any other source
//  * (including web sites) or distributed to other students.
//  *
//  * Please update the following with your information:
//  *
//  *      Name:       RUCHELLE BAYBAYAN
//  *      Student ID: 019315159
//  *      Date:       November 29th 2024

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

/* REQUEST A NEW ARTIST FORM */
// add new link logic
const addBtn = document.getElementById("addSongLink");
addBtn.addEventListener("click", () => {
  const newInput = document.createElement("input");
  const songContainer = document.getElementById("songLinkWrapper");
  newInput.type = "url";
  newInput.id = "sLinks";
  newInput.name = "songLinks";
  newInput.placeholder = "Enter the URL for a song/video";
  const newline = document.createElement("br");
  songContainer.appendChild(newInput);
  songContainer.appendChild(newline);
});

// logic for validating not just whitespace
const requestForm = document.getElementById("music-form");
const requestBtn = document.getElementById("requestBtn");
const aName = document.getElementById("artistName");
const genre = document.getElementById("genre");
const media = document.getElementById("socialMedia");
const links = document.getElementById("sLinks");
const desc = document.getElementById("reason");

aName.addEventListener("change", () => {
  if (
    aName.value.trim() &&
    genre.value.trim() &&
    media.value.trim() &&
    links.value.trim() &&
    desc.value.trim()
  ) {
    requestBtn.removeAttribute("disabled");
  }
});

genre.addEventListener("change", () => {
  if (
    aName.value.trim() &&
    genre.value.trim() &&
    media.value.trim() &&
    links.value.trim() &&
    desc.value.trim()
  ) {
    requestBtn.removeAttribute("disabled");
  }
});

media.addEventListener("change", () => {
  if (
    aName.value.trim() &&
    genre.value.trim() &&
    media.value.trim() &&
    links.value.trim() &&
    desc.value.trim()
  ) {
    requestBtn.removeAttribute("disabled");
  }
});

links.addEventListener("change", () => {
  if (
    aName.value.trim() &&
    genre.value.trim() &&
    media.value.trim() &&
    links.value.trim() &&
    desc.value.trim()
  ) {
    requestBtn.removeAttribute("disabled");
  }
});

desc.addEventListener("change", () => {
  if (
    aName.value.trim() &&
    genre.value.trim() &&
    media.value.trim() &&
    links.value.trim() &&
    desc.value.trim()
  ) {
    requestBtn.removeAttribute("disabled");
  }
});

// submitting the form should submit a JSON - data to and from server
requestForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  const jsObject = {};
  let songsArray = [];

  for (let keyVal of fd.entries()) {
    if (keyVal[0] === "socialMedia") {
      keyVal[1] = keyVal[1].split(",");
    }
    if (keyVal[0] === "songLinks") {
      songsArray.push(keyVal[1]);
      keyVal[1] = songsArray;
    }
    if (keyVal[0] === "explicit") {
      keyVal[1] === "on" ? (keyVal[1] = "true") : (keyVal[1] = "false");
    }
    jsObject[keyVal[0]] = keyVal[1];
  }

  // turn into json string, the js object
  const json = JSON.stringify(jsObject);

  try {
    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: json,
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

/* BUTTON TO REDIRECT HOME */
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.href = "index.html";
});
