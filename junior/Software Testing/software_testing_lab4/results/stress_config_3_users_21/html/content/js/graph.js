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
        data: {"result": {"minY": 615.0, "minX": 0.0, "maxY": 1571.0, "series": [{"data": [[0.0, 615.0], [0.1, 615.0], [0.2, 617.0], [0.3, 623.0], [0.4, 624.0], [0.5, 626.0], [0.6, 626.0], [0.7, 628.0], [0.8, 635.0], [0.9, 638.0], [1.0, 641.0], [1.1, 643.0], [1.2, 643.0], [1.3, 644.0], [1.4, 646.0], [1.5, 647.0], [1.6, 648.0], [1.7, 648.0], [1.8, 648.0], [1.9, 649.0], [2.0, 649.0], [2.1, 649.0], [2.2, 650.0], [2.3, 650.0], [2.4, 650.0], [2.5, 652.0], [2.6, 652.0], [2.7, 652.0], [2.8, 652.0], [2.9, 652.0], [3.0, 652.0], [3.1, 653.0], [3.2, 653.0], [3.3, 653.0], [3.4, 653.0], [3.5, 653.0], [3.6, 653.0], [3.7, 654.0], [3.8, 654.0], [3.9, 654.0], [4.0, 654.0], [4.1, 654.0], [4.2, 654.0], [4.3, 655.0], [4.4, 655.0], [4.5, 655.0], [4.6, 655.0], [4.7, 656.0], [4.8, 656.0], [4.9, 656.0], [5.0, 656.0], [5.1, 656.0], [5.2, 656.0], [5.3, 656.0], [5.4, 656.0], [5.5, 656.0], [5.6, 656.0], [5.7, 657.0], [5.8, 657.0], [5.9, 657.0], [6.0, 657.0], [6.1, 657.0], [6.2, 657.0], [6.3, 657.0], [6.4, 657.0], [6.5, 657.0], [6.6, 658.0], [6.7, 658.0], [6.8, 658.0], [6.9, 658.0], [7.0, 658.0], [7.1, 658.0], [7.2, 658.0], [7.3, 658.0], [7.4, 659.0], [7.5, 659.0], [7.6, 659.0], [7.7, 659.0], [7.8, 659.0], [7.9, 659.0], [8.0, 659.0], [8.1, 659.0], [8.2, 659.0], [8.3, 659.0], [8.4, 659.0], [8.5, 659.0], [8.6, 659.0], [8.7, 659.0], [8.8, 660.0], [8.9, 660.0], [9.0, 660.0], [9.1, 660.0], [9.2, 660.0], [9.3, 660.0], [9.4, 660.0], [9.5, 660.0], [9.6, 660.0], [9.7, 660.0], [9.8, 660.0], [9.9, 660.0], [10.0, 660.0], [10.1, 660.0], [10.2, 660.0], [10.3, 660.0], [10.4, 660.0], [10.5, 661.0], [10.6, 661.0], [10.7, 661.0], [10.8, 661.0], [10.9, 661.0], [11.0, 661.0], [11.1, 661.0], [11.2, 661.0], [11.3, 661.0], [11.4, 662.0], [11.5, 662.0], [11.6, 662.0], [11.7, 662.0], [11.8, 662.0], [11.9, 662.0], [12.0, 662.0], [12.1, 662.0], [12.2, 663.0], [12.3, 663.0], [12.4, 663.0], [12.5, 663.0], [12.6, 663.0], [12.7, 663.0], [12.8, 663.0], [12.9, 663.0], [13.0, 663.0], [13.1, 663.0], [13.2, 664.0], [13.3, 664.0], [13.4, 664.0], [13.5, 664.0], [13.6, 664.0], [13.7, 664.0], [13.8, 664.0], [13.9, 664.0], [14.0, 664.0], [14.1, 664.0], [14.2, 664.0], [14.3, 664.0], [14.4, 664.0], [14.5, 665.0], [14.6, 665.0], [14.7, 665.0], [14.8, 665.0], [14.9, 665.0], [15.0, 665.0], [15.1, 665.0], [15.2, 665.0], [15.3, 665.0], [15.4, 665.0], [15.5, 665.0], [15.6, 665.0], [15.7, 665.0], [15.8, 665.0], [15.9, 665.0], [16.0, 665.0], [16.1, 666.0], [16.2, 666.0], [16.3, 666.0], [16.4, 666.0], [16.5, 666.0], [16.6, 666.0], [16.7, 666.0], [16.8, 666.0], [16.9, 666.0], [17.0, 666.0], [17.1, 666.0], [17.2, 666.0], [17.3, 666.0], [17.4, 666.0], [17.5, 666.0], [17.6, 666.0], [17.7, 666.0], [17.8, 667.0], [17.9, 667.0], [18.0, 667.0], [18.1, 667.0], [18.2, 667.0], [18.3, 667.0], [18.4, 667.0], [18.5, 667.0], [18.6, 667.0], [18.7, 667.0], [18.8, 667.0], [18.9, 667.0], [19.0, 667.0], [19.1, 667.0], [19.2, 667.0], [19.3, 667.0], [19.4, 667.0], [19.5, 667.0], [19.6, 667.0], [19.7, 667.0], [19.8, 668.0], [19.9, 668.0], [20.0, 668.0], [20.1, 668.0], [20.2, 668.0], [20.3, 668.0], [20.4, 668.0], [20.5, 668.0], [20.6, 668.0], [20.7, 668.0], [20.8, 668.0], [20.9, 668.0], [21.0, 668.0], [21.1, 669.0], [21.2, 669.0], [21.3, 669.0], [21.4, 669.0], [21.5, 669.0], [21.6, 669.0], [21.7, 669.0], [21.8, 669.0], [21.9, 669.0], [22.0, 669.0], [22.1, 669.0], [22.2, 669.0], [22.3, 669.0], [22.4, 669.0], [22.5, 669.0], [22.6, 669.0], [22.7, 669.0], [22.8, 669.0], [22.9, 669.0], [23.0, 669.0], [23.1, 670.0], [23.2, 670.0], [23.3, 670.0], [23.4, 670.0], [23.5, 670.0], [23.6, 670.0], [23.7, 670.0], [23.8, 670.0], [23.9, 670.0], [24.0, 670.0], [24.1, 671.0], [24.2, 671.0], [24.3, 671.0], [24.4, 671.0], [24.5, 671.0], [24.6, 671.0], [24.7, 671.0], [24.8, 671.0], [24.9, 671.0], [25.0, 671.0], [25.1, 671.0], [25.2, 671.0], [25.3, 671.0], [25.4, 672.0], [25.5, 672.0], [25.6, 672.0], [25.7, 672.0], [25.8, 672.0], [25.9, 672.0], [26.0, 672.0], [26.1, 672.0], [26.2, 672.0], [26.3, 672.0], [26.4, 672.0], [26.5, 672.0], [26.6, 672.0], [26.7, 672.0], [26.8, 672.0], [26.9, 673.0], [27.0, 673.0], [27.1, 673.0], [27.2, 673.0], [27.3, 673.0], [27.4, 673.0], [27.5, 673.0], [27.6, 673.0], [27.7, 673.0], [27.8, 673.0], [27.9, 674.0], [28.0, 674.0], [28.1, 674.0], [28.2, 674.0], [28.3, 674.0], [28.4, 674.0], [28.5, 674.0], [28.6, 674.0], [28.7, 674.0], [28.8, 674.0], [28.9, 674.0], [29.0, 674.0], [29.1, 674.0], [29.2, 674.0], [29.3, 674.0], [29.4, 674.0], [29.5, 674.0], [29.6, 674.0], [29.7, 674.0], [29.8, 674.0], [29.9, 675.0], [30.0, 675.0], [30.1, 675.0], [30.2, 675.0], [30.3, 675.0], [30.4, 675.0], [30.5, 675.0], [30.6, 675.0], [30.7, 675.0], [30.8, 676.0], [30.9, 676.0], [31.0, 676.0], [31.1, 676.0], [31.2, 676.0], [31.3, 676.0], [31.4, 676.0], [31.5, 676.0], [31.6, 676.0], [31.7, 676.0], [31.8, 676.0], [31.9, 676.0], [32.0, 676.0], [32.1, 676.0], [32.2, 676.0], [32.3, 676.0], [32.4, 676.0], [32.5, 677.0], [32.6, 677.0], [32.7, 677.0], [32.8, 677.0], [32.9, 677.0], [33.0, 677.0], [33.1, 677.0], [33.2, 678.0], [33.3, 678.0], [33.4, 678.0], [33.5, 678.0], [33.6, 678.0], [33.7, 678.0], [33.8, 678.0], [33.9, 678.0], [34.0, 678.0], [34.1, 678.0], [34.2, 678.0], [34.3, 678.0], [34.4, 678.0], [34.5, 678.0], [34.6, 678.0], [34.7, 679.0], [34.8, 679.0], [34.9, 679.0], [35.0, 679.0], [35.1, 679.0], [35.2, 679.0], [35.3, 679.0], [35.4, 679.0], [35.5, 679.0], [35.6, 679.0], [35.7, 680.0], [35.8, 680.0], [35.9, 680.0], [36.0, 680.0], [36.1, 680.0], [36.2, 680.0], [36.3, 680.0], [36.4, 680.0], [36.5, 680.0], [36.6, 680.0], [36.7, 681.0], [36.8, 681.0], [36.9, 681.0], [37.0, 681.0], [37.1, 681.0], [37.2, 681.0], [37.3, 681.0], [37.4, 682.0], [37.5, 682.0], [37.6, 682.0], [37.7, 682.0], [37.8, 682.0], [37.9, 682.0], [38.0, 682.0], [38.1, 683.0], [38.2, 683.0], [38.3, 683.0], [38.4, 683.0], [38.5, 684.0], [38.6, 684.0], [38.7, 684.0], [38.8, 684.0], [38.9, 684.0], [39.0, 684.0], [39.1, 684.0], [39.2, 684.0], [39.3, 686.0], [39.4, 687.0], [39.5, 687.0], [39.6, 687.0], [39.7, 687.0], [39.8, 688.0], [39.9, 688.0], [40.0, 688.0], [40.1, 688.0], [40.2, 688.0], [40.3, 688.0], [40.4, 688.0], [40.5, 690.0], [40.6, 690.0], [40.7, 690.0], [40.8, 690.0], [40.9, 690.0], [41.0, 691.0], [41.1, 691.0], [41.2, 691.0], [41.3, 692.0], [41.4, 693.0], [41.5, 694.0], [41.6, 694.0], [41.7, 695.0], [41.8, 695.0], [41.9, 695.0], [42.0, 695.0], [42.1, 696.0], [42.2, 696.0], [42.3, 696.0], [42.4, 696.0], [42.5, 696.0], [42.6, 697.0], [42.7, 697.0], [42.8, 699.0], [42.9, 699.0], [43.0, 699.0], [43.1, 701.0], [43.2, 702.0], [43.3, 702.0], [43.4, 702.0], [43.5, 702.0], [43.6, 702.0], [43.7, 702.0], [43.8, 703.0], [43.9, 703.0], [44.0, 703.0], [44.1, 703.0], [44.2, 703.0], [44.3, 704.0], [44.4, 704.0], [44.5, 704.0], [44.6, 704.0], [44.7, 705.0], [44.8, 705.0], [44.9, 705.0], [45.0, 705.0], [45.1, 706.0], [45.2, 706.0], [45.3, 706.0], [45.4, 706.0], [45.5, 706.0], [45.6, 707.0], [45.7, 707.0], [45.8, 707.0], [45.9, 707.0], [46.0, 707.0], [46.1, 707.0], [46.2, 707.0], [46.3, 707.0], [46.4, 708.0], [46.5, 708.0], [46.6, 708.0], [46.7, 708.0], [46.8, 708.0], [46.9, 708.0], [47.0, 708.0], [47.1, 708.0], [47.2, 708.0], [47.3, 708.0], [47.4, 708.0], [47.5, 708.0], [47.6, 708.0], [47.7, 708.0], [47.8, 708.0], [47.9, 708.0], [48.0, 708.0], [48.1, 709.0], [48.2, 709.0], [48.3, 709.0], [48.4, 709.0], [48.5, 709.0], [48.6, 709.0], [48.7, 709.0], [48.8, 709.0], [48.9, 709.0], [49.0, 709.0], [49.1, 709.0], [49.2, 709.0], [49.3, 709.0], [49.4, 709.0], [49.5, 709.0], [49.6, 709.0], [49.7, 710.0], [49.8, 710.0], [49.9, 710.0], [50.0, 710.0], [50.1, 710.0], [50.2, 710.0], [50.3, 710.0], [50.4, 710.0], [50.5, 710.0], [50.6, 710.0], [50.7, 710.0], [50.8, 710.0], [50.9, 711.0], [51.0, 711.0], [51.1, 711.0], [51.2, 711.0], [51.3, 711.0], [51.4, 711.0], [51.5, 711.0], [51.6, 711.0], [51.7, 711.0], [51.8, 711.0], [51.9, 712.0], [52.0, 712.0], [52.1, 712.0], [52.2, 712.0], [52.3, 712.0], [52.4, 712.0], [52.5, 712.0], [52.6, 712.0], [52.7, 712.0], [52.8, 712.0], [52.9, 712.0], [53.0, 712.0], [53.1, 712.0], [53.2, 712.0], [53.3, 713.0], [53.4, 713.0], [53.5, 713.0], [53.6, 713.0], [53.7, 713.0], [53.8, 713.0], [53.9, 713.0], [54.0, 713.0], [54.1, 714.0], [54.2, 714.0], [54.3, 714.0], [54.4, 714.0], [54.5, 714.0], [54.6, 714.0], [54.7, 715.0], [54.8, 715.0], [54.9, 715.0], [55.0, 715.0], [55.1, 715.0], [55.2, 715.0], [55.3, 715.0], [55.4, 715.0], [55.5, 715.0], [55.6, 716.0], [55.7, 716.0], [55.8, 716.0], [55.9, 716.0], [56.0, 716.0], [56.1, 716.0], [56.2, 716.0], [56.3, 717.0], [56.4, 717.0], [56.5, 717.0], [56.6, 717.0], [56.7, 717.0], [56.8, 717.0], [56.9, 717.0], [57.0, 719.0], [57.1, 719.0], [57.2, 720.0], [57.3, 720.0], [57.4, 720.0], [57.5, 720.0], [57.6, 721.0], [57.7, 721.0], [57.8, 721.0], [57.9, 721.0], [58.0, 722.0], [58.1, 722.0], [58.2, 722.0], [58.3, 722.0], [58.4, 722.0], [58.5, 722.0], [58.6, 722.0], [58.7, 722.0], [58.8, 723.0], [58.9, 723.0], [59.0, 723.0], [59.1, 723.0], [59.2, 723.0], [59.3, 723.0], [59.4, 723.0], [59.5, 723.0], [59.6, 724.0], [59.7, 724.0], [59.8, 724.0], [59.9, 724.0], [60.0, 724.0], [60.1, 724.0], [60.2, 724.0], [60.3, 724.0], [60.4, 724.0], [60.5, 725.0], [60.6, 725.0], [60.7, 726.0], [60.8, 726.0], [60.9, 726.0], [61.0, 726.0], [61.1, 727.0], [61.2, 727.0], [61.3, 727.0], [61.4, 727.0], [61.5, 727.0], [61.6, 727.0], [61.7, 727.0], [61.8, 727.0], [61.9, 727.0], [62.0, 728.0], [62.1, 728.0], [62.2, 728.0], [62.3, 729.0], [62.4, 729.0], [62.5, 729.0], [62.6, 729.0], [62.7, 729.0], [62.8, 729.0], [62.9, 730.0], [63.0, 730.0], [63.1, 730.0], [63.2, 730.0], [63.3, 730.0], [63.4, 731.0], [63.5, 731.0], [63.6, 731.0], [63.7, 731.0], [63.8, 731.0], [63.9, 732.0], [64.0, 732.0], [64.1, 732.0], [64.2, 732.0], [64.3, 732.0], [64.4, 732.0], [64.5, 732.0], [64.6, 732.0], [64.7, 733.0], [64.8, 733.0], [64.9, 733.0], [65.0, 733.0], [65.1, 733.0], [65.2, 733.0], [65.3, 733.0], [65.4, 733.0], [65.5, 734.0], [65.6, 734.0], [65.7, 734.0], [65.8, 734.0], [65.9, 734.0], [66.0, 734.0], [66.1, 734.0], [66.2, 734.0], [66.3, 734.0], [66.4, 735.0], [66.5, 735.0], [66.6, 736.0], [66.7, 736.0], [66.8, 737.0], [66.9, 738.0], [67.0, 738.0], [67.1, 738.0], [67.2, 739.0], [67.3, 739.0], [67.4, 740.0], [67.5, 741.0], [67.6, 741.0], [67.7, 741.0], [67.8, 744.0], [67.9, 744.0], [68.0, 745.0], [68.1, 746.0], [68.2, 746.0], [68.3, 746.0], [68.4, 747.0], [68.5, 747.0], [68.6, 747.0], [68.7, 748.0], [68.8, 748.0], [68.9, 748.0], [69.0, 748.0], [69.1, 749.0], [69.2, 749.0], [69.3, 750.0], [69.4, 750.0], [69.5, 750.0], [69.6, 751.0], [69.7, 751.0], [69.8, 752.0], [69.9, 753.0], [70.0, 753.0], [70.1, 753.0], [70.2, 754.0], [70.3, 754.0], [70.4, 754.0], [70.5, 754.0], [70.6, 754.0], [70.7, 755.0], [70.8, 755.0], [70.9, 755.0], [71.0, 755.0], [71.1, 755.0], [71.2, 755.0], [71.3, 755.0], [71.4, 755.0], [71.5, 757.0], [71.6, 757.0], [71.7, 757.0], [71.8, 757.0], [71.9, 758.0], [72.0, 758.0], [72.1, 758.0], [72.2, 758.0], [72.3, 758.0], [72.4, 758.0], [72.5, 759.0], [72.6, 759.0], [72.7, 759.0], [72.8, 759.0], [72.9, 759.0], [73.0, 759.0], [73.1, 759.0], [73.2, 760.0], [73.3, 760.0], [73.4, 760.0], [73.5, 760.0], [73.6, 760.0], [73.7, 760.0], [73.8, 760.0], [73.9, 761.0], [74.0, 762.0], [74.1, 762.0], [74.2, 762.0], [74.3, 762.0], [74.4, 763.0], [74.5, 763.0], [74.6, 763.0], [74.7, 763.0], [74.8, 763.0], [74.9, 763.0], [75.0, 763.0], [75.1, 763.0], [75.2, 763.0], [75.3, 763.0], [75.4, 764.0], [75.5, 765.0], [75.6, 765.0], [75.7, 766.0], [75.8, 766.0], [75.9, 766.0], [76.0, 767.0], [76.1, 767.0], [76.2, 767.0], [76.3, 767.0], [76.4, 767.0], [76.5, 767.0], [76.6, 767.0], [76.7, 768.0], [76.8, 768.0], [76.9, 768.0], [77.0, 769.0], [77.1, 769.0], [77.2, 770.0], [77.3, 771.0], [77.4, 771.0], [77.5, 772.0], [77.6, 775.0], [77.7, 775.0], [77.8, 777.0], [77.9, 777.0], [78.0, 777.0], [78.1, 778.0], [78.2, 778.0], [78.3, 778.0], [78.4, 778.0], [78.5, 779.0], [78.6, 779.0], [78.7, 779.0], [78.8, 780.0], [78.9, 780.0], [79.0, 780.0], [79.1, 782.0], [79.2, 782.0], [79.3, 786.0], [79.4, 787.0], [79.5, 787.0], [79.6, 787.0], [79.7, 787.0], [79.8, 788.0], [79.9, 792.0], [80.0, 792.0], [80.1, 792.0], [80.2, 798.0], [80.3, 798.0], [80.4, 801.0], [80.5, 802.0], [80.6, 802.0], [80.7, 808.0], [80.8, 809.0], [80.9, 809.0], [81.0, 809.0], [81.1, 810.0], [81.2, 810.0], [81.3, 812.0], [81.4, 814.0], [81.5, 814.0], [81.6, 814.0], [81.7, 817.0], [81.8, 817.0], [81.9, 817.0], [82.0, 818.0], [82.1, 821.0], [82.2, 823.0], [82.3, 824.0], [82.4, 824.0], [82.5, 825.0], [82.6, 825.0], [82.7, 825.0], [82.8, 826.0], [82.9, 826.0], [83.0, 826.0], [83.1, 828.0], [83.2, 829.0], [83.3, 829.0], [83.4, 830.0], [83.5, 832.0], [83.6, 832.0], [83.7, 832.0], [83.8, 832.0], [83.9, 832.0], [84.0, 833.0], [84.1, 833.0], [84.2, 833.0], [84.3, 834.0], [84.4, 834.0], [84.5, 835.0], [84.6, 837.0], [84.7, 838.0], [84.8, 838.0], [84.9, 838.0], [85.0, 838.0], [85.1, 838.0], [85.2, 839.0], [85.3, 839.0], [85.4, 839.0], [85.5, 840.0], [85.6, 841.0], [85.7, 841.0], [85.8, 842.0], [85.9, 842.0], [86.0, 843.0], [86.1, 845.0], [86.2, 845.0], [86.3, 849.0], [86.4, 850.0], [86.5, 850.0], [86.6, 852.0], [86.7, 853.0], [86.8, 854.0], [86.9, 855.0], [87.0, 856.0], [87.1, 856.0], [87.2, 856.0], [87.3, 856.0], [87.4, 857.0], [87.5, 858.0], [87.6, 866.0], [87.7, 866.0], [87.8, 866.0], [87.9, 866.0], [88.0, 867.0], [88.1, 868.0], [88.2, 868.0], [88.3, 868.0], [88.4, 870.0], [88.5, 870.0], [88.6, 871.0], [88.7, 871.0], [88.8, 872.0], [88.9, 872.0], [89.0, 874.0], [89.1, 875.0], [89.2, 875.0], [89.3, 875.0], [89.4, 875.0], [89.5, 875.0], [89.6, 875.0], [89.7, 876.0], [89.8, 876.0], [89.9, 879.0], [90.0, 880.0], [90.1, 880.0], [90.2, 888.0], [90.3, 889.0], [90.4, 895.0], [90.5, 897.0], [90.6, 897.0], [90.7, 899.0], [90.8, 899.0], [90.9, 902.0], [91.0, 902.0], [91.1, 905.0], [91.2, 905.0], [91.3, 905.0], [91.4, 906.0], [91.5, 906.0], [91.6, 908.0], [91.7, 909.0], [91.8, 909.0], [91.9, 910.0], [92.0, 912.0], [92.1, 912.0], [92.2, 915.0], [92.3, 915.0], [92.4, 915.0], [92.5, 926.0], [92.6, 930.0], [92.7, 934.0], [92.8, 942.0], [92.9, 944.0], [93.0, 944.0], [93.1, 950.0], [93.2, 952.0], [93.3, 958.0], [93.4, 964.0], [93.5, 977.0], [93.6, 977.0], [93.7, 991.0], [93.8, 994.0], [93.9, 994.0], [94.0, 1014.0], [94.1, 1014.0], [94.2, 1014.0], [94.3, 1014.0], [94.4, 1014.0], [94.5, 1016.0], [94.6, 1018.0], [94.7, 1018.0], [94.8, 1018.0], [94.9, 1020.0], [95.0, 1021.0], [95.1, 1022.0], [95.2, 1024.0], [95.3, 1024.0], [95.4, 1025.0], [95.5, 1027.0], [95.6, 1027.0], [95.7, 1027.0], [95.8, 1027.0], [95.9, 1027.0], [96.0, 1027.0], [96.1, 1027.0], [96.2, 1028.0], [96.3, 1031.0], [96.4, 1035.0], [96.5, 1035.0], [96.6, 1065.0], [96.7, 1085.0], [96.8, 1087.0], [96.9, 1092.0], [97.0, 1097.0], [97.1, 1097.0], [97.2, 1097.0], [97.3, 1124.0], [97.4, 1132.0], [97.5, 1141.0], [97.6, 1146.0], [97.7, 1146.0], [97.8, 1171.0], [97.9, 1182.0], [98.0, 1193.0], [98.1, 1193.0], [98.2, 1237.0], [98.3, 1237.0], [98.4, 1237.0], [98.5, 1237.0], [98.6, 1237.0], [98.7, 1268.0], [98.8, 1301.0], [98.9, 1301.0], [99.0, 1319.0], [99.1, 1369.0], [99.2, 1370.0], [99.3, 1509.0], [99.4, 1509.0], [99.5, 1509.0], [99.6, 1509.0], [99.7, 1509.0], [99.8, 1511.0], [99.9, 1571.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 600.0, "maxY": 357.0, "series": [{"data": [[1100.0, 8.0], [600.0, 357.0], [1200.0, 5.0], [1300.0, 4.0], [700.0, 310.0], [1500.0, 6.0], [800.0, 87.0], [900.0, 26.0], [1000.0, 27.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 824.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 824.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.815286624203827, "minX": 1.77999408E12, "maxY": 20.90973871733967, "series": [{"data": [[1.77999414E12, 20.90973871733967], [1.77999408E12, 10.815286624203827], [1.7799942E12, 20.202380952380956]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 669.1428571428571, "minX": 1.0, "maxY": 1042.818181818182, "series": [{"data": [[2.0, 691.0], [8.0, 695.1], [9.0, 695.5454545454545], [10.0, 858.6], [11.0, 1042.818181818182], [3.0, 732.4], [12.0, 692.3333333333334], [13.0, 1040.5000000000002], [14.0, 721.3333333333333], [15.0, 735.0769230769231], [1.0, 897.0], [4.0, 828.8], [16.0, 789.5384615384617], [17.0, 711.7142857142857], [18.0, 739.3125000000001], [19.0, 712.9166666666666], [5.0, 903.8], [20.0, 740.4545454545455], [21.0, 735.3730158730148], [6.0, 733.909090909091], [7.0, 669.1428571428571]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[18.785542168674674, 749.3686746987959]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 418.6666666666667, "minX": 1.77999408E12, "maxY": 1620.85, "series": [{"data": [[1.77999414E12, 1620.85], [1.77999408E12, 604.45], [1.7799942E12, 970.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999414E12, 1122.6666666666667], [1.77999408E12, 418.6666666666667], [1.7799942E12, 672.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 727.5912698412701, "minX": 1.77999408E12, "maxY": 812.8280254777069, "series": [{"data": [[1.77999414E12, 738.7387173396683], [1.77999408E12, 812.8280254777069], [1.7799942E12, 727.5912698412701]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 727.5674603174604, "minX": 1.77999408E12, "maxY": 812.7133757961785, "series": [{"data": [[1.77999414E12, 738.6935866983366], [1.77999408E12, 812.7133757961785], [1.7799942E12, 727.5674603174604]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015873015873015876, "minX": 1.77999408E12, "maxY": 0.2611464968152867, "series": [{"data": [[1.77999414E12, 0.0475059382422803], [1.77999408E12, 0.2611464968152867], [1.7799942E12, 0.015873015873015876]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 615.0, "minX": 1.77999408E12, "maxY": 1571.0, "series": [{"data": [[1.77999414E12, 1319.0], [1.77999408E12, 1571.0], [1.7799942E12, 1097.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999414E12, 647.0], [1.77999408E12, 615.0], [1.7799942E12, 648.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999414E12, 856.0], [1.77999408E12, 1184.2000000000003], [1.7799942E12, 866.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999414E12, 1139.0199999999998], [1.77999408E12, 1536.1999999999994], [1.7799942E12, 1058.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999414E12, 709.0], [1.77999408E12, 727.0], [1.7799942E12, 708.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999414E12, 975.6999999999997], [1.77999408E12, 1369.1], [1.7799942E12, 902.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 667.0, "minX": 1.0, "maxY": 897.0, "series": [{"data": [[1.0, 897.0], [2.0, 667.0], [4.0, 754.0], [8.0, 732.0], [9.0, 752.0], [10.0, 705.5], [5.0, 765.0], [11.0, 688.0], [3.0, 674.5], [6.0, 707.0], [7.0, 704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 667.0, "minX": 1.0, "maxY": 892.0, "series": [{"data": [[1.0, 892.0], [2.0, 667.0], [4.0, 754.0], [8.0, 732.0], [9.0, 752.0], [10.0, 705.5], [5.0, 765.0], [11.0, 687.0], [3.0, 674.0], [6.0, 707.0], [7.0, 704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.77999408E12, "maxY": 7.0, "series": [{"data": [[1.77999414E12, 7.0], [1.77999408E12, 2.6666666666666665], [1.7799942E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.77999408E12, "maxY": 7.016666666666667, "series": [{"data": [[1.77999414E12, 7.016666666666667], [1.77999408E12, 2.6166666666666667], [1.7799942E12, 4.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.77999408E12, "maxY": 7.016666666666667, "series": [{"data": [[1.77999414E12, 7.016666666666667], [1.77999408E12, 2.6166666666666667], [1.7799942E12, 4.2]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.77999408E12, "maxY": 7.016666666666667, "series": [{"data": [[1.77999414E12, 7.016666666666667], [1.77999408E12, 2.6166666666666667], [1.7799942E12, 4.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799942E12, "title": "Total Transactions Per Second"}},
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

