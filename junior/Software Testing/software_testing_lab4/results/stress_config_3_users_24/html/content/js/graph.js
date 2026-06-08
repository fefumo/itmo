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
        data: {"result": {"minY": 612.0, "minX": 0.0, "maxY": 1299.0, "series": [{"data": [[0.0, 612.0], [0.1, 612.0], [0.2, 614.0], [0.3, 615.0], [0.4, 616.0], [0.5, 617.0], [0.6, 620.0], [0.7, 626.0], [0.8, 632.0], [0.9, 633.0], [1.0, 635.0], [1.1, 636.0], [1.2, 637.0], [1.3, 639.0], [1.4, 646.0], [1.5, 646.0], [1.6, 647.0], [1.7, 650.0], [1.8, 650.0], [1.9, 652.0], [2.0, 653.0], [2.1, 653.0], [2.2, 653.0], [2.3, 654.0], [2.4, 654.0], [2.5, 655.0], [2.6, 656.0], [2.7, 657.0], [2.8, 657.0], [2.9, 658.0], [3.0, 658.0], [3.1, 659.0], [3.2, 659.0], [3.3, 660.0], [3.4, 661.0], [3.5, 662.0], [3.6, 662.0], [3.7, 662.0], [3.8, 662.0], [3.9, 662.0], [4.0, 662.0], [4.1, 662.0], [4.2, 662.0], [4.3, 663.0], [4.4, 663.0], [4.5, 664.0], [4.6, 664.0], [4.7, 665.0], [4.8, 665.0], [4.9, 665.0], [5.0, 665.0], [5.1, 665.0], [5.2, 665.0], [5.3, 665.0], [5.4, 666.0], [5.5, 666.0], [5.6, 666.0], [5.7, 666.0], [5.8, 667.0], [5.9, 667.0], [6.0, 667.0], [6.1, 667.0], [6.2, 667.0], [6.3, 667.0], [6.4, 667.0], [6.5, 667.0], [6.6, 667.0], [6.7, 667.0], [6.8, 667.0], [6.9, 668.0], [7.0, 668.0], [7.1, 668.0], [7.2, 668.0], [7.3, 668.0], [7.4, 668.0], [7.5, 668.0], [7.6, 668.0], [7.7, 668.0], [7.8, 668.0], [7.9, 668.0], [8.0, 668.0], [8.1, 668.0], [8.2, 668.0], [8.3, 668.0], [8.4, 668.0], [8.5, 668.0], [8.6, 668.0], [8.7, 668.0], [8.8, 668.0], [8.9, 668.0], [9.0, 669.0], [9.1, 669.0], [9.2, 669.0], [9.3, 669.0], [9.4, 669.0], [9.5, 669.0], [9.6, 669.0], [9.7, 669.0], [9.8, 669.0], [9.9, 670.0], [10.0, 670.0], [10.1, 670.0], [10.2, 670.0], [10.3, 670.0], [10.4, 670.0], [10.5, 670.0], [10.6, 670.0], [10.7, 670.0], [10.8, 670.0], [10.9, 670.0], [11.0, 670.0], [11.1, 670.0], [11.2, 670.0], [11.3, 670.0], [11.4, 671.0], [11.5, 671.0], [11.6, 671.0], [11.7, 671.0], [11.8, 671.0], [11.9, 671.0], [12.0, 671.0], [12.1, 671.0], [12.2, 671.0], [12.3, 671.0], [12.4, 671.0], [12.5, 672.0], [12.6, 672.0], [12.7, 672.0], [12.8, 672.0], [12.9, 672.0], [13.0, 672.0], [13.1, 672.0], [13.2, 672.0], [13.3, 672.0], [13.4, 672.0], [13.5, 672.0], [13.6, 672.0], [13.7, 672.0], [13.8, 672.0], [13.9, 673.0], [14.0, 673.0], [14.1, 673.0], [14.2, 673.0], [14.3, 673.0], [14.4, 673.0], [14.5, 673.0], [14.6, 673.0], [14.7, 673.0], [14.8, 673.0], [14.9, 673.0], [15.0, 673.0], [15.1, 673.0], [15.2, 673.0], [15.3, 673.0], [15.4, 673.0], [15.5, 673.0], [15.6, 673.0], [15.7, 673.0], [15.8, 674.0], [15.9, 674.0], [16.0, 674.0], [16.1, 674.0], [16.2, 674.0], [16.3, 674.0], [16.4, 674.0], [16.5, 674.0], [16.6, 674.0], [16.7, 674.0], [16.8, 674.0], [16.9, 674.0], [17.0, 674.0], [17.1, 674.0], [17.2, 674.0], [17.3, 674.0], [17.4, 674.0], [17.5, 674.0], [17.6, 674.0], [17.7, 674.0], [17.8, 674.0], [17.9, 674.0], [18.0, 674.0], [18.1, 674.0], [18.2, 674.0], [18.3, 674.0], [18.4, 675.0], [18.5, 675.0], [18.6, 675.0], [18.7, 675.0], [18.8, 675.0], [18.9, 675.0], [19.0, 675.0], [19.1, 675.0], [19.2, 676.0], [19.3, 676.0], [19.4, 676.0], [19.5, 676.0], [19.6, 676.0], [19.7, 676.0], [19.8, 676.0], [19.9, 676.0], [20.0, 676.0], [20.1, 676.0], [20.2, 676.0], [20.3, 676.0], [20.4, 676.0], [20.5, 676.0], [20.6, 676.0], [20.7, 677.0], [20.8, 677.0], [20.9, 677.0], [21.0, 677.0], [21.1, 677.0], [21.2, 677.0], [21.3, 677.0], [21.4, 677.0], [21.5, 677.0], [21.6, 677.0], [21.7, 677.0], [21.8, 677.0], [21.9, 677.0], [22.0, 677.0], [22.1, 677.0], [22.2, 677.0], [22.3, 678.0], [22.4, 678.0], [22.5, 678.0], [22.6, 678.0], [22.7, 678.0], [22.8, 678.0], [22.9, 678.0], [23.0, 678.0], [23.1, 678.0], [23.2, 678.0], [23.3, 678.0], [23.4, 678.0], [23.5, 678.0], [23.6, 679.0], [23.7, 679.0], [23.8, 679.0], [23.9, 679.0], [24.0, 679.0], [24.1, 679.0], [24.2, 679.0], [24.3, 679.0], [24.4, 679.0], [24.5, 679.0], [24.6, 679.0], [24.7, 679.0], [24.8, 680.0], [24.9, 680.0], [25.0, 680.0], [25.1, 680.0], [25.2, 680.0], [25.3, 680.0], [25.4, 680.0], [25.5, 680.0], [25.6, 680.0], [25.7, 680.0], [25.8, 680.0], [25.9, 680.0], [26.0, 680.0], [26.1, 680.0], [26.2, 680.0], [26.3, 680.0], [26.4, 681.0], [26.5, 681.0], [26.6, 681.0], [26.7, 681.0], [26.8, 681.0], [26.9, 681.0], [27.0, 681.0], [27.1, 681.0], [27.2, 681.0], [27.3, 681.0], [27.4, 682.0], [27.5, 682.0], [27.6, 682.0], [27.7, 682.0], [27.8, 682.0], [27.9, 682.0], [28.0, 682.0], [28.1, 682.0], [28.2, 682.0], [28.3, 682.0], [28.4, 682.0], [28.5, 682.0], [28.6, 682.0], [28.7, 682.0], [28.8, 682.0], [28.9, 682.0], [29.0, 683.0], [29.1, 683.0], [29.2, 683.0], [29.3, 683.0], [29.4, 683.0], [29.5, 683.0], [29.6, 683.0], [29.7, 683.0], [29.8, 683.0], [29.9, 683.0], [30.0, 684.0], [30.1, 684.0], [30.2, 684.0], [30.3, 684.0], [30.4, 684.0], [30.5, 684.0], [30.6, 684.0], [30.7, 684.0], [30.8, 684.0], [30.9, 684.0], [31.0, 684.0], [31.1, 684.0], [31.2, 685.0], [31.3, 685.0], [31.4, 685.0], [31.5, 685.0], [31.6, 685.0], [31.7, 685.0], [31.8, 685.0], [31.9, 685.0], [32.0, 685.0], [32.1, 685.0], [32.2, 685.0], [32.3, 686.0], [32.4, 686.0], [32.5, 686.0], [32.6, 686.0], [32.7, 686.0], [32.8, 686.0], [32.9, 686.0], [33.0, 687.0], [33.1, 687.0], [33.2, 687.0], [33.3, 687.0], [33.4, 687.0], [33.5, 688.0], [33.6, 688.0], [33.7, 688.0], [33.8, 689.0], [33.9, 689.0], [34.0, 689.0], [34.1, 689.0], [34.2, 689.0], [34.3, 690.0], [34.4, 690.0], [34.5, 690.0], [34.6, 690.0], [34.7, 690.0], [34.8, 690.0], [34.9, 690.0], [35.0, 691.0], [35.1, 691.0], [35.2, 691.0], [35.3, 692.0], [35.4, 692.0], [35.5, 692.0], [35.6, 692.0], [35.7, 693.0], [35.8, 693.0], [35.9, 693.0], [36.0, 693.0], [36.1, 693.0], [36.2, 693.0], [36.3, 693.0], [36.4, 693.0], [36.5, 694.0], [36.6, 694.0], [36.7, 694.0], [36.8, 694.0], [36.9, 694.0], [37.0, 694.0], [37.1, 694.0], [37.2, 694.0], [37.3, 694.0], [37.4, 694.0], [37.5, 694.0], [37.6, 694.0], [37.7, 695.0], [37.8, 695.0], [37.9, 695.0], [38.0, 695.0], [38.1, 695.0], [38.2, 695.0], [38.3, 695.0], [38.4, 695.0], [38.5, 696.0], [38.6, 696.0], [38.7, 696.0], [38.8, 696.0], [38.9, 696.0], [39.0, 696.0], [39.1, 696.0], [39.2, 697.0], [39.3, 697.0], [39.4, 697.0], [39.5, 697.0], [39.6, 697.0], [39.7, 697.0], [39.8, 698.0], [39.9, 698.0], [40.0, 698.0], [40.1, 698.0], [40.2, 698.0], [40.3, 698.0], [40.4, 698.0], [40.5, 698.0], [40.6, 698.0], [40.7, 698.0], [40.8, 698.0], [40.9, 698.0], [41.0, 698.0], [41.1, 699.0], [41.2, 699.0], [41.3, 699.0], [41.4, 700.0], [41.5, 700.0], [41.6, 700.0], [41.7, 700.0], [41.8, 700.0], [41.9, 700.0], [42.0, 701.0], [42.1, 701.0], [42.2, 701.0], [42.3, 701.0], [42.4, 701.0], [42.5, 702.0], [42.6, 702.0], [42.7, 702.0], [42.8, 702.0], [42.9, 702.0], [43.0, 702.0], [43.1, 702.0], [43.2, 702.0], [43.3, 702.0], [43.4, 702.0], [43.5, 702.0], [43.6, 702.0], [43.7, 702.0], [43.8, 703.0], [43.9, 703.0], [44.0, 703.0], [44.1, 703.0], [44.2, 703.0], [44.3, 703.0], [44.4, 703.0], [44.5, 703.0], [44.6, 703.0], [44.7, 703.0], [44.8, 703.0], [44.9, 704.0], [45.0, 704.0], [45.1, 704.0], [45.2, 704.0], [45.3, 704.0], [45.4, 704.0], [45.5, 704.0], [45.6, 704.0], [45.7, 705.0], [45.8, 705.0], [45.9, 705.0], [46.0, 705.0], [46.1, 705.0], [46.2, 705.0], [46.3, 706.0], [46.4, 706.0], [46.5, 706.0], [46.6, 706.0], [46.7, 706.0], [46.8, 707.0], [46.9, 707.0], [47.0, 707.0], [47.1, 707.0], [47.2, 707.0], [47.3, 707.0], [47.4, 707.0], [47.5, 707.0], [47.6, 707.0], [47.7, 707.0], [47.8, 707.0], [47.9, 708.0], [48.0, 708.0], [48.1, 708.0], [48.2, 708.0], [48.3, 708.0], [48.4, 708.0], [48.5, 708.0], [48.6, 708.0], [48.7, 708.0], [48.8, 708.0], [48.9, 708.0], [49.0, 708.0], [49.1, 709.0], [49.2, 709.0], [49.3, 709.0], [49.4, 709.0], [49.5, 709.0], [49.6, 709.0], [49.7, 709.0], [49.8, 709.0], [49.9, 709.0], [50.0, 710.0], [50.1, 710.0], [50.2, 710.0], [50.3, 710.0], [50.4, 711.0], [50.5, 711.0], [50.6, 711.0], [50.7, 711.0], [50.8, 711.0], [50.9, 711.0], [51.0, 711.0], [51.1, 711.0], [51.2, 712.0], [51.3, 712.0], [51.4, 712.0], [51.5, 712.0], [51.6, 712.0], [51.7, 712.0], [51.8, 712.0], [51.9, 712.0], [52.0, 712.0], [52.1, 712.0], [52.2, 713.0], [52.3, 713.0], [52.4, 713.0], [52.5, 713.0], [52.6, 713.0], [52.7, 713.0], [52.8, 714.0], [52.9, 714.0], [53.0, 714.0], [53.1, 714.0], [53.2, 714.0], [53.3, 714.0], [53.4, 714.0], [53.5, 714.0], [53.6, 714.0], [53.7, 714.0], [53.8, 714.0], [53.9, 714.0], [54.0, 715.0], [54.1, 715.0], [54.2, 715.0], [54.3, 715.0], [54.4, 715.0], [54.5, 715.0], [54.6, 715.0], [54.7, 715.0], [54.8, 715.0], [54.9, 716.0], [55.0, 716.0], [55.1, 716.0], [55.2, 716.0], [55.3, 716.0], [55.4, 716.0], [55.5, 716.0], [55.6, 716.0], [55.7, 716.0], [55.8, 716.0], [55.9, 716.0], [56.0, 717.0], [56.1, 717.0], [56.2, 717.0], [56.3, 717.0], [56.4, 717.0], [56.5, 717.0], [56.6, 717.0], [56.7, 717.0], [56.8, 717.0], [56.9, 717.0], [57.0, 717.0], [57.1, 718.0], [57.2, 718.0], [57.3, 718.0], [57.4, 718.0], [57.5, 718.0], [57.6, 718.0], [57.7, 718.0], [57.8, 718.0], [57.9, 718.0], [58.0, 718.0], [58.1, 718.0], [58.2, 718.0], [58.3, 719.0], [58.4, 719.0], [58.5, 719.0], [58.6, 719.0], [58.7, 719.0], [58.8, 719.0], [58.9, 719.0], [59.0, 720.0], [59.1, 720.0], [59.2, 720.0], [59.3, 720.0], [59.4, 720.0], [59.5, 720.0], [59.6, 720.0], [59.7, 720.0], [59.8, 721.0], [59.9, 721.0], [60.0, 721.0], [60.1, 721.0], [60.2, 721.0], [60.3, 721.0], [60.4, 721.0], [60.5, 721.0], [60.6, 722.0], [60.7, 722.0], [60.8, 723.0], [60.9, 723.0], [61.0, 723.0], [61.1, 724.0], [61.2, 724.0], [61.3, 724.0], [61.4, 724.0], [61.5, 724.0], [61.6, 724.0], [61.7, 724.0], [61.8, 724.0], [61.9, 724.0], [62.0, 725.0], [62.1, 725.0], [62.2, 725.0], [62.3, 725.0], [62.4, 725.0], [62.5, 725.0], [62.6, 725.0], [62.7, 726.0], [62.8, 726.0], [62.9, 726.0], [63.0, 726.0], [63.1, 726.0], [63.2, 726.0], [63.3, 726.0], [63.4, 727.0], [63.5, 727.0], [63.6, 728.0], [63.7, 728.0], [63.8, 728.0], [63.9, 728.0], [64.0, 728.0], [64.1, 728.0], [64.2, 729.0], [64.3, 729.0], [64.4, 729.0], [64.5, 729.0], [64.6, 729.0], [64.7, 729.0], [64.8, 730.0], [64.9, 730.0], [65.0, 730.0], [65.1, 731.0], [65.2, 731.0], [65.3, 731.0], [65.4, 731.0], [65.5, 731.0], [65.6, 731.0], [65.7, 732.0], [65.8, 732.0], [65.9, 732.0], [66.0, 732.0], [66.1, 732.0], [66.2, 732.0], [66.3, 733.0], [66.4, 733.0], [66.5, 734.0], [66.6, 734.0], [66.7, 735.0], [66.8, 735.0], [66.9, 735.0], [67.0, 735.0], [67.1, 736.0], [67.2, 736.0], [67.3, 736.0], [67.4, 737.0], [67.5, 738.0], [67.6, 738.0], [67.7, 739.0], [67.8, 739.0], [67.9, 739.0], [68.0, 739.0], [68.1, 739.0], [68.2, 739.0], [68.3, 739.0], [68.4, 740.0], [68.5, 740.0], [68.6, 740.0], [68.7, 740.0], [68.8, 740.0], [68.9, 740.0], [69.0, 740.0], [69.1, 741.0], [69.2, 741.0], [69.3, 741.0], [69.4, 741.0], [69.5, 742.0], [69.6, 743.0], [69.7, 743.0], [69.8, 744.0], [69.9, 745.0], [70.0, 745.0], [70.1, 746.0], [70.2, 746.0], [70.3, 746.0], [70.4, 747.0], [70.5, 747.0], [70.6, 747.0], [70.7, 748.0], [70.8, 749.0], [70.9, 751.0], [71.0, 751.0], [71.1, 751.0], [71.2, 752.0], [71.3, 753.0], [71.4, 753.0], [71.5, 753.0], [71.6, 753.0], [71.7, 753.0], [71.8, 753.0], [71.9, 753.0], [72.0, 753.0], [72.1, 755.0], [72.2, 755.0], [72.3, 756.0], [72.4, 756.0], [72.5, 756.0], [72.6, 756.0], [72.7, 756.0], [72.8, 757.0], [72.9, 757.0], [73.0, 757.0], [73.1, 757.0], [73.2, 757.0], [73.3, 759.0], [73.4, 759.0], [73.5, 759.0], [73.6, 759.0], [73.7, 759.0], [73.8, 759.0], [73.9, 760.0], [74.0, 760.0], [74.1, 760.0], [74.2, 760.0], [74.3, 760.0], [74.4, 761.0], [74.5, 761.0], [74.6, 761.0], [74.7, 761.0], [74.8, 761.0], [74.9, 762.0], [75.0, 762.0], [75.1, 763.0], [75.2, 763.0], [75.3, 763.0], [75.4, 763.0], [75.5, 764.0], [75.6, 764.0], [75.7, 764.0], [75.8, 764.0], [75.9, 764.0], [76.0, 764.0], [76.1, 765.0], [76.2, 765.0], [76.3, 765.0], [76.4, 765.0], [76.5, 766.0], [76.6, 766.0], [76.7, 766.0], [76.8, 766.0], [76.9, 766.0], [77.0, 766.0], [77.1, 766.0], [77.2, 766.0], [77.3, 766.0], [77.4, 767.0], [77.5, 767.0], [77.6, 767.0], [77.7, 767.0], [77.8, 767.0], [77.9, 767.0], [78.0, 767.0], [78.1, 767.0], [78.2, 767.0], [78.3, 768.0], [78.4, 768.0], [78.5, 768.0], [78.6, 768.0], [78.7, 768.0], [78.8, 768.0], [78.9, 768.0], [79.0, 769.0], [79.1, 769.0], [79.2, 770.0], [79.3, 771.0], [79.4, 771.0], [79.5, 771.0], [79.6, 771.0], [79.7, 772.0], [79.8, 772.0], [79.9, 773.0], [80.0, 773.0], [80.1, 773.0], [80.2, 773.0], [80.3, 775.0], [80.4, 775.0], [80.5, 775.0], [80.6, 775.0], [80.7, 776.0], [80.8, 776.0], [80.9, 776.0], [81.0, 777.0], [81.1, 777.0], [81.2, 777.0], [81.3, 777.0], [81.4, 777.0], [81.5, 777.0], [81.6, 777.0], [81.7, 778.0], [81.8, 778.0], [81.9, 779.0], [82.0, 779.0], [82.1, 779.0], [82.2, 781.0], [82.3, 781.0], [82.4, 781.0], [82.5, 782.0], [82.6, 783.0], [82.7, 783.0], [82.8, 786.0], [82.9, 787.0], [83.0, 788.0], [83.1, 789.0], [83.2, 791.0], [83.3, 791.0], [83.4, 793.0], [83.5, 794.0], [83.6, 794.0], [83.7, 795.0], [83.8, 796.0], [83.9, 797.0], [84.0, 797.0], [84.1, 797.0], [84.2, 797.0], [84.3, 798.0], [84.4, 798.0], [84.5, 798.0], [84.6, 799.0], [84.7, 799.0], [84.8, 799.0], [84.9, 799.0], [85.0, 800.0], [85.1, 800.0], [85.2, 801.0], [85.3, 803.0], [85.4, 803.0], [85.5, 803.0], [85.6, 804.0], [85.7, 804.0], [85.8, 805.0], [85.9, 806.0], [86.0, 806.0], [86.1, 806.0], [86.2, 806.0], [86.3, 807.0], [86.4, 807.0], [86.5, 809.0], [86.6, 810.0], [86.7, 811.0], [86.8, 813.0], [86.9, 817.0], [87.0, 819.0], [87.1, 823.0], [87.2, 830.0], [87.3, 830.0], [87.4, 830.0], [87.5, 831.0], [87.6, 835.0], [87.7, 835.0], [87.8, 836.0], [87.9, 836.0], [88.0, 836.0], [88.1, 837.0], [88.2, 837.0], [88.3, 838.0], [88.4, 839.0], [88.5, 839.0], [88.6, 843.0], [88.7, 843.0], [88.8, 845.0], [88.9, 847.0], [89.0, 848.0], [89.1, 849.0], [89.2, 849.0], [89.3, 850.0], [89.4, 850.0], [89.5, 850.0], [89.6, 850.0], [89.7, 852.0], [89.8, 853.0], [89.9, 854.0], [90.0, 854.0], [90.1, 856.0], [90.2, 857.0], [90.3, 858.0], [90.4, 858.0], [90.5, 859.0], [90.6, 859.0], [90.7, 860.0], [90.8, 863.0], [90.9, 863.0], [91.0, 865.0], [91.1, 866.0], [91.2, 868.0], [91.3, 876.0], [91.4, 877.0], [91.5, 879.0], [91.6, 880.0], [91.7, 882.0], [91.8, 884.0], [91.9, 884.0], [92.0, 884.0], [92.1, 890.0], [92.2, 893.0], [92.3, 894.0], [92.4, 896.0], [92.5, 900.0], [92.6, 901.0], [92.7, 902.0], [92.8, 902.0], [92.9, 905.0], [93.0, 905.0], [93.1, 905.0], [93.2, 906.0], [93.3, 906.0], [93.4, 906.0], [93.5, 908.0], [93.6, 909.0], [93.7, 909.0], [93.8, 910.0], [93.9, 910.0], [94.0, 910.0], [94.1, 914.0], [94.2, 921.0], [94.3, 923.0], [94.4, 923.0], [94.5, 924.0], [94.6, 926.0], [94.7, 934.0], [94.8, 938.0], [94.9, 941.0], [95.0, 942.0], [95.1, 944.0], [95.2, 949.0], [95.3, 953.0], [95.4, 955.0], [95.5, 962.0], [95.6, 974.0], [95.7, 976.0], [95.8, 983.0], [95.9, 983.0], [96.0, 983.0], [96.1, 983.0], [96.2, 984.0], [96.3, 985.0], [96.4, 995.0], [96.5, 1006.0], [96.6, 1015.0], [96.7, 1018.0], [96.8, 1019.0], [96.9, 1022.0], [97.0, 1023.0], [97.1, 1023.0], [97.2, 1030.0], [97.3, 1032.0], [97.4, 1032.0], [97.5, 1033.0], [97.6, 1033.0], [97.7, 1034.0], [97.8, 1040.0], [97.9, 1041.0], [98.0, 1041.0], [98.1, 1044.0], [98.2, 1045.0], [98.3, 1045.0], [98.4, 1067.0], [98.5, 1067.0], [98.6, 1074.0], [98.7, 1077.0], [98.8, 1080.0], [98.9, 1081.0], [99.0, 1086.0], [99.1, 1100.0], [99.2, 1119.0], [99.3, 1138.0], [99.4, 1142.0], [99.5, 1162.0], [99.6, 1215.0], [99.7, 1272.0], [99.8, 1275.0], [99.9, 1299.0], [100.0, 1299.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 600.0, "maxY": 414.0, "series": [{"data": [[1100.0, 5.0], [600.0, 393.0], [1200.0, 4.0], [700.0, 414.0], [800.0, 71.0], [900.0, 38.0], [1000.0, 25.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 950.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 950.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 950.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.085106382978722, "minX": 1.7799942E12, "maxY": 23.45041322314047, "series": [{"data": [[1.77999426E12, 23.45041322314047], [1.7799942E12, 10.085106382978722], [1.77999432E12, 23.119999999999994]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999432E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 671.6666666666665, "minX": 1.0, "maxY": 1041.0, "series": [{"data": [[2.0, 984.6666666666666], [8.0, 675.7], [9.0, 705.5], [10.0, 696.3333333333333], [11.0, 699.5], [3.0, 745.0], [12.0, 740.3636363636364], [13.0, 717.4615384615385], [14.0, 721.1249999999999], [15.0, 733.6], [4.0, 713.1428571428571], [16.0, 731.9333333333334], [1.0, 1041.0], [17.0, 730.3636363636364], [18.0, 706.5384615384615], [19.0, 716.7272727272727], [5.0, 794.4615384615386], [20.0, 770.6666666666667], [21.0, 700.1], [22.0, 728.9166666666667], [23.0, 722.7142857142859], [6.0, 671.6666666666665], [24.0, 743.9775596072934], [7.0, 690.0000000000001]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[21.3536842105263, 739.1336842105268]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 376.0, "minX": 1.7799942E12, "maxY": 1863.4, "series": [{"data": [[1.77999426E12, 1863.4], [1.7799942E12, 542.85], [1.77999432E12, 1251.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999426E12, 1290.6666666666667], [1.7799942E12, 376.0], [1.77999432E12, 866.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999432E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 712.7872340425532, "minX": 1.7799942E12, "maxY": 748.2623966942147, "series": [{"data": [[1.77999426E12, 748.2623966942147], [1.7799942E12, 712.7872340425532], [1.77999432E12, 736.9692307692306]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999432E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 712.6453900709218, "minX": 1.7799942E12, "maxY": 748.2128099173558, "series": [{"data": [[1.77999426E12, 748.2128099173558], [1.7799942E12, 712.6453900709218], [1.77999432E12, 736.916923076923]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999432E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.024615384615384595, "minX": 1.7799942E12, "maxY": 0.2978723404255317, "series": [{"data": [[1.77999426E12, 0.03719008264462808], [1.7799942E12, 0.2978723404255317], [1.77999432E12, 0.024615384615384595]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999432E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 612.0, "minX": 1.7799942E12, "maxY": 1299.0, "series": [{"data": [[1.77999426E12, 1275.0], [1.7799942E12, 1215.0], [1.77999432E12, 1299.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999426E12, 659.0], [1.7799942E12, 612.0], [1.77999432E12, 662.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999426E12, 887.0], [1.7799942E12, 796.2], [1.77999432E12, 846.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999426E12, 1083.8499999999995], [1.7799942E12, 1174.6800000000012], [1.77999432E12, 1124.4800000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999426E12, 714.0], [1.7799942E12, 697.0], [1.77999432E12, 709.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999426E12, 983.0], [1.7799942E12, 849.8], [1.77999432E12, 923.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 695.0, "minX": 1.0, "maxY": 991.0, "series": [{"data": [[1.0, 869.5], [8.0, 716.0], [9.0, 713.5], [5.0, 991.0], [10.0, 707.0], [11.0, 707.0], [3.0, 710.0], [6.0, 698.0], [12.0, 695.0], [7.0, 696.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 695.0, "minX": 1.0, "maxY": 991.0, "series": [{"data": [[1.0, 866.5], [8.0, 716.0], [9.0, 713.5], [5.0, 991.0], [10.0, 706.5], [11.0, 707.0], [3.0, 710.0], [6.0, 698.0], [12.0, 695.0], [7.0, 696.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.433333333333333, "minX": 1.7799942E12, "maxY": 8.116666666666667, "series": [{"data": [[1.77999426E12, 8.116666666666667], [1.7799942E12, 2.433333333333333], [1.77999432E12, 5.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999432E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.7799942E12, "maxY": 8.066666666666666, "series": [{"data": [[1.77999426E12, 8.066666666666666], [1.7799942E12, 2.35], [1.77999432E12, 5.416666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999432E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.7799942E12, "maxY": 8.066666666666666, "series": [{"data": [[1.77999426E12, 8.066666666666666], [1.7799942E12, 2.35], [1.77999432E12, 5.416666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999432E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.35, "minX": 1.7799942E12, "maxY": 8.066666666666666, "series": [{"data": [[1.77999426E12, 8.066666666666666], [1.7799942E12, 2.35], [1.77999432E12, 5.416666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999432E12, "title": "Total Transactions Per Second"}},
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

