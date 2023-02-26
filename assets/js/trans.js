const translations = {
    en: {
        homeIntro: "Order Now, Receive It At The Branch Within 15 Minutes ",
        custimizeBranch:" Branch identification",
        Copyright:"2022 © Copyright  ",
        creator:" Braa Adnan",
        custimizeBranchHeader:"Select The Branch From Which You Want To Receive The Order  ",
        breadCrumbHome:"Home",
        breadCrumbBranch:" / Branch ",

    },
    ar: {
        homeIntro: "اطلب الآن واستلمه في الفرع خلال 15 دقيقة",
        custimizeBranch:"تحديد الفرع",
        Copyright:"حقوق الطبع والنشر محفوظة 2022",
        creator:" براء عدنان",
        custimizeBranchHeader:"حدد الفرع الذي تريد استلام الطلب منه",
        breadCrumbHome:"الصفحة الرئيسية",
        breadCrumbBranch:" / الفرع",
    },
};



//  ======== translate=========
// languageSelector function
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});
//   btn EventListener
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "ar"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);

    
});

//   translate core function
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.innerHTML = translations[language][translationKey];
    });

    // lang realted styles
    if (language === "ar") {
        document.dir = "rtl";
        document.body.style.textAlign = 'right';
        document.body.style.fontFamily = 'Montserrat';
        document.getElementById("select_ar").selected = true;

    } else {
        document.dir = "ltr"
        document.body.style.textAlign = 'left';
        document.body.style.fontFamily = 'Poppins';

    };

};
