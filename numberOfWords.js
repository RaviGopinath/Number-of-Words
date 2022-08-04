var words = 'ggggoooppi';
let count=1;
let y=[]
for(i=0;i<words.length;i++){
if(words[i]==words[i+1]){
    count++
}
else{
    let word=`${count}${words[i]}`
   count=1;
   y.push(word)
}

}
console.log(y);