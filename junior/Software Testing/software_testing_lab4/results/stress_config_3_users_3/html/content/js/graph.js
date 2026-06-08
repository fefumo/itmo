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
        data: {"result": {"minY": 605.0, "minX": 0.0, "maxY": 1875.0, "series": [{"data": [[0.0, 605.0], [0.1, 605.0], [0.2, 605.0], [0.3, 605.0], [0.4, 605.0], [0.5, 605.0], [0.6, 605.0], [0.7, 605.0], [0.8, 605.0], [0.9, 605.0], [1.0, 605.0], [1.1, 605.0], [1.2, 605.0], [1.3, 605.0], [1.4, 605.0], [1.5, 605.0], [1.6, 605.0], [1.7, 606.0], [1.8, 606.0], [1.9, 606.0], [2.0, 606.0], [2.1, 606.0], [2.2, 606.0], [2.3, 606.0], [2.4, 606.0], [2.5, 607.0], [2.6, 607.0], [2.7, 607.0], [2.8, 607.0], [2.9, 607.0], [3.0, 607.0], [3.1, 607.0], [3.2, 607.0], [3.3, 610.0], [3.4, 610.0], [3.5, 610.0], [3.6, 610.0], [3.7, 610.0], [3.8, 610.0], [3.9, 610.0], [4.0, 610.0], [4.1, 611.0], [4.2, 611.0], [4.3, 611.0], [4.4, 611.0], [4.5, 611.0], [4.6, 611.0], [4.7, 611.0], [4.8, 611.0], [4.9, 611.0], [5.0, 611.0], [5.1, 611.0], [5.2, 611.0], [5.3, 611.0], [5.4, 611.0], [5.5, 611.0], [5.6, 611.0], [5.7, 611.0], [5.8, 614.0], [5.9, 614.0], [6.0, 614.0], [6.1, 614.0], [6.2, 614.0], [6.3, 614.0], [6.4, 614.0], [6.5, 614.0], [6.6, 618.0], [6.7, 618.0], [6.8, 618.0], [6.9, 618.0], [7.0, 618.0], [7.1, 618.0], [7.2, 618.0], [7.3, 618.0], [7.4, 619.0], [7.5, 619.0], [7.6, 619.0], [7.7, 619.0], [7.8, 619.0], [7.9, 619.0], [8.0, 619.0], [8.1, 619.0], [8.2, 622.0], [8.3, 622.0], [8.4, 622.0], [8.5, 622.0], [8.6, 622.0], [8.7, 622.0], [8.8, 622.0], [8.9, 622.0], [9.0, 622.0], [9.1, 626.0], [9.2, 626.0], [9.3, 626.0], [9.4, 626.0], [9.5, 626.0], [9.6, 626.0], [9.7, 626.0], [9.8, 626.0], [9.9, 626.0], [10.0, 626.0], [10.1, 626.0], [10.2, 626.0], [10.3, 626.0], [10.4, 626.0], [10.5, 626.0], [10.6, 626.0], [10.7, 626.0], [10.8, 626.0], [10.9, 626.0], [11.0, 626.0], [11.1, 626.0], [11.2, 626.0], [11.3, 626.0], [11.4, 626.0], [11.5, 627.0], [11.6, 627.0], [11.7, 627.0], [11.8, 627.0], [11.9, 627.0], [12.0, 627.0], [12.1, 627.0], [12.2, 627.0], [12.3, 627.0], [12.4, 627.0], [12.5, 627.0], [12.6, 627.0], [12.7, 627.0], [12.8, 627.0], [12.9, 627.0], [13.0, 627.0], [13.1, 627.0], [13.2, 629.0], [13.3, 629.0], [13.4, 629.0], [13.5, 629.0], [13.6, 629.0], [13.7, 629.0], [13.8, 629.0], [13.9, 629.0], [14.0, 629.0], [14.1, 629.0], [14.2, 629.0], [14.3, 629.0], [14.4, 629.0], [14.5, 629.0], [14.6, 629.0], [14.7, 629.0], [14.8, 633.0], [14.9, 633.0], [15.0, 633.0], [15.1, 633.0], [15.2, 633.0], [15.3, 633.0], [15.4, 633.0], [15.5, 633.0], [15.6, 634.0], [15.7, 634.0], [15.8, 634.0], [15.9, 634.0], [16.0, 634.0], [16.1, 634.0], [16.2, 634.0], [16.3, 634.0], [16.4, 636.0], [16.5, 636.0], [16.6, 636.0], [16.7, 636.0], [16.8, 636.0], [16.9, 636.0], [17.0, 636.0], [17.1, 636.0], [17.2, 636.0], [17.3, 642.0], [17.4, 642.0], [17.5, 642.0], [17.6, 642.0], [17.7, 642.0], [17.8, 642.0], [17.9, 642.0], [18.0, 642.0], [18.1, 646.0], [18.2, 646.0], [18.3, 646.0], [18.4, 646.0], [18.5, 646.0], [18.6, 646.0], [18.7, 646.0], [18.8, 646.0], [18.9, 648.0], [19.0, 648.0], [19.1, 648.0], [19.2, 648.0], [19.3, 648.0], [19.4, 648.0], [19.5, 648.0], [19.6, 648.0], [19.7, 668.0], [19.8, 668.0], [19.9, 668.0], [20.0, 668.0], [20.1, 668.0], [20.2, 668.0], [20.3, 668.0], [20.4, 668.0], [20.5, 671.0], [20.6, 671.0], [20.7, 671.0], [20.8, 671.0], [20.9, 671.0], [21.0, 671.0], [21.1, 671.0], [21.2, 671.0], [21.3, 671.0], [21.4, 673.0], [21.5, 673.0], [21.6, 673.0], [21.7, 673.0], [21.8, 673.0], [21.9, 673.0], [22.0, 673.0], [22.1, 673.0], [22.2, 677.0], [22.3, 677.0], [22.4, 677.0], [22.5, 677.0], [22.6, 677.0], [22.7, 677.0], [22.8, 677.0], [22.9, 677.0], [23.0, 681.0], [23.1, 681.0], [23.2, 681.0], [23.3, 681.0], [23.4, 681.0], [23.5, 681.0], [23.6, 681.0], [23.7, 681.0], [23.8, 682.0], [23.9, 682.0], [24.0, 682.0], [24.1, 682.0], [24.2, 682.0], [24.3, 682.0], [24.4, 682.0], [24.5, 682.0], [24.6, 696.0], [24.7, 696.0], [24.8, 696.0], [24.9, 696.0], [25.0, 696.0], [25.1, 696.0], [25.2, 696.0], [25.3, 696.0], [25.4, 696.0], [25.5, 696.0], [25.6, 696.0], [25.7, 696.0], [25.8, 696.0], [25.9, 696.0], [26.0, 696.0], [26.1, 696.0], [26.2, 696.0], [26.3, 706.0], [26.4, 706.0], [26.5, 706.0], [26.6, 706.0], [26.7, 706.0], [26.8, 706.0], [26.9, 706.0], [27.0, 706.0], [27.1, 712.0], [27.2, 712.0], [27.3, 712.0], [27.4, 712.0], [27.5, 712.0], [27.6, 712.0], [27.7, 712.0], [27.8, 712.0], [27.9, 715.0], [28.0, 715.0], [28.1, 715.0], [28.2, 715.0], [28.3, 715.0], [28.4, 715.0], [28.5, 715.0], [28.6, 715.0], [28.7, 717.0], [28.8, 717.0], [28.9, 717.0], [29.0, 717.0], [29.1, 717.0], [29.2, 717.0], [29.3, 717.0], [29.4, 717.0], [29.5, 717.0], [29.6, 717.0], [29.7, 717.0], [29.8, 717.0], [29.9, 717.0], [30.0, 717.0], [30.1, 717.0], [30.2, 717.0], [30.3, 717.0], [30.4, 718.0], [30.5, 718.0], [30.6, 718.0], [30.7, 718.0], [30.8, 718.0], [30.9, 718.0], [31.0, 718.0], [31.1, 718.0], [31.2, 718.0], [31.3, 718.0], [31.4, 718.0], [31.5, 718.0], [31.6, 718.0], [31.7, 718.0], [31.8, 718.0], [31.9, 718.0], [32.0, 720.0], [32.1, 720.0], [32.2, 720.0], [32.3, 720.0], [32.4, 720.0], [32.5, 720.0], [32.6, 720.0], [32.7, 720.0], [32.8, 721.0], [32.9, 721.0], [33.0, 721.0], [33.1, 721.0], [33.2, 721.0], [33.3, 721.0], [33.4, 721.0], [33.5, 721.0], [33.6, 721.0], [33.7, 725.0], [33.8, 725.0], [33.9, 725.0], [34.0, 725.0], [34.1, 725.0], [34.2, 725.0], [34.3, 725.0], [34.4, 725.0], [34.5, 727.0], [34.6, 727.0], [34.7, 727.0], [34.8, 727.0], [34.9, 727.0], [35.0, 727.0], [35.1, 727.0], [35.2, 727.0], [35.3, 733.0], [35.4, 733.0], [35.5, 733.0], [35.6, 733.0], [35.7, 733.0], [35.8, 733.0], [35.9, 733.0], [36.0, 733.0], [36.1, 742.0], [36.2, 742.0], [36.3, 742.0], [36.4, 742.0], [36.5, 742.0], [36.6, 742.0], [36.7, 742.0], [36.8, 742.0], [36.9, 743.0], [37.0, 743.0], [37.1, 743.0], [37.2, 743.0], [37.3, 743.0], [37.4, 743.0], [37.5, 743.0], [37.6, 743.0], [37.7, 743.0], [37.8, 764.0], [37.9, 764.0], [38.0, 764.0], [38.1, 764.0], [38.2, 764.0], [38.3, 764.0], [38.4, 764.0], [38.5, 764.0], [38.6, 764.0], [38.7, 764.0], [38.8, 764.0], [38.9, 764.0], [39.0, 764.0], [39.1, 764.0], [39.2, 764.0], [39.3, 764.0], [39.4, 765.0], [39.5, 765.0], [39.6, 765.0], [39.7, 765.0], [39.8, 765.0], [39.9, 765.0], [40.0, 765.0], [40.1, 765.0], [40.2, 771.0], [40.3, 771.0], [40.4, 771.0], [40.5, 771.0], [40.6, 771.0], [40.7, 771.0], [40.8, 771.0], [40.9, 771.0], [41.0, 774.0], [41.1, 774.0], [41.2, 774.0], [41.3, 774.0], [41.4, 774.0], [41.5, 774.0], [41.6, 774.0], [41.7, 774.0], [41.8, 774.0], [41.9, 781.0], [42.0, 781.0], [42.1, 781.0], [42.2, 781.0], [42.3, 781.0], [42.4, 781.0], [42.5, 781.0], [42.6, 781.0], [42.7, 782.0], [42.8, 782.0], [42.9, 782.0], [43.0, 782.0], [43.1, 782.0], [43.2, 782.0], [43.3, 782.0], [43.4, 782.0], [43.5, 791.0], [43.6, 791.0], [43.7, 791.0], [43.8, 791.0], [43.9, 791.0], [44.0, 791.0], [44.1, 791.0], [44.2, 791.0], [44.3, 798.0], [44.4, 798.0], [44.5, 798.0], [44.6, 798.0], [44.7, 798.0], [44.8, 798.0], [44.9, 798.0], [45.0, 798.0], [45.1, 805.0], [45.2, 805.0], [45.3, 805.0], [45.4, 805.0], [45.5, 805.0], [45.6, 805.0], [45.7, 805.0], [45.8, 805.0], [45.9, 805.0], [46.0, 816.0], [46.1, 816.0], [46.2, 816.0], [46.3, 816.0], [46.4, 816.0], [46.5, 816.0], [46.6, 816.0], [46.7, 816.0], [46.8, 817.0], [46.9, 817.0], [47.0, 817.0], [47.1, 817.0], [47.2, 817.0], [47.3, 817.0], [47.4, 817.0], [47.5, 817.0], [47.6, 821.0], [47.7, 821.0], [47.8, 821.0], [47.9, 821.0], [48.0, 821.0], [48.1, 821.0], [48.2, 821.0], [48.3, 821.0], [48.4, 822.0], [48.5, 822.0], [48.6, 822.0], [48.7, 822.0], [48.8, 822.0], [48.9, 822.0], [49.0, 822.0], [49.1, 822.0], [49.2, 838.0], [49.3, 838.0], [49.4, 838.0], [49.5, 838.0], [49.6, 838.0], [49.7, 838.0], [49.8, 838.0], [49.9, 838.0], [50.0, 838.0], [50.1, 838.0], [50.2, 838.0], [50.3, 838.0], [50.4, 838.0], [50.5, 838.0], [50.6, 838.0], [50.7, 838.0], [50.8, 838.0], [50.9, 840.0], [51.0, 840.0], [51.1, 840.0], [51.2, 840.0], [51.3, 840.0], [51.4, 840.0], [51.5, 840.0], [51.6, 840.0], [51.7, 841.0], [51.8, 841.0], [51.9, 841.0], [52.0, 841.0], [52.1, 841.0], [52.2, 841.0], [52.3, 841.0], [52.4, 841.0], [52.5, 841.0], [52.6, 841.0], [52.7, 841.0], [52.8, 841.0], [52.9, 841.0], [53.0, 841.0], [53.1, 841.0], [53.2, 841.0], [53.3, 862.0], [53.4, 862.0], [53.5, 862.0], [53.6, 862.0], [53.7, 862.0], [53.8, 862.0], [53.9, 862.0], [54.0, 862.0], [54.1, 876.0], [54.2, 876.0], [54.3, 876.0], [54.4, 876.0], [54.5, 876.0], [54.6, 876.0], [54.7, 876.0], [54.8, 876.0], [54.9, 876.0], [55.0, 900.0], [55.1, 900.0], [55.2, 900.0], [55.3, 900.0], [55.4, 900.0], [55.5, 900.0], [55.6, 900.0], [55.7, 900.0], [55.8, 907.0], [55.9, 907.0], [56.0, 907.0], [56.1, 907.0], [56.2, 907.0], [56.3, 907.0], [56.4, 907.0], [56.5, 907.0], [56.6, 910.0], [56.7, 910.0], [56.8, 910.0], [56.9, 910.0], [57.0, 910.0], [57.1, 910.0], [57.2, 910.0], [57.3, 910.0], [57.4, 914.0], [57.5, 914.0], [57.6, 914.0], [57.7, 914.0], [57.8, 914.0], [57.9, 914.0], [58.0, 914.0], [58.1, 914.0], [58.2, 916.0], [58.3, 916.0], [58.4, 916.0], [58.5, 916.0], [58.6, 916.0], [58.7, 916.0], [58.8, 916.0], [58.9, 916.0], [59.0, 916.0], [59.1, 918.0], [59.2, 918.0], [59.3, 918.0], [59.4, 918.0], [59.5, 918.0], [59.6, 918.0], [59.7, 918.0], [59.8, 918.0], [59.9, 924.0], [60.0, 924.0], [60.1, 924.0], [60.2, 924.0], [60.3, 924.0], [60.4, 924.0], [60.5, 924.0], [60.6, 924.0], [60.7, 931.0], [60.8, 931.0], [60.9, 931.0], [61.0, 931.0], [61.1, 931.0], [61.2, 931.0], [61.3, 931.0], [61.4, 931.0], [61.5, 933.0], [61.6, 933.0], [61.7, 933.0], [61.8, 933.0], [61.9, 933.0], [62.0, 933.0], [62.1, 933.0], [62.2, 933.0], [62.3, 944.0], [62.4, 944.0], [62.5, 944.0], [62.6, 944.0], [62.7, 944.0], [62.8, 944.0], [62.9, 944.0], [63.0, 944.0], [63.1, 944.0], [63.2, 947.0], [63.3, 947.0], [63.4, 947.0], [63.5, 947.0], [63.6, 947.0], [63.7, 947.0], [63.8, 947.0], [63.9, 947.0], [64.0, 950.0], [64.1, 950.0], [64.2, 950.0], [64.3, 950.0], [64.4, 950.0], [64.5, 950.0], [64.6, 950.0], [64.7, 950.0], [64.8, 962.0], [64.9, 962.0], [65.0, 962.0], [65.1, 962.0], [65.2, 962.0], [65.3, 962.0], [65.4, 962.0], [65.5, 962.0], [65.6, 962.0], [65.7, 962.0], [65.8, 962.0], [65.9, 962.0], [66.0, 962.0], [66.1, 962.0], [66.2, 962.0], [66.3, 962.0], [66.4, 975.0], [66.5, 975.0], [66.6, 975.0], [66.7, 975.0], [66.8, 975.0], [66.9, 975.0], [67.0, 975.0], [67.1, 975.0], [67.2, 975.0], [67.3, 981.0], [67.4, 981.0], [67.5, 981.0], [67.6, 981.0], [67.7, 981.0], [67.8, 981.0], [67.9, 981.0], [68.0, 981.0], [68.1, 982.0], [68.2, 982.0], [68.3, 982.0], [68.4, 982.0], [68.5, 982.0], [68.6, 982.0], [68.7, 982.0], [68.8, 982.0], [68.9, 983.0], [69.0, 983.0], [69.1, 983.0], [69.2, 983.0], [69.3, 983.0], [69.4, 983.0], [69.5, 983.0], [69.6, 983.0], [69.7, 1001.0], [69.8, 1001.0], [69.9, 1001.0], [70.0, 1001.0], [70.1, 1001.0], [70.2, 1001.0], [70.3, 1001.0], [70.4, 1001.0], [70.5, 1005.0], [70.6, 1005.0], [70.7, 1005.0], [70.8, 1005.0], [70.9, 1005.0], [71.0, 1005.0], [71.1, 1005.0], [71.2, 1005.0], [71.3, 1005.0], [71.4, 1016.0], [71.5, 1016.0], [71.6, 1016.0], [71.7, 1016.0], [71.8, 1016.0], [71.9, 1016.0], [72.0, 1016.0], [72.1, 1016.0], [72.2, 1019.0], [72.3, 1019.0], [72.4, 1019.0], [72.5, 1019.0], [72.6, 1019.0], [72.7, 1019.0], [72.8, 1019.0], [72.9, 1019.0], [73.0, 1021.0], [73.1, 1021.0], [73.2, 1021.0], [73.3, 1021.0], [73.4, 1021.0], [73.5, 1021.0], [73.6, 1021.0], [73.7, 1021.0], [73.8, 1021.0], [73.9, 1021.0], [74.0, 1021.0], [74.1, 1021.0], [74.2, 1021.0], [74.3, 1021.0], [74.4, 1021.0], [74.5, 1021.0], [74.6, 1024.0], [74.7, 1024.0], [74.8, 1024.0], [74.9, 1024.0], [75.0, 1024.0], [75.1, 1024.0], [75.2, 1024.0], [75.3, 1024.0], [75.4, 1024.0], [75.5, 1033.0], [75.6, 1033.0], [75.7, 1033.0], [75.8, 1033.0], [75.9, 1033.0], [76.0, 1033.0], [76.1, 1033.0], [76.2, 1033.0], [76.3, 1037.0], [76.4, 1037.0], [76.5, 1037.0], [76.6, 1037.0], [76.7, 1037.0], [76.8, 1037.0], [76.9, 1037.0], [77.0, 1037.0], [77.1, 1066.0], [77.2, 1066.0], [77.3, 1066.0], [77.4, 1066.0], [77.5, 1066.0], [77.6, 1066.0], [77.7, 1066.0], [77.8, 1066.0], [77.9, 1067.0], [78.0, 1067.0], [78.1, 1067.0], [78.2, 1067.0], [78.3, 1067.0], [78.4, 1067.0], [78.5, 1067.0], [78.6, 1067.0], [78.7, 1077.0], [78.8, 1077.0], [78.9, 1077.0], [79.0, 1077.0], [79.1, 1077.0], [79.2, 1077.0], [79.3, 1077.0], [79.4, 1077.0], [79.5, 1077.0], [79.6, 1107.0], [79.7, 1107.0], [79.8, 1107.0], [79.9, 1107.0], [80.0, 1107.0], [80.1, 1107.0], [80.2, 1107.0], [80.3, 1107.0], [80.4, 1108.0], [80.5, 1108.0], [80.6, 1108.0], [80.7, 1108.0], [80.8, 1108.0], [80.9, 1108.0], [81.0, 1108.0], [81.1, 1108.0], [81.2, 1111.0], [81.3, 1111.0], [81.4, 1111.0], [81.5, 1111.0], [81.6, 1111.0], [81.7, 1111.0], [81.8, 1111.0], [81.9, 1111.0], [82.0, 1125.0], [82.1, 1125.0], [82.2, 1125.0], [82.3, 1125.0], [82.4, 1125.0], [82.5, 1125.0], [82.6, 1125.0], [82.7, 1125.0], [82.8, 1127.0], [82.9, 1127.0], [83.0, 1127.0], [83.1, 1127.0], [83.2, 1127.0], [83.3, 1127.0], [83.4, 1127.0], [83.5, 1127.0], [83.6, 1127.0], [83.7, 1158.0], [83.8, 1158.0], [83.9, 1158.0], [84.0, 1158.0], [84.1, 1158.0], [84.2, 1158.0], [84.3, 1158.0], [84.4, 1158.0], [84.5, 1195.0], [84.6, 1195.0], [84.7, 1195.0], [84.8, 1195.0], [84.9, 1195.0], [85.0, 1195.0], [85.1, 1195.0], [85.2, 1195.0], [85.3, 1196.0], [85.4, 1196.0], [85.5, 1196.0], [85.6, 1196.0], [85.7, 1196.0], [85.8, 1196.0], [85.9, 1196.0], [86.0, 1196.0], [86.1, 1198.0], [86.2, 1198.0], [86.3, 1198.0], [86.4, 1198.0], [86.5, 1198.0], [86.6, 1198.0], [86.7, 1198.0], [86.8, 1198.0], [86.9, 1202.0], [87.0, 1202.0], [87.1, 1202.0], [87.2, 1202.0], [87.3, 1202.0], [87.4, 1202.0], [87.5, 1202.0], [87.6, 1202.0], [87.7, 1202.0], [87.8, 1214.0], [87.9, 1214.0], [88.0, 1214.0], [88.1, 1214.0], [88.2, 1214.0], [88.3, 1214.0], [88.4, 1214.0], [88.5, 1214.0], [88.6, 1217.0], [88.7, 1217.0], [88.8, 1217.0], [88.9, 1217.0], [89.0, 1217.0], [89.1, 1217.0], [89.2, 1217.0], [89.3, 1217.0], [89.4, 1218.0], [89.5, 1218.0], [89.6, 1218.0], [89.7, 1218.0], [89.8, 1218.0], [89.9, 1218.0], [90.0, 1218.0], [90.1, 1218.0], [90.2, 1219.0], [90.3, 1219.0], [90.4, 1219.0], [90.5, 1219.0], [90.6, 1219.0], [90.7, 1219.0], [90.8, 1219.0], [90.9, 1219.0], [91.0, 1227.0], [91.1, 1227.0], [91.2, 1227.0], [91.3, 1227.0], [91.4, 1227.0], [91.5, 1227.0], [91.6, 1227.0], [91.7, 1227.0], [91.8, 1227.0], [91.9, 1268.0], [92.0, 1268.0], [92.1, 1268.0], [92.2, 1268.0], [92.3, 1268.0], [92.4, 1268.0], [92.5, 1268.0], [92.6, 1268.0], [92.7, 1269.0], [92.8, 1269.0], [92.9, 1269.0], [93.0, 1269.0], [93.1, 1269.0], [93.2, 1269.0], [93.3, 1269.0], [93.4, 1269.0], [93.5, 1272.0], [93.6, 1272.0], [93.7, 1272.0], [93.8, 1272.0], [93.9, 1272.0], [94.0, 1272.0], [94.1, 1272.0], [94.2, 1272.0], [94.3, 1293.0], [94.4, 1293.0], [94.5, 1293.0], [94.6, 1293.0], [94.7, 1293.0], [94.8, 1293.0], [94.9, 1293.0], [95.0, 1293.0], [95.1, 1309.0], [95.2, 1309.0], [95.3, 1309.0], [95.4, 1309.0], [95.5, 1309.0], [95.6, 1309.0], [95.7, 1309.0], [95.8, 1309.0], [95.9, 1309.0], [96.0, 1363.0], [96.1, 1363.0], [96.2, 1363.0], [96.3, 1363.0], [96.4, 1363.0], [96.5, 1363.0], [96.6, 1363.0], [96.7, 1363.0], [96.8, 1421.0], [96.9, 1421.0], [97.0, 1421.0], [97.1, 1421.0], [97.2, 1421.0], [97.3, 1421.0], [97.4, 1421.0], [97.5, 1421.0], [97.6, 1696.0], [97.7, 1696.0], [97.8, 1696.0], [97.9, 1696.0], [98.0, 1696.0], [98.1, 1696.0], [98.2, 1696.0], [98.3, 1696.0], [98.4, 1836.0], [98.5, 1836.0], [98.6, 1836.0], [98.7, 1836.0], [98.8, 1836.0], [98.9, 1836.0], [99.0, 1836.0], [99.1, 1836.0], [99.2, 1875.0], [99.3, 1875.0], [99.4, 1875.0], [99.5, 1875.0], [99.6, 1875.0], [99.7, 1875.0], [99.8, 1875.0], [99.9, 1875.0], [100.0, 1875.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 32.0, "series": [{"data": [[1100.0, 9.0], [600.0, 32.0], [1200.0, 10.0], [1300.0, 2.0], [700.0, 23.0], [1400.0, 1.0], [800.0, 12.0], [1600.0, 1.0], [900.0, 18.0], [1800.0, 2.0], [1000.0, 12.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 119.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 119.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.2857142857142856, "minX": 1.77999336E12, "maxY": 3.0, "series": [{"data": [[1.77999348E12, 2.2857142857142856], [1.77999342E12, 3.0], [1.77999336E12, 2.4727272727272718]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999348E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 782.2727272727273, "minX": 1.0, "maxY": 915.9696969696973, "series": [{"data": [[1.0, 782.2727272727273], [2.0, 815.4999999999999], [3.0, 915.9696969696973]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[2.7213114754098346, 894.0327868852461]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18.666666666666668, "minX": 1.77999336E12, "maxY": 231.0, "series": [{"data": [[1.77999348E12, 26.95], [1.77999342E12, 231.0], [1.77999336E12, 211.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999348E12, 18.666666666666668], [1.77999342E12, 160.0], [1.77999336E12, 146.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999348E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 793.8571428571429, "minX": 1.77999336E12, "maxY": 906.5666666666666, "series": [{"data": [[1.77999348E12, 793.8571428571429], [1.77999342E12, 906.5666666666666], [1.77999336E12, 893.1090909090909]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999348E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 793.7142857142857, "minX": 1.77999336E12, "maxY": 906.5166666666667, "series": [{"data": [[1.77999348E12, 793.7142857142857], [1.77999342E12, 906.5166666666667], [1.77999336E12, 892.8545454545456]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999348E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999336E12, "maxY": 0.618181818181818, "series": [{"data": [[1.77999348E12, 0.0], [1.77999342E12, 0.10000000000000002], [1.77999336E12, 0.618181818181818]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999348E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 605.0, "minX": 1.77999336E12, "maxY": 1875.0, "series": [{"data": [[1.77999348E12, 1421.0], [1.77999342E12, 1836.0], [1.77999336E12, 1875.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999348E12, 618.0], [1.77999342E12, 605.0], [1.77999336E12, 607.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999348E12, 1421.0], [1.77999342E12, 1212.8], [1.77999336E12, 1238.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999348E12, 1421.0], [1.77999342E12, 1836.0], [1.77999336E12, 1875.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999348E12, 712.0], [1.77999342E12, 881.0], [1.77999336E12, 838.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999348E12, 1421.0], [1.77999342E12, 1291.9499999999998], [1.77999336E12, 1319.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999348E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 829.5, "minX": 1.0, "maxY": 839.0, "series": [{"data": [[1.0, 839.0], [2.0, 829.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 829.5, "minX": 1.0, "maxY": 839.0, "series": [{"data": [[1.0, 839.0], [2.0, 829.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.77999336E12, "maxY": 1.0, "series": [{"data": [[1.77999348E12, 0.1], [1.77999342E12, 1.0], [1.77999336E12, 0.9333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999348E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77999336E12, "maxY": 1.0, "series": [{"data": [[1.77999348E12, 0.11666666666666667], [1.77999342E12, 1.0], [1.77999336E12, 0.9166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999348E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77999336E12, "maxY": 1.0, "series": [{"data": [[1.77999348E12, 0.11666666666666667], [1.77999342E12, 1.0], [1.77999336E12, 0.9166666666666666]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999348E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77999336E12, "maxY": 1.0, "series": [{"data": [[1.77999348E12, 0.11666666666666667], [1.77999342E12, 1.0], [1.77999336E12, 0.9166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999348E12, "title": "Total Transactions Per Second"}},
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

