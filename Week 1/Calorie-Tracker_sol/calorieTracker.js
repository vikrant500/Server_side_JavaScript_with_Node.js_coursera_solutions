const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   let swim_1hr = 2*swimming
   let cycle_1hr = 2*cycling
   let run_1hr = 2*running

   if(cycling<=0 || running<=0 || swimming<=0 || extraCalorieInTake <=0){
      return -1
   }
   
   
   
   else{
      calories_burnt_1w = swim_1hr + cycle_1hr + run_1hr

      weightLostInAMonth = (calories_burnt_1w*4 - extraCalorieInTake * 30)/1000
   }

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

