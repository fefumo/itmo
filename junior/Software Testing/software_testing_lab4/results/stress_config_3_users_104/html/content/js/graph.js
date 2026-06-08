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
        data: {"result": {"minY": 672.0, "minX": 0.0, "maxY": 5647.0, "series": [{"data": [[0.0, 672.0], [0.1, 688.0], [0.2, 688.0], [0.3, 696.0], [0.4, 698.0], [0.5, 701.0], [0.6, 710.0], [0.7, 717.0], [0.8, 717.0], [0.9, 725.0], [1.0, 726.0], [1.1, 726.0], [1.2, 728.0], [1.3, 729.0], [1.4, 742.0], [1.5, 742.0], [1.6, 745.0], [1.7, 745.0], [1.8, 754.0], [1.9, 762.0], [2.0, 766.0], [2.1, 769.0], [2.2, 773.0], [2.3, 774.0], [2.4, 775.0], [2.5, 781.0], [2.6, 790.0], [2.7, 802.0], [2.8, 821.0], [2.9, 824.0], [3.0, 824.0], [3.1, 828.0], [3.2, 837.0], [3.3, 838.0], [3.4, 840.0], [3.5, 841.0], [3.6, 845.0], [3.7, 856.0], [3.8, 860.0], [3.9, 861.0], [4.0, 862.0], [4.1, 864.0], [4.2, 870.0], [4.3, 872.0], [4.4, 877.0], [4.5, 882.0], [4.6, 887.0], [4.7, 889.0], [4.8, 901.0], [4.9, 913.0], [5.0, 923.0], [5.1, 935.0], [5.2, 944.0], [5.3, 956.0], [5.4, 967.0], [5.5, 985.0], [5.6, 1006.0], [5.7, 1036.0], [5.8, 1046.0], [5.9, 1058.0], [6.0, 1082.0], [6.1, 1085.0], [6.2, 1093.0], [6.3, 1095.0], [6.4, 1107.0], [6.5, 1109.0], [6.6, 1112.0], [6.7, 1116.0], [6.8, 1123.0], [6.9, 1150.0], [7.0, 1159.0], [7.1, 1190.0], [7.2, 1191.0], [7.3, 1213.0], [7.4, 1246.0], [7.5, 1271.0], [7.6, 1285.0], [7.7, 1295.0], [7.8, 1306.0], [7.9, 1320.0], [8.0, 1327.0], [8.1, 1360.0], [8.2, 1402.0], [8.3, 1407.0], [8.4, 1436.0], [8.5, 1479.0], [8.6, 1509.0], [8.7, 1516.0], [8.8, 1592.0], [8.9, 1607.0], [9.0, 1611.0], [9.1, 1644.0], [9.2, 1671.0], [9.3, 1691.0], [9.4, 1727.0], [9.5, 1800.0], [9.6, 1804.0], [9.7, 1830.0], [9.8, 1849.0], [9.9, 1859.0], [10.0, 1869.0], [10.1, 1879.0], [10.2, 1897.0], [10.3, 1937.0], [10.4, 1961.0], [10.5, 1962.0], [10.6, 1990.0], [10.7, 1996.0], [10.8, 1998.0], [10.9, 2000.0], [11.0, 2007.0], [11.1, 2019.0], [11.2, 2024.0], [11.3, 2040.0], [11.4, 2060.0], [11.5, 2078.0], [11.6, 2091.0], [11.7, 2091.0], [11.8, 2093.0], [11.9, 2096.0], [12.0, 2096.0], [12.1, 2108.0], [12.2, 2134.0], [12.3, 2151.0], [12.4, 2151.0], [12.5, 2163.0], [12.6, 2166.0], [12.7, 2172.0], [12.8, 2197.0], [12.9, 2200.0], [13.0, 2201.0], [13.1, 2205.0], [13.2, 2215.0], [13.3, 2224.0], [13.4, 2268.0], [13.5, 2283.0], [13.6, 2320.0], [13.7, 2337.0], [13.8, 2355.0], [13.9, 2357.0], [14.0, 2360.0], [14.1, 2361.0], [14.2, 2363.0], [14.3, 2372.0], [14.4, 2391.0], [14.5, 2392.0], [14.6, 2396.0], [14.7, 2396.0], [14.8, 2397.0], [14.9, 2438.0], [15.0, 2456.0], [15.1, 2457.0], [15.2, 2457.0], [15.3, 2457.0], [15.4, 2457.0], [15.5, 2458.0], [15.6, 2458.0], [15.7, 2460.0], [15.8, 2464.0], [15.9, 2464.0], [16.0, 2467.0], [16.1, 2472.0], [16.2, 2479.0], [16.3, 2479.0], [16.4, 2483.0], [16.5, 2487.0], [16.6, 2488.0], [16.7, 2488.0], [16.8, 2492.0], [16.9, 2492.0], [17.0, 2494.0], [17.1, 2528.0], [17.2, 2546.0], [17.3, 2557.0], [17.4, 2558.0], [17.5, 2559.0], [17.6, 2559.0], [17.7, 2562.0], [17.8, 2563.0], [17.9, 2566.0], [18.0, 2567.0], [18.1, 2574.0], [18.2, 2576.0], [18.3, 2578.0], [18.4, 2587.0], [18.5, 2588.0], [18.6, 2588.0], [18.7, 2588.0], [18.8, 2588.0], [18.9, 2592.0], [19.0, 2593.0], [19.1, 2594.0], [19.2, 2597.0], [19.3, 2600.0], [19.4, 2601.0], [19.5, 2601.0], [19.6, 2602.0], [19.7, 2602.0], [19.8, 2602.0], [19.9, 2603.0], [20.0, 2615.0], [20.1, 2620.0], [20.2, 2621.0], [20.3, 2622.0], [20.4, 2623.0], [20.5, 2624.0], [20.6, 2638.0], [20.7, 2642.0], [20.8, 2651.0], [20.9, 2652.0], [21.0, 2652.0], [21.1, 2656.0], [21.2, 2659.0], [21.3, 2661.0], [21.4, 2662.0], [21.5, 2662.0], [21.6, 2663.0], [21.7, 2663.0], [21.8, 2663.0], [21.9, 2665.0], [22.0, 2667.0], [22.1, 2668.0], [22.2, 2674.0], [22.3, 2675.0], [22.4, 2679.0], [22.5, 2680.0], [22.6, 2680.0], [22.7, 2681.0], [22.8, 2681.0], [22.9, 2681.0], [23.0, 2681.0], [23.1, 2681.0], [23.2, 2693.0], [23.3, 2697.0], [23.4, 2703.0], [23.5, 2708.0], [23.6, 2717.0], [23.7, 2731.0], [23.8, 2735.0], [23.9, 2737.0], [24.0, 2747.0], [24.1, 2758.0], [24.2, 2765.0], [24.3, 2765.0], [24.4, 2765.0], [24.5, 2766.0], [24.6, 2771.0], [24.7, 2771.0], [24.8, 2772.0], [24.9, 2777.0], [25.0, 2778.0], [25.1, 2778.0], [25.2, 2779.0], [25.3, 2781.0], [25.4, 2782.0], [25.5, 2784.0], [25.6, 2785.0], [25.7, 2786.0], [25.8, 2788.0], [25.9, 2788.0], [26.0, 2788.0], [26.1, 2789.0], [26.2, 2792.0], [26.3, 2792.0], [26.4, 2793.0], [26.5, 2793.0], [26.6, 2796.0], [26.7, 2796.0], [26.8, 2797.0], [26.9, 2798.0], [27.0, 2799.0], [27.1, 2800.0], [27.2, 2800.0], [27.3, 2808.0], [27.4, 2828.0], [27.5, 2829.0], [27.6, 2834.0], [27.7, 2835.0], [27.8, 2840.0], [27.9, 2844.0], [28.0, 2845.0], [28.1, 2845.0], [28.2, 2846.0], [28.3, 2865.0], [28.4, 2865.0], [28.5, 2866.0], [28.6, 2866.0], [28.7, 2867.0], [28.8, 2867.0], [28.9, 2868.0], [29.0, 2869.0], [29.1, 2869.0], [29.2, 2869.0], [29.3, 2870.0], [29.4, 2872.0], [29.5, 2892.0], [29.6, 2895.0], [29.7, 2898.0], [29.8, 2905.0], [29.9, 2907.0], [30.0, 2911.0], [30.1, 2929.0], [30.2, 2938.0], [30.3, 2939.0], [30.4, 2939.0], [30.5, 2953.0], [30.6, 2959.0], [30.7, 2960.0], [30.8, 2960.0], [30.9, 2961.0], [31.0, 2961.0], [31.1, 2966.0], [31.2, 2968.0], [31.3, 2968.0], [31.4, 2968.0], [31.5, 2968.0], [31.6, 2968.0], [31.7, 2968.0], [31.8, 2969.0], [31.9, 2969.0], [32.0, 2969.0], [32.1, 2969.0], [32.2, 2969.0], [32.3, 2969.0], [32.4, 2969.0], [32.5, 2969.0], [32.6, 2969.0], [32.7, 2969.0], [32.8, 2970.0], [32.9, 2971.0], [33.0, 2971.0], [33.1, 2974.0], [33.2, 2985.0], [33.3, 2990.0], [33.4, 2990.0], [33.5, 2990.0], [33.6, 2998.0], [33.7, 2998.0], [33.8, 3001.0], [33.9, 3008.0], [34.0, 3020.0], [34.1, 3035.0], [34.2, 3036.0], [34.3, 3038.0], [34.4, 3054.0], [34.5, 3060.0], [34.6, 3066.0], [34.7, 3070.0], [34.8, 3071.0], [34.9, 3074.0], [35.0, 3084.0], [35.1, 3088.0], [35.2, 3088.0], [35.3, 3089.0], [35.4, 3093.0], [35.5, 3094.0], [35.6, 3115.0], [35.7, 3127.0], [35.8, 3128.0], [35.9, 3131.0], [36.0, 3133.0], [36.1, 3142.0], [36.2, 3150.0], [36.3, 3159.0], [36.4, 3161.0], [36.5, 3167.0], [36.6, 3168.0], [36.7, 3168.0], [36.8, 3168.0], [36.9, 3168.0], [37.0, 3171.0], [37.1, 3173.0], [37.2, 3189.0], [37.3, 3201.0], [37.4, 3206.0], [37.5, 3216.0], [37.6, 3221.0], [37.7, 3228.0], [37.8, 3263.0], [37.9, 3276.0], [38.0, 3278.0], [38.1, 3296.0], [38.2, 3297.0], [38.3, 3300.0], [38.4, 3357.0], [38.5, 3363.0], [38.6, 3364.0], [38.7, 3374.0], [38.8, 3387.0], [38.9, 3417.0], [39.0, 3417.0], [39.1, 3418.0], [39.2, 3418.0], [39.3, 3419.0], [39.4, 3420.0], [39.5, 3422.0], [39.6, 3426.0], [39.7, 3426.0], [39.8, 3427.0], [39.9, 3428.0], [40.0, 3444.0], [40.1, 3444.0], [40.2, 3445.0], [40.3, 3448.0], [40.4, 3448.0], [40.5, 3450.0], [40.6, 3450.0], [40.7, 3451.0], [40.8, 3451.0], [40.9, 3451.0], [41.0, 3452.0], [41.1, 3452.0], [41.2, 3461.0], [41.3, 3461.0], [41.4, 3462.0], [41.5, 3463.0], [41.6, 3468.0], [41.7, 3477.0], [41.8, 3478.0], [41.9, 3512.0], [42.0, 3522.0], [42.1, 3529.0], [42.2, 3535.0], [42.3, 3550.0], [42.4, 3551.0], [42.5, 3551.0], [42.6, 3551.0], [42.7, 3552.0], [42.8, 3552.0], [42.9, 3553.0], [43.0, 3554.0], [43.1, 3559.0], [43.2, 3559.0], [43.3, 3560.0], [43.4, 3574.0], [43.5, 3576.0], [43.6, 3576.0], [43.7, 3578.0], [43.8, 3582.0], [43.9, 3582.0], [44.0, 3583.0], [44.1, 3583.0], [44.2, 3583.0], [44.3, 3583.0], [44.4, 3584.0], [44.5, 3584.0], [44.6, 3584.0], [44.7, 3584.0], [44.8, 3585.0], [44.9, 3585.0], [45.0, 3617.0], [45.1, 3641.0], [45.2, 3652.0], [45.3, 3654.0], [45.4, 3654.0], [45.5, 3654.0], [45.6, 3655.0], [45.7, 3655.0], [45.8, 3655.0], [45.9, 3655.0], [46.0, 3656.0], [46.1, 3656.0], [46.2, 3656.0], [46.3, 3656.0], [46.4, 3657.0], [46.5, 3658.0], [46.6, 3658.0], [46.7, 3659.0], [46.8, 3661.0], [46.9, 3662.0], [47.0, 3663.0], [47.1, 3670.0], [47.2, 3686.0], [47.3, 3686.0], [47.4, 3686.0], [47.5, 3686.0], [47.6, 3687.0], [47.7, 3687.0], [47.8, 3687.0], [47.9, 3687.0], [48.0, 3688.0], [48.1, 3688.0], [48.2, 3688.0], [48.3, 3688.0], [48.4, 3689.0], [48.5, 3689.0], [48.6, 3689.0], [48.7, 3700.0], [48.8, 3728.0], [48.9, 3729.0], [49.0, 3730.0], [49.1, 3731.0], [49.2, 3735.0], [49.3, 3735.0], [49.4, 3747.0], [49.5, 3750.0], [49.6, 3751.0], [49.7, 3752.0], [49.8, 3754.0], [49.9, 3756.0], [50.0, 3756.0], [50.1, 3757.0], [50.2, 3757.0], [50.3, 3757.0], [50.4, 3757.0], [50.5, 3758.0], [50.6, 3758.0], [50.7, 3758.0], [50.8, 3758.0], [50.9, 3758.0], [51.0, 3758.0], [51.1, 3758.0], [51.2, 3759.0], [51.3, 3759.0], [51.4, 3760.0], [51.5, 3761.0], [51.6, 3766.0], [51.7, 3766.0], [51.8, 3775.0], [51.9, 3783.0], [52.0, 3784.0], [52.1, 3784.0], [52.2, 3785.0], [52.3, 3785.0], [52.4, 3785.0], [52.5, 3786.0], [52.6, 3786.0], [52.7, 3786.0], [52.8, 3787.0], [52.9, 3788.0], [53.0, 3789.0], [53.1, 3789.0], [53.2, 3789.0], [53.3, 3789.0], [53.4, 3789.0], [53.5, 3790.0], [53.6, 3797.0], [53.7, 3810.0], [53.8, 3821.0], [53.9, 3823.0], [54.0, 3823.0], [54.1, 3824.0], [54.2, 3825.0], [54.3, 3826.0], [54.4, 3827.0], [54.5, 3827.0], [54.6, 3828.0], [54.7, 3829.0], [54.8, 3830.0], [54.9, 3832.0], [55.0, 3833.0], [55.1, 3833.0], [55.2, 3836.0], [55.3, 3836.0], [55.4, 3837.0], [55.5, 3837.0], [55.6, 3837.0], [55.7, 3837.0], [55.8, 3838.0], [55.9, 3838.0], [56.0, 3838.0], [56.1, 3840.0], [56.2, 3841.0], [56.3, 3843.0], [56.4, 3844.0], [56.5, 3859.0], [56.6, 3859.0], [56.7, 3860.0], [56.8, 3861.0], [56.9, 3862.0], [57.0, 3871.0], [57.1, 3883.0], [57.2, 3885.0], [57.3, 3885.0], [57.4, 3886.0], [57.5, 3886.0], [57.6, 3887.0], [57.7, 3887.0], [57.8, 3889.0], [57.9, 3889.0], [58.0, 3890.0], [58.1, 3890.0], [58.2, 3890.0], [58.3, 3890.0], [58.4, 3891.0], [58.5, 3891.0], [58.6, 3891.0], [58.7, 3891.0], [58.8, 3892.0], [58.9, 3892.0], [59.0, 3893.0], [59.1, 3895.0], [59.2, 3896.0], [59.3, 3896.0], [59.4, 3897.0], [59.5, 3897.0], [59.6, 3898.0], [59.7, 3901.0], [59.8, 3902.0], [59.9, 3902.0], [60.0, 3902.0], [60.1, 3905.0], [60.2, 3905.0], [60.3, 3906.0], [60.4, 3906.0], [60.5, 3906.0], [60.6, 3906.0], [60.7, 3907.0], [60.8, 3911.0], [60.9, 3914.0], [61.0, 3915.0], [61.1, 3915.0], [61.2, 3917.0], [61.3, 3919.0], [61.4, 3929.0], [61.5, 3934.0], [61.6, 3947.0], [61.7, 3959.0], [61.8, 3961.0], [61.9, 3962.0], [62.0, 3962.0], [62.1, 3962.0], [62.2, 3963.0], [62.3, 3963.0], [62.4, 3963.0], [62.5, 3964.0], [62.6, 3965.0], [62.7, 3968.0], [62.8, 3970.0], [62.9, 3976.0], [63.0, 3978.0], [63.1, 3979.0], [63.2, 3979.0], [63.3, 3982.0], [63.4, 3988.0], [63.5, 3990.0], [63.6, 3990.0], [63.7, 3991.0], [63.8, 3991.0], [63.9, 3991.0], [64.0, 3991.0], [64.1, 3991.0], [64.2, 3992.0], [64.3, 3992.0], [64.4, 3992.0], [64.5, 3992.0], [64.6, 3992.0], [64.7, 3992.0], [64.8, 3992.0], [64.9, 3992.0], [65.0, 3992.0], [65.1, 3993.0], [65.2, 3993.0], [65.3, 3993.0], [65.4, 3993.0], [65.5, 3993.0], [65.6, 3993.0], [65.7, 3993.0], [65.8, 3993.0], [65.9, 3993.0], [66.0, 3993.0], [66.1, 3993.0], [66.2, 3993.0], [66.3, 3994.0], [66.4, 3994.0], [66.5, 3994.0], [66.6, 3994.0], [66.7, 3995.0], [66.8, 3995.0], [66.9, 3995.0], [67.0, 3995.0], [67.1, 3997.0], [67.2, 3998.0], [67.3, 3998.0], [67.4, 3999.0], [67.5, 3999.0], [67.6, 3999.0], [67.7, 3999.0], [67.8, 3999.0], [67.9, 4000.0], [68.0, 4000.0], [68.1, 4000.0], [68.2, 4000.0], [68.3, 4001.0], [68.4, 4001.0], [68.5, 4002.0], [68.6, 4003.0], [68.7, 4016.0], [68.8, 4019.0], [68.9, 4020.0], [69.0, 4021.0], [69.1, 4021.0], [69.2, 4028.0], [69.3, 4028.0], [69.4, 4029.0], [69.5, 4029.0], [69.6, 4029.0], [69.7, 4030.0], [69.8, 4030.0], [69.9, 4034.0], [70.0, 4035.0], [70.1, 4036.0], [70.2, 4036.0], [70.3, 4043.0], [70.4, 4044.0], [70.5, 4044.0], [70.6, 4044.0], [70.7, 4044.0], [70.8, 4044.0], [70.9, 4045.0], [71.0, 4045.0], [71.1, 4045.0], [71.2, 4045.0], [71.3, 4046.0], [71.4, 4046.0], [71.5, 4048.0], [71.6, 4052.0], [71.7, 4052.0], [71.8, 4065.0], [71.9, 4067.0], [72.0, 4077.0], [72.1, 4078.0], [72.2, 4078.0], [72.3, 4078.0], [72.4, 4078.0], [72.5, 4079.0], [72.6, 4079.0], [72.7, 4079.0], [72.8, 4079.0], [72.9, 4079.0], [73.0, 4079.0], [73.1, 4089.0], [73.2, 4089.0], [73.3, 4089.0], [73.4, 4089.0], [73.5, 4090.0], [73.6, 4091.0], [73.7, 4091.0], [73.8, 4091.0], [73.9, 4094.0], [74.0, 4094.0], [74.1, 4094.0], [74.2, 4095.0], [74.3, 4095.0], [74.4, 4095.0], [74.5, 4095.0], [74.6, 4095.0], [74.7, 4095.0], [74.8, 4095.0], [74.9, 4095.0], [75.0, 4095.0], [75.1, 4096.0], [75.2, 4096.0], [75.3, 4096.0], [75.4, 4096.0], [75.5, 4096.0], [75.6, 4096.0], [75.7, 4096.0], [75.8, 4096.0], [75.9, 4096.0], [76.0, 4096.0], [76.1, 4096.0], [76.2, 4097.0], [76.3, 4097.0], [76.4, 4097.0], [76.5, 4106.0], [76.6, 4111.0], [76.7, 4112.0], [76.8, 4113.0], [76.9, 4113.0], [77.0, 4113.0], [77.1, 4120.0], [77.2, 4126.0], [77.3, 4127.0], [77.4, 4128.0], [77.5, 4128.0], [77.6, 4129.0], [77.7, 4130.0], [77.8, 4136.0], [77.9, 4143.0], [78.0, 4144.0], [78.1, 4158.0], [78.2, 4165.0], [78.3, 4166.0], [78.4, 4169.0], [78.5, 4175.0], [78.6, 4175.0], [78.7, 4175.0], [78.8, 4175.0], [78.9, 4176.0], [79.0, 4176.0], [79.1, 4177.0], [79.2, 4177.0], [79.3, 4177.0], [79.4, 4178.0], [79.5, 4178.0], [79.6, 4179.0], [79.7, 4180.0], [79.8, 4180.0], [79.9, 4180.0], [80.0, 4180.0], [80.1, 4180.0], [80.2, 4180.0], [80.3, 4180.0], [80.4, 4180.0], [80.5, 4181.0], [80.6, 4181.0], [80.7, 4181.0], [80.8, 4181.0], [80.9, 4181.0], [81.0, 4181.0], [81.1, 4182.0], [81.2, 4182.0], [81.3, 4182.0], [81.4, 4182.0], [81.5, 4183.0], [81.6, 4184.0], [81.7, 4187.0], [81.8, 4195.0], [81.9, 4196.0], [82.0, 4196.0], [82.1, 4196.0], [82.2, 4197.0], [82.3, 4197.0], [82.4, 4197.0], [82.5, 4197.0], [82.6, 4197.0], [82.7, 4197.0], [82.8, 4197.0], [82.9, 4197.0], [83.0, 4197.0], [83.1, 4197.0], [83.2, 4198.0], [83.3, 4198.0], [83.4, 4198.0], [83.5, 4198.0], [83.6, 4198.0], [83.7, 4198.0], [83.8, 4198.0], [83.9, 4198.0], [84.0, 4199.0], [84.1, 4199.0], [84.2, 4199.0], [84.3, 4199.0], [84.4, 4199.0], [84.5, 4200.0], [84.6, 4214.0], [84.7, 4215.0], [84.8, 4215.0], [84.9, 4215.0], [85.0, 4215.0], [85.1, 4216.0], [85.2, 4216.0], [85.3, 4216.0], [85.4, 4218.0], [85.5, 4219.0], [85.6, 4219.0], [85.7, 4219.0], [85.8, 4221.0], [85.9, 4235.0], [86.0, 4238.0], [86.1, 4239.0], [86.2, 4239.0], [86.3, 4240.0], [86.4, 4241.0], [86.5, 4241.0], [86.6, 4241.0], [86.7, 4242.0], [86.8, 4249.0], [86.9, 4250.0], [87.0, 4250.0], [87.1, 4250.0], [87.2, 4250.0], [87.3, 4251.0], [87.4, 4252.0], [87.5, 4261.0], [87.6, 4263.0], [87.7, 4263.0], [87.8, 4264.0], [87.9, 4264.0], [88.0, 4265.0], [88.1, 4268.0], [88.2, 4269.0], [88.3, 4269.0], [88.4, 4270.0], [88.5, 4270.0], [88.6, 4271.0], [88.7, 4273.0], [88.8, 4279.0], [88.9, 4279.0], [89.0, 4279.0], [89.1, 4279.0], [89.2, 4280.0], [89.3, 4280.0], [89.4, 4282.0], [89.5, 4285.0], [89.6, 4287.0], [89.7, 4289.0], [89.8, 4291.0], [89.9, 4292.0], [90.0, 4292.0], [90.1, 4293.0], [90.2, 4293.0], [90.3, 4293.0], [90.4, 4293.0], [90.5, 4293.0], [90.6, 4294.0], [90.7, 4294.0], [90.8, 4294.0], [90.9, 4294.0], [91.0, 4294.0], [91.1, 4294.0], [91.2, 4294.0], [91.3, 4296.0], [91.4, 4299.0], [91.5, 4299.0], [91.6, 4300.0], [91.7, 4300.0], [91.8, 4300.0], [91.9, 4300.0], [92.0, 4300.0], [92.1, 4300.0], [92.2, 4300.0], [92.3, 4300.0], [92.4, 4301.0], [92.5, 4301.0], [92.6, 4301.0], [92.7, 4301.0], [92.8, 4301.0], [92.9, 4301.0], [93.0, 4301.0], [93.1, 4301.0], [93.2, 4302.0], [93.3, 4309.0], [93.4, 4309.0], [93.5, 4309.0], [93.6, 4309.0], [93.7, 4309.0], [93.8, 4310.0], [93.9, 4331.0], [94.0, 4347.0], [94.1, 4347.0], [94.2, 4347.0], [94.3, 4348.0], [94.4, 4362.0], [94.5, 4363.0], [94.6, 4363.0], [94.7, 4363.0], [94.8, 4364.0], [94.9, 4364.0], [95.0, 4365.0], [95.1, 4381.0], [95.2, 4384.0], [95.3, 4387.0], [95.4, 4390.0], [95.5, 4391.0], [95.6, 4402.0], [95.7, 4402.0], [95.8, 4402.0], [95.9, 4403.0], [96.0, 4403.0], [96.1, 4403.0], [96.2, 4403.0], [96.3, 4403.0], [96.4, 4403.0], [96.5, 4403.0], [96.6, 4403.0], [96.7, 4404.0], [96.8, 4404.0], [96.9, 4404.0], [97.0, 4404.0], [97.1, 4404.0], [97.2, 4405.0], [97.3, 4406.0], [97.4, 4406.0], [97.5, 4406.0], [97.6, 4428.0], [97.7, 4451.0], [97.8, 4451.0], [97.9, 4451.0], [98.0, 4453.0], [98.1, 4453.0], [98.2, 4454.0], [98.3, 4487.0], [98.4, 4487.0], [98.5, 4489.0], [98.6, 4491.0], [98.7, 4492.0], [98.8, 4495.0], [98.9, 4496.0], [99.0, 4500.0], [99.1, 4505.0], [99.2, 4505.0], [99.3, 4506.0], [99.4, 4506.0], [99.5, 4508.0], [99.6, 4679.0], [99.7, 5043.0], [99.8, 5274.0], [99.9, 5367.0], [100.0, 5647.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 283.0, "series": [{"data": [[600.0, 15.0], [700.0, 73.0], [800.0, 69.0], [900.0, 26.0], [1000.0, 27.0], [1100.0, 28.0], [1200.0, 16.0], [1300.0, 14.0], [1400.0, 14.0], [1500.0, 9.0], [1600.0, 17.0], [1700.0, 3.0], [1800.0, 27.0], [1900.0, 19.0], [2000.0, 39.0], [2100.0, 28.0], [2300.0, 42.0], [2200.0, 21.0], [2400.0, 72.0], [2500.0, 75.0], [2600.0, 133.0], [2700.0, 121.0], [2800.0, 90.0], [2900.0, 130.0], [3000.0, 60.0], [3100.0, 57.0], [3200.0, 33.0], [3300.0, 19.0], [3400.0, 99.0], [3500.0, 100.0], [3700.0, 163.0], [3600.0, 124.0], [3800.0, 197.0], [3900.0, 270.0], [4000.0, 283.0], [4300.0, 132.0], [4100.0, 264.0], [4200.0, 232.0], [4600.0, 3.0], [4500.0, 17.0], [4400.0, 113.0], [5000.0, 4.0], [5100.0, 2.0], [5200.0, 1.0], [5300.0, 5.0], [5600.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 282.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3005.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 282.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3005.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 55.05760709010339, "minX": 1.78003818E12, "maxY": 103.9410692588093, "series": [{"data": [[1.78003824E12, 103.9410692588093], [1.7800383E12, 99.9470954356846], [1.78003818E12, 55.05760709010339]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800383E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 742.0, "minX": 1.0, "maxY": 4303.0, "series": [{"data": [[5.0, 3617.25], [6.0, 1769.0], [7.0, 891.0], [8.0, 870.0], [9.0, 1829.625], [10.0, 785.0], [11.0, 1802.8], [12.0, 761.2], [13.0, 764.6], [14.0, 742.0], [15.0, 2956.6], [16.0, 1192.7142857142858], [17.0, 1082.5555555555557], [18.0, 815.3333333333334], [19.0, 1186.5454545454545], [20.0, 1116.0], [21.0, 750.75], [22.0, 776.7857142857144], [23.0, 754.4], [24.0, 769.3333333333333], [25.0, 795.1666666666667], [26.0, 798.3333333333334], [27.0, 1602.4999999999998], [28.0, 822.0], [29.0, 901.1666666666667], [30.0, 852.2857142857143], [31.0, 853.4], [32.0, 929.5], [33.0, 896.0], [34.0, 925.5999999999999], [35.0, 994.0], [36.0, 1077.5555555555557], [37.0, 1069.7142857142856], [38.0, 1108.818181818182], [39.0, 1242.8333333333335], [40.0, 1227.8888888888891], [41.0, 1141.9285714285716], [42.0, 1191.75], [43.0, 1411.142857142857], [44.0, 1294.25], [45.0, 1352.8], [46.0, 1394.3636363636365], [47.0, 1613.6666666666667], [48.0, 1590.0], [49.0, 1624.142857142857], [50.0, 1834.5555555555557], [51.0, 1720.0], [52.0, 2004.7500000000002], [53.0, 1934.7692307692307], [54.0, 1996.0], [55.0, 2095.6666666666665], [57.0, 2146.1000000000004], [58.0, 1943.5555555555557], [59.0, 1874.0], [61.0, 2272.8947368421054], [63.0, 2117.0], [64.0, 1995.0], [66.0, 2448.6190476190477], [67.0, 4303.0], [68.0, 2486.3076923076924], [70.0, 2529.4615384615386], [71.0, 3742.0], [73.0, 2270.7619047619046], [74.0, 3036.0], [72.0, 3878.7999999999993], [77.0, 2608.5], [79.0, 2735.578947368421], [80.0, 2808.0], [82.0, 2724.4400000000005], [83.0, 3173.0], [86.0, 2744.7142857142853], [89.0, 2787.6551724137926], [90.0, 2197.0], [93.0, 2954.8999999999996], [97.0, 3269.2413793103456], [98.0, 2487.6666666666665], [101.0, 3301.9999999999995], [102.0, 2722.6], [104.0, 3741.708233413271], [1.0, 3693.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[92.70155156677788, 3344.274110130812]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 104.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1805.3333333333333, "minX": 1.78003818E12, "maxY": 6337.1, "series": [{"data": [[1.78003824E12, 6337.1], [1.7800383E12, 3711.4], [1.78003818E12, 2606.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003824E12, 4389.333333333333], [1.7800383E12, 2570.6666666666665], [1.78003818E12, 1805.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800383E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1843.695716395864, "minX": 1.78003818E12, "maxY": 3737.168049792531, "series": [{"data": [[1.78003824E12, 3731.3590522478744], [1.7800383E12, 3737.168049792531], [1.78003818E12, 1843.695716395864]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800383E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1843.617429837519, "minX": 1.78003818E12, "maxY": 3737.1597510373467, "series": [{"data": [[1.78003824E12, 3731.3147023086253], [1.7800383E12, 3737.1597510373467], [1.78003818E12, 1843.617429837519]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800383E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.038381742738589186, "minX": 1.78003818E12, "maxY": 0.17872968980797627, "series": [{"data": [[1.78003824E12, 0.05103280680437424], [1.7800383E12, 0.038381742738589186], [1.78003818E12, 0.17872968980797627]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800383E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 672.0, "minX": 1.78003818E12, "maxY": 5647.0, "series": [{"data": [[1.78003824E12, 5647.0], [1.7800383E12, 5397.0], [1.78003818E12, 3747.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003824E12, 2172.0], [1.7800383E12, 2151.0], [1.78003818E12, 672.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003824E12, 4293.3], [1.7800383E12, 4301.0], [1.78003818E12, 3074.4000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003824E12, 4506.0], [1.7800383E12, 4404.0], [1.78003818E12, 3419.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003824E12, 3901.5], [1.7800383E12, 3960.0], [1.78003818E12, 1937.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003824E12, 4406.0], [1.7800383E12, 4379.0], [1.78003818E12, 3224.100000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800383E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 722.0, "minX": 1.0, "maxY": 4403.0, "series": [{"data": [[2.0, 1257.0], [32.0, 3450.5], [33.0, 3553.0], [34.0, 3655.0], [35.0, 3906.0], [36.0, 3884.0], [37.0, 3993.0], [38.0, 3962.0], [39.0, 4180.0], [40.0, 3902.0], [41.0, 4044.5], [43.0, 3993.0], [42.0, 4198.0], [46.0, 2680.0], [47.0, 4403.0], [3.0, 2907.0], [48.0, 4078.0], [53.0, 4269.0], [4.0, 2995.0], [72.0, 3915.5], [8.0, 855.5], [11.0, 1990.0], [13.0, 729.0], [16.0, 722.0], [1.0, 3098.5], [18.0, 1709.0], [19.0, 3501.0], [20.0, 2139.0], [21.0, 2096.0], [24.0, 1405.5], [25.0, 1662.5], [26.0, 3610.5], [28.0, 1514.5], [29.0, 1013.5], [30.0, 3990.0], [31.0, 2406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 721.5, "minX": 1.0, "maxY": 4403.0, "series": [{"data": [[2.0, 1252.0], [32.0, 3450.5], [33.0, 3553.0], [34.0, 3655.0], [35.0, 3906.0], [36.0, 3884.0], [37.0, 3993.0], [38.0, 3962.0], [39.0, 4180.0], [40.0, 3902.0], [41.0, 4044.5], [43.0, 3993.0], [42.0, 4198.0], [46.0, 2680.0], [47.0, 4403.0], [3.0, 2907.0], [48.0, 4078.0], [53.0, 4269.0], [4.0, 2995.0], [72.0, 3915.5], [8.0, 855.5], [11.0, 1990.0], [13.0, 728.0], [16.0, 721.5], [1.0, 3098.5], [18.0, 1709.0], [19.0, 3501.0], [20.0, 2139.0], [21.0, 2096.0], [24.0, 1405.0], [25.0, 1662.5], [26.0, 3610.5], [28.0, 1514.5], [29.0, 1013.5], [30.0, 3990.0], [31.0, 2406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.95, "minX": 1.78003818E12, "maxY": 27.5, "series": [{"data": [[1.78003824E12, 27.5], [1.7800383E12, 14.333333333333334], [1.78003818E12, 12.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800383E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.283333333333333, "minX": 1.78003818E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003824E12, 27.433333333333334], [1.7800383E12, 16.066666666666666], [1.78003818E12, 11.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7800383E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.283333333333333, "minX": 1.78003818E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003824E12, 27.433333333333334], [1.7800383E12, 16.066666666666666], [1.78003818E12, 11.283333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800383E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.283333333333333, "minX": 1.78003818E12, "maxY": 27.433333333333334, "series": [{"data": [[1.78003824E12, 27.433333333333334], [1.7800383E12, 16.066666666666666], [1.78003818E12, 11.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7800383E12, "title": "Total Transactions Per Second"}},
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

