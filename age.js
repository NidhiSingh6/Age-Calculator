const input=document.querySelector('.dob')
const button=document.querySelector('.cal')
const result=document.querySelector('.out')

button.addEventListener('click',()=>{
    if(input.value===""){
        alert("Please enter your date of birth")
    }else{
        console.log(input.value);
        let i=new Date(input.value)
        let yr=i.getFullYear()
        console.log(yr);
        let d=new Date()
        let y=d.getFullYear()
        console.log(y);

        res=y-yr
        result.textContent=res
    }
})