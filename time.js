
var today= new Date();
const day =(index)=>{
    var day;
    switch(index){
        case 1:
            day= 'Sunday';
            break;
        case 2:
            day= 'Monday';
            break;
        case 3:
            day= 'Tuesday';
            break;
        case 4:
            day= 'Wednesday';
            break;
        case 5:
            day= 'Thursday';
            break;
        case 6:
            day= 'Friday';
            break;
        case 7:
            day= 'Saturday';
            break;
    }
    return day;

}
const month= (index)=>{
    var month;
    switch(index){
        case 1:
            month= 'January';
            break;
        case 2:
            month= 'Febuary';
            break;
        case 3:
            month= 'March';
            break;
        case 4:
            month= 'April';
            break;
        case 5:
            month= 'May';
            break;
        case 6:
            month= 'June';
            break;
        case 7:
            month= 'July';
            break;
        case 8:
            month= 'August';
            break;
        case 9:
            month= 'September';
            break;
        case 10:
            month= 'October';
            break;
        case 11:
            month= 'November';
            break;
        case 12:
            month= 'December';
            break;
    }
    return month;
}
const hour = (hour)=>{

}
// module.exports=month,day;