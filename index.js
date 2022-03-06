const container = document.querySelector(".data-container");

// function to generate bars
async function generatebars(num = 20) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 4;
	
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("block");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("block_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 50) {
let bars = document.querySelectorAll(".block");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}



// function to generate new random array


// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}

function disable2()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
}

function disable3()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button4").disabled = true;
document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}

function disable4()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button5").disabled = true;
document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
}

function enable(){
    // To disable the button "Generate New Array"
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To disable the button "Selection Sort"
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";

document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#6f459e";

document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";

document.getElementById("Button5").disabled = false;
document.getElementById("Button5").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();
  
// function to generate new random array 
 function generate()
{
window.location.reload();
}

// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}
  


// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
    enable();
}
async function InsertionSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
  

    for (var i = 1; i < blocks.length; i += 1) {
  

            var key= Number(blocks[i].childNodes[0].innerHTML);
            var j = i-1;

  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            while (j>=0 && Number(blocks[j].childNodes[0].innerHTML)>key) {
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j+1].style.backgroundColor = "#FF4949";
                await swap(blocks[j], blocks[j + 1]);
                blocks[j].style.backgroundColor = "#6b5b95";
                blocks[j+1].style.backgroundColor = "#6b5b95";
                j=j-1;
                blocks = document.querySelectorAll(".block");
            }
            blocks[j+1]=key;
            blocks = document.querySelectorAll(".block");

  
    }
    for(var i=0;i< blocks.length; i += 1){
        blocks[i].style.backgroundColor = "#13CE66";
        await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
    }
    enable();
}

async function lometo_partition(l, r, delay = 700) {
    var blocks = document.querySelectorAll(".block");
    // Storing the value of pivot element
    var pivot = 
    Number(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    blocks[r].style.backgroundColor = "red";
    
    for (var j = l; j <= r - 1; j++) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "yellow";
      // To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      var value = 
      Number(blocks[j].childNodes[0].innerHTML);
    
      // To compare value of two blocks
      if (value < pivot) {
        i++;

        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText =
        blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        blocks[i].style.backgroundColor = "orange";
        if (i != j) blocks[j].style.backgroundColor = "pink";
        //To wait for 700 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      } else blocks[j].style.backgroundColor = "pink";
    }
    // Swapping the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";
    
    // To wait for 2100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay * 3)
    );
    for (var k = 0; k < 20; k++) 
    blocks[k].style.backgroundColor = "#13CE66";
    return i;
  }
    
  // Asynchronous QuickSort function
  async function QuickSort(l=0, r=19, delay = 100) {
    if (l < r) {
      // Storing the index of pivot element after partition
      var pivot_idx = await lometo_partition(l, r);
      // Recursively calling quicksort for left partition
      await QuickSort(l, pivot_idx - 1);
      // Recursively calling quicksort for right partition
      await QuickSort(pivot_idx + 1, r);
    }
    enable();
  }