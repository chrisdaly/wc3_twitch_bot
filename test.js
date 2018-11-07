function format_message(data) {
    let rank = get_rank(data);

    return `Ladder SOLO, Level ${Math.floor(data.level)}, ${rank}, ${
		data.wins} Wins, ${data.losses} Losses, ${data.win_percentage}%`;
}

function get_rank(data) {
    if (data.rank == null) {
        return "Unranked";
    } else {
        return `Rank ${data.rank}`;
    }
}

data_all = [{
        wins: 1010,
        losses: 14,
        rank: 1,
        experience: "27,938",
        level: 60.86,
        win_percentage: 98.63
    },
    {
        wins: 7,
        losses: 0,
        rank: null,
        experience: "758",
        level: 5.52,
        win_percentage: 100.0
    }
];

data_all.forEach(x => console.log(format_message(x)));