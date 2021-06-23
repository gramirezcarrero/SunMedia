import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        const event  = new Event();
        const supportedEvents =  event.eventProcess(events, types);
        const eventManager = new EventManager();
        return {supportedEvents,eventManager}
    }
};