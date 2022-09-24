function updateLight(current) {
    let color;
  switch (current) {
    case 'green':
        color = 'yellow';
        break;
    case 'red':
        color = 'green';
        break;
    case 'yellow':
        color = 'red';
        break;
  }
        return color;
  }

 
  console.log(updateLight('green'));
 