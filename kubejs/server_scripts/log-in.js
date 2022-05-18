/* 

Shoutout to "ChiefArug#4639" for helping me with this.

*/

onEvent("player.logged_in", event => {
    if (!event.player.stages.has("first_login")) {
        event.player.stages.add("first_login");
        event.player.sendData("first_login", { message: "Welcome, select your gender!" })
    }
})