import axios from "axios";

const API_URL="http://127.0.0.1:8000";

export async function uploadDataset(file){

const formData=new FormData();

formData.append(
"file",
file
);

try{

const response=

await axios.post(

`${API_URL}/dataset/upload`,

formData,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);

return response.data;

}

catch(error){

console.log(
"Upload Error",
error
);

return null;

}

}