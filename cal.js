let screenOutput = document.getElementById('screen-output');
        function display(num){
            screenOutput.value += num;
        }
        function Calculator(){
            try{
                screenOutput.value = eval(screenOutput.value);
            }
           catch(err){
            alert('incorrect output')
           }   
        }
        function Clear(){
            screenOutput.value = "";
        }
        function del(){
            screenOutput.value = screenOutput.value.slice(0,-1)
        }