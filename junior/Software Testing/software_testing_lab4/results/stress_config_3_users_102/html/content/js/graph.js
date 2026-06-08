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
        data: {"result": {"minY": 671.0, "minX": 0.0, "maxY": 5392.0, "series": [{"data": [[0.0, 671.0], [0.1, 683.0], [0.2, 692.0], [0.3, 699.0], [0.4, 699.0], [0.5, 704.0], [0.6, 706.0], [0.7, 721.0], [0.8, 721.0], [0.9, 723.0], [1.0, 728.0], [1.1, 730.0], [1.2, 732.0], [1.3, 733.0], [1.4, 737.0], [1.5, 738.0], [1.6, 746.0], [1.7, 749.0], [1.8, 750.0], [1.9, 756.0], [2.0, 766.0], [2.1, 766.0], [2.2, 768.0], [2.3, 775.0], [2.4, 784.0], [2.5, 792.0], [2.6, 792.0], [2.7, 794.0], [2.8, 797.0], [2.9, 807.0], [3.0, 810.0], [3.1, 817.0], [3.2, 822.0], [3.3, 828.0], [3.4, 833.0], [3.5, 840.0], [3.6, 844.0], [3.7, 846.0], [3.8, 856.0], [3.9, 860.0], [4.0, 869.0], [4.1, 872.0], [4.2, 877.0], [4.3, 880.0], [4.4, 884.0], [4.5, 887.0], [4.6, 895.0], [4.7, 907.0], [4.8, 913.0], [4.9, 916.0], [5.0, 924.0], [5.1, 933.0], [5.2, 949.0], [5.3, 954.0], [5.4, 972.0], [5.5, 985.0], [5.6, 986.0], [5.7, 999.0], [5.8, 1006.0], [5.9, 1008.0], [6.0, 1011.0], [6.1, 1025.0], [6.2, 1032.0], [6.3, 1033.0], [6.4, 1038.0], [6.5, 1050.0], [6.6, 1057.0], [6.7, 1060.0], [6.8, 1074.0], [6.9, 1088.0], [7.0, 1103.0], [7.1, 1117.0], [7.2, 1121.0], [7.3, 1129.0], [7.4, 1136.0], [7.5, 1144.0], [7.6, 1151.0], [7.7, 1158.0], [7.8, 1185.0], [7.9, 1226.0], [8.0, 1232.0], [8.1, 1253.0], [8.2, 1255.0], [8.3, 1278.0], [8.4, 1286.0], [8.5, 1306.0], [8.6, 1334.0], [8.7, 1342.0], [8.8, 1391.0], [8.9, 1427.0], [9.0, 1489.0], [9.1, 1499.0], [9.2, 1499.0], [9.3, 1502.0], [9.4, 1519.0], [9.5, 1524.0], [9.6, 1557.0], [9.7, 1591.0], [9.8, 1621.0], [9.9, 1631.0], [10.0, 1633.0], [10.1, 1643.0], [10.2, 1649.0], [10.3, 1689.0], [10.4, 1712.0], [10.5, 1729.0], [10.6, 1730.0], [10.7, 1781.0], [10.8, 1783.0], [10.9, 1783.0], [11.0, 1794.0], [11.1, 1805.0], [11.2, 1843.0], [11.3, 1857.0], [11.4, 1873.0], [11.5, 1900.0], [11.6, 1928.0], [11.7, 1930.0], [11.8, 1975.0], [11.9, 2019.0], [12.0, 2019.0], [12.1, 2039.0], [12.2, 2063.0], [12.3, 2077.0], [12.4, 2077.0], [12.5, 2108.0], [12.6, 2108.0], [12.7, 2120.0], [12.8, 2149.0], [12.9, 2149.0], [13.0, 2149.0], [13.1, 2150.0], [13.2, 2164.0], [13.3, 2176.0], [13.4, 2192.0], [13.5, 2193.0], [13.6, 2207.0], [13.7, 2207.0], [13.8, 2207.0], [13.9, 2208.0], [14.0, 2208.0], [14.1, 2209.0], [14.2, 2214.0], [14.3, 2216.0], [14.4, 2231.0], [14.5, 2235.0], [14.6, 2237.0], [14.7, 2237.0], [14.8, 2238.0], [14.9, 2251.0], [15.0, 2267.0], [15.1, 2278.0], [15.2, 2298.0], [15.3, 2302.0], [15.4, 2312.0], [15.5, 2314.0], [15.6, 2323.0], [15.7, 2327.0], [15.8, 2334.0], [15.9, 2334.0], [16.0, 2334.0], [16.1, 2342.0], [16.2, 2351.0], [16.3, 2352.0], [16.4, 2354.0], [16.5, 2354.0], [16.6, 2358.0], [16.7, 2359.0], [16.8, 2360.0], [16.9, 2360.0], [17.0, 2360.0], [17.1, 2360.0], [17.2, 2363.0], [17.3, 2365.0], [17.4, 2368.0], [17.5, 2368.0], [17.6, 2369.0], [17.7, 2373.0], [17.8, 2380.0], [17.9, 2381.0], [18.0, 2381.0], [18.1, 2397.0], [18.2, 2398.0], [18.3, 2398.0], [18.4, 2398.0], [18.5, 2398.0], [18.6, 2398.0], [18.7, 2399.0], [18.8, 2403.0], [18.9, 2407.0], [19.0, 2407.0], [19.1, 2421.0], [19.2, 2423.0], [19.3, 2426.0], [19.4, 2447.0], [19.5, 2452.0], [19.6, 2452.0], [19.7, 2452.0], [19.8, 2452.0], [19.9, 2457.0], [20.0, 2461.0], [20.1, 2462.0], [20.2, 2470.0], [20.3, 2470.0], [20.4, 2488.0], [20.5, 2489.0], [20.6, 2495.0], [20.7, 2496.0], [20.8, 2497.0], [20.9, 2498.0], [21.0, 2504.0], [21.1, 2512.0], [21.2, 2512.0], [21.3, 2512.0], [21.4, 2525.0], [21.5, 2528.0], [21.6, 2535.0], [21.7, 2536.0], [21.8, 2537.0], [21.9, 2541.0], [22.0, 2541.0], [22.1, 2542.0], [22.2, 2545.0], [22.3, 2547.0], [22.4, 2548.0], [22.5, 2562.0], [22.6, 2568.0], [22.7, 2576.0], [22.8, 2584.0], [22.9, 2584.0], [23.0, 2585.0], [23.1, 2594.0], [23.2, 2596.0], [23.3, 2597.0], [23.4, 2599.0], [23.5, 2600.0], [23.6, 2600.0], [23.7, 2602.0], [23.8, 2603.0], [23.9, 2622.0], [24.0, 2624.0], [24.1, 2624.0], [24.2, 2626.0], [24.3, 2626.0], [24.4, 2630.0], [24.5, 2630.0], [24.6, 2637.0], [24.7, 2638.0], [24.8, 2641.0], [24.9, 2650.0], [25.0, 2656.0], [25.1, 2656.0], [25.2, 2657.0], [25.3, 2658.0], [25.4, 2659.0], [25.5, 2659.0], [25.6, 2660.0], [25.7, 2661.0], [25.8, 2661.0], [25.9, 2662.0], [26.0, 2673.0], [26.1, 2678.0], [26.2, 2684.0], [26.3, 2689.0], [26.4, 2703.0], [26.5, 2716.0], [26.6, 2719.0], [26.7, 2720.0], [26.8, 2720.0], [26.9, 2721.0], [27.0, 2730.0], [27.1, 2734.0], [27.2, 2740.0], [27.3, 2745.0], [27.4, 2745.0], [27.5, 2749.0], [27.6, 2756.0], [27.7, 2757.0], [27.8, 2764.0], [27.9, 2764.0], [28.0, 2764.0], [28.1, 2764.0], [28.2, 2765.0], [28.3, 2765.0], [28.4, 2765.0], [28.5, 2766.0], [28.6, 2766.0], [28.7, 2768.0], [28.8, 2768.0], [28.9, 2768.0], [29.0, 2775.0], [29.1, 2777.0], [29.2, 2777.0], [29.3, 2780.0], [29.4, 2781.0], [29.5, 2789.0], [29.6, 2801.0], [29.7, 2805.0], [29.8, 2806.0], [29.9, 2808.0], [30.0, 2808.0], [30.1, 2814.0], [30.2, 2815.0], [30.3, 2817.0], [30.4, 2818.0], [30.5, 2820.0], [30.6, 2820.0], [30.7, 2822.0], [30.8, 2822.0], [30.9, 2824.0], [31.0, 2826.0], [31.1, 2827.0], [31.2, 2831.0], [31.3, 2831.0], [31.4, 2831.0], [31.5, 2831.0], [31.6, 2832.0], [31.7, 2834.0], [31.8, 2834.0], [31.9, 2838.0], [32.0, 2840.0], [32.1, 2840.0], [32.2, 2842.0], [32.3, 2843.0], [32.4, 2844.0], [32.5, 2867.0], [32.6, 2867.0], [32.7, 2867.0], [32.8, 2868.0], [32.9, 2868.0], [33.0, 2868.0], [33.1, 2869.0], [33.2, 2873.0], [33.3, 2874.0], [33.4, 2878.0], [33.5, 2882.0], [33.6, 2887.0], [33.7, 2887.0], [33.8, 2889.0], [33.9, 2889.0], [34.0, 2894.0], [34.1, 2895.0], [34.2, 2895.0], [34.3, 2897.0], [34.4, 2898.0], [34.5, 2900.0], [34.6, 2901.0], [34.7, 2901.0], [34.8, 2906.0], [34.9, 2909.0], [35.0, 2911.0], [35.1, 2911.0], [35.2, 2912.0], [35.3, 2912.0], [35.4, 2912.0], [35.5, 2916.0], [35.6, 2918.0], [35.7, 2918.0], [35.8, 2919.0], [35.9, 2921.0], [36.0, 2923.0], [36.1, 2933.0], [36.2, 2936.0], [36.3, 2937.0], [36.4, 2948.0], [36.5, 2956.0], [36.6, 2959.0], [36.7, 2966.0], [36.8, 2966.0], [36.9, 2967.0], [37.0, 2968.0], [37.1, 2969.0], [37.2, 2971.0], [37.3, 2973.0], [37.4, 2976.0], [37.5, 2977.0], [37.6, 2979.0], [37.7, 2980.0], [37.8, 2988.0], [37.9, 2992.0], [38.0, 2995.0], [38.1, 2995.0], [38.2, 3004.0], [38.3, 3009.0], [38.4, 3010.0], [38.5, 3012.0], [38.6, 3013.0], [38.7, 3018.0], [38.8, 3027.0], [38.9, 3027.0], [39.0, 3034.0], [39.1, 3043.0], [39.2, 3046.0], [39.3, 3051.0], [39.4, 3053.0], [39.5, 3055.0], [39.6, 3056.0], [39.7, 3065.0], [39.8, 3067.0], [39.9, 3080.0], [40.0, 3084.0], [40.1, 3103.0], [40.2, 3103.0], [40.3, 3106.0], [40.4, 3107.0], [40.5, 3111.0], [40.6, 3112.0], [40.7, 3114.0], [40.8, 3114.0], [40.9, 3114.0], [41.0, 3114.0], [41.1, 3114.0], [41.2, 3115.0], [41.3, 3120.0], [41.4, 3124.0], [41.5, 3126.0], [41.6, 3137.0], [41.7, 3140.0], [41.8, 3142.0], [41.9, 3146.0], [42.0, 3147.0], [42.1, 3156.0], [42.2, 3158.0], [42.3, 3160.0], [42.4, 3162.0], [42.5, 3173.0], [42.6, 3173.0], [42.7, 3181.0], [42.8, 3182.0], [42.9, 3189.0], [43.0, 3189.0], [43.1, 3192.0], [43.2, 3196.0], [43.3, 3197.0], [43.4, 3208.0], [43.5, 3210.0], [43.6, 3212.0], [43.7, 3214.0], [43.8, 3225.0], [43.9, 3226.0], [44.0, 3234.0], [44.1, 3243.0], [44.2, 3244.0], [44.3, 3248.0], [44.4, 3250.0], [44.5, 3251.0], [44.6, 3267.0], [44.7, 3274.0], [44.8, 3297.0], [44.9, 3298.0], [45.0, 3298.0], [45.1, 3319.0], [45.2, 3319.0], [45.3, 3320.0], [45.4, 3321.0], [45.5, 3332.0], [45.6, 3338.0], [45.7, 3338.0], [45.8, 3345.0], [45.9, 3346.0], [46.0, 3369.0], [46.1, 3371.0], [46.2, 3372.0], [46.3, 3377.0], [46.4, 3378.0], [46.5, 3379.0], [46.6, 3379.0], [46.7, 3379.0], [46.8, 3379.0], [46.9, 3384.0], [47.0, 3385.0], [47.1, 3392.0], [47.2, 3396.0], [47.3, 3425.0], [47.4, 3429.0], [47.5, 3439.0], [47.6, 3443.0], [47.7, 3444.0], [47.8, 3449.0], [47.9, 3450.0], [48.0, 3450.0], [48.1, 3451.0], [48.2, 3463.0], [48.3, 3464.0], [48.4, 3484.0], [48.5, 3490.0], [48.6, 3491.0], [48.7, 3498.0], [48.8, 3498.0], [48.9, 3502.0], [49.0, 3502.0], [49.1, 3503.0], [49.2, 3504.0], [49.3, 3504.0], [49.4, 3505.0], [49.5, 3506.0], [49.6, 3506.0], [49.7, 3507.0], [49.8, 3508.0], [49.9, 3511.0], [50.0, 3513.0], [50.1, 3516.0], [50.2, 3517.0], [50.3, 3517.0], [50.4, 3518.0], [50.5, 3518.0], [50.6, 3518.0], [50.7, 3519.0], [50.8, 3520.0], [50.9, 3521.0], [51.0, 3522.0], [51.1, 3525.0], [51.2, 3529.0], [51.3, 3531.0], [51.4, 3532.0], [51.5, 3533.0], [51.6, 3535.0], [51.7, 3536.0], [51.8, 3538.0], [51.9, 3541.0], [52.0, 3542.0], [52.1, 3542.0], [52.2, 3548.0], [52.3, 3551.0], [52.4, 3552.0], [52.5, 3552.0], [52.6, 3554.0], [52.7, 3555.0], [52.8, 3555.0], [52.9, 3557.0], [53.0, 3560.0], [53.1, 3560.0], [53.2, 3562.0], [53.3, 3577.0], [53.4, 3578.0], [53.5, 3578.0], [53.6, 3588.0], [53.7, 3589.0], [53.8, 3589.0], [53.9, 3594.0], [54.0, 3596.0], [54.1, 3597.0], [54.2, 3604.0], [54.3, 3617.0], [54.4, 3620.0], [54.5, 3621.0], [54.6, 3621.0], [54.7, 3623.0], [54.8, 3625.0], [54.9, 3627.0], [55.0, 3629.0], [55.1, 3631.0], [55.2, 3633.0], [55.3, 3634.0], [55.4, 3635.0], [55.5, 3639.0], [55.6, 3639.0], [55.7, 3645.0], [55.8, 3663.0], [55.9, 3672.0], [56.0, 3673.0], [56.1, 3673.0], [56.2, 3673.0], [56.3, 3673.0], [56.4, 3674.0], [56.5, 3676.0], [56.6, 3685.0], [56.7, 3697.0], [56.8, 3697.0], [56.9, 3697.0], [57.0, 3698.0], [57.1, 3698.0], [57.2, 3698.0], [57.3, 3698.0], [57.4, 3710.0], [57.5, 3715.0], [57.6, 3718.0], [57.7, 3720.0], [57.8, 3720.0], [57.9, 3722.0], [58.0, 3724.0], [58.1, 3726.0], [58.2, 3727.0], [58.3, 3727.0], [58.4, 3727.0], [58.5, 3732.0], [58.6, 3733.0], [58.7, 3733.0], [58.8, 3740.0], [58.9, 3751.0], [59.0, 3751.0], [59.1, 3752.0], [59.2, 3753.0], [59.3, 3753.0], [59.4, 3753.0], [59.5, 3754.0], [59.6, 3754.0], [59.7, 3754.0], [59.8, 3755.0], [59.9, 3755.0], [60.0, 3756.0], [60.1, 3756.0], [60.2, 3757.0], [60.3, 3757.0], [60.4, 3763.0], [60.5, 3763.0], [60.6, 3764.0], [60.7, 3765.0], [60.8, 3766.0], [60.9, 3770.0], [61.0, 3770.0], [61.1, 3770.0], [61.2, 3773.0], [61.3, 3773.0], [61.4, 3774.0], [61.5, 3778.0], [61.6, 3778.0], [61.7, 3779.0], [61.8, 3779.0], [61.9, 3782.0], [62.0, 3783.0], [62.1, 3783.0], [62.2, 3786.0], [62.3, 3786.0], [62.4, 3787.0], [62.5, 3787.0], [62.6, 3787.0], [62.7, 3787.0], [62.8, 3787.0], [62.9, 3788.0], [63.0, 3788.0], [63.1, 3789.0], [63.2, 3789.0], [63.3, 3789.0], [63.4, 3790.0], [63.5, 3790.0], [63.6, 3790.0], [63.7, 3792.0], [63.8, 3796.0], [63.9, 3797.0], [64.0, 3798.0], [64.1, 3800.0], [64.2, 3802.0], [64.3, 3802.0], [64.4, 3802.0], [64.5, 3803.0], [64.6, 3808.0], [64.7, 3809.0], [64.8, 3810.0], [64.9, 3811.0], [65.0, 3812.0], [65.1, 3812.0], [65.2, 3813.0], [65.3, 3813.0], [65.4, 3813.0], [65.5, 3813.0], [65.6, 3815.0], [65.7, 3819.0], [65.8, 3820.0], [65.9, 3827.0], [66.0, 3839.0], [66.1, 3841.0], [66.2, 3843.0], [66.3, 3845.0], [66.4, 3846.0], [66.5, 3846.0], [66.6, 3853.0], [66.7, 3857.0], [66.8, 3858.0], [66.9, 3858.0], [67.0, 3859.0], [67.1, 3860.0], [67.2, 3860.0], [67.3, 3860.0], [67.4, 3860.0], [67.5, 3861.0], [67.6, 3861.0], [67.7, 3861.0], [67.8, 3866.0], [67.9, 3868.0], [68.0, 3868.0], [68.1, 3868.0], [68.2, 3869.0], [68.3, 3870.0], [68.4, 3872.0], [68.5, 3872.0], [68.6, 3873.0], [68.7, 3874.0], [68.8, 3893.0], [68.9, 3897.0], [69.0, 3900.0], [69.1, 3916.0], [69.2, 3918.0], [69.3, 3919.0], [69.4, 3920.0], [69.5, 3931.0], [69.6, 3934.0], [69.7, 3941.0], [69.8, 3941.0], [69.9, 3942.0], [70.0, 3942.0], [70.1, 3943.0], [70.2, 3943.0], [70.3, 3944.0], [70.4, 3944.0], [70.5, 3945.0], [70.6, 3945.0], [70.7, 3947.0], [70.8, 3947.0], [70.9, 3948.0], [71.0, 3948.0], [71.1, 3950.0], [71.2, 3952.0], [71.3, 3952.0], [71.4, 3952.0], [71.5, 3952.0], [71.6, 3953.0], [71.7, 3954.0], [71.8, 3956.0], [71.9, 3958.0], [72.0, 3958.0], [72.1, 3958.0], [72.2, 3959.0], [72.3, 3960.0], [72.4, 3962.0], [72.5, 3962.0], [72.6, 3967.0], [72.7, 3969.0], [72.8, 3971.0], [72.9, 3971.0], [73.0, 3971.0], [73.1, 3971.0], [73.2, 3973.0], [73.3, 3975.0], [73.4, 3979.0], [73.5, 3981.0], [73.6, 3982.0], [73.7, 3982.0], [73.8, 3982.0], [73.9, 3983.0], [74.0, 3983.0], [74.1, 3989.0], [74.2, 3990.0], [74.3, 3990.0], [74.4, 3991.0], [74.5, 3992.0], [74.6, 3992.0], [74.7, 3992.0], [74.8, 3993.0], [74.9, 4005.0], [75.0, 4006.0], [75.1, 4010.0], [75.2, 4011.0], [75.3, 4011.0], [75.4, 4012.0], [75.5, 4012.0], [75.6, 4013.0], [75.7, 4015.0], [75.8, 4015.0], [75.9, 4015.0], [76.0, 4016.0], [76.1, 4016.0], [76.2, 4017.0], [76.3, 4034.0], [76.4, 4036.0], [76.5, 4036.0], [76.6, 4037.0], [76.7, 4038.0], [76.8, 4043.0], [76.9, 4044.0], [77.0, 4047.0], [77.1, 4047.0], [77.2, 4048.0], [77.3, 4048.0], [77.4, 4048.0], [77.5, 4049.0], [77.6, 4049.0], [77.7, 4050.0], [77.8, 4052.0], [77.9, 4055.0], [78.0, 4057.0], [78.1, 4060.0], [78.2, 4062.0], [78.3, 4063.0], [78.4, 4064.0], [78.5, 4065.0], [78.6, 4065.0], [78.7, 4065.0], [78.8, 4066.0], [78.9, 4066.0], [79.0, 4066.0], [79.1, 4069.0], [79.2, 4069.0], [79.3, 4070.0], [79.4, 4071.0], [79.5, 4073.0], [79.6, 4074.0], [79.7, 4075.0], [79.8, 4077.0], [79.9, 4081.0], [80.0, 4084.0], [80.1, 4091.0], [80.2, 4092.0], [80.3, 4092.0], [80.4, 4093.0], [80.5, 4094.0], [80.6, 4094.0], [80.7, 4094.0], [80.8, 4094.0], [80.9, 4094.0], [81.0, 4094.0], [81.1, 4094.0], [81.2, 4094.0], [81.3, 4094.0], [81.4, 4094.0], [81.5, 4095.0], [81.6, 4095.0], [81.7, 4095.0], [81.8, 4095.0], [81.9, 4095.0], [82.0, 4095.0], [82.1, 4095.0], [82.2, 4095.0], [82.3, 4095.0], [82.4, 4095.0], [82.5, 4096.0], [82.6, 4096.0], [82.7, 4096.0], [82.8, 4096.0], [82.9, 4096.0], [83.0, 4096.0], [83.1, 4096.0], [83.2, 4096.0], [83.3, 4096.0], [83.4, 4096.0], [83.5, 4097.0], [83.6, 4097.0], [83.7, 4097.0], [83.8, 4101.0], [83.9, 4103.0], [84.0, 4104.0], [84.1, 4104.0], [84.2, 4104.0], [84.3, 4105.0], [84.4, 4105.0], [84.5, 4108.0], [84.6, 4114.0], [84.7, 4116.0], [84.8, 4117.0], [84.9, 4118.0], [85.0, 4118.0], [85.1, 4118.0], [85.2, 4119.0], [85.3, 4119.0], [85.4, 4120.0], [85.5, 4120.0], [85.6, 4131.0], [85.7, 4131.0], [85.8, 4131.0], [85.9, 4138.0], [86.0, 4139.0], [86.1, 4139.0], [86.2, 4141.0], [86.3, 4142.0], [86.4, 4143.0], [86.5, 4147.0], [86.6, 4162.0], [86.7, 4163.0], [86.8, 4163.0], [86.9, 4164.0], [87.0, 4165.0], [87.1, 4165.0], [87.2, 4165.0], [87.3, 4165.0], [87.4, 4176.0], [87.5, 4177.0], [87.6, 4178.0], [87.7, 4179.0], [87.8, 4180.0], [87.9, 4180.0], [88.0, 4180.0], [88.1, 4180.0], [88.2, 4180.0], [88.3, 4180.0], [88.4, 4180.0], [88.5, 4181.0], [88.6, 4181.0], [88.7, 4182.0], [88.8, 4183.0], [88.9, 4185.0], [89.0, 4186.0], [89.1, 4193.0], [89.2, 4195.0], [89.3, 4195.0], [89.4, 4196.0], [89.5, 4197.0], [89.6, 4198.0], [89.7, 4198.0], [89.8, 4198.0], [89.9, 4198.0], [90.0, 4199.0], [90.1, 4199.0], [90.2, 4200.0], [90.3, 4207.0], [90.4, 4208.0], [90.5, 4208.0], [90.6, 4208.0], [90.7, 4211.0], [90.8, 4211.0], [90.9, 4216.0], [91.0, 4218.0], [91.1, 4221.0], [91.2, 4221.0], [91.3, 4244.0], [91.4, 4248.0], [91.5, 4248.0], [91.6, 4248.0], [91.7, 4253.0], [91.8, 4255.0], [91.9, 4255.0], [92.0, 4258.0], [92.1, 4260.0], [92.2, 4260.0], [92.3, 4263.0], [92.4, 4263.0], [92.5, 4265.0], [92.6, 4265.0], [92.7, 4266.0], [92.8, 4267.0], [92.9, 4267.0], [93.0, 4269.0], [93.1, 4271.0], [93.2, 4272.0], [93.3, 4284.0], [93.4, 4296.0], [93.5, 4302.0], [93.6, 4307.0], [93.7, 4307.0], [93.8, 4312.0], [93.9, 4348.0], [94.0, 4390.0], [94.1, 4391.0], [94.2, 4391.0], [94.3, 4391.0], [94.4, 4391.0], [94.5, 4393.0], [94.6, 4402.0], [94.7, 4402.0], [94.8, 4402.0], [94.9, 4403.0], [95.0, 4403.0], [95.1, 4403.0], [95.2, 4404.0], [95.3, 4409.0], [95.4, 4415.0], [95.5, 4423.0], [95.6, 4424.0], [95.7, 4424.0], [95.8, 4424.0], [95.9, 4425.0], [96.0, 4425.0], [96.1, 4425.0], [96.2, 4425.0], [96.3, 4425.0], [96.4, 4425.0], [96.5, 4425.0], [96.6, 4426.0], [96.7, 4427.0], [96.8, 4458.0], [96.9, 4459.0], [97.0, 4459.0], [97.1, 4460.0], [97.2, 4461.0], [97.3, 4462.0], [97.4, 4506.0], [97.5, 4545.0], [97.6, 4548.0], [97.7, 4628.0], [97.8, 4628.0], [97.9, 4660.0], [98.0, 4702.0], [98.1, 4733.0], [98.2, 4734.0], [98.3, 4761.0], [98.4, 4791.0], [98.5, 4800.0], [98.6, 4801.0], [98.7, 4836.0], [98.8, 4908.0], [98.9, 5025.0], [99.0, 5053.0], [99.1, 5053.0], [99.2, 5054.0], [99.3, 5054.0], [99.4, 5054.0], [99.5, 5054.0], [99.6, 5088.0], [99.7, 5142.0], [99.8, 5196.0], [99.9, 5235.0], [100.0, 5392.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 299.0, "series": [{"data": [[600.0, 14.0], [700.0, 81.0], [800.0, 59.0], [900.0, 36.0], [1000.0, 43.0], [1100.0, 29.0], [1200.0, 19.0], [1300.0, 13.0], [1400.0, 15.0], [1500.0, 16.0], [1600.0, 18.0], [1700.0, 26.0], [1800.0, 13.0], [1900.0, 14.0], [2000.0, 20.0], [2100.0, 34.0], [2300.0, 115.0], [2200.0, 58.0], [2400.0, 73.0], [2500.0, 84.0], [2600.0, 99.0], [2700.0, 106.0], [2800.0, 163.0], [2900.0, 124.0], [3000.0, 63.0], [3100.0, 108.0], [3200.0, 58.0], [3300.0, 71.0], [3400.0, 54.0], [3500.0, 178.0], [3700.0, 224.0], [3600.0, 105.0], [3800.0, 164.0], [3900.0, 194.0], [4000.0, 299.0], [4100.0, 213.0], [4200.0, 108.0], [4300.0, 39.0], [4400.0, 93.0], [4500.0, 9.0], [4600.0, 10.0], [4700.0, 17.0], [4800.0, 10.0], [5000.0, 24.0], [5100.0, 7.0], [4900.0, 4.0], [5300.0, 2.0], [5200.0, 4.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 309.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3021.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 309.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3021.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.11964430072757, "minX": 1.78003794E12, "maxY": 102.0, "series": [{"data": [[1.78003794E12, 75.11964430072757], [1.780038E12, 102.0], [1.78003806E12, 92.33109619686803]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003806E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 692.0, "minX": 3.0, "maxY": 4145.0, "series": [{"data": [[3.0, 3548.0], [5.0, 1074.0], [7.0, 1107.5], [8.0, 831.6666666666666], [9.0, 819.0], [10.0, 789.1666666666666], [11.0, 692.0], [12.0, 2581.4285714285716], [13.0, 1152.6666666666665], [14.0, 807.0], [15.0, 1214.7], [16.0, 1342.75], [17.0, 779.4285714285714], [18.0, 1156.818181818182], [19.0, 692.0], [20.0, 736.6428571428571], [21.0, 1624.857142857143], [22.0, 820.8333333333334], [23.0, 778.5], [24.0, 910.3333333333334], [25.0, 785.2499999999999], [26.0, 1714.0], [27.0, 852.25], [28.0, 820.7500000000001], [29.0, 887.0], [30.0, 911.0], [31.0, 857.5294117647059], [32.0, 936.5], [33.0, 914.0], [34.0, 948.4], [35.0, 945.5], [36.0, 1008.5], [37.0, 1055.1111111111113], [38.0, 1024.4166666666665], [39.0, 1081.3], [40.0, 1153.3333333333333], [41.0, 1137.3333333333333], [42.0, 1140.9230769230771], [43.0, 1228.5714285714287], [44.0, 1437.0], [45.0, 1288.5000000000002], [46.0, 1335.142857142857], [47.0, 1354.7142857142856], [48.0, 1577.3333333333335], [49.0, 1671.4545454545453], [50.0, 1529.75], [51.0, 1664.3333333333333], [52.0, 1794.0], [53.0, 1831.7777777777778], [54.0, 1814.0], [55.0, 1809.2222222222222], [56.0, 3043.129032258065], [57.0, 2554.0], [58.0, 2138.5384615384614], [59.0, 2232.9285714285716], [61.0, 2166.9333333333334], [60.0, 4145.0], [63.0, 2266.928571428571], [65.0, 2245.75], [67.0, 2237.352941176471], [69.0, 2287.8235294117653], [71.0, 2310.736842105264], [72.0, 1972.0], [73.0, 2388.357142857143], [74.0, 2149.4], [76.0, 2594.1052631578946], [77.0, 2802.5], [79.0, 4143.0], [78.0, 2755.3529411764707], [80.0, 2874.6818181818185], [81.0, 2660.65], [82.0, 2398.8], [85.0, 2613.3199999999997], [88.0, 2502.037037037037], [91.0, 2952.875], [90.0, 4142.0], [89.0, 4142.0], [92.0, 2718.6], [95.0, 3002.6129032258063], [94.0, 4142.0], [99.0, 2960.34375], [102.0, 3619.628367670368]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[90.71651651651653, 3214.44594594595]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 102.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1192.0, "minX": 1.78003794E12, "maxY": 6337.1, "series": [{"data": [[1.78003794E12, 4762.45], [1.780038E12, 6337.1], [1.78003806E12, 1720.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003794E12, 3298.6666666666665], [1.780038E12, 4389.333333333333], [1.78003806E12, 1192.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003806E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2552.4777687954734, "minX": 1.78003794E12, "maxY": 3663.755164034025, "series": [{"data": [[1.78003794E12, 2552.4777687954734], [1.780038E12, 3663.755164034025], [1.78003806E12, 3391.8322147651024]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003806E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2552.4365400161687, "minX": 1.78003794E12, "maxY": 3663.7339003645193, "series": [{"data": [[1.78003794E12, 2552.4365400161687], [1.780038E12, 3663.7339003645193], [1.78003806E12, 3391.823266219237]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003806E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78003794E12, "maxY": 0.09135004042037181, "series": [{"data": [[1.78003794E12, 0.09135004042037181], [1.780038E12, 0.04981773997569871], [1.78003806E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003806E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 671.0, "minX": 1.78003794E12, "maxY": 5392.0, "series": [{"data": [[1.78003794E12, 4404.0], [1.780038E12, 5392.0], [1.78003806E12, 5235.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003794E12, 671.0], [1.780038E12, 2234.0], [1.78003806E12, 1499.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003794E12, 4094.0], [1.780038E12, 4244.0], [1.78003806E12, 4762.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003794E12, 4402.62], [1.780038E12, 4521.889999999997], [1.78003806E12, 5196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003794E12, 2656.0], [1.780038E12, 3811.5], [1.78003806E12, 3189.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003794E12, 4117.0], [1.780038E12, 4390.0], [1.78003806E12, 5053.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003806E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 733.0, "minX": 1.0, "maxY": 4835.0, "series": [{"data": [[33.0, 3504.0], [32.0, 2394.0], [2.0, 2927.0], [35.0, 3671.0], [34.0, 3770.0], [37.0, 3946.0], [36.0, 4011.0], [38.0, 3752.0], [39.0, 4078.0], [40.0, 4095.0], [41.0, 3812.0], [43.0, 3718.0], [42.0, 3990.0], [45.0, 3936.0], [44.0, 3328.5], [46.0, 4070.5], [3.0, 3044.5], [58.0, 2495.5], [67.0, 3114.0], [71.0, 4835.0], [5.0, 3377.5], [7.0, 1030.0], [9.0, 754.0], [11.0, 4163.0], [12.0, 3560.0], [13.0, 781.0], [1.0, 2640.5], [17.0, 2077.0], [19.0, 2421.0], [22.0, 2216.0], [23.0, 733.0], [24.0, 2526.5], [25.0, 3120.0], [26.0, 1253.0], [27.0, 2091.0], [28.0, 2012.5], [29.0, 3444.0], [30.0, 3297.0], [31.0, 3041.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 733.0, "minX": 1.0, "maxY": 4835.0, "series": [{"data": [[33.0, 3504.0], [32.0, 2394.0], [2.0, 2927.0], [35.0, 3671.0], [34.0, 3770.0], [37.0, 3945.5], [36.0, 4011.0], [38.0, 3752.0], [39.0, 4078.0], [40.0, 4095.0], [41.0, 3812.0], [43.0, 3718.0], [42.0, 3990.0], [45.0, 3936.0], [44.0, 3328.5], [46.0, 4070.5], [3.0, 3044.5], [58.0, 2495.5], [67.0, 3114.0], [71.0, 4835.0], [5.0, 3377.5], [7.0, 1030.0], [9.0, 754.0], [11.0, 4163.0], [12.0, 3560.0], [13.0, 781.0], [1.0, 2640.5], [17.0, 2077.0], [19.0, 2421.0], [22.0, 2216.0], [23.0, 733.0], [24.0, 2526.5], [25.0, 3120.0], [26.0, 1253.0], [27.0, 2091.0], [28.0, 2012.5], [29.0, 3444.0], [30.0, 3297.0], [31.0, 3041.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.78003794E12, "maxY": 27.366666666666667, "series": [{"data": [[1.78003794E12, 22.316666666666666], [1.780038E12, 27.366666666666667], [1.78003806E12, 5.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003806E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.78003794E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003794E12, 20.616666666666667], [1.780038E12, 27.433333333333334], [1.78003806E12, 7.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003806E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.78003794E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003794E12, 20.616666666666667], [1.780038E12, 27.433333333333334], [1.78003806E12, 7.45]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003806E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.78003794E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003794E12, 20.616666666666667], [1.780038E12, 27.433333333333334], [1.78003806E12, 7.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003806E12, "title": "Total Transactions Per Second"}},
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

