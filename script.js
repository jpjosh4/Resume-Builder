function addEducation() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter your education details');
    let ed = document.getElementById("ed");
    let edButton = document.getElementById("edButton");
    ed.insertBefore(newNode, edButton);
}

function addWorkExperience() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter your work experience');
    let we = document.getElementById("we");
    let weButton = document.getElementById("weButton");
    we.insertBefore(newNode, weButton);
}

function addSkills() {

    let newNode = document.createElement('input');
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter your skills');
    let sk = document.getElementById("sk");
    let skButton = document.getElementById("skillButton");
    sk.insertBefore(newNode, skButton);
}

function addAchievements() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("achField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter your achievements');
    let ac = document.getElementById("ac");
    let acButton = document.getElementById("achButton");
    ac.insertBefore(newNode, acButton);
}

function addCertifications() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter your certifications');
    let ce = document.getElementById("ce");
    let ceButton = document.getElementById("certButton");
    ce.insertBefore(newNode, ceButton);
}

function addProjects() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter your project details');
    let pr = document.getElementById("pr");
    let prButton = document.getElementById("projButton");
    pr.insertBefore(newNode, prButton);
}

function addLanguages() {

    let newNode = document.createElement('input');
    newNode.classList.add("form-control");
    newNode.classList.add("langField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter language');
    let la = document.getElementById("la");
    let laButton = document.getElementById("langButton");
    la.insertBefore(newNode, laButton);
}

function addInterests() {

    let newNode = document.createElement('input');
    newNode.classList.add("form-control");
    newNode.classList.add("intField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter your interests');
    let int = document.getElementById("int");
    let intButton = document.getElementById("intButton");
    int.insertBefore(newNode, intButton);
}

function generate() {

    let name = document.getElementById('nameField').value;
    let namet = document.getElementById('nameT');
    namet.innerHTML = name;
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;
    document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;
    document.getElementById('linkT').innerHTML = document.getElementById('linkedField').value;
    let ed = document.getElementsByClassName('educationField');
    let str = "";
    for (let e of ed) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById('edT').innerHTML = str;

    let we = document.getElementsByClassName('weField');
    let str1 = "";
    for (let e of we) {
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str1;

    let sk = document.getElementsByClassName('skillField');
    let str2 = "";
    for (let e of sk) {
        str2 = str2 + `<li>${e.value}</li>`;
    }
    document.getElementById('skT').innerHTML = str2;

    let ac = document.getElementsByClassName('achField');
    let str3 = "";
    for (let e of ac) {
        str3 = str3 + `<li>${e.value}</li>`;
    }
    document.getElementById('acT').innerHTML = str3;

    let ce = document.getElementsByClassName('certField');
    let str4 = "";
    for (let e of ce) {
        str4 = str4 + `<li>${e.value}</li>`;
    }
    document.getElementById('ceT').innerHTML = str4;

    let pr = document.getElementsByClassName('projField');
    let str5 = "";
    for (let e of pr) {
        str5 = str5 + `<li>${e.value}</li>`;
    }
    document.getElementById('prT').innerHTML = str5;

    let la = document.getElementsByClassName('langField');
    let str6 = "";
    for (let e of la) {
        str6 = str6 + `<li>${e.value}</li>`;
    }
    document.getElementById('laT').innerHTML = str6;

    let inte = document.getElementsByClassName('intField');
    let str7 = "";
    for (let e of inte) {
        str7 = str7 + `<li>${e.value}</li>`;
    }
    document.getElementById('intT').innerHTML = str7;


    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";
    document.getElementById('print').style.display = "block";
    //document.getElementById('body').style.background = "none";
}