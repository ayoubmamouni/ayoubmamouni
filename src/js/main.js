// elements id
const WebsiteTitle = document.querySelector("#title");
const mainImg = document.querySelector("#mainImg");
const authorName = document.querySelector("#authorName");
const descriptionText = document.querySelector("#descriptionText");
const fbAccount = document.querySelector("#fbAccount");
const igAccount = document.querySelector("#igAccount");
const githubAccount = document.querySelector("#githubAccount");
const youtubeAccount = document.querySelector("#youtubeAccount");
const twitterAccount = document.querySelector("#twitterAccount");

// Select elements by thier class name
const github = document.querySelector(".github");
const fbClass = document.querySelector(".fb");
const igClass = document.querySelector(".ig");
const youtube = document.querySelector(".youtube");
const twitter = document.querySelector(".twitter");

//show social accounts function
function socialMediaAcc(Atag, parentClass, url) {
  Atag.setAttribute("href", url);
  parentClass.style.display = "block";
}

// get data from config.json file and display it in main page.
fetch("/config.json")
  .then((response) => response.json())
  .then((data) => {
    // Website title
    WebsiteTitle.innerHTML = data.WebsiteTitle;
    // main Image source and ALt data
    mainImg.src = data.MainImgSrc;
    mainImg.alt = data.MainImgSrcALT;
    // authorName
    authorName.innerHTML = data.AuthorName;
    // description
    descriptionText.innerHTML = data.description;

    //   social accounts
    if (data.ShowGithub)
      socialMediaAcc(githubAccount, github, data.Github, false);
    if (data.ShowFb) socialMediaAcc(fbAccount, fbClass, data.Fb, false);
    if (data.showInstagram)
      socialMediaAcc(igAccount, igClass, data.Instagram, false);
    if (data.showYoutube)
      socialMediaAcc(youtubeAccount, youtube, data.Youtube, false);
    if (data.showTwitter)
      socialMediaAcc(twitterAccount, twitter, data.twitter, false);
  });
