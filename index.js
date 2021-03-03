let teamScores = [
    0, 0, 0, 0
]   

let addPoints = (team) => {
    teamScores[team - 1] += 100;

    if (teamScores[team - 1] > 15000000000000000) {
        teamScores[team - 1] = 15000000000000000n;
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
            "question": "Jonas's entire community is built on a massive _____.",
            "answer": "What is promonotory", // 200
        },
        {
            "question": "There is no incriminating _____ after a release.",
            "answer": "What is residue", // 400
        },
        {
            "question": "The giver comunity _____ lies, in fact, only the reciever of memory can say the,",
            "answer": "What is deplores", // 600
        },
        {
            "question": "The elders _____ your entire life in order too decide your job",
            "answer": "What is peruse", // 800
        },
        {
            "question": "The giver comunity is quite _______. They check on their citizens at all times.",
            "answer": "What is solicitous", // 1000
        },
    ],
    [ // Gimkit section
        {
            "question": "Victory for other teams is quite _____. It often slips from their hands",
            "answer": "What is porous", // 200
        },
        {
            "question": "Gimkits keep us ______ going to school, otherwise we would be extremnely bored",
            "answer": "What is sustained", // 400
        },
        {
            "question": "We are never ____ when we win a gimkit, despite the fact that we have won them all",
            "answer": "What is blase", // 600
        },
        {
            "question": "A-Team is ____ to winning Gimkit",
            "answer": "What is prone", // 800
        },
        {
            "question": "A-Team is quite ____ when",
            "answer": "What is staid", // 1000
        },
    ],
    [ // Computer section
        {
            "question": "You ________ me out when I was a crewmate. Even though Red was the imposter",
            "answer": "What is ousted", // 200
        },
        {
            "question": "You are very gaudy. Your computer desk has an ____ monitor for a terrible pc",
            "answer": "What is ornate", // 800
        },
        {
            "question": "You should _______ up enough money to buy a ryzen 7 prosseser",
            "answer": "What is muster", // 600
        },
        {
            "question": "There is nothing to _____ to when a pro hacker is hacking your computer",
            "answer": "What is recourse", // 800
        },
        {
            "question": "A hacker has no _____ about uploading malware to the Washington DC capitol building",
            "answer": "What is qualms", // 1000
        },
    ],
    [ // Teacher section
        {
            "question": "Teachers ________ their students to learn more",
            "answer": "What is bolster", // 200
        },
        {
            "question": "In school, some kids are ______, while others are popular",
            "answer": "What is nonentity", // 400
        },
        {
            "question": "____ homework may be like gods gift to some student. To others, it may be disastrous.",
            "answer": "What is annuling", // 600
        },
        {
            "question": "Teachers ____ over the quality of assignments ",
            "answer": "What is obsess", // 800
        },
        {
            "question": "Doing work is _____",
            "answer": "What is frivolous?", // 1000 
        },
    ],
    [ // RULES
        {
            "question": "RULES",
            "answer": `Play individually or in groups.Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a Human or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.) The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.`
        },
    ]
]

/*I DID THE RULES   
anulled
blase
bolstered
deplored
frivolous
muster
nonentity
obsessed
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
