/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 673.0, "minX": 0.0, "maxY": 5428.0, "series": [{"data": [[0.0, 673.0], [0.1, 679.0], [0.2, 683.0], [0.3, 690.0], [0.4, 691.0], [0.5, 699.0], [0.6, 708.0], [0.7, 719.0], [0.8, 720.0], [0.9, 727.0], [1.0, 732.0], [1.1, 735.0], [1.2, 737.0], [1.3, 745.0], [1.4, 747.0], [1.5, 747.0], [1.6, 765.0], [1.7, 769.0], [1.8, 769.0], [1.9, 774.0], [2.0, 781.0], [2.1, 785.0], [2.2, 787.0], [2.3, 792.0], [2.4, 794.0], [2.5, 796.0], [2.6, 797.0], [2.7, 798.0], [2.8, 806.0], [2.9, 817.0], [3.0, 823.0], [3.1, 823.0], [3.2, 836.0], [3.3, 837.0], [3.4, 848.0], [3.5, 859.0], [3.6, 866.0], [3.7, 877.0], [3.8, 879.0], [3.9, 888.0], [4.0, 888.0], [4.1, 897.0], [4.2, 897.0], [4.3, 904.0], [4.4, 905.0], [4.5, 915.0], [4.6, 916.0], [4.7, 947.0], [4.8, 949.0], [4.9, 953.0], [5.0, 970.0], [5.1, 972.0], [5.2, 980.0], [5.3, 986.0], [5.4, 994.0], [5.5, 1001.0], [5.6, 1007.0], [5.7, 1019.0], [5.8, 1026.0], [5.9, 1031.0], [6.0, 1034.0], [6.1, 1035.0], [6.2, 1035.0], [6.3, 1044.0], [6.4, 1055.0], [6.5, 1067.0], [6.6, 1077.0], [6.7, 1089.0], [6.8, 1111.0], [6.9, 1139.0], [7.0, 1175.0], [7.1, 1212.0], [7.2, 1226.0], [7.3, 1249.0], [7.4, 1276.0], [7.5, 1284.0], [7.6, 1344.0], [7.7, 1379.0], [7.8, 1393.0], [7.9, 1423.0], [8.0, 1434.0], [8.1, 1436.0], [8.2, 1477.0], [8.3, 1480.0], [8.4, 1508.0], [8.5, 1536.0], [8.6, 1537.0], [8.7, 1550.0], [8.8, 1557.0], [8.9, 1585.0], [9.0, 1598.0], [9.1, 1599.0], [9.2, 1611.0], [9.3, 1647.0], [9.4, 1662.0], [9.5, 1690.0], [9.6, 1705.0], [9.7, 1712.0], [9.8, 1712.0], [9.9, 1723.0], [10.0, 1742.0], [10.1, 1744.0], [10.2, 1746.0], [10.3, 1758.0], [10.4, 1794.0], [10.5, 1863.0], [10.6, 1881.0], [10.7, 1895.0], [10.8, 1978.0], [10.9, 2009.0], [11.0, 2010.0], [11.1, 2012.0], [11.2, 2024.0], [11.3, 2024.0], [11.4, 2026.0], [11.5, 2031.0], [11.6, 2031.0], [11.7, 2042.0], [11.8, 2043.0], [11.9, 2059.0], [12.0, 2060.0], [12.1, 2067.0], [12.2, 2100.0], [12.3, 2102.0], [12.4, 2105.0], [12.5, 2105.0], [12.6, 2107.0], [12.7, 2107.0], [12.8, 2129.0], [12.9, 2134.0], [13.0, 2136.0], [13.1, 2149.0], [13.2, 2167.0], [13.3, 2184.0], [13.4, 2187.0], [13.5, 2190.0], [13.6, 2190.0], [13.7, 2190.0], [13.8, 2197.0], [13.9, 2205.0], [14.0, 2206.0], [14.1, 2214.0], [14.2, 2227.0], [14.3, 2230.0], [14.4, 2230.0], [14.5, 2238.0], [14.6, 2243.0], [14.7, 2248.0], [14.8, 2250.0], [14.9, 2252.0], [15.0, 2252.0], [15.1, 2253.0], [15.2, 2253.0], [15.3, 2257.0], [15.4, 2273.0], [15.5, 2299.0], [15.6, 2299.0], [15.7, 2299.0], [15.8, 2319.0], [15.9, 2322.0], [16.0, 2325.0], [16.1, 2328.0], [16.2, 2330.0], [16.3, 2332.0], [16.4, 2332.0], [16.5, 2333.0], [16.6, 2335.0], [16.7, 2339.0], [16.8, 2339.0], [16.9, 2340.0], [17.0, 2349.0], [17.1, 2353.0], [17.2, 2355.0], [17.3, 2355.0], [17.4, 2355.0], [17.5, 2355.0], [17.6, 2355.0], [17.7, 2356.0], [17.8, 2359.0], [17.9, 2365.0], [18.0, 2371.0], [18.1, 2380.0], [18.2, 2381.0], [18.3, 2391.0], [18.4, 2392.0], [18.5, 2392.0], [18.6, 2402.0], [18.7, 2407.0], [18.8, 2408.0], [18.9, 2414.0], [19.0, 2414.0], [19.1, 2432.0], [19.2, 2432.0], [19.3, 2445.0], [19.4, 2445.0], [19.5, 2445.0], [19.6, 2445.0], [19.7, 2449.0], [19.8, 2456.0], [19.9, 2456.0], [20.0, 2457.0], [20.1, 2457.0], [20.2, 2457.0], [20.3, 2458.0], [20.4, 2460.0], [20.5, 2460.0], [20.6, 2461.0], [20.7, 2462.0], [20.8, 2466.0], [20.9, 2470.0], [21.0, 2474.0], [21.1, 2479.0], [21.2, 2487.0], [21.3, 2503.0], [21.4, 2512.0], [21.5, 2512.0], [21.6, 2518.0], [21.7, 2537.0], [21.8, 2541.0], [21.9, 2541.0], [22.0, 2541.0], [22.1, 2542.0], [22.2, 2548.0], [22.3, 2554.0], [22.4, 2554.0], [22.5, 2558.0], [22.6, 2558.0], [22.7, 2559.0], [22.8, 2559.0], [22.9, 2559.0], [23.0, 2559.0], [23.1, 2559.0], [23.2, 2560.0], [23.3, 2578.0], [23.4, 2591.0], [23.5, 2595.0], [23.6, 2596.0], [23.7, 2598.0], [23.8, 2604.0], [23.9, 2618.0], [24.0, 2629.0], [24.1, 2631.0], [24.2, 2631.0], [24.3, 2635.0], [24.4, 2635.0], [24.5, 2643.0], [24.6, 2643.0], [24.7, 2656.0], [24.8, 2657.0], [24.9, 2658.0], [25.0, 2661.0], [25.1, 2662.0], [25.2, 2662.0], [25.3, 2666.0], [25.4, 2669.0], [25.5, 2670.0], [25.6, 2675.0], [25.7, 2676.0], [25.8, 2683.0], [25.9, 2683.0], [26.0, 2686.0], [26.1, 2690.0], [26.2, 2696.0], [26.3, 2725.0], [26.4, 2728.0], [26.5, 2728.0], [26.6, 2737.0], [26.7, 2737.0], [26.8, 2737.0], [26.9, 2738.0], [27.0, 2743.0], [27.1, 2751.0], [27.2, 2755.0], [27.3, 2756.0], [27.4, 2756.0], [27.5, 2759.0], [27.6, 2760.0], [27.7, 2761.0], [27.8, 2764.0], [27.9, 2765.0], [28.0, 2765.0], [28.1, 2765.0], [28.2, 2766.0], [28.3, 2767.0], [28.4, 2773.0], [28.5, 2774.0], [28.6, 2776.0], [28.7, 2777.0], [28.8, 2778.0], [28.9, 2778.0], [29.0, 2788.0], [29.1, 2797.0], [29.2, 2798.0], [29.3, 2802.0], [29.4, 2803.0], [29.5, 2805.0], [29.6, 2816.0], [29.7, 2821.0], [29.8, 2823.0], [29.9, 2823.0], [30.0, 2837.0], [30.1, 2837.0], [30.2, 2838.0], [30.3, 2844.0], [30.4, 2849.0], [30.5, 2859.0], [30.6, 2868.0], [30.7, 2870.0], [30.8, 2874.0], [30.9, 2875.0], [31.0, 2879.0], [31.1, 2880.0], [31.2, 2886.0], [31.3, 2887.0], [31.4, 2887.0], [31.5, 2887.0], [31.6, 2891.0], [31.7, 2892.0], [31.8, 2895.0], [31.9, 2897.0], [32.0, 2898.0], [32.1, 2899.0], [32.2, 2906.0], [32.3, 2909.0], [32.4, 2925.0], [32.5, 2925.0], [32.6, 2926.0], [32.7, 2950.0], [32.8, 2951.0], [32.9, 2955.0], [33.0, 2956.0], [33.1, 2966.0], [33.2, 2972.0], [33.3, 2973.0], [33.4, 2973.0], [33.5, 2991.0], [33.6, 2991.0], [33.7, 2992.0], [33.8, 3003.0], [33.9, 3018.0], [34.0, 3026.0], [34.1, 3034.0], [34.2, 3035.0], [34.3, 3036.0], [34.4, 3037.0], [34.5, 3040.0], [34.6, 3040.0], [34.7, 3041.0], [34.8, 3041.0], [34.9, 3041.0], [35.0, 3042.0], [35.1, 3043.0], [35.2, 3046.0], [35.3, 3046.0], [35.4, 3049.0], [35.5, 3052.0], [35.6, 3059.0], [35.7, 3060.0], [35.8, 3060.0], [35.9, 3060.0], [36.0, 3060.0], [36.1, 3061.0], [36.2, 3061.0], [36.3, 3062.0], [36.4, 3070.0], [36.5, 3073.0], [36.6, 3073.0], [36.7, 3077.0], [36.8, 3082.0], [36.9, 3087.0], [37.0, 3097.0], [37.1, 3098.0], [37.2, 3098.0], [37.3, 3099.0], [37.4, 3099.0], [37.5, 3107.0], [37.6, 3108.0], [37.7, 3108.0], [37.8, 3109.0], [37.9, 3110.0], [38.0, 3113.0], [38.1, 3113.0], [38.2, 3115.0], [38.3, 3120.0], [38.4, 3120.0], [38.5, 3122.0], [38.6, 3123.0], [38.7, 3124.0], [38.8, 3131.0], [38.9, 3131.0], [39.0, 3134.0], [39.1, 3135.0], [39.2, 3137.0], [39.3, 3143.0], [39.4, 3143.0], [39.5, 3143.0], [39.6, 3144.0], [39.7, 3145.0], [39.8, 3146.0], [39.9, 3146.0], [40.0, 3160.0], [40.1, 3161.0], [40.2, 3161.0], [40.3, 3161.0], [40.4, 3162.0], [40.5, 3163.0], [40.6, 3166.0], [40.7, 3173.0], [40.8, 3174.0], [40.9, 3179.0], [41.0, 3180.0], [41.1, 3180.0], [41.2, 3182.0], [41.3, 3183.0], [41.4, 3183.0], [41.5, 3185.0], [41.6, 3205.0], [41.7, 3207.0], [41.8, 3211.0], [41.9, 3216.0], [42.0, 3217.0], [42.1, 3222.0], [42.2, 3223.0], [42.3, 3223.0], [42.4, 3223.0], [42.5, 3223.0], [42.6, 3224.0], [42.7, 3225.0], [42.8, 3225.0], [42.9, 3229.0], [43.0, 3240.0], [43.1, 3241.0], [43.2, 3244.0], [43.3, 3245.0], [43.4, 3245.0], [43.5, 3245.0], [43.6, 3245.0], [43.7, 3246.0], [43.8, 3247.0], [43.9, 3247.0], [44.0, 3255.0], [44.1, 3256.0], [44.2, 3257.0], [44.3, 3259.0], [44.4, 3269.0], [44.5, 3271.0], [44.6, 3274.0], [44.7, 3282.0], [44.8, 3284.0], [44.9, 3290.0], [45.0, 3311.0], [45.1, 3318.0], [45.2, 3322.0], [45.3, 3323.0], [45.4, 3332.0], [45.5, 3342.0], [45.6, 3342.0], [45.7, 3347.0], [45.8, 3348.0], [45.9, 3348.0], [46.0, 3349.0], [46.1, 3353.0], [46.2, 3356.0], [46.3, 3368.0], [46.4, 3368.0], [46.5, 3368.0], [46.6, 3370.0], [46.7, 3371.0], [46.8, 3371.0], [46.9, 3373.0], [47.0, 3373.0], [47.1, 3373.0], [47.2, 3374.0], [47.3, 3374.0], [47.4, 3374.0], [47.5, 3374.0], [47.6, 3375.0], [47.7, 3375.0], [47.8, 3385.0], [47.9, 3388.0], [48.0, 3388.0], [48.1, 3388.0], [48.2, 3390.0], [48.3, 3391.0], [48.4, 3391.0], [48.5, 3392.0], [48.6, 3393.0], [48.7, 3394.0], [48.8, 3395.0], [48.9, 3409.0], [49.0, 3412.0], [49.1, 3412.0], [49.2, 3413.0], [49.3, 3413.0], [49.4, 3415.0], [49.5, 3415.0], [49.6, 3415.0], [49.7, 3415.0], [49.8, 3416.0], [49.9, 3416.0], [50.0, 3416.0], [50.1, 3418.0], [50.2, 3418.0], [50.3, 3418.0], [50.4, 3419.0], [50.5, 3420.0], [50.6, 3420.0], [50.7, 3426.0], [50.8, 3428.0], [50.9, 3430.0], [51.0, 3434.0], [51.1, 3435.0], [51.2, 3435.0], [51.3, 3435.0], [51.4, 3436.0], [51.5, 3436.0], [51.6, 3436.0], [51.7, 3437.0], [51.8, 3437.0], [51.9, 3440.0], [52.0, 3440.0], [52.1, 3440.0], [52.2, 3441.0], [52.3, 3441.0], [52.4, 3441.0], [52.5, 3445.0], [52.6, 3462.0], [52.7, 3462.0], [52.8, 3463.0], [52.9, 3464.0], [53.0, 3464.0], [53.1, 3464.0], [53.2, 3466.0], [53.3, 3467.0], [53.4, 3467.0], [53.5, 3468.0], [53.6, 3468.0], [53.7, 3468.0], [53.8, 3469.0], [53.9, 3469.0], [54.0, 3470.0], [54.1, 3471.0], [54.2, 3471.0], [54.3, 3472.0], [54.4, 3472.0], [54.5, 3472.0], [54.6, 3472.0], [54.7, 3476.0], [54.8, 3476.0], [54.9, 3476.0], [55.0, 3476.0], [55.1, 3476.0], [55.2, 3477.0], [55.3, 3477.0], [55.4, 3478.0], [55.5, 3480.0], [55.6, 3480.0], [55.7, 3480.0], [55.8, 3480.0], [55.9, 3480.0], [56.0, 3481.0], [56.1, 3481.0], [56.2, 3481.0], [56.3, 3481.0], [56.4, 3482.0], [56.5, 3482.0], [56.6, 3483.0], [56.7, 3484.0], [56.8, 3487.0], [56.9, 3492.0], [57.0, 3492.0], [57.1, 3493.0], [57.2, 3493.0], [57.3, 3493.0], [57.4, 3494.0], [57.5, 3494.0], [57.6, 3494.0], [57.7, 3514.0], [57.8, 3514.0], [57.9, 3525.0], [58.0, 3525.0], [58.1, 3531.0], [58.2, 3539.0], [58.3, 3540.0], [58.4, 3540.0], [58.5, 3542.0], [58.6, 3543.0], [58.7, 3543.0], [58.8, 3544.0], [58.9, 3544.0], [59.0, 3544.0], [59.1, 3549.0], [59.2, 3552.0], [59.3, 3553.0], [59.4, 3553.0], [59.5, 3553.0], [59.6, 3554.0], [59.7, 3554.0], [59.8, 3555.0], [59.9, 3555.0], [60.0, 3555.0], [60.1, 3555.0], [60.2, 3561.0], [60.3, 3562.0], [60.4, 3563.0], [60.5, 3563.0], [60.6, 3563.0], [60.7, 3578.0], [60.8, 3582.0], [60.9, 3583.0], [61.0, 3584.0], [61.1, 3585.0], [61.2, 3585.0], [61.3, 3586.0], [61.4, 3592.0], [61.5, 3593.0], [61.6, 3597.0], [61.7, 3597.0], [61.8, 3597.0], [61.9, 3598.0], [62.0, 3602.0], [62.1, 3602.0], [62.2, 3602.0], [62.3, 3602.0], [62.4, 3603.0], [62.5, 3603.0], [62.6, 3608.0], [62.7, 3610.0], [62.8, 3610.0], [62.9, 3622.0], [63.0, 3629.0], [63.1, 3634.0], [63.2, 3634.0], [63.3, 3634.0], [63.4, 3635.0], [63.5, 3637.0], [63.6, 3637.0], [63.7, 3642.0], [63.8, 3651.0], [63.9, 3657.0], [64.0, 3658.0], [64.1, 3658.0], [64.2, 3659.0], [64.3, 3662.0], [64.4, 3662.0], [64.5, 3662.0], [64.6, 3663.0], [64.7, 3664.0], [64.8, 3664.0], [64.9, 3664.0], [65.0, 3664.0], [65.1, 3665.0], [65.2, 3665.0], [65.3, 3665.0], [65.4, 3675.0], [65.5, 3677.0], [65.6, 3677.0], [65.7, 3679.0], [65.8, 3680.0], [65.9, 3684.0], [66.0, 3685.0], [66.1, 3685.0], [66.2, 3685.0], [66.3, 3685.0], [66.4, 3685.0], [66.5, 3686.0], [66.6, 3686.0], [66.7, 3686.0], [66.8, 3686.0], [66.9, 3686.0], [67.0, 3686.0], [67.1, 3686.0], [67.2, 3687.0], [67.3, 3687.0], [67.4, 3690.0], [67.5, 3690.0], [67.6, 3690.0], [67.7, 3693.0], [67.8, 3693.0], [67.9, 3694.0], [68.0, 3695.0], [68.1, 3700.0], [68.2, 3702.0], [68.3, 3713.0], [68.4, 3724.0], [68.5, 3726.0], [68.6, 3728.0], [68.7, 3729.0], [68.8, 3729.0], [68.9, 3729.0], [69.0, 3730.0], [69.1, 3730.0], [69.2, 3730.0], [69.3, 3731.0], [69.4, 3731.0], [69.5, 3731.0], [69.6, 3731.0], [69.7, 3731.0], [69.8, 3732.0], [69.9, 3732.0], [70.0, 3732.0], [70.1, 3732.0], [70.2, 3732.0], [70.3, 3732.0], [70.4, 3733.0], [70.5, 3733.0], [70.6, 3736.0], [70.7, 3737.0], [70.8, 3737.0], [70.9, 3737.0], [71.0, 3737.0], [71.1, 3742.0], [71.2, 3742.0], [71.3, 3742.0], [71.4, 3742.0], [71.5, 3742.0], [71.6, 3743.0], [71.7, 3743.0], [71.8, 3756.0], [71.9, 3762.0], [72.0, 3762.0], [72.1, 3763.0], [72.2, 3774.0], [72.3, 3775.0], [72.4, 3775.0], [72.5, 3775.0], [72.6, 3775.0], [72.7, 3776.0], [72.8, 3776.0], [72.9, 3779.0], [73.0, 3782.0], [73.1, 3786.0], [73.2, 3787.0], [73.3, 3787.0], [73.4, 3787.0], [73.5, 3788.0], [73.6, 3788.0], [73.7, 3788.0], [73.8, 3788.0], [73.9, 3788.0], [74.0, 3788.0], [74.1, 3788.0], [74.2, 3789.0], [74.3, 3789.0], [74.4, 3789.0], [74.5, 3790.0], [74.6, 3790.0], [74.7, 3797.0], [74.8, 3809.0], [74.9, 3810.0], [75.0, 3810.0], [75.1, 3810.0], [75.2, 3810.0], [75.3, 3810.0], [75.4, 3810.0], [75.5, 3810.0], [75.6, 3812.0], [75.7, 3827.0], [75.8, 3827.0], [75.9, 3828.0], [76.0, 3828.0], [76.1, 3828.0], [76.2, 3829.0], [76.3, 3853.0], [76.4, 3854.0], [76.5, 3857.0], [76.6, 3859.0], [76.7, 3866.0], [76.8, 3870.0], [76.9, 3871.0], [77.0, 3872.0], [77.1, 3872.0], [77.2, 3872.0], [77.3, 3873.0], [77.4, 3876.0], [77.5, 3876.0], [77.6, 3876.0], [77.7, 3877.0], [77.8, 3877.0], [77.9, 3877.0], [78.0, 3877.0], [78.1, 3877.0], [78.2, 3877.0], [78.3, 3877.0], [78.4, 3878.0], [78.5, 3878.0], [78.6, 3883.0], [78.7, 3884.0], [78.8, 3884.0], [78.9, 3884.0], [79.0, 3885.0], [79.1, 3885.0], [79.2, 3885.0], [79.3, 3888.0], [79.4, 3890.0], [79.5, 3890.0], [79.6, 3891.0], [79.7, 3891.0], [79.8, 3891.0], [79.9, 3891.0], [80.0, 3892.0], [80.1, 3892.0], [80.2, 3893.0], [80.3, 3893.0], [80.4, 3894.0], [80.5, 3894.0], [80.6, 3895.0], [80.7, 3899.0], [80.8, 3902.0], [80.9, 3903.0], [81.0, 3904.0], [81.1, 3904.0], [81.2, 3917.0], [81.3, 3918.0], [81.4, 3919.0], [81.5, 3919.0], [81.6, 3919.0], [81.7, 3920.0], [81.8, 3920.0], [81.9, 3929.0], [82.0, 3930.0], [82.1, 3938.0], [82.2, 3940.0], [82.3, 3940.0], [82.4, 3940.0], [82.5, 3940.0], [82.6, 3941.0], [82.7, 3946.0], [82.8, 3946.0], [82.9, 3946.0], [83.0, 3946.0], [83.1, 3947.0], [83.2, 3947.0], [83.3, 3947.0], [83.4, 3948.0], [83.5, 3948.0], [83.6, 3948.0], [83.7, 3948.0], [83.8, 3949.0], [83.9, 3949.0], [84.0, 3956.0], [84.1, 3962.0], [84.2, 3965.0], [84.3, 3966.0], [84.4, 3967.0], [84.5, 3968.0], [84.6, 3968.0], [84.7, 3968.0], [84.8, 3968.0], [84.9, 3969.0], [85.0, 3983.0], [85.1, 3985.0], [85.2, 3985.0], [85.3, 3985.0], [85.4, 3986.0], [85.5, 3986.0], [85.6, 3986.0], [85.7, 3988.0], [85.8, 3991.0], [85.9, 3992.0], [86.0, 3993.0], [86.1, 3993.0], [86.2, 3993.0], [86.3, 3994.0], [86.4, 3994.0], [86.5, 3994.0], [86.6, 3994.0], [86.7, 3994.0], [86.8, 4007.0], [86.9, 4008.0], [87.0, 4009.0], [87.1, 4009.0], [87.2, 4010.0], [87.3, 4011.0], [87.4, 4012.0], [87.5, 4013.0], [87.6, 4013.0], [87.7, 4013.0], [87.8, 4014.0], [87.9, 4020.0], [88.0, 4020.0], [88.1, 4020.0], [88.2, 4020.0], [88.3, 4020.0], [88.4, 4021.0], [88.5, 4021.0], [88.6, 4027.0], [88.7, 4058.0], [88.8, 4094.0], [88.9, 4094.0], [89.0, 4095.0], [89.1, 4095.0], [89.2, 4095.0], [89.3, 4095.0], [89.4, 4095.0], [89.5, 4095.0], [89.6, 4096.0], [89.7, 4096.0], [89.8, 4096.0], [89.9, 4096.0], [90.0, 4097.0], [90.1, 4101.0], [90.2, 4102.0], [90.3, 4102.0], [90.4, 4102.0], [90.5, 4102.0], [90.6, 4102.0], [90.7, 4103.0], [90.8, 4103.0], [90.9, 4103.0], [91.0, 4103.0], [91.1, 4103.0], [91.2, 4103.0], [91.3, 4104.0], [91.4, 4104.0], [91.5, 4104.0], [91.6, 4104.0], [91.7, 4104.0], [91.8, 4105.0], [91.9, 4131.0], [92.0, 4131.0], [92.1, 4131.0], [92.2, 4131.0], [92.3, 4134.0], [92.4, 4135.0], [92.5, 4136.0], [92.6, 4136.0], [92.7, 4136.0], [92.8, 4136.0], [92.9, 4137.0], [93.0, 4137.0], [93.1, 4152.0], [93.2, 4176.0], [93.3, 4185.0], [93.4, 4185.0], [93.5, 4186.0], [93.6, 4186.0], [93.7, 4204.0], [93.8, 4216.0], [93.9, 4264.0], [94.0, 4288.0], [94.1, 4289.0], [94.2, 4289.0], [94.3, 4289.0], [94.4, 4300.0], [94.5, 4300.0], [94.6, 4301.0], [94.7, 4301.0], [94.8, 4301.0], [94.9, 4301.0], [95.0, 4302.0], [95.1, 4346.0], [95.2, 4348.0], [95.3, 4351.0], [95.4, 4351.0], [95.5, 4353.0], [95.6, 4353.0], [95.7, 4353.0], [95.8, 4358.0], [95.9, 4402.0], [96.0, 4402.0], [96.1, 4402.0], [96.2, 4402.0], [96.3, 4402.0], [96.4, 4402.0], [96.5, 4403.0], [96.6, 4403.0], [96.7, 4404.0], [96.8, 4404.0], [96.9, 4404.0], [97.0, 4404.0], [97.1, 4405.0], [97.2, 4411.0], [97.3, 4460.0], [97.4, 4460.0], [97.5, 4460.0], [97.6, 4460.0], [97.7, 4461.0], [97.8, 4461.0], [97.9, 4461.0], [98.0, 4474.0], [98.1, 4498.0], [98.2, 4503.0], [98.3, 4504.0], [98.4, 4504.0], [98.5, 4505.0], [98.6, 4520.0], [98.7, 4522.0], [98.8, 4580.0], [98.9, 4679.0], [99.0, 4689.0], [99.1, 4884.0], [99.2, 4885.0], [99.3, 4912.0], [99.4, 4914.0], [99.5, 4931.0], [99.6, 4933.0], [99.7, 4949.0], [99.8, 4998.0], [99.9, 5099.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 291.0, "series": [{"data": [[600.0, 17.0], [700.0, 74.0], [800.0, 49.0], [900.0, 41.0], [1000.0, 43.0], [1100.0, 10.0], [1200.0, 15.0], [1300.0, 10.0], [1400.0, 17.0], [1500.0, 27.0], [1600.0, 14.0], [1700.0, 29.0], [1800.0, 10.0], [1900.0, 3.0], [2000.0, 46.0], [2100.0, 55.0], [2200.0, 62.0], [2300.0, 95.0], [2400.0, 89.0], [2500.0, 81.0], [2600.0, 84.0], [2700.0, 99.0], [2800.0, 97.0], [2900.0, 55.0], [3000.0, 120.0], [3100.0, 137.0], [3200.0, 114.0], [3300.0, 129.0], [3400.0, 291.0], [3500.0, 144.0], [3700.0, 223.0], [3600.0, 203.0], [3800.0, 197.0], [3900.0, 201.0], [4000.0, 108.0], [4300.0, 49.0], [4200.0, 23.0], [4100.0, 121.0], [4500.0, 24.0], [4400.0, 75.0], [4600.0, 8.0], [4800.0, 6.0], [4900.0, 19.0], [5100.0, 1.0], [5000.0, 4.0], [5400.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 276.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3044.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 276.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3044.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.714285714285714, "minX": 1.78003764E12, "maxY": 98.6093841642229, "series": [{"data": [[1.78003776E12, 98.6093841642229], [1.78003764E12, 6.714285714285714], [1.78003782E12, 11.05], [1.7800377E12, 80.624685138539]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003782E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 727.5714285714286, "minX": 2.0, "maxY": 3899.5, "series": [{"data": [[2.0, 3480.0], [5.0, 2841.5], [6.0, 1131.0], [7.0, 2099.5], [8.0, 905.0], [9.0, 1892.2], [10.0, 803.0], [11.0, 1464.875], [12.0, 848.0], [13.0, 1683.6666666666667], [14.0, 1139.857142857143], [15.0, 727.5714285714286], [16.0, 1296.6666666666667], [18.0, 1113.923076923077], [19.0, 806.8333333333334], [20.0, 1181.5454545454545], [21.0, 730.4285714285714], [22.0, 854.6666666666666], [23.0, 776.4615384615385], [24.0, 1721.1000000000001], [25.0, 827.5], [26.0, 860.5714285714286], [27.0, 1345.6153846153848], [28.0, 841.5833333333334], [29.0, 872.8333333333333], [30.0, 871.7142857142858], [31.0, 917.2666666666668], [32.0, 1932.3999999999999], [33.0, 995.625], [34.0, 930.4444444444445], [35.0, 1038.0], [36.0, 1069.6666666666667], [37.0, 1064.5], [38.0, 1042.25], [39.0, 1047.7142857142856], [40.0, 1271.75], [41.0, 1274.4444444444443], [42.0, 1345.75], [43.0, 1401.4], [44.0, 1502.3], [45.0, 1548.8333333333335], [46.0, 1567.5], [47.0, 1735.7272727272727], [48.0, 1548.6875000000002], [49.0, 1693.75], [50.0, 2702.3999999999996], [51.0, 1641.9166666666667], [53.0, 1730.6874999999998], [52.0, 3676.5], [55.0, 2127.727272727273], [57.0, 2332.529411764706], [59.0, 2335.3076923076924], [60.0, 2148.214285714286], [62.0, 2470.4444444444443], [63.0, 2319.0], [64.0, 2172.4583333333335], [65.0, 1742.0], [67.0, 2129.4999999999995], [70.0, 2515.4736842105267], [72.0, 2471.214285714286], [73.0, 2461.2], [74.0, 2467.6666666666665], [77.0, 2471.4761904761904], [80.0, 2646.3103448275865], [81.0, 2216.0], [84.0, 2871.9999999999995], [87.0, 2788.5666666666675], [88.0, 2941.0], [91.0, 3063.72], [89.0, 3733.0], [93.0, 2797.0], [94.0, 3056.323529411766], [92.0, 3322.8750000000005], [98.0, 2938.783783783784], [99.0, 2207.0], [96.0, 3899.5], [100.0, 3512.542015133408]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[89.28584337349399, 3153.9015060240986]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 18.666666666666668, "minX": 1.78003764E12, "maxY": 6564.25, "series": [{"data": [[1.78003776E12, 6564.25], [1.78003764E12, 26.95], [1.78003782E12, 77.0], [1.7800377E12, 6113.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003776E12, 4546.666666666667], [1.78003764E12, 18.666666666666668], [1.78003782E12, 53.333333333333336], [1.7800377E12, 4234.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003782E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 976.7142857142857, "minX": 1.78003764E12, "maxY": 3496.8480938416433, "series": [{"data": [[1.78003776E12, 3496.8480938416433], [1.78003764E12, 976.7142857142857], [1.78003782E12, 3343.5499999999997], [1.7800377E12, 2792.8960957178865]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003782E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 975.9999999999999, "minX": 1.78003764E12, "maxY": 3496.8287390029363, "series": [{"data": [[1.78003776E12, 3496.8287390029363], [1.78003764E12, 975.9999999999999], [1.78003782E12, 3343.5], [1.7800377E12, 2792.8646095717827]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003782E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78003764E12, "maxY": 4.571428571428572, "series": [{"data": [[1.78003776E12, 0.051026392961876894], [1.78003764E12, 4.571428571428572], [1.78003782E12, 0.0], [1.7800377E12, 0.04974811083123401]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003782E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 673.0, "minX": 1.78003764E12, "maxY": 5428.0, "series": [{"data": [[1.78003776E12, 5428.0], [1.78003764E12, 1207.0], [1.78003782E12, 3492.0], [1.7800377E12, 5125.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003776E12, 1863.0], [1.78003764E12, 719.0], [1.78003782E12, 3102.0], [1.7800377E12, 673.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003776E12, 4131.0], [1.78003764E12, 1207.0], [1.78003782E12, 3490.8], [1.7800377E12, 4095.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003776E12, 4914.0], [1.78003764E12, 1207.0], [1.78003782E12, 3492.0], [1.7800377E12, 4504.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003776E12, 3597.0], [1.78003764E12, 1055.0], [1.78003782E12, 3390.0], [1.7800377E12, 3061.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003776E12, 4403.7], [1.78003764E12, 1207.0], [1.78003782E12, 3492.0], [1.7800377E12, 4205.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003782E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 769.0, "minX": 1.0, "maxY": 4402.0, "series": [{"data": [[32.0, 3415.0], [33.0, 2445.0], [35.0, 3729.0], [34.0, 3539.0], [37.0, 3467.0], [36.0, 3562.0], [39.0, 3494.0], [38.0, 3810.0], [40.0, 3611.0], [41.0, 3786.0], [45.0, 3428.0], [46.0, 3732.0], [49.0, 4402.0], [4.0, 2870.0], [5.0, 2777.0], [6.0, 996.0], [12.0, 775.5], [14.0, 1415.5], [1.0, 2852.0], [16.0, 2010.5], [19.0, 2299.0], [20.0, 3437.0], [21.0, 1963.0], [22.0, 1906.5], [23.0, 769.0], [24.0, 1236.0], [25.0, 3060.0], [27.0, 2167.0], [28.0, 1752.0], [29.0, 3602.0], [30.0, 3420.0], [31.0, 3686.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 769.0, "minX": 1.0, "maxY": 4402.0, "series": [{"data": [[32.0, 3415.0], [33.0, 2445.0], [35.0, 3729.0], [34.0, 3539.0], [37.0, 3467.0], [36.0, 3562.0], [39.0, 3494.0], [38.0, 3809.0], [40.0, 3610.5], [41.0, 3786.0], [45.0, 3428.0], [46.0, 3732.0], [49.0, 4402.0], [4.0, 2870.0], [5.0, 2777.0], [6.0, 996.0], [12.0, 775.0], [14.0, 1415.5], [1.0, 2851.5], [16.0, 2010.5], [19.0, 2299.0], [20.0, 3437.0], [21.0, 1963.0], [22.0, 1906.5], [23.0, 769.0], [24.0, 1236.0], [25.0, 3060.0], [27.0, 2167.0], [28.0, 1752.0], [29.0, 3602.0], [30.0, 3420.0], [31.0, 3686.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.78003764E12, "maxY": 27.983333333333334, "series": [{"data": [[1.78003776E12, 27.083333333333332], [1.78003764E12, 0.26666666666666666], [1.7800377E12, 27.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003776E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.78003764E12, "maxY": 28.416666666666668, "series": [{"data": [[1.78003776E12, 28.416666666666668], [1.78003764E12, 0.11666666666666667], [1.78003782E12, 0.3333333333333333], [1.7800377E12, 26.466666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003782E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.78003764E12, "maxY": 28.416666666666668, "series": [{"data": [[1.78003776E12, 28.416666666666668], [1.78003764E12, 0.11666666666666667], [1.78003782E12, 0.3333333333333333], [1.7800377E12, 26.466666666666665]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003782E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.78003764E12, "maxY": 28.416666666666668, "series": [{"data": [[1.78003776E12, 28.416666666666668], [1.78003764E12, 0.11666666666666667], [1.78003782E12, 0.3333333333333333], [1.7800377E12, 26.466666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003782E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

