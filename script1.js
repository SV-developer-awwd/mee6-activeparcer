// FOR COPYPAST
const usersNotSorted = document.querySelectorAll('.leaderboardPlayer'),
    users = []

for (let i = 0; i < usersNotSorted.length; i++) {
    const usernameRAW = usersNotSorted[i].getElementsByClassName('leaderboardPlayerUsername')

    const username = usernameRAW[0].innerHTML

    const userActiveRAW = usersNotSorted[i].getElementsByClassName('leaderboardPlayerStatValue')

    const userActive = userActiveRAW[0].innerHTML

    const user = {[username]: userActive}
    users.push(user)
}

console.log(JSON.stringify(users)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replace("[", "{")
    .replace("\"]", "\"}"))