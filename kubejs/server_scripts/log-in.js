onEvent("player.logged_in", event => {
    if (event.player.stages.has("first_login")) {
        event.server.scheduleInTicks(50, callback => {
            event.player.sendData("first_login", { message: "Welcome, select your gender!" })
        })
    } else {
        event.player.stages.add("first_login");
        event.player.sendData("first_login", { message: "Welcome, select your gender!" })
    }
})