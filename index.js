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
            "question": "Living on a _____ makes it inconvenient for transporting food and goods.",
            "answer": "What is promontory?", // 200
        },
        {
            "question": "There is not a _____ of memories in the community, no one remembers humanity's past.",
            "answer": "What is residue?", // 800
        },
        {
            "question": "Jonas _____ the idea of sameness. He believes that it removes choices and other important emotions for people.",
            "answer": "What is deplores?", // 600
        },
        {
            "question": "The elders _____ ones entire life in order to decide their job.",
            "answer": "What is peruse?", // 800
        },
        {
            "question": "Jonas was _____ about his community after he understood what release actually was.",
            "answer": "What is solicitous?", // 1000
        },
    ],
    [ // Gimkit section
        {
            "question": "A-Team is like a non-_____ sponge, soaking up all the victories from other teams before they get a chance for victory.",
            "answer": "What is porous?", // 200
        },
        {
            "question": "Gimkits _____ us in school, without them, we would be extremely bored.",
            "answer": "What is sustain?", // 400
        },
        {
            "question": "We are never _____ when we win a Gimkit, instead we always celebrate.",
            "answer": "What is a blasé?", // 400
        },
        {
            "question": "A-Team is _____ to winning Gimkit, unlike many other teams. ",
            "answer": "What is prone?", // 800
        },
        {
            "question": "A-Team is quite _____ despite the fact that everyone taunts them.",
            "answer": "What is staid?", // 1000
        },
    ],
    [ // Computer section
        {
            "question": "You _____ me out when I was a crewmate and sent me off the ship. You should have listened to me when I said that Red was the impostor.",
            "answer": "What is ousted?", // 200
        },
        {
            "question": "Your office is quite gaudy, despite the fact that your desk is _____.",
            "answer": "What is ornate?", // 800
        },
        {
            "question": "I don't think you can _____ enough money to buy a Ryzen 7 Processor.",
            "answer": "What is muster?", // 600
        },
        {
            "question": "There is no _____ for you when a professional hacker is hacking your computer.",
            "answer": "What is recourse?", // 800
        },
        {
            "question": "The high-profile hacker has no _____ about uploading malware to the US Government Central Computer, he will upload it without thinking twice.",
            "answer": "What is qualms?", // 1000
        },
    ],
    [ // Teacher section
        {
            "question": "Teachers have many tools to _____ their students' skills.",
            "answer": "What is bolster?", // 200
        },
        {
            "question": "In school, some kids think that anyone who is not popular is a _____.",
            "answer": "What is nonentity?", // 400
        },
        {
            "question": "_____ homework may be like God's gift to some student. To others, it may be disastrous.",
            "answer": "What is annulling?", // 600
        },
        {
            "question": "Teachers _____ over the quality of their students' essays.",
            "answer": "What is obsess?", // 800
        },
        {
            "question": "Even though parents says that spending all your lunch money on snacks is _____, the snacks are always much better than the lunch.",
            "answer":"What is frivolous?", // 1000 
        },
    ],
    [ // INSTRUCTIONS
        {
            "question": "Rules",
            "answer": "Play individually or in groups. Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. To see if a person or group is correct, click again for the answer. If the student or team is correct, they are awarded the point value of the question. Continue until all questions have been answered. 2 questions will be daily doubles where the team/person that gets it can wager their points to get more or lose some depending on whether or not they get the question right. The team with the most points wins. You should know this by now. It's JEOPARDY!"
        },
    ]
]
 
 
 

