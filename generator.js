const messageGenerator = {
// Example: "Barry Allen's (proper noun) movement (noun) is the fastest (superlative adjective) on the planet (common noun)."
    _nameList: [
        "Barry Allen",
        "Bruce Wayne",
        "Clark Kent",
        "Diana Prince",
        "Hal Jordan",
        "Hank McCoy",
        "James Gordon",
        "John Stewart",
        "Kara Zor-El",
    ],
    _superlativeAdjectivesList: [
        "biggest", "bravest",
        "cheapest", "coldest",
        "dullest", "darkest",
        "fastest", "fiercest",
        "greatest", "gifted",
        "hottest", "most honest",
    ],
    _commonNounsList: [
        "planet", "mountain",
        "company", "organization",
        "government", "state",
        "nation", "continent",
        "universe", "galaxy",
    ],
    _nounList: [
        "movement", "ability",
        "parrot", "penguin",
        "love", "communication",
        "house", "power",
        "money", "time",
    ],

    get nameList() {
        return this._nameList;
    },

    get superlativeAdjectivesList() {
        return this._superlativeAdjectivesList;
    },

    get commonNounsList() {
        return this._commonNounsList;
    },
    get nounList() {
        return this._nounList;
    },

    set nameList(value) {
        if (Object.prototype.toString.call(value) == '[object Array]') {
            this._nameList = value;
        } else {
            console.log("Error: nameList must be an array.");
        }
    },

    set superlativeAdjectivesList(value) {
        if (Object.prototype.toString.call(value) == '[object Array]') {
            this._superlativeAdjectivesList = value;
        } else {
            console.log("Error: superlativeAdjectivesList must be an array.");
        }
    },

    set commonNounsList(value) {
        if (Object.prototype.toString.call(value) == '[object Array]') {
            this._commonNounsList = value;
        } else {
            console.log("Error: commonNounsList must be an array.");
        }
    },

    set nounList(value) {
        if (Object.prototype.toString.call(value) == '[object Array]') {
            this._nounList = value;
        } else {
            console.log("Error: nounList must be an array.");
        }
    },

    generateMessage: function () {
        let name = this._nameList[Math.floor(Math.random() * this._nameList.length)];
        let noun = this._nounList[Math.floor(Math.random() * this._nounList.length)];
        let superlativeAdjective = this._superlativeAdjectivesList[Math.floor(Math.random() * this._superlativeAdjectivesList.length)];
        let commonNoun = this._commonNounsList[Math.floor(Math.random() * this._commonNounsList.length)];
        // Example: "Barry Allen's (proper noun) movement (noun) is fastest (superlative adjective) on the planet (common noun)."
        return `${name}'s ${noun} is the ${superlativeAdjective} on this ${commonNoun}.`;
    },
}

console.log(messageGenerator.generateMessage());
