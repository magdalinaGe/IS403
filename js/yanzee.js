const background = document.querySelector('.background');
/* 
document.querySelector() method - which is a built-in method in JavaScript used to select and retrieve HTML elements
 from the web page's DOM. It takes a CSS selector as an argument.
 In this case, the selector is '.background', which is used to target elements with the CSS class "background."
 
 NOTE: We have .Background in the CSS file 

 const background = ...: The result of document.querySelector('.background') is assigned to a new JavaScript variable
  named background using the const keyword. 
 This variable now holds a reference to the HTML element with the class "background."
 */
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    background.style.background = `radial-gradient(at ${mouseX * 100}% ${mouseY * 100}%, #c16ba0, #90abd3,#ac9ba6`;
});
/*
document.addEventListener('mousemove', (e) => { ... });
 This line sets up an event listener on the document object. 
It listens for the "mousemove" event, which occurs when the user moves the mouse on the webpage. 
The function inside the parentheses is an event handler that runs when the "mousemove" event occurs.

The (e) parameter represents the event object, which contains information about the mouse movement,
 such as the mouse's current position.

 const mouseX = e.clientX / window.innerWidth;
  This line calculates the horizontal position of the mouse cursor
  relative to the width of the viewport. e.clientX is the X-coordinate of the mouse cursor within the viewport,
   and window.innerWidth is the width of the viewport. This calculation results in a value between 0 and 1, 
 indicating the relative position of the mouse from the left edge of the viewport.

 background.style.background = ...: Here, you are setting the background style of the background element 
 (which you previously selected using document.querySelector('.background')).
  You are updating the background property with a radial gradient style.
  NOTE: so we already gave background in css file, but here we tell it to change depending on mouse location


*/
//Magda Imerlishvili
//Section 4 
function rollTheDie()
        {
           var output='';
            var NumberY=parseInt(document.getElementById("numberY").value);
            //array to keep track how many times dice was rolled 
            var keepTrack=[];
            //array to keep how many of each of the dice were rolled 
            var countDice=[0,0,0,0,0,0];

            //program should start if the number is more of equal to 1 and less or equal to sick like DICE 
            if(NumberY>=1 && NumberY<=6)
            {
                
              while (true)
              {
                var randNumber=Math.floor(Math.random()*6)+1;  //generate random number from 1 to 6
                keepTrack.push(randNumber);
                /*
                too keep track of each number since arry starts with 0 but we dont have 0 in dice we need to say Ex.
                countDIce[5-1] will increase fifth element by 1 which by array rules is 4 but random number is 5 
                0,0,0,0,1,0

                */
                countDice[randNumber-1]++;

                //what happens if random number is our number
                if(randNumber==NumberY)
                {   
                
                    output='Total Number of Rolls for  '+NumberY+' - times: '+keepTrack.length; //.length tells how many times it was flipped 

                    var diceCountsText = "Dice Counts: <br>";
                        //for loop will output each number from the array to see how many of each number we got 
                        for (var i = 0; i < countDice.length; i++) 
                        {
                          diceCountsText += `Number ${i + 1} : ${countDice[i]} times<br>`;

                        
                        }
                        
                       

                        
                    seePicture(NumberY); // calls seePicture functions that outputs picture if we find our number 
                    break;//program stops 
                }
              }
                  
            }
            else 
            {   //if we enter number less of 1 or more than 6
                output='Error number should be between 1 and 6';
                seePicture(NumberY);
                

            }
            //output things on a p tag in html file 
            document.getElementById("output").textContent = output;
            document.getElementById("diceCounts").innerHTML =diceCountsText ;

            
        } 

          //Displaying Picture  Function
          function seePicture(NumberY)
            {
                var pictureDisplay=document.getElementById('pictureDisplay');
                if(NumberY>=1 && NumberY<=6)
                {
                    if (NumberY ==1)
                {
                pictureDisplay.innerHTML='<img src="assets/gamePics/dice1Use.jpg" alt="Dice 1">';
                }
                else if (NumberY==2)
                {
                    pictureDisplay.innerHTML='<img src="assets/gamePics/dice2Use.jpg" alt="Dice 2">';
                }
                else if (NumberY==3)
                {
                    pictureDisplay.innerHTML='<img src="assets/gamePics/dice3Use.jpg" alt="Dice 3">';
                }
                else if (NumberY==4)
                {
                    pictureDisplay.innerHTML='<img src="assets/gamePics/dice4Use.jpg" alt="Dice 4">';
                }
                else if (NumberY==5)
                {
                    pictureDisplay.innerHTML='<img src="assets/gamePics/dice5Use.jpg" alt="Dice 5">';
                }
                else if (NumberY==6)
                {
                    pictureDisplay.innerHTML='<img src="assets/gamePics/dice6Use.jpg" alt="Dice 6">';
                }
                }
                else 
                {
                    pictureDisplay.innerHTML='' // to make sure that nothing is posted when we cannot get our number 
                }

                
            }