/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 * 

    image
    id - int
    name - string
    food - string
    size - int
    rarity - string
    color - string

*/

const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            species: "Yellow Tang",
            length: "7.9 in",
            location: "Hawaii",
            food: ["algae", "plants"],
            rarity: "common",
            color: "yellow"
        },
        {
            id: 2,
            name: "Geoff",
            species: "Salmon",
            length: "47.2 in",
            location: "Seattle",
            food: ["fish", "krill"],
            rarity: "common",
            color: "green"
        },
        {
            id: 3,
            name: "Timothy",
            species: "Bluefish",
            length: "12 in",
            location: "Australia",
            food: "fish",
            rarity: "rare",
            color: "blue"
        },
        {
            id: 4,
            name: "Moe",
            species: "King Mackerel",
            length: "30 in",
            location: "Gulf of Mexico",
            food: ["fish", "attention"],
            rarity: "common",
            color: "blue"
        },
        {
            id: 5,
            name: "Clinton",
            species: "Sturgeon",
            length: '50 in',
            location: "Arabian Sea",
            food: "dreams",
            rarity: "very rare",
            color: "black"
        },
        {
            id: 6,
            name: "Spartame",
            species: "Squid",
            length: "20 in",
            location: "Australia",
            food: ["fish", "algae"],
            rarity: "rare",
            color: "pink"
        },
        {
            id: 7,
            name: "Artax",
            species: "Goldfish",
            length: "0.2 in",
            location: "Kroger",
            food: "yummy",
            rarity: "common",
            color: "orange"
        },
        {
            id: 8,
            name: "Tyrone",
            species: "Beta Fish",
            length: "6 in",
            location: "Pet Store",
            food: ["fish", "attention"],
            rarity: "common",
            color: "red"
        },
        {
            id: 9,
            name: "Patrick",
            species: "Starfish",
            length: "3 in",
            location: "Bikini Bottom",
            food: "Krabby Pattys",
            rarity: "somewhat rare",
            color: "pink"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}