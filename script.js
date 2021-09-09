const easy_ques = [ ["1", "", "6", "", "4", "", "9", "", ""], ["2", "", "", "", "8", "", "", "5", ""], ["5", "8", "", "", "2", "1", "6", "3", ""], ["", "3", "1", "", "5", "8", "", "", "6"], ["6", "5", "", "4", "", "", "", "", "8"], ["", "", "", "1", "3", "", "2", "", "5"], ["","", "7", "5", "", "3", "", "4", ""], ["4", "1", "8", "9", "", "", "5", "", ""], ["", "", "", "", "", "4", "7", "2", ""],
];
const easy_sol = [ ["1", "7", "6", "3", "4", "5", "9", "8", "2"], ["2", "4", "3", "6", "8", "9", "1", "5", "7"], ["5", "8", "9", "7", "2", "1", "6", "3", "4"], ["7", "3", "1", "2", "5", "8", "4", "9", "6"], ["6", "5", "2", "4", "9", "7", "3", "1", "8"], ["8", "9", "4", "1", "3", "6", "2", "7", "5"], ["9", "2", "7", "5", "6", "3", "8", "4", "1"], ["4", "1", "8", "9", "7", "2", "5", "6", "3"], ["3", "6", "5", "8", "1", "4", "7", "2", "9"],
];
const mid_ques = [ ["", "5", "", "", "", "", "4", "", ""], ["1", "6", "", "8", "", "", "7", "", "5"], ["4", "", "", "", "", "", "", "2", "6"], ["", "4", "9", "", "", "", "", "", ""], ["8", "", "5", "6", "", "", "", "", "1"], ["", "", "", "", "", "", "8", "7", ""], ["", "", "", "3", "9", "", "", "6", "4"], ["", "", "", "", "", "6", "", "1", ""], ["9", "", "", "", "2", "", "", "", ""],
];
const mid_sol = [ ["3", "5", "7", "1", "6", "2", "4", "9", "8"], ["1", "6", "2", "8", "4", "9", "7", "3", "5"], ["4", "9", "8", "7", "3", "5", "1", "2", "6"], ["7", "4", "9", "2", "1", "8", "6", "5", "3"], ["8", "2", "5", "6", "7", "3", "9", "4", "1"], ["6", "1", "3", "9", "5", "4", "8", "7", "2"], ["5", "8", "1", "3", "9", "7", "2", "6", "4"], ["2", "7", "4", "5", "8", "6", "3", "1", "9"], ["9", "3", "6", "4", "2", "1", "5", "8", "7"],
];
const hard_ques = [ ["8", "", "", "7", "3", "", "", "1", ""], ["", "", "5", "", "", "", "2", "", "6"], ["1", "4", "", "", "", "", "", "", ""], ["", "", "", "2", "", "7", "", "", ""], ["", "", "8", "9", "", "", "4", "", "3"], ["", "", "", "", "4", "", "", "", ""], ["", "", "6", "", "", "", "", "", ""], ["", "1", "", "4", "", "", "9", "", "8"], ["9", "7", "", "8", "", "", "", "6", ""],
];
const hard_sol = [ ["8", "6", "2", "7", "3", "9", "5", "1", "4"], ["3", "9", "5", "1", "8", "4", "2", "7", "6"], ["1", "4", "7", "6", "2", "5", "8", "3", "9"], ["4", "3", "9", "2", "5", "7", "6", "8", "1"], ["7", "2", "8", "9", "6", "1", "4", "5", "3"], ["6", "5", "1", "3", "4", "8", "7", "9", "2"], ["2", "8", "6", "5", "9", "3", "1", "4", "7"], ["5", "1", "3", "4", "7", "6", "9", "2", "8"], ["9", "7", "4", "8", "1", "2", "3", "6", "5"],
];
var full_data=[[]];
var diff_state = "";
const easy_btn = document.querySelector(".btn-1");
const med_btn = document.querySelector(".btn-2");
const hard_btn = document.querySelector(".btn-3");
const sol = document.querySelector("#solution");
const validateRows = () => {
  var flag = 0;
  for (let i = 1; i <= 9; i++) {
    var row_ar = [];
    for (let j = 1; j <= 9; j++) {
      var ipt1 = document.querySelector(`#r_${i} #d_${j} input`);
      var ipt = ipt1.value;
      ipt1.style.color = (ipt1.className == "disable") ? "#6B6F75" : "#000";
      if (ipt != "") {
        if (row_ar.indexOf(ipt) == -1) 
          row_ar.push(ipt);
         else {
          row_ar.push(ipt);
          flag = 1;
          var nmbr = document.querySelector(
            `#r_${i} #d_${row_ar.indexOf(ipt) + 1} input`
          );
          nmbr.style.color = "red";
          ipt1.style.color = "red";
        }
      } else  row_ar.push("");
      full_data[i-1]=row_ar;
    }
  }
  if(diff_state=='easy')
  localStorage.setItem('easy',JSON.stringify(full_data));
  else if(diff_state=='mid')
  localStorage.setItem('mid',JSON.stringify(full_data));
  else
  localStorage.setItem('hard',JSON.stringify(full_data));
  console.log("validateRow => ",flag);

  if (flag==1) return false;
  console.log('row = > ',true);
  return true;
};
const validateColumn = () => {
    var flag = 0;
    for (let i = 1; i <= 9; i++) {
      var row_ar = [];
      for (let j = 1; j <= 9; j++) {
        var ipt1 = document.querySelector(`#r_${j} #d_${i} input`);
        var ipt = ipt1.value;
        if (ipt != "") {
          if (row_ar.indexOf(ipt) == -1) 
            row_ar.push(ipt);
           else {
            flag = 1;
            var nmbr = document.querySelector(
              `#r_${row_ar.indexOf(ipt) + 1} #d_${i} input`
            );
            row_ar.push(ipt);
            nmbr.style.color = "red";
            ipt1.style.color = "red";
          }
        } else  row_ar.push("0");
        
      }
    }
    
    if (flag==1) return false;
    console.log('column = > ',true);
    return true;
};
const checkdata = (a,b)=>{
  var c=0;
  for(var i=a;i<a+3;i++){
    for(var j=b;j<b+3;j++){
  for(var i1=a;i1<a+3;i1++){
    for(var j1=b;j1<b+3;j1++){
      if(full_data[i][j]==full_data[i1][j1]&&(i!=i1&&j!=j1)&&full_data[i1][j1]!==""){
        var ipt1 = document.querySelector(`#r_${i+1} #d_${j+1} input`);
        ipt1.style.color='red';
        ipt1 = document.querySelector(`#r_${i1+1} #d_${j1+1} input`);
        ipt1.style.color='red';
        c++;}}}}}

  if(c!=0)  return false;
  return true;
}
const validateBlocks = () => {
 var c1= checkdata(0,0);
 var c2=checkdata(0,3);
 var c3=checkdata(0,6);
 var c4= checkdata(3,0);
 var c5= checkdata(3,3);
 var c6= checkdata(3,6);
 var c7=checkdata(6,0);
 var c8=checkdata(6,3);
 var c9= checkdata(6,6);
  if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8&&c9){
    console.log('checkdata = > ',true);
  return true;}
  return false;
}
const checkAns = (arr) =>{
for(var i=0;i<9;i++)
  for(var j=0;j<9;j++)
    if(arr[i][j]!=full_data[i][j])
return false;
return true;
}
const checkSudoku = () => {
  console.log("Difficulty state => ",diff_state);
  var c1= validateRows();
  var c2=validateColumn();
  var c3=validateBlocks();
  console.log('diff => ',diff_state);
  var k = false;
  if(c1&&c2&&c3){
  if(diff_state=='easy'){
    k=checkAns(easy_sol);
  console.log(`${diff_state} ${k}`);
  }
  else if(diff_state=='mid'){
    k= checkAns(mid_sol);
    console.log(`${diff_state} ${k}`);
  }
  else if(diff_state=='hard'){

    k= checkAns(hard_sol);
    console.log(`${diff_state} ${k}`);
  }
}
if(k)
swal("Good job!", "Every Thing Is Perfect 👏", "success");
else
swal("Wrong", "Please , try it again ", "error");
};
const setClass = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      var ipt1 = document.querySelector(`#r_${i} #d_${j} input`);
      ipt1.disabled = false;
      ipt1.classList.remove("disable", "match");
      ipt1.value = "";
    }
  }
};
const local_Data = () =>{
  console.log('local');
  var data =JSON.parse(localStorage.getItem(`${diff_state}`));
  console.log(data);
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      var ipt1 = document.querySelector(`#r_${i} #d_${j} input`);
      if(data!=null)
     if(data[i-1][j-1]!=ipt1.value&&ipt1.value==""){
       ipt1.value = data[i-1][j-1];
     }
    }}
}
const validate = document.getElementById("validate");
validate.addEventListener("click", checkSudoku);
const sudoku_Setup = (arr, cnst) => {
  setClass();
  diff_state = cnst;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      var ipt1 = document.querySelector(`#r_${i} #d_${j} input`);
      ipt1.value = arr[i - 1][j - 1];
      if (ipt1.value != "") {
        ipt1.disabled = true;
        ipt1.style.color = "#6B6F75";
        ipt1.className = "disable";
      } else {
        ipt1.style.color = "#000";}}}
      local_Data();
      };
      const easy_click = () =>{
        easy_btn.style.color="#6B6F75";
        med_btn.style.color="#000";
        hard_btn.style.color="#000";
      sudoku_Setup(easy_ques, "easy");
      }
      const mid_click = () =>{
        easy_btn.style.color="#000";
        med_btn.style.color="#6B6F75";
        hard_btn.style.color="#000";
      sudoku_Setup(mid_ques, "mid");
      }
      const hard_click = ()=>{
        easy_btn.style.color="#000";
        med_btn.style.color="#000";
        hard_btn.style.color="#6B6F75";
      sudoku_Setup(hard_ques, "hard");
      }
easy_btn.addEventListener("click", () => {
  easy_click();
});
med_btn.addEventListener("click", () => {
  mid_click();
});
hard_btn.addEventListener("click", () => {
    hard_click();
});
sol.addEventListener("click", () => {
  if (diff_state == "easy") {
    sudoku_Setup(easy_sol, diff_state);
  } else if (diff_state == "mid") {
    sudoku_Setup(mid_sol, diff_state);
  } else if(diff_state=='hard'){
    sudoku_Setup(hard_sol, diff_state);}
  });
    var reset = document.getElementById('Reset');
    reset.addEventListener('click',()=>{
      if (diff_state == "easy") {
        window.localStorage.removeItem('easy');
        sudoku_Setup(easy_ques, diff_state);
      } else if (diff_state == "mid") {
        window.localStorage.removeItem('mid');

        sudoku_Setup(mid_ques, diff_state);
      } else if(diff_state=='hard'){
        window.localStorage.removeItem('hard');

        sudoku_Setup(hard_ques, diff_state);}
      });
      swal("Please Select Your Difficulty Level", {
        buttons: {
          cancel:"Easy", 
          catch: {
            text: "Medium",
            value: "mid",
          },
         Hard:true,
        },
      })
      .then((value) => {
        switch (value) {
          case "Hard":
            diff_state='hard';
            hard_click();
            break;
          case "mid":
            diff_state='mid';
            mid_click();
            break;
          default:
            diff_state='easy';
            easy_click();
        }
      });
