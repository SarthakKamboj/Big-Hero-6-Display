import pausePlay from "./js/pausePlay";

(()=>{
    let video = document.querySelector("#trailer");
    video.addEventListener("click",()=>{
        pausePlay(video)
    });
})();

(()=>{

    let speed = 300;
    let statElements = [...document.querySelectorAll(".stat")]
    statElements.forEach(statElement=>{
        const updateInnerText = () => {
            let stat = statElement.getAttribute("statNum");
            stat = +(stat.replace(/,/g,""));
            let curNum = +(statElement.innerText)
            let inc = stat/speed;
            if(curNum < stat){
                statElement.innerText = (curNum+ inc).toFixed(1);
                setTimeout(updateInnerText,1)
            } else {
                statElement.innerText = stat
            }
        }

        updateInnerText()
    })
})();

(()=>{
    let toggleIcon = document.querySelector(".toggle-icon");
    let toggleIconMenu = document.querySelector(".toggle-icon-menu");
    let toggleIcons = [toggleIcon,toggleIconMenu]
    let toggleMenu = document.querySelector(".toggle-menu");
    let nonHeader = document.querySelector(".non-header");
    let logo = document.querySelector(".logo")

    toggleIcons.forEach(toggleIcon => {
        toggleIcon.addEventListener("click",()=>{
            nonHeader.classList.toggle("opaque");
            logo.classList.toggle("opaque")
            toggleMenu.classList.toggle("menu-visible");
        });
    });
})();