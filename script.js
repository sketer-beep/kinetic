const images = [
    "https://images.unsplash.com/photo-1636537511494-c3e558e0702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
];

// content setup
const texts = [
    ["Different", "places"],
    ["Mars", "Surface gravity‎: ‎3.711 m/s²"],
    ["Venus", "Surface gravity‎: ‎8.87 m/s²"],
]


rgbKineticSlider = new rgbKineticSlider({

    slideImages: images, // array of images > must be 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles

    backgroundDisplacementSprite: "displace-circle.jpg", // slide displacement image
   cursorDisplacementSprite: "1.jpg", // cursor displacement image


    cursorImgEffect : true, // enable cursor effect
    cursorTextEffect : false, // enable cursor text effect
    cursorScaleIntensity : 0.4, // cursor effect intensity
    cursorMomentum : 0.14, // lower is slower

    swipe: true, // enable swipe
    swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
    swipeScaleIntensity: 2, // scale intensity during swipping

    slideTransitionDuration : 1, // transition duration
    transitionScaleIntensity : 30, // scale intensity during transition
    transitionScaleAmplitude : 160, // scale amplitude during transition

    nav: true, // enable navigation
    navElement: '.main-nav', // set nav class
    
    imagesRgbEffect : true, // enable img rgb effect
    imagesRgbIntensity : 0.9, // set img rgb intensity
    navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

    textsDisplay : true, // show title
    textsSubTitleDisplay : true, // show subtitles
    textsTiltEffect : true, // enable text tilt
    googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
    buttonMode : false, // enable button mode for title
    textsRgbEffect : true, // enable text rgb effect
    textsRgbIntensity : 0.03, // set text rgb intensity
    navTextsRgbIntensity : 15, // set text rgb intensity for regular nav

    textTitleColor : 'white', // title color
    textTitleSize : 125, // title size
    mobileTextTitleSize : 125, // title size
    textTitleLetterspacing : 3, // title letterspacing

    textSubTitleColor : 'white', // subtitle color ex : 0x000000
    textSubTitleSize : 21, // subtitle size
    mobileTextSubTitleSize : 21, // mobile subtitle size
    textSubTitleLetterspacing : 2, // subtitle letter spacing
    textSubTitleOffsetTop : 90, // subtitle offset top
    mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
});