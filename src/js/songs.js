/**
 * songs.js
 *
 * The app's songs
 */
let laufeyPic =
  "https://musicdaily.com/wp-content/uploads/2023/03/Laufey-Press-Photos-Symphony-Photo-1-PC_-Erlendur-Sveinsson-1024x697.jpg";

let laufeyPic1 =
  "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84bf9a2639a70a7de091b55df2";

let eloisePic =
  "https://images.squarespace-cdn.com/content/v1/5e87e1a31b2121713d68edce/1586485262348-XX3W9Y1R6290WYIJDVCT/eloise+this+thing+called+living.jpg";

let brunoPic = "https://scenestr.com.au/images/stories/music/B/Bruno-Major/Bruno-Major-08-23.jpg";

window.songs = [
  // Laufey
  // Song 1
  {
    songId: "SID-7812",
    artistId: "AID-12345",
    title: "From the Start",
    year: "2023",
    duration: 150,
    url: "https://www.youtube.com/watch?v=lSD_L-xic9o",
    explicit: false,
    imageUrl: laufeyPic
  },
  // Song 2
  {
    songId: "SID-9546",
    artistId: "AID-12345",
    title: "Let You Break My Heart Again",
    year: "2021",
    duration: 204,
    url: "https://www.youtube.com/watch?v=NLphEFOyoqM",
    explicit: false,
    imageUrl: laufeyPic
  },
  // Song 3
  {
    songId: "SID-3205",
    artistId: "AID-12345",
    title: "Valentine",
    year: "2022",
    duration: 182,
    url: "https://www.youtube.com/watch?v=tyKu0uZS86Q",
    explicit: false,
    imageUrl: laufeyPic
  },
  // Song 4
  {
    songId: "SID-4897",
    artistId: "AID-12345",
    title: "Promise",
    year: "2022",
    duration: 196,
    url: "https://www.youtube.com/watch?v=Yq6qkq_TWAM",
    explicit: false,
    imageUrl: laufeyPic
  },
  // Song 5
  {
    songId: "SID-1734",
    artistId: "AID-12345",
    title: "Like the Movies",
    year: "2021",
    duration: 197,
    url: "https://www.youtube.com/watch?v=q0fnqat88IQ",
    explicit: false,
    imageUrl: laufeyPic1
  },
  // Song 6
  {
    songId: "SID-6283",
    artistId: "AID-12345",
    title: "Beautiful Stranger",
    year: "2022",
    duration: 185,
    url: "https://www.youtube.com/watch?v=INmi-teOQLA",
    explicit: false,
    imageUrl: laufeyPic1
  },
  // Song 7
  {
    songId: "SID-4509",
    artistId: "AID-12345",
    title: "Dreamer",
    year: "2022",
    duration: 225,
    url: "https://www.youtube.com/watch?v=AI29dHDkJh4",
    explicit: false,
    imageUrl: laufeyPic1
  },
  // Eloise
  // Song 1
  {
    songId: "SID-3942",
    artistId: "AID-54321",
    title: "Left Side",
    year: "2019",
    duration: 145,
    url: "https://www.youtube.com/watch?v=8koUC-NyQHY",
    explicit: false,
    imageUrl: eloisePic
  },
  // Song 2
  {
    songId: "SID-7128",
    artistId: "AID-54321",
    title: "Hungover",
    year: "2021",
    duration: 209,
    url: "https://www.youtube.com/watch?v=uPPikVDcyO8",
    explicit: true,
    imageUrl: eloisePic
  },
  // Song 3
  {
    songId: "SID-5619",
    artistId: "AID-54321",
    title: "You Dear",
    year: "2019",
    duration: 170,
    url: "https://www.youtube.com/watch?v=8MNEEGgFsKw",
    explicit: false,
    imageUrl: eloisePic
  },
  // Song 4
  {
    songId: "SID-2478",
    artistId: "AID-54321",
    title: "Subside",
    year: "2019",
    duration: 216,
    url: "https://www.youtube.com/watch?v=dHXMjoA-daA",
    explicit: false,
    imageUrl: eloisePic
  },
  // Song 5
  {
    songId: "SID-6304",
    artistId: "AID-54321",
    title: "Therapist",
    year: "2022",
    duration: 214,
    url: "https://www.youtube.com/watch?v=x3GHP7qn120",
    explicit: false,
    imageUrl: eloisePic
  },
  // Song 6
  {
    songId: "SID-8037",
    artistId: "AID-54321",
    title: "Drunk on a Flight",
    year: "2023",
    duration: 183,
    url: "https://www.youtube.com/watch?v=-UDfOrgznvI",
    explicit: false,
    imageUrl: eloisePic
  },
  // Song 7
  {
    songId: "SID-5241",
    artistId: "AID-54321",
    title: "Who's She",
    year: "2022",
    duration: 192,
    url: "https://www.youtube.com/watch?v=Lm_4Wnbp2Kc",
    explicit: false,
    imageUrl: eloisePic
  },
  // Bruno Major
  // Song 1
  {
    songId: "SID-3168",
    artistId: "AID-23456",
    title: "Nothing",
    year: "2017",
    duration: 186,
    url: "https://www.youtube.com/watch?v=ucRVDoFkcxc",
    explicit: false,
    imageUrl: brunoPic
  },
  // Song 2
  {
    songId: "SID-7051",
    artistId: "AID-23456",
    title: "Easily",
    year: "2017",
    duration: 200,
    url: "https://www.youtube.com/watch?v=sRJ4RywOPvA",
    explicit: false,
    imageUrl: brunoPic
  },
  // Song 3
  {
    songId: "SID-2384",
    artistId: "AID-23456",
    title: "Tapestry",
    year: "2020",
    duration: 256,
    url: "https://www.youtube.com/watch?v=ownFMreKi6o",
    explicit: false,
    imageUrl: brunoPic
  },
  // Song 4
  {
    songId: "SID-9012",
    artistId: "AID-23456",
    title: "The Most Beautiful Thing",
    year: "2020",
    duration: 210,
    url: "https://www.youtube.com/watch?v=1nml-_YE2OU",
    explicit: false,
    imageUrl: brunoPic
  },
  // Song 5
  {
    songId: "SID-8740",
    artistId: "AID-23456",
    title: "Regent's Park",
    year: "2020",
    duration: 177,
    url: "https://www.youtube.com/watch?v=sSvAFjpLaGA",
    explicit: true,
    imageUrl: brunoPic
  },
  // Song 6
  {
    songId: "SID-5693",
    artistId: "AID-23456",
    title: "Old Fashioned",
    year: "2021",
    duration: 226,
    url: "https://www.youtube.com/watch?v=dQzNowD82aU",
    explicit: false,
    imageUrl: brunoPic
  }
];
