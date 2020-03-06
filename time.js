
export default class CurrentDate{
    // constructor(day,month){
    //     this.day=day;
    //     this.month=month;
    // }
    getDay(index){
        // var day;
        switch(index){
            case 1:
                this.day= 'Sunday';
                break;
            case 2:
                this.day= 'Monday';
                break;
            case 3:
                this.day= 'Tuesday';
                break;
            case 4:
                this.day= 'Wednesday';
                break;
            case 5:
                this.day= 'Thursday';
                break;
            case 6:
                this.day= 'Friday';
                break;
            case 7:
                this.day= 'Saturday';
                break;
        }
        return this.day;

    }
    getMonth(index){
        switch(index){
            case 1:
                this.month= 'January';
                break;
            case 2:
                this.month= 'Febuary';
                break;
            case 3:
                this.month= 'March';
                break;
            case 4:
                this.month= 'April';
                break;
            case 5:
                this.month= 'May';
                break;
            case 6:
                this.month= 'June';
                break;
            case 7:
                this.month= 'July';
                break;
            case 8:
                this.month= 'August';
                break;
            case 9:
                this.month= 'September';
                break;
            case 10:
                this.month= 'October';
                break;
            case 11:
                this.month= 'November';
                break;
            case 12:
                this.month= 'December';
                break;
        }
        return this.month;
    }

}
export class Time{
    constructor(hour, minute, second){
        this.hour=hour;
        this.minute=minute;
        this.second=second;
    }
    getTime(){
       const p_o_a=(this.hour<12)? 'AM':'PM';
       const hourF=(this.hour<12)? this.hour:this.hour-12;
       
       //add a 0 in front of nminutes or seconds if less than 10
       const minuteF=(this.minute<10)? `0${this.minute}`:this.minute;
       const secondF=(this.second<10)? `0${this.second}`:this.second;

       return `${hourF}:${minuteF}:${secondF} ${p_o_a}`;

    }
}
