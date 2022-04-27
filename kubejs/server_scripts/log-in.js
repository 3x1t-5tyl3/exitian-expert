onEvent('player.logged_in', event => {
    if (event.player.persistentData.firstLogin == null) {
        event.server.scheduleInTicks(50, callback => {
            event.player.sendData('first_login', {message: "Welcome!"})
            event.player.persistentData.firstLogin = 10
        })
    }
})