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
        data: {"result": {"minY": 639.0, "minX": 0.0, "maxY": 4825.0, "series": [{"data": [[0.0, 639.0], [0.1, 654.0], [0.2, 673.0], [0.3, 680.0], [0.4, 689.0], [0.5, 696.0], [0.6, 702.0], [0.7, 703.0], [0.8, 708.0], [0.9, 713.0], [1.0, 727.0], [1.1, 735.0], [1.2, 736.0], [1.3, 738.0], [1.4, 747.0], [1.5, 752.0], [1.6, 752.0], [1.7, 759.0], [1.8, 765.0], [1.9, 769.0], [2.0, 771.0], [2.1, 772.0], [2.2, 775.0], [2.3, 779.0], [2.4, 781.0], [2.5, 787.0], [2.6, 790.0], [2.7, 800.0], [2.8, 805.0], [2.9, 813.0], [3.0, 816.0], [3.1, 818.0], [3.2, 828.0], [3.3, 829.0], [3.4, 836.0], [3.5, 843.0], [3.6, 849.0], [3.7, 849.0], [3.8, 872.0], [3.9, 874.0], [4.0, 878.0], [4.1, 881.0], [4.2, 884.0], [4.3, 893.0], [4.4, 898.0], [4.5, 905.0], [4.6, 916.0], [4.7, 921.0], [4.8, 926.0], [4.9, 929.0], [5.0, 932.0], [5.1, 937.0], [5.2, 937.0], [5.3, 951.0], [5.4, 959.0], [5.5, 971.0], [5.6, 986.0], [5.7, 993.0], [5.8, 999.0], [5.9, 1005.0], [6.0, 1017.0], [6.1, 1024.0], [6.2, 1039.0], [6.3, 1043.0], [6.4, 1049.0], [6.5, 1061.0], [6.6, 1071.0], [6.7, 1074.0], [6.8, 1086.0], [6.9, 1101.0], [7.0, 1102.0], [7.1, 1115.0], [7.2, 1126.0], [7.3, 1131.0], [7.4, 1150.0], [7.5, 1162.0], [7.6, 1168.0], [7.7, 1185.0], [7.8, 1197.0], [7.9, 1204.0], [8.0, 1217.0], [8.1, 1222.0], [8.2, 1251.0], [8.3, 1252.0], [8.4, 1265.0], [8.5, 1288.0], [8.6, 1313.0], [8.7, 1347.0], [8.8, 1374.0], [8.9, 1391.0], [9.0, 1415.0], [9.1, 1451.0], [9.2, 1486.0], [9.3, 1506.0], [9.4, 1534.0], [9.5, 1556.0], [9.6, 1574.0], [9.7, 1603.0], [9.8, 1614.0], [9.9, 1647.0], [10.0, 1692.0], [10.1, 1733.0], [10.2, 1737.0], [10.3, 1785.0], [10.4, 1791.0], [10.5, 1805.0], [10.6, 1820.0], [10.7, 1822.0], [10.8, 1829.0], [10.9, 1834.0], [11.0, 1842.0], [11.1, 1854.0], [11.2, 1876.0], [11.3, 1876.0], [11.4, 1911.0], [11.5, 1911.0], [11.6, 1926.0], [11.7, 1977.0], [11.8, 1979.0], [11.9, 1980.0], [12.0, 1988.0], [12.1, 1989.0], [12.2, 2002.0], [12.3, 2018.0], [12.4, 2024.0], [12.5, 2043.0], [12.6, 2045.0], [12.7, 2045.0], [12.8, 2054.0], [12.9, 2054.0], [13.0, 2060.0], [13.1, 2061.0], [13.2, 2066.0], [13.3, 2066.0], [13.4, 2079.0], [13.5, 2079.0], [13.6, 2103.0], [13.7, 2103.0], [13.8, 2108.0], [13.9, 2109.0], [14.0, 2110.0], [14.1, 2110.0], [14.2, 2113.0], [14.3, 2122.0], [14.4, 2128.0], [14.5, 2130.0], [14.6, 2134.0], [14.7, 2137.0], [14.8, 2137.0], [14.9, 2142.0], [15.0, 2148.0], [15.1, 2155.0], [15.2, 2160.0], [15.3, 2160.0], [15.4, 2161.0], [15.5, 2164.0], [15.6, 2166.0], [15.7, 2166.0], [15.8, 2175.0], [15.9, 2182.0], [16.0, 2182.0], [16.1, 2187.0], [16.2, 2193.0], [16.3, 2194.0], [16.4, 2197.0], [16.5, 2197.0], [16.6, 2197.0], [16.7, 2198.0], [16.8, 2204.0], [16.9, 2206.0], [17.0, 2207.0], [17.1, 2209.0], [17.2, 2210.0], [17.3, 2212.0], [17.4, 2215.0], [17.5, 2217.0], [17.6, 2229.0], [17.7, 2232.0], [17.8, 2234.0], [17.9, 2235.0], [18.0, 2238.0], [18.1, 2239.0], [18.2, 2242.0], [18.3, 2242.0], [18.4, 2245.0], [18.5, 2247.0], [18.6, 2248.0], [18.7, 2250.0], [18.8, 2252.0], [18.9, 2252.0], [19.0, 2253.0], [19.1, 2255.0], [19.2, 2268.0], [19.3, 2269.0], [19.4, 2270.0], [19.5, 2273.0], [19.6, 2277.0], [19.7, 2280.0], [19.8, 2286.0], [19.9, 2287.0], [20.0, 2290.0], [20.1, 2291.0], [20.2, 2295.0], [20.3, 2296.0], [20.4, 2306.0], [20.5, 2306.0], [20.6, 2308.0], [20.7, 2310.0], [20.8, 2312.0], [20.9, 2312.0], [21.0, 2314.0], [21.1, 2324.0], [21.2, 2325.0], [21.3, 2329.0], [21.4, 2331.0], [21.5, 2333.0], [21.6, 2333.0], [21.7, 2334.0], [21.8, 2335.0], [21.9, 2339.0], [22.0, 2339.0], [22.1, 2339.0], [22.2, 2342.0], [22.3, 2344.0], [22.4, 2346.0], [22.5, 2346.0], [22.6, 2347.0], [22.7, 2348.0], [22.8, 2349.0], [22.9, 2351.0], [23.0, 2354.0], [23.1, 2354.0], [23.2, 2354.0], [23.3, 2354.0], [23.4, 2354.0], [23.5, 2356.0], [23.6, 2356.0], [23.7, 2356.0], [23.8, 2356.0], [23.9, 2361.0], [24.0, 2366.0], [24.1, 2369.0], [24.2, 2371.0], [24.3, 2381.0], [24.4, 2384.0], [24.5, 2384.0], [24.6, 2390.0], [24.7, 2392.0], [24.8, 2395.0], [24.9, 2397.0], [25.0, 2400.0], [25.1, 2401.0], [25.2, 2405.0], [25.3, 2408.0], [25.4, 2412.0], [25.5, 2418.0], [25.6, 2430.0], [25.7, 2431.0], [25.8, 2432.0], [25.9, 2436.0], [26.0, 2436.0], [26.1, 2437.0], [26.2, 2457.0], [26.3, 2457.0], [26.4, 2457.0], [26.5, 2458.0], [26.6, 2458.0], [26.7, 2459.0], [26.8, 2459.0], [26.9, 2464.0], [27.0, 2476.0], [27.1, 2480.0], [27.2, 2491.0], [27.3, 2495.0], [27.4, 2498.0], [27.5, 2503.0], [27.6, 2505.0], [27.7, 2505.0], [27.8, 2506.0], [27.9, 2512.0], [28.0, 2521.0], [28.1, 2531.0], [28.2, 2534.0], [28.3, 2551.0], [28.4, 2561.0], [28.5, 2570.0], [28.6, 2572.0], [28.7, 2574.0], [28.8, 2584.0], [28.9, 2585.0], [29.0, 2588.0], [29.1, 2593.0], [29.2, 2594.0], [29.3, 2594.0], [29.4, 2599.0], [29.5, 2600.0], [29.6, 2603.0], [29.7, 2605.0], [29.8, 2612.0], [29.9, 2614.0], [30.0, 2631.0], [30.1, 2633.0], [30.2, 2633.0], [30.3, 2636.0], [30.4, 2637.0], [30.5, 2639.0], [30.6, 2640.0], [30.7, 2641.0], [30.8, 2643.0], [30.9, 2647.0], [31.0, 2649.0], [31.1, 2650.0], [31.2, 2652.0], [31.3, 2659.0], [31.4, 2660.0], [31.5, 2664.0], [31.6, 2668.0], [31.7, 2671.0], [31.8, 2674.0], [31.9, 2676.0], [32.0, 2689.0], [32.1, 2694.0], [32.2, 2700.0], [32.3, 2700.0], [32.4, 2703.0], [32.5, 2705.0], [32.6, 2707.0], [32.7, 2711.0], [32.8, 2721.0], [32.9, 2723.0], [33.0, 2734.0], [33.1, 2738.0], [33.2, 2739.0], [33.3, 2746.0], [33.4, 2749.0], [33.5, 2759.0], [33.6, 2762.0], [33.7, 2768.0], [33.8, 2768.0], [33.9, 2770.0], [34.0, 2772.0], [34.1, 2772.0], [34.2, 2779.0], [34.3, 2787.0], [34.4, 2804.0], [34.5, 2812.0], [34.6, 2822.0], [34.7, 2831.0], [34.8, 2835.0], [34.9, 2837.0], [35.0, 2838.0], [35.1, 2841.0], [35.2, 2855.0], [35.3, 2865.0], [35.4, 2893.0], [35.5, 2906.0], [35.6, 2909.0], [35.7, 2911.0], [35.8, 2919.0], [35.9, 2927.0], [36.0, 2927.0], [36.1, 2931.0], [36.2, 2935.0], [36.3, 2944.0], [36.4, 2954.0], [36.5, 2958.0], [36.6, 2964.0], [36.7, 2971.0], [36.8, 2973.0], [36.9, 2975.0], [37.0, 2981.0], [37.1, 2984.0], [37.2, 2985.0], [37.3, 2986.0], [37.4, 2991.0], [37.5, 2998.0], [37.6, 2998.0], [37.7, 3018.0], [37.8, 3020.0], [37.9, 3020.0], [38.0, 3020.0], [38.1, 3027.0], [38.2, 3027.0], [38.3, 3028.0], [38.4, 3029.0], [38.5, 3029.0], [38.6, 3038.0], [38.7, 3040.0], [38.8, 3047.0], [38.9, 3047.0], [39.0, 3048.0], [39.1, 3048.0], [39.2, 3049.0], [39.3, 3053.0], [39.4, 3058.0], [39.5, 3060.0], [39.6, 3062.0], [39.7, 3071.0], [39.8, 3073.0], [39.9, 3075.0], [40.0, 3083.0], [40.1, 3084.0], [40.2, 3091.0], [40.3, 3097.0], [40.4, 3097.0], [40.5, 3098.0], [40.6, 3098.0], [40.7, 3098.0], [40.8, 3099.0], [40.9, 3099.0], [41.0, 3106.0], [41.1, 3106.0], [41.2, 3106.0], [41.3, 3106.0], [41.4, 3109.0], [41.5, 3112.0], [41.6, 3115.0], [41.7, 3115.0], [41.8, 3117.0], [41.9, 3118.0], [42.0, 3133.0], [42.1, 3134.0], [42.2, 3134.0], [42.3, 3135.0], [42.4, 3135.0], [42.5, 3135.0], [42.6, 3135.0], [42.7, 3137.0], [42.8, 3138.0], [42.9, 3139.0], [43.0, 3141.0], [43.1, 3145.0], [43.2, 3147.0], [43.3, 3148.0], [43.4, 3159.0], [43.5, 3164.0], [43.6, 3165.0], [43.7, 3165.0], [43.8, 3166.0], [43.9, 3166.0], [44.0, 3166.0], [44.1, 3167.0], [44.2, 3167.0], [44.3, 3167.0], [44.4, 3167.0], [44.5, 3168.0], [44.6, 3168.0], [44.7, 3174.0], [44.8, 3175.0], [44.9, 3175.0], [45.0, 3176.0], [45.1, 3181.0], [45.2, 3182.0], [45.3, 3182.0], [45.4, 3183.0], [45.5, 3183.0], [45.6, 3183.0], [45.7, 3184.0], [45.8, 3185.0], [45.9, 3185.0], [46.0, 3186.0], [46.1, 3188.0], [46.2, 3190.0], [46.3, 3190.0], [46.4, 3190.0], [46.5, 3190.0], [46.6, 3191.0], [46.7, 3191.0], [46.8, 3191.0], [46.9, 3191.0], [47.0, 3191.0], [47.1, 3192.0], [47.2, 3192.0], [47.3, 3192.0], [47.4, 3192.0], [47.5, 3192.0], [47.6, 3192.0], [47.7, 3192.0], [47.8, 3193.0], [47.9, 3193.0], [48.0, 3193.0], [48.1, 3195.0], [48.2, 3196.0], [48.3, 3196.0], [48.4, 3196.0], [48.5, 3196.0], [48.6, 3196.0], [48.7, 3196.0], [48.8, 3197.0], [48.9, 3198.0], [49.0, 3198.0], [49.1, 3199.0], [49.2, 3199.0], [49.3, 3200.0], [49.4, 3201.0], [49.5, 3201.0], [49.6, 3201.0], [49.7, 3202.0], [49.8, 3202.0], [49.9, 3202.0], [50.0, 3202.0], [50.1, 3203.0], [50.2, 3205.0], [50.3, 3208.0], [50.4, 3211.0], [50.5, 3212.0], [50.6, 3213.0], [50.7, 3213.0], [50.8, 3213.0], [50.9, 3214.0], [51.0, 3214.0], [51.1, 3215.0], [51.2, 3216.0], [51.3, 3219.0], [51.4, 3225.0], [51.5, 3230.0], [51.6, 3233.0], [51.7, 3234.0], [51.8, 3235.0], [51.9, 3235.0], [52.0, 3235.0], [52.1, 3237.0], [52.2, 3238.0], [52.3, 3240.0], [52.4, 3248.0], [52.5, 3249.0], [52.6, 3250.0], [52.7, 3251.0], [52.8, 3253.0], [52.9, 3255.0], [53.0, 3256.0], [53.1, 3258.0], [53.2, 3259.0], [53.3, 3259.0], [53.4, 3261.0], [53.5, 3262.0], [53.6, 3266.0], [53.7, 3266.0], [53.8, 3266.0], [53.9, 3271.0], [54.0, 3272.0], [54.1, 3274.0], [54.2, 3274.0], [54.3, 3274.0], [54.4, 3274.0], [54.5, 3275.0], [54.6, 3275.0], [54.7, 3275.0], [54.8, 3275.0], [54.9, 3276.0], [55.0, 3276.0], [55.1, 3276.0], [55.2, 3276.0], [55.3, 3277.0], [55.4, 3277.0], [55.5, 3277.0], [55.6, 3277.0], [55.7, 3278.0], [55.8, 3278.0], [55.9, 3278.0], [56.0, 3278.0], [56.1, 3279.0], [56.2, 3279.0], [56.3, 3279.0], [56.4, 3287.0], [56.5, 3288.0], [56.6, 3300.0], [56.7, 3302.0], [56.8, 3302.0], [56.9, 3303.0], [57.0, 3303.0], [57.1, 3303.0], [57.2, 3303.0], [57.3, 3303.0], [57.4, 3304.0], [57.5, 3305.0], [57.6, 3305.0], [57.7, 3306.0], [57.8, 3306.0], [57.9, 3310.0], [58.0, 3313.0], [58.1, 3314.0], [58.2, 3314.0], [58.3, 3315.0], [58.4, 3315.0], [58.5, 3315.0], [58.6, 3315.0], [58.7, 3316.0], [58.8, 3317.0], [58.9, 3318.0], [59.0, 3318.0], [59.1, 3318.0], [59.2, 3318.0], [59.3, 3318.0], [59.4, 3318.0], [59.5, 3319.0], [59.6, 3319.0], [59.7, 3319.0], [59.8, 3320.0], [59.9, 3320.0], [60.0, 3320.0], [60.1, 3320.0], [60.2, 3320.0], [60.3, 3320.0], [60.4, 3321.0], [60.5, 3322.0], [60.6, 3322.0], [60.7, 3324.0], [60.8, 3325.0], [60.9, 3325.0], [61.0, 3326.0], [61.1, 3326.0], [61.2, 3327.0], [61.3, 3327.0], [61.4, 3327.0], [61.5, 3329.0], [61.6, 3329.0], [61.7, 3330.0], [61.8, 3331.0], [61.9, 3331.0], [62.0, 3332.0], [62.1, 3333.0], [62.2, 3333.0], [62.3, 3333.0], [62.4, 3334.0], [62.5, 3334.0], [62.6, 3334.0], [62.7, 3334.0], [62.8, 3334.0], [62.9, 3335.0], [63.0, 3335.0], [63.1, 3335.0], [63.2, 3335.0], [63.3, 3336.0], [63.4, 3336.0], [63.5, 3336.0], [63.6, 3336.0], [63.7, 3337.0], [63.8, 3337.0], [63.9, 3337.0], [64.0, 3338.0], [64.1, 3339.0], [64.2, 3341.0], [64.3, 3341.0], [64.4, 3341.0], [64.5, 3342.0], [64.6, 3343.0], [64.7, 3343.0], [64.8, 3343.0], [64.9, 3343.0], [65.0, 3343.0], [65.1, 3344.0], [65.2, 3344.0], [65.3, 3344.0], [65.4, 3345.0], [65.5, 3346.0], [65.6, 3346.0], [65.7, 3347.0], [65.8, 3348.0], [65.9, 3349.0], [66.0, 3349.0], [66.1, 3350.0], [66.2, 3352.0], [66.3, 3352.0], [66.4, 3352.0], [66.5, 3352.0], [66.6, 3352.0], [66.7, 3353.0], [66.8, 3353.0], [66.9, 3353.0], [67.0, 3353.0], [67.1, 3353.0], [67.2, 3353.0], [67.3, 3354.0], [67.4, 3354.0], [67.5, 3354.0], [67.6, 3354.0], [67.7, 3355.0], [67.8, 3355.0], [67.9, 3355.0], [68.0, 3357.0], [68.1, 3369.0], [68.2, 3370.0], [68.3, 3372.0], [68.4, 3376.0], [68.5, 3376.0], [68.6, 3376.0], [68.7, 3376.0], [68.8, 3376.0], [68.9, 3376.0], [69.0, 3377.0], [69.1, 3377.0], [69.2, 3377.0], [69.3, 3377.0], [69.4, 3377.0], [69.5, 3377.0], [69.6, 3378.0], [69.7, 3378.0], [69.8, 3378.0], [69.9, 3378.0], [70.0, 3378.0], [70.1, 3379.0], [70.2, 3379.0], [70.3, 3379.0], [70.4, 3379.0], [70.5, 3379.0], [70.6, 3379.0], [70.7, 3380.0], [70.8, 3380.0], [70.9, 3380.0], [71.0, 3380.0], [71.1, 3380.0], [71.2, 3380.0], [71.3, 3380.0], [71.4, 3381.0], [71.5, 3381.0], [71.6, 3381.0], [71.7, 3381.0], [71.8, 3382.0], [71.9, 3382.0], [72.0, 3382.0], [72.1, 3382.0], [72.2, 3382.0], [72.3, 3383.0], [72.4, 3383.0], [72.5, 3385.0], [72.6, 3385.0], [72.7, 3386.0], [72.8, 3386.0], [72.9, 3388.0], [73.0, 3389.0], [73.1, 3390.0], [73.2, 3390.0], [73.3, 3390.0], [73.4, 3390.0], [73.5, 3392.0], [73.6, 3392.0], [73.7, 3393.0], [73.8, 3393.0], [73.9, 3395.0], [74.0, 3398.0], [74.1, 3398.0], [74.2, 3399.0], [74.3, 3399.0], [74.4, 3399.0], [74.5, 3399.0], [74.6, 3399.0], [74.7, 3400.0], [74.8, 3400.0], [74.9, 3400.0], [75.0, 3401.0], [75.1, 3401.0], [75.2, 3402.0], [75.3, 3412.0], [75.4, 3412.0], [75.5, 3413.0], [75.6, 3413.0], [75.7, 3413.0], [75.8, 3413.0], [75.9, 3414.0], [76.0, 3415.0], [76.1, 3415.0], [76.2, 3415.0], [76.3, 3416.0], [76.4, 3416.0], [76.5, 3418.0], [76.6, 3424.0], [76.7, 3426.0], [76.8, 3426.0], [76.9, 3426.0], [77.0, 3427.0], [77.1, 3429.0], [77.2, 3435.0], [77.3, 3436.0], [77.4, 3437.0], [77.5, 3437.0], [77.6, 3437.0], [77.7, 3437.0], [77.8, 3437.0], [77.9, 3437.0], [78.0, 3437.0], [78.1, 3438.0], [78.2, 3438.0], [78.3, 3440.0], [78.4, 3448.0], [78.5, 3448.0], [78.6, 3448.0], [78.7, 3448.0], [78.8, 3450.0], [78.9, 3450.0], [79.0, 3451.0], [79.1, 3452.0], [79.2, 3453.0], [79.3, 3453.0], [79.4, 3453.0], [79.5, 3453.0], [79.6, 3453.0], [79.7, 3460.0], [79.8, 3460.0], [79.9, 3460.0], [80.0, 3461.0], [80.1, 3461.0], [80.2, 3461.0], [80.3, 3462.0], [80.4, 3462.0], [80.5, 3462.0], [80.6, 3462.0], [80.7, 3462.0], [80.8, 3462.0], [80.9, 3462.0], [81.0, 3463.0], [81.1, 3463.0], [81.2, 3463.0], [81.3, 3463.0], [81.4, 3463.0], [81.5, 3464.0], [81.6, 3464.0], [81.7, 3465.0], [81.8, 3468.0], [81.9, 3469.0], [82.0, 3477.0], [82.1, 3478.0], [82.2, 3479.0], [82.3, 3479.0], [82.4, 3479.0], [82.5, 3480.0], [82.6, 3480.0], [82.7, 3481.0], [82.8, 3485.0], [82.9, 3492.0], [83.0, 3499.0], [83.1, 3499.0], [83.2, 3500.0], [83.3, 3500.0], [83.4, 3501.0], [83.5, 3501.0], [83.6, 3503.0], [83.7, 3515.0], [83.8, 3516.0], [83.9, 3519.0], [84.0, 3520.0], [84.1, 3521.0], [84.2, 3521.0], [84.3, 3521.0], [84.4, 3521.0], [84.5, 3521.0], [84.6, 3522.0], [84.7, 3522.0], [84.8, 3522.0], [84.9, 3522.0], [85.0, 3523.0], [85.1, 3524.0], [85.2, 3524.0], [85.3, 3524.0], [85.4, 3524.0], [85.5, 3525.0], [85.6, 3525.0], [85.7, 3526.0], [85.8, 3529.0], [85.9, 3531.0], [86.0, 3535.0], [86.1, 3539.0], [86.2, 3540.0], [86.3, 3540.0], [86.4, 3540.0], [86.5, 3541.0], [86.6, 3541.0], [86.7, 3557.0], [86.8, 3558.0], [86.9, 3559.0], [87.0, 3559.0], [87.1, 3559.0], [87.2, 3562.0], [87.3, 3563.0], [87.4, 3563.0], [87.5, 3563.0], [87.6, 3569.0], [87.7, 3584.0], [87.8, 3585.0], [87.9, 3585.0], [88.0, 3586.0], [88.1, 3592.0], [88.2, 3597.0], [88.3, 3598.0], [88.4, 3600.0], [88.5, 3607.0], [88.6, 3608.0], [88.7, 3608.0], [88.8, 3623.0], [88.9, 3629.0], [89.0, 3630.0], [89.1, 3630.0], [89.2, 3630.0], [89.3, 3630.0], [89.4, 3631.0], [89.5, 3631.0], [89.6, 3633.0], [89.7, 3640.0], [89.8, 3653.0], [89.9, 3654.0], [90.0, 3655.0], [90.1, 3656.0], [90.2, 3657.0], [90.3, 3657.0], [90.4, 3657.0], [90.5, 3657.0], [90.6, 3658.0], [90.7, 3660.0], [90.8, 3660.0], [90.9, 3662.0], [91.0, 3664.0], [91.1, 3667.0], [91.2, 3674.0], [91.3, 3677.0], [91.4, 3685.0], [91.5, 3686.0], [91.6, 3686.0], [91.7, 3687.0], [91.8, 3687.0], [91.9, 3694.0], [92.0, 3698.0], [92.1, 3699.0], [92.2, 3699.0], [92.3, 3699.0], [92.4, 3700.0], [92.5, 3700.0], [92.6, 3701.0], [92.7, 3701.0], [92.8, 3701.0], [92.9, 3701.0], [93.0, 3701.0], [93.1, 3707.0], [93.2, 3710.0], [93.3, 3710.0], [93.4, 3712.0], [93.5, 3717.0], [93.6, 3721.0], [93.7, 3722.0], [93.8, 3734.0], [93.9, 3745.0], [94.0, 3751.0], [94.1, 3755.0], [94.2, 3755.0], [94.3, 3770.0], [94.4, 3775.0], [94.5, 3788.0], [94.6, 3789.0], [94.7, 3789.0], [94.8, 3790.0], [94.9, 3790.0], [95.0, 3791.0], [95.1, 3791.0], [95.2, 3791.0], [95.3, 3791.0], [95.4, 3791.0], [95.5, 3793.0], [95.6, 3794.0], [95.7, 3799.0], [95.8, 3800.0], [95.9, 3829.0], [96.0, 3830.0], [96.1, 3835.0], [96.2, 3839.0], [96.3, 3856.0], [96.4, 3862.0], [96.5, 3874.0], [96.6, 3876.0], [96.7, 3886.0], [96.8, 3915.0], [96.9, 3918.0], [97.0, 3932.0], [97.1, 3934.0], [97.2, 3954.0], [97.3, 3956.0], [97.4, 3963.0], [97.5, 3967.0], [97.6, 3983.0], [97.7, 3988.0], [97.8, 3991.0], [97.9, 3996.0], [98.0, 3998.0], [98.1, 4035.0], [98.2, 4043.0], [98.3, 4123.0], [98.4, 4144.0], [98.5, 4167.0], [98.6, 4171.0], [98.7, 4208.0], [98.8, 4211.0], [98.9, 4250.0], [99.0, 4255.0], [99.1, 4260.0], [99.2, 4280.0], [99.3, 4316.0], [99.4, 4385.0], [99.5, 4394.0], [99.6, 4606.0], [99.7, 4611.0], [99.8, 4787.0], [99.9, 4814.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 623.0, "series": [{"data": [[600.0, 20.0], [700.0, 71.0], [800.0, 62.0], [900.0, 49.0], [1000.0, 36.0], [1100.0, 33.0], [1200.0, 24.0], [1300.0, 15.0], [1400.0, 10.0], [1500.0, 15.0], [1600.0, 12.0], [1700.0, 15.0], [1800.0, 31.0], [1900.0, 27.0], [2000.0, 48.0], [2100.0, 111.0], [2300.0, 160.0], [2200.0, 124.0], [2400.0, 86.0], [2500.0, 68.0], [2600.0, 96.0], [2800.0, 38.0], [2700.0, 74.0], [2900.0, 76.0], [3000.0, 114.0], [3100.0, 289.0], [3200.0, 252.0], [3300.0, 623.0], [3400.0, 294.0], [3500.0, 182.0], [3600.0, 136.0], [3700.0, 118.0], [3800.0, 34.0], [3900.0, 45.0], [4000.0, 8.0], [4300.0, 9.0], [4200.0, 22.0], [4100.0, 14.0], [4500.0, 2.0], [4600.0, 5.0], [4800.0, 5.0], [4700.0, 4.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 320.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3137.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 320.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3137.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 43.82913669064749, "minX": 1.78003728E12, "maxY": 96.01390498261866, "series": [{"data": [[1.7800374E12, 93.80425531914891], [1.78003734E12, 96.01390498261866], [1.78003728E12, 43.82913669064749]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800374E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 712.0, "minX": 3.0, "maxY": 3489.266666666667, "series": [{"data": [[3.0, 3395.0], [4.0, 824.0], [6.0, 801.5], [7.0, 2889.8], [8.0, 712.0], [9.0, 915.0], [10.0, 1860.142857142857], [11.0, 782.75], [12.0, 1989.0], [13.0, 723.0000000000001], [14.0, 1775.8], [15.0, 960.0909090909091], [16.0, 1223.2], [17.0, 1091.3333333333333], [18.0, 1049.7142857142858], [19.0, 774.4444444444445], [20.0, 1165.5454545454545], [21.0, 1692.5], [22.0, 908.3125], [23.0, 789.6666666666667], [24.0, 747.0], [25.0, 824.0], [26.0, 893.3333333333334], [27.0, 1278.4285714285713], [28.0, 848.8571428571429], [29.0, 859.75], [30.0, 879.8333333333334], [31.0, 895.125], [32.0, 913.6], [33.0, 938.4615384615386], [34.0, 975.4545454545455], [35.0, 991.1428571428571], [36.0, 983.0], [37.0, 1040.5714285714284], [38.0, 1099.111111111111], [39.0, 1144.5], [40.0, 1132.2499999999998], [41.0, 1126.8666666666666], [42.0, 1198.111111111111], [43.0, 1271.8571428571427], [44.0, 1260.7777777777778], [45.0, 1261.125], [46.0, 1307.3999999999999], [47.0, 1491.857142857143], [48.0, 1574.0], [49.0, 1524.9374999999998], [50.0, 1752.0], [51.0, 1626.5], [52.0, 1812.7777777777778], [53.0, 1729.5], [54.0, 1840.888888888889], [55.0, 2024.4285714285716], [56.0, 2073.8], [57.0, 3292.4285714285716], [58.0, 2045.0714285714284], [60.0, 2087.4166666666665], [61.0, 2113.571428571429], [62.0, 2981.0000000000005], [63.0, 2198.307692307692], [65.0, 2254.0714285714284], [66.0, 2015.0], [67.0, 2273.0666666666666], [69.0, 2214.05], [71.0, 2229.235294117647], [74.0, 2394.318181818182], [77.0, 2574.1499999999996], [79.0, 2567.708333333333], [81.0, 2486.6086956521735], [84.0, 2533.7692307692305], [87.0, 2661.8399999999997], [88.0, 2631.0], [90.0, 2891.708333333333], [91.0, 2602.8], [94.0, 2926.344827586207], [93.0, 2701.0], [92.0, 3489.266666666667], [97.0, 3203.3400000000024]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[86.86982933179034, 2899.494937807342]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 97.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1482.6666666666667, "minX": 1.78003728E12, "maxY": 6645.1, "series": [{"data": [[1.7800374E12, 4523.75], [1.78003734E12, 6645.1], [1.78003728E12, 2140.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7800374E12, 3133.3333333333335], [1.78003734E12, 4602.666666666667], [1.78003728E12, 1482.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800374E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1443.7122302158261, "minX": 1.78003728E12, "maxY": 3216.603404255322, "series": [{"data": [[1.7800374E12, 3216.603404255322], [1.78003734E12, 3152.573001158748], [1.78003728E12, 1443.7122302158261]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800374E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1443.6510791366916, "minX": 1.78003728E12, "maxY": 3216.5965957446792, "series": [{"data": [[1.7800374E12, 3216.5965957446792], [1.78003734E12, 3152.550405561993], [1.78003728E12, 1443.6510791366916]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800374E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027234042553191545, "minX": 1.78003728E12, "maxY": 0.1744604316546763, "series": [{"data": [[1.7800374E12, 0.027234042553191545], [1.78003734E12, 0.04345307068366165], [1.78003728E12, 0.1744604316546763]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800374E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 639.0, "minX": 1.78003728E12, "maxY": 4825.0, "series": [{"data": [[1.7800374E12, 4814.0], [1.78003734E12, 4825.0], [1.78003728E12, 2927.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7800374E12, 1988.0], [1.78003734E12, 2031.0], [1.78003728E12, 639.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7800374E12, 3721.0], [1.78003734E12, 3640.0], [1.78003728E12, 2337.6000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7800374E12, 4251.2], [1.78003734E12, 4292.0], [1.78003728E12, 2927.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7800374E12, 3329.0], [1.78003734E12, 3303.0], [1.78003728E12, 1219.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7800374E12, 3876.0], [1.78003734E12, 3773.249999999999], [1.78003728E12, 2481.3499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800374E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 708.5, "minX": 1.0, "maxY": 3603.5, "series": [{"data": [[2.0, 2961.5], [33.0, 3115.0], [32.0, 3188.5], [34.0, 3188.0], [35.0, 3337.0], [36.0, 3382.5], [37.0, 3196.0], [38.0, 3603.5], [41.0, 2506.0], [4.0, 2566.5], [5.0, 2839.0], [6.0, 2711.5], [9.0, 735.0], [10.0, 708.5], [1.0, 2638.5], [16.0, 3192.0], [17.0, 2384.0], [18.0, 1451.5], [19.0, 1486.0], [20.0, 3287.0], [22.0, 1268.5], [23.0, 2339.0], [25.0, 1898.5], [26.0, 2346.5], [27.0, 2157.5], [28.0, 3073.0], [29.0, 2649.5], [30.0, 3304.0], [31.0, 3320.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 708.5, "minX": 1.0, "maxY": 3603.5, "series": [{"data": [[2.0, 2961.5], [33.0, 3115.0], [32.0, 3188.5], [34.0, 3188.0], [35.0, 3337.0], [36.0, 3382.5], [37.0, 3196.0], [38.0, 3603.5], [41.0, 2506.0], [4.0, 2566.5], [5.0, 2839.0], [6.0, 2711.5], [9.0, 735.0], [10.0, 708.5], [1.0, 2638.5], [16.0, 3192.0], [17.0, 2384.0], [18.0, 1451.5], [19.0, 1486.0], [20.0, 3287.0], [22.0, 1268.5], [23.0, 2339.0], [25.0, 1898.5], [26.0, 2346.5], [27.0, 2157.5], [28.0, 3073.0], [29.0, 2649.5], [30.0, 3304.0], [31.0, 3320.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.4, "minX": 1.78003728E12, "maxY": 29.183333333333334, "series": [{"data": [[1.7800374E12, 18.033333333333335], [1.78003734E12, 29.183333333333334], [1.78003728E12, 10.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800374E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.266666666666667, "minX": 1.78003728E12, "maxY": 28.766666666666666, "series": [{"data": [[1.7800374E12, 19.583333333333332], [1.78003734E12, 28.766666666666666], [1.78003728E12, 9.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800374E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.266666666666667, "minX": 1.78003728E12, "maxY": 28.766666666666666, "series": [{"data": [[1.7800374E12, 19.583333333333332], [1.78003734E12, 28.766666666666666], [1.78003728E12, 9.266666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800374E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.266666666666667, "minX": 1.78003728E12, "maxY": 28.766666666666666, "series": [{"data": [[1.7800374E12, 19.583333333333332], [1.78003734E12, 28.766666666666666], [1.78003728E12, 9.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800374E12, "title": "Total Transactions Per Second"}},
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

