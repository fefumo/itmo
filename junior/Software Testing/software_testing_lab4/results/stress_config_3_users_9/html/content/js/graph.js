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
        data: {"result": {"minY": 606.0, "minX": 0.0, "maxY": 1405.0, "series": [{"data": [[0.0, 606.0], [0.1, 606.0], [0.2, 606.0], [0.3, 611.0], [0.4, 611.0], [0.5, 611.0], [0.6, 611.0], [0.7, 611.0], [0.8, 611.0], [0.9, 612.0], [1.0, 612.0], [1.1, 612.0], [1.2, 613.0], [1.3, 613.0], [1.4, 613.0], [1.5, 614.0], [1.6, 614.0], [1.7, 615.0], [1.8, 615.0], [1.9, 615.0], [2.0, 616.0], [2.1, 616.0], [2.2, 616.0], [2.3, 617.0], [2.4, 617.0], [2.5, 617.0], [2.6, 617.0], [2.7, 617.0], [2.8, 617.0], [2.9, 618.0], [3.0, 618.0], [3.1, 618.0], [3.2, 618.0], [3.3, 618.0], [3.4, 618.0], [3.5, 618.0], [3.6, 618.0], [3.7, 618.0], [3.8, 618.0], [3.9, 618.0], [4.0, 618.0], [4.1, 618.0], [4.2, 618.0], [4.3, 619.0], [4.4, 619.0], [4.5, 619.0], [4.6, 619.0], [4.7, 619.0], [4.8, 619.0], [4.9, 619.0], [5.0, 619.0], [5.1, 620.0], [5.2, 620.0], [5.3, 620.0], [5.4, 620.0], [5.5, 620.0], [5.6, 620.0], [5.7, 621.0], [5.8, 621.0], [5.9, 621.0], [6.0, 621.0], [6.1, 621.0], [6.2, 621.0], [6.3, 621.0], [6.4, 621.0], [6.5, 622.0], [6.6, 622.0], [6.7, 622.0], [6.8, 622.0], [6.9, 622.0], [7.0, 622.0], [7.1, 623.0], [7.2, 623.0], [7.3, 623.0], [7.4, 623.0], [7.5, 623.0], [7.6, 623.0], [7.7, 623.0], [7.8, 623.0], [7.9, 623.0], [8.0, 623.0], [8.1, 623.0], [8.2, 623.0], [8.3, 623.0], [8.4, 623.0], [8.5, 623.0], [8.6, 623.0], [8.7, 624.0], [8.8, 624.0], [8.9, 624.0], [9.0, 624.0], [9.1, 624.0], [9.2, 624.0], [9.3, 624.0], [9.4, 624.0], [9.5, 624.0], [9.6, 624.0], [9.7, 624.0], [9.8, 624.0], [9.9, 625.0], [10.0, 625.0], [10.1, 625.0], [10.2, 625.0], [10.3, 625.0], [10.4, 626.0], [10.5, 626.0], [10.6, 626.0], [10.7, 626.0], [10.8, 626.0], [10.9, 626.0], [11.0, 626.0], [11.1, 626.0], [11.2, 626.0], [11.3, 626.0], [11.4, 626.0], [11.5, 626.0], [11.6, 626.0], [11.7, 626.0], [11.8, 627.0], [11.9, 627.0], [12.0, 627.0], [12.1, 627.0], [12.2, 627.0], [12.3, 627.0], [12.4, 627.0], [12.5, 627.0], [12.6, 627.0], [12.7, 627.0], [12.8, 627.0], [12.9, 627.0], [13.0, 627.0], [13.1, 627.0], [13.2, 627.0], [13.3, 627.0], [13.4, 627.0], [13.5, 628.0], [13.6, 628.0], [13.7, 628.0], [13.8, 628.0], [13.9, 628.0], [14.0, 628.0], [14.1, 628.0], [14.2, 628.0], [14.3, 628.0], [14.4, 628.0], [14.5, 628.0], [14.6, 628.0], [14.7, 628.0], [14.8, 628.0], [14.9, 629.0], [15.0, 629.0], [15.1, 629.0], [15.2, 629.0], [15.3, 629.0], [15.4, 629.0], [15.5, 629.0], [15.6, 629.0], [15.7, 629.0], [15.8, 629.0], [15.9, 629.0], [16.0, 630.0], [16.1, 630.0], [16.2, 630.0], [16.3, 630.0], [16.4, 630.0], [16.5, 630.0], [16.6, 630.0], [16.7, 630.0], [16.8, 630.0], [16.9, 631.0], [17.0, 631.0], [17.1, 631.0], [17.2, 631.0], [17.3, 631.0], [17.4, 631.0], [17.5, 631.0], [17.6, 631.0], [17.7, 631.0], [17.8, 631.0], [17.9, 631.0], [18.0, 631.0], [18.1, 631.0], [18.2, 631.0], [18.3, 631.0], [18.4, 631.0], [18.5, 632.0], [18.6, 632.0], [18.7, 632.0], [18.8, 632.0], [18.9, 632.0], [19.0, 632.0], [19.1, 632.0], [19.2, 632.0], [19.3, 632.0], [19.4, 632.0], [19.5, 632.0], [19.6, 632.0], [19.7, 632.0], [19.8, 632.0], [19.9, 632.0], [20.0, 632.0], [20.1, 632.0], [20.2, 632.0], [20.3, 632.0], [20.4, 632.0], [20.5, 633.0], [20.6, 633.0], [20.7, 633.0], [20.8, 633.0], [20.9, 633.0], [21.0, 633.0], [21.1, 633.0], [21.2, 633.0], [21.3, 633.0], [21.4, 633.0], [21.5, 633.0], [21.6, 633.0], [21.7, 633.0], [21.8, 633.0], [21.9, 634.0], [22.0, 634.0], [22.1, 634.0], [22.2, 634.0], [22.3, 634.0], [22.4, 634.0], [22.5, 634.0], [22.6, 634.0], [22.7, 634.0], [22.8, 634.0], [22.9, 634.0], [23.0, 634.0], [23.1, 634.0], [23.2, 634.0], [23.3, 634.0], [23.4, 634.0], [23.5, 634.0], [23.6, 634.0], [23.7, 634.0], [23.8, 634.0], [23.9, 634.0], [24.0, 634.0], [24.1, 634.0], [24.2, 634.0], [24.3, 634.0], [24.4, 635.0], [24.5, 635.0], [24.6, 635.0], [24.7, 637.0], [24.8, 637.0], [24.9, 637.0], [25.0, 638.0], [25.1, 638.0], [25.2, 638.0], [25.3, 638.0], [25.4, 638.0], [25.5, 638.0], [25.6, 638.0], [25.7, 638.0], [25.8, 638.0], [25.9, 638.0], [26.0, 638.0], [26.1, 638.0], [26.2, 638.0], [26.3, 638.0], [26.4, 638.0], [26.5, 638.0], [26.6, 638.0], [26.7, 638.0], [26.8, 638.0], [26.9, 638.0], [27.0, 638.0], [27.1, 638.0], [27.2, 639.0], [27.3, 639.0], [27.4, 639.0], [27.5, 640.0], [27.6, 640.0], [27.7, 640.0], [27.8, 640.0], [27.9, 640.0], [28.0, 640.0], [28.1, 640.0], [28.2, 640.0], [28.3, 640.0], [28.4, 640.0], [28.5, 640.0], [28.6, 641.0], [28.7, 641.0], [28.8, 641.0], [28.9, 641.0], [29.0, 641.0], [29.1, 641.0], [29.2, 641.0], [29.3, 641.0], [29.4, 641.0], [29.5, 641.0], [29.6, 641.0], [29.7, 642.0], [29.8, 642.0], [29.9, 642.0], [30.0, 642.0], [30.1, 642.0], [30.2, 642.0], [30.3, 642.0], [30.4, 642.0], [30.5, 642.0], [30.6, 643.0], [30.7, 643.0], [30.8, 643.0], [30.9, 643.0], [31.0, 643.0], [31.1, 643.0], [31.2, 643.0], [31.3, 643.0], [31.4, 643.0], [31.5, 643.0], [31.6, 643.0], [31.7, 643.0], [31.8, 643.0], [31.9, 643.0], [32.0, 643.0], [32.1, 643.0], [32.2, 643.0], [32.3, 643.0], [32.4, 643.0], [32.5, 644.0], [32.6, 644.0], [32.7, 644.0], [32.8, 644.0], [32.9, 644.0], [33.0, 644.0], [33.1, 644.0], [33.2, 644.0], [33.3, 644.0], [33.4, 644.0], [33.5, 644.0], [33.6, 644.0], [33.7, 646.0], [33.8, 646.0], [33.9, 646.0], [34.0, 646.0], [34.1, 646.0], [34.2, 646.0], [34.3, 646.0], [34.4, 646.0], [34.5, 646.0], [34.6, 646.0], [34.7, 646.0], [34.8, 646.0], [34.9, 646.0], [35.0, 646.0], [35.1, 646.0], [35.2, 646.0], [35.3, 648.0], [35.4, 648.0], [35.5, 648.0], [35.6, 648.0], [35.7, 648.0], [35.8, 648.0], [35.9, 648.0], [36.0, 648.0], [36.1, 648.0], [36.2, 650.0], [36.3, 650.0], [36.4, 650.0], [36.5, 650.0], [36.6, 650.0], [36.7, 650.0], [36.8, 650.0], [36.9, 650.0], [37.0, 651.0], [37.1, 651.0], [37.2, 651.0], [37.3, 651.0], [37.4, 651.0], [37.5, 651.0], [37.6, 652.0], [37.7, 652.0], [37.8, 652.0], [37.9, 655.0], [38.0, 655.0], [38.1, 655.0], [38.2, 655.0], [38.3, 655.0], [38.4, 657.0], [38.5, 657.0], [38.6, 657.0], [38.7, 657.0], [38.8, 657.0], [38.9, 657.0], [39.0, 658.0], [39.1, 658.0], [39.2, 658.0], [39.3, 660.0], [39.4, 660.0], [39.5, 662.0], [39.6, 662.0], [39.7, 662.0], [39.8, 662.0], [39.9, 662.0], [40.0, 662.0], [40.1, 663.0], [40.2, 663.0], [40.3, 663.0], [40.4, 663.0], [40.5, 663.0], [40.6, 663.0], [40.7, 663.0], [40.8, 663.0], [40.9, 663.0], [41.0, 663.0], [41.1, 663.0], [41.2, 663.0], [41.3, 663.0], [41.4, 663.0], [41.5, 663.0], [41.6, 663.0], [41.7, 663.0], [41.8, 664.0], [41.9, 664.0], [42.0, 664.0], [42.1, 665.0], [42.2, 665.0], [42.3, 666.0], [42.4, 666.0], [42.5, 666.0], [42.6, 667.0], [42.7, 667.0], [42.8, 667.0], [42.9, 667.0], [43.0, 667.0], [43.1, 667.0], [43.2, 669.0], [43.3, 669.0], [43.4, 669.0], [43.5, 669.0], [43.6, 669.0], [43.7, 670.0], [43.8, 670.0], [43.9, 670.0], [44.0, 670.0], [44.1, 670.0], [44.2, 670.0], [44.3, 671.0], [44.4, 671.0], [44.5, 671.0], [44.6, 672.0], [44.7, 672.0], [44.8, 672.0], [44.9, 672.0], [45.0, 672.0], [45.1, 673.0], [45.2, 673.0], [45.3, 673.0], [45.4, 673.0], [45.5, 673.0], [45.6, 673.0], [45.7, 675.0], [45.8, 675.0], [45.9, 675.0], [46.0, 675.0], [46.1, 675.0], [46.2, 675.0], [46.3, 677.0], [46.4, 677.0], [46.5, 678.0], [46.6, 678.0], [46.7, 678.0], [46.8, 679.0], [46.9, 679.0], [47.0, 679.0], [47.1, 679.0], [47.2, 679.0], [47.3, 679.0], [47.4, 679.0], [47.5, 679.0], [47.6, 679.0], [47.7, 680.0], [47.8, 680.0], [47.9, 681.0], [48.0, 681.0], [48.1, 681.0], [48.2, 681.0], [48.3, 681.0], [48.4, 681.0], [48.5, 682.0], [48.6, 682.0], [48.7, 682.0], [48.8, 682.0], [48.9, 682.0], [49.0, 682.0], [49.1, 682.0], [49.2, 682.0], [49.3, 683.0], [49.4, 683.0], [49.5, 683.0], [49.6, 683.0], [49.7, 683.0], [49.8, 683.0], [49.9, 683.0], [50.0, 683.0], [50.1, 683.0], [50.2, 684.0], [50.3, 684.0], [50.4, 684.0], [50.5, 684.0], [50.6, 684.0], [50.7, 684.0], [50.8, 684.0], [50.9, 684.0], [51.0, 684.0], [51.1, 684.0], [51.2, 684.0], [51.3, 684.0], [51.4, 684.0], [51.5, 684.0], [51.6, 686.0], [51.7, 686.0], [51.8, 686.0], [51.9, 686.0], [52.0, 686.0], [52.1, 686.0], [52.2, 686.0], [52.3, 686.0], [52.4, 686.0], [52.5, 686.0], [52.6, 686.0], [52.7, 687.0], [52.8, 687.0], [52.9, 687.0], [53.0, 687.0], [53.1, 687.0], [53.2, 687.0], [53.3, 687.0], [53.4, 687.0], [53.5, 687.0], [53.6, 687.0], [53.7, 687.0], [53.8, 691.0], [53.9, 691.0], [54.0, 691.0], [54.1, 691.0], [54.2, 691.0], [54.3, 691.0], [54.4, 692.0], [54.5, 692.0], [54.6, 692.0], [54.7, 694.0], [54.8, 694.0], [54.9, 694.0], [55.0, 696.0], [55.1, 696.0], [55.2, 696.0], [55.3, 696.0], [55.4, 696.0], [55.5, 698.0], [55.6, 698.0], [55.7, 698.0], [55.8, 698.0], [55.9, 698.0], [56.0, 698.0], [56.1, 699.0], [56.2, 699.0], [56.3, 699.0], [56.4, 699.0], [56.5, 699.0], [56.6, 700.0], [56.7, 700.0], [56.8, 700.0], [56.9, 700.0], [57.0, 700.0], [57.1, 700.0], [57.2, 701.0], [57.3, 701.0], [57.4, 701.0], [57.5, 701.0], [57.6, 701.0], [57.7, 701.0], [57.8, 701.0], [57.9, 701.0], [58.0, 703.0], [58.1, 703.0], [58.2, 703.0], [58.3, 708.0], [58.4, 708.0], [58.5, 708.0], [58.6, 708.0], [58.7, 708.0], [58.8, 708.0], [58.9, 709.0], [59.0, 709.0], [59.1, 709.0], [59.2, 709.0], [59.3, 709.0], [59.4, 710.0], [59.5, 710.0], [59.6, 710.0], [59.7, 712.0], [59.8, 712.0], [59.9, 712.0], [60.0, 713.0], [60.1, 713.0], [60.2, 713.0], [60.3, 713.0], [60.4, 713.0], [60.5, 713.0], [60.6, 713.0], [60.7, 713.0], [60.8, 713.0], [60.9, 713.0], [61.0, 713.0], [61.1, 716.0], [61.2, 716.0], [61.3, 716.0], [61.4, 718.0], [61.5, 718.0], [61.6, 718.0], [61.7, 720.0], [61.8, 720.0], [61.9, 720.0], [62.0, 721.0], [62.1, 721.0], [62.2, 721.0], [62.3, 721.0], [62.4, 721.0], [62.5, 722.0], [62.6, 722.0], [62.7, 722.0], [62.8, 723.0], [62.9, 723.0], [63.0, 723.0], [63.1, 724.0], [63.2, 724.0], [63.3, 724.0], [63.4, 727.0], [63.5, 727.0], [63.6, 728.0], [63.7, 728.0], [63.8, 728.0], [63.9, 729.0], [64.0, 729.0], [64.1, 729.0], [64.2, 729.0], [64.3, 729.0], [64.4, 729.0], [64.5, 729.0], [64.6, 729.0], [64.7, 729.0], [64.8, 730.0], [64.9, 730.0], [65.0, 731.0], [65.1, 731.0], [65.2, 731.0], [65.3, 731.0], [65.4, 731.0], [65.5, 731.0], [65.6, 732.0], [65.7, 732.0], [65.8, 732.0], [65.9, 733.0], [66.0, 733.0], [66.1, 733.0], [66.2, 734.0], [66.3, 734.0], [66.4, 737.0], [66.5, 737.0], [66.6, 737.0], [66.7, 737.0], [66.8, 737.0], [66.9, 737.0], [67.0, 737.0], [67.1, 737.0], [67.2, 737.0], [67.3, 738.0], [67.4, 738.0], [67.5, 738.0], [67.6, 740.0], [67.7, 740.0], [67.8, 740.0], [67.9, 740.0], [68.0, 740.0], [68.1, 740.0], [68.2, 740.0], [68.3, 740.0], [68.4, 741.0], [68.5, 741.0], [68.6, 741.0], [68.7, 746.0], [68.8, 746.0], [68.9, 746.0], [69.0, 746.0], [69.1, 746.0], [69.2, 750.0], [69.3, 750.0], [69.4, 750.0], [69.5, 754.0], [69.6, 754.0], [69.7, 754.0], [69.8, 758.0], [69.9, 758.0], [70.0, 758.0], [70.1, 760.0], [70.2, 760.0], [70.3, 760.0], [70.4, 767.0], [70.5, 767.0], [70.6, 767.0], [70.7, 767.0], [70.8, 767.0], [70.9, 767.0], [71.0, 767.0], [71.1, 767.0], [71.2, 768.0], [71.3, 768.0], [71.4, 768.0], [71.5, 768.0], [71.6, 768.0], [71.7, 768.0], [71.8, 770.0], [71.9, 770.0], [72.0, 773.0], [72.1, 773.0], [72.2, 773.0], [72.3, 776.0], [72.4, 776.0], [72.5, 776.0], [72.6, 776.0], [72.7, 776.0], [72.8, 776.0], [72.9, 777.0], [73.0, 777.0], [73.1, 777.0], [73.2, 777.0], [73.3, 777.0], [73.4, 778.0], [73.5, 778.0], [73.6, 778.0], [73.7, 781.0], [73.8, 781.0], [73.9, 781.0], [74.0, 787.0], [74.1, 787.0], [74.2, 787.0], [74.3, 787.0], [74.4, 787.0], [74.5, 787.0], [74.6, 790.0], [74.7, 790.0], [74.8, 792.0], [74.9, 792.0], [75.0, 792.0], [75.1, 793.0], [75.2, 793.0], [75.3, 793.0], [75.4, 795.0], [75.5, 795.0], [75.6, 795.0], [75.7, 796.0], [75.8, 796.0], [75.9, 796.0], [76.0, 799.0], [76.1, 799.0], [76.2, 799.0], [76.3, 799.0], [76.4, 799.0], [76.5, 800.0], [76.6, 800.0], [76.7, 800.0], [76.8, 801.0], [76.9, 801.0], [77.0, 801.0], [77.1, 801.0], [77.2, 801.0], [77.3, 801.0], [77.4, 807.0], [77.5, 807.0], [77.6, 807.0], [77.7, 807.0], [77.8, 807.0], [77.9, 808.0], [78.0, 808.0], [78.1, 808.0], [78.2, 816.0], [78.3, 816.0], [78.4, 816.0], [78.5, 821.0], [78.6, 821.0], [78.7, 821.0], [78.8, 822.0], [78.9, 822.0], [79.0, 823.0], [79.1, 823.0], [79.2, 823.0], [79.3, 824.0], [79.4, 824.0], [79.5, 824.0], [79.6, 831.0], [79.7, 831.0], [79.8, 831.0], [79.9, 832.0], [80.0, 832.0], [80.1, 832.0], [80.2, 833.0], [80.3, 833.0], [80.4, 837.0], [80.5, 837.0], [80.6, 837.0], [80.7, 837.0], [80.8, 837.0], [80.9, 837.0], [81.0, 838.0], [81.1, 838.0], [81.2, 838.0], [81.3, 841.0], [81.4, 841.0], [81.5, 841.0], [81.6, 850.0], [81.7, 850.0], [81.8, 850.0], [81.9, 850.0], [82.0, 850.0], [82.1, 851.0], [82.2, 851.0], [82.3, 851.0], [82.4, 854.0], [82.5, 854.0], [82.6, 854.0], [82.7, 854.0], [82.8, 854.0], [82.9, 854.0], [83.0, 860.0], [83.1, 860.0], [83.2, 860.0], [83.3, 860.0], [83.4, 860.0], [83.5, 863.0], [83.6, 863.0], [83.7, 863.0], [83.8, 863.0], [83.9, 863.0], [84.0, 863.0], [84.1, 874.0], [84.2, 874.0], [84.3, 874.0], [84.4, 885.0], [84.5, 885.0], [84.6, 889.0], [84.7, 889.0], [84.8, 889.0], [84.9, 895.0], [85.0, 895.0], [85.1, 895.0], [85.2, 900.0], [85.3, 900.0], [85.4, 900.0], [85.5, 907.0], [85.6, 907.0], [85.7, 907.0], [85.8, 917.0], [85.9, 917.0], [86.0, 929.0], [86.1, 929.0], [86.2, 929.0], [86.3, 930.0], [86.4, 930.0], [86.5, 930.0], [86.6, 933.0], [86.7, 933.0], [86.8, 933.0], [86.9, 940.0], [87.0, 940.0], [87.1, 940.0], [87.2, 943.0], [87.3, 943.0], [87.4, 944.0], [87.5, 944.0], [87.6, 944.0], [87.7, 946.0], [87.8, 946.0], [87.9, 946.0], [88.0, 951.0], [88.1, 951.0], [88.2, 951.0], [88.3, 967.0], [88.4, 967.0], [88.5, 967.0], [88.6, 972.0], [88.7, 972.0], [88.8, 972.0], [88.9, 972.0], [89.0, 972.0], [89.1, 973.0], [89.2, 973.0], [89.3, 973.0], [89.4, 973.0], [89.5, 973.0], [89.6, 973.0], [89.7, 1011.0], [89.8, 1011.0], [89.9, 1011.0], [90.0, 1015.0], [90.1, 1015.0], [90.2, 1016.0], [90.3, 1016.0], [90.4, 1016.0], [90.5, 1017.0], [90.6, 1017.0], [90.7, 1017.0], [90.8, 1020.0], [90.9, 1020.0], [91.0, 1020.0], [91.1, 1021.0], [91.2, 1021.0], [91.3, 1021.0], [91.4, 1021.0], [91.5, 1021.0], [91.6, 1029.0], [91.7, 1029.0], [91.8, 1029.0], [91.9, 1030.0], [92.0, 1030.0], [92.1, 1030.0], [92.2, 1030.0], [92.3, 1030.0], [92.4, 1030.0], [92.5, 1033.0], [92.6, 1033.0], [92.7, 1033.0], [92.8, 1033.0], [92.9, 1033.0], [93.0, 1037.0], [93.1, 1037.0], [93.2, 1037.0], [93.3, 1039.0], [93.4, 1039.0], [93.5, 1039.0], [93.6, 1041.0], [93.7, 1041.0], [93.8, 1041.0], [93.9, 1043.0], [94.0, 1043.0], [94.1, 1043.0], [94.2, 1046.0], [94.3, 1046.0], [94.4, 1046.0], [94.5, 1046.0], [94.6, 1046.0], [94.7, 1056.0], [94.8, 1056.0], [94.9, 1056.0], [95.0, 1059.0], [95.1, 1059.0], [95.2, 1059.0], [95.3, 1087.0], [95.4, 1087.0], [95.5, 1087.0], [95.6, 1109.0], [95.7, 1109.0], [95.8, 1113.0], [95.9, 1113.0], [96.0, 1113.0], [96.1, 1118.0], [96.2, 1118.0], [96.3, 1118.0], [96.4, 1125.0], [96.5, 1125.0], [96.6, 1125.0], [96.7, 1125.0], [96.8, 1125.0], [96.9, 1125.0], [97.0, 1126.0], [97.1, 1126.0], [97.2, 1143.0], [97.3, 1143.0], [97.4, 1143.0], [97.5, 1151.0], [97.6, 1151.0], [97.7, 1151.0], [97.8, 1155.0], [97.9, 1155.0], [98.0, 1155.0], [98.1, 1196.0], [98.2, 1196.0], [98.3, 1196.0], [98.4, 1231.0], [98.5, 1231.0], [98.6, 1239.0], [98.7, 1239.0], [98.8, 1239.0], [98.9, 1268.0], [99.0, 1268.0], [99.1, 1268.0], [99.2, 1363.0], [99.3, 1363.0], [99.4, 1363.0], [99.5, 1388.0], [99.6, 1388.0], [99.7, 1388.0], [99.8, 1405.0], [99.9, 1405.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 202.0, "series": [{"data": [[1100.0, 10.0], [600.0, 202.0], [1200.0, 3.0], [1300.0, 2.0], [700.0, 71.0], [1400.0, 1.0], [800.0, 31.0], [900.0, 16.0], [1000.0, 21.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 357.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 357.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 357.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.682539682539688, "minX": 1.7799936E12, "maxY": 9.0, "series": [{"data": [[1.77999366E12, 9.0], [1.7799936E12, 6.682539682539688], [1.77999372E12, 8.176470588235295]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999372E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 653.0, "minX": 1.0, "maxY": 911.0, "series": [{"data": [[1.0, 742.8], [2.0, 911.0], [4.0, 802.7], [8.0, 755.9999999999999], [9.0, 734.5677655677655], [5.0, 765.75], [3.0, 653.0], [6.0, 778.2307692307692], [7.0, 827.1818181818182]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[8.064425770308127, 743.641456582634]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 136.0, "minX": 1.7799936E12, "maxY": 693.0, "series": [{"data": [[1.77999366E12, 693.0], [1.7799936E12, 485.1], [1.77999372E12, 196.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999366E12, 480.0], [1.7799936E12, 336.0], [1.77999372E12, 136.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999372E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 734.672222222222, "minX": 1.7799936E12, "maxY": 757.7063492063495, "series": [{"data": [[1.77999366E12, 734.672222222222], [1.7799936E12, 757.7063492063495], [1.77999372E12, 740.5490196078431]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999372E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 734.5888888888885, "minX": 1.7799936E12, "maxY": 757.5317460317461, "series": [{"data": [[1.77999366E12, 734.5888888888885], [1.7799936E12, 757.5317460317461], [1.77999372E12, 740.4901960784313]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999372E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7799936E12, "maxY": 0.3095238095238095, "series": [{"data": [[1.77999366E12, 0.07222222222222222], [1.7799936E12, 0.3095238095238095], [1.77999372E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999372E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 606.0, "minX": 1.7799936E12, "maxY": 1405.0, "series": [{"data": [[1.77999366E12, 1196.0], [1.7799936E12, 1405.0], [1.77999372E12, 1363.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999366E12, 615.0], [1.7799936E12, 606.0], [1.77999372E12, 618.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999366E12, 965.4000000000001], [1.7799936E12, 1034.2], [1.77999372E12, 966.8000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999366E12, 1162.79], [1.7799936E12, 1400.41], [1.77999372E12, 1363.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999366E12, 679.5], [1.7799936E12, 694.0], [1.77999372E12, 683.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999366E12, 1045.85], [1.7799936E12, 1125.0], [1.77999372E12, 1070.1999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999372E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 670.5, "minX": 1.0, "maxY": 973.0, "series": [{"data": [[1.0, 973.0], [2.0, 693.0], [4.0, 683.5], [5.0, 671.5], [3.0, 670.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 670.5, "minX": 1.0, "maxY": 973.0, "series": [{"data": [[1.0, 973.0], [2.0, 693.0], [4.0, 683.5], [5.0, 671.5], [3.0, 670.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.7799936E12, "maxY": 3.0, "series": [{"data": [[1.77999366E12, 3.0], [1.7799936E12, 2.15], [1.77999372E12, 0.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999372E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7799936E12, "maxY": 3.0, "series": [{"data": [[1.77999366E12, 3.0], [1.7799936E12, 2.1], [1.77999372E12, 0.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999372E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7799936E12, "maxY": 3.0, "series": [{"data": [[1.77999366E12, 3.0], [1.7799936E12, 2.1], [1.77999372E12, 0.85]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999372E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7799936E12, "maxY": 3.0, "series": [{"data": [[1.77999366E12, 3.0], [1.7799936E12, 2.1], [1.77999372E12, 0.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999372E12, "title": "Total Transactions Per Second"}},
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

