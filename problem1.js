
const CIN=91; 
let isPrime = true;

function validateIdentity(CIN) 
{

  if (CIN < 2)
 {
    isPrime = false;
 } else 
  {
    for (let i = 2; i * i <= CIN; i++) 
    {
      if (CIN % i === 0) 
        {
        isPrime = false;
        break;
        }
    }
  }
}

validateIdentity(CIN);
 
console.log(isPrime ? "Agent Approved: Identity pattern is untraceable." : "Rejected: Identity pattern shows external links");
  

