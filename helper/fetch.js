module.exports.fetchList=function(list){
    var tempList=[];
    (list).forEach(element => {
        var elem={
            name:element.name,
            amount:element.amount

        }
        tempList.push(elem);
        
    });
    return tempList;

}