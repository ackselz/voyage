export const FIREBASE_USER = {
    uid: 0,
    displayName: "John Doe",
    email: "johndoe@psa.sg",
    photoURL: ""
}

const RAW_FEEDBACK = [
    "I wanted to acknowledge John's exceptional leadership on our recent project. His clear vision, proactive decision-making, and ability to keep the team motivated were instrumental in our project's success. His dedication to our goals is truly commendable.",
    "John's communication skills have been a game-changer for our team. His regular project updates and open-door policy have created a transparent and collaborative atmosphere. It's much easier for us to stay on track and address any issues thanks to his effective communication.",
    "I was impressed by John's ability to adapt to unexpected challenges during the project. He remained calm under pressure and quickly adjusted our strategy to ensure we met our deadlines. His flexibility and problem-solving skills are a valuable asset to our team.",
    'John needs to improve his ability to provide clear project objectives and directions. There have been several instances where our team felt confused about our priorities and goals, which led to delays and frustration.',
    'Communication has been a significant challenge with John as our project manager. He often fails to respond to emails and calls promptly, which has caused delays in decision-making and project progress. Improved responsiveness is crucial.',
    "John's tendency to micromanage tasks is stifling our team's creativity and productivity. We would appreciate more autonomy in our work. Constant oversight is undermining our confidence and ability to perform.",
]

// required skills for each position
const POSITION_TO_SKILL_LEVEL = {
    "little boss": {
        "Strategic Thinking": 1,
        "Leadership": 1,
        "Team Management": 1,
        "Python Programming": 1,
    },
    "small boss": {
        "Strategic Thinking": 2,
        "Leadership": 2,
        "Team Management": 2,
        "Python Programming": 2,
    },
    "big boss": {
        "Strategic Thinking": 3,
        "Leadership": 3,
        "Team Management": 3,
        "Python Programming": 3,
    },
    "massive boss": {
        "Strategic Thinking": 4,
        "Leadership": 4,
        "Team Management": 4,
        "Python Programming": 4,
    },

}

const POSITION_PROGRESSION = [
    "little boss",
    "small boss",
    "big boss",
    "massive boss"
]

export const USER = {
    uid: 0,
    // chronological order of positions
    positions: [
        {
            title: "little boss",
            start: 2020,
            end: 2021,
        },
        {
            title: "small boss",
            start: 2021,
            end: 2022,
        },
        {
            title: "big boss",
            start: 2022,
            end: -1,
        },
    ],
    // all goals
    goals: [
        {
            description: "Complete 1 leadership module",
            isComplete: true,
        },
        {
            description: "Complete 1 leadership module",
            isComplete: false,
        },
        {
            description: "Complete 1 technology module",
            isComplete: false,
        },
        {
            description: "Complete 1 collaboration module",
            isComplete: false,
        },
    ],
    // current skill levels
    skills: [
        { title: "Strategic Thinking", level: 2 },
        { title: "Leadership", level: 3 },
        { title: "Team Management", level: 2 },
        { title: "Python Programming", level: 3 },
    ],
    // raw feedback
    feedback: RAW_FEEDBACK,
}