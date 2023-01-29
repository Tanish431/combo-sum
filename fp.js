function loa(){
    let min_1=Number(document.getElementById('min').value)
    let max_1=Number(document.getElementById('max').value)
    let sum=Number(document.getElementById('sum').value)
    let ans=document.getElementById('answer')
    let min_2=0
    let dif = 0
    let sum_2=0
    let min_c=min_1
    let a=[]
    let b=[]
    let m=[]
    let n=[]
    while(min_c<=max_1){
        b.push(min_c)
        min_c++
    }
    while(min_2<sum){
        a.push(min_1)
        min_2+=min_1 
    }
    while(a[0]<=max_1){
        for (const item of a) {
            sum_2 += item;
        }
        if(a[a.length - 1]>max_1){
            a.pop()
            a[a.length - 1]++
        }
        else if (sum_2==sum){
            ans.innerHTML += "["+a+"]"
            a.pop()
            a[a.length - 1]++
            n.push("L")
        }else if(sum_2<sum){
            a.push(a[a.length - 1])
        }else if(sum_2>sum){
            a.pop()
            a[a.length - 1]++
            dif=sum_2-sum
            m.push(dif)
        }
        sum_2=0
        dif=0
    }
    if(n.length==0){
        let exult=Math.min(...m)
        document.getElementById("extra").innerHTML="Extra: "+exult
        ans.innerHTML+=" 0"
    }
    if(n.length!=0){
        document.getElementById("extra").innerHTML="Extra: 0"
    }
}
function clear(){
    document.getElementById('answer').innerHTML=""
    console.log("hello")
}