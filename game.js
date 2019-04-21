console.log('connected');
var Restart=document.getElementById('demo');      //call button to id demo

var table = document.querySelectorAll('td');      // call table block td





	Restart.addEventListener("click", function(){      //button give action
	for (var i = 0 ; i < table.length ; i++ )
	{
		table[i].textContent = '';
	}
	} );

  function clean(){                                    // this fun give table block X or O
    if (this.textContent === '') {
      this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
  }

  for (var i = 0; i < table.length; i++) {             //give action to table block 
    table[i].addEventListener('click', clean);
  }
