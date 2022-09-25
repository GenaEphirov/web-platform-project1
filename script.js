const minSquare = document.getElementById('minimum-square');
const dropdownMenu = document.getElementById('nav-dropdown');

minSquare.addEventListener('click', navDropdownEnable);

function navDropdownEnable() {
  let dropdownMenuStyle = dropdownMenu.style;
  dropdownMenuStyle.left = '0px';
  dropdownMenuStyle.opacity = '1';

  let minSquareStyle = minSquare.style;
  minSquareStyle.left = '0px';
  minSquareStyle.backgroundColor = 'tomato';
  minSquareStyle.opacity = '1';

  minSquare.removeEventListener('click', navDropdownEnable);
  minSquare.addEventListener('click', navDropdownDisable);
}

function navDropdownDisable() {
  console.log('disabled');
}