var timeBar = document.getElementById('timeBar');
    var colors = document.getElementById('colors');
    var src = document.getElementById('src');
    var tick = document.getElementById('right');
    var croos = document.getElementById('wrong');
    var startBtn = document.getElementById('startBtn');

    var i, j ;
    var score = 0 ;

    function start(){
        col();
        timeBar.classList.add('timeBar');
        startBtn.style.display = 'none';
    }

    function out(){
        alert('out, your  is ${score}');
        score = 0;
        timeBar.classList.remove('timeBar');
        startBtn.style.display = 'block';
    }

    function col(){
        var col = ['red', 'blue', 'green', 'yellow', 'purple'] ;
        i = Math.floor(Math.random()*5);
        j = Math.floor(Math.random()*5);
        colors.innerText = col[i] ;
        colors.style.color = col[j];
    }

    function wrong(){
        if (i != j){
            col();
            score++ ;
            cross.classList.add('clicked');
            timeBar.classList.remove('timeBar');
            setTimeout(() => {
                cross.classList.remove('clicked');
                timeBar.classList.add('timeBar');
            },200);
        }
        else{
            out();
        };
    }

    function right(){
        if (i == j){
            col();
            score++ ;

            tick.classList.add('clicked');
            timeBar.classList.remove('timeBar');
            setTimeout(() => {
                tick.classList.remove('clicked');
                timeBar.classList.add('timeBar');
            },200);
        }
        else{
            out();
        };
    }

    document.onkeydown = function(e){
        if (e.keyCode == 37) {
            wrong();
        }
    }

    setInterval(() => {
        var timeWidth = timeBar.offsetWidth;
        var maxWidth = document.
        getElementById('prgBar').
        offsetWidth ;
        if(timeWidth > maxWidth){
            alert('timeout, your score is ${score}');
            timeBar.classList.remove('timeBar');
            startBtn.style.display = 'block';
            setTimeout(() => {
                score = 0;
            },100)
        }
        else{
            scr.innerText = score ;
        }
    },1)