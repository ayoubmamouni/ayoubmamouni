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
const whatsappAccount = document.querySelector("#whatsappAccount");

// classes
const github = document.querySelector(".github");
const fbClass = document.querySelector(".fb");
const igClass = document.querySelector(".ig");
const youtube = document.querySelector(".youtube");
const twitter = document.querySelector(".twitter");
const whatsapp = document.querySelector(".whatsapp");

//show social accounts function
function socialMediaAcc(Atag, parentClass, url, isWhatsapp) {
  if (isWhatsapp) {
    let whastappLink = `https://api.whatsapp.com/send?phone=${url}&text=Hi`;
    Atag.setAttribute("href", whastappLink);
  } else {
    Atag.setAttribute("href", url);
  }
  parentClass.style.display = "block";
}

// get data from config.json file
fetch("/config.json")
  .then((response) => response.json())
  .then((data) => {
    // Website title
    WebsiteTitle.innerHTML = data.WebsiteTitle;
    // main Image
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
    if (data.showtWhatsapp)
      socialMediaAcc(whatsappAccount, whatsapp, data.WhatsappNumber, true);
  });
