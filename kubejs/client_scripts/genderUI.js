const WildfireScreen = java('com.wildfire.gui.screen.WildfirePlayerListScreen')

onEvent('player.data_from_server.first_login', event => {
    event.player.tell(event.data.message)
    Client.setCurrentScreen(new WildfireScreen(
        Client.minecraft
    ))
})