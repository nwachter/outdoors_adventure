window.onload = function () {
    var nav = document.getElementById('topnav')
    var menuList = document.getElementById('menu-list')
    var smallNav = document.getElementsByClassName('small-nav')[0]
    var openBtn = document.getElementById('openBtn')
    var closeBtn_old = document.getElementById('closeBtn')
    var closeBtn = document.createElement('a')

    var htmlString = '<svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" style=""></path></svg>'.trim()
    closeBtn.innerHTML = htmlString
    closeBtn.id = 'closeBtn'

    openBtn.onclick = openNav
    closeBtn.onclick = closeNav

    /* Set the width of the side navigation to 250px */
    function openNav() {
        menuList.classList.add('active')
        closeBtn.classList.add('active')
        openBtn.classList.remove('active');
        // openBtn.classList.remove("active");   A DE COMMENTER DES LES TESTS FINIS
        // nav.replaceChild(closeBtn, nav.childNodes[5])

        // nav.removeChild(nav.childNodes[5]);
        // nav.appendChild(closeBtn);
        //on remplace OPENBTN
        replace(closeBtn)
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        // closeBtn.classList.add("inactive");
        // openBtn.classList.remove("inactive");
        closeBtn.classList.remove('active')
        menuList.classList.remove('active')
        openBtn.classList.add('active')

        //nav.replaceChild(openBtn, nav.childNodes[8])
        //replacedNode = parentNode.replaceChild(newChild, oldChild);
        replace(openBtn);
    }


    function replace(childNode) {

        console.log(smallNav)

        console.log("openBtn", openBtn, "closebtn", closeBtn);
        let willReplaceByOpen = childNode.id.includes("openBtn") ? true : false
        console.log(willReplaceByOpen)

        if (willReplaceByOpen) {
            //Remplacer CloseBtn Par OpenBtn
            for (let i = 0; i < smallNav.childNodes.length; i++) {
                if (smallNav.childNodes[i].nodeName != "#text") {


                    if (smallNav.childNodes[i].id.includes("closeBtn")) {
                        console.log(smallNav.childNodes[i].id.includes("closeBtn"));
                        //replacedNode = parentNode.replaceChild(newChild, oldChild);
                        smallNav.replaceChild(openBtn, smallNav.childNodes[i])
                    }
                }
            }
        }
        else {
            //Retirer OpenBtn et ajouter CloseBtn
            for (let i = 0; i < smallNav.childNodes.length; i++) {
                console.log(smallNav.childNodes[i])
                if (smallNav.childNodes[i].nodeName != "#text") {
                    if (smallNav.childNodes[i].id.includes("openBtn")) {
                        console.log(smallNav.childNodes[i].id.includes("openBtn"))
                        smallNav.removeChild(smallNav.childNodes[i]);
                        smallNav.appendChild(closeBtn);
                    }
                }

            }
        }

    }

    //Si menu actif et changement taille browser : remove active

    /* 
    Quand screen > 800
        quand menu-list.active 
            menu-list.active = display : block, pos: relative
        quand menu-list (normal)
            js retire le "active"
    */

    window.addEventListener('resize', (event) => {
        closeNav()
        var vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        )
        var vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        )
        //quand vw en dehors de event, la valeur ne s'affiche pas "en continu", seulement la val au déclenchement
        console.log(vw)
        if (vw > 801) {

        }
    })

    /* openBtn doit seulement ne pas etre actif quand menu ouvert; en tps normal, il est actif + placé à -100px */

    // if (document.readyState =! "loading") {
    //   if (vw > 801) {
    //     openBtn
    //   }
    //}
}
