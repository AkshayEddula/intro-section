const navslide = () => {
    const bar = document.getElementById('fea');
    const nav = document.getElementById('Features');
    const wrong = document.getElementById('feau')

    bar.addEventListener("click", () => {
        nav.classList.toggle('features-active')
    });

    wrong.addEventListener("click", () => {
        nav.classList.toggle('features-inactive')
    });

}

navslide()

const navslide2 = () => {
    const bar2 = document.getElementById('com')
    const nav2 = document.getElementById('Company')
    const wrong2 = document.getElementById('feau2')

    bar2.addEventListener("click", () => {
        nav2.classList.toggle('company-active')
    });

    wrong2.addEventListener("click", () => {
        nav2.classList.toggle('company-inactive')
    });
}

navslide2()

const navslide3 = () => {
    const bar3 = document.getElementById('Menu')
    const nav3 = document.getElementById('Side')
    const wrong3 = document.getElementById('Close')

    bar3.addEventListener("click", () => {
        nav3.classList.toggle('side-active')
    });

    wrong3.addEventListener("click", () => {
        nav3.classList.toggle('side-inactive')
    });
}

navslide3()