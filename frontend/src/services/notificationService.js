let notifications=[

{
message:"Welcome to Forecast AI"
}

];


export function addNotification(message){

notifications.unshift({

message

});

}


export function getNotifications(){

return notifications;

}