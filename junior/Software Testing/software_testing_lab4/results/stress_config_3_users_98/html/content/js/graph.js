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
        data: {"result": {"minY": 678.0, "minX": 0.0, "maxY": 4696.0, "series": [{"data": [[0.0, 678.0], [0.1, 685.0], [0.2, 695.0], [0.3, 701.0], [0.4, 702.0], [0.5, 707.0], [0.6, 709.0], [0.7, 710.0], [0.8, 711.0], [0.9, 718.0], [1.0, 725.0], [1.1, 727.0], [1.2, 729.0], [1.3, 737.0], [1.4, 742.0], [1.5, 743.0], [1.6, 748.0], [1.7, 748.0], [1.8, 766.0], [1.9, 766.0], [2.0, 767.0], [2.1, 774.0], [2.2, 776.0], [2.3, 782.0], [2.4, 783.0], [2.5, 790.0], [2.6, 800.0], [2.7, 812.0], [2.8, 821.0], [2.9, 824.0], [3.0, 829.0], [3.1, 829.0], [3.2, 838.0], [3.3, 843.0], [3.4, 846.0], [3.5, 849.0], [3.6, 856.0], [3.7, 865.0], [3.8, 872.0], [3.9, 882.0], [4.0, 884.0], [4.1, 893.0], [4.2, 895.0], [4.3, 900.0], [4.4, 903.0], [4.5, 906.0], [4.6, 912.0], [4.7, 924.0], [4.8, 930.0], [4.9, 941.0], [5.0, 948.0], [5.1, 959.0], [5.2, 968.0], [5.3, 970.0], [5.4, 978.0], [5.5, 981.0], [5.6, 992.0], [5.7, 994.0], [5.8, 1000.0], [5.9, 1010.0], [6.0, 1016.0], [6.1, 1022.0], [6.2, 1034.0], [6.3, 1043.0], [6.4, 1044.0], [6.5, 1056.0], [6.6, 1072.0], [6.7, 1083.0], [6.8, 1091.0], [6.9, 1092.0], [7.0, 1117.0], [7.1, 1133.0], [7.2, 1140.0], [7.3, 1155.0], [7.4, 1162.0], [7.5, 1176.0], [7.6, 1185.0], [7.7, 1196.0], [7.8, 1198.0], [7.9, 1206.0], [8.0, 1219.0], [8.1, 1253.0], [8.2, 1262.0], [8.3, 1281.0], [8.4, 1295.0], [8.5, 1317.0], [8.6, 1363.0], [8.7, 1371.0], [8.8, 1382.0], [8.9, 1390.0], [9.0, 1418.0], [9.1, 1432.0], [9.2, 1483.0], [9.3, 1509.0], [9.4, 1538.0], [9.5, 1559.0], [9.6, 1587.0], [9.7, 1592.0], [9.8, 1606.0], [9.9, 1653.0], [10.0, 1667.0], [10.1, 1707.0], [10.2, 1761.0], [10.3, 1774.0], [10.4, 1805.0], [10.5, 1812.0], [10.6, 1821.0], [10.7, 1832.0], [10.8, 1855.0], [10.9, 1855.0], [11.0, 1897.0], [11.1, 1897.0], [11.2, 1912.0], [11.3, 1919.0], [11.4, 1931.0], [11.5, 1939.0], [11.6, 1974.0], [11.7, 1989.0], [11.8, 1989.0], [11.9, 2008.0], [12.0, 2029.0], [12.1, 2045.0], [12.2, 2092.0], [12.3, 2095.0], [12.4, 2098.0], [12.5, 2098.0], [12.6, 2103.0], [12.7, 2108.0], [12.8, 2126.0], [12.9, 2126.0], [13.0, 2126.0], [13.1, 2154.0], [13.2, 2154.0], [13.3, 2158.0], [13.4, 2163.0], [13.5, 2173.0], [13.6, 2184.0], [13.7, 2186.0], [13.8, 2191.0], [13.9, 2194.0], [14.0, 2197.0], [14.1, 2197.0], [14.2, 2197.0], [14.3, 2211.0], [14.4, 2212.0], [14.5, 2213.0], [14.6, 2213.0], [14.7, 2217.0], [14.8, 2225.0], [14.9, 2230.0], [15.0, 2233.0], [15.1, 2240.0], [15.2, 2244.0], [15.3, 2246.0], [15.4, 2247.0], [15.5, 2251.0], [15.6, 2252.0], [15.7, 2253.0], [15.8, 2254.0], [15.9, 2254.0], [16.0, 2256.0], [16.1, 2257.0], [16.2, 2259.0], [16.3, 2259.0], [16.4, 2261.0], [16.5, 2261.0], [16.6, 2261.0], [16.7, 2264.0], [16.8, 2265.0], [16.9, 2268.0], [17.0, 2271.0], [17.1, 2280.0], [17.2, 2281.0], [17.3, 2283.0], [17.4, 2291.0], [17.5, 2291.0], [17.6, 2297.0], [17.7, 2302.0], [17.8, 2305.0], [17.9, 2310.0], [18.0, 2312.0], [18.1, 2319.0], [18.2, 2321.0], [18.3, 2322.0], [18.4, 2324.0], [18.5, 2325.0], [18.6, 2326.0], [18.7, 2327.0], [18.8, 2328.0], [18.9, 2330.0], [19.0, 2338.0], [19.1, 2342.0], [19.2, 2343.0], [19.3, 2346.0], [19.4, 2348.0], [19.5, 2348.0], [19.6, 2350.0], [19.7, 2351.0], [19.8, 2351.0], [19.9, 2352.0], [20.0, 2354.0], [20.1, 2354.0], [20.2, 2355.0], [20.3, 2355.0], [20.4, 2356.0], [20.5, 2360.0], [20.6, 2361.0], [20.7, 2363.0], [20.8, 2365.0], [20.9, 2370.0], [21.0, 2373.0], [21.1, 2373.0], [21.2, 2374.0], [21.3, 2374.0], [21.4, 2375.0], [21.5, 2377.0], [21.6, 2378.0], [21.7, 2380.0], [21.8, 2383.0], [21.9, 2386.0], [22.0, 2392.0], [22.1, 2398.0], [22.2, 2416.0], [22.3, 2428.0], [22.4, 2429.0], [22.5, 2430.0], [22.6, 2431.0], [22.7, 2437.0], [22.8, 2444.0], [22.9, 2446.0], [23.0, 2459.0], [23.1, 2460.0], [23.2, 2462.0], [23.3, 2464.0], [23.4, 2465.0], [23.5, 2481.0], [23.6, 2485.0], [23.7, 2487.0], [23.8, 2500.0], [23.9, 2512.0], [24.0, 2523.0], [24.1, 2536.0], [24.2, 2557.0], [24.3, 2558.0], [24.4, 2561.0], [24.5, 2565.0], [24.6, 2570.0], [24.7, 2572.0], [24.8, 2578.0], [24.9, 2590.0], [25.0, 2591.0], [25.1, 2596.0], [25.2, 2625.0], [25.3, 2628.0], [25.4, 2649.0], [25.5, 2652.0], [25.6, 2653.0], [25.7, 2658.0], [25.8, 2661.0], [25.9, 2661.0], [26.0, 2668.0], [26.1, 2673.0], [26.2, 2684.0], [26.3, 2685.0], [26.4, 2700.0], [26.5, 2703.0], [26.6, 2717.0], [26.7, 2726.0], [26.8, 2727.0], [26.9, 2728.0], [27.0, 2733.0], [27.1, 2739.0], [27.2, 2750.0], [27.3, 2762.0], [27.4, 2763.0], [27.5, 2770.0], [27.6, 2771.0], [27.7, 2787.0], [27.8, 2788.0], [27.9, 2788.0], [28.0, 2788.0], [28.1, 2790.0], [28.2, 2794.0], [28.3, 2798.0], [28.4, 2803.0], [28.5, 2810.0], [28.6, 2813.0], [28.7, 2821.0], [28.8, 2824.0], [28.9, 2827.0], [29.0, 2832.0], [29.1, 2833.0], [29.2, 2836.0], [29.3, 2838.0], [29.4, 2842.0], [29.5, 2843.0], [29.6, 2845.0], [29.7, 2845.0], [29.8, 2847.0], [29.9, 2851.0], [30.0, 2851.0], [30.1, 2855.0], [30.2, 2861.0], [30.3, 2862.0], [30.4, 2868.0], [30.5, 2869.0], [30.6, 2873.0], [30.7, 2873.0], [30.8, 2878.0], [30.9, 2888.0], [31.0, 2898.0], [31.1, 2899.0], [31.2, 2901.0], [31.3, 2902.0], [31.4, 2904.0], [31.5, 2907.0], [31.6, 2908.0], [31.7, 2909.0], [31.8, 2914.0], [31.9, 2923.0], [32.0, 2931.0], [32.1, 2942.0], [32.2, 2942.0], [32.3, 2952.0], [32.4, 2956.0], [32.5, 2958.0], [32.6, 2960.0], [32.7, 2962.0], [32.8, 2968.0], [32.9, 2968.0], [33.0, 2972.0], [33.1, 2974.0], [33.2, 2976.0], [33.3, 2977.0], [33.4, 2980.0], [33.5, 2986.0], [33.6, 2994.0], [33.7, 2995.0], [33.8, 2998.0], [33.9, 3007.0], [34.0, 3019.0], [34.1, 3039.0], [34.2, 3046.0], [34.3, 3065.0], [34.4, 3065.0], [34.5, 3066.0], [34.6, 3076.0], [34.7, 3079.0], [34.8, 3082.0], [34.9, 3089.0], [35.0, 3092.0], [35.1, 3098.0], [35.2, 3107.0], [35.3, 3114.0], [35.4, 3115.0], [35.5, 3116.0], [35.6, 3118.0], [35.7, 3124.0], [35.8, 3140.0], [35.9, 3140.0], [36.0, 3145.0], [36.1, 3149.0], [36.2, 3151.0], [36.3, 3153.0], [36.4, 3153.0], [36.5, 3153.0], [36.6, 3153.0], [36.7, 3153.0], [36.8, 3153.0], [36.9, 3153.0], [37.0, 3154.0], [37.1, 3159.0], [37.2, 3160.0], [37.3, 3164.0], [37.4, 3167.0], [37.5, 3171.0], [37.6, 3172.0], [37.7, 3174.0], [37.8, 3176.0], [37.9, 3181.0], [38.0, 3181.0], [38.1, 3182.0], [38.2, 3184.0], [38.3, 3184.0], [38.4, 3200.0], [38.5, 3207.0], [38.6, 3208.0], [38.7, 3209.0], [38.8, 3210.0], [38.9, 3211.0], [39.0, 3212.0], [39.1, 3212.0], [39.2, 3212.0], [39.3, 3212.0], [39.4, 3213.0], [39.5, 3213.0], [39.6, 3213.0], [39.7, 3213.0], [39.8, 3214.0], [39.9, 3216.0], [40.0, 3218.0], [40.1, 3224.0], [40.2, 3227.0], [40.3, 3230.0], [40.4, 3240.0], [40.5, 3240.0], [40.6, 3246.0], [40.7, 3247.0], [40.8, 3247.0], [40.9, 3248.0], [41.0, 3249.0], [41.1, 3255.0], [41.2, 3255.0], [41.3, 3259.0], [41.4, 3266.0], [41.5, 3269.0], [41.6, 3273.0], [41.7, 3273.0], [41.8, 3274.0], [41.9, 3274.0], [42.0, 3274.0], [42.1, 3274.0], [42.2, 3275.0], [42.3, 3276.0], [42.4, 3277.0], [42.5, 3277.0], [42.6, 3277.0], [42.7, 3277.0], [42.8, 3280.0], [42.9, 3280.0], [43.0, 3280.0], [43.1, 3283.0], [43.2, 3285.0], [43.3, 3285.0], [43.4, 3285.0], [43.5, 3286.0], [43.6, 3286.0], [43.7, 3286.0], [43.8, 3286.0], [43.9, 3286.0], [44.0, 3286.0], [44.1, 3286.0], [44.2, 3286.0], [44.3, 3287.0], [44.4, 3288.0], [44.5, 3288.0], [44.6, 3289.0], [44.7, 3300.0], [44.8, 3303.0], [44.9, 3304.0], [45.0, 3306.0], [45.1, 3308.0], [45.2, 3308.0], [45.3, 3308.0], [45.4, 3308.0], [45.5, 3309.0], [45.6, 3309.0], [45.7, 3311.0], [45.8, 3313.0], [45.9, 3313.0], [46.0, 3317.0], [46.1, 3317.0], [46.2, 3318.0], [46.3, 3318.0], [46.4, 3319.0], [46.5, 3320.0], [46.6, 3325.0], [46.7, 3326.0], [46.8, 3326.0], [46.9, 3328.0], [47.0, 3328.0], [47.1, 3328.0], [47.2, 3329.0], [47.3, 3329.0], [47.4, 3330.0], [47.5, 3330.0], [47.6, 3330.0], [47.7, 3331.0], [47.8, 3332.0], [47.9, 3332.0], [48.0, 3333.0], [48.1, 3333.0], [48.2, 3333.0], [48.3, 3336.0], [48.4, 3338.0], [48.5, 3341.0], [48.6, 3342.0], [48.7, 3343.0], [48.8, 3347.0], [48.9, 3351.0], [49.0, 3351.0], [49.1, 3352.0], [49.2, 3352.0], [49.3, 3354.0], [49.4, 3359.0], [49.5, 3360.0], [49.6, 3360.0], [49.7, 3360.0], [49.8, 3360.0], [49.9, 3360.0], [50.0, 3361.0], [50.1, 3361.0], [50.2, 3361.0], [50.3, 3361.0], [50.4, 3361.0], [50.5, 3361.0], [50.6, 3362.0], [50.7, 3362.0], [50.8, 3362.0], [50.9, 3362.0], [51.0, 3363.0], [51.1, 3363.0], [51.2, 3363.0], [51.3, 3363.0], [51.4, 3364.0], [51.5, 3364.0], [51.6, 3364.0], [51.7, 3364.0], [51.8, 3365.0], [51.9, 3365.0], [52.0, 3365.0], [52.1, 3365.0], [52.2, 3366.0], [52.3, 3366.0], [52.4, 3366.0], [52.5, 3367.0], [52.6, 3367.0], [52.7, 3367.0], [52.8, 3367.0], [52.9, 3367.0], [53.0, 3376.0], [53.1, 3376.0], [53.2, 3377.0], [53.3, 3377.0], [53.4, 3377.0], [53.5, 3377.0], [53.6, 3377.0], [53.7, 3377.0], [53.8, 3378.0], [53.9, 3378.0], [54.0, 3378.0], [54.1, 3378.0], [54.2, 3378.0], [54.3, 3379.0], [54.4, 3379.0], [54.5, 3380.0], [54.6, 3380.0], [54.7, 3380.0], [54.8, 3380.0], [54.9, 3380.0], [55.0, 3381.0], [55.1, 3381.0], [55.2, 3383.0], [55.3, 3384.0], [55.4, 3384.0], [55.5, 3384.0], [55.6, 3385.0], [55.7, 3385.0], [55.8, 3385.0], [55.9, 3387.0], [56.0, 3396.0], [56.1, 3397.0], [56.2, 3397.0], [56.3, 3397.0], [56.4, 3399.0], [56.5, 3399.0], [56.6, 3399.0], [56.7, 3400.0], [56.8, 3400.0], [56.9, 3401.0], [57.0, 3401.0], [57.1, 3403.0], [57.2, 3404.0], [57.3, 3404.0], [57.4, 3404.0], [57.5, 3404.0], [57.6, 3404.0], [57.7, 3405.0], [57.8, 3406.0], [57.9, 3408.0], [58.0, 3408.0], [58.1, 3408.0], [58.2, 3408.0], [58.3, 3409.0], [58.4, 3409.0], [58.5, 3410.0], [58.6, 3410.0], [58.7, 3410.0], [58.8, 3411.0], [58.9, 3412.0], [59.0, 3413.0], [59.1, 3413.0], [59.2, 3413.0], [59.3, 3413.0], [59.4, 3414.0], [59.5, 3414.0], [59.6, 3414.0], [59.7, 3414.0], [59.8, 3414.0], [59.9, 3414.0], [60.0, 3414.0], [60.1, 3414.0], [60.2, 3414.0], [60.3, 3414.0], [60.4, 3415.0], [60.5, 3415.0], [60.6, 3415.0], [60.7, 3415.0], [60.8, 3415.0], [60.9, 3415.0], [61.0, 3415.0], [61.1, 3415.0], [61.2, 3415.0], [61.3, 3415.0], [61.4, 3415.0], [61.5, 3415.0], [61.6, 3415.0], [61.7, 3416.0], [61.8, 3416.0], [61.9, 3417.0], [62.0, 3417.0], [62.1, 3417.0], [62.2, 3417.0], [62.3, 3418.0], [62.4, 3418.0], [62.5, 3418.0], [62.6, 3418.0], [62.7, 3418.0], [62.8, 3418.0], [62.9, 3418.0], [63.0, 3418.0], [63.1, 3418.0], [63.2, 3420.0], [63.3, 3420.0], [63.4, 3420.0], [63.5, 3420.0], [63.6, 3421.0], [63.7, 3421.0], [63.8, 3422.0], [63.9, 3422.0], [64.0, 3422.0], [64.1, 3423.0], [64.2, 3425.0], [64.3, 3429.0], [64.4, 3429.0], [64.5, 3429.0], [64.6, 3429.0], [64.7, 3430.0], [64.8, 3430.0], [64.9, 3430.0], [65.0, 3431.0], [65.1, 3432.0], [65.2, 3432.0], [65.3, 3432.0], [65.4, 3432.0], [65.5, 3432.0], [65.6, 3432.0], [65.7, 3433.0], [65.8, 3433.0], [65.9, 3434.0], [66.0, 3434.0], [66.1, 3434.0], [66.2, 3435.0], [66.3, 3435.0], [66.4, 3435.0], [66.5, 3435.0], [66.6, 3435.0], [66.7, 3435.0], [66.8, 3435.0], [66.9, 3435.0], [67.0, 3435.0], [67.1, 3435.0], [67.2, 3435.0], [67.3, 3436.0], [67.4, 3436.0], [67.5, 3436.0], [67.6, 3436.0], [67.7, 3436.0], [67.8, 3437.0], [67.9, 3437.0], [68.0, 3437.0], [68.1, 3437.0], [68.2, 3437.0], [68.3, 3437.0], [68.4, 3438.0], [68.5, 3438.0], [68.6, 3438.0], [68.7, 3440.0], [68.8, 3443.0], [68.9, 3443.0], [69.0, 3444.0], [69.1, 3444.0], [69.2, 3444.0], [69.3, 3444.0], [69.4, 3444.0], [69.5, 3449.0], [69.6, 3450.0], [69.7, 3451.0], [69.8, 3451.0], [69.9, 3451.0], [70.0, 3451.0], [70.1, 3452.0], [70.2, 3452.0], [70.3, 3452.0], [70.4, 3452.0], [70.5, 3452.0], [70.6, 3452.0], [70.7, 3453.0], [70.8, 3453.0], [70.9, 3453.0], [71.0, 3458.0], [71.1, 3458.0], [71.2, 3459.0], [71.3, 3461.0], [71.4, 3462.0], [71.5, 3462.0], [71.6, 3462.0], [71.7, 3462.0], [71.8, 3463.0], [71.9, 3463.0], [72.0, 3465.0], [72.1, 3465.0], [72.2, 3465.0], [72.3, 3465.0], [72.4, 3465.0], [72.5, 3465.0], [72.6, 3466.0], [72.7, 3466.0], [72.8, 3467.0], [72.9, 3467.0], [73.0, 3467.0], [73.1, 3468.0], [73.2, 3468.0], [73.3, 3468.0], [73.4, 3468.0], [73.5, 3468.0], [73.6, 3474.0], [73.7, 3474.0], [73.8, 3475.0], [73.9, 3475.0], [74.0, 3475.0], [74.1, 3476.0], [74.2, 3476.0], [74.3, 3477.0], [74.4, 3477.0], [74.5, 3477.0], [74.6, 3477.0], [74.7, 3477.0], [74.8, 3478.0], [74.9, 3478.0], [75.0, 3478.0], [75.1, 3478.0], [75.2, 3478.0], [75.3, 3478.0], [75.4, 3478.0], [75.5, 3479.0], [75.6, 3479.0], [75.7, 3479.0], [75.8, 3479.0], [75.9, 3480.0], [76.0, 3480.0], [76.1, 3480.0], [76.2, 3480.0], [76.3, 3480.0], [76.4, 3480.0], [76.5, 3480.0], [76.6, 3480.0], [76.7, 3480.0], [76.8, 3480.0], [76.9, 3481.0], [77.0, 3481.0], [77.1, 3481.0], [77.2, 3481.0], [77.3, 3481.0], [77.4, 3481.0], [77.5, 3481.0], [77.6, 3481.0], [77.7, 3481.0], [77.8, 3481.0], [77.9, 3481.0], [78.0, 3481.0], [78.1, 3481.0], [78.2, 3481.0], [78.3, 3481.0], [78.4, 3481.0], [78.5, 3481.0], [78.6, 3481.0], [78.7, 3481.0], [78.8, 3482.0], [78.9, 3482.0], [79.0, 3482.0], [79.1, 3482.0], [79.2, 3482.0], [79.3, 3482.0], [79.4, 3482.0], [79.5, 3482.0], [79.6, 3482.0], [79.7, 3482.0], [79.8, 3482.0], [79.9, 3482.0], [80.0, 3482.0], [80.1, 3482.0], [80.2, 3482.0], [80.3, 3482.0], [80.4, 3482.0], [80.5, 3482.0], [80.6, 3482.0], [80.7, 3482.0], [80.8, 3482.0], [80.9, 3482.0], [81.0, 3483.0], [81.1, 3483.0], [81.2, 3483.0], [81.3, 3483.0], [81.4, 3483.0], [81.5, 3483.0], [81.6, 3484.0], [81.7, 3484.0], [81.8, 3484.0], [81.9, 3484.0], [82.0, 3485.0], [82.1, 3485.0], [82.2, 3485.0], [82.3, 3485.0], [82.4, 3485.0], [82.5, 3485.0], [82.6, 3485.0], [82.7, 3485.0], [82.8, 3485.0], [82.9, 3485.0], [83.0, 3485.0], [83.1, 3486.0], [83.2, 3486.0], [83.3, 3486.0], [83.4, 3486.0], [83.5, 3486.0], [83.6, 3486.0], [83.7, 3486.0], [83.8, 3486.0], [83.9, 3486.0], [84.0, 3487.0], [84.1, 3487.0], [84.2, 3487.0], [84.3, 3487.0], [84.4, 3487.0], [84.5, 3487.0], [84.6, 3488.0], [84.7, 3488.0], [84.8, 3488.0], [84.9, 3488.0], [85.0, 3489.0], [85.1, 3489.0], [85.2, 3489.0], [85.3, 3490.0], [85.4, 3490.0], [85.5, 3493.0], [85.6, 3494.0], [85.7, 3494.0], [85.8, 3495.0], [85.9, 3495.0], [86.0, 3495.0], [86.1, 3495.0], [86.2, 3495.0], [86.3, 3495.0], [86.4, 3495.0], [86.5, 3495.0], [86.6, 3496.0], [86.7, 3496.0], [86.8, 3497.0], [86.9, 3499.0], [87.0, 3502.0], [87.1, 3503.0], [87.2, 3503.0], [87.3, 3503.0], [87.4, 3503.0], [87.5, 3503.0], [87.6, 3504.0], [87.7, 3504.0], [87.8, 3506.0], [87.9, 3506.0], [88.0, 3507.0], [88.1, 3508.0], [88.2, 3508.0], [88.3, 3508.0], [88.4, 3510.0], [88.5, 3510.0], [88.6, 3510.0], [88.7, 3511.0], [88.8, 3511.0], [88.9, 3511.0], [89.0, 3511.0], [89.1, 3511.0], [89.2, 3512.0], [89.3, 3512.0], [89.4, 3512.0], [89.5, 3512.0], [89.6, 3512.0], [89.7, 3513.0], [89.8, 3514.0], [89.9, 3516.0], [90.0, 3517.0], [90.1, 3517.0], [90.2, 3517.0], [90.3, 3518.0], [90.4, 3518.0], [90.5, 3519.0], [90.6, 3519.0], [90.7, 3519.0], [90.8, 3520.0], [90.9, 3520.0], [91.0, 3520.0], [91.1, 3524.0], [91.2, 3524.0], [91.3, 3525.0], [91.4, 3525.0], [91.5, 3525.0], [91.6, 3526.0], [91.7, 3529.0], [91.8, 3532.0], [91.9, 3553.0], [92.0, 3564.0], [92.1, 3565.0], [92.2, 3565.0], [92.3, 3565.0], [92.4, 3566.0], [92.5, 3566.0], [92.6, 3567.0], [92.7, 3570.0], [92.8, 3571.0], [92.9, 3571.0], [93.0, 3571.0], [93.1, 3571.0], [93.2, 3572.0], [93.3, 3574.0], [93.4, 3585.0], [93.5, 3586.0], [93.6, 3588.0], [93.7, 3591.0], [93.8, 3591.0], [93.9, 3592.0], [94.0, 3593.0], [94.1, 3597.0], [94.2, 3598.0], [94.3, 3598.0], [94.4, 3599.0], [94.5, 3599.0], [94.6, 3599.0], [94.7, 3599.0], [94.8, 3599.0], [94.9, 3620.0], [95.0, 3624.0], [95.1, 3640.0], [95.2, 3643.0], [95.3, 3644.0], [95.4, 3644.0], [95.5, 3645.0], [95.6, 3645.0], [95.7, 3645.0], [95.8, 3646.0], [95.9, 3647.0], [96.0, 3647.0], [96.1, 3648.0], [96.2, 3651.0], [96.3, 3653.0], [96.4, 3653.0], [96.5, 3710.0], [96.6, 3728.0], [96.7, 3729.0], [96.8, 3729.0], [96.9, 3729.0], [97.0, 3729.0], [97.1, 3729.0], [97.2, 3729.0], [97.3, 3738.0], [97.4, 3753.0], [97.5, 3753.0], [97.6, 3754.0], [97.7, 3754.0], [97.8, 3755.0], [97.9, 3757.0], [98.0, 3759.0], [98.1, 3760.0], [98.2, 3782.0], [98.3, 3818.0], [98.4, 3824.0], [98.5, 3834.0], [98.6, 3852.0], [98.7, 3861.0], [98.8, 3868.0], [98.9, 3882.0], [99.0, 3898.0], [99.1, 3925.0], [99.2, 3935.0], [99.3, 3960.0], [99.4, 3963.0], [99.5, 3965.0], [99.6, 3981.0], [99.7, 4045.0], [99.8, 4146.0], [99.9, 4421.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 1044.0, "series": [{"data": [[600.0, 10.0], [700.0, 78.0], [800.0, 59.0], [900.0, 51.0], [1000.0, 41.0], [1100.0, 30.0], [1200.0, 22.0], [1300.0, 18.0], [1400.0, 10.0], [1500.0, 18.0], [1600.0, 11.0], [1700.0, 10.0], [1800.0, 25.0], [1900.0, 25.0], [2000.0, 24.0], [2100.0, 59.0], [2200.0, 118.0], [2300.0, 153.0], [2400.0, 58.0], [2500.0, 46.0], [2600.0, 43.0], [2800.0, 96.0], [2700.0, 69.0], [2900.0, 92.0], [3000.0, 45.0], [3100.0, 112.0], [3200.0, 217.0], [3300.0, 411.0], [3400.0, 1044.0], [3500.0, 274.0], [3600.0, 56.0], [3700.0, 62.0], [3800.0, 25.0], [3900.0, 23.0], [4000.0, 3.0], [4200.0, 2.0], [4100.0, 2.0], [4400.0, 1.0], [4600.0, 2.0], [4500.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 319.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3127.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 319.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3127.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 32.432132963988934, "minX": 1.7800374E12, "maxY": 95.10745614035092, "series": [{"data": [[1.7800374E12, 32.432132963988934], [1.78003746E12, 93.36342457775189], [1.78003752E12, 95.10745614035092]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003752E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 706.0, "minX": 5.0, "maxY": 3288.4726158559924, "series": [{"data": [[5.0, 2707.571428571429], [6.0, 910.5], [7.0, 706.0], [8.0, 1889.2857142857142], [9.0, 732.0], [10.0, 775.5], [11.0, 814.75], [12.0, 1991.0], [13.0, 1399.25], [14.0, 776.6], [15.0, 769.375], [16.0, 1532.0], [17.0, 1032.5714285714284], [18.0, 1077.7142857142858], [19.0, 1006.2222222222222], [20.0, 1089.5], [21.0, 962.8], [22.0, 785.1666666666667], [23.0, 1118.5454545454545], [24.0, 792.6666666666666], [25.0, 1162.6], [26.0, 930.7142857142857], [27.0, 798.3333333333334], [28.0, 848.1111111111111], [29.0, 867.0000000000001], [30.0, 1663.111111111111], [31.0, 897.1818181818182], [32.0, 926.769230769231], [33.0, 976.3333333333334], [34.0, 957.0], [35.0, 1599.8666666666666], [36.0, 1015.0909090909091], [37.0, 1031.125], [38.0, 1062.111111111111], [39.0, 1053.181818181818], [40.0, 1120.0], [41.0, 1208.0], [42.0, 1190.3846153846155], [43.0, 1196.5], [44.0, 1250.4444444444443], [45.0, 1367.142857142857], [46.0, 1358.2222222222222], [47.0, 1387.5454545454545], [48.0, 1318.5], [49.0, 1548.857142857143], [50.0, 1626.3333333333333], [51.0, 1608.25], [52.0, 1658.5], [53.0, 1793.6666666666667], [54.0, 1837.0], [55.0, 1877.7272727272727], [56.0, 1932.5833333333333], [58.0, 2052.083333333333], [59.0, 3214.0], [60.0, 2774.631578947369], [61.0, 2271.7], [62.0, 2045.0], [63.0, 2179.2499999999995], [65.0, 2236.4666666666667], [67.0, 2189.166666666666], [64.0, 2611.3333333333335], [69.0, 2180.176470588235], [71.0, 2380.0526315789475], [72.0, 2053.0], [74.0, 2449.0526315789475], [76.0, 2607.3684210526317], [77.0, 2380.0], [78.0, 2378.4736842105262], [79.0, 2256.0], [81.0, 2563.3333333333335], [82.0, 2310.0], [84.0, 2516.9166666666665], [87.0, 2803.3750000000005], [88.0, 2631.5], [90.0, 2830.208333333334], [91.0, 3007.6], [94.0, 3020.8709677419356], [95.0, 3172.827586206896], [97.0, 3115.2758620689656], [98.0, 3288.4726158559924], [96.0, 2657.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[87.67266395821223, 2960.3447475333815]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 98.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 962.6666666666666, "minX": 1.7800374E12, "maxY": 6610.45, "series": [{"data": [[1.7800374E12, 1389.85], [1.78003746E12, 6610.45], [1.78003752E12, 5266.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7800374E12, 962.6666666666666], [1.78003746E12, 4578.666666666667], [1.78003752E12, 3648.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003752E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1044.523545706371, "minX": 1.7800374E12, "maxY": 3286.67616959064, "series": [{"data": [[1.7800374E12, 1044.523545706371], [1.78003746E12, 3103.146185206758], [1.78003752E12, 3286.67616959064]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003752E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1044.4210526315787, "minX": 1.7800374E12, "maxY": 3286.657163742688, "series": [{"data": [[1.7800374E12, 1044.4210526315787], [1.78003746E12, 3103.1147350029078], [1.78003752E12, 3286.657163742688]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003752E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03874269005847955, "minX": 1.7800374E12, "maxY": 0.19113573407202242, "series": [{"data": [[1.7800374E12, 0.19113573407202242], [1.78003746E12, 0.05183459522422834], [1.78003752E12, 0.03874269005847955]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003752E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 678.0, "minX": 1.7800374E12, "maxY": 4696.0, "series": [{"data": [[1.7800374E12, 1912.0], [1.78003746E12, 4696.0], [1.78003752E12, 3966.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7800374E12, 678.0], [1.78003746E12, 1775.0], [1.78003752E12, 2092.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7800374E12, 1539.8], [1.78003746E12, 3525.0], [1.78003752E12, 3512.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7800374E12, 1854.38], [1.78003746E12, 3964.46], [1.78003752E12, 3836.1699999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7800374E12, 968.0], [1.78003746E12, 3330.0], [1.78003752E12, 3414.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7800374E12, 1665.7999999999997], [1.78003746E12, 3651.1], [1.78003752E12, 3640.55]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003752E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 721.0, "minX": 2.0, "maxY": 3448.5, "series": [{"data": [[32.0, 3362.0], [33.0, 3400.5], [2.0, 2851.0], [35.0, 3421.0], [34.0, 3409.0], [40.0, 2365.0], [41.0, 3212.0], [3.0, 2794.0], [4.0, 2967.5], [5.0, 924.0], [11.0, 741.0], [15.0, 721.0], [16.0, 2197.0], [19.0, 3269.0], [20.0, 1417.0], [21.0, 788.0], [23.0, 2628.0], [24.0, 2297.0], [25.0, 2375.0], [26.0, 1668.5], [27.0, 1449.5], [28.0, 2098.0], [29.0, 748.0], [30.0, 3448.5], [31.0, 3181.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 721.0, "minX": 2.0, "maxY": 3448.5, "series": [{"data": [[32.0, 3362.0], [33.0, 3400.5], [2.0, 2851.0], [35.0, 3421.0], [34.0, 3409.0], [40.0, 2365.0], [41.0, 3212.0], [3.0, 2794.0], [4.0, 2967.5], [5.0, 924.0], [11.0, 741.0], [15.0, 721.0], [16.0, 2196.0], [19.0, 3269.0], [20.0, 1417.0], [21.0, 788.0], [23.0, 2628.0], [24.0, 2296.5], [25.0, 2375.0], [26.0, 1668.5], [27.0, 1449.5], [28.0, 2098.0], [29.0, 747.0], [30.0, 3448.5], [31.0, 3181.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.9, "minX": 1.7800374E12, "maxY": 29.316666666666666, "series": [{"data": [[1.7800374E12, 6.9], [1.78003746E12, 29.316666666666666], [1.78003752E12, 21.216666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003752E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.7800374E12, "maxY": 28.616666666666667, "series": [{"data": [[1.7800374E12, 6.016666666666667], [1.78003746E12, 28.616666666666667], [1.78003752E12, 22.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003752E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.7800374E12, "maxY": 28.616666666666667, "series": [{"data": [[1.7800374E12, 6.016666666666667], [1.78003746E12, 28.616666666666667], [1.78003752E12, 22.8]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003752E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.016666666666667, "minX": 1.7800374E12, "maxY": 28.616666666666667, "series": [{"data": [[1.7800374E12, 6.016666666666667], [1.78003746E12, 28.616666666666667], [1.78003752E12, 22.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003752E12, "title": "Total Transactions Per Second"}},
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

