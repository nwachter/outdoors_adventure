window.onload = function () {
    var nav = document.getElementById('topnav')
    var smallNav = document.getElementById('menu-list')
    var openBtn = document.getElementById('openBtn')
    var closeBtn_old = document.getElementById('closeBtn')
    var closeBtn = document.createElement('a')

    var htmlString = '<svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" style=""></path></svg>'.trim()
    closeBtn.innerHTML = htmlString
    closeBtn.id = 'closeBtn'
        
    console.log("CloseBtn new : ",closeBtn);

        var vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )
    var vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    )

    openBtn.onclick = openNav
    closeBtn.onclick = closeNav

    /* Set the width of the side navigation to 250px */
    function openNav() {
        smallNav.classList.add('active')
        closeBtn.classList.add('active')
        // openBtn.classList.add("inactive");
        // openBtn.classList.remove("active");   A DE COMMENTER DES LES TESTS FINIS
        // nav.replaceChild(closeBtn, nav.childNodes[5])

        // nav.removeChild(nav.childNodes[5]);
        // nav.appendChild(closeBtn);
        replace(closeBtn)
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        // closeBtn.classList.add("inactive");
        // openBtn.classList.remove("inactive");
        closeBtn.classList.remove('active')
        smallNav.classList.remove('active')
        openBtn.classList.add('active')

        //nav.replaceChild(openBtn, nav.childNodes[8])
        replace(openBtn);
    }


    function replace(childNode) {

        console.log("openBtn", openBtn, "closebtn", closeBtn);
        let willReplace = childNode.id.includes("openBtn") ? true : false
        console.log(willReplace)

        if(willReplace) {
            for (let i = 0 ; i < nav.childNodes.length ; i++) {
                if (nav.childNodes[i].nodeName != "#text") {

                
                if (nav.childNodes[i].id.includes("closeBtn")) {
                    console.log(nav.childNodes[i].id.includes("closeBtn"));
                    nav.replaceChild(openBtn, nav.childNodes[i])
                }
            }
            }
        }
        else {
            for (let i = 0 ; i < nav.childNodes.length ; i++) {
                console.log(nav.childNodes[i])
                if (nav.childNodes[i].nodeName != "#text") {
                    if (nav.childNodes[i].id.includes("openBtn")) {
                        console.log(nav.childNodes[i].id.includes("openBtn"))
                        nav.removeChild(nav.childNodes[i]);
                        nav.appendChild(closeBtn);
                    }
                }
             
            }
        }

    }

    //Si menu actif et changement taille browser : remove active

    window.addEventListener('resize', (event) => {
        console.log(vw)
        if (vw > 801) {
            console.log('declenche')

            smallNav.classList.remove('active')
            closeBtn.classList.remove('active')
            // openBtn.classList.remove("active");
        }
    })

    /* openBtn doit seulement ne pas etre actif quand menu ouvert; en tps normal, il est actif + placé à -100px */

    // if (document.readyState =! "loading") {
    //   if (vw > 801) {
    //     openBtn
    //   }
    //}
}
