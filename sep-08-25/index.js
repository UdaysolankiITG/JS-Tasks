import axios from 'axios'
// const url = "https://jsonplaceholder.typicode.com/comments" //get with param postId : 1
const url = "https://ai-agent-steel-ten.vercel.app/api/v1/Auth/Signup" //post
// const url = "https://jsonplaceholder.typicode.com/posts/1" //get
// axios(url).then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.log(err)   
// })

// async function getTodos() {
//     try {
//         const data = await axios.get(url, {
//             params: {
//                 postId: 1
//             }
//         });
//         console.log(data.data)
//     } catch (error) {
//         console.log("error", error)
//     }
// }

async function signup() {
    try {
        const data = await axios.post(url, {
            Name: "uday",
            Email: "uday@gmail.com",
            Password: "uday@0711"
        });
        console.log(data.data)
    } catch (error) {
        console.log("error", error.message)
    }
}

  
console.log(signup())