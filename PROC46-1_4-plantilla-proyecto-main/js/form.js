class Form{
    constructor(){
       this.input = createInput("tu gatito");
       this.button = createButton('Jugar');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reiniciar');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("¡Alimenta a tu gatito!");
        this.title.position(displayWidth/2-100, 100);
        this.title.style('font-size', '70px');
        this.title.style('color', '#F1DB78');
        this.input.position(displayWidth/2+150,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2+150,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', '#F1BF3B');
        this.reset.position(displayWidth/2+200,640);
        this.reset.style('height', '30px');
        this.reset.style('background', '#D3BF63');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hola, " + player.name + ", espera a que se una otro jugador")
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}
