function Kmp(str,substr){
  function next(substr){
    const _next = new Array(substr.length).fill(0)
    for(let i=1;i<substr.length;i++){
      for(let j=i-1;j>0;j--){
        if(substr.slice(0,j)===substr.slice(i-j,i)){
          _next[i-1]=Math.max(_next[i],j)
        }
      }
    }
    return _next
  }

  const _next = next(substr)
  console.log(_next);
}

Kmp('','abcabcc')