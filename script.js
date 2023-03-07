let airConditional = {
    Installation: [
        "1.5 HP To 3HP",
        "3 HP To 5 HP"
    ],
    Maintenance: ["Regular Service", "Not Powering", "Remote Control", "No Cooling", "Weak Cooling", "Dropping Water", "High Sound"
    ]
}
let Tvs = {
    Installation: [
        "Wall Mount",
        "TV Base"
    ],
    Maintenance: ["Broken", "No Power", "Switches Off", "No Picture But Sound", "No Sound But Picture", "Line In Screen", "Dark Backlight", "Internal Receiver", "WIFI", "Applications", "Remote Control"
    ]
}
let washingMachine = {
    Installation: [
        'Device Installation'
    ],
    Maintenance: [
        'No Power', 'Device Shaking', 'High Sound In Device', 'Filling Water Without Stop', 'Doesnot Clean Well', 'Lint On Clothes', 'No Spin'
    ]
}
let refrigeratorFreezer = {
    Installation: [
        "Device Installation",
        "Doors Shifting",
        "Water Filter Installation"
    ],
    Maintenance: ["No Power", "No Cooling At All", "No Cooling In Freezer", "No Cooling In Refrigarator", "High Sound", "Dropping Water", "Door Problem", "Internal Receiver", "WIFI", "Applications", "Remote Control"
    ]
}
var subjectObject = {
    "Air Condition": {
        Carrier: airConditional,
        Sharp: airConditional,
        York: airConditional,
        TCL: airConditional,
        Haier: airConditional,
        'General Electric': airConditional,
        Nikai: airConditional,
        TCL: airConditional,
        Other: 'Other'
    },
    "TV": {
        Samsung: Tvs,
        Haier: Tvs,
        Nikai: Tvs,
        SARY: Tvs,
        Contex: Tvs,
        Caixun: Tvs
    },
    "Refrigarator & Freezer": {
        Samsung: refrigeratorFreezer,
        Haier: refrigeratorFreezer
    },
    "Washing Machine": {
        Samsung: washingMachine,
        Haier: washingMachine

    }
}
window.onload = function () {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    var lessonSel = document.getElementById("lesson");
    var helloz = document.getElementById('helloz')
    for (var x in subjectObject) {
        // console.log(x);
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        lessonSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function () {
        //empty Chapters dropdown
        chapterSel.length = 1;
        lessonSel.length = 1;
        //display correct values
        let z = subjectObject[subjectSel.value][this.value];
        if (z == 'Other') {
            helloz.innerHTML = 'Device Brand: <input type="text" /><br><br> Service Type: <input type="text" /><br><br>Service Types: <input type="text" /><br><br> '
        }
        for (var y in subjectObject[subjectSel.value][this.value]) {
            // console.log(y)
            chapterSel.options[chapterSel.options.length] = new Option(y, y);
        }
    }
    chapterSel.onchange = function () {
        //empty Chapters dropdown
        lessonSel.length = 1;
        //display correct values
        var z = subjectObject[subjectSel.value][topicSel.value][this.value];
        // console.log(z)
        for (var i = 0; i < z.length; i++) {
            lessonSel.options[lessonSel.options.length] = new Option(z[i], z[i]);
        }
    }
}