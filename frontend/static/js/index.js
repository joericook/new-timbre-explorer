// console.log("JS is loaded");

//Import views
import Welcome from "./views/Welcome.js";
import Info from "./views/Info.js";
import Consent from "./views/Consent.js";
import ConsentDl from "./views/ConsentDl.js";
import SoundCheck from "./views/SoundCheck.js";
import Hearing from "./views/Hearing.js";
import Headphones from "./views/Headphones.js";
import Background from "./views/Background.js";
import Walkthrough from "./views/Walkthrough.js";
import Training1 from "./views/Training1.js";
import Testing1 from "./views/Testing1.js";

// Enables forward and back navigation with historyAPI
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    // routes are defined in here
    const routes = [
        { path: "/", view: Welcome },
        { path: "/info", view: Info },
        { path: "/consent", view: Consent },
        { path: "/consentdl", view: ConsentDl },
        { path: "/soundcheck", view: SoundCheck },
        { path: "/hearing", view: Hearing },
        { path: "/headphones", view: Headphones },
        { path: "/background", view: Background },
        { path: "/walkthrough", view: Walkthrough },
        { path: "/training1", view: Training1 },
        { path: "/testing1", view: Testing1 },
    ];
    
    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        // Return a new object containing the route and a boolean value 'isMatch' 
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // 'match' equals the 'route' object with the matching path
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // If path doesn't have a match, it routes to the landing page (could link to 404 page)
    if (!match) {
        match = {
            route: routes[0],
            isMatch:true
        };
    }

    // Create new instance of view that matched the route
    const view = new match.route.view();

    // Some paths send html to overlay
    // others send html to taskContainer
    if (['/', '/info', '/consent', '/consentdl', '/soundcheck', '/hearing', '/headphones', '/background', '/testing1'].includes(match.route.path)) {
        console.log("overlayContent");
        document.querySelector("#overlayContent").innerHTML = await view.getHtml();
        document.getElementById("overlay").style.display = "block";

        // If path matches testing1 append the quiz script to the document body
        if (['/testing1'].includes(match.route.path)) {
            let newScript = document.createElement("script");
            newScript.src = "static/js/quiz.js";
            document.getElementById("overlayContent").append(newScript);
        }
    }   
    else {
        console.log("taskContainer");
        document.querySelector("#taskContainer").innerHTML = await view.getHtml();
        document.getElementById("overlay").style.display = "none";
    }
    
    // Scroll to top of the divs when updating contents
    document.getElementById("overlay").scrollTo(0, 0);
    document.getElementById("overlay").scrollTo(0, 0);

    // Console log current view
    //console.log(match.route.view);
    console.log(match.route.path);
};

// Enable navigating forward and back
window.addEventListener("popstate", router);

// When page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // If the clicked element has 'data-link' attribute, prevent default link following
        // and navigate to href of the element
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

