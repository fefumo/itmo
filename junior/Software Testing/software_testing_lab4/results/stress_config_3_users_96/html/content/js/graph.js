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
        data: {"result": {"minY": 751.0, "minX": 0.0, "maxY": 5247.0, "series": [{"data": [[0.0, 751.0], [0.1, 756.0], [0.2, 769.0], [0.3, 787.0], [0.4, 789.0], [0.5, 819.0], [0.6, 819.0], [0.7, 821.0], [0.8, 823.0], [0.9, 824.0], [1.0, 832.0], [1.1, 833.0], [1.2, 849.0], [1.3, 854.0], [1.4, 860.0], [1.5, 860.0], [1.6, 874.0], [1.7, 885.0], [1.8, 885.0], [1.9, 885.0], [2.0, 890.0], [2.1, 896.0], [2.2, 901.0], [2.3, 906.0], [2.4, 912.0], [2.5, 912.0], [2.6, 913.0], [2.7, 913.0], [2.8, 921.0], [2.9, 921.0], [3.0, 921.0], [3.1, 924.0], [3.2, 924.0], [3.3, 926.0], [3.4, 927.0], [3.5, 927.0], [3.6, 929.0], [3.7, 932.0], [3.8, 934.0], [3.9, 934.0], [4.0, 935.0], [4.1, 938.0], [4.2, 941.0], [4.3, 949.0], [4.4, 950.0], [4.5, 958.0], [4.6, 964.0], [4.7, 965.0], [4.8, 966.0], [4.9, 967.0], [5.0, 970.0], [5.1, 971.0], [5.2, 972.0], [5.3, 972.0], [5.4, 973.0], [5.5, 978.0], [5.6, 979.0], [5.7, 987.0], [5.8, 997.0], [5.9, 1000.0], [6.0, 1007.0], [6.1, 1014.0], [6.2, 1017.0], [6.3, 1026.0], [6.4, 1029.0], [6.5, 1034.0], [6.6, 1047.0], [6.7, 1048.0], [6.8, 1062.0], [6.9, 1066.0], [7.0, 1074.0], [7.1, 1085.0], [7.2, 1107.0], [7.3, 1114.0], [7.4, 1124.0], [7.5, 1130.0], [7.6, 1131.0], [7.7, 1133.0], [7.8, 1142.0], [7.9, 1144.0], [8.0, 1150.0], [8.1, 1151.0], [8.2, 1158.0], [8.3, 1162.0], [8.4, 1166.0], [8.5, 1169.0], [8.6, 1170.0], [8.7, 1174.0], [8.8, 1175.0], [8.9, 1182.0], [9.0, 1182.0], [9.1, 1184.0], [9.2, 1185.0], [9.3, 1194.0], [9.4, 1203.0], [9.5, 1205.0], [9.6, 1207.0], [9.7, 1213.0], [9.8, 1219.0], [9.9, 1225.0], [10.0, 1227.0], [10.1, 1228.0], [10.2, 1230.0], [10.3, 1230.0], [10.4, 1233.0], [10.5, 1242.0], [10.6, 1257.0], [10.7, 1261.0], [10.8, 1262.0], [10.9, 1267.0], [11.0, 1267.0], [11.1, 1268.0], [11.2, 1271.0], [11.3, 1274.0], [11.4, 1280.0], [11.5, 1282.0], [11.6, 1285.0], [11.7, 1288.0], [11.8, 1301.0], [11.9, 1301.0], [12.0, 1309.0], [12.1, 1313.0], [12.2, 1319.0], [12.3, 1330.0], [12.4, 1334.0], [12.5, 1336.0], [12.6, 1340.0], [12.7, 1340.0], [12.8, 1346.0], [12.9, 1347.0], [13.0, 1350.0], [13.1, 1358.0], [13.2, 1362.0], [13.3, 1371.0], [13.4, 1371.0], [13.5, 1374.0], [13.6, 1380.0], [13.7, 1382.0], [13.8, 1386.0], [13.9, 1387.0], [14.0, 1394.0], [14.1, 1394.0], [14.2, 1397.0], [14.3, 1400.0], [14.4, 1404.0], [14.5, 1409.0], [14.6, 1414.0], [14.7, 1420.0], [14.8, 1423.0], [14.9, 1424.0], [15.0, 1427.0], [15.1, 1432.0], [15.2, 1433.0], [15.3, 1435.0], [15.4, 1437.0], [15.5, 1441.0], [15.6, 1444.0], [15.7, 1448.0], [15.8, 1452.0], [15.9, 1470.0], [16.0, 1472.0], [16.1, 1476.0], [16.2, 1480.0], [16.3, 1485.0], [16.4, 1487.0], [16.5, 1489.0], [16.6, 1498.0], [16.7, 1503.0], [16.8, 1511.0], [16.9, 1512.0], [17.0, 1513.0], [17.1, 1516.0], [17.2, 1523.0], [17.3, 1523.0], [17.4, 1537.0], [17.5, 1542.0], [17.6, 1548.0], [17.7, 1549.0], [17.8, 1557.0], [17.9, 1565.0], [18.0, 1569.0], [18.1, 1569.0], [18.2, 1600.0], [18.3, 1602.0], [18.4, 1617.0], [18.5, 1617.0], [18.6, 1630.0], [18.7, 1651.0], [18.8, 1654.0], [18.9, 1665.0], [19.0, 1683.0], [19.1, 1702.0], [19.2, 1706.0], [19.3, 1708.0], [19.4, 1783.0], [19.5, 1809.0], [19.6, 1832.0], [19.7, 1887.0], [19.8, 1892.0], [19.9, 1912.0], [20.0, 1914.0], [20.1, 1946.0], [20.2, 1953.0], [20.3, 1963.0], [20.4, 1985.0], [20.5, 1994.0], [20.6, 1994.0], [20.7, 1995.0], [20.8, 1995.0], [20.9, 1996.0], [21.0, 1996.0], [21.1, 1997.0], [21.2, 1999.0], [21.3, 2011.0], [21.4, 2013.0], [21.5, 2015.0], [21.6, 2023.0], [21.7, 2049.0], [21.8, 2057.0], [21.9, 2064.0], [22.0, 2064.0], [22.1, 2083.0], [22.2, 2083.0], [22.3, 2093.0], [22.4, 2098.0], [22.5, 2098.0], [22.6, 2101.0], [22.7, 2102.0], [22.8, 2117.0], [22.9, 2125.0], [23.0, 2153.0], [23.1, 2166.0], [23.2, 2222.0], [23.3, 2228.0], [23.4, 2228.0], [23.5, 2230.0], [23.6, 2244.0], [23.7, 2307.0], [23.8, 2309.0], [23.9, 2309.0], [24.0, 2322.0], [24.1, 2322.0], [24.2, 2331.0], [24.3, 2350.0], [24.4, 2351.0], [24.5, 2352.0], [24.6, 2356.0], [24.7, 2356.0], [24.8, 2356.0], [24.9, 2357.0], [25.0, 2357.0], [25.1, 2365.0], [25.2, 2368.0], [25.3, 2383.0], [25.4, 2392.0], [25.5, 2392.0], [25.6, 2393.0], [25.7, 2393.0], [25.8, 2393.0], [25.9, 2393.0], [26.0, 2405.0], [26.1, 2416.0], [26.2, 2421.0], [26.3, 2424.0], [26.4, 2424.0], [26.5, 2424.0], [26.6, 2424.0], [26.7, 2432.0], [26.8, 2432.0], [26.9, 2432.0], [27.0, 2432.0], [27.1, 2432.0], [27.2, 2432.0], [27.3, 2432.0], [27.4, 2447.0], [27.5, 2448.0], [27.6, 2448.0], [27.7, 2448.0], [27.8, 2458.0], [27.9, 2458.0], [28.0, 2458.0], [28.1, 2458.0], [28.2, 2467.0], [28.3, 2494.0], [28.4, 2494.0], [28.5, 2494.0], [28.6, 2494.0], [28.7, 2494.0], [28.8, 2497.0], [28.9, 2497.0], [29.0, 2498.0], [29.1, 2530.0], [29.2, 2535.0], [29.3, 2539.0], [29.4, 2557.0], [29.5, 2557.0], [29.6, 2605.0], [29.7, 2608.0], [29.8, 2651.0], [29.9, 2652.0], [30.0, 2652.0], [30.1, 2652.0], [30.2, 2683.0], [30.3, 2683.0], [30.4, 2683.0], [30.5, 2683.0], [30.6, 2691.0], [30.7, 2692.0], [30.8, 2693.0], [30.9, 2693.0], [31.0, 2693.0], [31.1, 2693.0], [31.2, 2695.0], [31.3, 2696.0], [31.4, 2696.0], [31.5, 2696.0], [31.6, 2697.0], [31.7, 2697.0], [31.8, 2699.0], [31.9, 2699.0], [32.0, 2699.0], [32.1, 2717.0], [32.2, 2717.0], [32.3, 2717.0], [32.4, 2727.0], [32.5, 2741.0], [32.6, 2747.0], [32.7, 2774.0], [32.8, 2774.0], [32.9, 2774.0], [33.0, 2780.0], [33.1, 2780.0], [33.2, 2780.0], [33.3, 2780.0], [33.4, 2780.0], [33.5, 2780.0], [33.6, 2780.0], [33.7, 2781.0], [33.8, 2781.0], [33.9, 2782.0], [34.0, 2785.0], [34.1, 2785.0], [34.2, 2785.0], [34.3, 2785.0], [34.4, 2785.0], [34.5, 2785.0], [34.6, 2808.0], [34.7, 2808.0], [34.8, 2808.0], [34.9, 2808.0], [35.0, 2810.0], [35.1, 2843.0], [35.2, 2844.0], [35.3, 2844.0], [35.4, 2845.0], [35.5, 2845.0], [35.6, 2877.0], [35.7, 2877.0], [35.8, 2877.0], [35.9, 2877.0], [36.0, 2884.0], [36.1, 2885.0], [36.2, 2885.0], [36.3, 2885.0], [36.4, 2886.0], [36.5, 2886.0], [36.6, 2886.0], [36.7, 2901.0], [36.8, 2902.0], [36.9, 2902.0], [37.0, 2902.0], [37.1, 2929.0], [37.2, 2929.0], [37.3, 2929.0], [37.4, 2955.0], [37.5, 2989.0], [37.6, 2990.0], [37.7, 2990.0], [37.8, 3004.0], [37.9, 3016.0], [38.0, 3016.0], [38.1, 3020.0], [38.2, 3021.0], [38.3, 3022.0], [38.4, 3022.0], [38.5, 3022.0], [38.6, 3022.0], [38.7, 3022.0], [38.8, 3022.0], [38.9, 3022.0], [39.0, 3022.0], [39.1, 3022.0], [39.2, 3022.0], [39.3, 3022.0], [39.4, 3022.0], [39.5, 3022.0], [39.6, 3022.0], [39.7, 3022.0], [39.8, 3023.0], [39.9, 3023.0], [40.0, 3023.0], [40.1, 3023.0], [40.2, 3027.0], [40.3, 3033.0], [40.4, 3033.0], [40.5, 3033.0], [40.6, 3033.0], [40.7, 3034.0], [40.8, 3034.0], [40.9, 3047.0], [41.0, 3060.0], [41.1, 3073.0], [41.2, 3098.0], [41.3, 3104.0], [41.4, 3111.0], [41.5, 3116.0], [41.6, 3116.0], [41.7, 3116.0], [41.8, 3116.0], [41.9, 3116.0], [42.0, 3117.0], [42.1, 3137.0], [42.2, 3138.0], [42.3, 3141.0], [42.4, 3146.0], [42.5, 3170.0], [42.6, 3170.0], [42.7, 3170.0], [42.8, 3170.0], [42.9, 3173.0], [43.0, 3192.0], [43.1, 3199.0], [43.2, 3201.0], [43.3, 3207.0], [43.4, 3207.0], [43.5, 3207.0], [43.6, 3207.0], [43.7, 3207.0], [43.8, 3207.0], [43.9, 3208.0], [44.0, 3208.0], [44.1, 3227.0], [44.2, 3230.0], [44.3, 3230.0], [44.4, 3244.0], [44.5, 3279.0], [44.6, 3285.0], [44.7, 3297.0], [44.8, 3298.0], [44.9, 3300.0], [45.0, 3304.0], [45.1, 3311.0], [45.2, 3320.0], [45.3, 3320.0], [45.4, 3320.0], [45.5, 3320.0], [45.6, 3320.0], [45.7, 3320.0], [45.8, 3320.0], [45.9, 3321.0], [46.0, 3323.0], [46.1, 3323.0], [46.2, 3324.0], [46.3, 3324.0], [46.4, 3332.0], [46.5, 3332.0], [46.6, 3333.0], [46.7, 3333.0], [46.8, 3334.0], [46.9, 3338.0], [47.0, 3338.0], [47.1, 3338.0], [47.2, 3352.0], [47.3, 3353.0], [47.4, 3353.0], [47.5, 3353.0], [47.6, 3354.0], [47.7, 3354.0], [47.8, 3354.0], [47.9, 3354.0], [48.0, 3354.0], [48.1, 3354.0], [48.2, 3354.0], [48.3, 3354.0], [48.4, 3355.0], [48.5, 3355.0], [48.6, 3355.0], [48.7, 3355.0], [48.8, 3355.0], [48.9, 3355.0], [49.0, 3358.0], [49.1, 3387.0], [49.2, 3394.0], [49.3, 3395.0], [49.4, 3396.0], [49.5, 3396.0], [49.6, 3396.0], [49.7, 3396.0], [49.8, 3396.0], [49.9, 3397.0], [50.0, 3397.0], [50.1, 3397.0], [50.2, 3397.0], [50.3, 3397.0], [50.4, 3397.0], [50.5, 3397.0], [50.6, 3397.0], [50.7, 3397.0], [50.8, 3397.0], [50.9, 3397.0], [51.0, 3398.0], [51.1, 3398.0], [51.2, 3398.0], [51.3, 3398.0], [51.4, 3399.0], [51.5, 3399.0], [51.6, 3399.0], [51.7, 3403.0], [51.8, 3406.0], [51.9, 3406.0], [52.0, 3406.0], [52.1, 3406.0], [52.2, 3407.0], [52.3, 3407.0], [52.4, 3407.0], [52.5, 3407.0], [52.6, 3407.0], [52.7, 3407.0], [52.8, 3407.0], [52.9, 3407.0], [53.0, 3407.0], [53.1, 3407.0], [53.2, 3407.0], [53.3, 3407.0], [53.4, 3407.0], [53.5, 3407.0], [53.6, 3407.0], [53.7, 3408.0], [53.8, 3408.0], [53.9, 3408.0], [54.0, 3415.0], [54.1, 3415.0], [54.2, 3415.0], [54.3, 3415.0], [54.4, 3415.0], [54.5, 3415.0], [54.6, 3415.0], [54.7, 3415.0], [54.8, 3415.0], [54.9, 3415.0], [55.0, 3415.0], [55.1, 3416.0], [55.2, 3416.0], [55.3, 3416.0], [55.4, 3417.0], [55.5, 3417.0], [55.6, 3417.0], [55.7, 3417.0], [55.8, 3417.0], [55.9, 3419.0], [56.0, 3419.0], [56.1, 3420.0], [56.2, 3437.0], [56.3, 3452.0], [56.4, 3452.0], [56.5, 3452.0], [56.6, 3452.0], [56.7, 3453.0], [56.8, 3453.0], [56.9, 3453.0], [57.0, 3453.0], [57.1, 3453.0], [57.2, 3453.0], [57.3, 3453.0], [57.4, 3453.0], [57.5, 3453.0], [57.6, 3453.0], [57.7, 3453.0], [57.8, 3454.0], [57.9, 3454.0], [58.0, 3455.0], [58.1, 3455.0], [58.2, 3460.0], [58.3, 3469.0], [58.4, 3476.0], [58.5, 3478.0], [58.6, 3510.0], [58.7, 3514.0], [58.8, 3514.0], [58.9, 3514.0], [59.0, 3514.0], [59.1, 3546.0], [59.2, 3553.0], [59.3, 3553.0], [59.4, 3553.0], [59.5, 3553.0], [59.6, 3553.0], [59.7, 3553.0], [59.8, 3553.0], [59.9, 3553.0], [60.0, 3553.0], [60.1, 3553.0], [60.2, 3554.0], [60.3, 3554.0], [60.4, 3554.0], [60.5, 3554.0], [60.6, 3554.0], [60.7, 3554.0], [60.8, 3554.0], [60.9, 3554.0], [61.0, 3554.0], [61.1, 3560.0], [61.2, 3560.0], [61.3, 3560.0], [61.4, 3560.0], [61.5, 3560.0], [61.6, 3575.0], [61.7, 3578.0], [61.8, 3584.0], [61.9, 3584.0], [62.0, 3584.0], [62.1, 3584.0], [62.2, 3585.0], [62.3, 3585.0], [62.4, 3585.0], [62.5, 3585.0], [62.6, 3588.0], [62.7, 3588.0], [62.8, 3588.0], [62.9, 3589.0], [63.0, 3590.0], [63.1, 3590.0], [63.2, 3590.0], [63.3, 3590.0], [63.4, 3590.0], [63.5, 3590.0], [63.6, 3591.0], [63.7, 3591.0], [63.8, 3591.0], [63.9, 3591.0], [64.0, 3591.0], [64.1, 3591.0], [64.2, 3591.0], [64.3, 3591.0], [64.4, 3596.0], [64.5, 3612.0], [64.6, 3636.0], [64.7, 3636.0], [64.8, 3636.0], [64.9, 3636.0], [65.0, 3637.0], [65.1, 3638.0], [65.2, 3638.0], [65.3, 3638.0], [65.4, 3638.0], [65.5, 3638.0], [65.6, 3638.0], [65.7, 3638.0], [65.8, 3638.0], [65.9, 3638.0], [66.0, 3638.0], [66.1, 3638.0], [66.2, 3638.0], [66.3, 3638.0], [66.4, 3658.0], [66.5, 3658.0], [66.6, 3659.0], [66.7, 3660.0], [66.8, 3660.0], [66.9, 3664.0], [67.0, 3678.0], [67.1, 3678.0], [67.2, 3678.0], [67.3, 3678.0], [67.4, 3682.0], [67.5, 3682.0], [67.6, 3682.0], [67.7, 3682.0], [67.8, 3683.0], [67.9, 3683.0], [68.0, 3683.0], [68.1, 3683.0], [68.2, 3683.0], [68.3, 3683.0], [68.4, 3692.0], [68.5, 3696.0], [68.6, 3697.0], [68.7, 3697.0], [68.8, 3697.0], [68.9, 3711.0], [69.0, 3717.0], [69.1, 3723.0], [69.2, 3733.0], [69.3, 3735.0], [69.4, 3735.0], [69.5, 3736.0], [69.6, 3736.0], [69.7, 3736.0], [69.8, 3736.0], [69.9, 3737.0], [70.0, 3739.0], [70.1, 3739.0], [70.2, 3739.0], [70.3, 3739.0], [70.4, 3739.0], [70.5, 3739.0], [70.6, 3739.0], [70.7, 3742.0], [70.8, 3742.0], [70.9, 3764.0], [71.0, 3769.0], [71.1, 3776.0], [71.2, 3790.0], [71.3, 3807.0], [71.4, 3807.0], [71.5, 3807.0], [71.6, 3807.0], [71.7, 3810.0], [71.8, 3810.0], [71.9, 3810.0], [72.0, 3810.0], [72.1, 3810.0], [72.2, 3810.0], [72.3, 3811.0], [72.4, 3811.0], [72.5, 3811.0], [72.6, 3811.0], [72.7, 3811.0], [72.8, 3811.0], [72.9, 3811.0], [73.0, 3811.0], [73.1, 3811.0], [73.2, 3811.0], [73.3, 3811.0], [73.4, 3813.0], [73.5, 3813.0], [73.6, 3813.0], [73.7, 3816.0], [73.8, 3827.0], [73.9, 3832.0], [74.0, 3832.0], [74.1, 3832.0], [74.2, 3832.0], [74.3, 3833.0], [74.4, 3833.0], [74.5, 3833.0], [74.6, 3833.0], [74.7, 3833.0], [74.8, 3834.0], [74.9, 3834.0], [75.0, 3888.0], [75.1, 3895.0], [75.2, 3898.0], [75.3, 3899.0], [75.4, 3907.0], [75.5, 3918.0], [75.6, 3919.0], [75.7, 3920.0], [75.8, 3920.0], [75.9, 3920.0], [76.0, 3920.0], [76.1, 3922.0], [76.2, 3922.0], [76.3, 3922.0], [76.4, 3922.0], [76.5, 3923.0], [76.6, 3923.0], [76.7, 3923.0], [76.8, 3923.0], [76.9, 3924.0], [77.0, 3924.0], [77.1, 3924.0], [77.2, 3924.0], [77.3, 3926.0], [77.4, 3933.0], [77.5, 3949.0], [77.6, 3950.0], [77.7, 3954.0], [77.8, 3954.0], [77.9, 3955.0], [78.0, 3955.0], [78.1, 3958.0], [78.2, 3958.0], [78.3, 3970.0], [78.4, 3971.0], [78.5, 3971.0], [78.6, 3971.0], [78.7, 3971.0], [78.8, 3972.0], [78.9, 3974.0], [79.0, 4001.0], [79.1, 4001.0], [79.2, 4001.0], [79.3, 4001.0], [79.4, 4001.0], [79.5, 4001.0], [79.6, 4001.0], [79.7, 4002.0], [79.8, 4002.0], [79.9, 4002.0], [80.0, 4002.0], [80.1, 4002.0], [80.2, 4004.0], [80.3, 4004.0], [80.4, 4004.0], [80.5, 4004.0], [80.6, 4004.0], [80.7, 4005.0], [80.8, 4005.0], [80.9, 4006.0], [81.0, 4034.0], [81.1, 4034.0], [81.2, 4034.0], [81.3, 4034.0], [81.4, 4034.0], [81.5, 4038.0], [81.6, 4038.0], [81.7, 4038.0], [81.8, 4039.0], [81.9, 4039.0], [82.0, 4039.0], [82.1, 4039.0], [82.2, 4039.0], [82.3, 4039.0], [82.4, 4039.0], [82.5, 4039.0], [82.6, 4039.0], [82.7, 4040.0], [82.8, 4040.0], [82.9, 4040.0], [83.0, 4040.0], [83.1, 4040.0], [83.2, 4040.0], [83.3, 4040.0], [83.4, 4040.0], [83.5, 4040.0], [83.6, 4040.0], [83.7, 4040.0], [83.8, 4041.0], [83.9, 4041.0], [84.0, 4041.0], [84.1, 4041.0], [84.2, 4042.0], [84.3, 4042.0], [84.4, 4042.0], [84.5, 4042.0], [84.6, 4042.0], [84.7, 4042.0], [84.8, 4042.0], [84.9, 4042.0], [85.0, 4043.0], [85.1, 4043.0], [85.2, 4044.0], [85.3, 4044.0], [85.4, 4044.0], [85.5, 4044.0], [85.6, 4044.0], [85.7, 4045.0], [85.8, 4047.0], [85.9, 4048.0], [86.0, 4048.0], [86.1, 4048.0], [86.2, 4048.0], [86.3, 4048.0], [86.4, 4048.0], [86.5, 4048.0], [86.6, 4048.0], [86.7, 4048.0], [86.8, 4049.0], [86.9, 4049.0], [87.0, 4049.0], [87.1, 4049.0], [87.2, 4052.0], [87.3, 4054.0], [87.4, 4054.0], [87.5, 4054.0], [87.6, 4054.0], [87.7, 4054.0], [87.8, 4055.0], [87.9, 4055.0], [88.0, 4055.0], [88.1, 4055.0], [88.2, 4055.0], [88.3, 4055.0], [88.4, 4055.0], [88.5, 4055.0], [88.6, 4056.0], [88.7, 4056.0], [88.8, 4056.0], [88.9, 4059.0], [89.0, 4060.0], [89.1, 4060.0], [89.2, 4061.0], [89.3, 4061.0], [89.4, 4065.0], [89.5, 4065.0], [89.6, 4067.0], [89.7, 4067.0], [89.8, 4067.0], [89.9, 4067.0], [90.0, 4068.0], [90.1, 4068.0], [90.2, 4068.0], [90.3, 4068.0], [90.4, 4068.0], [90.5, 4069.0], [90.6, 4069.0], [90.7, 4069.0], [90.8, 4069.0], [90.9, 4069.0], [91.0, 4069.0], [91.1, 4069.0], [91.2, 4072.0], [91.3, 4072.0], [91.4, 4072.0], [91.5, 4072.0], [91.6, 4073.0], [91.7, 4073.0], [91.8, 4073.0], [91.9, 4074.0], [92.0, 4074.0], [92.1, 4074.0], [92.2, 4075.0], [92.3, 4075.0], [92.4, 4075.0], [92.5, 4075.0], [92.6, 4076.0], [92.7, 4077.0], [92.8, 4077.0], [92.9, 4077.0], [93.0, 4097.0], [93.1, 4123.0], [93.2, 4136.0], [93.3, 4145.0], [93.4, 4160.0], [93.5, 4164.0], [93.6, 4175.0], [93.7, 4190.0], [93.8, 4190.0], [93.9, 4191.0], [94.0, 4191.0], [94.1, 4191.0], [94.2, 4191.0], [94.3, 4191.0], [94.4, 4191.0], [94.5, 4191.0], [94.6, 4192.0], [94.7, 4192.0], [94.8, 4192.0], [94.9, 4192.0], [95.0, 4192.0], [95.1, 4192.0], [95.2, 4193.0], [95.3, 4195.0], [95.4, 4199.0], [95.5, 4207.0], [95.6, 4211.0], [95.7, 4221.0], [95.8, 4263.0], [95.9, 4312.0], [96.0, 4329.0], [96.1, 4349.0], [96.2, 4350.0], [96.3, 4350.0], [96.4, 4350.0], [96.5, 4350.0], [96.6, 4471.0], [96.7, 4516.0], [96.8, 4517.0], [96.9, 4517.0], [97.0, 4517.0], [97.1, 4517.0], [97.2, 4517.0], [97.3, 4517.0], [97.4, 4518.0], [97.5, 4519.0], [97.6, 4556.0], [97.7, 4738.0], [97.8, 4738.0], [97.9, 4829.0], [98.0, 4829.0], [98.1, 4829.0], [98.2, 4829.0], [98.3, 4829.0], [98.4, 4830.0], [98.5, 4830.0], [98.6, 4830.0], [98.7, 4830.0], [98.8, 4830.0], [98.9, 4830.0], [99.0, 4830.0], [99.1, 4831.0], [99.2, 4831.0], [99.3, 4831.0], [99.4, 4831.0], [99.5, 4831.0], [99.6, 4831.0], [99.7, 4920.0], [99.8, 4957.0], [99.9, 5247.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 177.0, "series": [{"data": [[700.0, 6.0], [800.0, 21.0], [900.0, 47.0], [1000.0, 16.0], [1100.0, 28.0], [1200.0, 30.0], [1300.0, 32.0], [1400.0, 29.0], [1500.0, 20.0], [1600.0, 11.0], [1700.0, 5.0], [1800.0, 5.0], [1900.0, 17.0], [2000.0, 17.0], [2100.0, 7.0], [2200.0, 7.0], [2300.0, 29.0], [2400.0, 39.0], [2500.0, 6.0], [2600.0, 31.0], [2800.0, 27.0], [2700.0, 32.0], [2900.0, 13.0], [3000.0, 44.0], [3100.0, 24.0], [3300.0, 85.0], [3200.0, 22.0], [3400.0, 87.0], [3500.0, 74.0], [3600.0, 56.0], [3700.0, 30.0], [3800.0, 52.0], [3900.0, 45.0], [4000.0, 177.0], [4300.0, 9.0], [4100.0, 31.0], [4200.0, 5.0], [4500.0, 12.0], [4400.0, 1.0], [4700.0, 3.0], [4800.0, 23.0], [4900.0, 2.0], [5200.0, 2.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 209.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1050.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 209.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1050.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 85.66246851385397, "minX": 1.77999984E12, "maxY": 90.64849187935046, "series": [{"data": [[1.7799999E12, 85.66246851385397], [1.77999984E12, 90.64849187935046]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799999E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 751.0, "minX": 1.0, "maxY": 3560.0, "series": [{"data": [[11.0, 3349.7999999999997], [16.0, 3560.0], [17.0, 3135.0], [21.0, 940.5], [22.0, 2695.8], [23.0, 938.0], [24.0, 946.0], [26.0, 931.5], [27.0, 2693.0], [28.0, 941.0], [29.0, 938.5], [30.0, 921.0], [31.0, 2341.6], [32.0, 921.0], [34.0, 2055.6], [35.0, 929.0], [36.0, 787.0], [37.0, 880.8], [38.0, 874.0], [39.0, 901.0], [40.0, 838.8], [41.0, 751.0], [42.0, 769.0], [43.0, 953.0], [44.0, 822.6666666666666], [45.0, 934.0], [48.0, 938.0], [49.0, 3216.6470588235293], [50.0, 913.6666666666666], [51.0, 947.5], [53.0, 904.0], [55.0, 1007.0], [56.0, 963.6666666666666], [58.0, 916.75], [59.0, 2816.5714285714284], [61.0, 1453.0], [64.0, 994.1428571428571], [68.0, 1040.5], [69.0, 1022.4], [72.0, 1054.0], [75.0, 1066.0], [76.0, 2741.764705882353], [80.0, 1175.6666666666667], [81.0, 1045.0], [82.0, 2347.5], [83.0, 3453.0], [84.0, 1175.0], [86.0, 1223.6666666666667], [87.0, 1177.0], [85.0, 3453.0], [90.0, 1210.5], [91.0, 1169.0], [94.0, 1263.0], [95.0, 3452.6428571428573], [96.0, 3240.866346153847], [1.0, 2974.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[89.0762509928516, 3019.772041302622]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1058.6666666666667, "minX": 1.77999984E12, "maxY": 3318.7, "series": [{"data": [[1.7799999E12, 1528.45], [1.77999984E12, 3318.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7799999E12, 1058.6666666666667], [1.77999984E12, 2298.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799999E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2845.8143851508157, "minX": 1.77999984E12, "maxY": 3397.4836272040275, "series": [{"data": [[1.7799999E12, 3397.4836272040275], [1.77999984E12, 2845.8143851508157]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799999E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2845.790023201858, "minX": 1.77999984E12, "maxY": 3397.4735516372816, "series": [{"data": [[1.7799999E12, 3397.4735516372816], [1.77999984E12, 2845.790023201858]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799999E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999984E12, "maxY": 0.1345707656612529, "series": [{"data": [[1.7799999E12, 0.0], [1.77999984E12, 0.1345707656612529]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799999E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 751.0, "minX": 1.77999984E12, "maxY": 5247.0, "series": [{"data": [[1.7799999E12, 4193.0], [1.77999984E12, 5247.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7799999E12, 1994.0], [1.77999984E12, 751.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7799999E12, 4072.0], [1.77999984E12, 4067.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7799999E12, 4192.0], [1.77999984E12, 4831.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7799999E12, 3453.0], [1.77999984E12, 3207.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7799999E12, 4190.0], [1.77999984E12, 4456.749999999991]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799999E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 905.5, "minX": 1.0, "maxY": 4829.0, "series": [{"data": [[32.0, 905.5], [33.0, 3920.0], [35.0, 3397.5], [37.0, 3224.0], [36.0, 3636.0], [38.0, 4002.0], [39.0, 4055.0], [40.0, 2808.0], [42.0, 2074.0], [51.0, 4829.0], [13.0, 2309.0], [1.0, 3397.0], [17.0, 3560.0], [5.0, 2844.0], [24.0, 928.0], [26.0, 3415.0], [27.0, 2361.0], [28.0, 3683.0], [29.0, 3354.0], [30.0, 3170.0], [31.0, 3320.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 905.5, "minX": 1.0, "maxY": 4829.0, "series": [{"data": [[32.0, 905.5], [33.0, 3920.0], [35.0, 3397.5], [37.0, 3224.0], [36.0, 3636.0], [38.0, 4002.0], [39.0, 4055.0], [40.0, 2808.0], [42.0, 2074.0], [51.0, 4829.0], [13.0, 2309.0], [1.0, 3397.0], [17.0, 3560.0], [5.0, 2844.0], [24.0, 928.0], [26.0, 3415.0], [27.0, 2361.0], [28.0, 3683.0], [29.0, 3354.0], [30.0, 3170.0], [31.0, 3320.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.016666666666667, "minX": 1.77999984E12, "maxY": 15.966666666666667, "series": [{"data": [[1.7799999E12, 5.016666666666667], [1.77999984E12, 15.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799999E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.616666666666666, "minX": 1.77999984E12, "maxY": 14.366666666666667, "series": [{"data": [[1.7799999E12, 6.616666666666666], [1.77999984E12, 14.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799999E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.616666666666666, "minX": 1.77999984E12, "maxY": 14.366666666666667, "series": [{"data": [[1.7799999E12, 6.616666666666666], [1.77999984E12, 14.366666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799999E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.616666666666666, "minX": 1.77999984E12, "maxY": 14.366666666666667, "series": [{"data": [[1.7799999E12, 6.616666666666666], [1.77999984E12, 14.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799999E12, "title": "Total Transactions Per Second"}},
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

