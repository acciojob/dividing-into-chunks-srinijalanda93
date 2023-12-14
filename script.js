const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let trackSum=0 ,ans=[] ,subArr=[];
	//corner case
	if(arr.length===0) return [];
	for(let i=0;i<arr.length;i++){
		if(trackSum+arr[i] <=n){
			//push in the subArr
			subArr.push(arr[i]);
			//update the trackSum
			trackSum=trackSum+arr[i];
		}
		else{
			ans.push(subArr)
			trackSum=0;
			subArr=arr[i];
		}
	}
	return ans.push(subArr);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
