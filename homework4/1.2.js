var a =[1,2,3,4,5];
var sum =0;
for(var i=0;i<a.length;i++)
{
    sum+=a[i];
}
var mean=sum/a.length;
sum=0;
for(var i=0;i<a.length;i++)
{
    var ans=a[i]-mean;
    sum+=ans*ans;
}
var sd=Math.sqrt(total/a.length);

console.log("標準差 = %d",sd);