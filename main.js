// prompt birth month
// prompt birth year
//   convert input into gregorian time
//   convert that time to seconds in an inertial frame
// get current date as gregorian time
//   now convert that time the same
// output the difference


/*

* Research Notes
+ [[https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html][w3docs::timestamp]]
  *Date.now () Method* =returning the number of the milliseconds, elapsed since the Unix Epoch=

+ [[https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript][]] 
  *How do you get a timestamp in JavaScript?*
   Looks like the same thing as above ~+ new Date()~

+ [[https://www.w3schools.com/js/js_dates.asp][w3schools::js_dates]] 
  *JavaScript Date Objects* Perhaps there is a way to use OOP to help us in this /dynamic-typed/ language :P
   #+begin_quote
   new Date()
   new Date(year, month, day, hours, minutes, seconds, milliseconds)
   new Date(milliseconds)
   new Date(date string)
   #+end_qute

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