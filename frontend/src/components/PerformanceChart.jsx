import React, { memo } from "react";


function PerformanceChart({

  products=[]

}){

  return(

    <div className="
      space-y-6
    ">

      {

        products.map(
          (item,index)=>(

            <div
              key={index}
            >

              <div className="
                flex
                justify-between
                mb-2
              ">

                <p>
                  {item.product}
                </p>

                <p>
                  {item.sales}
                </p>

              </div>

              <div className="
                bg-gray-200
                h-4
                rounded-full
              ">

                <div

                  style={{

                    width:
                    `${item.sales}px`

                  }}

                  className="
                    bg-purple-600
                    h-4
                    rounded-full
                  "

                >

                </div>

              </div>

            </div>

          )
        )

      }

    </div>

  );

}

export default memo(
  PerformanceChart
);