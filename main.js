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
// convert input into gregorian time



