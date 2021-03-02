let teamScores = [
    0, 0, 0, 0
]   

let addPoints = (team) => {
    teamScores[team - 1] += 100;

    if (teamScores[team - 1] > 15000) {
        teamScores[team - 1] = 15000;
    }
}

let subtractPoints = (team) => {
    teamScores[team - 1] -= 100;

    if (teamScores[team - 1] < -2000) {
        teamScores[team - 1] = -2000;
    }
}

setInterval(() => {
    for (let i = 0; i < teamScores.length; i++) {
        let elem = document.getElementById(`team${i + 1}score`);
        elem.innerHTML = teamScores[i];
    }
}, 20);



let theActualJeapordy = [
    [ // Giver section
        {
            "question": "",
            "answer": "", // 200
        },
        {
            "question": "",
            "answer": "", // 400
        },
        {
            "question": "",
            "answer": "", // 600
        },
        {
            "question": "",
            "answer": "", // 800
        },
        {
            "question": "",
            "answer": "", // 1000
        },
    ],

    [ // Karen section
        {
            "question": "",
            "answer": "", // 200
        },
        {
            "question": "",
            "answer": "", // 400
        },
        {
            "question": "",
            "answer": "", // 600
        },
        {
            "question": "",
            "answer": "", // 800
        },
        {
            "question": "",
            "answer": "", // 1000
        },
    ],

    [ // Gimkit section
        {
            "question": "",
            "answer": "", // 200
        },
        {
            "question": "",
            "answer": "", // 400
        },
        {
            "question": "",
            "answer": "", // 600
        },
        {
            "question": "",
            "answer": "", // 800
        },
        {
            "question": "",
            "answer": "Who are ", // 1000
        },
    ],

    [ // Computer section
        {
            "question": "",
            "answer": "", // 200
        },
        {
            "question": "",
            "answer": "", // 400
        },
        {
            "question": "",
            "answer": "", // 600
        },
        {
            "question": "",
            "answer": "", // 800
        },
        {
            "question": "",
            "answer": "", // 1000
        },
    ],

    [ // Teacher section
        {
            "question": "",
            "answer": "", // 200
        },
        {
            "question": "In society teachers are ____ but, they are very vital",
            "answer": "what is nonentity", // 400
        },
        {
            "question": "",
            "answer": "What is annul", // 600
        },
        {
            "question": "Teachers ____ over the quality of assignments ",
            "answer": "What is Obsess", // 800
        },
        {
            "question": "Doing work is _____",
            "answer": "What is Frivolus?", // 1000 
        },
    ],
]

/*
anulled
blase
bolstered
deplored
frivolous ~
muster
nonentity
obsessed ~
ornate
ousted
peruse
porous
promontory 
prone
qualms
recourse
residue
solicitious
staid
sustain
*/  