export default function getSummoner(username) {
    fetch(`http://localhost:3001/?param1=${username}`)
    .then((response) => response.json())
    .then((result) => {
    console.log(result)
    })
}