var map = function(arr, fun) {
    var array=[];
    for(i=0;i<arr.length;i++)
    {
        arra[i]=fun(arr[i],i);
    }
    return array;
};
