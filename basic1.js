function wordblanks(mynoun,myverb,myadjective,myadverb)
{
    var result="";
    result+="The " + mynoun + " " + myverb + " " + myadjective + " " + myadverb
    return result;
}
console.log(wordblanks("thunderbird","is","my","emotion"));
//
var myarray=["Mrinmoy",2];
console.log(myarray)
//
var myarray=[["Mrinmoy",3],["Watchdog",5]];
console.log(myarray)
//
var myarray=[3,6,9];
var mydata=myarray[1];
console.log(mydata)
//
var myarray=[3,6,9];
myarray[1]=7;//it is now set
console.log(myarray)
//
var myarray=[[1,2,3],[4,5,6],[[7,8,9],10,11,12]];
var mydata=myarray[2][2];
console.log(mydata)
//
var myarray=[["cat",23],["cow",87]];
myarray.push(["berk","atan"]);
console.log(myarray)
//
var myarray=[["cat",23],["cow",87]];
myarray.shift();
myarray.unshift(["SKR",09]);
console.log(myarray)
//
function reusablefunction(){
    console.log("hi Mimo");
}
reusablefunction()
reusablefunction()
reusablefunction()
//
function functionwithargs(a,b){
    console.log(b/a)
}
functionwithargs(3,18)
//
function localscope(){
    var myvar=18;
    return myvar;
}
console.log(localscope()) 
//
var myouterwear="full sleeve";
function myoutfit(){
    var myouterwear="only sleeve";
    console.log(myouterwear)
}
myoutfit()
//
function vense(num){
    return num - 7;
}
console.log(vense(5))
//
var sum= 2;
function something(){
    sum+=3;
    console.log(sum)
}
something()
//
var changed=0;
function change(num){
    return (num + 2)/4;
}
changed=change(0);
console.log(changed)
//
function nextinline(array,item){
    array.push(item);
    return array.shift();
}var array=[1,2,3,4,5,];

console.log("before: " + array)
console.log(nextinline(array,6))
console.log("after: " + array)
//
function trueorfalse(istrue){
    if (istrue){
    return "it is true";
    }
    return "it is false";
}
console.log(trueorfalse(true))
//
function equality(val){
    if (val == 13){
        return "the value is equal";
    }
    return "the value is not equal";
}
console.log(equality(13))
//
function strictequality(val){
    if (val === 13){
        return "the value is equal";
    }
    return "the value is not equal";
}
console.log(strictequality('13'))
//
function nonequality(val){
    if (val!= 98){
        return "not equal";
    }
    return "equal";
}
console.log(nonequality(23))
//
function testgreater(val){
    if (val>9.4){
        return "over 9.4";
    }
    if (val>3.3)
    {
     return "over 3.3";
     }
     return "3.3 or under"
    }
    console.log(testgreater(5.6))
    //
    function testandlogic(val){
        if (val <=50 && val >= 25){
            return "it is true";
        }
        return "it is false";
    }
    console.log(testandlogic(36))
    //
    function logoroperator(val){
        if (val<5.6 || val>17.5 ){
            return "value outside";
        }
        return "value inside";
    }
    console.log(logoroperator(8.56))
    //
    function ifelse(val){
    if(val < 6) {
     result = "less than 6";
    } else {
          result = "greater than 6"
         }
       return result;
        }
        console.log(ifelse(4))
        //
    function elseif(val)  {
        if (val >10){
            return "greater than 10";
        } else if (val<5) {
            return "smaller than 5";
        }
        return "in between 5 and 10";
        }
    console.log(elseif(8)) 
    //golf code
    /*In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to put the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different sportsterms.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	                 Return
   1	             "Hole-in-one!"
<= par - 2	            "Eagle"
par - 1	                "Birdie"
par	                     "Par"
par + 1	                "Bogey"
par + 2	             "Double Bogey"
= par + 3              "Go Home!"

par and strokes will always be numeric and positive.*/

var playing=["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"];
function golfscore(par,Strokes){
    if (Strokes == 1){
        return playing[0];
    }else if(Strokes<= par - 2){
        return playing[1];
    }else if (Strokes== par-1) {
        return playing[2];
    }else if (Strokes== par) {
        return playing[3];
    }else if (Strokes== par +1) {
        return playing[4];
    }else if (Strokes== par+2) {
        return playing[5];
    }else if(Strokes==par +3){
        return playing[6];
    }
}
console.log(golfscore(0,1))






