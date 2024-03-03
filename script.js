const button = document.getElementById("button")
    button.addEventListener("click", function() {
        button.style.display = "none";
        const IntroDiv = document.getElementById("Intro");
        videoID = videoBG(IntroDiv);
        two = false, four = false, six = false, eight = false, ten = false, twelve = false, fourteen = false, sixteen = false, twenty = false, twentyfive = false;
        videoID.addEventListener('timeupdate', function() {
            if (videoID.currentTime >= 2 && two == false) {
                two = true;
                videoID.style.filter = "brightness(0.1)";
                divText = IntroText(IntroDiv);
            }

            if (videoID.currentTime >= 4 && four == false) {
                four = true;
                divText[0].style.transform = "translateY(-100%)";
            }

            if (videoID.currentTime >= 6 && six == false) {
                six = true;
                divText[0].style.transform = "translateY(-200%)";
            }

            if (videoID.currentTime >= 8 && eight == false) {
                eight = true;
                divText[0].style.transform = "translateY(-300%)";
            }

            if (videoID.currentTime >= 10 && ten == false) {
                ten = true;
                divText[0].style.transform = "translateY(-400%)";
            }

            if (videoID.currentTime >= 12 && twelve == false) {
                twelve = true;
                divText[0].style.transform = "translateY(-500%)";
            }

            if (videoID.currentTime >= 14 && fourteen == false) {
                twelve = true;
                divText[0].style.transform = "translateY(-600%)";
            }

            if (videoID.currentTime >= 16 && sixteen == false) {
                sixteen = true;
                divText[1].style.opacity = 0;
                divText[1].style.filter = "blur(5px)";
            }

            if (videoID.currentTime >= 19 && twenty == false){
                twenty = true;
                videoID.style.filter = "brightness(0.5) blur(10px)";
                Logo(IntroDiv);
            }

            if (videoID.currentTime >= 24 && twentyfive == false){
                twentyfive = true;
                
                animation = document.getElementById("CreditID");
                animation.style.animation = "translate 120s linear forwards";
                Credits(allIMG);
            }

            if (videoID.currentTime >=26){
                LogoDiv = document.getElementById("LogoDiv");
                LogoDiv.style.transform = "translate(-50%,-50%) scale(0)";
                LogoDiv.style.opacity = 0;
                videoID.removeEventListener('timeupdate', arguments.callee);

            }
        });
    });

const videoBG = function(IntroDiv){
    const audio = new Audio('./Sound.mp3');
    const video = document.createElement('video');
    video.src = './BG.mp4';
    video.muted = true;                
    video.classList.add("videoBG");
    IntroDiv.appendChild(video);
    video.play();
    audio.play();
    return video;
}

/* Element de la vidéo jusqu'à 19secondes */
const IntroText = function(IntroDiv){
    let section = document.createElement("section");
    let Maindiv = document.createElement("div");
    Maindiv.classList.add("IntroductionDiv");
    let div = document.createElement("div");
    div.classList.add("Text");
    text = [
        "Classroom of Miyoversee",
        "Evénement Discord",
        "Crée par LeCrapuleux",
        "Le résumé ",
        "Vidéo par Davideuh",
        "En HTML & CSS & JS",
        "Bon visionnage !"
    ];
    for (let i = 0; i <= 6; i++) {
        let p = document.createElement("p");
        p.innerHTML = text[i];
        div.appendChild(p);
    }
    Maindiv.appendChild(div);
    section.appendChild(Maindiv);
    IntroDiv.appendChild(section);
    return [div, Maindiv];
};

/* Créer la div logo */
const Logo = function(IntroDiv){
    let LogoDiv = document.createElement("div");
    LogoDiv.classList.add("LogoDiv");
    let Title = document.createElement("div");
    Title.classList.add("Title");
    Title.innerHTML = "Event Discord";
    let FirstLine = document.createElement("div");
    let SecondLine = document.createElement("div");
    FirstLine.classList.add("FirstLine");
    SecondLine.classList.add("SecondLine");
    FirstWord = "Classroom of";
    for (let i = 0; i < FirstWord.length; i++) {
        let p = document.createElement("p");
        if (i == 0){
            p.style.backgroundColor = "#e3017e";
            p.style.color = "white";
        }
        if (i == 5 || i == 10){
            p.style.backgroundColor = "#9f033b";
            p.style.color = "white";
        }
        if (i == 9){
            p.style.backgroundColor = "transparent";
            p.style.borderColor = "transparent";
        }
        p.innerHTML = FirstWord[i];
        FirstLine.appendChild(p);
    }
    SecondWord = "Miyoversee";
    for (let i = 0; i < SecondWord.length; i++) {
        let p = document.createElement("p");
        if (i == 0 || i == 2){
            p.style.backgroundColor = "#e3017e";
            p.style.color = "white";
        }
        if (i == 3 || i == 7 || i == 9){
            p.style.backgroundColor = "#9f033b";
            p.style.color = "white";
        }
        p.innerHTML = SecondWord[i];
        SecondLine.appendChild(p);
    }
    LogoDiv.appendChild(Title);
    let Info = document.createElement("div");
    Info.classList.add("Info");
    Info.innerHTML = "Durée: 25/01/24 -> 3/02/24";
    LogoDiv.appendChild(Info);
    LogoDiv.appendChild(FirstLine);
    LogoDiv.appendChild(SecondLine);
    LogoDiv.id = 'LogoDiv';
    IntroDiv.appendChild(LogoDiv);
};

/* Créer les crédits */
const allIMG = [
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/AlbertRefusePokerGigaCHAD.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/ChefDoeuvre.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/CrâneDiff.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/KiwiBert.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/LaPoutreDeAlbert.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Albert/NoirDiff.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/ClasseC Raciste/ClasseC Raciste pt3.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/ClasseC Raciste/ClassseC Raciste pt1.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/ClasseC Raciste/ClassseC Raciste pt2.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/ClasseC Raciste/Détraqué BladieDavideuh.jpg",

    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/Bladie.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/Directeur pas content.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/DirecteurMichto.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/Directeursus.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/DirecteurQuiCalmeRyuen.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/DirecteurQuiTravailleAskip.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/FOrceAlui.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Dingueries du directeur/RaccourcieTahMarioKart.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/CerticatDeSportEnCarton.jpg",
     
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/2 Influenceurs à cité.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/75 250.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/BigMomAHAHAHAHAH.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/BladieRacisteStarfoula.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/Bruh.png",

    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/çaCommençaitSiBien.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/ChupaMiPeni.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/DaronneDirecteur.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/Débilelui.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/Débilelui2.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/Directeur&Numby.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/DirecteurAigri.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/DirecteurBG.jpg",

    
    
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/EspagnolLV20.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/FanFinctionMath pt1.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/FanFinctionMath pt1.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/Friscobranleur.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/MasterclassFrancais.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/MattFlopEspagnol.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/ModdoRaciste.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/PoultriTropForte.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Examen/SucreSeum.jpg",

    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison2.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison3.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison4.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison5.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison6.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison7.jpg",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison7.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/Prison/Prison8.jpg",

    "./Classroom of Miyoversee Janvier-Fevrier 2024/JULgyuan.png",

    "./Classroom of Miyoversee Janvier-Fevrier 2024/DessinMasterClassse pt1.png",
    "./Classroom of Miyoversee Janvier-Fevrier 2024/DessinMasterClassse pt2.png",
]
const Credits = function(allIMG){
    CreditLeft = document.createElement("div");
    CreditRight = document.createElement("div");
    CreditLeft.classList.add("CreditLeft");
    CreditRight.classList.add("CreditRight");
    for (let i = 1; i <= allIMG.length; i++) {
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        imgDiv.classList.add("CreditImgDiv");
        img.classList.add("CreditImg");
        img.src = allIMG[i-1];
        if (i % 2 == 0){
            if (i % 4 == 0){
                imgDiv.style.marginLeft = "23%";
            }
            else{
                imgDiv.style.marginLeft = "3%";
            } 
        }
        else{
            if ((i-1) % 4 == 0){
                imgDiv.style.marginRight = "3%";
            }
            else{
                imgDiv.style.marginRight = "23%";
            } 
        }
        let p = document.createElement("p");
        p.innerHTML = `${allIMG[i-1]}`;
        imgDiv.appendChild(img);
        imgDiv.appendChild(p);
        if (i % 2 == 0){
            CreditLeft.appendChild(imgDiv);
        }
        else{
            CreditRight.appendChild(imgDiv);
        }
    }
    CreditLeft.style.animation = "translate 240s linear forwards";
    CreditRight.style.animation = "translate 240s linear forwards";
    document.body.appendChild(CreditLeft);
    document.body.appendChild(CreditRight);
};