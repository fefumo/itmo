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
        data: {"result": {"minY": 616.0, "minX": 0.0, "maxY": 1591.0, "series": [{"data": [[0.0, 616.0], [0.1, 624.0], [0.2, 626.0], [0.3, 626.0], [0.4, 628.0], [0.5, 628.0], [0.6, 636.0], [0.7, 636.0], [0.8, 636.0], [0.9, 636.0], [1.0, 643.0], [1.1, 645.0], [1.2, 648.0], [1.3, 648.0], [1.4, 653.0], [1.5, 658.0], [1.6, 661.0], [1.7, 663.0], [1.8, 663.0], [1.9, 668.0], [2.0, 672.0], [2.1, 676.0], [2.2, 679.0], [2.3, 681.0], [2.4, 682.0], [2.5, 689.0], [2.6, 693.0], [2.7, 697.0], [2.8, 698.0], [2.9, 699.0], [3.0, 699.0], [3.1, 709.0], [3.2, 710.0], [3.3, 710.0], [3.4, 712.0], [3.5, 713.0], [3.6, 715.0], [3.7, 715.0], [3.8, 718.0], [3.9, 723.0], [4.0, 731.0], [4.1, 731.0], [4.2, 735.0], [4.3, 736.0], [4.4, 738.0], [4.5, 738.0], [4.6, 741.0], [4.7, 741.0], [4.8, 745.0], [4.9, 745.0], [5.0, 752.0], [5.1, 752.0], [5.2, 753.0], [5.3, 757.0], [5.4, 761.0], [5.5, 761.0], [5.6, 762.0], [5.7, 762.0], [5.8, 764.0], [5.9, 765.0], [6.0, 768.0], [6.1, 771.0], [6.2, 774.0], [6.3, 775.0], [6.4, 776.0], [6.5, 776.0], [6.6, 777.0], [6.7, 778.0], [6.8, 779.0], [6.9, 781.0], [7.0, 782.0], [7.1, 783.0], [7.2, 783.0], [7.3, 784.0], [7.4, 784.0], [7.5, 784.0], [7.6, 784.0], [7.7, 786.0], [7.8, 786.0], [7.9, 789.0], [8.0, 790.0], [8.1, 792.0], [8.2, 794.0], [8.3, 795.0], [8.4, 795.0], [8.5, 795.0], [8.6, 799.0], [8.7, 800.0], [8.8, 800.0], [8.9, 802.0], [9.0, 805.0], [9.1, 806.0], [9.2, 809.0], [9.3, 809.0], [9.4, 809.0], [9.5, 809.0], [9.6, 813.0], [9.7, 813.0], [9.8, 814.0], [9.9, 820.0], [10.0, 821.0], [10.1, 822.0], [10.2, 824.0], [10.3, 824.0], [10.4, 825.0], [10.5, 826.0], [10.6, 826.0], [10.7, 827.0], [10.8, 828.0], [10.9, 831.0], [11.0, 833.0], [11.1, 835.0], [11.2, 836.0], [11.3, 836.0], [11.4, 836.0], [11.5, 837.0], [11.6, 838.0], [11.7, 838.0], [11.8, 842.0], [11.9, 842.0], [12.0, 842.0], [12.1, 843.0], [12.2, 844.0], [12.3, 845.0], [12.4, 848.0], [12.5, 848.0], [12.6, 849.0], [12.7, 851.0], [12.8, 852.0], [12.9, 852.0], [13.0, 854.0], [13.1, 856.0], [13.2, 856.0], [13.3, 857.0], [13.4, 859.0], [13.5, 862.0], [13.6, 863.0], [13.7, 867.0], [13.8, 873.0], [13.9, 875.0], [14.0, 876.0], [14.1, 876.0], [14.2, 882.0], [14.3, 886.0], [14.4, 888.0], [14.5, 890.0], [14.6, 890.0], [14.7, 891.0], [14.8, 895.0], [14.9, 898.0], [15.0, 899.0], [15.1, 901.0], [15.2, 901.0], [15.3, 902.0], [15.4, 908.0], [15.5, 909.0], [15.6, 911.0], [15.7, 915.0], [15.8, 918.0], [15.9, 919.0], [16.0, 922.0], [16.1, 925.0], [16.2, 926.0], [16.3, 932.0], [16.4, 936.0], [16.5, 938.0], [16.6, 941.0], [16.7, 946.0], [16.8, 949.0], [16.9, 950.0], [17.0, 955.0], [17.1, 959.0], [17.2, 961.0], [17.3, 962.0], [17.4, 966.0], [17.5, 966.0], [17.6, 966.0], [17.7, 967.0], [17.8, 968.0], [17.9, 969.0], [18.0, 970.0], [18.1, 970.0], [18.2, 971.0], [18.3, 980.0], [18.4, 982.0], [18.5, 988.0], [18.6, 991.0], [18.7, 996.0], [18.8, 999.0], [18.9, 999.0], [19.0, 1000.0], [19.1, 1001.0], [19.2, 1001.0], [19.3, 1002.0], [19.4, 1002.0], [19.5, 1005.0], [19.6, 1006.0], [19.7, 1007.0], [19.8, 1007.0], [19.9, 1008.0], [20.0, 1008.0], [20.1, 1009.0], [20.2, 1009.0], [20.3, 1010.0], [20.4, 1011.0], [20.5, 1011.0], [20.6, 1011.0], [20.7, 1012.0], [20.8, 1012.0], [20.9, 1012.0], [21.0, 1013.0], [21.1, 1013.0], [21.2, 1015.0], [21.3, 1016.0], [21.4, 1016.0], [21.5, 1016.0], [21.6, 1017.0], [21.7, 1017.0], [21.8, 1017.0], [21.9, 1017.0], [22.0, 1017.0], [22.1, 1017.0], [22.2, 1017.0], [22.3, 1018.0], [22.4, 1018.0], [22.5, 1018.0], [22.6, 1018.0], [22.7, 1018.0], [22.8, 1019.0], [22.9, 1019.0], [23.0, 1019.0], [23.1, 1019.0], [23.2, 1019.0], [23.3, 1019.0], [23.4, 1019.0], [23.5, 1019.0], [23.6, 1019.0], [23.7, 1019.0], [23.8, 1020.0], [23.9, 1020.0], [24.0, 1020.0], [24.1, 1020.0], [24.2, 1020.0], [24.3, 1020.0], [24.4, 1020.0], [24.5, 1020.0], [24.6, 1021.0], [24.7, 1021.0], [24.8, 1021.0], [24.9, 1021.0], [25.0, 1021.0], [25.1, 1021.0], [25.2, 1022.0], [25.3, 1022.0], [25.4, 1022.0], [25.5, 1022.0], [25.6, 1022.0], [25.7, 1022.0], [25.8, 1022.0], [25.9, 1022.0], [26.0, 1023.0], [26.1, 1023.0], [26.2, 1024.0], [26.3, 1024.0], [26.4, 1025.0], [26.5, 1025.0], [26.6, 1025.0], [26.7, 1026.0], [26.8, 1026.0], [26.9, 1026.0], [27.0, 1026.0], [27.1, 1026.0], [27.2, 1027.0], [27.3, 1028.0], [27.4, 1028.0], [27.5, 1028.0], [27.6, 1028.0], [27.7, 1028.0], [27.8, 1028.0], [27.9, 1028.0], [28.0, 1028.0], [28.1, 1028.0], [28.2, 1029.0], [28.3, 1029.0], [28.4, 1029.0], [28.5, 1029.0], [28.6, 1030.0], [28.7, 1030.0], [28.8, 1030.0], [28.9, 1030.0], [29.0, 1030.0], [29.1, 1031.0], [29.2, 1031.0], [29.3, 1031.0], [29.4, 1031.0], [29.5, 1031.0], [29.6, 1031.0], [29.7, 1031.0], [29.8, 1031.0], [29.9, 1031.0], [30.0, 1032.0], [30.1, 1032.0], [30.2, 1032.0], [30.3, 1032.0], [30.4, 1033.0], [30.5, 1033.0], [30.6, 1033.0], [30.7, 1033.0], [30.8, 1033.0], [30.9, 1034.0], [31.0, 1034.0], [31.1, 1034.0], [31.2, 1034.0], [31.3, 1034.0], [31.4, 1034.0], [31.5, 1034.0], [31.6, 1034.0], [31.7, 1035.0], [31.8, 1035.0], [31.9, 1035.0], [32.0, 1036.0], [32.1, 1036.0], [32.2, 1036.0], [32.3, 1036.0], [32.4, 1036.0], [32.5, 1036.0], [32.6, 1036.0], [32.7, 1037.0], [32.8, 1037.0], [32.9, 1037.0], [33.0, 1038.0], [33.1, 1038.0], [33.2, 1038.0], [33.3, 1038.0], [33.4, 1039.0], [33.5, 1039.0], [33.6, 1039.0], [33.7, 1039.0], [33.8, 1039.0], [33.9, 1040.0], [34.0, 1040.0], [34.1, 1040.0], [34.2, 1041.0], [34.3, 1041.0], [34.4, 1041.0], [34.5, 1042.0], [34.6, 1042.0], [34.7, 1042.0], [34.8, 1042.0], [34.9, 1042.0], [35.0, 1043.0], [35.1, 1043.0], [35.2, 1043.0], [35.3, 1043.0], [35.4, 1044.0], [35.5, 1044.0], [35.6, 1044.0], [35.7, 1045.0], [35.8, 1045.0], [35.9, 1045.0], [36.0, 1045.0], [36.1, 1045.0], [36.2, 1045.0], [36.3, 1046.0], [36.4, 1047.0], [36.5, 1048.0], [36.6, 1048.0], [36.7, 1048.0], [36.8, 1049.0], [36.9, 1049.0], [37.0, 1049.0], [37.1, 1050.0], [37.2, 1050.0], [37.3, 1051.0], [37.4, 1051.0], [37.5, 1051.0], [37.6, 1051.0], [37.7, 1051.0], [37.8, 1051.0], [37.9, 1051.0], [38.0, 1052.0], [38.1, 1052.0], [38.2, 1053.0], [38.3, 1053.0], [38.4, 1053.0], [38.5, 1053.0], [38.6, 1053.0], [38.7, 1053.0], [38.8, 1053.0], [38.9, 1053.0], [39.0, 1054.0], [39.1, 1054.0], [39.2, 1054.0], [39.3, 1055.0], [39.4, 1056.0], [39.5, 1056.0], [39.6, 1058.0], [39.7, 1059.0], [39.8, 1059.0], [39.9, 1059.0], [40.0, 1059.0], [40.1, 1060.0], [40.2, 1061.0], [40.3, 1061.0], [40.4, 1061.0], [40.5, 1061.0], [40.6, 1062.0], [40.7, 1062.0], [40.8, 1062.0], [40.9, 1062.0], [41.0, 1062.0], [41.1, 1062.0], [41.2, 1064.0], [41.3, 1064.0], [41.4, 1064.0], [41.5, 1064.0], [41.6, 1064.0], [41.7, 1064.0], [41.8, 1064.0], [41.9, 1065.0], [42.0, 1065.0], [42.1, 1065.0], [42.2, 1071.0], [42.3, 1072.0], [42.4, 1072.0], [42.5, 1072.0], [42.6, 1072.0], [42.7, 1072.0], [42.8, 1072.0], [42.9, 1072.0], [43.0, 1073.0], [43.1, 1073.0], [43.2, 1073.0], [43.3, 1073.0], [43.4, 1073.0], [43.5, 1073.0], [43.6, 1073.0], [43.7, 1074.0], [43.8, 1074.0], [43.9, 1074.0], [44.0, 1074.0], [44.1, 1075.0], [44.2, 1075.0], [44.3, 1075.0], [44.4, 1075.0], [44.5, 1076.0], [44.6, 1076.0], [44.7, 1076.0], [44.8, 1076.0], [44.9, 1076.0], [45.0, 1076.0], [45.1, 1077.0], [45.2, 1077.0], [45.3, 1077.0], [45.4, 1077.0], [45.5, 1077.0], [45.6, 1078.0], [45.7, 1078.0], [45.8, 1078.0], [45.9, 1078.0], [46.0, 1078.0], [46.1, 1078.0], [46.2, 1080.0], [46.3, 1080.0], [46.4, 1081.0], [46.5, 1081.0], [46.6, 1081.0], [46.7, 1081.0], [46.8, 1082.0], [46.9, 1082.0], [47.0, 1082.0], [47.1, 1083.0], [47.2, 1083.0], [47.3, 1083.0], [47.4, 1084.0], [47.5, 1084.0], [47.6, 1085.0], [47.7, 1085.0], [47.8, 1085.0], [47.9, 1085.0], [48.0, 1086.0], [48.1, 1086.0], [48.2, 1086.0], [48.3, 1086.0], [48.4, 1086.0], [48.5, 1087.0], [48.6, 1087.0], [48.7, 1087.0], [48.8, 1087.0], [48.9, 1087.0], [49.0, 1087.0], [49.1, 1087.0], [49.2, 1087.0], [49.3, 1087.0], [49.4, 1087.0], [49.5, 1088.0], [49.6, 1088.0], [49.7, 1088.0], [49.8, 1088.0], [49.9, 1088.0], [50.0, 1088.0], [50.1, 1088.0], [50.2, 1088.0], [50.3, 1089.0], [50.4, 1089.0], [50.5, 1089.0], [50.6, 1089.0], [50.7, 1089.0], [50.8, 1089.0], [50.9, 1090.0], [51.0, 1090.0], [51.1, 1091.0], [51.2, 1091.0], [51.3, 1091.0], [51.4, 1091.0], [51.5, 1091.0], [51.6, 1091.0], [51.7, 1091.0], [51.8, 1091.0], [51.9, 1092.0], [52.0, 1092.0], [52.1, 1092.0], [52.2, 1092.0], [52.3, 1092.0], [52.4, 1092.0], [52.5, 1092.0], [52.6, 1092.0], [52.7, 1093.0], [52.8, 1093.0], [52.9, 1093.0], [53.0, 1093.0], [53.1, 1093.0], [53.2, 1094.0], [53.3, 1094.0], [53.4, 1094.0], [53.5, 1095.0], [53.6, 1095.0], [53.7, 1095.0], [53.8, 1095.0], [53.9, 1095.0], [54.0, 1095.0], [54.1, 1096.0], [54.2, 1096.0], [54.3, 1096.0], [54.4, 1096.0], [54.5, 1096.0], [54.6, 1096.0], [54.7, 1097.0], [54.8, 1097.0], [54.9, 1097.0], [55.0, 1098.0], [55.1, 1098.0], [55.2, 1098.0], [55.3, 1098.0], [55.4, 1099.0], [55.5, 1099.0], [55.6, 1099.0], [55.7, 1100.0], [55.8, 1100.0], [55.9, 1101.0], [56.0, 1101.0], [56.1, 1101.0], [56.2, 1101.0], [56.3, 1101.0], [56.4, 1101.0], [56.5, 1101.0], [56.6, 1101.0], [56.7, 1101.0], [56.8, 1102.0], [56.9, 1102.0], [57.0, 1102.0], [57.1, 1102.0], [57.2, 1102.0], [57.3, 1102.0], [57.4, 1102.0], [57.5, 1102.0], [57.6, 1102.0], [57.7, 1103.0], [57.8, 1103.0], [57.9, 1103.0], [58.0, 1103.0], [58.1, 1103.0], [58.2, 1104.0], [58.3, 1104.0], [58.4, 1104.0], [58.5, 1104.0], [58.6, 1104.0], [58.7, 1104.0], [58.8, 1105.0], [58.9, 1105.0], [59.0, 1105.0], [59.1, 1105.0], [59.2, 1105.0], [59.3, 1106.0], [59.4, 1106.0], [59.5, 1106.0], [59.6, 1106.0], [59.7, 1106.0], [59.8, 1106.0], [59.9, 1107.0], [60.0, 1107.0], [60.1, 1108.0], [60.2, 1108.0], [60.3, 1108.0], [60.4, 1108.0], [60.5, 1108.0], [60.6, 1108.0], [60.7, 1108.0], [60.8, 1108.0], [60.9, 1108.0], [61.0, 1109.0], [61.1, 1109.0], [61.2, 1109.0], [61.3, 1109.0], [61.4, 1109.0], [61.5, 1110.0], [61.6, 1110.0], [61.7, 1110.0], [61.8, 1111.0], [61.9, 1111.0], [62.0, 1111.0], [62.1, 1112.0], [62.2, 1112.0], [62.3, 1112.0], [62.4, 1112.0], [62.5, 1112.0], [62.6, 1113.0], [62.7, 1114.0], [62.8, 1114.0], [62.9, 1115.0], [63.0, 1116.0], [63.1, 1116.0], [63.2, 1116.0], [63.3, 1116.0], [63.4, 1117.0], [63.5, 1117.0], [63.6, 1117.0], [63.7, 1118.0], [63.8, 1119.0], [63.9, 1119.0], [64.0, 1120.0], [64.1, 1120.0], [64.2, 1120.0], [64.3, 1120.0], [64.4, 1120.0], [64.5, 1121.0], [64.6, 1121.0], [64.7, 1122.0], [64.8, 1123.0], [64.9, 1123.0], [65.0, 1123.0], [65.1, 1123.0], [65.2, 1124.0], [65.3, 1124.0], [65.4, 1124.0], [65.5, 1124.0], [65.6, 1125.0], [65.7, 1125.0], [65.8, 1126.0], [65.9, 1127.0], [66.0, 1127.0], [66.1, 1127.0], [66.2, 1128.0], [66.3, 1128.0], [66.4, 1128.0], [66.5, 1129.0], [66.6, 1129.0], [66.7, 1129.0], [66.8, 1129.0], [66.9, 1130.0], [67.0, 1130.0], [67.1, 1130.0], [67.2, 1130.0], [67.3, 1131.0], [67.4, 1132.0], [67.5, 1132.0], [67.6, 1132.0], [67.7, 1132.0], [67.8, 1132.0], [67.9, 1133.0], [68.0, 1133.0], [68.1, 1133.0], [68.2, 1134.0], [68.3, 1134.0], [68.4, 1134.0], [68.5, 1134.0], [68.6, 1134.0], [68.7, 1135.0], [68.8, 1135.0], [68.9, 1135.0], [69.0, 1136.0], [69.1, 1136.0], [69.2, 1137.0], [69.3, 1137.0], [69.4, 1138.0], [69.5, 1138.0], [69.6, 1138.0], [69.7, 1138.0], [69.8, 1138.0], [69.9, 1139.0], [70.0, 1139.0], [70.1, 1139.0], [70.2, 1139.0], [70.3, 1139.0], [70.4, 1139.0], [70.5, 1139.0], [70.6, 1139.0], [70.7, 1140.0], [70.8, 1141.0], [70.9, 1141.0], [71.0, 1141.0], [71.1, 1141.0], [71.2, 1141.0], [71.3, 1141.0], [71.4, 1142.0], [71.5, 1142.0], [71.6, 1142.0], [71.7, 1142.0], [71.8, 1142.0], [71.9, 1143.0], [72.0, 1143.0], [72.1, 1143.0], [72.2, 1144.0], [72.3, 1144.0], [72.4, 1144.0], [72.5, 1144.0], [72.6, 1145.0], [72.7, 1145.0], [72.8, 1146.0], [72.9, 1146.0], [73.0, 1146.0], [73.1, 1147.0], [73.2, 1148.0], [73.3, 1148.0], [73.4, 1149.0], [73.5, 1149.0], [73.6, 1149.0], [73.7, 1149.0], [73.8, 1150.0], [73.9, 1151.0], [74.0, 1151.0], [74.1, 1151.0], [74.2, 1151.0], [74.3, 1153.0], [74.4, 1153.0], [74.5, 1154.0], [74.6, 1155.0], [74.7, 1155.0], [74.8, 1155.0], [74.9, 1155.0], [75.0, 1156.0], [75.1, 1156.0], [75.2, 1156.0], [75.3, 1157.0], [75.4, 1157.0], [75.5, 1157.0], [75.6, 1157.0], [75.7, 1158.0], [75.8, 1158.0], [75.9, 1158.0], [76.0, 1158.0], [76.1, 1159.0], [76.2, 1159.0], [76.3, 1159.0], [76.4, 1160.0], [76.5, 1161.0], [76.6, 1161.0], [76.7, 1162.0], [76.8, 1162.0], [76.9, 1162.0], [77.0, 1162.0], [77.1, 1162.0], [77.2, 1165.0], [77.3, 1166.0], [77.4, 1168.0], [77.5, 1168.0], [77.6, 1168.0], [77.7, 1169.0], [77.8, 1169.0], [77.9, 1169.0], [78.0, 1170.0], [78.1, 1171.0], [78.2, 1171.0], [78.3, 1171.0], [78.4, 1172.0], [78.5, 1174.0], [78.6, 1174.0], [78.7, 1174.0], [78.8, 1175.0], [78.9, 1176.0], [79.0, 1176.0], [79.1, 1177.0], [79.2, 1177.0], [79.3, 1178.0], [79.4, 1178.0], [79.5, 1179.0], [79.6, 1180.0], [79.7, 1180.0], [79.8, 1180.0], [79.9, 1181.0], [80.0, 1182.0], [80.1, 1182.0], [80.2, 1182.0], [80.3, 1183.0], [80.4, 1184.0], [80.5, 1185.0], [80.6, 1185.0], [80.7, 1185.0], [80.8, 1185.0], [80.9, 1186.0], [81.0, 1187.0], [81.1, 1189.0], [81.2, 1189.0], [81.3, 1190.0], [81.4, 1191.0], [81.5, 1192.0], [81.6, 1193.0], [81.7, 1194.0], [81.8, 1195.0], [81.9, 1196.0], [82.0, 1197.0], [82.1, 1199.0], [82.2, 1199.0], [82.3, 1200.0], [82.4, 1202.0], [82.5, 1203.0], [82.6, 1204.0], [82.7, 1205.0], [82.8, 1208.0], [82.9, 1209.0], [83.0, 1210.0], [83.1, 1210.0], [83.2, 1210.0], [83.3, 1210.0], [83.4, 1211.0], [83.5, 1211.0], [83.6, 1211.0], [83.7, 1211.0], [83.8, 1212.0], [83.9, 1212.0], [84.0, 1213.0], [84.1, 1213.0], [84.2, 1213.0], [84.3, 1215.0], [84.4, 1215.0], [84.5, 1216.0], [84.6, 1216.0], [84.7, 1216.0], [84.8, 1216.0], [84.9, 1217.0], [85.0, 1218.0], [85.1, 1218.0], [85.2, 1221.0], [85.3, 1222.0], [85.4, 1223.0], [85.5, 1224.0], [85.6, 1224.0], [85.7, 1225.0], [85.8, 1225.0], [85.9, 1226.0], [86.0, 1226.0], [86.1, 1227.0], [86.2, 1227.0], [86.3, 1228.0], [86.4, 1229.0], [86.5, 1230.0], [86.6, 1231.0], [86.7, 1233.0], [86.8, 1234.0], [86.9, 1234.0], [87.0, 1237.0], [87.1, 1239.0], [87.2, 1241.0], [87.3, 1243.0], [87.4, 1244.0], [87.5, 1244.0], [87.6, 1246.0], [87.7, 1246.0], [87.8, 1247.0], [87.9, 1248.0], [88.0, 1250.0], [88.1, 1252.0], [88.2, 1253.0], [88.3, 1260.0], [88.4, 1260.0], [88.5, 1261.0], [88.6, 1262.0], [88.7, 1263.0], [88.8, 1264.0], [88.9, 1265.0], [89.0, 1265.0], [89.1, 1265.0], [89.2, 1266.0], [89.3, 1270.0], [89.4, 1272.0], [89.5, 1273.0], [89.6, 1273.0], [89.7, 1277.0], [89.8, 1278.0], [89.9, 1280.0], [90.0, 1282.0], [90.1, 1283.0], [90.2, 1285.0], [90.3, 1290.0], [90.4, 1290.0], [90.5, 1291.0], [90.6, 1291.0], [90.7, 1292.0], [90.8, 1292.0], [90.9, 1292.0], [91.0, 1293.0], [91.1, 1294.0], [91.2, 1295.0], [91.3, 1295.0], [91.4, 1295.0], [91.5, 1296.0], [91.6, 1296.0], [91.7, 1296.0], [91.8, 1296.0], [91.9, 1297.0], [92.0, 1297.0], [92.1, 1298.0], [92.2, 1298.0], [92.3, 1300.0], [92.4, 1301.0], [92.5, 1302.0], [92.6, 1302.0], [92.7, 1302.0], [92.8, 1302.0], [92.9, 1302.0], [93.0, 1303.0], [93.1, 1303.0], [93.2, 1304.0], [93.3, 1305.0], [93.4, 1305.0], [93.5, 1306.0], [93.6, 1306.0], [93.7, 1307.0], [93.8, 1308.0], [93.9, 1309.0], [94.0, 1311.0], [94.1, 1311.0], [94.2, 1314.0], [94.3, 1316.0], [94.4, 1317.0], [94.5, 1321.0], [94.6, 1322.0], [94.7, 1323.0], [94.8, 1324.0], [94.9, 1324.0], [95.0, 1324.0], [95.1, 1325.0], [95.2, 1325.0], [95.3, 1325.0], [95.4, 1325.0], [95.5, 1326.0], [95.6, 1326.0], [95.7, 1329.0], [95.8, 1333.0], [95.9, 1334.0], [96.0, 1335.0], [96.1, 1338.0], [96.2, 1339.0], [96.3, 1344.0], [96.4, 1344.0], [96.5, 1347.0], [96.6, 1351.0], [96.7, 1352.0], [96.8, 1352.0], [96.9, 1352.0], [97.0, 1353.0], [97.1, 1354.0], [97.2, 1356.0], [97.3, 1357.0], [97.4, 1357.0], [97.5, 1358.0], [97.6, 1367.0], [97.7, 1369.0], [97.8, 1371.0], [97.9, 1380.0], [98.0, 1380.0], [98.1, 1388.0], [98.2, 1392.0], [98.3, 1394.0], [98.4, 1394.0], [98.5, 1397.0], [98.6, 1403.0], [98.7, 1404.0], [98.8, 1408.0], [98.9, 1412.0], [99.0, 1413.0], [99.1, 1434.0], [99.2, 1456.0], [99.3, 1459.0], [99.4, 1463.0], [99.5, 1475.0], [99.6, 1492.0], [99.7, 1510.0], [99.8, 1515.0], [99.9, 1560.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 600.0, "maxY": 404.0, "series": [{"data": [[1100.0, 293.0], [600.0, 34.0], [1200.0, 111.0], [1300.0, 69.0], [700.0, 61.0], [1400.0, 12.0], [1500.0, 4.0], [800.0, 71.0], [900.0, 43.0], [1000.0, 404.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1098.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1098.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 61.243150684931514, "minX": 1.77999972E12, "maxY": 68.90246913580248, "series": [{"data": [[1.77999978E12, 68.90246913580248], [1.77999972E12, 61.243150684931514]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999978E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 645.0, "minX": 2.0, "maxY": 1140.3333333333333, "series": [{"data": [[2.0, 1034.0], [4.0, 1021.0], [5.0, 1078.0], [7.0, 1051.5], [9.0, 1044.0], [11.0, 1023.0], [13.0, 906.5], [14.0, 779.0], [15.0, 1073.5], [16.0, 870.0], [18.0, 969.25], [20.0, 992.3333333333334], [21.0, 764.0], [22.0, 924.8], [23.0, 694.75], [25.0, 1066.8], [26.0, 734.5], [27.0, 1028.25], [28.0, 906.3333333333334], [29.0, 1001.5], [30.0, 843.3333333333334], [32.0, 869.0], [33.0, 703.5], [34.0, 800.0], [35.0, 736.0], [36.0, 889.375], [37.0, 787.25], [38.0, 645.0], [39.0, 752.6666666666666], [40.0, 795.0], [41.0, 976.8333333333334], [42.0, 757.6666666666666], [45.0, 762.4], [44.0, 1140.3333333333333], [46.0, 648.0], [47.0, 887.25], [48.0, 1026.6], [50.0, 784.0], [51.0, 730.6666666666666], [52.0, 1061.2], [53.0, 940.5], [54.0, 1050.0], [56.0, 900.5714285714286], [57.0, 715.0], [58.0, 805.0], [59.0, 973.5], [60.0, 918.0], [61.0, 860.25], [62.0, 993.0], [63.0, 1059.0], [64.0, 929.6], [65.0, 862.5], [66.0, 844.0], [67.0, 964.0], [68.0, 855.0], [69.0, 774.0], [70.0, 978.3333333333334], [72.0, 1107.2967391304335]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[66.87295825771331, 1072.7704174228681]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 72.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 778.6666666666666, "minX": 1.77999972E12, "maxY": 3118.5, "series": [{"data": [[1.77999978E12, 3118.5], [1.77999972E12, 1124.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999978E12, 2160.0], [1.77999972E12, 778.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999978E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 908.9486301369864, "minX": 1.77999972E12, "maxY": 1131.827160493829, "series": [{"data": [[1.77999978E12, 1131.827160493829], [1.77999972E12, 908.9486301369864]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999978E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 908.8664383561646, "minX": 1.77999972E12, "maxY": 1131.8111111111104, "series": [{"data": [[1.77999978E12, 1131.8111111111104], [1.77999972E12, 908.8664383561646]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999978E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999972E12, "maxY": 0.2602739726027402, "series": [{"data": [[1.77999978E12, 0.0], [1.77999972E12, 0.2602739726027402]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999978E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 616.0, "minX": 1.77999972E12, "maxY": 1591.0, "series": [{"data": [[1.77999978E12, 1591.0], [1.77999972E12, 1560.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999978E12, 991.0], [1.77999972E12, 616.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999978E12, 1295.9], [1.77999972E12, 1179.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999978E12, 1402.34], [1.77999972E12, 1510.35]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999978E12, 1105.5], [1.77999972E12, 856.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999978E12, 1326.0], [1.77999972E12, 1273.2999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999978E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 762.0, "minX": 14.0, "maxY": 1210.5, "series": [{"data": [[33.0, 809.0], [14.0, 762.0], [15.0, 1044.0], [18.0, 1205.5], [19.0, 839.0], [20.0, 1029.0], [21.0, 1204.0], [22.0, 1193.0], [23.0, 1210.5], [24.0, 1088.0], [25.0, 1072.5], [26.0, 1111.0], [27.0, 1091.5], [29.0, 789.0], [30.0, 809.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 760.5, "minX": 14.0, "maxY": 1210.5, "series": [{"data": [[33.0, 809.0], [14.0, 760.5], [15.0, 1044.0], [18.0, 1205.5], [19.0, 839.0], [20.0, 1029.0], [21.0, 1204.0], [22.0, 1193.0], [23.0, 1210.5], [24.0, 1088.0], [25.0, 1072.5], [26.0, 1111.0], [27.0, 1091.5], [29.0, 788.0], [30.0, 809.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.35, "minX": 1.77999972E12, "maxY": 13.016666666666667, "series": [{"data": [[1.77999978E12, 13.016666666666667], [1.77999972E12, 5.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999978E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77999972E12, "maxY": 13.5, "series": [{"data": [[1.77999978E12, 13.5], [1.77999972E12, 4.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999978E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77999972E12, "maxY": 13.5, "series": [{"data": [[1.77999978E12, 13.5], [1.77999972E12, 4.866666666666666]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999978E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77999972E12, "maxY": 13.5, "series": [{"data": [[1.77999978E12, 13.5], [1.77999972E12, 4.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999978E12, "title": "Total Transactions Per Second"}},
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

