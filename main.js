function palin() {
let arr=[121,111,131,144,565,445,456];
let palindrome=[],nopalindrome=[];

for(i=0;i<arr.length;i++)
{
	let a=arr[i], check=arr[i];c=0;
	while(a>0)
	{
		let b=a%10;
		a=parseInt(a/10);
		c=c*10 + b;	
	}
	if(c==check){   	
        palindrome.push(check);
	}
	else{
		nopalindrome.push(check);
	}
}
console.log(palindrome);
console.log(nopalindrome);
}

palin();