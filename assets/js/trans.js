const translations = {
    en: {
        homeIntro: "Order Now, Receive It At The Branch Within 15 Minutes ",
        custimizeBranch:" Branch identification",
        Copyright:"2022 © Copyright  ",
        creator:" Braa Adnan",
        custimizeBranchHeader:"Select The Branch From Which You Want To Receive The Order  ",
        breadCrumbHome:"Home",
        breadCrumbBranch:" / Branch ",
        breadCrumbOrders:" / Orders",
        branchName:"Reyad - Saudia",
        categories:"categories",
        all:"All",
        productCat:"donuts",
        productName:"donuts",
        productText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        bill:"Bill",
        productPrice:"7 SAR",
        discountText:"discount percentage",
        percentage:"20%",
        totalText:"Total",
        totalAmount:"20 SAR",
        addedTax:"Including value added tax",
        completion:"completion",
        productName:"product name",
        remove:"remove",
        recieveFrom:"recieve from",
        recieveFromBranch:"recieve from branch",
        refundText:"You have a refund ",
        refundAmount:"20 SAR",
        viewDetails:"view details",
        orderNumber:"order 3232",
        breadCrumbUser:" / my account",

    },
    ar: {
        homeIntro: "اطلب الآن واستلمه في الفرع خلال 15 دقيقة",
        custimizeBranch:"تحديد الفرع",
        Copyright:"حقوق الطبع والنشر محفوظة 2022",
        creator:" براء عدنان",
        custimizeBranchHeader:"حدد الفرع الذي تريد استلام الطلب منه",
        breadCrumbHome:"الصفحة الرئيسية",
        breadCrumbBranch:" / الفرع",
        breadCrumbOrders:" / الطلبات",
        branchName:"الرياض - السعودية",
        categories:"الأصناف",
        all:"الكل",
        productCat:"دوناتس",
        productName:"دوناتس",
        productText:"بعض الأمثلة السريعة للنصوص للبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.",
        bill:"الفاتورة",
        productPrice:"7 ريال ",
        discountText:"نسبة الخصم",
        percentage:"20%",
        totalText:"المجموع",
        totalAmount:"20 ريال",
        addedTax:"بما في ذلك ضريبة القيمة المضافة",
        completion:"تطبيق",
        productName:"أسم المنتج",
        remove:"حذف",
        recieveFrom:"استلم من",
        recieveFromBranch:" استلم من الفرع",
        refundText:"لديك رصيد مسترجع",
        refundAmount:"20 ريال",
        viewDetails:"عرض التفاصيل ",
        orderNumber:"طلب رقم 3232",
        breadCrumbUser:" / حسابي",

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
        document.body.style.fontFamily = 'Tajawal';
        document.getElementById("select_ar").selected = true;

    } else {
        document.dir = "ltr"
        document.body.style.textAlign = 'left';
        document.body.style.fontFamily = 'Poppins';

    };

};
