import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Ship: new ImageSource('images/ship.png'),
    Comet: new ImageSource('images/comet.png'),
    Comet2: new ImageSource('images/comet-2.png'),
    Background: new ImageSource('images/background-game.png', { wrapping: ImageWrapping.Repeat }),
    Bullet: new ImageSource('images/bullet.png'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }