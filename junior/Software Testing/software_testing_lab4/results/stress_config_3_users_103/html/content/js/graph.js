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
        data: {"result": {"minY": 652.0, "minX": 0.0, "maxY": 5566.0, "series": [{"data": [[0.0, 652.0], [0.1, 663.0], [0.2, 667.0], [0.3, 685.0], [0.4, 695.0], [0.5, 701.0], [0.6, 703.0], [0.7, 705.0], [0.8, 712.0], [0.9, 715.0], [1.0, 723.0], [1.1, 724.0], [1.2, 733.0], [1.3, 736.0], [1.4, 744.0], [1.5, 750.0], [1.6, 750.0], [1.7, 756.0], [1.8, 767.0], [1.9, 770.0], [2.0, 773.0], [2.1, 784.0], [2.2, 785.0], [2.3, 793.0], [2.4, 795.0], [2.5, 797.0], [2.6, 802.0], [2.7, 819.0], [2.8, 826.0], [2.9, 828.0], [3.0, 831.0], [3.1, 832.0], [3.2, 834.0], [3.3, 837.0], [3.4, 844.0], [3.5, 847.0], [3.6, 850.0], [3.7, 855.0], [3.8, 867.0], [3.9, 868.0], [4.0, 870.0], [4.1, 873.0], [4.2, 881.0], [4.3, 883.0], [4.4, 884.0], [4.5, 889.0], [4.6, 894.0], [4.7, 896.0], [4.8, 904.0], [4.9, 906.0], [5.0, 909.0], [5.1, 915.0], [5.2, 921.0], [5.3, 932.0], [5.4, 944.0], [5.5, 947.0], [5.6, 951.0], [5.7, 962.0], [5.8, 969.0], [5.9, 973.0], [6.0, 995.0], [6.1, 1004.0], [6.2, 1023.0], [6.3, 1038.0], [6.4, 1053.0], [6.5, 1067.0], [6.6, 1078.0], [6.7, 1086.0], [6.8, 1090.0], [6.9, 1110.0], [7.0, 1122.0], [7.1, 1149.0], [7.2, 1159.0], [7.3, 1185.0], [7.4, 1212.0], [7.5, 1227.0], [7.6, 1247.0], [7.7, 1271.0], [7.8, 1301.0], [7.9, 1322.0], [8.0, 1336.0], [8.1, 1365.0], [8.2, 1385.0], [8.3, 1389.0], [8.4, 1422.0], [8.5, 1480.0], [8.6, 1522.0], [8.7, 1534.0], [8.8, 1541.0], [8.9, 1596.0], [9.0, 1665.0], [9.1, 1672.0], [9.2, 1677.0], [9.3, 1705.0], [9.4, 1736.0], [9.5, 1736.0], [9.6, 1753.0], [9.7, 1806.0], [9.8, 1836.0], [9.9, 1843.0], [10.0, 1859.0], [10.1, 1859.0], [10.2, 1885.0], [10.3, 1916.0], [10.4, 1920.0], [10.5, 1928.0], [10.6, 1940.0], [10.7, 1962.0], [10.8, 1972.0], [10.9, 2004.0], [11.0, 2008.0], [11.1, 2010.0], [11.2, 2059.0], [11.3, 2063.0], [11.4, 2075.0], [11.5, 2092.0], [11.6, 2120.0], [11.7, 2154.0], [11.8, 2154.0], [11.9, 2154.0], [12.0, 2164.0], [12.1, 2193.0], [12.2, 2208.0], [12.3, 2219.0], [12.4, 2220.0], [12.5, 2252.0], [12.6, 2253.0], [12.7, 2253.0], [12.8, 2254.0], [12.9, 2254.0], [13.0, 2255.0], [13.1, 2261.0], [13.2, 2281.0], [13.3, 2282.0], [13.4, 2282.0], [13.5, 2289.0], [13.6, 2292.0], [13.7, 2292.0], [13.8, 2305.0], [13.9, 2322.0], [14.0, 2322.0], [14.1, 2324.0], [14.2, 2342.0], [14.3, 2343.0], [14.4, 2343.0], [14.5, 2344.0], [14.6, 2344.0], [14.7, 2344.0], [14.8, 2346.0], [14.9, 2354.0], [15.0, 2355.0], [15.1, 2356.0], [15.2, 2357.0], [15.3, 2365.0], [15.4, 2366.0], [15.5, 2371.0], [15.6, 2373.0], [15.7, 2378.0], [15.8, 2380.0], [15.9, 2380.0], [16.0, 2381.0], [16.1, 2384.0], [16.2, 2385.0], [16.3, 2389.0], [16.4, 2400.0], [16.5, 2402.0], [16.6, 2416.0], [16.7, 2417.0], [16.8, 2417.0], [16.9, 2420.0], [17.0, 2421.0], [17.1, 2441.0], [17.2, 2443.0], [17.3, 2443.0], [17.4, 2445.0], [17.5, 2457.0], [17.6, 2458.0], [17.7, 2458.0], [17.8, 2467.0], [17.9, 2467.0], [18.0, 2467.0], [18.1, 2468.0], [18.2, 2478.0], [18.3, 2487.0], [18.4, 2487.0], [18.5, 2487.0], [18.6, 2488.0], [18.7, 2490.0], [18.8, 2492.0], [18.9, 2492.0], [19.0, 2493.0], [19.1, 2494.0], [19.2, 2494.0], [19.3, 2494.0], [19.4, 2494.0], [19.5, 2501.0], [19.6, 2506.0], [19.7, 2508.0], [19.8, 2511.0], [19.9, 2511.0], [20.0, 2511.0], [20.1, 2513.0], [20.2, 2519.0], [20.3, 2540.0], [20.4, 2541.0], [20.5, 2550.0], [20.6, 2551.0], [20.7, 2552.0], [20.8, 2554.0], [20.9, 2555.0], [21.0, 2558.0], [21.1, 2558.0], [21.2, 2583.0], [21.3, 2593.0], [21.4, 2593.0], [21.5, 2596.0], [21.6, 2626.0], [21.7, 2626.0], [21.8, 2634.0], [21.9, 2634.0], [22.0, 2639.0], [22.1, 2639.0], [22.2, 2639.0], [22.3, 2640.0], [22.4, 2640.0], [22.5, 2645.0], [22.6, 2645.0], [22.7, 2646.0], [22.8, 2654.0], [22.9, 2657.0], [23.0, 2658.0], [23.1, 2662.0], [23.2, 2662.0], [23.3, 2663.0], [23.4, 2663.0], [23.5, 2663.0], [23.6, 2663.0], [23.7, 2664.0], [23.8, 2666.0], [23.9, 2672.0], [24.0, 2676.0], [24.1, 2690.0], [24.2, 2692.0], [24.3, 2695.0], [24.4, 2696.0], [24.5, 2699.0], [24.6, 2701.0], [24.7, 2701.0], [24.8, 2711.0], [24.9, 2711.0], [25.0, 2714.0], [25.1, 2717.0], [25.2, 2718.0], [25.3, 2722.0], [25.4, 2722.0], [25.5, 2725.0], [25.6, 2730.0], [25.7, 2740.0], [25.8, 2754.0], [25.9, 2761.0], [26.0, 2763.0], [26.1, 2763.0], [26.2, 2764.0], [26.3, 2765.0], [26.4, 2765.0], [26.5, 2770.0], [26.6, 2773.0], [26.7, 2773.0], [26.8, 2773.0], [26.9, 2774.0], [27.0, 2774.0], [27.1, 2774.0], [27.2, 2775.0], [27.3, 2775.0], [27.4, 2777.0], [27.5, 2780.0], [27.6, 2786.0], [27.7, 2795.0], [27.8, 2797.0], [27.9, 2800.0], [28.0, 2811.0], [28.1, 2811.0], [28.2, 2811.0], [28.3, 2813.0], [28.4, 2817.0], [28.5, 2818.0], [28.6, 2818.0], [28.7, 2819.0], [28.8, 2819.0], [28.9, 2822.0], [29.0, 2824.0], [29.1, 2827.0], [29.2, 2828.0], [29.3, 2833.0], [29.4, 2840.0], [29.5, 2858.0], [29.6, 2866.0], [29.7, 2866.0], [29.8, 2866.0], [29.9, 2869.0], [30.0, 2869.0], [30.1, 2869.0], [30.2, 2871.0], [30.3, 2892.0], [30.4, 2899.0], [30.5, 2899.0], [30.6, 2907.0], [30.7, 2909.0], [30.8, 2910.0], [30.9, 2913.0], [31.0, 2913.0], [31.1, 2915.0], [31.2, 2918.0], [31.3, 2919.0], [31.4, 2919.0], [31.5, 2919.0], [31.6, 2920.0], [31.7, 2939.0], [31.8, 2941.0], [31.9, 2954.0], [32.0, 2966.0], [32.1, 2968.0], [32.2, 2969.0], [32.3, 2970.0], [32.4, 2977.0], [32.5, 2978.0], [32.6, 2984.0], [32.7, 2989.0], [32.8, 2989.0], [32.9, 2991.0], [33.0, 2992.0], [33.1, 2994.0], [33.2, 2997.0], [33.3, 2997.0], [33.4, 2998.0], [33.5, 2998.0], [33.6, 3005.0], [33.7, 3008.0], [33.8, 3009.0], [33.9, 3009.0], [34.0, 3009.0], [34.1, 3009.0], [34.2, 3010.0], [34.3, 3024.0], [34.4, 3025.0], [34.5, 3025.0], [34.6, 3026.0], [34.7, 3026.0], [34.8, 3034.0], [34.9, 3041.0], [35.0, 3041.0], [35.1, 3044.0], [35.2, 3044.0], [35.3, 3069.0], [35.4, 3070.0], [35.5, 3071.0], [35.6, 3073.0], [35.7, 3074.0], [35.8, 3077.0], [35.9, 3077.0], [36.0, 3078.0], [36.1, 3078.0], [36.2, 3093.0], [36.3, 3094.0], [36.4, 3096.0], [36.5, 3099.0], [36.6, 3099.0], [36.7, 3100.0], [36.8, 3100.0], [36.9, 3101.0], [37.0, 3108.0], [37.1, 3115.0], [37.2, 3117.0], [37.3, 3132.0], [37.4, 3138.0], [37.5, 3142.0], [37.6, 3143.0], [37.7, 3144.0], [37.8, 3144.0], [37.9, 3175.0], [38.0, 3177.0], [38.1, 3179.0], [38.2, 3199.0], [38.3, 3211.0], [38.4, 3220.0], [38.5, 3221.0], [38.6, 3224.0], [38.7, 3227.0], [38.8, 3248.0], [38.9, 3249.0], [39.0, 3268.0], [39.1, 3269.0], [39.2, 3270.0], [39.3, 3270.0], [39.4, 3270.0], [39.5, 3270.0], [39.6, 3271.0], [39.7, 3271.0], [39.8, 3279.0], [39.9, 3282.0], [40.0, 3284.0], [40.1, 3291.0], [40.2, 3292.0], [40.3, 3306.0], [40.4, 3307.0], [40.5, 3310.0], [40.6, 3310.0], [40.7, 3311.0], [40.8, 3312.0], [40.9, 3316.0], [41.0, 3317.0], [41.1, 3328.0], [41.2, 3329.0], [41.3, 3336.0], [41.4, 3342.0], [41.5, 3346.0], [41.6, 3347.0], [41.7, 3347.0], [41.8, 3348.0], [41.9, 3349.0], [42.0, 3350.0], [42.1, 3351.0], [42.2, 3355.0], [42.3, 3363.0], [42.4, 3363.0], [42.5, 3364.0], [42.6, 3374.0], [42.7, 3375.0], [42.8, 3375.0], [42.9, 3375.0], [43.0, 3375.0], [43.1, 3376.0], [43.2, 3376.0], [43.3, 3376.0], [43.4, 3380.0], [43.5, 3384.0], [43.6, 3399.0], [43.7, 3400.0], [43.8, 3403.0], [43.9, 3404.0], [44.0, 3405.0], [44.1, 3410.0], [44.2, 3412.0], [44.3, 3412.0], [44.4, 3417.0], [44.5, 3423.0], [44.6, 3424.0], [44.7, 3424.0], [44.8, 3424.0], [44.9, 3425.0], [45.0, 3436.0], [45.1, 3438.0], [45.2, 3444.0], [45.3, 3447.0], [45.4, 3448.0], [45.5, 3450.0], [45.6, 3451.0], [45.7, 3451.0], [45.8, 3451.0], [45.9, 3452.0], [46.0, 3452.0], [46.1, 3452.0], [46.2, 3455.0], [46.3, 3457.0], [46.4, 3457.0], [46.5, 3458.0], [46.6, 3462.0], [46.7, 3463.0], [46.8, 3466.0], [46.9, 3467.0], [47.0, 3467.0], [47.1, 3467.0], [47.2, 3469.0], [47.3, 3493.0], [47.4, 3499.0], [47.5, 3502.0], [47.6, 3503.0], [47.7, 3504.0], [47.8, 3505.0], [47.9, 3505.0], [48.0, 3505.0], [48.1, 3505.0], [48.2, 3505.0], [48.3, 3506.0], [48.4, 3506.0], [48.5, 3507.0], [48.6, 3508.0], [48.7, 3509.0], [48.8, 3511.0], [48.9, 3524.0], [49.0, 3545.0], [49.1, 3546.0], [49.2, 3557.0], [49.3, 3582.0], [49.4, 3584.0], [49.5, 3589.0], [49.6, 3589.0], [49.7, 3594.0], [49.8, 3599.0], [49.9, 3605.0], [50.0, 3605.0], [50.1, 3606.0], [50.2, 3610.0], [50.3, 3611.0], [50.4, 3611.0], [50.5, 3611.0], [50.6, 3612.0], [50.7, 3612.0], [50.8, 3614.0], [50.9, 3615.0], [51.0, 3621.0], [51.1, 3624.0], [51.2, 3624.0], [51.3, 3625.0], [51.4, 3625.0], [51.5, 3625.0], [51.6, 3626.0], [51.7, 3626.0], [51.8, 3627.0], [51.9, 3628.0], [52.0, 3628.0], [52.1, 3630.0], [52.2, 3631.0], [52.3, 3631.0], [52.4, 3631.0], [52.5, 3632.0], [52.6, 3633.0], [52.7, 3633.0], [52.8, 3633.0], [52.9, 3634.0], [53.0, 3639.0], [53.1, 3640.0], [53.2, 3647.0], [53.3, 3649.0], [53.4, 3649.0], [53.5, 3650.0], [53.6, 3652.0], [53.7, 3652.0], [53.8, 3653.0], [53.9, 3654.0], [54.0, 3655.0], [54.1, 3655.0], [54.2, 3656.0], [54.3, 3656.0], [54.4, 3656.0], [54.5, 3656.0], [54.6, 3658.0], [54.7, 3659.0], [54.8, 3659.0], [54.9, 3660.0], [55.0, 3660.0], [55.1, 3661.0], [55.2, 3662.0], [55.3, 3663.0], [55.4, 3665.0], [55.5, 3674.0], [55.6, 3675.0], [55.7, 3677.0], [55.8, 3678.0], [55.9, 3681.0], [56.0, 3681.0], [56.1, 3682.0], [56.2, 3690.0], [56.3, 3691.0], [56.4, 3692.0], [56.5, 3698.0], [56.6, 3708.0], [56.7, 3708.0], [56.8, 3708.0], [56.9, 3708.0], [57.0, 3709.0], [57.1, 3710.0], [57.2, 3714.0], [57.3, 3722.0], [57.4, 3729.0], [57.5, 3734.0], [57.6, 3736.0], [57.7, 3736.0], [57.8, 3736.0], [57.9, 3736.0], [58.0, 3742.0], [58.1, 3743.0], [58.2, 3758.0], [58.3, 3758.0], [58.4, 3758.0], [58.5, 3758.0], [58.6, 3760.0], [58.7, 3769.0], [58.8, 3770.0], [58.9, 3771.0], [59.0, 3771.0], [59.1, 3772.0], [59.2, 3772.0], [59.3, 3772.0], [59.4, 3784.0], [59.5, 3785.0], [59.6, 3785.0], [59.7, 3786.0], [59.8, 3786.0], [59.9, 3786.0], [60.0, 3786.0], [60.1, 3786.0], [60.2, 3786.0], [60.3, 3786.0], [60.4, 3787.0], [60.5, 3787.0], [60.6, 3787.0], [60.7, 3787.0], [60.8, 3787.0], [60.9, 3787.0], [61.0, 3787.0], [61.1, 3787.0], [61.2, 3787.0], [61.3, 3787.0], [61.4, 3788.0], [61.5, 3792.0], [61.6, 3809.0], [61.7, 3809.0], [61.8, 3810.0], [61.9, 3810.0], [62.0, 3812.0], [62.1, 3812.0], [62.2, 3816.0], [62.3, 3821.0], [62.4, 3822.0], [62.5, 3823.0], [62.6, 3824.0], [62.7, 3824.0], [62.8, 3841.0], [62.9, 3846.0], [63.0, 3856.0], [63.1, 3857.0], [63.2, 3858.0], [63.3, 3858.0], [63.4, 3858.0], [63.5, 3858.0], [63.6, 3859.0], [63.7, 3860.0], [63.8, 3861.0], [63.9, 3861.0], [64.0, 3861.0], [64.1, 3862.0], [64.2, 3863.0], [64.3, 3864.0], [64.4, 3864.0], [64.5, 3865.0], [64.6, 3867.0], [64.7, 3869.0], [64.8, 3871.0], [64.9, 3883.0], [65.0, 3884.0], [65.1, 3884.0], [65.2, 3884.0], [65.3, 3885.0], [65.4, 3885.0], [65.5, 3886.0], [65.6, 3886.0], [65.7, 3886.0], [65.8, 3886.0], [65.9, 3886.0], [66.0, 3886.0], [66.1, 3887.0], [66.2, 3887.0], [66.3, 3888.0], [66.4, 3888.0], [66.5, 3889.0], [66.6, 3889.0], [66.7, 3889.0], [66.8, 3889.0], [66.9, 3889.0], [67.0, 3889.0], [67.1, 3890.0], [67.2, 3890.0], [67.3, 3890.0], [67.4, 3890.0], [67.5, 3891.0], [67.6, 3891.0], [67.7, 3891.0], [67.8, 3903.0], [67.9, 3903.0], [68.0, 3903.0], [68.1, 3903.0], [68.2, 3903.0], [68.3, 3903.0], [68.4, 3905.0], [68.5, 3906.0], [68.6, 3906.0], [68.7, 3906.0], [68.8, 3907.0], [68.9, 3907.0], [69.0, 3907.0], [69.1, 3907.0], [69.2, 3908.0], [69.3, 3908.0], [69.4, 3918.0], [69.5, 3919.0], [69.6, 3919.0], [69.7, 3922.0], [69.8, 3922.0], [69.9, 3923.0], [70.0, 3938.0], [70.1, 3940.0], [70.2, 3941.0], [70.3, 3942.0], [70.4, 3943.0], [70.5, 3949.0], [70.6, 3950.0], [70.7, 3951.0], [70.8, 3954.0], [70.9, 3954.0], [71.0, 3954.0], [71.1, 3954.0], [71.2, 3955.0], [71.3, 3955.0], [71.4, 3955.0], [71.5, 3958.0], [71.6, 3963.0], [71.7, 3964.0], [71.8, 3964.0], [71.9, 3966.0], [72.0, 3966.0], [72.1, 3966.0], [72.2, 3968.0], [72.3, 3969.0], [72.4, 3969.0], [72.5, 3973.0], [72.6, 3974.0], [72.7, 3974.0], [72.8, 3974.0], [72.9, 3974.0], [73.0, 3975.0], [73.1, 3976.0], [73.2, 3980.0], [73.3, 3980.0], [73.4, 3981.0], [73.5, 3982.0], [73.6, 3983.0], [73.7, 3983.0], [73.8, 3983.0], [73.9, 3984.0], [74.0, 3991.0], [74.1, 3992.0], [74.2, 3992.0], [74.3, 3992.0], [74.4, 3993.0], [74.5, 3993.0], [74.6, 3993.0], [74.7, 3993.0], [74.8, 3993.0], [74.9, 3993.0], [75.0, 3993.0], [75.1, 3993.0], [75.2, 3993.0], [75.3, 3993.0], [75.4, 3993.0], [75.5, 3993.0], [75.6, 3994.0], [75.7, 3994.0], [75.8, 3994.0], [75.9, 3994.0], [76.0, 3994.0], [76.1, 3995.0], [76.2, 4000.0], [76.3, 4000.0], [76.4, 4000.0], [76.5, 4000.0], [76.6, 4000.0], [76.7, 4000.0], [76.8, 4003.0], [76.9, 4003.0], [77.0, 4004.0], [77.1, 4005.0], [77.2, 4020.0], [77.3, 4021.0], [77.4, 4022.0], [77.5, 4022.0], [77.6, 4022.0], [77.7, 4023.0], [77.8, 4024.0], [77.9, 4032.0], [78.0, 4033.0], [78.1, 4038.0], [78.2, 4039.0], [78.3, 4040.0], [78.4, 4040.0], [78.5, 4048.0], [78.6, 4049.0], [78.7, 4051.0], [78.8, 4053.0], [78.9, 4057.0], [79.0, 4063.0], [79.1, 4063.0], [79.2, 4064.0], [79.3, 4064.0], [79.4, 4064.0], [79.5, 4065.0], [79.6, 4065.0], [79.7, 4066.0], [79.8, 4066.0], [79.9, 4087.0], [80.0, 4087.0], [80.1, 4088.0], [80.2, 4088.0], [80.3, 4089.0], [80.4, 4090.0], [80.5, 4092.0], [80.6, 4093.0], [80.7, 4094.0], [80.8, 4094.0], [80.9, 4094.0], [81.0, 4094.0], [81.1, 4095.0], [81.2, 4096.0], [81.3, 4096.0], [81.4, 4096.0], [81.5, 4096.0], [81.6, 4096.0], [81.7, 4096.0], [81.8, 4097.0], [81.9, 4097.0], [82.0, 4097.0], [82.1, 4097.0], [82.2, 4097.0], [82.3, 4097.0], [82.4, 4098.0], [82.5, 4098.0], [82.6, 4098.0], [82.7, 4098.0], [82.8, 4102.0], [82.9, 4104.0], [83.0, 4106.0], [83.1, 4118.0], [83.2, 4118.0], [83.3, 4134.0], [83.4, 4143.0], [83.5, 4153.0], [83.6, 4157.0], [83.7, 4164.0], [83.8, 4167.0], [83.9, 4168.0], [84.0, 4168.0], [84.1, 4169.0], [84.2, 4169.0], [84.3, 4185.0], [84.4, 4196.0], [84.5, 4197.0], [84.6, 4197.0], [84.7, 4197.0], [84.8, 4198.0], [84.9, 4198.0], [85.0, 4198.0], [85.1, 4198.0], [85.2, 4198.0], [85.3, 4198.0], [85.4, 4199.0], [85.5, 4199.0], [85.6, 4199.0], [85.7, 4199.0], [85.8, 4199.0], [85.9, 4199.0], [86.0, 4199.0], [86.1, 4200.0], [86.2, 4200.0], [86.3, 4200.0], [86.4, 4200.0], [86.5, 4200.0], [86.6, 4201.0], [86.7, 4201.0], [86.8, 4202.0], [86.9, 4204.0], [87.0, 4209.0], [87.1, 4253.0], [87.2, 4253.0], [87.3, 4253.0], [87.4, 4254.0], [87.5, 4254.0], [87.6, 4254.0], [87.7, 4254.0], [87.8, 4254.0], [87.9, 4254.0], [88.0, 4255.0], [88.1, 4255.0], [88.2, 4259.0], [88.3, 4265.0], [88.4, 4265.0], [88.5, 4265.0], [88.6, 4266.0], [88.7, 4267.0], [88.8, 4270.0], [88.9, 4272.0], [89.0, 4272.0], [89.1, 4274.0], [89.2, 4276.0], [89.3, 4276.0], [89.4, 4276.0], [89.5, 4276.0], [89.6, 4277.0], [89.7, 4277.0], [89.8, 4277.0], [89.9, 4278.0], [90.0, 4281.0], [90.1, 4282.0], [90.2, 4300.0], [90.3, 4301.0], [90.4, 4301.0], [90.5, 4302.0], [90.6, 4302.0], [90.7, 4303.0], [90.8, 4304.0], [90.9, 4304.0], [91.0, 4304.0], [91.1, 4304.0], [91.2, 4305.0], [91.3, 4305.0], [91.4, 4306.0], [91.5, 4310.0], [91.6, 4310.0], [91.7, 4310.0], [91.8, 4311.0], [91.9, 4323.0], [92.0, 4347.0], [92.1, 4350.0], [92.2, 4350.0], [92.3, 4351.0], [92.4, 4352.0], [92.5, 4353.0], [92.6, 4353.0], [92.7, 4353.0], [92.8, 4357.0], [92.9, 4358.0], [93.0, 4358.0], [93.1, 4359.0], [93.2, 4359.0], [93.3, 4362.0], [93.4, 4376.0], [93.5, 4377.0], [93.6, 4384.0], [93.7, 4384.0], [93.8, 4384.0], [93.9, 4384.0], [94.0, 4385.0], [94.1, 4385.0], [94.2, 4386.0], [94.3, 4395.0], [94.4, 4397.0], [94.5, 4397.0], [94.6, 4398.0], [94.7, 4399.0], [94.8, 4399.0], [94.9, 4399.0], [95.0, 4399.0], [95.1, 4400.0], [95.2, 4400.0], [95.3, 4400.0], [95.4, 4401.0], [95.5, 4401.0], [95.6, 4401.0], [95.7, 4401.0], [95.8, 4402.0], [95.9, 4404.0], [96.0, 4404.0], [96.1, 4405.0], [96.2, 4406.0], [96.3, 4406.0], [96.4, 4407.0], [96.5, 4407.0], [96.6, 4408.0], [96.7, 4410.0], [96.8, 4410.0], [96.9, 4410.0], [97.0, 4410.0], [97.1, 4411.0], [97.2, 4411.0], [97.3, 4504.0], [97.4, 4505.0], [97.5, 4505.0], [97.6, 4505.0], [97.7, 4505.0], [97.8, 4505.0], [97.9, 4505.0], [98.0, 4505.0], [98.1, 4506.0], [98.2, 4506.0], [98.3, 4506.0], [98.4, 4507.0], [98.5, 4508.0], [98.6, 4648.0], [98.7, 4660.0], [98.8, 4660.0], [98.9, 4662.0], [99.0, 4662.0], [99.1, 4665.0], [99.2, 4680.0], [99.3, 4767.0], [99.4, 4815.0], [99.5, 4846.0], [99.6, 5196.0], [99.7, 5277.0], [99.8, 5279.0], [99.9, 5543.0], [100.0, 5566.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 278.0, "series": [{"data": [[600.0, 15.0], [700.0, 70.0], [800.0, 73.0], [900.0, 41.0], [1000.0, 27.0], [1100.0, 16.0], [1200.0, 15.0], [1300.0, 17.0], [1400.0, 7.0], [1500.0, 13.0], [1600.0, 12.0], [1700.0, 13.0], [1800.0, 19.0], [1900.0, 21.0], [2000.0, 23.0], [2100.0, 19.0], [2200.0, 53.0], [2300.0, 87.0], [2400.0, 101.0], [2500.0, 68.0], [2600.0, 101.0], [2800.0, 89.0], [2700.0, 109.0], [2900.0, 100.0], [3000.0, 102.0], [3100.0, 52.0], [3200.0, 67.0], [3300.0, 112.0], [3400.0, 124.0], [3500.0, 78.0], [3700.0, 166.0], [3600.0, 222.0], [3800.0, 205.0], [3900.0, 278.0], [4000.0, 216.0], [4200.0, 135.0], [4100.0, 110.0], [4300.0, 161.0], [4500.0, 44.0], [4600.0, 23.0], [4400.0, 73.0], [4700.0, 2.0], [4800.0, 6.0], [5100.0, 2.0], [5000.0, 1.0], [5200.0, 7.0], [5500.0, 5.0], [5400.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 281.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3020.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 281.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3020.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 64.90520231213873, "minX": 1.78003806E12, "maxY": 103.0, "series": [{"data": [[1.78003812E12, 103.0], [1.78003818E12, 97.09480519480519], [1.78003806E12, 64.90520231213873]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 695.0, "minX": 1.0, "maxY": 3664.510545165143, "series": [{"data": [[5.0, 2545.3333333333335], [6.0, 2046.0], [7.0, 826.0], [8.0, 695.0], [9.0, 823.0], [10.0, 2040.2222222222222], [11.0, 1684.6666666666665], [12.0, 812.3333333333334], [13.0, 751.6666666666666], [14.0, 1798.5], [15.0, 730.0], [16.0, 1662.3333333333335], [17.0, 711.6250000000001], [18.0, 776.6], [19.0, 1747.25], [20.0, 786.6], [21.0, 1404.5], [22.0, 758.5], [23.0, 859.5714285714286], [24.0, 1812.142857142857], [25.0, 1005.7499999999999], [26.0, 1124.7777777777778], [27.0, 815.1818181818181], [28.0, 1332.5], [29.0, 824.5], [30.0, 832.7272727272727], [31.0, 894.5714285714286], [32.0, 878.3636363636364], [33.0, 1517.4666666666667], [34.0, 944.5714285714286], [35.0, 942.2222222222222], [36.0, 966.6153846153846], [37.0, 1003.5], [38.0, 1089.5714285714284], [39.0, 1147.5714285714287], [40.0, 1117.6000000000001], [41.0, 1356.916666666667], [42.0, 1378.75], [43.0, 1343.3333333333333], [44.0, 1315.0], [45.0, 1360.8], [46.0, 1522.2222222222222], [47.0, 1620.6666666666667], [48.0, 2653.9473684210525], [49.0, 1786.8333333333333], [50.0, 1811.5], [52.0, 1930.2500000000002], [53.0, 1860.8000000000002], [55.0, 2099.928571428572], [56.0, 2009.7777777777778], [57.0, 2885.333333333333], [59.0, 2263.1176470588234], [61.0, 2145.25], [63.0, 2267.0714285714284], [64.0, 2261.5], [65.0, 2374.3571428571427], [66.0, 1920.3333333333333], [68.0, 3023.424242424242], [71.0, 2599.2000000000003], [74.0, 2646.64], [73.0, 3248.4], [76.0, 2588.7619047619046], [79.0, 2581.4583333333335], [80.0, 2478.0], [82.0, 2390.0399999999995], [85.0, 2733.7916666666665], [86.0, 2351.0], [89.0, 2742.9090909090914], [93.0, 3003.6785714285716], [97.0, 3222.885714285714], [101.0, 3286.7741935483873], [103.0, 3664.510545165143], [1.0, 3324.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[91.64010905786125, 3274.571947894579]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 103.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2053.3333333333335, "minX": 1.78003806E12, "maxY": 6414.1, "series": [{"data": [[1.78003812E12, 6414.1], [1.78003818E12, 2964.5], [1.78003806E12, 3330.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003812E12, 4442.666666666667], [1.78003818E12, 2053.3333333333335], [1.78003806E12, 2306.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2221.745664739883, "minX": 1.78003806E12, "maxY": 3649.382352941175, "series": [{"data": [[1.78003812E12, 3649.382352941175], [1.78003818E12, 3646.3389610389613], [1.78003806E12, 2221.745664739883]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2221.698265895953, "minX": 1.78003806E12, "maxY": 3649.3649459783937, "series": [{"data": [[1.78003812E12, 3649.3649459783937], [1.78003818E12, 3646.3194805194835], [1.78003806E12, 2221.698265895953]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0038961038961038987, "minX": 1.78003806E12, "maxY": 0.15144508670520224, "series": [{"data": [[1.78003812E12, 0.07623049219687868], [1.78003818E12, 0.0038961038961038987], [1.78003806E12, 0.15144508670520224]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 652.0, "minX": 1.78003806E12, "maxY": 5566.0, "series": [{"data": [[1.78003812E12, 5566.0], [1.78003818E12, 5279.0], [1.78003806E12, 4767.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003812E12, 2062.0], [1.78003818E12, 2253.0], [1.78003806E12, 652.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003812E12, 4300.0], [1.78003818E12, 4401.0], [1.78003806E12, 3903.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003812E12, 4814.33], [1.78003818E12, 4680.0], [1.78003806E12, 4662.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003812E12, 3787.0], [1.78003818E12, 3770.5], [1.78003806E12, 2343.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003812E12, 4384.0], [1.78003818E12, 4410.0], [1.78003806E12, 4088.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 744.0, "minX": 2.0, "maxY": 4098.0, "series": [{"data": [[2.0, 2106.0], [32.0, 2275.0], [33.0, 3459.0], [35.0, 3507.0], [34.0, 3965.5], [36.0, 3974.0], [37.0, 3466.5], [39.0, 3653.0], [38.0, 3675.0], [41.0, 4094.0], [40.0, 4063.0], [42.0, 4022.0], [43.0, 4098.0], [44.0, 2903.5], [45.0, 3886.0], [47.0, 3964.0], [46.0, 4059.0], [3.0, 3009.0], [54.0, 3144.0], [4.0, 3320.0], [69.0, 3659.0], [73.0, 3787.0], [5.0, 3594.0], [6.0, 821.0], [10.0, 744.0], [14.0, 3499.0], [16.0, 2154.0], [18.0, 2374.0], [19.0, 1631.0], [20.0, 3346.0], [21.0, 3890.0], [22.0, 2468.0], [24.0, 787.5], [25.0, 2919.0], [26.0, 2292.0], [27.0, 3736.0], [28.0, 3097.5], [29.0, 1365.0], [30.0, 2665.5], [31.0, 3504.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 744.0, "minX": 2.0, "maxY": 4098.0, "series": [{"data": [[2.0, 2103.5], [32.0, 2275.0], [33.0, 3459.0], [35.0, 3507.0], [34.0, 3965.5], [36.0, 3974.0], [37.0, 3466.5], [39.0, 3653.0], [38.0, 3675.0], [41.0, 4094.0], [40.0, 4063.0], [42.0, 4022.0], [43.0, 4098.0], [44.0, 2903.5], [45.0, 3886.0], [47.0, 3964.0], [46.0, 4059.0], [3.0, 3009.0], [54.0, 3144.0], [4.0, 3320.0], [69.0, 3659.0], [73.0, 3787.0], [5.0, 3594.0], [6.0, 821.0], [10.0, 744.0], [14.0, 3499.0], [16.0, 2154.0], [18.0, 2374.0], [19.0, 1631.0], [20.0, 3346.0], [21.0, 3890.0], [22.0, 2468.0], [24.0, 787.5], [25.0, 2919.0], [26.0, 2292.0], [27.0, 3736.0], [28.0, 3097.5], [29.0, 1365.0], [30.0, 2665.5], [31.0, 3504.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.116666666666667, "minX": 1.78003806E12, "maxY": 27.766666666666666, "series": [{"data": [[1.78003812E12, 27.766666666666666], [1.78003818E12, 11.116666666666667], [1.78003806E12, 16.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.833333333333334, "minX": 1.78003806E12, "maxY": 27.766666666666666, "series": [{"data": [[1.78003812E12, 27.766666666666666], [1.78003818E12, 12.833333333333334], [1.78003806E12, 14.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.833333333333334, "minX": 1.78003806E12, "maxY": 27.766666666666666, "series": [{"data": [[1.78003812E12, 27.766666666666666], [1.78003818E12, 12.833333333333334], [1.78003806E12, 14.416666666666666]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.833333333333334, "minX": 1.78003806E12, "maxY": 27.766666666666666, "series": [{"data": [[1.78003812E12, 27.766666666666666], [1.78003818E12, 12.833333333333334], [1.78003806E12, 14.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003818E12, "title": "Total Transactions Per Second"}},
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

