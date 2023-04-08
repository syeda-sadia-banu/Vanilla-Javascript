const containerEl=document.querySelector(".container");
const seatEl=document.querySelectorAll(".row .seat:not(.occupied)");
const countEl=document.querySelector(".count");
const totalEl=document.querySelector(".total");
const selectMovieEl=document.getElementById("movie")
let ticketPrice= + selectMovieEl.value;
//console.log(ticketPrice);

function updateSelectCount(){
    const selectedSeats=document.querySelectorAll(".row .seat.selected");
   // console.log(selectedSeats);

    const seatsIndex=[...selectedSeats].map(function(seat){
        return [...seatEl].indexOf(seat);
    });
   // console.log(seatsIndex)
   localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));

    const selectdSeatCount=selectedSeats.length;
    countEl.innerText=selectdSeatCount;
    totalEl.innerText=selectdSeatCount*ticketPrice;
}

//movie select event
selectMovieEl.addEventListener("change",e=>{
    ticketPrice=+e.target.value;
    updateSelectCount();
})



//seat click event
containerEl.addEventListener("click",e=>{
    if(e.target.classList.contains("seat")&& ! e.target.classList.contains("occupied")){
       // console.log(e.target)
        e.target.classList.toggle("selected")
    }
    updateSelectCount();
});