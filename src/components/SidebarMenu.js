export default function SidebarMenu(){

const pr1=new Promise((resolve,reject)=>{
      resolve("Hello")
})
const pr2=new Promise((resolve,reject)=>{
    resolve("From pr2")
})
const pr3=new Promise((resolve,reject)=>{
    resolve("Somethingh went wrong")
})

const res=Promise.all([
    pr1,
    pr2,
    pr3
])

 async function test(){
   const result= await res
   console.log("Result", result)
}
test()

}