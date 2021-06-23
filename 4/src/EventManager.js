export default class EventManager{
    run(events) {
        for(const event of events){
            const {second, type, message } = event;
            console.log(`At second ${second} {type: "${type}", message: "${message}"}`);
        }
    }
};