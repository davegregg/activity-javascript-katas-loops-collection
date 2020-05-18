/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

  console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  let counter1 = 1
  const limit = 20
  while (counter1 <= limit) {
    console.log(counter1)
    counter1 += 1
  }

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

  console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

  let counter2a = 1
  while (counter2a <= 20) {                    // IS LOOPING 20 times
    const counterIsEven = (counter2a % 2 === 0)
    if (counterIsEven) {
      console.log(counter2a)
    }
    counter2a += 1
  }

  let counter2b = 2                          // IS LOOPING 10 times
  while (counter2b <= 20) {
    console.log(counter2b)
    counter2b += 2
  }


/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

  console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
 

  let counter3 = 1
  while (counter3 <= 20) {
    console.log(counter3)
    counter3 += 2
  }


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

  console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter4 = 5
  while (counter4 <= 100) {
    console.log(counter4)
    counter4 += 5
  }


/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

  console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  let counter5 = 1
  while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare) {
      console.log(counter5)
    }
    counter5 += 1
  }


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

  console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  let counter6 = 20
  while (counter6 >= 1) {
    console.log(counter6)
    counter6 -= 1
  }



/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

  console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 07 code in place of THIS comment. */


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

  console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 08 code in place of THIS comment. */


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

  console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 09 code in place of THIS comment. */


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

  console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 10 code in place of THIS comment. */




