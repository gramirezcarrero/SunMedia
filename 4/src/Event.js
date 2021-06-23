export default class Event{
  
    
    eventProcess(events, types){
        const arrayPurified = [];
        for( const event of events ){
            const includes = types.find(type=> event.type === type);
            if(includes !== undefined){
                arrayPurified.push(event);
            }
        }
        console.log(arrayPurified)
        return arrayPurified;
    }
};