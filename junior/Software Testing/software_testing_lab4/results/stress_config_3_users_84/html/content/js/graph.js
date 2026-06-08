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
        data: {"result": {"minY": 768.0, "minX": 0.0, "maxY": 2297.0, "series": [{"data": [[0.0, 768.0], [0.1, 773.0], [0.2, 773.0], [0.3, 775.0], [0.4, 785.0], [0.5, 787.0], [0.6, 796.0], [0.7, 796.0], [0.8, 798.0], [0.9, 799.0], [1.0, 799.0], [1.1, 806.0], [1.2, 807.0], [1.3, 807.0], [1.4, 810.0], [1.5, 815.0], [1.6, 826.0], [1.7, 826.0], [1.8, 833.0], [1.9, 858.0], [2.0, 860.0], [2.1, 860.0], [2.2, 862.0], [2.3, 862.0], [2.4, 864.0], [2.5, 866.0], [2.6, 873.0], [2.7, 874.0], [2.8, 874.0], [2.9, 877.0], [3.0, 880.0], [3.1, 883.0], [3.2, 883.0], [3.3, 887.0], [3.4, 889.0], [3.5, 889.0], [3.6, 890.0], [3.7, 894.0], [3.8, 897.0], [3.9, 899.0], [4.0, 899.0], [4.1, 899.0], [4.2, 899.0], [4.3, 902.0], [4.4, 907.0], [4.5, 913.0], [4.6, 914.0], [4.7, 916.0], [4.8, 916.0], [4.9, 917.0], [5.0, 918.0], [5.1, 920.0], [5.2, 920.0], [5.3, 922.0], [5.4, 925.0], [5.5, 926.0], [5.6, 926.0], [5.7, 931.0], [5.8, 931.0], [5.9, 932.0], [6.0, 932.0], [6.1, 932.0], [6.2, 933.0], [6.3, 934.0], [6.4, 934.0], [6.5, 934.0], [6.6, 936.0], [6.7, 938.0], [6.8, 940.0], [6.9, 940.0], [7.0, 942.0], [7.1, 944.0], [7.2, 949.0], [7.3, 950.0], [7.4, 951.0], [7.5, 952.0], [7.6, 954.0], [7.7, 954.0], [7.8, 954.0], [7.9, 955.0], [8.0, 958.0], [8.1, 963.0], [8.2, 963.0], [8.3, 963.0], [8.4, 969.0], [8.5, 971.0], [8.6, 972.0], [8.7, 975.0], [8.8, 976.0], [8.9, 979.0], [9.0, 982.0], [9.1, 985.0], [9.2, 985.0], [9.3, 987.0], [9.4, 992.0], [9.5, 994.0], [9.6, 996.0], [9.7, 1002.0], [9.8, 1004.0], [9.9, 1007.0], [10.0, 1008.0], [10.1, 1011.0], [10.2, 1017.0], [10.3, 1019.0], [10.4, 1019.0], [10.5, 1029.0], [10.6, 1030.0], [10.7, 1031.0], [10.8, 1032.0], [10.9, 1035.0], [11.0, 1041.0], [11.1, 1041.0], [11.2, 1047.0], [11.3, 1050.0], [11.4, 1057.0], [11.5, 1059.0], [11.6, 1063.0], [11.7, 1069.0], [11.8, 1069.0], [11.9, 1070.0], [12.0, 1072.0], [12.1, 1072.0], [12.2, 1077.0], [12.3, 1077.0], [12.4, 1078.0], [12.5, 1079.0], [12.6, 1081.0], [12.7, 1082.0], [12.8, 1085.0], [12.9, 1086.0], [13.0, 1091.0], [13.1, 1096.0], [13.2, 1098.0], [13.3, 1106.0], [13.4, 1106.0], [13.5, 1109.0], [13.6, 1109.0], [13.7, 1113.0], [13.8, 1113.0], [13.9, 1115.0], [14.0, 1119.0], [14.1, 1123.0], [14.2, 1124.0], [14.3, 1124.0], [14.4, 1124.0], [14.5, 1125.0], [14.6, 1127.0], [14.7, 1128.0], [14.8, 1128.0], [14.9, 1129.0], [15.0, 1132.0], [15.1, 1133.0], [15.2, 1134.0], [15.3, 1135.0], [15.4, 1135.0], [15.5, 1140.0], [15.6, 1140.0], [15.7, 1144.0], [15.8, 1145.0], [15.9, 1145.0], [16.0, 1146.0], [16.1, 1147.0], [16.2, 1148.0], [16.3, 1148.0], [16.4, 1150.0], [16.5, 1151.0], [16.6, 1155.0], [16.7, 1155.0], [16.8, 1156.0], [16.9, 1156.0], [17.0, 1157.0], [17.1, 1158.0], [17.2, 1158.0], [17.3, 1160.0], [17.4, 1162.0], [17.5, 1162.0], [17.6, 1163.0], [17.7, 1164.0], [17.8, 1165.0], [17.9, 1166.0], [18.0, 1167.0], [18.1, 1168.0], [18.2, 1172.0], [18.3, 1172.0], [18.4, 1172.0], [18.5, 1172.0], [18.6, 1173.0], [18.7, 1174.0], [18.8, 1174.0], [18.9, 1174.0], [19.0, 1175.0], [19.1, 1176.0], [19.2, 1177.0], [19.3, 1178.0], [19.4, 1178.0], [19.5, 1179.0], [19.6, 1180.0], [19.7, 1182.0], [19.8, 1182.0], [19.9, 1184.0], [20.0, 1185.0], [20.1, 1188.0], [20.2, 1188.0], [20.3, 1190.0], [20.4, 1192.0], [20.5, 1192.0], [20.6, 1192.0], [20.7, 1193.0], [20.8, 1196.0], [20.9, 1196.0], [21.0, 1197.0], [21.1, 1198.0], [21.2, 1199.0], [21.3, 1200.0], [21.4, 1201.0], [21.5, 1204.0], [21.6, 1205.0], [21.7, 1205.0], [21.8, 1207.0], [21.9, 1208.0], [22.0, 1209.0], [22.1, 1211.0], [22.2, 1213.0], [22.3, 1214.0], [22.4, 1214.0], [22.5, 1214.0], [22.6, 1215.0], [22.7, 1216.0], [22.8, 1216.0], [22.9, 1216.0], [23.0, 1217.0], [23.1, 1218.0], [23.2, 1218.0], [23.3, 1219.0], [23.4, 1219.0], [23.5, 1222.0], [23.6, 1222.0], [23.7, 1224.0], [23.8, 1226.0], [23.9, 1226.0], [24.0, 1227.0], [24.1, 1227.0], [24.2, 1227.0], [24.3, 1227.0], [24.4, 1231.0], [24.5, 1231.0], [24.6, 1232.0], [24.7, 1232.0], [24.8, 1232.0], [24.9, 1233.0], [25.0, 1234.0], [25.1, 1238.0], [25.2, 1238.0], [25.3, 1239.0], [25.4, 1245.0], [25.5, 1246.0], [25.6, 1248.0], [25.7, 1248.0], [25.8, 1252.0], [25.9, 1253.0], [26.0, 1254.0], [26.1, 1255.0], [26.2, 1255.0], [26.3, 1256.0], [26.4, 1256.0], [26.5, 1257.0], [26.6, 1259.0], [26.7, 1259.0], [26.8, 1261.0], [26.9, 1262.0], [27.0, 1263.0], [27.1, 1264.0], [27.2, 1266.0], [27.3, 1267.0], [27.4, 1268.0], [27.5, 1268.0], [27.6, 1269.0], [27.7, 1271.0], [27.8, 1274.0], [27.9, 1275.0], [28.0, 1275.0], [28.1, 1276.0], [28.2, 1277.0], [28.3, 1277.0], [28.4, 1278.0], [28.5, 1278.0], [28.6, 1279.0], [28.7, 1279.0], [28.8, 1281.0], [28.9, 1282.0], [29.0, 1282.0], [29.1, 1285.0], [29.2, 1285.0], [29.3, 1285.0], [29.4, 1285.0], [29.5, 1285.0], [29.6, 1286.0], [29.7, 1286.0], [29.8, 1287.0], [29.9, 1287.0], [30.0, 1289.0], [30.1, 1289.0], [30.2, 1290.0], [30.3, 1290.0], [30.4, 1290.0], [30.5, 1292.0], [30.6, 1293.0], [30.7, 1294.0], [30.8, 1294.0], [30.9, 1295.0], [31.0, 1295.0], [31.1, 1295.0], [31.2, 1296.0], [31.3, 1296.0], [31.4, 1297.0], [31.5, 1298.0], [31.6, 1298.0], [31.7, 1299.0], [31.8, 1299.0], [31.9, 1303.0], [32.0, 1303.0], [32.1, 1306.0], [32.2, 1308.0], [32.3, 1308.0], [32.4, 1309.0], [32.5, 1310.0], [32.6, 1310.0], [32.7, 1310.0], [32.8, 1311.0], [32.9, 1311.0], [33.0, 1311.0], [33.1, 1312.0], [33.2, 1312.0], [33.3, 1312.0], [33.4, 1313.0], [33.5, 1314.0], [33.6, 1314.0], [33.7, 1314.0], [33.8, 1315.0], [33.9, 1316.0], [34.0, 1316.0], [34.1, 1317.0], [34.2, 1318.0], [34.3, 1319.0], [34.4, 1320.0], [34.5, 1320.0], [34.6, 1321.0], [34.7, 1322.0], [34.8, 1322.0], [34.9, 1323.0], [35.0, 1323.0], [35.1, 1323.0], [35.2, 1324.0], [35.3, 1325.0], [35.4, 1325.0], [35.5, 1326.0], [35.6, 1326.0], [35.7, 1327.0], [35.8, 1327.0], [35.9, 1327.0], [36.0, 1327.0], [36.1, 1328.0], [36.2, 1328.0], [36.3, 1329.0], [36.4, 1332.0], [36.5, 1332.0], [36.6, 1332.0], [36.7, 1333.0], [36.8, 1334.0], [36.9, 1335.0], [37.0, 1335.0], [37.1, 1336.0], [37.2, 1336.0], [37.3, 1337.0], [37.4, 1338.0], [37.5, 1339.0], [37.6, 1340.0], [37.7, 1340.0], [37.8, 1340.0], [37.9, 1340.0], [38.0, 1340.0], [38.1, 1340.0], [38.2, 1341.0], [38.3, 1341.0], [38.4, 1342.0], [38.5, 1342.0], [38.6, 1343.0], [38.7, 1343.0], [38.8, 1343.0], [38.9, 1343.0], [39.0, 1344.0], [39.1, 1344.0], [39.2, 1345.0], [39.3, 1346.0], [39.4, 1347.0], [39.5, 1347.0], [39.6, 1348.0], [39.7, 1350.0], [39.8, 1351.0], [39.9, 1353.0], [40.0, 1354.0], [40.1, 1356.0], [40.2, 1356.0], [40.3, 1356.0], [40.4, 1360.0], [40.5, 1360.0], [40.6, 1361.0], [40.7, 1361.0], [40.8, 1362.0], [40.9, 1362.0], [41.0, 1362.0], [41.1, 1363.0], [41.2, 1363.0], [41.3, 1363.0], [41.4, 1364.0], [41.5, 1365.0], [41.6, 1365.0], [41.7, 1367.0], [41.8, 1367.0], [41.9, 1367.0], [42.0, 1367.0], [42.1, 1367.0], [42.2, 1368.0], [42.3, 1368.0], [42.4, 1368.0], [42.5, 1369.0], [42.6, 1369.0], [42.7, 1369.0], [42.8, 1370.0], [42.9, 1371.0], [43.0, 1371.0], [43.1, 1371.0], [43.2, 1371.0], [43.3, 1372.0], [43.4, 1372.0], [43.5, 1372.0], [43.6, 1373.0], [43.7, 1373.0], [43.8, 1374.0], [43.9, 1374.0], [44.0, 1374.0], [44.1, 1374.0], [44.2, 1375.0], [44.3, 1375.0], [44.4, 1377.0], [44.5, 1378.0], [44.6, 1378.0], [44.7, 1379.0], [44.8, 1380.0], [44.9, 1380.0], [45.0, 1380.0], [45.1, 1381.0], [45.2, 1382.0], [45.3, 1383.0], [45.4, 1383.0], [45.5, 1384.0], [45.6, 1384.0], [45.7, 1384.0], [45.8, 1385.0], [45.9, 1386.0], [46.0, 1386.0], [46.1, 1387.0], [46.2, 1389.0], [46.3, 1390.0], [46.4, 1391.0], [46.5, 1392.0], [46.6, 1394.0], [46.7, 1395.0], [46.8, 1395.0], [46.9, 1395.0], [47.0, 1397.0], [47.1, 1397.0], [47.2, 1398.0], [47.3, 1400.0], [47.4, 1401.0], [47.5, 1401.0], [47.6, 1402.0], [47.7, 1404.0], [47.8, 1405.0], [47.9, 1405.0], [48.0, 1407.0], [48.1, 1407.0], [48.2, 1407.0], [48.3, 1409.0], [48.4, 1410.0], [48.5, 1410.0], [48.6, 1411.0], [48.7, 1412.0], [48.8, 1412.0], [48.9, 1414.0], [49.0, 1414.0], [49.1, 1415.0], [49.2, 1415.0], [49.3, 1415.0], [49.4, 1416.0], [49.5, 1417.0], [49.6, 1419.0], [49.7, 1420.0], [49.8, 1420.0], [49.9, 1420.0], [50.0, 1420.0], [50.1, 1420.0], [50.2, 1421.0], [50.3, 1421.0], [50.4, 1421.0], [50.5, 1422.0], [50.6, 1423.0], [50.7, 1423.0], [50.8, 1423.0], [50.9, 1425.0], [51.0, 1427.0], [51.1, 1427.0], [51.2, 1427.0], [51.3, 1428.0], [51.4, 1428.0], [51.5, 1429.0], [51.6, 1429.0], [51.7, 1429.0], [51.8, 1430.0], [51.9, 1431.0], [52.0, 1432.0], [52.1, 1432.0], [52.2, 1432.0], [52.3, 1432.0], [52.4, 1433.0], [52.5, 1433.0], [52.6, 1433.0], [52.7, 1433.0], [52.8, 1433.0], [52.9, 1434.0], [53.0, 1434.0], [53.1, 1434.0], [53.2, 1435.0], [53.3, 1435.0], [53.4, 1435.0], [53.5, 1436.0], [53.6, 1437.0], [53.7, 1437.0], [53.8, 1437.0], [53.9, 1438.0], [54.0, 1439.0], [54.1, 1439.0], [54.2, 1439.0], [54.3, 1439.0], [54.4, 1439.0], [54.5, 1440.0], [54.6, 1441.0], [54.7, 1442.0], [54.8, 1442.0], [54.9, 1443.0], [55.0, 1444.0], [55.1, 1445.0], [55.2, 1445.0], [55.3, 1446.0], [55.4, 1446.0], [55.5, 1447.0], [55.6, 1448.0], [55.7, 1448.0], [55.8, 1448.0], [55.9, 1449.0], [56.0, 1449.0], [56.1, 1449.0], [56.2, 1449.0], [56.3, 1449.0], [56.4, 1452.0], [56.5, 1452.0], [56.6, 1452.0], [56.7, 1453.0], [56.8, 1453.0], [56.9, 1453.0], [57.0, 1453.0], [57.1, 1455.0], [57.2, 1455.0], [57.3, 1455.0], [57.4, 1455.0], [57.5, 1457.0], [57.6, 1460.0], [57.7, 1460.0], [57.8, 1460.0], [57.9, 1461.0], [58.0, 1461.0], [58.1, 1462.0], [58.2, 1462.0], [58.3, 1463.0], [58.4, 1464.0], [58.5, 1464.0], [58.6, 1465.0], [58.7, 1465.0], [58.8, 1466.0], [58.9, 1466.0], [59.0, 1466.0], [59.1, 1466.0], [59.2, 1469.0], [59.3, 1470.0], [59.4, 1470.0], [59.5, 1471.0], [59.6, 1472.0], [59.7, 1474.0], [59.8, 1474.0], [59.9, 1476.0], [60.0, 1480.0], [60.1, 1481.0], [60.2, 1482.0], [60.3, 1483.0], [60.4, 1484.0], [60.5, 1485.0], [60.6, 1485.0], [60.7, 1485.0], [60.8, 1486.0], [60.9, 1488.0], [61.0, 1488.0], [61.1, 1491.0], [61.2, 1491.0], [61.3, 1491.0], [61.4, 1492.0], [61.5, 1492.0], [61.6, 1493.0], [61.7, 1494.0], [61.8, 1494.0], [61.9, 1495.0], [62.0, 1497.0], [62.1, 1497.0], [62.2, 1499.0], [62.3, 1499.0], [62.4, 1499.0], [62.5, 1499.0], [62.6, 1502.0], [62.7, 1502.0], [62.8, 1503.0], [62.9, 1503.0], [63.0, 1503.0], [63.1, 1504.0], [63.2, 1504.0], [63.3, 1506.0], [63.4, 1506.0], [63.5, 1506.0], [63.6, 1507.0], [63.7, 1508.0], [63.8, 1508.0], [63.9, 1509.0], [64.0, 1509.0], [64.1, 1509.0], [64.2, 1509.0], [64.3, 1510.0], [64.4, 1511.0], [64.5, 1511.0], [64.6, 1512.0], [64.7, 1513.0], [64.8, 1514.0], [64.9, 1516.0], [65.0, 1516.0], [65.1, 1518.0], [65.2, 1518.0], [65.3, 1518.0], [65.4, 1518.0], [65.5, 1519.0], [65.6, 1520.0], [65.7, 1520.0], [65.8, 1522.0], [65.9, 1522.0], [66.0, 1522.0], [66.1, 1523.0], [66.2, 1524.0], [66.3, 1524.0], [66.4, 1525.0], [66.5, 1526.0], [66.6, 1526.0], [66.7, 1527.0], [66.8, 1527.0], [66.9, 1527.0], [67.0, 1528.0], [67.1, 1529.0], [67.2, 1529.0], [67.3, 1530.0], [67.4, 1531.0], [67.5, 1531.0], [67.6, 1531.0], [67.7, 1533.0], [67.8, 1536.0], [67.9, 1536.0], [68.0, 1539.0], [68.1, 1539.0], [68.2, 1539.0], [68.3, 1540.0], [68.4, 1541.0], [68.5, 1541.0], [68.6, 1541.0], [68.7, 1541.0], [68.8, 1542.0], [68.9, 1542.0], [69.0, 1545.0], [69.1, 1545.0], [69.2, 1546.0], [69.3, 1546.0], [69.4, 1548.0], [69.5, 1549.0], [69.6, 1550.0], [69.7, 1550.0], [69.8, 1550.0], [69.9, 1551.0], [70.0, 1551.0], [70.1, 1551.0], [70.2, 1553.0], [70.3, 1553.0], [70.4, 1554.0], [70.5, 1554.0], [70.6, 1555.0], [70.7, 1556.0], [70.8, 1557.0], [70.9, 1558.0], [71.0, 1559.0], [71.1, 1559.0], [71.2, 1560.0], [71.3, 1561.0], [71.4, 1561.0], [71.5, 1561.0], [71.6, 1562.0], [71.7, 1564.0], [71.8, 1564.0], [71.9, 1565.0], [72.0, 1566.0], [72.1, 1567.0], [72.2, 1569.0], [72.3, 1569.0], [72.4, 1570.0], [72.5, 1570.0], [72.6, 1571.0], [72.7, 1571.0], [72.8, 1572.0], [72.9, 1572.0], [73.0, 1573.0], [73.1, 1575.0], [73.2, 1575.0], [73.3, 1577.0], [73.4, 1578.0], [73.5, 1579.0], [73.6, 1580.0], [73.7, 1582.0], [73.8, 1582.0], [73.9, 1584.0], [74.0, 1585.0], [74.1, 1585.0], [74.2, 1587.0], [74.3, 1588.0], [74.4, 1589.0], [74.5, 1590.0], [74.6, 1590.0], [74.7, 1591.0], [74.8, 1591.0], [74.9, 1592.0], [75.0, 1596.0], [75.1, 1596.0], [75.2, 1596.0], [75.3, 1598.0], [75.4, 1598.0], [75.5, 1599.0], [75.6, 1599.0], [75.7, 1599.0], [75.8, 1599.0], [75.9, 1600.0], [76.0, 1601.0], [76.1, 1603.0], [76.2, 1603.0], [76.3, 1603.0], [76.4, 1604.0], [76.5, 1604.0], [76.6, 1604.0], [76.7, 1605.0], [76.8, 1607.0], [76.9, 1609.0], [77.0, 1610.0], [77.1, 1611.0], [77.2, 1611.0], [77.3, 1612.0], [77.4, 1615.0], [77.5, 1618.0], [77.6, 1618.0], [77.7, 1620.0], [77.8, 1621.0], [77.9, 1623.0], [78.0, 1623.0], [78.1, 1624.0], [78.2, 1624.0], [78.3, 1625.0], [78.4, 1625.0], [78.5, 1626.0], [78.6, 1627.0], [78.7, 1627.0], [78.8, 1627.0], [78.9, 1630.0], [79.0, 1630.0], [79.1, 1632.0], [79.2, 1633.0], [79.3, 1634.0], [79.4, 1635.0], [79.5, 1639.0], [79.6, 1641.0], [79.7, 1642.0], [79.8, 1646.0], [79.9, 1646.0], [80.0, 1647.0], [80.1, 1647.0], [80.2, 1648.0], [80.3, 1651.0], [80.4, 1652.0], [80.5, 1653.0], [80.6, 1654.0], [80.7, 1656.0], [80.8, 1658.0], [80.9, 1658.0], [81.0, 1660.0], [81.1, 1661.0], [81.2, 1661.0], [81.3, 1663.0], [81.4, 1664.0], [81.5, 1668.0], [81.6, 1669.0], [81.7, 1672.0], [81.8, 1673.0], [81.9, 1675.0], [82.0, 1676.0], [82.1, 1677.0], [82.2, 1678.0], [82.3, 1681.0], [82.4, 1681.0], [82.5, 1683.0], [82.6, 1683.0], [82.7, 1685.0], [82.8, 1686.0], [82.9, 1686.0], [83.0, 1686.0], [83.1, 1688.0], [83.2, 1689.0], [83.3, 1690.0], [83.4, 1690.0], [83.5, 1690.0], [83.6, 1690.0], [83.7, 1692.0], [83.8, 1694.0], [83.9, 1695.0], [84.0, 1696.0], [84.1, 1698.0], [84.2, 1698.0], [84.3, 1698.0], [84.4, 1700.0], [84.5, 1700.0], [84.6, 1703.0], [84.7, 1703.0], [84.8, 1703.0], [84.9, 1704.0], [85.0, 1704.0], [85.1, 1709.0], [85.2, 1713.0], [85.3, 1713.0], [85.4, 1713.0], [85.5, 1720.0], [85.6, 1720.0], [85.7, 1720.0], [85.8, 1729.0], [85.9, 1733.0], [86.0, 1733.0], [86.1, 1734.0], [86.2, 1736.0], [86.3, 1738.0], [86.4, 1739.0], [86.5, 1741.0], [86.6, 1742.0], [86.7, 1745.0], [86.8, 1749.0], [86.9, 1750.0], [87.0, 1752.0], [87.1, 1752.0], [87.2, 1756.0], [87.3, 1759.0], [87.4, 1760.0], [87.5, 1761.0], [87.6, 1766.0], [87.7, 1769.0], [87.8, 1771.0], [87.9, 1774.0], [88.0, 1777.0], [88.1, 1779.0], [88.2, 1779.0], [88.3, 1780.0], [88.4, 1783.0], [88.5, 1784.0], [88.6, 1788.0], [88.7, 1790.0], [88.8, 1792.0], [88.9, 1793.0], [89.0, 1793.0], [89.1, 1796.0], [89.2, 1798.0], [89.3, 1798.0], [89.4, 1800.0], [89.5, 1802.0], [89.6, 1803.0], [89.7, 1804.0], [89.8, 1805.0], [89.9, 1809.0], [90.0, 1810.0], [90.1, 1810.0], [90.2, 1812.0], [90.3, 1820.0], [90.4, 1821.0], [90.5, 1823.0], [90.6, 1831.0], [90.7, 1835.0], [90.8, 1836.0], [90.9, 1844.0], [91.0, 1851.0], [91.1, 1852.0], [91.2, 1854.0], [91.3, 1859.0], [91.4, 1862.0], [91.5, 1863.0], [91.6, 1864.0], [91.7, 1866.0], [91.8, 1868.0], [91.9, 1868.0], [92.0, 1869.0], [92.1, 1879.0], [92.2, 1882.0], [92.3, 1884.0], [92.4, 1888.0], [92.5, 1890.0], [92.6, 1892.0], [92.7, 1893.0], [92.8, 1896.0], [92.9, 1900.0], [93.0, 1902.0], [93.1, 1908.0], [93.2, 1914.0], [93.3, 1915.0], [93.4, 1915.0], [93.5, 1917.0], [93.6, 1917.0], [93.7, 1924.0], [93.8, 1925.0], [93.9, 1926.0], [94.0, 1928.0], [94.1, 1931.0], [94.2, 1936.0], [94.3, 1937.0], [94.4, 1937.0], [94.5, 1937.0], [94.6, 1940.0], [94.7, 1946.0], [94.8, 1953.0], [94.9, 1954.0], [95.0, 1958.0], [95.1, 1959.0], [95.2, 1960.0], [95.3, 1962.0], [95.4, 1967.0], [95.5, 1975.0], [95.6, 1985.0], [95.7, 2001.0], [95.8, 2003.0], [95.9, 2003.0], [96.0, 2006.0], [96.1, 2010.0], [96.2, 2012.0], [96.3, 2014.0], [96.4, 2026.0], [96.5, 2034.0], [96.6, 2038.0], [96.7, 2044.0], [96.8, 2055.0], [96.9, 2057.0], [97.0, 2057.0], [97.1, 2063.0], [97.2, 2063.0], [97.3, 2068.0], [97.4, 2069.0], [97.5, 2071.0], [97.6, 2072.0], [97.7, 2073.0], [97.8, 2073.0], [97.9, 2080.0], [98.0, 2088.0], [98.1, 2089.0], [98.2, 2092.0], [98.3, 2094.0], [98.4, 2103.0], [98.5, 2104.0], [98.6, 2113.0], [98.7, 2119.0], [98.8, 2120.0], [98.9, 2121.0], [99.0, 2138.0], [99.1, 2148.0], [99.2, 2156.0], [99.3, 2163.0], [99.4, 2173.0], [99.5, 2181.0], [99.6, 2184.0], [99.7, 2203.0], [99.8, 2221.0], [99.9, 2260.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 700.0, "maxY": 197.0, "series": [{"data": [[2100.0, 16.0], [2200.0, 5.0], [700.0, 13.0], [800.0, 41.0], [900.0, 69.0], [1000.0, 46.0], [1100.0, 102.0], [1200.0, 135.0], [1300.0, 197.0], [1400.0, 194.0], [1500.0, 170.0], [1600.0, 109.0], [1700.0, 63.0], [1800.0, 45.0], [1900.0, 36.0], [2000.0, 34.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 478.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 797.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 797.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 478.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 78.15360501567403, "minX": 1.77999978E12, "maxY": 78.839874411303, "series": [{"data": [[1.77999978E12, 78.15360501567403], [1.77999984E12, 78.839874411303]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999984E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 831.5, "minX": 1.0, "maxY": 2099.3, "series": [{"data": [[3.0, 1890.0], [5.0, 1932.0], [9.0, 1972.25], [10.0, 1879.0], [11.0, 1900.0], [13.0, 1871.5], [14.0, 1959.0], [17.0, 916.0], [18.0, 2024.25], [19.0, 1318.0], [20.0, 1279.6666666666667], [22.0, 920.0], [23.0, 932.0], [24.0, 2021.0], [25.0, 955.0], [26.0, 914.0], [27.0, 1625.2], [29.0, 1683.0], [30.0, 846.0], [32.0, 842.6666666666666], [34.0, 1537.7777777777778], [35.0, 846.0], [36.0, 859.0], [38.0, 1582.857142857143], [39.0, 861.5], [40.0, 1491.5], [42.0, 1410.0], [43.0, 1372.0], [44.0, 963.0], [46.0, 931.0], [49.0, 922.5555555555555], [51.0, 831.5], [53.0, 927.5], [54.0, 853.25], [57.0, 1869.625], [59.0, 1044.5], [58.0, 2089.0], [60.0, 1165.6666666666667], [61.0, 900.75], [62.0, 880.3333333333334], [65.0, 990.6666666666666], [64.0, 1729.75], [68.0, 1536.2857142857142], [71.0, 1071.0], [72.0, 1017.0], [75.0, 944.75], [76.0, 1047.25], [77.0, 971.25], [78.0, 2099.3], [80.0, 1234.6666666666667], [81.0, 1048.0], [84.0, 1433.5324675324666], [1.0, 1936.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[78.49647058823535, 1422.9082352941157]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 84.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1698.6666666666667, "minX": 1.77999978E12, "maxY": 2456.3, "series": [{"data": [[1.77999978E12, 2456.3], [1.77999984E12, 2452.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999978E12, 1701.3333333333333], [1.77999984E12, 1698.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999984E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1267.9200626959234, "minX": 1.77999978E12, "maxY": 1578.1397174254314, "series": [{"data": [[1.77999978E12, 1267.9200626959234], [1.77999984E12, 1578.1397174254314]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999984E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1267.890282131662, "minX": 1.77999978E12, "maxY": 1578.1287284144428, "series": [{"data": [[1.77999978E12, 1267.890282131662], [1.77999984E12, 1578.1287284144428]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999984E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999978E12, "maxY": 0.15987460815047008, "series": [{"data": [[1.77999978E12, 0.15987460815047008], [1.77999984E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999984E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 768.0, "minX": 1.77999978E12, "maxY": 2297.0, "series": [{"data": [[1.77999978E12, 1882.0], [1.77999984E12, 2297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999978E12, 768.0], [1.77999984E12, 1140.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999978E12, 1599.0], [1.77999984E12, 1958.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999978E12, 1820.6100000000001], [1.77999984E12, 2182.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999978E12, 1282.5], [1.77999984E12, 1526.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999978E12, 1677.1999999999998], [1.77999984E12, 2071.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999984E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 920.0, "minX": 9.0, "maxY": 1936.0, "series": [{"data": [[32.0, 1323.0], [34.0, 933.5], [36.0, 1585.5], [9.0, 1936.0], [40.0, 1747.5], [13.0, 920.0], [18.0, 1463.0], [20.0, 1746.5], [21.0, 1794.0], [22.0, 1479.5], [23.0, 1155.0], [25.0, 1363.0], [26.0, 1325.5], [27.0, 1339.0], [28.0, 1152.0], [29.0, 1550.0], [30.0, 1452.0], [31.0, 1460.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 920.0, "minX": 9.0, "maxY": 1936.0, "series": [{"data": [[32.0, 1323.0], [34.0, 933.5], [36.0, 1585.5], [9.0, 1936.0], [40.0, 1747.5], [13.0, 920.0], [18.0, 1463.0], [20.0, 1746.5], [21.0, 1794.0], [22.0, 1479.5], [23.0, 1155.0], [25.0, 1363.0], [26.0, 1325.5], [27.0, 1339.0], [28.0, 1152.0], [29.0, 1550.0], [30.0, 1452.0], [31.0, 1460.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 40.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.95, "minX": 1.77999978E12, "maxY": 11.3, "series": [{"data": [[1.77999978E12, 11.3], [1.77999984E12, 9.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999984E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.616666666666667, "minX": 1.77999978E12, "maxY": 10.633333333333333, "series": [{"data": [[1.77999978E12, 10.633333333333333], [1.77999984E12, 10.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999984E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.616666666666667, "minX": 1.77999978E12, "maxY": 10.633333333333333, "series": [{"data": [[1.77999978E12, 10.633333333333333], [1.77999984E12, 10.616666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999984E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.616666666666667, "minX": 1.77999978E12, "maxY": 10.633333333333333, "series": [{"data": [[1.77999978E12, 10.633333333333333], [1.77999984E12, 10.616666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999984E12, "title": "Total Transactions Per Second"}},
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

