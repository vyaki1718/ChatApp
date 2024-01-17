

class Pubsub {
    constructor(){
        this.subscribers={};  // {'eventName':[cb_sub1, cb_sub2, cb_sub3]}
    }

/**
 * 
 * @param  event  -> It is a string denoting unique event fired 
 * @param callback -> For a subscriber what method should be excuted when a event is fired 
 */
    subscribe(event, callback){
           if(!this.subscribers[event]){
            //currently no subscriber callback was registered for the event
            this.subscribers[event]=[];
           }
           this.subscribers[event].push(callback);

           return ()=> this.unsuscribe(event,callback);
    }

    unsuscribe(event, callback){
        if(!this.subscribers[event]) return;
        this.subscribers[event]= this.subscribers[event].filter(cb => cb !== callback);
    }

/***
 * @param event  -> It is a string denoting unique event fired
 * @param data -> For the given event what data should be passed along with publishing event
 * 
 */
    publish(event, data){
        if(!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback=> callback(data));
    }
}


// const pb = new Pubsub();

// const unsub1 = pb.subscribe('airforce', (data)=>console.log("subsciber 1 airforce", data));

// const unsub2 = pb.subscribe('airforce', (data)=>console.log('subscriber 2 airforce', data));


// pb.subscribe('new balence', (data)=> console.log("subscriber 1 of new balence", data));

// pb.publish('new balence', {shoeName:"something"})

// unsub1()
// pb.publish('airforce', {shoeName:"addidas"})