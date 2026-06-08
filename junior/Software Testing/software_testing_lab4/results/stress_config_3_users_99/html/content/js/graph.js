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
        data: {"result": {"minY": 683.0, "minX": 0.0, "maxY": 5004.0, "series": [{"data": [[0.0, 683.0], [0.1, 695.0], [0.2, 700.0], [0.3, 702.0], [0.4, 713.0], [0.5, 716.0], [0.6, 721.0], [0.7, 725.0], [0.8, 726.0], [0.9, 727.0], [1.0, 731.0], [1.1, 734.0], [1.2, 742.0], [1.3, 744.0], [1.4, 753.0], [1.5, 756.0], [1.6, 756.0], [1.7, 758.0], [1.8, 760.0], [1.9, 761.0], [2.0, 768.0], [2.1, 774.0], [2.2, 780.0], [2.3, 789.0], [2.4, 790.0], [2.5, 795.0], [2.6, 797.0], [2.7, 807.0], [2.8, 811.0], [2.9, 819.0], [3.0, 819.0], [3.1, 822.0], [3.2, 838.0], [3.3, 839.0], [3.4, 847.0], [3.5, 848.0], [3.6, 852.0], [3.7, 857.0], [3.8, 866.0], [3.9, 869.0], [4.0, 875.0], [4.1, 877.0], [4.2, 886.0], [4.3, 893.0], [4.4, 901.0], [4.5, 902.0], [4.6, 911.0], [4.7, 913.0], [4.8, 919.0], [4.9, 928.0], [5.0, 931.0], [5.1, 945.0], [5.2, 952.0], [5.3, 961.0], [5.4, 969.0], [5.5, 975.0], [5.6, 978.0], [5.7, 991.0], [5.8, 1005.0], [5.9, 1005.0], [6.0, 1011.0], [6.1, 1019.0], [6.2, 1026.0], [6.3, 1041.0], [6.4, 1048.0], [6.5, 1063.0], [6.6, 1069.0], [6.7, 1073.0], [6.8, 1075.0], [6.9, 1082.0], [7.0, 1098.0], [7.1, 1112.0], [7.2, 1130.0], [7.3, 1136.0], [7.4, 1140.0], [7.5, 1144.0], [7.6, 1157.0], [7.7, 1169.0], [7.8, 1210.0], [7.9, 1222.0], [8.0, 1261.0], [8.1, 1270.0], [8.2, 1275.0], [8.3, 1294.0], [8.4, 1311.0], [8.5, 1335.0], [8.6, 1343.0], [8.7, 1351.0], [8.8, 1363.0], [8.9, 1370.0], [9.0, 1371.0], [9.1, 1393.0], [9.2, 1410.0], [9.3, 1484.0], [9.4, 1507.0], [9.5, 1565.0], [9.6, 1568.0], [9.7, 1600.0], [9.8, 1607.0], [9.9, 1659.0], [10.0, 1660.0], [10.1, 1670.0], [10.2, 1698.0], [10.3, 1732.0], [10.4, 1765.0], [10.5, 1785.0], [10.6, 1800.0], [10.7, 1802.0], [10.8, 1808.0], [10.9, 1808.0], [11.0, 1840.0], [11.1, 1847.0], [11.2, 1853.0], [11.3, 1890.0], [11.4, 1905.0], [11.5, 1923.0], [11.6, 1964.0], [11.7, 1982.0], [11.8, 2005.0], [11.9, 2007.0], [12.0, 2038.0], [12.1, 2089.0], [12.2, 2090.0], [12.3, 2090.0], [12.4, 2107.0], [12.5, 2109.0], [12.6, 2109.0], [12.7, 2112.0], [12.8, 2119.0], [12.9, 2127.0], [13.0, 2136.0], [13.1, 2148.0], [13.2, 2153.0], [13.3, 2160.0], [13.4, 2175.0], [13.5, 2185.0], [13.6, 2197.0], [13.7, 2198.0], [13.8, 2198.0], [13.9, 2201.0], [14.0, 2202.0], [14.1, 2206.0], [14.2, 2210.0], [14.3, 2211.0], [14.4, 2214.0], [14.5, 2219.0], [14.6, 2235.0], [14.7, 2243.0], [14.8, 2249.0], [14.9, 2250.0], [15.0, 2251.0], [15.1, 2252.0], [15.2, 2253.0], [15.3, 2266.0], [15.4, 2267.0], [15.5, 2270.0], [15.6, 2272.0], [15.7, 2272.0], [15.8, 2273.0], [15.9, 2273.0], [16.0, 2275.0], [16.1, 2276.0], [16.2, 2276.0], [16.3, 2278.0], [16.4, 2278.0], [16.5, 2279.0], [16.6, 2281.0], [16.7, 2282.0], [16.8, 2284.0], [16.9, 2286.0], [17.0, 2294.0], [17.1, 2299.0], [17.2, 2306.0], [17.3, 2311.0], [17.4, 2319.0], [17.5, 2319.0], [17.6, 2319.0], [17.7, 2319.0], [17.8, 2322.0], [17.9, 2329.0], [18.0, 2338.0], [18.1, 2338.0], [18.2, 2338.0], [18.3, 2338.0], [18.4, 2339.0], [18.5, 2345.0], [18.6, 2347.0], [18.7, 2354.0], [18.8, 2354.0], [18.9, 2355.0], [19.0, 2355.0], [19.1, 2370.0], [19.2, 2371.0], [19.3, 2374.0], [19.4, 2378.0], [19.5, 2384.0], [19.6, 2391.0], [19.7, 2394.0], [19.8, 2399.0], [19.9, 2404.0], [20.0, 2405.0], [20.1, 2415.0], [20.2, 2422.0], [20.3, 2426.0], [20.4, 2433.0], [20.5, 2446.0], [20.6, 2449.0], [20.7, 2457.0], [20.8, 2457.0], [20.9, 2458.0], [21.0, 2462.0], [21.1, 2469.0], [21.2, 2473.0], [21.3, 2475.0], [21.4, 2477.0], [21.5, 2479.0], [21.6, 2493.0], [21.7, 2493.0], [21.8, 2499.0], [21.9, 2499.0], [22.0, 2500.0], [22.1, 2502.0], [22.2, 2504.0], [22.3, 2514.0], [22.4, 2517.0], [22.5, 2518.0], [22.6, 2518.0], [22.7, 2525.0], [22.8, 2527.0], [22.9, 2527.0], [23.0, 2527.0], [23.1, 2533.0], [23.2, 2534.0], [23.3, 2536.0], [23.4, 2539.0], [23.5, 2540.0], [23.6, 2555.0], [23.7, 2557.0], [23.8, 2557.0], [23.9, 2558.0], [24.0, 2559.0], [24.1, 2559.0], [24.2, 2559.0], [24.3, 2561.0], [24.4, 2571.0], [24.5, 2575.0], [24.6, 2578.0], [24.7, 2578.0], [24.8, 2583.0], [24.9, 2583.0], [25.0, 2587.0], [25.1, 2592.0], [25.2, 2593.0], [25.3, 2610.0], [25.4, 2612.0], [25.5, 2612.0], [25.6, 2612.0], [25.7, 2613.0], [25.8, 2615.0], [25.9, 2620.0], [26.0, 2623.0], [26.1, 2624.0], [26.2, 2631.0], [26.3, 2638.0], [26.4, 2639.0], [26.5, 2640.0], [26.6, 2643.0], [26.7, 2643.0], [26.8, 2644.0], [26.9, 2652.0], [27.0, 2662.0], [27.1, 2662.0], [27.2, 2674.0], [27.3, 2675.0], [27.4, 2679.0], [27.5, 2689.0], [27.6, 2702.0], [27.7, 2709.0], [27.8, 2728.0], [27.9, 2729.0], [28.0, 2729.0], [28.1, 2739.0], [28.2, 2739.0], [28.3, 2750.0], [28.4, 2755.0], [28.5, 2756.0], [28.6, 2761.0], [28.7, 2762.0], [28.8, 2762.0], [28.9, 2762.0], [29.0, 2764.0], [29.1, 2765.0], [29.2, 2766.0], [29.3, 2766.0], [29.4, 2767.0], [29.5, 2768.0], [29.6, 2769.0], [29.7, 2777.0], [29.8, 2798.0], [29.9, 2798.0], [30.0, 2810.0], [30.1, 2817.0], [30.2, 2819.0], [30.3, 2820.0], [30.4, 2823.0], [30.5, 2823.0], [30.6, 2825.0], [30.7, 2827.0], [30.8, 2828.0], [30.9, 2829.0], [31.0, 2831.0], [31.1, 2833.0], [31.2, 2842.0], [31.3, 2844.0], [31.4, 2846.0], [31.5, 2870.0], [31.6, 2880.0], [31.7, 2888.0], [31.8, 2889.0], [31.9, 2893.0], [32.0, 2899.0], [32.1, 2908.0], [32.2, 2913.0], [32.3, 2917.0], [32.4, 2921.0], [32.5, 2921.0], [32.6, 2922.0], [32.7, 2927.0], [32.8, 2928.0], [32.9, 2932.0], [33.0, 2932.0], [33.1, 2933.0], [33.2, 2936.0], [33.3, 2937.0], [33.4, 2937.0], [33.5, 2939.0], [33.6, 2946.0], [33.7, 2960.0], [33.8, 2962.0], [33.9, 2962.0], [34.0, 2966.0], [34.1, 2974.0], [34.2, 2979.0], [34.3, 2981.0], [34.4, 2982.0], [34.5, 2982.0], [34.6, 2983.0], [34.7, 2983.0], [34.8, 2986.0], [34.9, 3021.0], [35.0, 3031.0], [35.1, 3031.0], [35.2, 3032.0], [35.3, 3037.0], [35.4, 3040.0], [35.5, 3044.0], [35.6, 3047.0], [35.7, 3049.0], [35.8, 3053.0], [35.9, 3054.0], [36.0, 3059.0], [36.1, 3061.0], [36.2, 3061.0], [36.3, 3062.0], [36.4, 3065.0], [36.5, 3067.0], [36.6, 3073.0], [36.7, 3079.0], [36.8, 3085.0], [36.9, 3090.0], [37.0, 3094.0], [37.1, 3100.0], [37.2, 3110.0], [37.3, 3112.0], [37.4, 3120.0], [37.5, 3120.0], [37.6, 3126.0], [37.7, 3142.0], [37.8, 3143.0], [37.9, 3144.0], [38.0, 3146.0], [38.1, 3147.0], [38.2, 3148.0], [38.3, 3148.0], [38.4, 3148.0], [38.5, 3148.0], [38.6, 3149.0], [38.7, 3169.0], [38.8, 3174.0], [38.9, 3194.0], [39.0, 3204.0], [39.1, 3214.0], [39.2, 3215.0], [39.3, 3215.0], [39.4, 3215.0], [39.5, 3215.0], [39.6, 3215.0], [39.7, 3215.0], [39.8, 3215.0], [39.9, 3216.0], [40.0, 3216.0], [40.1, 3216.0], [40.2, 3217.0], [40.3, 3218.0], [40.4, 3218.0], [40.5, 3218.0], [40.6, 3228.0], [40.7, 3231.0], [40.8, 3238.0], [40.9, 3242.0], [41.0, 3243.0], [41.1, 3243.0], [41.2, 3245.0], [41.3, 3245.0], [41.4, 3248.0], [41.5, 3248.0], [41.6, 3264.0], [41.7, 3269.0], [41.8, 3269.0], [41.9, 3269.0], [42.0, 3270.0], [42.1, 3271.0], [42.2, 3271.0], [42.3, 3272.0], [42.4, 3272.0], [42.5, 3272.0], [42.6, 3272.0], [42.7, 3272.0], [42.8, 3272.0], [42.9, 3272.0], [43.0, 3272.0], [43.1, 3273.0], [43.2, 3273.0], [43.3, 3273.0], [43.4, 3277.0], [43.5, 3279.0], [43.6, 3280.0], [43.7, 3280.0], [43.8, 3280.0], [43.9, 3280.0], [44.0, 3283.0], [44.1, 3290.0], [44.2, 3291.0], [44.3, 3292.0], [44.4, 3293.0], [44.5, 3294.0], [44.6, 3295.0], [44.7, 3304.0], [44.8, 3306.0], [44.9, 3307.0], [45.0, 3307.0], [45.1, 3307.0], [45.2, 3307.0], [45.3, 3307.0], [45.4, 3308.0], [45.5, 3311.0], [45.6, 3311.0], [45.7, 3313.0], [45.8, 3323.0], [45.9, 3325.0], [46.0, 3325.0], [46.1, 3328.0], [46.2, 3329.0], [46.3, 3330.0], [46.4, 3335.0], [46.5, 3337.0], [46.6, 3338.0], [46.7, 3342.0], [46.8, 3342.0], [46.9, 3343.0], [47.0, 3348.0], [47.1, 3349.0], [47.2, 3351.0], [47.3, 3352.0], [47.4, 3352.0], [47.5, 3352.0], [47.6, 3353.0], [47.7, 3353.0], [47.8, 3353.0], [47.9, 3353.0], [48.0, 3354.0], [48.1, 3354.0], [48.2, 3357.0], [48.3, 3358.0], [48.4, 3358.0], [48.5, 3359.0], [48.6, 3359.0], [48.7, 3359.0], [48.8, 3359.0], [48.9, 3363.0], [49.0, 3368.0], [49.1, 3369.0], [49.2, 3369.0], [49.3, 3369.0], [49.4, 3370.0], [49.5, 3370.0], [49.6, 3370.0], [49.7, 3371.0], [49.8, 3371.0], [49.9, 3371.0], [50.0, 3372.0], [50.1, 3372.0], [50.2, 3372.0], [50.3, 3375.0], [50.4, 3377.0], [50.5, 3379.0], [50.6, 3379.0], [50.7, 3379.0], [50.8, 3379.0], [50.9, 3380.0], [51.0, 3381.0], [51.1, 3382.0], [51.2, 3382.0], [51.3, 3383.0], [51.4, 3389.0], [51.5, 3391.0], [51.6, 3392.0], [51.7, 3393.0], [51.8, 3393.0], [51.9, 3393.0], [52.0, 3393.0], [52.1, 3394.0], [52.2, 3404.0], [52.3, 3404.0], [52.4, 3405.0], [52.5, 3405.0], [52.6, 3405.0], [52.7, 3412.0], [52.8, 3416.0], [52.9, 3416.0], [53.0, 3417.0], [53.1, 3417.0], [53.2, 3417.0], [53.3, 3417.0], [53.4, 3418.0], [53.5, 3418.0], [53.6, 3418.0], [53.7, 3418.0], [53.8, 3418.0], [53.9, 3419.0], [54.0, 3419.0], [54.1, 3425.0], [54.2, 3434.0], [54.3, 3434.0], [54.4, 3434.0], [54.5, 3435.0], [54.6, 3435.0], [54.7, 3435.0], [54.8, 3435.0], [54.9, 3439.0], [55.0, 3439.0], [55.1, 3439.0], [55.2, 3440.0], [55.3, 3444.0], [55.4, 3451.0], [55.5, 3451.0], [55.6, 3451.0], [55.7, 3451.0], [55.8, 3451.0], [55.9, 3452.0], [56.0, 3454.0], [56.1, 3455.0], [56.2, 3456.0], [56.3, 3464.0], [56.4, 3464.0], [56.5, 3465.0], [56.6, 3466.0], [56.7, 3467.0], [56.8, 3468.0], [56.9, 3478.0], [57.0, 3479.0], [57.1, 3479.0], [57.2, 3479.0], [57.3, 3480.0], [57.4, 3480.0], [57.5, 3480.0], [57.6, 3481.0], [57.7, 3481.0], [57.8, 3481.0], [57.9, 3481.0], [58.0, 3482.0], [58.1, 3483.0], [58.2, 3483.0], [58.3, 3483.0], [58.4, 3487.0], [58.5, 3487.0], [58.6, 3487.0], [58.7, 3487.0], [58.8, 3488.0], [58.9, 3488.0], [59.0, 3488.0], [59.1, 3488.0], [59.2, 3488.0], [59.3, 3488.0], [59.4, 3489.0], [59.5, 3489.0], [59.6, 3489.0], [59.7, 3490.0], [59.8, 3491.0], [59.9, 3502.0], [60.0, 3508.0], [60.1, 3508.0], [60.2, 3508.0], [60.3, 3522.0], [60.4, 3523.0], [60.5, 3523.0], [60.6, 3531.0], [60.7, 3535.0], [60.8, 3537.0], [60.9, 3538.0], [61.0, 3540.0], [61.1, 3542.0], [61.2, 3542.0], [61.3, 3542.0], [61.4, 3542.0], [61.5, 3542.0], [61.6, 3543.0], [61.7, 3543.0], [61.8, 3543.0], [61.9, 3543.0], [62.0, 3543.0], [62.1, 3543.0], [62.2, 3544.0], [62.3, 3544.0], [62.4, 3545.0], [62.5, 3545.0], [62.6, 3546.0], [62.7, 3546.0], [62.8, 3546.0], [62.9, 3546.0], [63.0, 3546.0], [63.1, 3547.0], [63.2, 3547.0], [63.3, 3548.0], [63.4, 3548.0], [63.5, 3548.0], [63.6, 3549.0], [63.7, 3549.0], [63.8, 3549.0], [63.9, 3549.0], [64.0, 3549.0], [64.1, 3550.0], [64.2, 3550.0], [64.3, 3551.0], [64.4, 3552.0], [64.5, 3552.0], [64.6, 3557.0], [64.7, 3557.0], [64.8, 3557.0], [64.9, 3558.0], [65.0, 3559.0], [65.1, 3560.0], [65.2, 3560.0], [65.3, 3560.0], [65.4, 3561.0], [65.5, 3565.0], [65.6, 3565.0], [65.7, 3565.0], [65.8, 3566.0], [65.9, 3566.0], [66.0, 3566.0], [66.1, 3572.0], [66.2, 3573.0], [66.3, 3573.0], [66.4, 3573.0], [66.5, 3573.0], [66.6, 3575.0], [66.7, 3581.0], [66.8, 3582.0], [66.9, 3582.0], [67.0, 3582.0], [67.1, 3582.0], [67.2, 3582.0], [67.3, 3582.0], [67.4, 3582.0], [67.5, 3582.0], [67.6, 3583.0], [67.7, 3583.0], [67.8, 3583.0], [67.9, 3583.0], [68.0, 3583.0], [68.1, 3583.0], [68.2, 3583.0], [68.3, 3583.0], [68.4, 3583.0], [68.5, 3583.0], [68.6, 3584.0], [68.7, 3584.0], [68.8, 3584.0], [68.9, 3584.0], [69.0, 3584.0], [69.1, 3584.0], [69.2, 3584.0], [69.3, 3585.0], [69.4, 3585.0], [69.5, 3585.0], [69.6, 3588.0], [69.7, 3590.0], [69.8, 3591.0], [69.9, 3591.0], [70.0, 3592.0], [70.1, 3595.0], [70.2, 3606.0], [70.3, 3606.0], [70.4, 3606.0], [70.5, 3607.0], [70.6, 3607.0], [70.7, 3608.0], [70.8, 3608.0], [70.9, 3611.0], [71.0, 3612.0], [71.1, 3614.0], [71.2, 3616.0], [71.3, 3616.0], [71.4, 3617.0], [71.5, 3617.0], [71.6, 3618.0], [71.7, 3618.0], [71.8, 3618.0], [71.9, 3619.0], [72.0, 3620.0], [72.1, 3621.0], [72.2, 3623.0], [72.3, 3625.0], [72.4, 3627.0], [72.5, 3635.0], [72.6, 3635.0], [72.7, 3636.0], [72.8, 3636.0], [72.9, 3636.0], [73.0, 3636.0], [73.1, 3636.0], [73.2, 3637.0], [73.3, 3646.0], [73.4, 3650.0], [73.5, 3655.0], [73.6, 3678.0], [73.7, 3679.0], [73.8, 3679.0], [73.9, 3679.0], [74.0, 3679.0], [74.1, 3679.0], [74.2, 3679.0], [74.3, 3680.0], [74.4, 3684.0], [74.5, 3685.0], [74.6, 3685.0], [74.7, 3685.0], [74.8, 3685.0], [74.9, 3685.0], [75.0, 3686.0], [75.1, 3686.0], [75.2, 3686.0], [75.3, 3686.0], [75.4, 3686.0], [75.5, 3686.0], [75.6, 3686.0], [75.7, 3687.0], [75.8, 3687.0], [75.9, 3688.0], [76.0, 3694.0], [76.1, 3699.0], [76.2, 3700.0], [76.3, 3701.0], [76.4, 3701.0], [76.5, 3701.0], [76.6, 3701.0], [76.7, 3704.0], [76.8, 3714.0], [76.9, 3714.0], [77.0, 3714.0], [77.1, 3716.0], [77.2, 3718.0], [77.3, 3718.0], [77.4, 3718.0], [77.5, 3718.0], [77.6, 3719.0], [77.7, 3719.0], [77.8, 3720.0], [77.9, 3735.0], [78.0, 3737.0], [78.1, 3738.0], [78.2, 3738.0], [78.3, 3739.0], [78.4, 3741.0], [78.5, 3748.0], [78.6, 3749.0], [78.7, 3750.0], [78.8, 3750.0], [78.9, 3750.0], [79.0, 3750.0], [79.1, 3750.0], [79.2, 3750.0], [79.3, 3751.0], [79.4, 3751.0], [79.5, 3752.0], [79.6, 3752.0], [79.7, 3753.0], [79.8, 3755.0], [79.9, 3758.0], [80.0, 3759.0], [80.1, 3761.0], [80.2, 3762.0], [80.3, 3762.0], [80.4, 3762.0], [80.5, 3762.0], [80.6, 3762.0], [80.7, 3769.0], [80.8, 3775.0], [80.9, 3775.0], [81.0, 3775.0], [81.1, 3776.0], [81.2, 3776.0], [81.3, 3776.0], [81.4, 3776.0], [81.5, 3776.0], [81.6, 3776.0], [81.7, 3776.0], [81.8, 3776.0], [81.9, 3777.0], [82.0, 3777.0], [82.1, 3777.0], [82.2, 3779.0], [82.3, 3780.0], [82.4, 3780.0], [82.5, 3780.0], [82.6, 3780.0], [82.7, 3780.0], [82.8, 3781.0], [82.9, 3784.0], [83.0, 3785.0], [83.1, 3786.0], [83.2, 3786.0], [83.3, 3787.0], [83.4, 3787.0], [83.5, 3787.0], [83.6, 3798.0], [83.7, 3798.0], [83.8, 3799.0], [83.9, 3810.0], [84.0, 3813.0], [84.1, 3817.0], [84.2, 3828.0], [84.3, 3828.0], [84.4, 3829.0], [84.5, 3831.0], [84.6, 3839.0], [84.7, 3840.0], [84.8, 3840.0], [84.9, 3840.0], [85.0, 3840.0], [85.1, 3840.0], [85.2, 3841.0], [85.3, 3841.0], [85.4, 3841.0], [85.5, 3841.0], [85.6, 3841.0], [85.7, 3842.0], [85.8, 3843.0], [85.9, 3846.0], [86.0, 3846.0], [86.1, 3847.0], [86.2, 3848.0], [86.3, 3852.0], [86.4, 3856.0], [86.5, 3857.0], [86.6, 3857.0], [86.7, 3857.0], [86.8, 3862.0], [86.9, 3864.0], [87.0, 3865.0], [87.1, 3865.0], [87.2, 3869.0], [87.3, 3870.0], [87.4, 3874.0], [87.5, 3874.0], [87.6, 3875.0], [87.7, 3875.0], [87.8, 3875.0], [87.9, 3876.0], [88.0, 3890.0], [88.1, 3890.0], [88.2, 3890.0], [88.3, 3890.0], [88.4, 3891.0], [88.5, 3891.0], [88.6, 3891.0], [88.7, 3891.0], [88.8, 3891.0], [88.9, 3891.0], [89.0, 3891.0], [89.1, 3891.0], [89.2, 3891.0], [89.3, 3892.0], [89.4, 3892.0], [89.5, 3892.0], [89.6, 3893.0], [89.7, 3895.0], [89.8, 3896.0], [89.9, 3896.0], [90.0, 3897.0], [90.1, 3898.0], [90.2, 3899.0], [90.3, 3899.0], [90.4, 3908.0], [90.5, 3909.0], [90.6, 3915.0], [90.7, 3916.0], [90.8, 3930.0], [90.9, 3931.0], [91.0, 3931.0], [91.1, 3931.0], [91.2, 3931.0], [91.3, 3932.0], [91.4, 3932.0], [91.5, 3969.0], [91.6, 3969.0], [91.7, 3973.0], [91.8, 3996.0], [91.9, 4005.0], [92.0, 4015.0], [92.1, 4016.0], [92.2, 4016.0], [92.3, 4016.0], [92.4, 4017.0], [92.5, 4034.0], [92.6, 4040.0], [92.7, 4040.0], [92.8, 4042.0], [92.9, 4042.0], [93.0, 4045.0], [93.1, 4047.0], [93.2, 4047.0], [93.3, 4071.0], [93.4, 4072.0], [93.5, 4073.0], [93.6, 4078.0], [93.7, 4085.0], [93.8, 4094.0], [93.9, 4094.0], [94.0, 4095.0], [94.1, 4095.0], [94.2, 4095.0], [94.3, 4095.0], [94.4, 4096.0], [94.5, 4096.0], [94.6, 4096.0], [94.7, 4096.0], [94.8, 4097.0], [94.9, 4101.0], [95.0, 4111.0], [95.1, 4111.0], [95.2, 4111.0], [95.3, 4111.0], [95.4, 4111.0], [95.5, 4112.0], [95.6, 4112.0], [95.7, 4112.0], [95.8, 4112.0], [95.9, 4112.0], [96.0, 4112.0], [96.1, 4113.0], [96.2, 4113.0], [96.3, 4113.0], [96.4, 4120.0], [96.5, 4120.0], [96.6, 4120.0], [96.7, 4158.0], [96.8, 4167.0], [96.9, 4170.0], [97.0, 4187.0], [97.1, 4188.0], [97.2, 4202.0], [97.3, 4203.0], [97.4, 4204.0], [97.5, 4206.0], [97.6, 4207.0], [97.7, 4208.0], [97.8, 4311.0], [97.9, 4352.0], [98.0, 4352.0], [98.1, 4405.0], [98.2, 4405.0], [98.3, 4406.0], [98.4, 4406.0], [98.5, 4406.0], [98.6, 4406.0], [98.7, 4406.0], [98.8, 4406.0], [98.9, 4439.0], [99.0, 4439.0], [99.1, 4439.0], [99.2, 4439.0], [99.3, 4443.0], [99.4, 4443.0], [99.5, 4472.0], [99.6, 4550.0], [99.7, 4986.0], [99.8, 4987.0], [99.9, 4989.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 345.0, "series": [{"data": [[600.0, 6.0], [700.0, 83.0], [800.0, 58.0], [900.0, 47.0], [1000.0, 42.0], [1100.0, 23.0], [1200.0, 22.0], [1300.0, 26.0], [1400.0, 6.0], [1500.0, 12.0], [1600.0, 19.0], [1700.0, 11.0], [1800.0, 26.0], [1900.0, 14.0], [2000.0, 19.0], [2100.0, 50.0], [2200.0, 110.0], [2300.0, 92.0], [2400.0, 71.0], [2500.0, 108.0], [2600.0, 80.0], [2700.0, 80.0], [2800.0, 68.0], [2900.0, 96.0], [3000.0, 74.0], [3100.0, 62.0], [3200.0, 192.0], [3300.0, 251.0], [3400.0, 259.0], [3500.0, 345.0], [3600.0, 201.0], [3700.0, 259.0], [3800.0, 216.0], [3900.0, 53.0], [4000.0, 100.0], [4100.0, 78.0], [4300.0, 9.0], [4200.0, 20.0], [4400.0, 51.0], [4500.0, 1.0], [4600.0, 2.0], [5000.0, 1.0], [4900.0, 10.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 314.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3039.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 314.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3039.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 21.278787878787885, "minX": 1.78003752E12, "maxY": 96.46747149564052, "series": [{"data": [[1.78003764E12, 96.46747149564052], [1.78003752E12, 21.278787878787885], [1.78003758E12, 87.78078962875671]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003764E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 728.75, "minX": 1.0, "maxY": 3502.0, "series": [{"data": [[2.0, 3378.0], [3.0, 3310.0], [5.0, 1183.5], [6.0, 2345.6], [7.0, 1607.3333333333335], [8.0, 1397.5], [9.0, 797.0], [10.0, 1481.4285714285716], [11.0, 1508.3333333333335], [12.0, 807.0], [13.0, 1460.4285714285713], [14.0, 836.6], [15.0, 1439.0], [16.0, 775.111111111111], [17.0, 1345.2857142857142], [18.0, 750.75], [19.0, 728.75], [20.0, 750.8333333333333], [21.0, 1318.8666666666666], [22.0, 823.625], [23.0, 732.5], [24.0, 1357.6999999999998], [25.0, 805.375], [26.0, 782.6923076923077], [27.0, 864.1666666666667], [28.0, 861.5], [29.0, 1545.5833333333333], [30.0, 906.0], [31.0, 902.8571428571428], [32.0, 892.909090909091], [33.0, 935.5], [34.0, 988.75], [35.0, 972.4545454545455], [36.0, 1005.5], [37.0, 1058.75], [38.0, 1038.7777777777778], [39.0, 1080.7857142857144], [40.0, 1295.0], [41.0, 1163.9285714285713], [42.0, 1139.4], [43.0, 1209.3636363636365], [44.0, 1348.8], [45.0, 1357.25], [46.0, 1371.923076923077], [47.0, 1563.2], [48.0, 1430.0], [49.0, 1609.625], [50.0, 1631.7777777777778], [51.0, 1608.3333333333333], [52.0, 1726.2222222222222], [53.0, 1675.0], [54.0, 1941.1], [55.0, 1829.5], [57.0, 2011.3636363636363], [58.0, 2022.4545454545453], [59.0, 1894.0], [60.0, 2093.1538461538466], [62.0, 2219.0], [64.0, 3085.9183673469397], [65.0, 2380.25], [66.0, 2179.8333333333335], [67.0, 2277.7333333333336], [68.0, 2524.833333333333], [69.0, 2285.1428571428573], [70.0, 1807.6], [72.0, 2394.75], [73.0, 2124.5], [74.0, 2434.157894736842], [75.0, 2211.0], [77.0, 2456.1500000000005], [79.0, 2554.4210526315787], [80.0, 2371.2], [82.0, 2485.7826086956516], [85.0, 2721.416666666667], [86.0, 2561.0], [88.0, 2620.0], [92.0, 2918.966666666666], [95.0, 2951.896551724137], [99.0, 3441.8788819875776], [1.0, 3502.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[88.37101103489384, 3077.917685654636]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 99.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 440.0, "minX": 1.78003752E12, "maxY": 6533.45, "series": [{"data": [[1.78003764E12, 5740.35], [1.78003752E12, 635.25], [1.78003758E12, 6533.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003764E12, 3976.0], [1.78003752E12, 440.0], [1.78003758E12, 4525.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003764E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.1757575757575, "minX": 1.78003752E12, "maxY": 3485.385647216637, "series": [{"data": [[1.78003764E12, 3485.385647216637], [1.78003752E12, 815.1757575757575], [1.78003758E12, 2939.9198585739523]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003764E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 815.0303030303033, "minX": 1.78003752E12, "maxY": 3485.3742454728376, "series": [{"data": [[1.78003764E12, 3485.3742454728376], [1.78003752E12, 815.0303030303033], [1.78003758E12, 2939.875073659397]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003764E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.041838538597525066, "minX": 1.78003752E12, "maxY": 0.32121212121212117, "series": [{"data": [[1.78003764E12, 0.06170355466130113], [1.78003752E12, 0.32121212121212117], [1.78003758E12, 0.041838538597525066]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003764E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 683.0, "minX": 1.78003752E12, "maxY": 5004.0, "series": [{"data": [[1.78003764E12, 5004.0], [1.78003752E12, 1204.0], [1.78003758E12, 4415.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003764E12, 2118.0], [1.78003752E12, 683.0], [1.78003758E12, 857.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003764E12, 4111.0], [1.78003752E12, 934.6], [1.78003758E12, 3739.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003764E12, 4480.0799999999945], [1.78003752E12, 1176.94], [1.78003758E12, 4103.34]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003764E12, 3552.0], [1.78003752E12, 792.0], [1.78003758E12, 3271.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003764E12, 4208.0], [1.78003752E12, 1034.6999999999998], [1.78003758E12, 3798.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003764E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 726.0, "minX": 1.0, "maxY": 3891.0, "series": [{"data": [[32.0, 919.0], [33.0, 3369.0], [34.0, 3547.0], [35.0, 3549.0], [37.0, 3061.0], [36.0, 3815.5], [38.0, 3605.0], [39.0, 3699.0], [40.0, 3359.0], [45.0, 3508.0], [44.0, 3891.0], [3.0, 2378.0], [58.0, 3392.5], [4.0, 2491.0], [69.0, 3329.0], [5.0, 2983.0], [6.0, 2236.5], [12.0, 792.0], [1.0, 2055.0], [21.0, 2203.0], [22.0, 1290.0], [23.0, 2319.0], [24.0, 2372.0], [25.0, 726.0], [26.0, 2006.0], [27.0, 2536.0], [28.0, 1136.0], [29.0, 2914.0], [30.0, 3305.5], [31.0, 3248.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 69.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 726.0, "minX": 1.0, "maxY": 3891.0, "series": [{"data": [[32.0, 919.0], [33.0, 3369.0], [34.0, 3547.0], [35.0, 3549.0], [37.0, 3061.0], [36.0, 3815.5], [38.0, 3605.0], [39.0, 3699.0], [40.0, 3359.0], [45.0, 3508.0], [44.0, 3891.0], [3.0, 2378.0], [58.0, 3392.5], [4.0, 2491.0], [69.0, 3329.0], [5.0, 2983.0], [6.0, 2236.5], [12.0, 792.0], [1.0, 2053.0], [21.0, 2203.0], [22.0, 1290.0], [23.0, 2319.0], [24.0, 2372.0], [25.0, 726.0], [26.0, 2006.0], [27.0, 2536.0], [28.0, 1136.0], [29.0, 2914.0], [30.0, 3305.5], [31.0, 3248.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 69.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.216666666666667, "minX": 1.78003752E12, "maxY": 29.4, "series": [{"data": [[1.78003764E12, 23.266666666666666], [1.78003752E12, 3.216666666666667], [1.78003758E12, 29.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003764E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.78003752E12, "maxY": 28.283333333333335, "series": [{"data": [[1.78003764E12, 24.85], [1.78003752E12, 2.75], [1.78003758E12, 28.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003764E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.78003752E12, "maxY": 28.283333333333335, "series": [{"data": [[1.78003764E12, 24.85], [1.78003752E12, 2.75], [1.78003758E12, 28.283333333333335]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003764E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.78003752E12, "maxY": 28.283333333333335, "series": [{"data": [[1.78003764E12, 24.85], [1.78003752E12, 2.75], [1.78003758E12, 28.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003764E12, "title": "Total Transactions Per Second"}},
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

