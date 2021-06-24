// prompt birth month, birth year
let _MONTH_  =   prompt("In what month were you born?" );
let _YEAR_  =    prompt("In what year were you born?"  );
//   convert input into gregorian time
const birthDayTime = new Date(_YEAR_,_MONTH_, 0, 0, 0, 0, 0);
//   convert that time to seconds in an inertial frame
const birthEpoch= birthDayTime.valueOf()/1000;
// get current date the same
const currentTime = new Date();
//   now convert that time the same
const currentEpoch= currentTime.valueOf()/1000;
// output the difference
timeDifference=currentEpoch-birthEpoch;
alert(timeDifference);


/*

* Research Notes
+ [[https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html][w3docs::timestamp]]
  *Date.now () Method* =returning the number of the milliseconds, elapsed since the Unix Epoch=

+ [[https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript][]] 
  *How do you get a timestamp in JavaScript?*
   Looks like the same thing as above ~+ new Date()~

+ [[https://www.w3schools.com/js/js_dates.asp][w3schools::js_dates]] 
  *JavaScript Date Objects* 
   Perhaps there is a way to use OOP to help us in this /dynamic-typed/ language :P
   #+begin_quote
   new Date()
   new Date(year, month, day, hours, minutes, seconds, milliseconds)
   new Date(milliseconds)
   new Date(date string)
   #+end_quote

+ [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf][mdn::Date/valueOf]]
  *Date.prototype.valueOf()*
   =The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date.=
   #+begin_src javascript
   const birthDay = new Date(1971,5, 0, 0, 0, 0, 0);
   birthDay.valueOf();
   #+end_src

* Solution
  + [2021-06-24 08:44] Just code it. Done.
    #+begin_src bash
    # $@ formatted timestamp representing birthday.
    function delBirth(){
      lambda="$(echo ${@})";
      b=$(date -d "(echo ${lambda})" +"%s");
      n=$(date                       +"%s");
      echo $(( $n - $b ));
    }
    #+end_src

*/