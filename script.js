let displayContent = '';

function appendToDisplay(value) {
    displayContent += value;
    document.getElementById('display').value = displayContent;
  }

  function clearDisplay() {
    displayContent = '';
    document.getElementById('display').value = displayContent;
  }

document.getElementById('utolsobevitt').addEventListener('click', () => {
    displayContent = displayContent.slice(0, -1);
    document.getElementById('display').value = displayContent;
  });

document.getElementById('szamolas').addEventListener('click', () => {
    try {
      let result = eval(displayContent);
      if (isNaN(result) || !isFinite(result)) {
        document.getElementById('display').value = 'Hiba';
      } else {
        document.getElementById('display').value = result;
        displayContent = result.toString();
      }
    } catch (error) {
      document.getElementById('display').value = 'Hiba';
    }
  });

document.getElementById('osztas').addEventListener('click', () => appendToDisplay('/'));
document.getElementById('szorzas').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('kivonas').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('osszeadas').addEventListener('click', () => appendToDisplay('+'));


document.getElementById('7es').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('8as').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('9es').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('torles').addEventListener('click', clearDisplay);

document.getElementById('4es').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('5os').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('6os').addEventListener('click', () => appendToDisplay('6'));

document.getElementById('1es').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('2es').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('3as').addEventListener('click', () => appendToDisplay('3'));


document.getElementById('0as').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('pontosvesszo').addEventListener('click', () => appendToDisplay('.'));
