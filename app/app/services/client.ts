import axios from 'axios';


// Add a request interceptor

const apiClient1 =(auth:boolean=false,token:string="")=>{
  
  
   
  let client = axios.create({
  baseURL: 'http://nakliye.test.co.uk/api/',
  responseType: 'json',
  withCredentials: true,
});



client.interceptors.request.use(function (config) {
  
  
 

if (auth && token.length>0 ) {
  config['headers']= { Authorization: `Bearer ${token}` }
  }


  // Do something before request is sent
  //console.log("axios.interceptors.request.use(function ",config);
  
  return config;
}, function (error) {
  // Do something with request error
  console.log(error);
  
  return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use( (response)=> {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(response);
  
  return response;
},  (error1:any)=> {


  console.log(error1.response);
  
  if(error1.response.status==401){
    console.log("logout");
    
    //onLogout();
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return error1.response;
  // return Promise.reject(error1);
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
return client;
}



//const apiClient =(auth:boolean=false)=> apiClient1(auth);
const apiClient =(auth:boolean=false,token:string="")  => apiClient1(auth,token);

export default  apiClient;
