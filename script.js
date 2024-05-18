let post = document.getElementById("firstPost");
let postsBox = document.getElementById("postsBox");
let ava = document.getElementById("ava")
let user = document.getElementById("user")
let postText = document.getElementById("postText")


let avas=[ 
    "https://almaty.fizmat.kz/wp-content/uploads/sites/2/2017/12/IMG_4615.jpg",
    "https://krd.mir-kvestov.ru/uploads/quests/7110/original/notreal_kosmos_photo1.jpg?1692275778",
    "https://www.firtka.if.ua/data/blog/29263/0168b9284b61a3561b4613e2d5f0ae4d.gif"
]
let users=[
    "_talgaskiff_",
    "A_stron_g_OUT",
    "Секреты. Просвещение. Правда"
]
let imgurls=[
    "https://mnogoformul.ru/wp-content/uploads/2018/09/trigonometricheskie-formuly.jpg",
    "https://vot.rebeltv.eu/wp-content/uploads/2024/05/forum-0871912709.jpg",
    "https://news.store.rambler.ru/img/126a297d9d06828fbe364270b010c9cf?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen"
]
let postTexts=[
    "Вот еще классные формулы по тригономотрии. Даю их каждым своим ученикам и результат на лицо: просто надо посмотреть их Кунделики. Очень рекомендую давать их де..............тям.",
    "Сейчас, в 2024 году, Солнце выходит на пик солнечной активности - все больше пятен, вспышек и выбросов массы. Все это добро сталкивается с магнитным полем Земли и получаются красивые полярные сияния, причем в местах где часто о них и не слышали. А, ну еще и метеозависимых корежит.Вчера, к примеру, почти во всем СНГ наблюдали полярные сияния. Но сильно пугаться не стоит - в прошлый раз, почти тоже самое было в 2014-2015 годах, просто мало кто запомнил. 9 лет - нормальный цикл активности Солнца. А вы видели полярное сияние?",
    "ЛЮДИ, ОЧНИТЕСЬ! ОФИЦИАЛЬНАЯ ИСТОРИЯ - ЭТО ПОЛНАЯ ЧУШЬ! Инопланетяне, иллюминаты, теории заговора - это лишь верхушка айсберга. Ядерная война до нашей эры, динозавры под землей, угроза вселленского масштаба - это и не только это скрывается Мировым правительством! Уже неоднократно находили высокоразвитые города прошлого, уничтоженных очень высокими температурами, сигнал S.O.S с космоса говорит о том, что инопланетян что-то убило и поэтому мы не можем с ними связаться, про наши связи с ними вообще молчу(все доказательства я уже выкладывал ранее).Хватит этого вранья! Я уже устал видеть как простые граждане ходят во тьме неведенья! Я считаю, что мы, как жители Земли, имеем полное право знать правдивую историю и ужасное будущее, которое нас ждет! Как вы считаете? Выбор за Вами.",
]
let wholikes=[
    "Нравиться: mirasinus, gera_lee.kz, teoremiy и 1111111111 другим.",
    "Нравиться: gera_lee.kz, teoremiy, _talgaskiff_ и 129721 другим.",
    "Нравиться: mirasinus, gera_lee.kz и 13832 другим."
]


for(let i = 0; i < 100; i++){ 
    let a=i%3;
    newpost = post.cloneNode(true); 
    
    imgpost = newpost.getElementsByClassName("img")[0] 
    console.log(imgpost)
    imgpost.setAttribute("src", imgurls[a]);
   
    imgava = newpost.getElementsByClassName("ava")[0]
    console.log(imgava)
    imgava.setAttribute("src", avas[a]);

   usernick = newpost.getElementsByClassName("nick")[0]
   console.log(usernick)
    usernick.innerHTML = users[a];

    newpostText = newpost.getElementsByClassName("posttext")[0]
    console.log(newpostText)
    newpostText.innerHTML = postTexts[a];

    usernick = newpost.getElementsByClassName("nick")[0]
    console.log(imgpost)
    usernick.innerHTML = users[a];

    likenicks = newpost.getElementsByClassName("liketext")[0]
    console.log(likenicks)
    likenicks.innerHTML = wholikes[a];


    let like = newpost.querySelector("#like")
    
    like.onclick = function(){
        if(like.src.includes("like0.png"))
            like.src = "like1.png";
        else 
        like.src = "like0.png";
    }

    function savecomment() {
        let commentText = post.querySelector("#comment").value;
        let commentsave = document.createElement("div");
        commentsave.textContent = commentText;
        let commentto = post.querySelector(".comments");
        commentto.appendChild(commentsave);
        post.querySelector("#comment").value = ""; 
    }

    postsBox.appendChild(newpost);
}

function savecomment() {
    let commentText = post.querySelector("#comment").value;
    let commentsave = document.createElement("div");
    commentsave.textContent = commentText;
    let commentto = post.querySelector(".comments");
    commentto.appendChild(commentsave);
    post.querySelector("#comment").value = ""; 
}
post.querySelector(".plain").onclick = savecomment;



function likechange(){
    let like = document.getElementById("like")
    if(like.src.includes("like0.png"))
        like.src = "like1.png";
    else 
    like.src = "like0.png";
}


