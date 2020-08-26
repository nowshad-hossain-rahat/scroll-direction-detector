# scroll-direction-detector

This library contain only one function to detect the scroll direction (Up,Down) and call to two different callback function.One is for "scrolling up",another for "scrolling down".

EG : 
````javascript

<script src="https://cdn.jsdelivr.net/gh/nowshad-hossain-rahat/scroll-direction-detector/scroll-direction-detector.js"></script>

<script>
    
    function scroll_up(scrolled){
        alert("up");
    }

    function scroll_down(scrolled){
        alert("down");
    }
    
    scrollUpDown(scroll_up, scroll_down);

</script>
