

// 1. prompt birth month and birth year
   let _MONTH_  =   prompt("In what month were you born?" );
   let _YEAR_   =   prompt("In what year were you born?"  );

//2.  convert input into gregorian time
//      convert that time to seconds in an inertial frame
    // const birthDayTime = new Date(_YEAR_,_MONTH_, 0, 0, 0, 0, 0);
    let birthDayTime = new Date(""+ _MONTH_ +" 01, "+_YEAR_+" 11:13:00");
    let birthEpoch   = Math.floor( birthDayTime.valueOf()/1000 );

//3. get current date the same
//     now convert that time the same
    let currentTime = new Date();
    let currentEpoch = Math.floor( currentTime.valueOf()/1000  );

//4. output the difference
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
  ~const d = new Date("October 13, 2014 11:13:00");~
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

* [2021-06-24 08:44] Solution
  + Just code it. Done.
    #+begin_src bash
    # $@ formatted timestamp representing birthday
    function deltaBirth(){
      lambda="$(echo ${@})";
      b=$(date -d "${lambda}"        +"%s");
      n=$(date                       +"%s");
      echo $(( $n - $b ));
    }
    #+end_src

*/