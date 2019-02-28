function esPar(si, no) {
    let num=2;
          if (num%2 == 0) {
            si('es par!');
          }
          else {
            no();
          }
    };
    
    esPar(
        function(r) {
            console.log(r)
        },
        function(r) {
            console.log('es impar!')
        },
    )