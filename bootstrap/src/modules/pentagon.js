export function Pentagon() {
   const imageArray = ['./../img/1.jpg', './../img/2.jpg', './../img/3.jpg', './../img/4.jpg', './../img/5.jpg', './../img/6.jpg', './../img/7.jpg', './../img/8.jpg']

   const pentagonList = document.querySelector('.pentagon__list');

   function renderPentagon(apiData) {
      let cards = '';
      let result = apiData;

      result.forEach(item => {
         const cardBlock = `
         <div class="pentagon-container flex-item d-flex flex-wrap justify-content-center align-items-center">
            <svg class="pentagon" width="250" height="250" viewBox="-1 0 101 100">
               <defs>
                  <clipPath id="pentagon-mask">
                     <path d="M20,0 L80,0 L100,60 L50,100 L0,60z" stroke="black" fill="none" />
                  </clipPath>
               </defs>
               <image class="inner-image__mask" xlink:href="${item}" clip-path="url(#pentagon-mask)" x="-25%" preserveAspectRatio="xMidYMid"/>
            </svg>
         </div> 
         `;

         cards += cardBlock;
      });

      pentagonList.innerHTML = cards;
   }

   renderPentagon(imageArray)
}
