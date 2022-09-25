const minSquare = document.getElementById('minimum-square');
const dropdownMenu = document.getElementById('nav-dropdown');
const minSquareImg = document.getElementById('minimum-square-img');

minSquare.addEventListener('click', navDropdownEnable);

function navDropdownEnable() {
  let dropdownMenuStyle = dropdownMenu.style;
  dropdownMenuStyle.left = '0px';
  dropdownMenuStyle.opacity = '1';

  let minSquareStyle = minSquare.style;
  minSquareStyle.left = '0px';
  minSquareStyle.backgroundColor = 'tomato';
  minSquareStyle.opacity = '1';

  let minSquareImgStyle = minSquareImg.style;
  minSquareImgStyle.right = '155px'

  minSquare.removeEventListener('click', navDropdownEnable);
  minSquare.addEventListener('click', navDropdownDisable);
}

function navDropdownDisable() {
  let dropdownMenuStyle = dropdownMenu.style;
  dropdownMenuStyle.left = '-200px';
  dropdownMenuStyle.opacity = '0';

  let minSquareStyle = minSquare.style;
  minSquareStyle.left = '-150px';
  minSquareStyle.backgroundColor = 'transparent';
  minSquareStyle.opacity = '0.5';

  let minSquareImgStyle = minSquareImg.style;
  minSquareImgStyle.right = '5px'

  minSquare.removeEventListener('click', navDropdownDisable);
  minSquare.addEventListener('click', navDropdownEnable);
}