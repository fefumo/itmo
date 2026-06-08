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
        data: {"result": {"minY": 1011.0, "minX": 0.0, "maxY": 3788.0, "series": [{"data": [[0.0, 1011.0], [0.1, 1011.0], [0.2, 1013.0], [0.3, 1015.0], [0.4, 1015.0], [0.5, 1015.0], [0.6, 1017.0], [0.7, 1017.0], [0.8, 1019.0], [0.9, 1020.0], [1.0, 1020.0], [1.1, 1021.0], [1.2, 1021.0], [1.3, 1021.0], [1.4, 1021.0], [1.5, 1021.0], [1.6, 1021.0], [1.7, 1021.0], [1.8, 1023.0], [1.9, 1023.0], [2.0, 1024.0], [2.1, 1025.0], [2.2, 1025.0], [2.3, 1026.0], [2.4, 1026.0], [2.5, 1026.0], [2.6, 1026.0], [2.7, 1028.0], [2.8, 1028.0], [2.9, 1028.0], [3.0, 1028.0], [3.1, 1028.0], [3.2, 1029.0], [3.3, 1030.0], [3.4, 1030.0], [3.5, 1030.0], [3.6, 1030.0], [3.7, 1030.0], [3.8, 1030.0], [3.9, 1031.0], [4.0, 1031.0], [4.1, 1031.0], [4.2, 1031.0], [4.3, 1031.0], [4.4, 1031.0], [4.5, 1032.0], [4.6, 1032.0], [4.7, 1032.0], [4.8, 1032.0], [4.9, 1032.0], [5.0, 1032.0], [5.1, 1033.0], [5.2, 1033.0], [5.3, 1033.0], [5.4, 1034.0], [5.5, 1034.0], [5.6, 1034.0], [5.7, 1034.0], [5.8, 1034.0], [5.9, 1034.0], [6.0, 1034.0], [6.1, 1034.0], [6.2, 1034.0], [6.3, 1034.0], [6.4, 1034.0], [6.5, 1034.0], [6.6, 1035.0], [6.7, 1035.0], [6.8, 1036.0], [6.9, 1036.0], [7.0, 1036.0], [7.1, 1036.0], [7.2, 1036.0], [7.3, 1036.0], [7.4, 1036.0], [7.5, 1036.0], [7.6, 1036.0], [7.7, 1036.0], [7.8, 1036.0], [7.9, 1036.0], [8.0, 1037.0], [8.1, 1037.0], [8.2, 1037.0], [8.3, 1037.0], [8.4, 1038.0], [8.5, 1038.0], [8.6, 1038.0], [8.7, 1038.0], [8.8, 1038.0], [8.9, 1038.0], [9.0, 1038.0], [9.1, 1038.0], [9.2, 1038.0], [9.3, 1038.0], [9.4, 1038.0], [9.5, 1038.0], [9.6, 1038.0], [9.7, 1038.0], [9.8, 1038.0], [9.9, 1038.0], [10.0, 1038.0], [10.1, 1038.0], [10.2, 1039.0], [10.3, 1039.0], [10.4, 1039.0], [10.5, 1039.0], [10.6, 1039.0], [10.7, 1039.0], [10.8, 1039.0], [10.9, 1039.0], [11.0, 1039.0], [11.1, 1040.0], [11.2, 1040.0], [11.3, 1040.0], [11.4, 1040.0], [11.5, 1040.0], [11.6, 1040.0], [11.7, 1040.0], [11.8, 1040.0], [11.9, 1040.0], [12.0, 1040.0], [12.1, 1040.0], [12.2, 1040.0], [12.3, 1041.0], [12.4, 1041.0], [12.5, 1041.0], [12.6, 1042.0], [12.7, 1042.0], [12.8, 1042.0], [12.9, 1042.0], [13.0, 1042.0], [13.1, 1043.0], [13.2, 1043.0], [13.3, 1043.0], [13.4, 1043.0], [13.5, 1043.0], [13.6, 1043.0], [13.7, 1043.0], [13.8, 1044.0], [13.9, 1044.0], [14.0, 1044.0], [14.1, 1044.0], [14.2, 1044.0], [14.3, 1044.0], [14.4, 1044.0], [14.5, 1044.0], [14.6, 1044.0], [14.7, 1044.0], [14.8, 1044.0], [14.9, 1045.0], [15.0, 1045.0], [15.1, 1045.0], [15.2, 1045.0], [15.3, 1045.0], [15.4, 1045.0], [15.5, 1045.0], [15.6, 1045.0], [15.7, 1045.0], [15.8, 1047.0], [15.9, 1047.0], [16.0, 1047.0], [16.1, 1047.0], [16.2, 1048.0], [16.3, 1048.0], [16.4, 1048.0], [16.5, 1049.0], [16.6, 1049.0], [16.7, 1049.0], [16.8, 1050.0], [16.9, 1050.0], [17.0, 1050.0], [17.1, 1050.0], [17.2, 1050.0], [17.3, 1050.0], [17.4, 1051.0], [17.5, 1051.0], [17.6, 1052.0], [17.7, 1052.0], [17.8, 1052.0], [17.9, 1053.0], [18.0, 1053.0], [18.1, 1053.0], [18.2, 1055.0], [18.3, 1056.0], [18.4, 1056.0], [18.5, 1056.0], [18.6, 1057.0], [18.7, 1057.0], [18.8, 1057.0], [18.9, 1057.0], [19.0, 1057.0], [19.1, 1057.0], [19.2, 1057.0], [19.3, 1057.0], [19.4, 1058.0], [19.5, 1058.0], [19.6, 1058.0], [19.7, 1058.0], [19.8, 1059.0], [19.9, 1059.0], [20.0, 1059.0], [20.1, 1059.0], [20.2, 1059.0], [20.3, 1059.0], [20.4, 1059.0], [20.5, 1059.0], [20.6, 1059.0], [20.7, 1059.0], [20.8, 1059.0], [20.9, 1060.0], [21.0, 1060.0], [21.1, 1060.0], [21.2, 1061.0], [21.3, 1064.0], [21.4, 1064.0], [21.5, 1065.0], [21.6, 1065.0], [21.7, 1065.0], [21.8, 1066.0], [21.9, 1066.0], [22.0, 1066.0], [22.1, 1067.0], [22.2, 1067.0], [22.3, 1067.0], [22.4, 1067.0], [22.5, 1067.0], [22.6, 1067.0], [22.7, 1067.0], [22.8, 1068.0], [22.9, 1068.0], [23.0, 1069.0], [23.1, 1070.0], [23.2, 1070.0], [23.3, 1071.0], [23.4, 1075.0], [23.5, 1075.0], [23.6, 1076.0], [23.7, 1076.0], [23.8, 1076.0], [23.9, 1077.0], [24.0, 1080.0], [24.1, 1080.0], [24.2, 1080.0], [24.3, 1089.0], [24.4, 1089.0], [24.5, 1089.0], [24.6, 1092.0], [24.7, 1092.0], [24.8, 1092.0], [24.9, 1092.0], [25.0, 1092.0], [25.1, 1092.0], [25.2, 1094.0], [25.3, 1094.0], [25.4, 1097.0], [25.5, 1097.0], [25.6, 1097.0], [25.7, 1098.0], [25.8, 1099.0], [25.9, 1099.0], [26.0, 1099.0], [26.1, 1101.0], [26.2, 1101.0], [26.3, 1101.0], [26.4, 1102.0], [26.5, 1102.0], [26.6, 1102.0], [26.7, 1102.0], [26.8, 1102.0], [26.9, 1103.0], [27.0, 1103.0], [27.1, 1103.0], [27.2, 1103.0], [27.3, 1104.0], [27.4, 1104.0], [27.5, 1105.0], [27.6, 1105.0], [27.7, 1105.0], [27.8, 1105.0], [27.9, 1105.0], [28.0, 1105.0], [28.1, 1106.0], [28.2, 1106.0], [28.3, 1106.0], [28.4, 1108.0], [28.5, 1108.0], [28.6, 1108.0], [28.7, 1108.0], [28.8, 1108.0], [28.9, 1108.0], [29.0, 1108.0], [29.1, 1108.0], [29.2, 1108.0], [29.3, 1109.0], [29.4, 1109.0], [29.5, 1109.0], [29.6, 1110.0], [29.7, 1110.0], [29.8, 1110.0], [29.9, 1110.0], [30.0, 1110.0], [30.1, 1110.0], [30.2, 1111.0], [30.3, 1111.0], [30.4, 1111.0], [30.5, 1111.0], [30.6, 1111.0], [30.7, 1111.0], [30.8, 1112.0], [30.9, 1112.0], [31.0, 1112.0], [31.1, 1112.0], [31.2, 1112.0], [31.3, 1112.0], [31.4, 1112.0], [31.5, 1113.0], [31.6, 1113.0], [31.7, 1113.0], [31.8, 1113.0], [31.9, 1113.0], [32.0, 1113.0], [32.1, 1113.0], [32.2, 1113.0], [32.3, 1113.0], [32.4, 1113.0], [32.5, 1113.0], [32.6, 1114.0], [32.7, 1114.0], [32.8, 1114.0], [32.9, 1114.0], [33.0, 1115.0], [33.1, 1115.0], [33.2, 1115.0], [33.3, 1115.0], [33.4, 1115.0], [33.5, 1115.0], [33.6, 1115.0], [33.7, 1115.0], [33.8, 1116.0], [33.9, 1116.0], [34.0, 1116.0], [34.1, 1116.0], [34.2, 1116.0], [34.3, 1116.0], [34.4, 1117.0], [34.5, 1117.0], [34.6, 1117.0], [34.7, 1119.0], [34.8, 1119.0], [34.9, 1119.0], [35.0, 1119.0], [35.1, 1119.0], [35.2, 1119.0], [35.3, 1120.0], [35.4, 1121.0], [35.5, 1121.0], [35.6, 1121.0], [35.7, 1122.0], [35.8, 1122.0], [35.9, 1122.0], [36.0, 1123.0], [36.1, 1123.0], [36.2, 1123.0], [36.3, 1123.0], [36.4, 1123.0], [36.5, 1123.0], [36.6, 1123.0], [36.7, 1123.0], [36.8, 1123.0], [36.9, 1123.0], [37.0, 1123.0], [37.1, 1124.0], [37.2, 1125.0], [37.3, 1125.0], [37.4, 1125.0], [37.5, 1125.0], [37.6, 1125.0], [37.7, 1125.0], [37.8, 1125.0], [37.9, 1125.0], [38.0, 1125.0], [38.1, 1125.0], [38.2, 1125.0], [38.3, 1125.0], [38.4, 1125.0], [38.5, 1125.0], [38.6, 1126.0], [38.7, 1127.0], [38.8, 1127.0], [38.9, 1127.0], [39.0, 1128.0], [39.1, 1128.0], [39.2, 1128.0], [39.3, 1129.0], [39.4, 1129.0], [39.5, 1129.0], [39.6, 1129.0], [39.7, 1129.0], [39.8, 1129.0], [39.9, 1129.0], [40.0, 1129.0], [40.1, 1129.0], [40.2, 1129.0], [40.3, 1129.0], [40.4, 1129.0], [40.5, 1130.0], [40.6, 1130.0], [40.7, 1131.0], [40.8, 1131.0], [40.9, 1131.0], [41.0, 1132.0], [41.1, 1132.0], [41.2, 1132.0], [41.3, 1132.0], [41.4, 1132.0], [41.5, 1132.0], [41.6, 1132.0], [41.7, 1132.0], [41.8, 1132.0], [41.9, 1133.0], [42.0, 1133.0], [42.1, 1133.0], [42.2, 1133.0], [42.3, 1133.0], [42.4, 1133.0], [42.5, 1133.0], [42.6, 1133.0], [42.7, 1133.0], [42.8, 1134.0], [42.9, 1134.0], [43.0, 1134.0], [43.1, 1135.0], [43.2, 1136.0], [43.3, 1136.0], [43.4, 1136.0], [43.5, 1140.0], [43.6, 1140.0], [43.7, 1142.0], [43.8, 1142.0], [43.9, 1142.0], [44.0, 1143.0], [44.1, 1146.0], [44.2, 1146.0], [44.3, 1146.0], [44.4, 1146.0], [44.5, 1146.0], [44.6, 1147.0], [44.7, 1149.0], [44.8, 1149.0], [44.9, 1149.0], [45.0, 1149.0], [45.1, 1149.0], [45.2, 1149.0], [45.3, 1151.0], [45.4, 1151.0], [45.5, 1151.0], [45.6, 1151.0], [45.7, 1151.0], [45.8, 1151.0], [45.9, 1151.0], [46.0, 1151.0], [46.1, 1152.0], [46.2, 1152.0], [46.3, 1152.0], [46.4, 1155.0], [46.5, 1157.0], [46.6, 1157.0], [46.7, 1159.0], [46.8, 1159.0], [46.9, 1159.0], [47.0, 1159.0], [47.1, 1159.0], [47.2, 1159.0], [47.3, 1161.0], [47.4, 1163.0], [47.5, 1163.0], [47.6, 1166.0], [47.7, 1166.0], [47.8, 1166.0], [47.9, 1167.0], [48.0, 1168.0], [48.1, 1168.0], [48.2, 1168.0], [48.3, 1168.0], [48.4, 1168.0], [48.5, 1168.0], [48.6, 1170.0], [48.7, 1170.0], [48.8, 1170.0], [48.9, 1170.0], [49.0, 1170.0], [49.1, 1170.0], [49.2, 1171.0], [49.3, 1171.0], [49.4, 1173.0], [49.5, 1175.0], [49.6, 1175.0], [49.7, 1175.0], [49.8, 1177.0], [49.9, 1177.0], [50.0, 1177.0], [50.1, 1177.0], [50.2, 1177.0], [50.3, 1177.0], [50.4, 1179.0], [50.5, 1179.0], [50.6, 1181.0], [50.7, 1182.0], [50.8, 1182.0], [50.9, 1182.0], [51.0, 1184.0], [51.1, 1184.0], [51.2, 1186.0], [51.3, 1186.0], [51.4, 1186.0], [51.5, 1187.0], [51.6, 1187.0], [51.7, 1187.0], [51.8, 1187.0], [51.9, 1187.0], [52.0, 1187.0], [52.1, 1187.0], [52.2, 1187.0], [52.3, 1187.0], [52.4, 1188.0], [52.5, 1188.0], [52.6, 1188.0], [52.7, 1189.0], [52.8, 1189.0], [52.9, 1189.0], [53.0, 1189.0], [53.1, 1189.0], [53.2, 1189.0], [53.3, 1189.0], [53.4, 1189.0], [53.5, 1189.0], [53.6, 1189.0], [53.7, 1191.0], [53.8, 1191.0], [53.9, 1192.0], [54.0, 1192.0], [54.1, 1192.0], [54.2, 1193.0], [54.3, 1193.0], [54.4, 1193.0], [54.5, 1193.0], [54.6, 1193.0], [54.7, 1193.0], [54.8, 1193.0], [54.9, 1198.0], [55.0, 1198.0], [55.1, 1198.0], [55.2, 1199.0], [55.3, 1199.0], [55.4, 1201.0], [55.5, 1207.0], [55.6, 1207.0], [55.7, 1208.0], [55.8, 1209.0], [55.9, 1209.0], [56.0, 1211.0], [56.1, 1212.0], [56.2, 1212.0], [56.3, 1216.0], [56.4, 1216.0], [56.5, 1216.0], [56.6, 1217.0], [56.7, 1220.0], [56.8, 1220.0], [56.9, 1224.0], [57.0, 1228.0], [57.1, 1228.0], [57.2, 1233.0], [57.3, 1233.0], [57.4, 1233.0], [57.5, 1234.0], [57.6, 1236.0], [57.7, 1236.0], [57.8, 1239.0], [57.9, 1244.0], [58.0, 1244.0], [58.1, 1245.0], [58.2, 1245.0], [58.3, 1245.0], [58.4, 1256.0], [58.5, 1260.0], [58.6, 1260.0], [58.7, 1260.0], [58.8, 1261.0], [58.9, 1261.0], [59.0, 1261.0], [59.1, 1264.0], [59.2, 1264.0], [59.3, 1264.0], [59.4, 1264.0], [59.5, 1264.0], [59.6, 1266.0], [59.7, 1268.0], [59.8, 1268.0], [59.9, 1269.0], [60.0, 1270.0], [60.1, 1270.0], [60.2, 1272.0], [60.3, 1272.0], [60.4, 1272.0], [60.5, 1273.0], [60.6, 1273.0], [60.7, 1273.0], [60.8, 1273.0], [60.9, 1273.0], [61.0, 1273.0], [61.1, 1273.0], [61.2, 1274.0], [61.3, 1274.0], [61.4, 1275.0], [61.5, 1275.0], [61.6, 1275.0], [61.7, 1275.0], [61.8, 1278.0], [61.9, 1278.0], [62.0, 1281.0], [62.1, 1281.0], [62.2, 1281.0], [62.3, 1282.0], [62.4, 1283.0], [62.5, 1283.0], [62.6, 1283.0], [62.7, 1283.0], [62.8, 1283.0], [62.9, 1283.0], [63.0, 1286.0], [63.1, 1286.0], [63.2, 1287.0], [63.3, 1293.0], [63.4, 1293.0], [63.5, 1297.0], [63.6, 1301.0], [63.7, 1301.0], [63.8, 1302.0], [63.9, 1307.0], [64.0, 1307.0], [64.1, 1315.0], [64.2, 1315.0], [64.3, 1315.0], [64.4, 1315.0], [64.5, 1315.0], [64.6, 1315.0], [64.7, 1316.0], [64.8, 1324.0], [64.9, 1324.0], [65.0, 1326.0], [65.1, 1328.0], [65.2, 1328.0], [65.3, 1333.0], [65.4, 1333.0], [65.5, 1333.0], [65.6, 1333.0], [65.7, 1333.0], [65.8, 1333.0], [65.9, 1340.0], [66.0, 1341.0], [66.1, 1341.0], [66.2, 1342.0], [66.3, 1343.0], [66.4, 1343.0], [66.5, 1346.0], [66.6, 1348.0], [66.7, 1348.0], [66.8, 1348.0], [66.9, 1348.0], [67.0, 1348.0], [67.1, 1348.0], [67.2, 1351.0], [67.3, 1351.0], [67.4, 1352.0], [67.5, 1352.0], [67.6, 1352.0], [67.7, 1352.0], [67.8, 1352.0], [67.9, 1352.0], [68.0, 1357.0], [68.1, 1357.0], [68.2, 1357.0], [68.3, 1357.0], [68.4, 1358.0], [68.5, 1358.0], [68.6, 1358.0], [68.7, 1358.0], [68.8, 1358.0], [68.9, 1361.0], [69.0, 1361.0], [69.1, 1361.0], [69.2, 1361.0], [69.3, 1362.0], [69.4, 1362.0], [69.5, 1362.0], [69.6, 1362.0], [69.7, 1362.0], [69.8, 1362.0], [69.9, 1362.0], [70.0, 1362.0], [70.1, 1362.0], [70.2, 1362.0], [70.3, 1362.0], [70.4, 1362.0], [70.5, 1362.0], [70.6, 1362.0], [70.7, 1364.0], [70.8, 1364.0], [70.9, 1364.0], [71.0, 1364.0], [71.1, 1365.0], [71.2, 1365.0], [71.3, 1365.0], [71.4, 1365.0], [71.5, 1365.0], [71.6, 1365.0], [71.7, 1365.0], [71.8, 1365.0], [71.9, 1365.0], [72.0, 1367.0], [72.1, 1367.0], [72.2, 1369.0], [72.3, 1369.0], [72.4, 1369.0], [72.5, 1369.0], [72.6, 1369.0], [72.7, 1369.0], [72.8, 1369.0], [72.9, 1369.0], [73.0, 1369.0], [73.1, 1369.0], [73.2, 1369.0], [73.3, 1369.0], [73.4, 1369.0], [73.5, 1370.0], [73.6, 1370.0], [73.7, 1370.0], [73.8, 1370.0], [73.9, 1370.0], [74.0, 1378.0], [74.1, 1380.0], [74.2, 1380.0], [74.3, 1385.0], [74.4, 1386.0], [74.5, 1386.0], [74.6, 1389.0], [74.7, 1396.0], [74.8, 1396.0], [74.9, 1399.0], [75.0, 1402.0], [75.1, 1402.0], [75.2, 1402.0], [75.3, 1402.0], [75.4, 1402.0], [75.5, 1402.0], [75.6, 1408.0], [75.7, 1408.0], [75.8, 1415.0], [75.9, 1417.0], [76.0, 1417.0], [76.1, 1418.0], [76.2, 1418.0], [76.3, 1418.0], [76.4, 1420.0], [76.5, 1422.0], [76.6, 1422.0], [76.7, 1434.0], [76.8, 1434.0], [76.9, 1434.0], [77.0, 1434.0], [77.1, 1434.0], [77.2, 1434.0], [77.3, 1434.0], [77.4, 1434.0], [77.5, 1434.0], [77.6, 1434.0], [77.7, 1434.0], [77.8, 1434.0], [77.9, 1434.0], [78.0, 1445.0], [78.1, 1445.0], [78.2, 1446.0], [78.3, 1446.0], [78.4, 1446.0], [78.5, 1447.0], [78.6, 1449.0], [78.7, 1449.0], [78.8, 1451.0], [78.9, 1453.0], [79.0, 1453.0], [79.1, 1468.0], [79.2, 1469.0], [79.3, 1469.0], [79.4, 1471.0], [79.5, 1474.0], [79.6, 1474.0], [79.7, 1477.0], [79.8, 1482.0], [79.9, 1482.0], [80.0, 1485.0], [80.1, 1487.0], [80.2, 1487.0], [80.3, 1491.0], [80.4, 1491.0], [80.5, 1491.0], [80.6, 1491.0], [80.7, 1497.0], [80.8, 1497.0], [80.9, 1501.0], [81.0, 1501.0], [81.1, 1501.0], [81.2, 1502.0], [81.3, 1505.0], [81.4, 1505.0], [81.5, 1513.0], [81.6, 1513.0], [81.7, 1513.0], [81.8, 1515.0], [81.9, 1519.0], [82.0, 1519.0], [82.1, 1520.0], [82.2, 1520.0], [82.3, 1520.0], [82.4, 1522.0], [82.5, 1523.0], [82.6, 1523.0], [82.7, 1523.0], [82.8, 1523.0], [82.9, 1523.0], [83.0, 1527.0], [83.1, 1528.0], [83.2, 1528.0], [83.3, 1529.0], [83.4, 1530.0], [83.5, 1530.0], [83.6, 1530.0], [83.7, 1530.0], [83.8, 1530.0], [83.9, 1530.0], [84.0, 1532.0], [84.1, 1532.0], [84.2, 1534.0], [84.3, 1536.0], [84.4, 1536.0], [84.5, 1537.0], [84.6, 1539.0], [84.7, 1539.0], [84.8, 1541.0], [84.9, 1542.0], [85.0, 1542.0], [85.1, 1543.0], [85.2, 1543.0], [85.3, 1543.0], [85.4, 1543.0], [85.5, 1544.0], [85.6, 1544.0], [85.7, 1551.0], [85.8, 1554.0], [85.9, 1554.0], [86.0, 1558.0], [86.1, 1560.0], [86.2, 1560.0], [86.3, 1565.0], [86.4, 1574.0], [86.5, 1574.0], [86.6, 1576.0], [86.7, 1581.0], [86.8, 1581.0], [86.9, 1586.0], [87.0, 1586.0], [87.1, 1586.0], [87.2, 1587.0], [87.3, 1587.0], [87.4, 1587.0], [87.5, 1587.0], [87.6, 1588.0], [87.7, 1588.0], [87.8, 1588.0], [87.9, 1603.0], [88.0, 1603.0], [88.1, 1603.0], [88.2, 1606.0], [88.3, 1606.0], [88.4, 1622.0], [88.5, 1634.0], [88.6, 1634.0], [88.7, 1635.0], [88.8, 1640.0], [88.9, 1640.0], [89.0, 1648.0], [89.1, 1651.0], [89.2, 1651.0], [89.3, 1658.0], [89.4, 1658.0], [89.5, 1658.0], [89.6, 1665.0], [89.7, 1667.0], [89.8, 1667.0], [89.9, 1669.0], [90.0, 1673.0], [90.1, 1673.0], [90.2, 1674.0], [90.3, 1680.0], [90.4, 1680.0], [90.5, 1685.0], [90.6, 1686.0], [90.7, 1686.0], [90.8, 1686.0], [90.9, 1688.0], [91.0, 1688.0], [91.1, 1688.0], [91.2, 1689.0], [91.3, 1689.0], [91.4, 1691.0], [91.5, 1697.0], [91.6, 1697.0], [91.7, 1718.0], [91.8, 1723.0], [91.9, 1723.0], [92.0, 1742.0], [92.1, 1755.0], [92.2, 1755.0], [92.3, 1757.0], [92.4, 1770.0], [92.5, 1770.0], [92.6, 1799.0], [92.7, 1806.0], [92.8, 1806.0], [92.9, 1818.0], [93.0, 1818.0], [93.1, 1818.0], [93.2, 1822.0], [93.3, 1832.0], [93.4, 1832.0], [93.5, 1835.0], [93.6, 1855.0], [93.7, 1855.0], [93.8, 1855.0], [93.9, 1855.0], [94.0, 1855.0], [94.1, 1855.0], [94.2, 1880.0], [94.3, 1880.0], [94.4, 1881.0], [94.5, 1881.0], [94.6, 1881.0], [94.7, 1887.0], [94.8, 1888.0], [94.9, 1888.0], [95.0, 1888.0], [95.1, 1918.0], [95.2, 1918.0], [95.3, 1918.0], [95.4, 1922.0], [95.5, 1922.0], [95.6, 1943.0], [95.7, 2005.0], [95.8, 2005.0], [95.9, 2012.0], [96.0, 2048.0], [96.1, 2048.0], [96.2, 2048.0], [96.3, 2048.0], [96.4, 2048.0], [96.5, 2048.0], [96.6, 2066.0], [96.7, 2066.0], [96.8, 2131.0], [96.9, 2229.0], [97.0, 2229.0], [97.1, 2232.0], [97.2, 2328.0], [97.3, 2328.0], [97.4, 2575.0], [97.5, 2585.0], [97.6, 2585.0], [97.7, 2588.0], [97.8, 2603.0], [97.9, 2603.0], [98.0, 2685.0], [98.1, 2685.0], [98.2, 2685.0], [98.3, 2720.0], [98.4, 2891.0], [98.5, 2891.0], [98.6, 2891.0], [98.7, 2891.0], [98.8, 2891.0], [98.9, 2891.0], [99.0, 2891.0], [99.1, 2891.0], [99.2, 3413.0], [99.3, 3418.0], [99.4, 3418.0], [99.5, 3434.0], [99.6, 3480.0], [99.7, 3480.0], [99.8, 3691.0], [99.9, 3788.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 195.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 3.0], [2600.0, 3.0], [2800.0, 5.0], [2700.0, 1.0], [3400.0, 4.0], [3600.0, 1.0], [3700.0, 1.0], [1000.0, 174.0], [1100.0, 195.0], [1200.0, 55.0], [1300.0, 76.0], [1400.0, 39.0], [1500.0, 47.0], [1600.0, 25.0], [1700.0, 7.0], [1800.0, 16.0], [1900.0, 4.0], [2000.0, 7.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 128.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 539.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 539.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 128.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.3777777777777773, "minX": 1.77999246E12, "maxY": 12.0, "series": [{"data": [[1.77999252E12, 10.287610619469024], [1.77999264E12, 11.635220125786162], [1.77999246E12, 3.3777777777777773], [1.77999258E12, 12.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999264E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1101.1666666666667, "minX": 1.0, "maxY": 2347.2307692307695, "series": [{"data": [[1.0, 1194.5], [2.0, 1235.111111111111], [4.0, 1412.5384615384617], [8.0, 1186.1764705882356], [9.0, 1118.1851851851852], [5.0, 1725.857142857143], [10.0, 1182.6500000000003], [11.0, 1142.7647058823532], [3.0, 1101.1666666666667], [6.0, 2347.2307692307695], [12.0, 1273.992000000001], [7.0, 1962.4285714285713]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[10.751124437781106, 1310.0299850074969]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 120.0, "minX": 1.77999246E12, "maxY": 912.45, "series": [{"data": [[1.77999252E12, 870.1], [1.77999264E12, 612.15], [1.77999246E12, 173.25], [1.77999258E12, 912.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999252E12, 602.6666666666666], [1.77999264E12, 424.0], [1.77999246E12, 120.0], [1.77999258E12, 632.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999264E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1206.490566037736, "minX": 1.77999246E12, "maxY": 1363.977876106195, "series": [{"data": [[1.77999252E12, 1363.977876106195], [1.77999264E12, 1206.490566037736], [1.77999246E12, 1327.422222222222], [1.77999258E12, 1324.7468354430378]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999264E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1206.4528301886794, "minX": 1.77999246E12, "maxY": 1363.8495575221234, "series": [{"data": [[1.77999252E12, 1363.8495575221234], [1.77999264E12, 1206.4528301886794], [1.77999246E12, 1327.1777777777777], [1.77999258E12, 1324.7046413502112]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999264E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04641350210970466, "minX": 1.77999246E12, "maxY": 0.7999999999999999, "series": [{"data": [[1.77999252E12, 0.07079646017699116], [1.77999264E12, 0.050314465408805034], [1.77999246E12, 0.7999999999999999], [1.77999258E12, 0.04641350210970466]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999264E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1011.0, "minX": 1.77999246E12, "maxY": 3788.0, "series": [{"data": [[1.77999252E12, 3788.0], [1.77999264E12, 2685.0], [1.77999246E12, 2012.0], [1.77999258E12, 2720.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999252E12, 1021.0], [1.77999264E12, 1024.0], [1.77999246E12, 1011.0], [1.77999258E12, 1028.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999252E12, 1928.3000000000002], [1.77999264E12, 1446.0], [1.77999246E12, 1780.1999999999998], [1.77999258E12, 1685.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999252E12, 3634.029999999998], [1.77999264E12, 2685.0], [1.77999246E12, 2012.0], [1.77999258E12, 2449.7200000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999252E12, 1187.5], [1.77999264E12, 1123.0], [1.77999246E12, 1236.0], [1.77999258E12, 1233.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999252E12, 2784.949999999993], [1.77999264E12, 1587.0], [1.77999246E12, 1820.8], [1.77999258E12, 1857.4999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999264E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1136.0, "minX": 1.0, "maxY": 1855.0, "series": [{"data": [[1.0, 1217.0], [2.0, 1312.0], [4.0, 1420.0], [8.0, 1429.5], [5.0, 1167.0], [3.0, 1356.5], [6.0, 1855.0], [7.0, 1136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1136.0, "minX": 1.0, "maxY": 1855.0, "series": [{"data": [[1.0, 1212.0], [2.0, 1312.0], [4.0, 1419.5], [8.0, 1429.5], [5.0, 1166.0], [3.0, 1356.5], [6.0, 1855.0], [7.0, 1136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.77999246E12, "maxY": 4.0, "series": [{"data": [[1.77999252E12, 3.7666666666666666], [1.77999264E12, 2.5166666666666666], [1.77999246E12, 0.8333333333333334], [1.77999258E12, 4.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999264E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.77999246E12, "maxY": 3.95, "series": [{"data": [[1.77999252E12, 3.7666666666666666], [1.77999264E12, 2.65], [1.77999246E12, 0.75], [1.77999258E12, 3.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999264E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.77999246E12, "maxY": 3.95, "series": [{"data": [[1.77999252E12, 3.7666666666666666], [1.77999264E12, 2.65], [1.77999246E12, 0.75], [1.77999258E12, 3.95]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999264E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.77999246E12, "maxY": 3.95, "series": [{"data": [[1.77999252E12, 3.7666666666666666], [1.77999264E12, 2.65], [1.77999246E12, 0.75], [1.77999258E12, 3.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999264E12, "title": "Total Transactions Per Second"}},
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

