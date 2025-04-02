import { ReactElement, useState } from "react"

export function useMultiStepForm(steps: ReactElement[]){
   const [currentStepIndex, useCurrentStepIndex] = useState(0)

   function next(){
      useCurrentStepIndex(prevIndex => {
         if (prevIndex >= steps.length - 1 ) return prevIndex
         return prevIndex + 1
      })
   }

   function back(){
      useCurrentStepIndex(prevIndex => {
         if (prevIndex <= 0) return prevIndex
         return prevIndex - 1
      })
      
   }

   function goTo(index:number){
      useCurrentStepIndex(index)
   }



   return{
      next,
      currentStepIndex,
      step: steps[currentStepIndex],
      steps,
      isFirstStep: currentStepIndex === 0,
      isLastStep: currentStepIndex === steps.length - 1,
      back,
      goTo
   }
}