// const http = require('http');


// describe("http requests.", ()=>{

//     it("should get users", async()=>{
//           // Make a request to a tunneling proxy
//   const options = {
//     port: 3000,
//     host: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'www.google.com:80'
//   };


//         let response = await http.get({
//             hostname: 'localhost',
//             port: 80,
//             path: '/',
//             agent: false  // Create a new agent just for this one request
//           });

//           console.log(response.statusCode);

//         // await http.get({
//         //     hostname: 'localhost',
//         //     port: 3000,
//         //     path: '/users',
//         //     agent: false  // Create a new agent just for this one request
//         //   }, (res) => {
//         //     console.log(res.statusCode);
//         //     // Do stuff with response
//         //   });
//     });


// });