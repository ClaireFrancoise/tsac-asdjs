function rpn(stringa) {
      var stack = new Stack();
      var ss = stringa.split(" ");
      for (var i = 0; i < ss.length; i++) {
          var ris = 0;
          switch (ss[i]) {
              case "+":
                  ris = stack.pop();
                  ris += stack.pop();
                  stack.push(ris);
                  break;
              case "-":
                  ris = stack.pop();
                  ris -= stack.pop();
                  stack.push(ris);
                  break;
              case "*":
                  ris = stack.pop();
                  ris *= stack.pop();
                  stack.push(ris);
                  break;
              case "/":
                  ris = stack.pop();
                  ris /= stack.pop();
                  stack.push(ris);
                  break;
           
              default:
                  stack.push(parseInt(ss[i]));
          }
      }
      return stack.pop();
  }
