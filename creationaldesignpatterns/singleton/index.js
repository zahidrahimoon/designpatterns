class Config {
    constructor() {}
    start(){ console.log('App has started') }  
    update(){ console.log('App has updated') }
}

const instance = new Config()
Object.freeze(instance)