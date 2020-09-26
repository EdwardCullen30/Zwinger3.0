import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Dashboard/Components/Header";
import SideMenu from "./Dashboard/Components/SideMenu";
import MainContainer from "./Dashboard/Components/MainContainer";
import '../css/dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <SideMenu />
            <MainContainer />
        </div>
)
}

ReactDOM.render(<Dashboard />, document.getElementById('app'));

// let petItem = document.getElementsByClassName('expand');
// let i;
//
// for (i = 0; i < petItem.length; i++) {
//     petItem[i].addEventListener("click", function () {
//         console.log(this.style)
//         this.style.transform = "rotate(0deg)"
//         let content = this.nextElementSibling;
//         if (content.style.maxHeight){
//             content.style.maxHeight = null;
//             content.style.padding = "0px"
//         } else {
//             this.style.transform = "rotate(-90deg)"
//             content.style.maxHeight = (content.scrollHeight + 100).toString();
//             content.style.padding = "15px"
//         }
//     })
// }
//
// const showAddPet = () => {
//     document.getElementById('addPetWrap').style.display = "flex";
// }
//
// const hideAddPet = () => {
//     document.getElementById('addPetWrap').style.display = "none";
// }
//
// let loadFile = function(event) {
//     let output = document.getElementById('output');
//     let reviewOutput = document.getElementById('reviewOutput');
//     output.src = URL.createObjectURL(event.target.files[0]);
//     reviewOutput.src = URL.createObjectURL(event.target.files[0]);
//     output.onload = function() {
//         URL.revokeObjectURL(output.src) // free memory
//     }
//     reviewOutput.onload = function() {
//         URL.revokeObjectURL(reviewOutput.src) // free memory
//     }
// };
//
// let currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab
//
// function showTab(n) {
//     let x = document.getElementsByClassName('formPage')
//     for(let i =0 ; i<x.length; i++){
//         x[i].style.display = "none";
//         if(i === n){
//             x[i].style.display = "block";
//         }
//     }
//     if(n===0){
//         document.getElementById('prevBtn').style.display = "none";
//     }
//     else {
//         document.getElementById('prevBtn').style.display = "";
//     }
//     if(n===x.length - 1){
//         document.getElementById('nextBtn').innerHTML = "Submit";
//     }
//     else {
//         document.getElementById('nextBtn').innerHTML = "Next";
//     }
//     if (n=== x.length){
//         document.getElementById('nextBtn').type = "submit";
//         hideAddPet();
//     }
//     else {
//
//         document.getElementById('nextBtn').type = "button";
//     }
// }
//
// function nextPrev(x) {
//     if(x === 1){
//         currentTab++;
//         showTab(currentTab)
//     }
//     if(x === -1){
//         currentTab--;
//         showTab(currentTab)
//     }
// }