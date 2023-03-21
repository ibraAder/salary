//Javascript to calculate py, NHIF, NSSF, and NS
function calculate() {
    let bp, py, NHIF, NSSF, NS;
  
    bp = parseInt(document.forms["Personal-Info"].elements["bp"].value);
  
    if (bp <= 24000) {
      py = bp * 0.1;
    } else if (bp > 24000 && bp <= 32333) {
      py = bp * 0.25;
    } else if (bp > 32333) {
      py = bp * 0.3;
    }
  
    NHIF = 0;
    let nhifRanges = [    [6000, 150],
      [8000, 300],
      [12000, 400],
      [15000, 500],
      [20000, 600],
      [25000, 750],
      [30000, 850],
      [35000, 900],
      [40000, 950],
      [45000, 1000],
      [50000, 1100],
      [60000, 1200],
      [70000, 1300],
      [80000, 1400],
      [90000, 1500],
      [100000, 1600]
    ];
    for (let i = 0; i < nhifRanges.length; i++) {
      if (bp >= nhifRanges[i][0]) {
        NHIF = bp - nhifRanges[i][1];
        break;
      }
    }
    if (bp >= 100000) {
      NHIF = bp - 1700;
    }
  
    NSSF = bp - 400;
  
    let GP = NSSF + NHIF + py;
    NS = bp - GP;
  
    document.forms["Personal-Info"].elements["py"].value = py;
    document.forms["Personal-Info"].elements["NHIF"].value = NHIF;
    document.forms["Personal-Info"].elements["NSSF"].value = NSSF;
    document.forms["Personal-Info"].elements["NS"].value = NS;
  }