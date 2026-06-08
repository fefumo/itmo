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
        data: {"result": {"minY": 671.0, "minX": 0.0, "maxY": 5333.0, "series": [{"data": [[0.0, 671.0], [0.1, 686.0], [0.2, 702.0], [0.3, 714.0], [0.4, 715.0], [0.5, 718.0], [0.6, 724.0], [0.7, 724.0], [0.8, 735.0], [0.9, 735.0], [1.0, 737.0], [1.1, 737.0], [1.2, 741.0], [1.3, 743.0], [1.4, 753.0], [1.5, 755.0], [1.6, 767.0], [1.7, 770.0], [1.8, 774.0], [1.9, 774.0], [2.0, 782.0], [2.1, 783.0], [2.2, 787.0], [2.3, 792.0], [2.4, 796.0], [2.5, 797.0], [2.6, 800.0], [2.7, 812.0], [2.8, 818.0], [2.9, 818.0], [3.0, 821.0], [3.1, 830.0], [3.2, 842.0], [3.3, 844.0], [3.4, 844.0], [3.5, 855.0], [3.6, 856.0], [3.7, 858.0], [3.8, 868.0], [3.9, 868.0], [4.0, 879.0], [4.1, 885.0], [4.2, 885.0], [4.3, 891.0], [4.4, 900.0], [4.5, 909.0], [4.6, 910.0], [4.7, 915.0], [4.8, 916.0], [4.9, 925.0], [5.0, 931.0], [5.1, 937.0], [5.2, 943.0], [5.3, 944.0], [5.4, 949.0], [5.5, 960.0], [5.6, 973.0], [5.7, 990.0], [5.8, 1016.0], [5.9, 1018.0], [6.0, 1044.0], [6.1, 1045.0], [6.2, 1055.0], [6.3, 1064.0], [6.4, 1083.0], [6.5, 1096.0], [6.6, 1111.0], [6.7, 1134.0], [6.8, 1148.0], [6.9, 1154.0], [7.0, 1168.0], [7.1, 1189.0], [7.2, 1228.0], [7.3, 1266.0], [7.4, 1275.0], [7.5, 1288.0], [7.6, 1305.0], [7.7, 1318.0], [7.8, 1349.0], [7.9, 1365.0], [8.0, 1380.0], [8.1, 1401.0], [8.2, 1408.0], [8.3, 1434.0], [8.4, 1449.0], [8.5, 1458.0], [8.6, 1468.0], [8.7, 1498.0], [8.8, 1499.0], [8.9, 1526.0], [9.0, 1538.0], [9.1, 1569.0], [9.2, 1574.0], [9.3, 1613.0], [9.4, 1644.0], [9.5, 1682.0], [9.6, 1735.0], [9.7, 1771.0], [9.8, 1794.0], [9.9, 1892.0], [10.0, 1892.0], [10.1, 1908.0], [10.2, 1947.0], [10.3, 1948.0], [10.4, 1985.0], [10.5, 1986.0], [10.6, 1993.0], [10.7, 2046.0], [10.8, 2046.0], [10.9, 2058.0], [11.0, 2061.0], [11.1, 2070.0], [11.2, 2074.0], [11.3, 2074.0], [11.4, 2088.0], [11.5, 2089.0], [11.6, 2099.0], [11.7, 2109.0], [11.8, 2110.0], [11.9, 2124.0], [12.0, 2150.0], [12.1, 2150.0], [12.2, 2151.0], [12.3, 2151.0], [12.4, 2163.0], [12.5, 2165.0], [12.6, 2181.0], [12.7, 2203.0], [12.8, 2207.0], [12.9, 2214.0], [13.0, 2232.0], [13.1, 2232.0], [13.2, 2237.0], [13.3, 2253.0], [13.4, 2259.0], [13.5, 2271.0], [13.6, 2279.0], [13.7, 2288.0], [13.8, 2289.0], [13.9, 2300.0], [14.0, 2311.0], [14.1, 2312.0], [14.2, 2328.0], [14.3, 2329.0], [14.4, 2329.0], [14.5, 2342.0], [14.6, 2343.0], [14.7, 2350.0], [14.8, 2354.0], [14.9, 2354.0], [15.0, 2354.0], [15.1, 2354.0], [15.2, 2355.0], [15.3, 2355.0], [15.4, 2358.0], [15.5, 2367.0], [15.6, 2369.0], [15.7, 2370.0], [15.8, 2374.0], [15.9, 2374.0], [16.0, 2375.0], [16.1, 2391.0], [16.2, 2394.0], [16.3, 2394.0], [16.4, 2394.0], [16.5, 2397.0], [16.6, 2404.0], [16.7, 2410.0], [16.8, 2411.0], [16.9, 2415.0], [17.0, 2415.0], [17.1, 2423.0], [17.2, 2423.0], [17.3, 2426.0], [17.4, 2432.0], [17.5, 2433.0], [17.6, 2442.0], [17.7, 2443.0], [17.8, 2447.0], [17.9, 2447.0], [18.0, 2455.0], [18.1, 2456.0], [18.2, 2456.0], [18.3, 2457.0], [18.4, 2457.0], [18.5, 2457.0], [18.6, 2458.0], [18.7, 2460.0], [18.8, 2470.0], [18.9, 2471.0], [19.0, 2471.0], [19.1, 2472.0], [19.2, 2477.0], [19.3, 2477.0], [19.4, 2482.0], [19.5, 2491.0], [19.6, 2493.0], [19.7, 2499.0], [19.8, 2501.0], [19.9, 2501.0], [20.0, 2502.0], [20.1, 2512.0], [20.2, 2530.0], [20.3, 2532.0], [20.4, 2533.0], [20.5, 2533.0], [20.6, 2533.0], [20.7, 2533.0], [20.8, 2534.0], [20.9, 2536.0], [21.0, 2539.0], [21.1, 2539.0], [21.2, 2548.0], [21.3, 2555.0], [21.4, 2555.0], [21.5, 2556.0], [21.6, 2556.0], [21.7, 2556.0], [21.8, 2557.0], [21.9, 2558.0], [22.0, 2559.0], [22.1, 2560.0], [22.2, 2560.0], [22.3, 2560.0], [22.4, 2560.0], [22.5, 2560.0], [22.6, 2561.0], [22.7, 2562.0], [22.8, 2563.0], [22.9, 2569.0], [23.0, 2571.0], [23.1, 2577.0], [23.2, 2582.0], [23.3, 2583.0], [23.4, 2586.0], [23.5, 2586.0], [23.6, 2588.0], [23.7, 2594.0], [23.8, 2599.0], [23.9, 2606.0], [24.0, 2606.0], [24.1, 2607.0], [24.2, 2608.0], [24.3, 2610.0], [24.4, 2611.0], [24.5, 2618.0], [24.6, 2623.0], [24.7, 2636.0], [24.8, 2647.0], [24.9, 2649.0], [25.0, 2649.0], [25.1, 2659.0], [25.2, 2661.0], [25.3, 2661.0], [25.4, 2661.0], [25.5, 2662.0], [25.6, 2662.0], [25.7, 2663.0], [25.8, 2663.0], [25.9, 2668.0], [26.0, 2669.0], [26.1, 2669.0], [26.2, 2675.0], [26.3, 2680.0], [26.4, 2685.0], [26.5, 2692.0], [26.6, 2693.0], [26.7, 2696.0], [26.8, 2696.0], [26.9, 2697.0], [27.0, 2699.0], [27.1, 2700.0], [27.2, 2703.0], [27.3, 2708.0], [27.4, 2710.0], [27.5, 2720.0], [27.6, 2722.0], [27.7, 2722.0], [27.8, 2723.0], [27.9, 2725.0], [28.0, 2726.0], [28.1, 2727.0], [28.2, 2727.0], [28.3, 2730.0], [28.4, 2732.0], [28.5, 2741.0], [28.6, 2741.0], [28.7, 2741.0], [28.8, 2743.0], [28.9, 2752.0], [29.0, 2763.0], [29.1, 2764.0], [29.2, 2764.0], [29.3, 2764.0], [29.4, 2764.0], [29.5, 2765.0], [29.6, 2765.0], [29.7, 2765.0], [29.8, 2766.0], [29.9, 2766.0], [30.0, 2766.0], [30.1, 2767.0], [30.2, 2767.0], [30.3, 2767.0], [30.4, 2768.0], [30.5, 2768.0], [30.6, 2768.0], [30.7, 2768.0], [30.8, 2769.0], [30.9, 2769.0], [31.0, 2769.0], [31.1, 2769.0], [31.2, 2771.0], [31.3, 2780.0], [31.4, 2783.0], [31.5, 2787.0], [31.6, 2787.0], [31.7, 2787.0], [31.8, 2787.0], [31.9, 2787.0], [32.0, 2796.0], [32.1, 2798.0], [32.2, 2798.0], [32.3, 2800.0], [32.4, 2810.0], [32.5, 2810.0], [32.6, 2811.0], [32.7, 2812.0], [32.8, 2818.0], [32.9, 2827.0], [33.0, 2838.0], [33.1, 2838.0], [33.2, 2845.0], [33.3, 2849.0], [33.4, 2850.0], [33.5, 2850.0], [33.6, 2850.0], [33.7, 2850.0], [33.8, 2850.0], [33.9, 2851.0], [34.0, 2851.0], [34.1, 2852.0], [34.2, 2854.0], [34.3, 2859.0], [34.4, 2860.0], [34.5, 2860.0], [34.6, 2861.0], [34.7, 2863.0], [34.8, 2867.0], [34.9, 2875.0], [35.0, 2877.0], [35.1, 2883.0], [35.2, 2885.0], [35.3, 2886.0], [35.4, 2886.0], [35.5, 2900.0], [35.6, 2902.0], [35.7, 2931.0], [35.8, 2934.0], [35.9, 2943.0], [36.0, 2944.0], [36.1, 2949.0], [36.2, 2960.0], [36.3, 2966.0], [36.4, 2983.0], [36.5, 2998.0], [36.6, 3005.0], [36.7, 3006.0], [36.8, 3014.0], [36.9, 3040.0], [37.0, 3040.0], [37.1, 3041.0], [37.2, 3041.0], [37.3, 3041.0], [37.4, 3084.0], [37.5, 3084.0], [37.6, 3116.0], [37.7, 3116.0], [37.8, 3117.0], [37.9, 3135.0], [38.0, 3135.0], [38.1, 3136.0], [38.2, 3138.0], [38.3, 3139.0], [38.4, 3139.0], [38.5, 3142.0], [38.6, 3142.0], [38.7, 3143.0], [38.8, 3145.0], [38.9, 3145.0], [39.0, 3145.0], [39.1, 3168.0], [39.2, 3183.0], [39.3, 3184.0], [39.4, 3198.0], [39.5, 3198.0], [39.6, 3198.0], [39.7, 3199.0], [39.8, 3200.0], [39.9, 3210.0], [40.0, 3245.0], [40.1, 3246.0], [40.2, 3246.0], [40.3, 3246.0], [40.4, 3248.0], [40.5, 3252.0], [40.6, 3253.0], [40.7, 3253.0], [40.8, 3257.0], [40.9, 3259.0], [41.0, 3266.0], [41.1, 3267.0], [41.2, 3268.0], [41.3, 3269.0], [41.4, 3269.0], [41.5, 3271.0], [41.6, 3272.0], [41.7, 3272.0], [41.8, 3275.0], [41.9, 3290.0], [42.0, 3291.0], [42.1, 3291.0], [42.2, 3291.0], [42.3, 3291.0], [42.4, 3292.0], [42.5, 3293.0], [42.6, 3294.0], [42.7, 3294.0], [42.8, 3294.0], [42.9, 3294.0], [43.0, 3295.0], [43.1, 3303.0], [43.2, 3303.0], [43.3, 3303.0], [43.4, 3305.0], [43.5, 3311.0], [43.6, 3328.0], [43.7, 3328.0], [43.8, 3328.0], [43.9, 3329.0], [44.0, 3338.0], [44.1, 3340.0], [44.2, 3341.0], [44.3, 3341.0], [44.4, 3344.0], [44.5, 3345.0], [44.6, 3346.0], [44.7, 3346.0], [44.8, 3347.0], [44.9, 3347.0], [45.0, 3349.0], [45.1, 3349.0], [45.2, 3349.0], [45.3, 3350.0], [45.4, 3352.0], [45.5, 3361.0], [45.6, 3362.0], [45.7, 3362.0], [45.8, 3370.0], [45.9, 3370.0], [46.0, 3370.0], [46.1, 3371.0], [46.2, 3385.0], [46.3, 3388.0], [46.4, 3388.0], [46.5, 3389.0], [46.6, 3389.0], [46.7, 3398.0], [46.8, 3404.0], [46.9, 3404.0], [47.0, 3404.0], [47.1, 3404.0], [47.2, 3404.0], [47.3, 3404.0], [47.4, 3408.0], [47.5, 3408.0], [47.6, 3409.0], [47.7, 3409.0], [47.8, 3414.0], [47.9, 3420.0], [48.0, 3421.0], [48.1, 3424.0], [48.2, 3438.0], [48.3, 3445.0], [48.4, 3448.0], [48.5, 3449.0], [48.6, 3450.0], [48.7, 3450.0], [48.8, 3451.0], [48.9, 3451.0], [49.0, 3451.0], [49.1, 3451.0], [49.2, 3451.0], [49.3, 3451.0], [49.4, 3452.0], [49.5, 3452.0], [49.6, 3452.0], [49.7, 3452.0], [49.8, 3461.0], [49.9, 3463.0], [50.0, 3469.0], [50.1, 3471.0], [50.2, 3474.0], [50.3, 3475.0], [50.4, 3475.0], [50.5, 3475.0], [50.6, 3476.0], [50.7, 3477.0], [50.8, 3480.0], [50.9, 3481.0], [51.0, 3481.0], [51.1, 3481.0], [51.2, 3481.0], [51.3, 3481.0], [51.4, 3492.0], [51.5, 3498.0], [51.6, 3499.0], [51.7, 3499.0], [51.8, 3532.0], [51.9, 3535.0], [52.0, 3536.0], [52.1, 3536.0], [52.2, 3536.0], [52.3, 3537.0], [52.4, 3537.0], [52.5, 3537.0], [52.6, 3537.0], [52.7, 3539.0], [52.8, 3540.0], [52.9, 3543.0], [53.0, 3546.0], [53.1, 3547.0], [53.2, 3548.0], [53.3, 3549.0], [53.4, 3549.0], [53.5, 3549.0], [53.6, 3550.0], [53.7, 3551.0], [53.8, 3552.0], [53.9, 3552.0], [54.0, 3552.0], [54.1, 3552.0], [54.2, 3553.0], [54.3, 3553.0], [54.4, 3553.0], [54.5, 3553.0], [54.6, 3554.0], [54.7, 3554.0], [54.8, 3554.0], [54.9, 3561.0], [55.0, 3569.0], [55.1, 3570.0], [55.2, 3570.0], [55.3, 3570.0], [55.4, 3571.0], [55.5, 3571.0], [55.6, 3580.0], [55.7, 3581.0], [55.8, 3582.0], [55.9, 3582.0], [56.0, 3582.0], [56.1, 3582.0], [56.2, 3582.0], [56.3, 3582.0], [56.4, 3583.0], [56.5, 3583.0], [56.6, 3583.0], [56.7, 3583.0], [56.8, 3583.0], [56.9, 3583.0], [57.0, 3583.0], [57.1, 3583.0], [57.2, 3583.0], [57.3, 3583.0], [57.4, 3584.0], [57.5, 3584.0], [57.6, 3585.0], [57.7, 3586.0], [57.8, 3586.0], [57.9, 3587.0], [58.0, 3596.0], [58.1, 3597.0], [58.2, 3597.0], [58.3, 3597.0], [58.4, 3597.0], [58.5, 3597.0], [58.6, 3614.0], [58.7, 3619.0], [58.8, 3620.0], [58.9, 3620.0], [59.0, 3620.0], [59.1, 3621.0], [59.2, 3621.0], [59.3, 3621.0], [59.4, 3626.0], [59.5, 3626.0], [59.6, 3629.0], [59.7, 3630.0], [59.8, 3631.0], [59.9, 3632.0], [60.0, 3632.0], [60.1, 3639.0], [60.2, 3640.0], [60.3, 3642.0], [60.4, 3643.0], [60.5, 3644.0], [60.6, 3644.0], [60.7, 3644.0], [60.8, 3646.0], [60.9, 3653.0], [61.0, 3654.0], [61.1, 3655.0], [61.2, 3655.0], [61.3, 3656.0], [61.4, 3657.0], [61.5, 3657.0], [61.6, 3660.0], [61.7, 3660.0], [61.8, 3661.0], [61.9, 3662.0], [62.0, 3662.0], [62.1, 3663.0], [62.2, 3666.0], [62.3, 3666.0], [62.4, 3666.0], [62.5, 3668.0], [62.6, 3675.0], [62.7, 3679.0], [62.8, 3680.0], [62.9, 3680.0], [63.0, 3681.0], [63.1, 3682.0], [63.2, 3683.0], [63.3, 3684.0], [63.4, 3684.0], [63.5, 3684.0], [63.6, 3684.0], [63.7, 3684.0], [63.8, 3685.0], [63.9, 3685.0], [64.0, 3685.0], [64.1, 3685.0], [64.2, 3685.0], [64.3, 3685.0], [64.4, 3685.0], [64.5, 3685.0], [64.6, 3685.0], [64.7, 3685.0], [64.8, 3686.0], [64.9, 3686.0], [65.0, 3686.0], [65.1, 3686.0], [65.2, 3686.0], [65.3, 3686.0], [65.4, 3687.0], [65.5, 3687.0], [65.6, 3687.0], [65.7, 3688.0], [65.8, 3688.0], [65.9, 3689.0], [66.0, 3689.0], [66.1, 3692.0], [66.2, 3692.0], [66.3, 3693.0], [66.4, 3693.0], [66.5, 3693.0], [66.6, 3700.0], [66.7, 3718.0], [66.8, 3720.0], [66.9, 3721.0], [67.0, 3723.0], [67.1, 3725.0], [67.2, 3730.0], [67.3, 3730.0], [67.4, 3732.0], [67.5, 3744.0], [67.6, 3745.0], [67.7, 3747.0], [67.8, 3752.0], [67.9, 3753.0], [68.0, 3753.0], [68.1, 3753.0], [68.2, 3753.0], [68.3, 3753.0], [68.4, 3754.0], [68.5, 3767.0], [68.6, 3773.0], [68.7, 3773.0], [68.8, 3774.0], [68.9, 3774.0], [69.0, 3774.0], [69.1, 3774.0], [69.2, 3775.0], [69.3, 3779.0], [69.4, 3779.0], [69.5, 3780.0], [69.6, 3780.0], [69.7, 3780.0], [69.8, 3780.0], [69.9, 3785.0], [70.0, 3785.0], [70.1, 3785.0], [70.2, 3785.0], [70.3, 3785.0], [70.4, 3786.0], [70.5, 3787.0], [70.6, 3787.0], [70.7, 3787.0], [70.8, 3787.0], [70.9, 3787.0], [71.0, 3787.0], [71.1, 3788.0], [71.2, 3788.0], [71.3, 3788.0], [71.4, 3788.0], [71.5, 3788.0], [71.6, 3788.0], [71.7, 3789.0], [71.8, 3789.0], [71.9, 3789.0], [72.0, 3789.0], [72.1, 3790.0], [72.2, 3790.0], [72.3, 3790.0], [72.4, 3796.0], [72.5, 3797.0], [72.6, 3797.0], [72.7, 3797.0], [72.8, 3797.0], [72.9, 3797.0], [73.0, 3806.0], [73.1, 3807.0], [73.2, 3807.0], [73.3, 3808.0], [73.4, 3808.0], [73.5, 3808.0], [73.6, 3809.0], [73.7, 3819.0], [73.8, 3828.0], [73.9, 3828.0], [74.0, 3828.0], [74.1, 3829.0], [74.2, 3829.0], [74.3, 3841.0], [74.4, 3842.0], [74.5, 3843.0], [74.6, 3844.0], [74.7, 3844.0], [74.8, 3844.0], [74.9, 3845.0], [75.0, 3845.0], [75.1, 3861.0], [75.2, 3862.0], [75.3, 3866.0], [75.4, 3870.0], [75.5, 3871.0], [75.6, 3871.0], [75.7, 3871.0], [75.8, 3871.0], [75.9, 3873.0], [76.0, 3877.0], [76.1, 3877.0], [76.2, 3877.0], [76.3, 3877.0], [76.4, 3878.0], [76.5, 3878.0], [76.6, 3881.0], [76.7, 3888.0], [76.8, 3888.0], [76.9, 3888.0], [77.0, 3889.0], [77.1, 3889.0], [77.2, 3889.0], [77.3, 3890.0], [77.4, 3890.0], [77.5, 3890.0], [77.6, 3890.0], [77.7, 3890.0], [77.8, 3890.0], [77.9, 3890.0], [78.0, 3890.0], [78.1, 3890.0], [78.2, 3890.0], [78.3, 3891.0], [78.4, 3891.0], [78.5, 3891.0], [78.6, 3891.0], [78.7, 3891.0], [78.8, 3891.0], [78.9, 3891.0], [79.0, 3891.0], [79.1, 3891.0], [79.2, 3891.0], [79.3, 3891.0], [79.4, 3891.0], [79.5, 3891.0], [79.6, 3891.0], [79.7, 3892.0], [79.8, 3892.0], [79.9, 3892.0], [80.0, 3892.0], [80.1, 3892.0], [80.2, 3892.0], [80.3, 3892.0], [80.4, 3892.0], [80.5, 3892.0], [80.6, 3892.0], [80.7, 3892.0], [80.8, 3893.0], [80.9, 3893.0], [81.0, 3894.0], [81.1, 3895.0], [81.2, 3896.0], [81.3, 3896.0], [81.4, 3897.0], [81.5, 3897.0], [81.6, 3897.0], [81.7, 3900.0], [81.8, 3901.0], [81.9, 3928.0], [82.0, 3928.0], [82.1, 3929.0], [82.2, 3930.0], [82.3, 3934.0], [82.4, 3936.0], [82.5, 3936.0], [82.6, 3937.0], [82.7, 3938.0], [82.8, 3938.0], [82.9, 3938.0], [83.0, 3938.0], [83.1, 3945.0], [83.2, 3945.0], [83.3, 3945.0], [83.4, 3945.0], [83.5, 3947.0], [83.6, 3947.0], [83.7, 3949.0], [83.8, 3971.0], [83.9, 3972.0], [84.0, 3972.0], [84.1, 3973.0], [84.2, 3973.0], [84.3, 3973.0], [84.4, 3974.0], [84.5, 3987.0], [84.6, 3987.0], [84.7, 3988.0], [84.8, 3988.0], [84.9, 3989.0], [85.0, 3989.0], [85.1, 3989.0], [85.2, 3992.0], [85.3, 3992.0], [85.4, 3993.0], [85.5, 3993.0], [85.6, 3993.0], [85.7, 3993.0], [85.8, 3993.0], [85.9, 3994.0], [86.0, 3994.0], [86.1, 3994.0], [86.2, 3994.0], [86.3, 3994.0], [86.4, 3994.0], [86.5, 3995.0], [86.6, 3995.0], [86.7, 3995.0], [86.8, 3996.0], [86.9, 3997.0], [87.0, 3997.0], [87.1, 3997.0], [87.2, 3997.0], [87.3, 3998.0], [87.4, 3999.0], [87.5, 3999.0], [87.6, 4011.0], [87.7, 4042.0], [87.8, 4046.0], [87.9, 4046.0], [88.0, 4046.0], [88.1, 4046.0], [88.2, 4047.0], [88.3, 4047.0], [88.4, 4065.0], [88.5, 4073.0], [88.6, 4078.0], [88.7, 4079.0], [88.8, 4079.0], [88.9, 4088.0], [89.0, 4088.0], [89.1, 4089.0], [89.2, 4090.0], [89.3, 4090.0], [89.4, 4090.0], [89.5, 4095.0], [89.6, 4095.0], [89.7, 4096.0], [89.8, 4096.0], [89.9, 4096.0], [90.0, 4096.0], [90.1, 4096.0], [90.2, 4096.0], [90.3, 4097.0], [90.4, 4097.0], [90.5, 4097.0], [90.6, 4098.0], [90.7, 4105.0], [90.8, 4112.0], [90.9, 4113.0], [91.0, 4113.0], [91.1, 4157.0], [91.2, 4158.0], [91.3, 4158.0], [91.4, 4158.0], [91.5, 4158.0], [91.6, 4158.0], [91.7, 4162.0], [91.8, 4162.0], [91.9, 4162.0], [92.0, 4163.0], [92.1, 4163.0], [92.2, 4163.0], [92.3, 4163.0], [92.4, 4168.0], [92.5, 4174.0], [92.6, 4174.0], [92.7, 4174.0], [92.8, 4176.0], [92.9, 4177.0], [93.0, 4177.0], [93.1, 4198.0], [93.2, 4198.0], [93.3, 4198.0], [93.4, 4198.0], [93.5, 4198.0], [93.6, 4199.0], [93.7, 4199.0], [93.8, 4199.0], [93.9, 4199.0], [94.0, 4199.0], [94.1, 4200.0], [94.2, 4206.0], [94.3, 4207.0], [94.4, 4207.0], [94.5, 4208.0], [94.6, 4208.0], [94.7, 4208.0], [94.8, 4208.0], [94.9, 4208.0], [95.0, 4208.0], [95.1, 4287.0], [95.2, 4287.0], [95.3, 4287.0], [95.4, 4289.0], [95.5, 4294.0], [95.6, 4299.0], [95.7, 4300.0], [95.8, 4300.0], [95.9, 4300.0], [96.0, 4300.0], [96.1, 4300.0], [96.2, 4301.0], [96.3, 4301.0], [96.4, 4301.0], [96.5, 4301.0], [96.6, 4301.0], [96.7, 4301.0], [96.8, 4301.0], [96.9, 4301.0], [97.0, 4301.0], [97.1, 4301.0], [97.2, 4301.0], [97.3, 4302.0], [97.4, 4302.0], [97.5, 4302.0], [97.6, 4312.0], [97.7, 4313.0], [97.8, 4314.0], [97.9, 4314.0], [98.0, 4314.0], [98.1, 4314.0], [98.2, 4322.0], [98.3, 4372.0], [98.4, 4475.0], [98.5, 4509.0], [98.6, 4509.0], [98.7, 4509.0], [98.8, 4509.0], [98.9, 4509.0], [99.0, 4510.0], [99.1, 4725.0], [99.2, 4780.0], [99.3, 4782.0], [99.4, 4885.0], [99.5, 5044.0], [99.6, 5090.0], [99.7, 5092.0], [99.8, 5210.0], [99.9, 5211.0], [100.0, 5333.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 289.0, "series": [{"data": [[600.0, 4.0], [700.0, 81.0], [800.0, 61.0], [900.0, 44.0], [1000.0, 28.0], [1100.0, 19.0], [1200.0, 13.0], [1300.0, 19.0], [1400.0, 24.0], [1500.0, 14.0], [1600.0, 9.0], [1700.0, 10.0], [1800.0, 7.0], [1900.0, 20.0], [2000.0, 33.0], [2100.0, 36.0], [2300.0, 90.0], [2200.0, 38.0], [2400.0, 106.0], [2500.0, 136.0], [2600.0, 106.0], [2700.0, 173.0], [2800.0, 109.0], [2900.0, 35.0], [3000.0, 32.0], [3100.0, 76.0], [3200.0, 108.0], [3300.0, 122.0], [3400.0, 167.0], [3500.0, 227.0], [3700.0, 213.0], [3600.0, 267.0], [3800.0, 289.0], [3900.0, 195.0], [4000.0, 102.0], [4300.0, 90.0], [4200.0, 51.0], [4100.0, 115.0], [4500.0, 20.0], [4400.0, 4.0], [4700.0, 9.0], [4800.0, 5.0], [5000.0, 11.0], [5300.0, 1.0], [5200.0, 6.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 293.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3032.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 293.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3032.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 78.57152924594783, "minX": 1.78003782E12, "maxY": 101.0, "series": [{"data": [[1.78003794E12, 84.56198347107433], [1.78003782E12, 78.57152924594783], [1.78003788E12, 101.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003794E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 671.0, "minX": 2.0, "maxY": 3526.773739742087, "series": [{"data": [[2.0, 2811.0], [3.0, 2684.0], [5.0, 1065.5], [6.0, 2171.75], [7.0, 913.0], [8.0, 845.2], [9.0, 718.0], [10.0, 1764.857142857143], [11.0, 795.0], [12.0, 671.0], [13.0, 764.3333333333334], [14.0, 1697.9], [15.0, 702.6666666666666], [16.0, 760.1666666666666], [17.0, 1402.0], [18.0, 1033.375], [19.0, 686.0], [20.0, 740.5], [21.0, 1600.125], [22.0, 977.3333333333334], [23.0, 816.0], [24.0, 819.5555555555557], [25.0, 784.9000000000001], [26.0, 1452.3076923076924], [27.0, 859.2], [28.0, 826.3333333333333], [29.0, 1273.9999999999998], [30.0, 877.8181818181819], [31.0, 962.9999999999999], [32.0, 905.5454545454545], [33.0, 943.1428571428571], [34.0, 1540.2142857142856], [35.0, 973.0], [36.0, 1009.2], [37.0, 1100.1538461538462], [38.0, 1031.875], [39.0, 1190.8333333333335], [40.0, 1343.25], [41.0, 1233.090909090909], [42.0, 1319.0], [43.0, 1672.75], [44.0, 1458.9411764705883], [45.0, 1332.4999999999998], [46.0, 1354.142857142857], [48.0, 1697.0], [49.0, 1567.526315789474], [50.0, 1531.0], [52.0, 2129.444444444445], [53.0, 2025.0909090909092], [55.0, 1945.7], [56.0, 2201.0], [57.0, 2145.785714285714], [58.0, 1538.5], [61.0, 2291.6111111111113], [63.0, 2241.222222222222], [65.0, 2347.777777777778], [67.0, 2391.4444444444443], [66.0, 2532.0], [64.0, 3514.0], [68.0, 2233.6], [69.0, 2312.315789473684], [70.0, 2074.0], [71.0, 2349.0714285714284], [72.0, 2207.6666666666665], [75.0, 2555.96], [77.0, 2526.0526315789475], [78.0, 2467.0], [81.0, 2801.2962962962965], [83.0, 2536.2105263157896], [84.0, 2594.0], [87.0, 2827.0312500000005], [90.0, 2750.8846153846157], [95.0, 3161.3142857142857], [98.0, 3261.275862068966], [99.0, 2557.0], [101.0, 3526.773739742087]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[90.23187969924821, 3169.3849624060103]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 101.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 645.3333333333334, "minX": 1.78003782E12, "maxY": 6406.4, "series": [{"data": [[1.78003794E12, 931.7], [1.78003782E12, 5463.15], [1.78003788E12, 6406.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003794E12, 645.3333333333334], [1.78003782E12, 3784.0], [1.78003788E12, 4437.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003794E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2713.2438336856935, "minX": 1.78003782E12, "maxY": 3533.112980769229, "series": [{"data": [[1.78003794E12, 3343.0247933884307], [1.78003782E12, 2713.2438336856935], [1.78003788E12, 3533.112980769229]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003794E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2713.1959126145143, "minX": 1.78003782E12, "maxY": 3533.0955528846134, "series": [{"data": [[1.78003794E12, 3343.004132231405], [1.78003782E12, 2713.1959126145143], [1.78003788E12, 3533.0955528846134]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003794E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78003782E12, "maxY": 0.08456659619450317, "series": [{"data": [[1.78003794E12, 0.0], [1.78003782E12, 0.08456659619450317], [1.78003788E12, 0.06310096153846151]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003794E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 671.0, "minX": 1.78003782E12, "maxY": 5333.0, "series": [{"data": [[1.78003794E12, 5091.0], [1.78003782E12, 4886.0], [1.78003788E12, 5333.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003794E12, 2150.0], [1.78003782E12, 671.0], [1.78003788E12, 2150.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003794E12, 4199.0], [1.78003782E12, 3902.0], [1.78003788E12, 4158.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003794E12, 5090.0], [1.78003782E12, 4314.0], [1.78003788E12, 4780.7]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003794E12, 3421.0], [1.78003782E12, 2781.0], [1.78003788E12, 3656.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003794E12, 4199.0], [1.78003782E12, 4299.0], [1.78003788E12, 4287.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003794E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 754.5, "minX": 1.0, "maxY": 4508.5, "series": [{"data": [[33.0, 3346.0], [32.0, 3451.0], [2.0, 2810.0], [34.0, 3685.0], [35.0, 2859.0], [37.0, 3661.0], [36.0, 3369.5], [39.0, 3686.0], [38.0, 3389.5], [40.0, 3760.5], [41.0, 3665.0], [42.0, 3790.0], [43.0, 3891.0], [44.0, 4508.5], [47.0, 4095.0], [46.0, 3492.0], [3.0, 2810.0], [4.0, 2539.0], [5.0, 3117.0], [6.0, 911.0], [10.0, 767.0], [14.0, 754.5], [1.0, 2745.5], [18.0, 2442.0], [19.0, 1365.0], [20.0, 1317.5], [21.0, 4105.0], [22.0, 2533.0], [24.0, 794.5], [25.0, 1233.5], [26.0, 2767.0], [27.0, 3272.0], [28.0, 3307.5], [29.0, 3304.0], [30.0, 3583.5], [31.0, 3597.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 754.5, "minX": 1.0, "maxY": 4508.5, "series": [{"data": [[33.0, 3346.0], [32.0, 3451.0], [2.0, 2810.0], [34.0, 3685.0], [35.0, 2859.0], [37.0, 3661.0], [36.0, 3369.5], [39.0, 3686.0], [38.0, 3389.5], [40.0, 3760.5], [41.0, 3665.0], [42.0, 3790.0], [43.0, 3891.0], [44.0, 4508.5], [47.0, 4095.0], [46.0, 3492.0], [3.0, 2810.0], [4.0, 2539.0], [5.0, 3117.0], [6.0, 911.0], [10.0, 767.0], [14.0, 754.5], [1.0, 2745.5], [18.0, 2442.0], [19.0, 1365.0], [20.0, 1317.5], [21.0, 4105.0], [22.0, 2533.0], [24.0, 794.5], [25.0, 1233.5], [26.0, 2767.0], [27.0, 3272.0], [28.0, 3307.0], [29.0, 3304.0], [30.0, 3583.5], [31.0, 3597.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.78003782E12, "maxY": 27.8, "series": [{"data": [[1.78003794E12, 2.35], [1.78003782E12, 25.266666666666666], [1.78003788E12, 27.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003794E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.033333333333333, "minX": 1.78003782E12, "maxY": 27.733333333333334, "series": [{"data": [[1.78003794E12, 4.033333333333333], [1.78003782E12, 23.65], [1.78003788E12, 27.733333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003794E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.033333333333333, "minX": 1.78003782E12, "maxY": 27.733333333333334, "series": [{"data": [[1.78003794E12, 4.033333333333333], [1.78003782E12, 23.65], [1.78003788E12, 27.733333333333334]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003794E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.033333333333333, "minX": 1.78003782E12, "maxY": 27.733333333333334, "series": [{"data": [[1.78003794E12, 4.033333333333333], [1.78003782E12, 23.65], [1.78003788E12, 27.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003794E12, "title": "Total Transactions Per Second"}},
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

