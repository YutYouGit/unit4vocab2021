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
            "question": "A _____ is unwieldy for transporting food and goods.",
            "answer": "What is promontory", // 200
        },
        {
            "question": "There is not any ______ of memories in the community.",
            "answer": "What is residue", // 800
        },
        {
            "question": "Jonas ______ the idea of sameness.",
            "answer": "What is deplores", // 600
        },
        {
            "question": "The elders ____ your entire life in order to decide your job.",
            "answer": "What is peruse", // 800
        },
        {
            "question": "Jonas was _______ about his community after he saw what release actually was.",
            "answer": "What is solicitous", // 1000
        },
    ],
    [ // Gimkit section
        {
            "question": "A-Team is not very _____ in it's defenses, it is rare that someone manages to beat it in Gimkit.",
            "answer": "What is porous", // 200
        },
        {
            "question": "Gimkits _____ our mental lives at school,  without them, we would be extremely bored.",
            "answer": "What is sustain", // 400
        },
        {
            "question": "We are never ____ when we win a gimkit, instead we always celebrate.",
            "answer": "What is a blase", // 400
        },
        {
            "question": "A-Team is _____ to winning gimkit. ",
            "answer": "What is prone", // 800
        },
        {
            "question": "A-team is quite ____ despite the fact that everyone taunts them.",
            "answer": "What is staid", // 1000
        },
    ],
    [ // Computer section
        {
            "question": "You ________ me out when I was a crewmate. Even though green is the imposter.",
            "answer": "What is ousted", // 200
        },
        {
            "question": "You are very gaudy. Your computer desk has an ____ monitor for a terrible pc.",
            "answer": "What is ornate", // 800
        },
        {
            "question": "You should _______ up enough money to buy a ryzen 7 processor.",
            "answer": "What is muster", // 600
        },
        {
            "question": "There is no one to _____ to when a pro hacker is hacking your computer.",
            "answer": "What is recourse", // 800
        },
        {
            "question": "A hacker has no _____ about uploading malware to the Washington DC capitol building.",
            "answer": "What is qualms", // 1000
        },
    ],
    [ // Teacher section
        {
            "question": "Teachers ________ their students to learn more.",
            "answer": "What is bolster", // 200
        },
        {
            "question": "In school, some kids are a ______, while others are popular.",
            "answer": "what is nonentity", // 400
        },
        {
            "question": "____ homework may be like god's gift to some student. To others, it may be disastrous.",
            "answer": "What is annuling", // 600
        },
        {
            "question": "Teachers ____ over the quality of assignments.",
            "answer": "What is obsess", // 800
        },
        {
            "question": "Many people think that getting a lot of homework is _____.",
            "answer": "What is frivolous", // 1000 
        },
    ],
]
