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
        data: {"result": {"minY": 1417.0, "minX": 0.0, "maxY": 10014.0, "series": [{"data": [[0.0, 1417.0], [0.1, 1417.0], [0.2, 1421.0], [0.3, 1421.0], [0.4, 1422.0], [0.5, 1422.0], [0.6, 1422.0], [0.7, 1422.0], [0.8, 1423.0], [0.9, 1423.0], [1.0, 1424.0], [1.1, 1424.0], [1.2, 1424.0], [1.3, 1424.0], [1.4, 1424.0], [1.5, 1425.0], [1.6, 1425.0], [1.7, 1425.0], [1.8, 1425.0], [1.9, 1425.0], [2.0, 1425.0], [2.1, 1426.0], [2.2, 1426.0], [2.3, 1426.0], [2.4, 1427.0], [2.5, 1427.0], [2.6, 1428.0], [2.7, 1428.0], [2.8, 1429.0], [2.9, 1429.0], [3.0, 1429.0], [3.1, 1429.0], [3.2, 1429.0], [3.3, 1429.0], [3.4, 1430.0], [3.5, 1430.0], [3.6, 1430.0], [3.7, 1430.0], [3.8, 1430.0], [3.9, 1430.0], [4.0, 1430.0], [4.1, 1430.0], [4.2, 1430.0], [4.3, 1430.0], [4.4, 1430.0], [4.5, 1430.0], [4.6, 1430.0], [4.7, 1430.0], [4.8, 1431.0], [4.9, 1431.0], [5.0, 1433.0], [5.1, 1433.0], [5.2, 1433.0], [5.3, 1433.0], [5.4, 1434.0], [5.5, 1434.0], [5.6, 1434.0], [5.7, 1434.0], [5.8, 1434.0], [5.9, 1434.0], [6.0, 1434.0], [6.1, 1435.0], [6.2, 1435.0], [6.3, 1435.0], [6.4, 1435.0], [6.5, 1435.0], [6.6, 1435.0], [6.7, 1435.0], [6.8, 1435.0], [6.9, 1436.0], [7.0, 1436.0], [7.1, 1436.0], [7.2, 1436.0], [7.3, 1436.0], [7.4, 1436.0], [7.5, 1436.0], [7.6, 1436.0], [7.7, 1436.0], [7.8, 1436.0], [7.9, 1436.0], [8.0, 1436.0], [8.1, 1436.0], [8.2, 1436.0], [8.3, 1436.0], [8.4, 1436.0], [8.5, 1438.0], [8.6, 1438.0], [8.7, 1438.0], [8.8, 1438.0], [8.9, 1438.0], [9.0, 1438.0], [9.1, 1439.0], [9.2, 1439.0], [9.3, 1439.0], [9.4, 1439.0], [9.5, 1439.0], [9.6, 1439.0], [9.7, 1439.0], [9.8, 1439.0], [9.9, 1439.0], [10.0, 1439.0], [10.1, 1439.0], [10.2, 1439.0], [10.3, 1439.0], [10.4, 1439.0], [10.5, 1439.0], [10.6, 1439.0], [10.7, 1440.0], [10.8, 1440.0], [10.9, 1440.0], [11.0, 1440.0], [11.1, 1440.0], [11.2, 1440.0], [11.3, 1440.0], [11.4, 1440.0], [11.5, 1440.0], [11.6, 1440.0], [11.7, 1440.0], [11.8, 1440.0], [11.9, 1440.0], [12.0, 1440.0], [12.1, 1440.0], [12.2, 1440.0], [12.3, 1440.0], [12.4, 1441.0], [12.5, 1441.0], [12.6, 1441.0], [12.7, 1441.0], [12.8, 1441.0], [12.9, 1441.0], [13.0, 1441.0], [13.1, 1441.0], [13.2, 1441.0], [13.3, 1441.0], [13.4, 1441.0], [13.5, 1442.0], [13.6, 1442.0], [13.7, 1442.0], [13.8, 1442.0], [13.9, 1442.0], [14.0, 1442.0], [14.1, 1442.0], [14.2, 1443.0], [14.3, 1443.0], [14.4, 1443.0], [14.5, 1443.0], [14.6, 1443.0], [14.7, 1443.0], [14.8, 1443.0], [14.9, 1443.0], [15.0, 1443.0], [15.1, 1443.0], [15.2, 1443.0], [15.3, 1443.0], [15.4, 1443.0], [15.5, 1443.0], [15.6, 1443.0], [15.7, 1443.0], [15.8, 1443.0], [15.9, 1443.0], [16.0, 1443.0], [16.1, 1444.0], [16.2, 1444.0], [16.3, 1446.0], [16.4, 1446.0], [16.5, 1446.0], [16.6, 1447.0], [16.7, 1447.0], [16.8, 1448.0], [16.9, 1448.0], [17.0, 1449.0], [17.1, 1449.0], [17.2, 1449.0], [17.3, 1449.0], [17.4, 1450.0], [17.5, 1450.0], [17.6, 1450.0], [17.7, 1450.0], [17.8, 1450.0], [17.9, 1450.0], [18.0, 1450.0], [18.1, 1451.0], [18.2, 1451.0], [18.3, 1451.0], [18.4, 1451.0], [18.5, 1451.0], [18.6, 1451.0], [18.7, 1451.0], [18.8, 1453.0], [18.9, 1453.0], [19.0, 1453.0], [19.1, 1453.0], [19.2, 1453.0], [19.3, 1453.0], [19.4, 1453.0], [19.5, 1453.0], [19.6, 1453.0], [19.7, 1453.0], [19.8, 1453.0], [19.9, 1453.0], [20.0, 1453.0], [20.1, 1453.0], [20.2, 1453.0], [20.3, 1454.0], [20.4, 1454.0], [20.5, 1454.0], [20.6, 1454.0], [20.7, 1454.0], [20.8, 1454.0], [20.9, 1454.0], [21.0, 1456.0], [21.1, 1456.0], [21.2, 1456.0], [21.3, 1456.0], [21.4, 1457.0], [21.5, 1457.0], [21.6, 1460.0], [21.7, 1460.0], [21.8, 1461.0], [21.9, 1461.0], [22.0, 1461.0], [22.1, 1466.0], [22.2, 1466.0], [22.3, 1467.0], [22.4, 1467.0], [22.5, 1467.0], [22.6, 1467.0], [22.7, 1467.0], [22.8, 1467.0], [22.9, 1467.0], [23.0, 1467.0], [23.1, 1467.0], [23.2, 1467.0], [23.3, 1468.0], [23.4, 1468.0], [23.5, 1468.0], [23.6, 1468.0], [23.7, 1468.0], [23.8, 1470.0], [23.9, 1470.0], [24.0, 1472.0], [24.1, 1472.0], [24.2, 1472.0], [24.3, 1472.0], [24.4, 1473.0], [24.5, 1473.0], [24.6, 1473.0], [24.7, 1474.0], [24.8, 1474.0], [24.9, 1474.0], [25.0, 1474.0], [25.1, 1474.0], [25.2, 1474.0], [25.3, 1474.0], [25.4, 1474.0], [25.5, 1476.0], [25.6, 1478.0], [25.7, 1478.0], [25.8, 1478.0], [25.9, 1478.0], [26.0, 1479.0], [26.1, 1479.0], [26.2, 1486.0], [26.3, 1486.0], [26.4, 1496.0], [26.5, 1496.0], [26.6, 1500.0], [26.7, 1500.0], [26.8, 1501.0], [26.9, 1504.0], [27.0, 1504.0], [27.1, 1504.0], [27.2, 1504.0], [27.3, 1504.0], [27.4, 1504.0], [27.5, 1504.0], [27.6, 1504.0], [27.7, 1507.0], [27.8, 1507.0], [27.9, 1508.0], [28.0, 1512.0], [28.1, 1512.0], [28.2, 1516.0], [28.3, 1516.0], [28.4, 1517.0], [28.5, 1517.0], [28.6, 1522.0], [28.7, 1522.0], [28.8, 1523.0], [28.9, 1523.0], [29.0, 1523.0], [29.1, 1523.0], [29.2, 1523.0], [29.3, 1523.0], [29.4, 1523.0], [29.5, 1523.0], [29.6, 1523.0], [29.7, 1524.0], [29.8, 1524.0], [29.9, 1527.0], [30.0, 1527.0], [30.1, 1528.0], [30.2, 1528.0], [30.3, 1529.0], [30.4, 1529.0], [30.5, 1529.0], [30.6, 1529.0], [30.7, 1529.0], [30.8, 1529.0], [30.9, 1529.0], [31.0, 1531.0], [31.1, 1531.0], [31.2, 1531.0], [31.3, 1531.0], [31.4, 1531.0], [31.5, 1531.0], [31.6, 1531.0], [31.7, 1532.0], [31.8, 1532.0], [31.9, 1532.0], [32.0, 1532.0], [32.1, 1532.0], [32.2, 1532.0], [32.3, 1532.0], [32.4, 1532.0], [32.5, 1532.0], [32.6, 1533.0], [32.7, 1533.0], [32.8, 1533.0], [32.9, 1533.0], [33.0, 1533.0], [33.1, 1533.0], [33.2, 1533.0], [33.3, 1533.0], [33.4, 1533.0], [33.5, 1533.0], [33.6, 1533.0], [33.7, 1533.0], [33.8, 1533.0], [33.9, 1534.0], [34.0, 1534.0], [34.1, 1534.0], [34.2, 1534.0], [34.3, 1534.0], [34.4, 1534.0], [34.5, 1536.0], [34.6, 1536.0], [34.7, 1536.0], [34.8, 1536.0], [34.9, 1536.0], [35.0, 1536.0], [35.1, 1536.0], [35.2, 1537.0], [35.3, 1537.0], [35.4, 1537.0], [35.5, 1537.0], [35.6, 1538.0], [35.7, 1538.0], [35.8, 1538.0], [35.9, 1538.0], [36.0, 1538.0], [36.1, 1539.0], [36.2, 1539.0], [36.3, 1539.0], [36.4, 1539.0], [36.5, 1539.0], [36.6, 1539.0], [36.7, 1543.0], [36.8, 1543.0], [36.9, 1544.0], [37.0, 1544.0], [37.1, 1545.0], [37.2, 1545.0], [37.3, 1545.0], [37.4, 1546.0], [37.5, 1546.0], [37.6, 1547.0], [37.7, 1547.0], [37.8, 1547.0], [37.9, 1547.0], [38.0, 1547.0], [38.1, 1547.0], [38.2, 1548.0], [38.3, 1548.0], [38.4, 1548.0], [38.5, 1548.0], [38.6, 1548.0], [38.7, 1548.0], [38.8, 1548.0], [38.9, 1548.0], [39.0, 1548.0], [39.1, 1550.0], [39.2, 1550.0], [39.3, 1551.0], [39.4, 1551.0], [39.5, 1556.0], [39.6, 1556.0], [39.7, 1556.0], [39.8, 1556.0], [39.9, 1556.0], [40.0, 1558.0], [40.1, 1558.0], [40.2, 1558.0], [40.3, 1558.0], [40.4, 1562.0], [40.5, 1562.0], [40.6, 1563.0], [40.7, 1563.0], [40.8, 1563.0], [40.9, 1564.0], [41.0, 1564.0], [41.1, 1566.0], [41.2, 1566.0], [41.3, 1566.0], [41.4, 1566.0], [41.5, 1566.0], [41.6, 1566.0], [41.7, 1566.0], [41.8, 1566.0], [41.9, 1566.0], [42.0, 1567.0], [42.1, 1567.0], [42.2, 1567.0], [42.3, 1567.0], [42.4, 1567.0], [42.5, 1567.0], [42.6, 1567.0], [42.7, 1567.0], [42.8, 1567.0], [42.9, 1567.0], [43.0, 1568.0], [43.1, 1568.0], [43.2, 1568.0], [43.3, 1569.0], [43.4, 1569.0], [43.5, 1569.0], [43.6, 1569.0], [43.7, 1569.0], [43.8, 1569.0], [43.9, 1569.0], [44.0, 1569.0], [44.1, 1569.0], [44.2, 1569.0], [44.3, 1569.0], [44.4, 1569.0], [44.5, 1569.0], [44.6, 1574.0], [44.7, 1574.0], [44.8, 1597.0], [44.9, 1597.0], [45.0, 1599.0], [45.1, 1599.0], [45.2, 1601.0], [45.3, 1601.0], [45.4, 1604.0], [45.5, 1612.0], [45.6, 1612.0], [45.7, 1612.0], [45.8, 1612.0], [45.9, 1612.0], [46.0, 1612.0], [46.1, 1615.0], [46.2, 1615.0], [46.3, 1615.0], [46.4, 1615.0], [46.5, 1637.0], [46.6, 1637.0], [46.7, 1637.0], [46.8, 1637.0], [46.9, 1637.0], [47.0, 1638.0], [47.1, 1638.0], [47.2, 1646.0], [47.3, 1646.0], [47.4, 1647.0], [47.5, 1647.0], [47.6, 1647.0], [47.7, 1649.0], [47.8, 1649.0], [47.9, 1655.0], [48.0, 1655.0], [48.1, 1664.0], [48.2, 1664.0], [48.3, 1668.0], [48.4, 1668.0], [48.5, 1668.0], [48.6, 1668.0], [48.7, 1668.0], [48.8, 1668.0], [48.9, 1668.0], [49.0, 1670.0], [49.1, 1670.0], [49.2, 1676.0], [49.3, 1676.0], [49.4, 1692.0], [49.5, 1692.0], [49.6, 1695.0], [49.7, 1695.0], [49.8, 1696.0], [49.9, 1696.0], [50.0, 1698.0], [50.1, 1701.0], [50.2, 1701.0], [50.3, 1701.0], [50.4, 1701.0], [50.5, 1701.0], [50.6, 1701.0], [50.7, 1701.0], [50.8, 1701.0], [50.9, 1713.0], [51.0, 1713.0], [51.1, 1714.0], [51.2, 1714.0], [51.3, 1714.0], [51.4, 1714.0], [51.5, 1714.0], [51.6, 1714.0], [51.7, 1714.0], [51.8, 1717.0], [51.9, 1717.0], [52.0, 1720.0], [52.1, 1720.0], [52.2, 1721.0], [52.3, 1721.0], [52.4, 1721.0], [52.5, 1728.0], [52.6, 1728.0], [52.7, 1736.0], [52.8, 1736.0], [52.9, 1736.0], [53.0, 1736.0], [53.1, 1736.0], [53.2, 1736.0], [53.3, 1736.0], [53.4, 1736.0], [53.5, 1741.0], [53.6, 1741.0], [53.7, 1741.0], [53.8, 1741.0], [53.9, 1741.0], [54.0, 1742.0], [54.1, 1742.0], [54.2, 1745.0], [54.3, 1745.0], [54.4, 1746.0], [54.5, 1746.0], [54.6, 1746.0], [54.7, 1747.0], [54.8, 1747.0], [54.9, 1747.0], [55.0, 1747.0], [55.1, 1747.0], [55.2, 1747.0], [55.3, 1749.0], [55.4, 1749.0], [55.5, 1751.0], [55.6, 1751.0], [55.7, 1752.0], [55.8, 1752.0], [55.9, 1764.0], [56.0, 1768.0], [56.1, 1768.0], [56.2, 1771.0], [56.3, 1771.0], [56.4, 1775.0], [56.5, 1775.0], [56.6, 1785.0], [56.7, 1785.0], [56.8, 1787.0], [56.9, 1787.0], [57.0, 1787.0], [57.1, 1787.0], [57.2, 1787.0], [57.3, 1787.0], [57.4, 1787.0], [57.5, 1787.0], [57.6, 1787.0], [57.7, 1788.0], [57.8, 1788.0], [57.9, 1795.0], [58.0, 1795.0], [58.1, 1795.0], [58.2, 1795.0], [58.3, 1795.0], [58.4, 1795.0], [58.5, 1795.0], [58.6, 1795.0], [58.7, 1795.0], [58.8, 1795.0], [58.9, 1795.0], [59.0, 1796.0], [59.1, 1796.0], [59.2, 1796.0], [59.3, 1796.0], [59.4, 1796.0], [59.5, 1803.0], [59.6, 1803.0], [59.7, 1806.0], [59.8, 1806.0], [59.9, 1812.0], [60.0, 1812.0], [60.1, 1814.0], [60.2, 1814.0], [60.3, 1817.0], [60.4, 1817.0], [60.5, 1818.0], [60.6, 1818.0], [60.7, 1818.0], [60.8, 1818.0], [60.9, 1818.0], [61.0, 1833.0], [61.1, 1833.0], [61.2, 1838.0], [61.3, 1838.0], [61.4, 1838.0], [61.5, 1838.0], [61.6, 1838.0], [61.7, 1849.0], [61.8, 1849.0], [61.9, 1850.0], [62.0, 1850.0], [62.1, 1850.0], [62.2, 1850.0], [62.3, 1860.0], [62.4, 1860.0], [62.5, 1861.0], [62.6, 1861.0], [62.7, 1872.0], [62.8, 1879.0], [62.9, 1879.0], [63.0, 1879.0], [63.1, 1879.0], [63.2, 1879.0], [63.3, 1879.0], [63.4, 1880.0], [63.5, 1880.0], [63.6, 1881.0], [63.7, 1881.0], [63.8, 1896.0], [63.9, 1896.0], [64.0, 1903.0], [64.1, 1912.0], [64.2, 1912.0], [64.3, 1921.0], [64.4, 1921.0], [64.5, 1922.0], [64.6, 1922.0], [64.7, 1923.0], [64.8, 1923.0], [64.9, 1923.0], [65.0, 1923.0], [65.1, 1925.0], [65.2, 1926.0], [65.3, 1926.0], [65.4, 1928.0], [65.5, 1928.0], [65.6, 1941.0], [65.7, 1941.0], [65.8, 1947.0], [65.9, 1947.0], [66.0, 1957.0], [66.1, 1957.0], [66.2, 1961.0], [66.3, 1964.0], [66.4, 1964.0], [66.5, 1966.0], [66.6, 1966.0], [66.7, 1977.0], [66.8, 1977.0], [66.9, 1977.0], [67.0, 1977.0], [67.1, 1980.0], [67.2, 1980.0], [67.3, 1981.0], [67.4, 1981.0], [67.5, 1981.0], [67.6, 1981.0], [67.7, 1981.0], [67.8, 1981.0], [67.9, 1981.0], [68.0, 1988.0], [68.1, 1988.0], [68.2, 1989.0], [68.3, 1989.0], [68.4, 2004.0], [68.5, 2004.0], [68.6, 2006.0], [68.7, 2009.0], [68.8, 2009.0], [68.9, 2011.0], [69.0, 2011.0], [69.1, 2015.0], [69.2, 2015.0], [69.3, 2017.0], [69.4, 2017.0], [69.5, 2017.0], [69.6, 2017.0], [69.7, 2017.0], [69.8, 2017.0], [69.9, 2017.0], [70.0, 2019.0], [70.1, 2019.0], [70.2, 2027.0], [70.3, 2027.0], [70.4, 2037.0], [70.5, 2037.0], [70.6, 2037.0], [70.7, 2037.0], [70.8, 2037.0], [70.9, 2037.0], [71.0, 2037.0], [71.1, 2045.0], [71.2, 2045.0], [71.3, 2049.0], [71.4, 2049.0], [71.5, 2052.0], [71.6, 2052.0], [71.7, 2056.0], [71.8, 2056.0], [71.9, 2056.0], [72.0, 2056.0], [72.1, 2057.0], [72.2, 2057.0], [72.3, 2057.0], [72.4, 2057.0], [72.5, 2057.0], [72.6, 2059.0], [72.7, 2059.0], [72.8, 2061.0], [72.9, 2061.0], [73.0, 2061.0], [73.1, 2061.0], [73.2, 2061.0], [73.3, 2065.0], [73.4, 2065.0], [73.5, 2088.0], [73.6, 2088.0], [73.7, 2088.0], [73.8, 2088.0], [73.9, 2088.0], [74.0, 2088.0], [74.1, 2104.0], [74.2, 2104.0], [74.3, 2104.0], [74.4, 2104.0], [74.5, 2104.0], [74.6, 2111.0], [74.7, 2111.0], [74.8, 2119.0], [74.9, 2119.0], [75.0, 2119.0], [75.1, 2119.0], [75.2, 2119.0], [75.3, 2119.0], [75.4, 2145.0], [75.5, 2145.0], [75.6, 2149.0], [75.7, 2149.0], [75.8, 2149.0], [75.9, 2149.0], [76.0, 2149.0], [76.1, 2149.0], [76.2, 2149.0], [76.3, 2149.0], [76.4, 2149.0], [76.5, 2149.0], [76.6, 2149.0], [76.7, 2149.0], [76.8, 2150.0], [76.9, 2150.0], [77.0, 2160.0], [77.1, 2160.0], [77.2, 2177.0], [77.3, 2177.0], [77.4, 2227.0], [77.5, 2227.0], [77.6, 2230.0], [77.7, 2230.0], [77.8, 2268.0], [77.9, 2268.0], [78.0, 2294.0], [78.1, 2294.0], [78.2, 2294.0], [78.3, 2294.0], [78.4, 2294.0], [78.5, 2294.0], [78.6, 2294.0], [78.7, 2298.0], [78.8, 2298.0], [78.9, 2322.0], [79.0, 2322.0], [79.1, 2347.0], [79.2, 2359.0], [79.3, 2359.0], [79.4, 2359.0], [79.5, 2359.0], [79.6, 2366.0], [79.7, 2366.0], [79.8, 2366.0], [79.9, 2366.0], [80.0, 2366.0], [80.1, 2366.0], [80.2, 2366.0], [80.3, 2376.0], [80.4, 2376.0], [80.5, 2393.0], [80.6, 2393.0], [80.7, 2398.0], [80.8, 2398.0], [80.9, 2398.0], [81.0, 2398.0], [81.1, 2398.0], [81.2, 2398.0], [81.3, 2414.0], [81.4, 2416.0], [81.5, 2416.0], [81.6, 2438.0], [81.7, 2438.0], [81.8, 2459.0], [81.9, 2459.0], [82.0, 2459.0], [82.1, 2459.0], [82.2, 2459.0], [82.3, 2459.0], [82.4, 2462.0], [82.5, 2462.0], [82.6, 2462.0], [82.7, 2463.0], [82.8, 2463.0], [82.9, 2493.0], [83.0, 2493.0], [83.1, 2569.0], [83.2, 2569.0], [83.3, 2646.0], [83.4, 2646.0], [83.5, 2657.0], [83.6, 2657.0], [83.7, 2697.0], [83.8, 2770.0], [83.9, 2770.0], [84.0, 2798.0], [84.1, 2798.0], [84.2, 2798.0], [84.3, 2798.0], [84.4, 2798.0], [84.5, 2798.0], [84.6, 2808.0], [84.7, 2808.0], [84.8, 2945.0], [84.9, 2970.0], [85.0, 2970.0], [85.1, 3034.0], [85.2, 3034.0], [85.3, 3034.0], [85.4, 3034.0], [85.5, 3045.0], [85.6, 3045.0], [85.7, 3045.0], [85.8, 3045.0], [85.9, 3045.0], [86.0, 3045.0], [86.1, 3045.0], [86.2, 3045.0], [86.3, 3045.0], [86.4, 3091.0], [86.5, 3091.0], [86.6, 3149.0], [86.7, 3149.0], [86.8, 3375.0], [86.9, 3375.0], [87.0, 3375.0], [87.1, 3375.0], [87.2, 3375.0], [87.3, 3376.0], [87.4, 3376.0], [87.5, 3376.0], [87.6, 3376.0], [87.7, 3404.0], [87.8, 3404.0], [87.9, 3475.0], [88.0, 3475.0], [88.1, 3476.0], [88.2, 3476.0], [88.3, 3476.0], [88.4, 3838.0], [88.5, 3838.0], [88.6, 3839.0], [88.7, 3839.0], [88.8, 3839.0], [88.9, 3839.0], [89.0, 3839.0], [89.1, 3839.0], [89.2, 3839.0], [89.3, 3839.0], [89.4, 3839.0], [89.5, 3839.0], [89.6, 3839.0], [89.7, 3892.0], [89.8, 3892.0], [89.9, 3905.0], [90.0, 3905.0], [90.1, 3919.0], [90.2, 3919.0], [90.3, 3979.0], [90.4, 3979.0], [90.5, 3993.0], [90.6, 3993.0], [90.7, 4013.0], [90.8, 4088.0], [90.9, 4088.0], [91.0, 4103.0], [91.1, 4103.0], [91.2, 4103.0], [91.3, 4103.0], [91.4, 4103.0], [91.5, 4103.0], [91.6, 4298.0], [91.7, 4298.0], [91.8, 4298.0], [91.9, 4298.0], [92.0, 4298.0], [92.1, 4298.0], [92.2, 4298.0], [92.3, 4433.0], [92.4, 4433.0], [92.5, 4445.0], [92.6, 4445.0], [92.7, 4483.0], [92.8, 4483.0], [92.9, 4765.0], [93.0, 4765.0], [93.1, 5119.0], [93.2, 5145.0], [93.3, 5145.0], [93.4, 5145.0], [93.5, 5145.0], [93.6, 5145.0], [93.7, 5145.0], [93.8, 5145.0], [93.9, 5145.0], [94.0, 5145.0], [94.1, 5145.0], [94.2, 5240.0], [94.3, 5252.0], [94.4, 5252.0], [94.5, 5252.0], [94.6, 5252.0], [94.7, 5286.0], [94.8, 5286.0], [94.9, 5649.0], [95.0, 5649.0], [95.1, 5655.0], [95.2, 5655.0], [95.3, 5730.0], [95.4, 7597.0], [95.5, 7597.0], [95.6, 8141.0], [95.7, 8141.0], [95.8, 8878.0], [95.9, 8878.0], [96.0, 8917.0], [96.1, 8917.0], [96.2, 8949.0], [96.3, 8949.0], [96.4, 8964.0], [96.5, 8964.0], [96.6, 9550.0], [96.7, 9939.0], [96.8, 9939.0], [96.9, 9939.0], [97.0, 9939.0], [97.1, 10010.0], [97.2, 10010.0], [97.3, 10011.0], [97.4, 10011.0], [97.5, 10011.0], [97.6, 10011.0], [97.7, 10011.0], [97.8, 10011.0], [97.9, 10011.0], [98.0, 10011.0], [98.1, 10011.0], [98.2, 10011.0], [98.3, 10011.0], [98.4, 10011.0], [98.5, 10011.0], [98.6, 10011.0], [98.7, 10011.0], [98.8, 10011.0], [98.9, 10012.0], [99.0, 10012.0], [99.1, 10012.0], [99.2, 10012.0], [99.3, 10012.0], [99.4, 10012.0], [99.5, 10013.0], [99.6, 10013.0], [99.7, 10013.0], [99.8, 10013.0], [99.9, 10014.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1400.0, "maxY": 144.0, "series": [{"data": [[8800.0, 1.0], [8900.0, 3.0], [9500.0, 1.0], [10000.0, 16.0], [9900.0, 2.0], [1400.0, 144.0], [1500.0, 101.0], [1600.0, 27.0], [1700.0, 51.0], [1800.0, 24.0], [1900.0, 24.0], [2000.0, 31.0], [2100.0, 18.0], [2200.0, 8.0], [2300.0, 13.0], [2400.0, 10.0], [2500.0, 1.0], [2600.0, 3.0], [2800.0, 1.0], [2700.0, 4.0], [2900.0, 2.0], [3000.0, 8.0], [3100.0, 1.0], [3300.0, 5.0], [3400.0, 4.0], [3800.0, 8.0], [3900.0, 4.0], [4000.0, 2.0], [4100.0, 3.0], [4200.0, 4.0], [4400.0, 3.0], [4700.0, 1.0], [5100.0, 6.0], [5200.0, 4.0], [5600.0, 2.0], [5700.0, 1.0], [7500.0, 1.0], [8100.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 372.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 145.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 372.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 26.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.999999999999999, "minX": 1.77999228E12, "maxY": 12.0, "series": [{"data": [[1.77999234E12, 11.590909090909092], [1.77999228E12, 4.999999999999999], [1.77999246E12, 11.579831932773113], [1.7799924E12, 12.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999246E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1778.6666666666667, "minX": 2.0, "maxY": 10012.0, "series": [{"data": [[2.0, 7597.0], [4.0, 3373.0], [8.0, 9394.0], [9.0, 2976.5], [5.0, 10012.0], [10.0, 7266.571428571429], [11.0, 1778.6666666666667], [3.0, 8141.0], [6.0, 10011.0], [12.0, 1970.4759916492685], [7.0, 10011.666666666666]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[11.64272559852669, 2329.990791896869]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.333333333333333, "minX": 1.77999228E12, "maxY": 1129.8, "series": [{"data": [[1.77999234E12, 1129.8], [1.77999228E12, 320.28333333333336], [1.77999246E12, 458.15], [1.7799924E12, 835.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999234E12, 504.0], [1.77999228E12, 5.333333333333333], [1.77999246E12, 317.3333333333333], [1.7799924E12, 578.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999246E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1959.680672268908, "minX": 1.77999228E12, "maxY": 9535.444444444445, "series": [{"data": [[1.77999234E12, 2380.5656565656564], [1.77999228E12, 9535.444444444445], [1.77999246E12, 1959.680672268908], [1.7799924E12, 2188.0737327188945]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999246E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1748.1111111111113, "minX": 1.77999228E12, "maxY": 2188.0184331797236, "series": [{"data": [[1.77999234E12, 1925.4242424242427], [1.77999228E12, 1748.1111111111113], [1.77999246E12, 1959.6386554621852], [1.7799924E12, 2188.0184331797236]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999246E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07373271889400923, "minX": 1.77999228E12, "maxY": 4.222222222222222, "series": [{"data": [[1.77999234E12, 0.15656565656565652], [1.77999228E12, 4.222222222222222], [1.77999246E12, 0.07563025210084033], [1.7799924E12, 0.07373271889400923]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999246E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1417.0, "minX": 1.77999228E12, "maxY": 8964.0, "series": [{"data": [[1.77999234E12, 8964.0], [1.77999228E12, 7597.0], [1.77999246E12, 5649.0], [1.7799924E12, 5655.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999234E12, 1421.0], [1.77999228E12, 7597.0], [1.77999246E12, 1417.0], [1.7799924E12, 1425.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999234E12, 2149.0], [1.77999228E12, 7597.0], [1.77999246E12, 3839.0], [1.7799924E12, 3381.6000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999234E12, 8951.85], [1.77999228E12, 7597.0], [1.77999246E12, 5378.799999999996], [1.7799924E12, 5279.88]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999234E12, 1541.0], [1.77999228E12, 7597.0], [1.77999246E12, 1563.0], [1.7799924E12, 1923.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999234E12, 2436.8999999999996], [1.77999228E12, 7597.0], [1.77999246E12, 4103.0], [1.7799924E12, 5121.599999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999246E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1532.0, "minX": 1.0, "maxY": 10011.5, "series": [{"data": [[1.0, 1635.0], [8.0, 1750.0], [2.0, 1684.0], [4.0, 2109.5], [9.0, 1532.0], [5.0, 1568.0], [10.0, 2032.0], [11.0, 1818.0], [3.0, 1916.5], [12.0, 2360.0], [7.0, 2450.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 10011.0], [2.0, 10011.5], [9.0, 5730.0], [3.0, 10011.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3979.0, "series": [{"data": [[1.0, 1635.0], [8.0, 1749.5], [2.0, 1684.0], [4.0, 2109.5], [9.0, 1532.0], [5.0, 1567.5], [10.0, 2032.0], [11.0, 1818.0], [3.0, 1916.5], [12.0, 2359.5], [7.0, 2450.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0], [9.0, 3979.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.77999228E12, "maxY": 3.783333333333333, "series": [{"data": [[1.77999234E12, 3.216666666666667], [1.77999228E12, 0.26666666666666666], [1.77999246E12, 1.7833333333333334], [1.7799924E12, 3.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999246E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77999228E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.77999234E12, 3.0], [1.77999228E12, 0.016666666666666666], [1.77999246E12, 1.9833333333333334], [1.7799924E12, 3.6166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77999234E12, 0.15], [1.77999228E12, 0.11666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.77999234E12, 0.15], [1.77999228E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999246E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77999228E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.77999234E12, 3.0], [1.77999228E12, 0.016666666666666666], [1.77999246E12, 1.9833333333333334], [1.7799924E12, 3.6166666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.77999234E12, 0.3], [1.77999228E12, 0.13333333333333333]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999246E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77999228E12, "maxY": 3.6166666666666667, "series": [{"data": [[1.77999234E12, 3.0], [1.77999228E12, 0.016666666666666666], [1.77999246E12, 1.9833333333333334], [1.7799924E12, 3.6166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77999234E12, 0.3], [1.77999228E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999246E12, "title": "Total Transactions Per Second"}},
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

