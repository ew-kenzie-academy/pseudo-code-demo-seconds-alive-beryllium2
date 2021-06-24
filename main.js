/*

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


// prompt birth month
// prompt birth year
//   convert input into gregorian time
//   convert that time to seconds in an inertial frame
// get current date as gregorian time
//   convert that time to seconds in an inertial frame


/*
+ [[https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html][w3docs::timestamp]]
  *Date.now () Method* =returning the number of the milliseconds, elapsed since the Unix Epoch=

*/