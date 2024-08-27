    var sidenav = document.querySelector(".side-navbar");

    function show() {
        console.log("called");
        sidenav.style.left = "0";
    }

    function closeWindow() {
        console.log("close called");
        sidenav.style.left = "-60%";
    }

