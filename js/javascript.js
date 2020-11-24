var flagSmall = true;
var flagFullScreen = true;
var flagLineUp = true;
var flagHomeTeam = true;
var flagAdvertisement = true;
var flagCountDown = true;
var flagCountDownStart = false;
var flagClockStart = false; // if user stop clock
var flagClockStartNew = false; // if Clock value is set manually
var flagStats = true;
var flagFullStats = true;


var counterIntervalID; // setInterval() ID for countdown
var clockIntervalID; // setInterval() ID for clock
var disappearIntervalID; // setInterval() ID for dissappear pics

// values of score and clock initially on board
document.getElementById("score-on-board-small").innerHTML='0:0';
document.getElementById("stats-goal").innerHTML='0:0';
document.getElementById("full-stats-goal").innerHTML='0:0';
document.getElementById("clock-minutes").innerHTML='00';        // for small btn
document.getElementById("clock-seconds").innerHTML='00';
document.getElementById("clock-minutes2").innerHTML='00';       // for full screen
document.getElementById("clock-seconds2").innerHTML='00';

// to save value of sec and min to restart countdown
var globalCoundownMin = parseInt(document.getElementById('minutes-dynamic').value);
var globalCoundownSec = parseInt(document.getElementById('seconds-dynamic').value);
var globalClockSec = parseInt(document.getElementById('clock-seconds-dynamic').value);
var globalClockMin = parseInt(document.getElementById('clock-minutes-dynamic').value);
var globalTotalSeconds;


//  refresh button for log.html
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
    flagCountDownStart = true;
});

//  Count down minutes minus clicked
$('#count-minutes-minus').click(function(){
    globalCoundownMin = parseInt(document.getElementById("minutes-dynamic").value) + 1;
    flagCountDownStart = true;
});

//  Count down seconds minus clicked
$('#count-minutes-plus').click(function(){
    globalCoundownMin = parseInt(document.getElementById("minutes-dynamic").value) + 1;
    flagCountDownStart = true;
});

//  Count down minutes minus clicked
$('#count-seconds-minus').click(function(){
    globalCoundownSec = parseInt(document.getElementById("seconds-dynamic").value) + 1;
    flagCountDownStart = true;
});

//  Count down seconds minus clicked
$('#count-seconds-plus').click(function(){
    globalCoundownSec = parseInt(document.getElementById("seconds-dynamic").value) + 1;
    flagCountDownStart = true;
});



//  clock minutes minus clicked
$('#clock-minutes-minus').click(function(){
    globalClockMin = parseInt(document.getElementById("clock-minutes-dynamic").value) + 1;
    flagClockStartNew = true;
});

//  clock minutes minus clicked
$('#clock-minutes-plus').click(function(){
    globalClockMin = parseInt(document.getElementById("clock-minutes-dynamic").value) + 1;
    flagClockStartNew = true;
});

//  clock seconds minus clicked
$('#clock-seconds-minus').click(function(){
    globalClockSec = parseInt(document.getElementById("clock-seconds-dynamic").value) + 1;
    flagClockStartNew = true;
});

//  clock seconds minus clicked
$('#clock-seconds-plus').click(function(){
    globalClockSec = parseInt(document.getElementById("clock-seconds-dynamic").value) + 1;
    flagClockStartNew = true;
});

// for reset button
document.getElementById("btn-reset").addEventListener("click", resetFun);

function resetFun()
{
    // Button Color green to blue on click
    $('.btn-active-green').removeClass('btn-success').addClass('btn-primary');

    setScreen();
    resetInfo();
    resetPeriods();
    resetCountdown();
    resetClock();
    resetStats();
    resetFullStatsFun();
    
    globalCoundownMin = 0;
    globalCoundownSec = 0;
    globalClockSec = 0;
    globalClockMin = 0;
    globalTotalSeconds = 0;
}

// reset info group
function resetInfo()
{
    // reser Small
    var pic = document.getElementById('small-bar-pic');
    pic.style.display = "none";
    pic = document.getElementById('small-left-color-bar');
    pic.style.display = "none";
    pic = document.getElementById('small-right-color-bar');
    pic.style.display = "none";
    pic = document.getElementById('small-bar-logo');
    pic.style.display = "none";
    var text = document.getElementById('small-bar-team-name-1');
    text.style.display = "none";
    text = document.getElementById('small-bar-team-name-2');
    text.style.display = "none";
    text = document.getElementById('score-on-board-small');
    text.style.display = "none";
    text = document.getElementById('clock-container');
    text.style.display = "none";
    document.getElementById("score-on-board-small").innerHTML='0:0';
    //document.getElementById("stats-goal").innerHTML='0:0';
    document.getElementById("clock-minutes").innerHTML='00';        // for small btn
    document.getElementById("clock-seconds").innerHTML='00';
    document.getElementById("clock-minutes2").innerHTML='00';       // for full screen
    document.getElementById("clock-seconds2").innerHTML='00';
    
    /* reset lineup */
    setScreen();

        /* Full Screen */
        pic = document.getElementById('right-color-bar');
        pic.style.display="none";
        pic = document.getElementById('left-color-bar');
        pic.style.display="none";
        text = document.getElementById('team-name');
        text.style.display = "none"
        text = document.getElementById('team-name2');
        text.style.display = "none"
        text = document.getElementById('score-on-board-large');
        text.style.display = "none"
        text = document.getElementById('fullscreen-clock-container');
        text.style.display = "none"
        pic = document.getElementById('team-logo-on-board-centre');
        pic.style.display="none";
        pic = document.getElementById('team-logo-on-board-left');
        pic.style.display="none";
        pic = document.getElementById('team-logo-on-board-right');
        pic.style.display="none";
    
        /* Guest Team */     
        pic = document.getElementById('guest-card-bg');
        pic.style.display="none";
        pic = document.getElementById('guest-team-logo');
        pic.style.display="none";
        pic = document.getElementById('guest-small-logo-bw-card');
        pic.style.display="none";
        
        text = document.getElementById('guest-team-header');
        text.style.display = "none"
        text = document.getElementById('guest-team-some-text_1');
        text.style.display = "none"
        text = document.getElementById('guest-team-some-text_2');
        text.style.display = "none"
        text = document.getElementById('guest-team-some-text_3');
        text.style.display = "none"
    
        /* Home Team */     
        pic = document.getElementById('home-card-bg');
        pic.style.display="none";
        pic = document.getElementById('home-team-logo');
        pic.style.display="none";
        pic = document.getElementById('home-small-logo-bw-card');
        pic.style.display="none";
        
        text = document.getElementById('home-team-header');
        text.style.display = "none"
        text = document.getElementById('home-team-some-text_1');
        text.style.display = "none"
        text = document.getElementById('home-team-some-text_2');
        text.style.display = "none"
        text = document.getElementById('home-team-some-text_3');
        text.style.display = "none"
    
        /* for player */
        pic = document.getElementById('player-card-bg');
        pic.style.display="none";
        pic = document.getElementById('player-pic-info-group');
        pic.style.display="none";
        pic = document.getElementById('player-small-logo-bw-card');
        pic.style.display="none";
        
        text = document.getElementById('player-header');
        text.style.display = "none"
        text = document.getElementById('player-some-text_1');
        text.style.display = "none"
        
        /* Coach */    
        pic = document.getElementById('coach-card');
        pic.style.display="none";
        pic = document.getElementById('coach-pic-info-group');
        pic.style.display="none";
        
        text = document.getElementById('coach-header');
        text.style.display = "none"
        text = document.getElementById('coach-name');
        text.style.display = "none"
        text = document.getElementById('coach-small-logo-bw-card');
        text.style.display = "none"
        
        /* crew */
        pic = document.getElementById('crew-card');
        pic.style.display="none";
        
        text = document.getElementById('crew-header');
        text.style.display = "none"
        text = document.getElementById('crew-name');
        text.style.display = "none"
    
        clearInterval(disappearIntervalID);
    
        flagSmall = true;
        flagFullScreen = true;
        flagLineUp = true;
        flagHomeTeam = true;

        $('.btn-active-green').removeClass('btn-success').addClass('btn-primary');   
}

function resetPeriods()
{
    // Button Color toggle
    $('.btn-active-green').removeClass('btn-success').addClass('btn-primary');
    var pic = document.getElementById('pic-1st');
    pic.style.display="none";
    pic = document.getElementById('pic-2nd');
    pic.style.display="none";
    pic = document.getElementById('pic-3rd');
    pic.style.display="none";
    pic = document.getElementById('pic-4th');
    pic.style.display="none";
    pic = document.getElementById('pic-5th');
    pic.style.display="none";
}

// rset couny down
function resetCountdown()
{
    var Span = document.getElementById('countdown-container');
    Span.style.display = "none";
    clearInterval(counterIntervalID);
    flagCountDown = true;
    flagCountDownStart = false;
    document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><span>Start</span>';
}

// reset clock
function resetClock()
{
    clearInterval(clockIntervalID);
    flagClockStart = false;

    flagAdvertisement = true;
}

// Small    
function smallFun()
{
    
    if(!flagSmall)
    {
        resetInfo();
    }
    else if(flagSmall)
    {
        resetInfo();
       var pic = document.getElementById('small-bar-pic');
       pic.style.display = "block";
       pic = document.getElementById('small-left-color-bar');
       pic.style.display = "block";
       pic = document.getElementById('small-right-color-bar');
       pic.style.display = "block";
       pic = document.getElementById('small-bar-logo');
       pic.style.display = "block";
       var text = document.getElementById('small-bar-team-name-1');
       text.style.display = "block";
       text = document.getElementById('small-bar-team-name-2');
       text.style.display = "block";
       text = document.getElementById('score-on-board-small');
       text.style.display = "block";
       text = document.getElementById('clock-container');
       text.style.display = "block";
       
        $('#small-btn').removeClass('btn-primary').addClass('btn-success');
        flagSmall = false;
    }
}

// screen
function setScreen()
{
    var pic = document.getElementById('screen-img');
    pic.src="../images/run-game-info/run-game-info-board.PNG";
    pic.style.display="block";
}

// line up
function lineUp()
{
    
    var pic = document.getElementById('screen-img');
    if (flagLineUp)
    {
        resetInfo();
        
        pic.src="../images/run-game-info/field.PNG";
        pic.style.display="block";
        
        $('#lineup').removeClass('btn-primary').addClass('btn-success');
        flagLineUp = false;
    } 
    else if (!flagLineUp)
    {
        resetInfo();
        pic.src="../images/run-game-info/run-game-info-board.PNG";
        pic.style.display = "block";
        $('#lineup').removeClass('btn-success').addClass('btn-primary');
    }
}

// home team
function homeTeamFun()
{
    
    var pic = document.getElementById('screen-img');
    if (flagHomeTeam)
    {
        resetInfo();
        
        pic.src="../images/run-game-info/green bg.PNG";
        pic.style.display="block";
        
        $('#home-team-btn').removeClass('btn-primary').addClass('btn-success');
        flagHomeTeam = false;
    } 
    else if (!flagHomeTeam)
    {
        resetInfo();
        pic.src="../images/run-game-info/run-game-info-board.PNG";
        pic.style.display = "block";
        $('#home-team-btn').removeClass('btn-success').addClass('btn-primary');
    }
}

// guest team
function guestTeamFun()
{
    resetInfo();
    var pic = document.getElementById('screen-img');
    
        pic.src="../images/run-game-info/green bg.PNG";
        
        pic = document.getElementById('guest-card-bg');
        pic.style.display="block";
        pic = document.getElementById('guest-team-logo');
        pic.style.display="block";
        pic = document.getElementById('guest-small-logo-bw-card');
        pic.style.display="block";
        
        var text = document.getElementById('guest-team-header');
        text.style.display = "block"
        text = document.getElementById('guest-team-some-text_1');
        text.style.display = "block"
        text = document.getElementById('guest-team-some-text_2');
        text.style.display = "block"
        text = document.getElementById('guest-team-some-text_3');
        text.style.display = "block"
        
        $('#guest-team-btn').removeClass('btn-primary').addClass('btn-success');

        disappearTime(5);
}

// coach
function coachFun()
{
       resetInfo();
    var pic = document.getElementById('coach-card');
    pic.style.display="block";
    pic = document.getElementById('coach-pic-info-group');
    pic.style.display="block";
    
    var text = document.getElementById('coach-header');
    text.style.display = "block"
    text = document.getElementById('coach-name');
    text.style.display = "block"
    text = document.getElementById('coach-small-logo-bw-card');
    text.style.display = "block"
    $('#coach-btn').removeClass('btn-primary').addClass('btn-success');

    disappearTime(5);
}

// home team
function homeTeamFun()
{
    resetInfo();
    var pic = document.getElementById('screen-img');
    
        pic.src="../images/run-game-info/green bg.PNG";
        
        pic = document.getElementById('home-card-bg');
        pic.style.display="block";
        pic = document.getElementById('home-team-logo');
        pic.style.display="block";
        pic = document.getElementById('home-small-logo-bw-card');
        pic.style.display="block";
        
        var text = document.getElementById('home-team-header');
        text.style.display = "block"
        text = document.getElementById('home-team-some-text_1');
        text.style.display = "block"
        text = document.getElementById('home-team-some-text_2');
        text.style.display = "block"
        text = document.getElementById('home-team-some-text_3');
        text.style.display = "block"
        
        $('#home-team-btn').removeClass('btn-primary').addClass('btn-success');

        disappearTime(5);
}

// player team
function playerFun()
{
       resetInfo();
        var pic = document.getElementById('player-card-bg');
        pic.style.display="block";
        pic = document.getElementById('player-pic-info-group');
        pic.style.display="block";
        pic = document.getElementById('player-small-logo-bw-card');
        pic.style.display="block";
        
        var text = document.getElementById('player-header');
        text.style.display = "block"
        text = document.getElementById('player-some-text_1');
        text.style.display = "block"
        
        $('#player-btn').removeClass('btn-primary').addClass('btn-success');

        disappearTime(5);
}

/* crew */

function crewFun()
{
       resetInfo();
        var pic = document.getElementById('crew-card');
        pic.style.display="block";
        
        var text = document.getElementById('crew-header');
        text.style.display = "block"
        text = document.getElementById('crew-name');
        text.style.display = "block"
        
        $('#crew-btn').removeClass('btn-primary').addClass('btn-success');

        disappearTime(5);
}


// Highlights (Home) 
function highlightHomeFun()
{
        resetHighlightsHome();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('home-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('home-highlight-text');
        text.style.display = "block"
        text = document.getElementById('home-team-name');
        text.style.display = "block"
        $('#highlight-home-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function cornerHomeFun()
{
        resetHighlightsHome();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('home-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('home-corner-text');
        text.style.display = "block"
        text = document.getElementById('home-team-name');
        text.style.display = "block"
        $('#corner-home-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function cornerOffsideHomeFun()
{
        resetHighlightsHome();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('home-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('home-offside-text');
        text.style.display = "block"
        text = document.getElementById('home-team-name');
        text.style.display = "block"
        $('#offside-home-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function free_kickHomeFun()
{
        resetHighlightsHome();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('home-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('home-free_kick-text');
        text.style.display = "block"
        text = document.getElementById('home-team-name');
        text.style.display = "block"
        $('#free_kick-home-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function penaltyHomeFun()
{
        resetHighlightsHome();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('home-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('home-penalty-text');
        text.style.display = "block"
        text = document.getElementById('home-team-name');
        text.style.display = "block"
        $('#penalty-home-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function resetHighlightsHome()
{
        var pic = document.getElementById('black-bar');
        pic.style.display="none";
        pic = document.getElementById('home-highlights-logo');
        pic.style.display="none";
        
        var text = document.getElementById('home-highlight-text');
        text.style.display = "none";
        text = document.getElementById('home-team-name');
        text.style.display = "none";
        text = document.getElementById('home-corner-text');
        text.style.display = "none";
        text = document.getElementById('home-offside-text');
        text.style.display = "none";
        text = document.getElementById('home-free_kick-text');
        text.style.display = "none";
        text = document.getElementById('home-penalty-text');
        text.style.display = "none";

        $('#highlight-home-btn').removeClass('btn-success').addClass('btn-primary');
        $('#corner-home-btn').removeClass('btn-success').addClass('btn-primary');
        $('#offside-home-btn').removeClass('btn-success').addClass('btn-primary');
        $('#free_kick-home-btn').removeClass('btn-success').addClass('btn-primary');
        $('#penalty-home-btn').removeClass('btn-success').addClass('btn-primary');

        clearInterval(disappearIntervalID);
}

// Highlights (Guest) 
function highlightGuestFun()
{
        resetHighlightsGuest();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('guest-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('guest-highlight-text');
        text.style.display = "block"
        text = document.getElementById('guest-team-name');
        text.style.display = "block"
        $('#highlight-guest-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function cornerGuestFun()
{
        resetHighlightsGuest();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('guest-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('guest-corner-text');
        text.style.display = "block"
        text = document.getElementById('guest-team-name');
        text.style.display = "block"
        $('#corner-guest-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function cornerOffsideGuestFun()
{
        resetHighlightsGuest();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('guest-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('guest-offside-text');
        text.style.display = "block"
        text = document.getElementById('guest-team-name');
        text.style.display = "block"
        $('#offside-guest-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function free_kickGuestFun()
{
        resetHighlightsGuest();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('guest-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('guest-free_kick-text');
        text.style.display = "block"
        text = document.getElementById('guest-team-name');
        text.style.display = "block"
        $('#free_kick-guest-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function penaltyGuestFun()
{
        resetHighlightsGuest();
        var pic = document.getElementById('black-bar');
        pic.style.display="block";
        var pic = document.getElementById('guest-highlights-logo');
        pic.style.display="block";
        
        var text = document.getElementById('guest-penalty-text');
        text.style.display = "block"
        text = document.getElementById('guest-team-name');
        text.style.display = "block"
        $('#penalty-guest-btn').removeClass('btn-primary').addClass('btn-success');
        disappearTime(5);
}

function resetHighlightsGuest()
{
    var pic = document.getElementById('black-bar');
    pic.style.display="none";
    pic = document.getElementById('guest-highlights-logo');
    pic.style.display="none";
    
    var text = document.getElementById('guest-highlight-text');
    text.style.display = "none";
    text = document.getElementById('guest-team-name');
    text.style.display = "none";
    text = document.getElementById('guest-corner-text');
    text.style.display = "none";
    text = document.getElementById('guest-offside-text');
    text.style.display = "none";
    text = document.getElementById('guest-free_kick-text');
    text.style.display = "none";
    text = document.getElementById('guest-penalty-text');
    text.style.display = "none";
    
    $('#highlight-guest-btn').removeClass('btn-success').addClass('btn-primary');
    $('#corner-guest-btn').removeClass('btn-success').addClass('btn-primary');
    $('#offside-guest-btn').removeClass('btn-success').addClass('btn-primary');
    $('#free_kick-guest-btn').removeClass('btn-success').addClass('btn-primary');
    $('#penalty-guest-btn').removeClass('btn-success').addClass('btn-primary');

        clearInterval(disappearIntervalID);
}


///
function updateScoreOnScreen()
{
    var value = document.getElementById("first-count-value").value; //get name from TextBox
    value = value + " : " + document.getElementById("second-count-value").value; //get name from TextBox
    document.getElementById("score-on-board-large").innerHTML=value;
    document.getElementById("score-on-board-small").innerHTML=value;
    document.getElementById("stats-goal").innerHTML=value;
    document.getElementById("full-stats-goal").innerHTML=value;
}


// fullscreen
function changeFullscreen()
{
    if (flagFullScreen)
    {
        resetInfo();
        var pic = document.getElementById('right-color-bar');
        pic.style.display="block";
        pic = document.getElementById('left-color-bar');
        pic.style.display="block";

        var value = document.getElementById("first-count-value").value; //get name from TextBox
        value = value + " : " + document.getElementById("second-count-value").value; //get name from TextBox
        document.getElementById("score-on-board-large").innerHTML=value ;  

        var text = document.getElementById('team-name');
        text.style.display = "block"
        text = document.getElementById('team-name2');
        text.style.display = "block"
        text = document.getElementById('score-on-board-large');
        text.style.display = "block"
        text = document.getElementById('fullscreen-clock-container');
        text.style.display = "block"
        
        pic = document.getElementById('team-logo-on-board-centre');
        pic.style.display="block";
        pic = document.getElementById('team-logo-on-board-left');
        pic.style.display="block";
        pic = document.getElementById('team-logo-on-board-right');
        pic.style.display="block";

        var pic = document.getElementById('screen-img');
        pic.src="../images/run-game-info/black.PNG";
        pic.style.display = "block";
        
        $('#fullscreen').removeClass('btn-primary').addClass('btn-success');
        flagFullScreen = false;
    }
    else 
    {
        $('#fullscreen').removeClass('btn-success').addClass('btn-primary');
        resetInfo();
    }
}

// pic-1st
function changeImg1st()
{
    var pic = document.getElementById('pic-1st');
    
    if (pic.style.display === "")
    {
        resetPeriods();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        
        $('#1st-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetPeriods();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        $('#1st-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#1st-btn').removeClass('btn-success').addClass('btn-primary');
        resetPeriods();
    }
}

// pic-2nd
function changeImg2nd()
{
    var pic = document.getElementById('pic-2nd');
    
    if (pic.style.display === "")
    {
        resetPeriods();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        
        $('#2nd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetPeriods();
        pic.src="../images/run-game-info/2nd.PNG";
        pic.style.display = "block";
        $('#2nd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#2nd-btn').removeClass('btn-success').addClass('btn-primary');
        resetPeriods();
    }
}

// pic-3rd
function changeImg3rd()
{
    var pic = document.getElementById('pic-3rd');
    
    if (pic.style.display === "")
    {
        resetPeriods();
        pic.src="../images/run-game-info/3rd.PNG";
        pic.style.display = "block";
        
        $('#3rd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetPeriods();
        pic.src="../images/run-game-info/3rd.PNG";
        pic.style.display = "block";
        $('#3rd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#3rd-btn').removeClass('btn-success').addClass('btn-primary');
        resetPeriods();
    }
}

// pic-4th
function changeImg4th()
{
    var pic = document.getElementById('pic-4th');
    
    if (pic.style.display === "")
    {
        resetPeriods();
        pic.src="../images/run-game-info/4th.PNG";
        pic.style.display = "block";
        
        $('#4th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetPeriods();
        pic.src="../images/run-game-info/4th.PNG";
        pic.style.display = "block";
        $('#4th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#4th-btn').removeClass('btn-success').addClass('btn-primary');
        resetPeriods();
    }
}

// pic-5th
function changeImg5th()
{
    var pic = document.getElementById('pic-5th');
    
    if (pic.style.display === "")
    {
        resetPeriods();
        pic.src="../images/run-game-info/5th.PNG";
        pic.style.display = "block";
        
        $('#5th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetPeriods();
        pic.src="../images/run-game-info/5th.PNG";
        pic.style.display = "block";
        $('#5th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#5th-btn').removeClass('btn-success').addClass('btn-primary');
        resetPeriods();
    }
}

function statsFun()
{
    if(flagStats)
    {
        resetFullStatsFun();
        var pic = document.getElementById('screen-img');
            pic.src="../images/run-game-info/black.PNG";
            pic.style.display="block";
         pic = document.getElementById('stats-card-bg');
         pic.style.display="block";
         pic = document.getElementById('stats-team-logo-1');
         pic.style.display="block";
         pic = document.getElementById('stats-team-logo-2');
         pic.style.display="block";
         pic = document.getElementById('stats-team-logo-1');
         pic.style.display="block";
         pic = document.getElementById('stats-team-logo-2');
         pic.style.display="block";
         pic = document.getElementById('stats-small-logo-bw-card');
         pic.style.display="block";
         
         var text = document.getElementById('stats-header');
         text.style.display = "block";
         text = document.getElementById('stats-team-name-1');
         text.style.display = "block";
         text = document.getElementById('stats-team-name-2');
         text.style.display = "block";
         text = document.getElementById('stats-team-name-1');
         text.style.display = "block";
         text = document.getElementById('stats-goal');
         text.style.display = "block";
         text = document.getElementById('stats-team-text-1');
         text.style.display = "block";
         text = document.getElementById('stats-team-text-2');
         text.style.display = "block";
         
         $('#stats-btn').removeClass('btn-primary').addClass('btn-success');
         flagStats = false;
    }
    else if(!flagStats)
    {
        flagStats = true;
        resetStats();
    }
}

function resetStats()
{
    setScreen();
    
    $('#stats-btn').removeClass('btn-success').addClass('btn-primary');

    var pic = document.getElementById('stats-card-bg');
    pic.style.display="none";
    pic = document.getElementById('stats-team-logo-1');
    pic.style.display="none";
    pic = document.getElementById('stats-team-logo-2');
    pic.style.display="none";
    pic = document.getElementById('stats-team-logo-1');
    pic.style.display="none";
    pic = document.getElementById('stats-team-logo-2');
    pic.style.display="none";
    pic = document.getElementById('stats-small-logo-bw-card');
    pic.style.display="none";
    
    var text = document.getElementById('stats-header');
    text.style.display = "none";
    text = document.getElementById('stats-team-name-1');
    text.style.display = "none";
    text = document.getElementById('stats-team-name-2');
    text.style.display = "none";
    text = document.getElementById('stats-team-name-1');
    text.style.display = "none";
    text = document.getElementById('stats-goal');
    text.style.display = "none";
    text = document.getElementById('stats-team-text-1');
    text.style.display = "none";
    text = document.getElementById('stats-team-text-2');
    text.style.display = "none";
    flagStats = true;
}

function fullStatsFun()
{
    if(flagFullStats)
    {
        resetStats();
        var pic = document.getElementById('screen-img');
            pic.src="../images/run-game-info/black.PNG";
            pic.style.display="block";
         pic = document.getElementById('full-stats-team-logo-1');
         pic.style.display="block";
         pic = document.getElementById('full-stats-team-logo-2');
         pic.style.display="block";
         pic = document.getElementById('full-stats-left-color-bar');
         pic.style.display="block";
         pic = document.getElementById('full-stats-right-color-bar');
         pic.style.display="block";
         
         var text = document.getElementById('full-stats-team-name-1');
         text.style.display = "block";
         text = document.getElementById('full-stats-team-name-2');
         text.style.display = "block";
         text = document.getElementById('full-stats-goal');
         text.style.display = "block";
         text = document.getElementById('full-stats-team-text-1');
         text.style.display = "block";
         text = document.getElementById('full-stats-team-text-2');
         text.style.display = "block";
         
         $('#full-stats-btn').removeClass('btn-primary').addClass('btn-success');
         flagFullStats = false;
    }
    else if(!flagFullStats)
    {
        flagFullStats = true;
        resetFullStatsFun();
    }
}

function resetFullStatsFun()
{
    setScreen();
    
    $('#full-stats-btn').removeClass('btn-success').addClass('btn-primary');

    var pic = document.getElementById('full-stats-team-logo-1');
    pic.style.display="none";
    pic = document.getElementById('full-stats-team-logo-2');
    pic.style.display="none";
    pic = document.getElementById('full-stats-left-color-bar');
    pic.style.display="none";
    pic = document.getElementById('full-stats-right-color-bar');
    pic.style.display="none";
    
    var text = document.getElementById('full-stats-team-name-1');
    text.style.display = "none";
    text = document.getElementById('full-stats-team-name-2');
    text.style.display = "none";
    text = document.getElementById('full-stats-goal');
    text.style.display = "none";
    text = document.getElementById('full-stats-team-text-1');
    text.style.display = "none";
    text = document.getElementById('full-stats-team-text-2');
    text.style.display = "none";
    flagFullStats = true;
}

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

           // Minus and plus for team A Score and Clock + Countdown Minutes
           $('.btn-first-count-value').click(function(e)
           { 
               e.preventDefault();
               
               fieldName = $(this).attr('data-field-A');
               type      = $(this).attr('data-type');
               var input = $("input[name='"+fieldName+"']");
               var currentVal = parseInt(input.val());
               if (!isNaN(currentVal)) 
               {
                   if(type == 'minus') 
                   {
                       if(currentVal > input.attr('min')) {
                           input.val(currentVal - 1).change();
                       } 
                       if(parseInt(input.val()) == input.attr('min')) {
                           $(this).attr('disabled', true);
                       }
                   } 
                   else if(type == 'plus') 
                   {
                       if(currentVal < input.attr('max')) 
                       {
                           input.val(currentVal + 1).change();
                       }
                       if(parseInt(input.val()) == input.attr('max')) 
                       {
                           $(this).attr('disabled', true);
                       }
                   }
               } 
               else 
               {
                   input.val(0);
               }
           });
           $('.first-count-value').focusin(function()
           {
                $(this).data('oldValue', $(this).val());
           });
           $('.first-count-value').change(function() 
           {
               minValue =  parseInt($(this).attr('min'));
               maxValue =  parseInt($(this).attr('max'));
               valueCurrent = parseInt($(this).val());
               
               name = $(this).attr('name');
               if(valueCurrent >= minValue) 
               {
                   $(".btn-first-count-value[data-type='minus'][data-field-A='"+name+"']").removeAttr('disabled')
               } 
               else 
               {
                   alert('Sorry, the minimum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
               if(valueCurrent <= maxValue) 
               {
                   $(".btn-first-count-value[data-type='plus'][data-field-A='"+name+"']").removeAttr('disabled')
               } 
               else 
               {
                   alert('Sorry, the maximum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
           });
           $(".first-count-value").keydown(function (e) 
           {
                   // Allow: backspace, delete, tab, escape, enter and .
                   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                       // Allow: Ctrl+A
                       (e.keyCode == 65 && e.ctrlKey === true) || 
                       // Allow: home, end, left, right
                       (e.keyCode >= 35 && e.keyCode <= 39)) 
                    {
                        // let it happen, don't do anything
                        return;
                    }
                    // Ensure that it is a number and stop the keypress
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) 
                    {
                        e.preventDefault();
                    }
            });

               

           // Minus and plus for team B Score and Clock + Countdown Minutes
           $('.btn-second-count-value').click(function(e)
           {
               e.preventDefault();
               
               fieldName = $(this).attr('data-field-B');
               type      = $(this).attr('data-type');
               var input = $("input[name='"+fieldName+"']");

               var currentVal = parseInt(input.val());
               if (!isNaN(currentVal)) 
               {
                   if(type == 'minus') 
                   {
                       if(currentVal > input.attr('min')) 
                       {
                           input.val(currentVal - 1).change();
                       } 
                       if(parseInt(input.val()) == input.attr('min')) 
                       {
                           $(this).attr('disabled', true);
                       }
                   } 
                   else if(type == 'plus') 
                   {
                       if(currentVal < input.attr('max')) 
                       {
                           input.val(currentVal + 1).change();
                       }
                       if(parseInt(input.val()) == input.attr('max')) 
                       {
                           $(this).attr('disabled', true);
                       }
                   }
               } 
               else
               {
                   input.val(0);
               }
           });
           $('.second-count-value').focusin(function()
           {
                $(this).data('oldValue', $(this).val());
           });
           $('.second-count-value').change(function() 
           {    
               minValue =  parseInt($(this).attr('min'));
               maxValue =  parseInt($(this).attr('max'));
               valueCurrent = parseInt($(this).val());
               
               name = $(this).attr('name');
               if(valueCurrent >= minValue) {
                   $(".btn-second-count-value[data-type='minus'][data-field-B='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the minimum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
               if(valueCurrent <= maxValue) {
                   $(".btn-second-count-value[data-type='plus'][data-field-B='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the maximum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
           });

           $(".second-count-value").keydown(function (e) 
           {
               // Allow: backspace, delete, tab, escape, enter and .
               if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                   // Allow: Ctrl+A
                   (e.keyCode == 65 && e.ctrlKey === true) || 
                   // Allow: home, end, left, right
                   (e.keyCode >= 35 && e.keyCode <= 39)) 
                {
                    // let it happen, don't do anything
                    return;
               }
               // Ensure that it is a number and stop the keypress
               if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) 
               {
                   e.preventDefault();
               }
            });



// Clock of game
function clockFun(m, s)
{
    clock(m, s);
}

function clockStartFun()
{
    if(globalClockSec === undefined)
    {

    }
    if(flagClockStartNew)
    {
        clock(globalClockMin, globalClockSec);
    }
    else if(!flagClockStart) // counter is already running or user 1st time press start button without changing sec and minutes value
    {
        if(parseInt(globalClockMin) === 0 && parseInt(globalClockSec) === 0)
        {
            flagClockStart = false;
        }
        else
        {
            flagClockStart = true;
        }
        clearInterval(clockIntervalID);
        document.getElementById("clock-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><span>Start</span>';
    }
    else if(flagClockStart)    // user press stop during count down
    {
        document.getElementById("clock-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';
        clearInterval(clockIntervalID);
        
        clock(globalClockMin, globalClockSec);
        flagClockStart = false;
    }
}

function clock(m, s)
{
    clearInterval(clockIntervalID);
    document.getElementById("clock-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';
    
    // if count down is started, user can't manually increment/decrement minutes or 
    // seconds of count down
    if(globalClockMin == 0 && globalClockSec == 0 || flagClockStartNew)
    {
        $('#clock-minutes-minus').prop('disabled',true);
        $('#clock-minutes-plus').prop('disabled',true);
        $('#clock-seconds-minus').prop('disabled',true);
        $('#clock-seconds-plus').prop('disabled',true);
    }
    
        // converts all to seconds
        let totalSecondsGiven = m * 60 + s;
        let totalSeconds;
        if(!flagClockStart) // if user start clock but not press start button or increment 
        // mins and secs by button and press start
        {
            totalSeconds = 0;
            globalTotalSeconds = totalSecondsGiven; // 1st time save total given seconds
        }
        else if(flagClockStart) // in any other case, if user press start button
        {
            totalSeconds = m * 60 + s;
            totalSecondsGiven = globalTotalSeconds;
        }
        if(flagClockStartNew)
        {
            flagClockStart = false;
            flagClockStartNew = false;
        }
            
        //temporary seconds holder
        let tempSeconds = totalSeconds;
    
        // calculates number of minutes and seconds from a given number of seconds
        const convertClock = (value, inSeconds) => {
            if (value > inSeconds) 
            {
                let x = value % inSeconds;
                tempSeconds = x;    // like if we have 66s, then x = 6
                return Math.trunc((value) / inSeconds);    // like if we have 66s, then return 1
            } 
            else 
            {
                return 0;
            }
        };
    
        //sets seconds
        const setClockSeconds = (s) => {
            globalClockSec = s
            if(s<10)
            {
                s='0'+s;
            }
            document.querySelector("#clock-seconds").textContent = s;
            document.querySelector("#clock-seconds2").textContent = s;
            $("#clock-seconds-dynamic").val(s);
        };
    
        //sets minutes
        const setClockMinutes = (m) => {
            globalClockMin = m;
            if(m<10)
            {
                m='0'+m;
            }
            document.querySelector("#clock-minutes").textContent = m;
            document.querySelector("#clock-minutes2").textContent = m;
            $("#clock-minutes-dynamic").val(m);
        };
    
        // Update the count down every 1 second
        clockIntervalID = setInterval(() => {
            //clears countdown when all seconds are counted
            if (totalSecondsGiven === totalSeconds) {
                flagClockStart = false;        
                $('#clock-minutes-minus').prop('disabled',false);
                $('#clock-minutes-plus').prop('disabled',false);
                $('#clock-seconds-minus').prop('disabled',false);
                $('#clock-seconds-plus').prop('disabled',false);
                clearInterval(clockIntervalID);
            }
            setClockMinutes(convertClock(totalSeconds, 60));
            setClockSeconds(tempSeconds == 60 ? 59 : tempSeconds);
            totalSeconds++;
            tempSeconds = totalSeconds;
        }, 1000);
}


//// Count Down ////

function countdownStartFun()
{
//    resetPeriods();
    if(globalCoundownSec === undefined)
    {

    }
    else if(!flagCountDownStart) // counter is already running or user 1st time press start button without changing sec and minutes value
    {
        if(globalCoundownMin === 0 && globalCoundownSec === 0)
            flagCountDownStart = false;
        else
            flagCountDownStart = true;
        clearInterval(counterIntervalID);
        document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><span>Start</span>';
    }
    else if(flagCountDownStart)    // user press stop during count down
    {   
        $('#countdown-btn').removeClass('btn-primary').addClass('btn-success');
        flagCountDown = false;

        document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';
        clearInterval(counterIntervalID);
        
        document.getElementById("countdown-container").style.display="block";
        
        intervalExecutin(globalCoundownMin, globalCoundownSec);
            flagCountDownStart = false;
    }
}

function countdownFun()
{
    var container = document.getElementById('countdown-container');

    if (flagCountDown)  // first time countdown btn pressed
    {   
        resetCountdown();
        
        container.style.display="block";
        
        $('#countdown-btn').removeClass('btn-primary').addClass('btn-success');
        flagCountDown = false;
        document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';

        intervalExecutin(15, 00);
    } 
    else if (!flagCountDown)  // second time countdown btn pressed
    {
        // if count down is finished, now user can manually increment/decrement minutes or 
        // seconds of count down
        $('#count-minutes-minus').prop('disabled',false);
        $('#count-minutes-plus').prop('disabled',false);
        $('#count-seconds-minus').prop('disabled',false);
        $('#count-seconds-plus').prop('disabled',false);

        // if count down end, then reset values    
        globalCoundownMin = 0;
        globalCoundownSec = 0;
        $("#minutes-dynamic").val('000');
        $("#seconds-dynamic").val('00');

        resetCountdown();
        clearInterval(counterIntervalID);
        
        container.style.display = "none";
        $('#countdown-btn').removeClass('btn-success').addClass('btn-primary');
    }
}

function countdownFun2(m, s)
{
    var container = document.getElementById('countdown-container');

        ////resetFun();
        flagCountDown = false;
        
        clearInterval(counterIntervalID);

        document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';

        container.style.display="block";
        
        $('#countdown-btn').removeClass('btn-primary').addClass('btn-success');

        document.getElementById("countdown-start-btn").innerHTML='<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/></svg><span>Stop</span>';

        intervalExecutin(m, s);
}

function intervalExecutin(m, s)
{
    //resetInfo();
    let minutes = m; // starting number of minutes
    let seconds = s; // starting number of seconds

    // if count down is started, user can't manually increment/decrement minutes or 
    // seconds of count down
    $('#count-minutes-minus').prop('disabled',true);
    $('#count-minutes-plus').prop('disabled',true);
    $('#count-seconds-minus').prop('disabled',true);
    $('#count-seconds-plus').prop('disabled',true);
    
        // converts all to seconds
        let totalSeconds = minutes * 60 + seconds;
        alert('s = ' + seconds);
        alert('T = ' + totalSeconds);
        //temporary seconds holder
        let tempSeconds = totalSeconds;
    
        // calculates number of minutes and seconds from a given number of seconds
        const convert = (value, inSeconds) => {
            if (value > inSeconds) 
            {
                let x = value % inSeconds;
                tempSeconds = x;    // like if we have 66s, then x = 6
                return (value - x) / inSeconds;    // like if we have 66s, then return 1
            } 
            else 
            {
                return 0;
            }
        };
    
        //sets seconds
        const setSeconds = (s) => { 
            globalCoundownSec = s
            if(s<10)
            {
                s='0'+s;
            }
            document.querySelector("#seconds").textContent = s;
            $("#seconds-dynamic").val(s);
        };
    
        //sets minutes
        const setMinutes = (m) => {
            globalCoundownMin = m
            if(m<10)
            {
                m='0'+m;
            }
            document.querySelector("#minutes").textContent = m;
            $("#minutes-dynamic").val(m);
        };
    
        // Update the count down every 1 second
        counterIntervalID = setInterval(() => {
            //clears countdown when all seconds are counted
            if (totalSeconds <= 0) {                
                $('#count-minutes-minus').prop('disabled',false);
                $('#count-minutes-plus').prop('disabled',false);
                $('#count-seconds-minus').prop('disabled',false);
                $('#count-seconds-plus').prop('disabled',false);
                clearInterval(counterIntervalID);
            }
            setMinutes(convert(tempSeconds, 60));
            setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
            totalSeconds--;
            tempSeconds = totalSeconds;
        }, 1000);
}

// Pics will disappear after secific time


function disappearTime(s)
{    
        let totalSeconds = s;
    
        //temporary seconds holder
        let tempSeconds = totalSeconds;
    
        // Update the count down every 1 second
        disappearIntervalID = setInterval(() => {
            //clears countdown when all seconds are counted
            if (totalSeconds <= 0) 
            {
                resetInfo();
                
                $('#guest-team-btn').removeClass('btn-success').addClass('btn-primary');
                $('#home-team-btn').removeClass('btn-success').addClass('btn-primary');
                $('#player-btn').removeClass('btn-success').addClass('btn-primary');
                $('#crew-btn').removeClass('btn-success').addClass('btn-primary');
                $('#coach-btn').removeClass('btn-success').addClass('btn-primary');
                
                // highlights group
                resetHighlightsHome();
                $('#highlight-home-btn').removeClass('btn-success').addClass('btn-primary');
                $('#corner-home-btn').removeClass('btn-success').addClass('btn-primary');
                $('#offside-home-btn').removeClass('btn-success').addClass('btn-primary');
                $('#free_kick-home-btn').removeClass('btn-success').addClass('btn-primary');
                $('#penalty-home-btn').removeClass('btn-success').addClass('btn-primary');

                $('#highlight-guest-btn').removeClass('btn-success').addClass('btn-primary');
                $('#corner-guest-btn').removeClass('btn-success').addClass('btn-primary');
                $('#offside-guest-btn').removeClass('btn-success').addClass('btn-primary');
                $('#free_kick-guest-btn').removeClass('btn-success').addClass('btn-primary');
                $('#penalty-guest-btn').removeClass('btn-success').addClass('btn-primary');                
                resetHighlightsGuest();

                clearInterval(disappearIntervalID);
            }
            tempSeconds == 60 ? 59 : tempSeconds;
            totalSeconds--;
            tempSeconds = totalSeconds;
        }, 1000);
}

// advertisement
function advertisementFun()
{    
    var pic = document.getElementById('screen-img');
    if (flagAdvertisement)
    {
        resetFun();
        
        pic.src="../images/run-game-info/advertisement.PNG";
        pic.style.display="block";
        
        $('#advertisement').removeClass('btn-primary').addClass('btn-success');
        flagAdvertisement = false;
    } 
    else if (!flagAdvertisement)
    {
        resetFun();
        pic.src="../images/run-game-info/run-game-info-board.PNG";
        pic.style.display = "block";
        $('#advertisement').removeClass('btn-success').addClass('btn-primary');
    }
}
