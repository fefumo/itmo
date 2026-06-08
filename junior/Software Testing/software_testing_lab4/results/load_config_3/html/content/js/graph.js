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
        data: {"result": {"minY": 602.0, "minX": 0.0, "maxY": 2826.0, "series": [{"data": [[0.0, 602.0], [0.1, 602.0], [0.2, 603.0], [0.3, 606.0], [0.4, 606.0], [0.5, 606.0], [0.6, 607.0], [0.7, 607.0], [0.8, 609.0], [0.9, 610.0], [1.0, 619.0], [1.1, 619.0], [1.2, 621.0], [1.3, 622.0], [1.4, 622.0], [1.5, 623.0], [1.6, 623.0], [1.7, 624.0], [1.8, 624.0], [1.9, 625.0], [2.0, 625.0], [2.1, 625.0], [2.2, 625.0], [2.3, 625.0], [2.4, 625.0], [2.5, 625.0], [2.6, 625.0], [2.7, 626.0], [2.8, 626.0], [2.9, 626.0], [3.0, 626.0], [3.1, 626.0], [3.2, 627.0], [3.3, 627.0], [3.4, 627.0], [3.5, 627.0], [3.6, 627.0], [3.7, 627.0], [3.8, 627.0], [3.9, 628.0], [4.0, 628.0], [4.1, 628.0], [4.2, 628.0], [4.3, 628.0], [4.4, 628.0], [4.5, 628.0], [4.6, 628.0], [4.7, 628.0], [4.8, 628.0], [4.9, 628.0], [5.0, 628.0], [5.1, 629.0], [5.2, 629.0], [5.3, 629.0], [5.4, 629.0], [5.5, 629.0], [5.6, 629.0], [5.7, 629.0], [5.8, 629.0], [5.9, 629.0], [6.0, 629.0], [6.1, 629.0], [6.2, 629.0], [6.3, 629.0], [6.4, 629.0], [6.5, 629.0], [6.6, 629.0], [6.7, 630.0], [6.8, 630.0], [6.9, 630.0], [7.0, 630.0], [7.1, 630.0], [7.2, 630.0], [7.3, 630.0], [7.4, 630.0], [7.5, 630.0], [7.6, 630.0], [7.7, 630.0], [7.8, 630.0], [7.9, 630.0], [8.0, 630.0], [8.1, 630.0], [8.2, 630.0], [8.3, 630.0], [8.4, 630.0], [8.5, 631.0], [8.6, 631.0], [8.7, 631.0], [8.8, 631.0], [8.9, 631.0], [9.0, 631.0], [9.1, 631.0], [9.2, 631.0], [9.3, 631.0], [9.4, 631.0], [9.5, 632.0], [9.6, 632.0], [9.7, 632.0], [9.8, 632.0], [9.9, 632.0], [10.0, 632.0], [10.1, 632.0], [10.2, 632.0], [10.3, 632.0], [10.4, 632.0], [10.5, 632.0], [10.6, 632.0], [10.7, 632.0], [10.8, 632.0], [10.9, 632.0], [11.0, 632.0], [11.1, 633.0], [11.2, 633.0], [11.3, 633.0], [11.4, 633.0], [11.5, 633.0], [11.6, 633.0], [11.7, 633.0], [11.8, 633.0], [11.9, 633.0], [12.0, 633.0], [12.1, 633.0], [12.2, 633.0], [12.3, 633.0], [12.4, 634.0], [12.5, 634.0], [12.6, 634.0], [12.7, 634.0], [12.8, 634.0], [12.9, 634.0], [13.0, 634.0], [13.1, 635.0], [13.2, 635.0], [13.3, 635.0], [13.4, 635.0], [13.5, 635.0], [13.6, 635.0], [13.7, 635.0], [13.8, 635.0], [13.9, 635.0], [14.0, 635.0], [14.1, 635.0], [14.2, 635.0], [14.3, 635.0], [14.4, 636.0], [14.5, 636.0], [14.6, 636.0], [14.7, 636.0], [14.8, 636.0], [14.9, 636.0], [15.0, 636.0], [15.1, 636.0], [15.2, 636.0], [15.3, 636.0], [15.4, 636.0], [15.5, 636.0], [15.6, 636.0], [15.7, 636.0], [15.8, 637.0], [15.9, 637.0], [16.0, 637.0], [16.1, 637.0], [16.2, 637.0], [16.3, 637.0], [16.4, 637.0], [16.5, 637.0], [16.6, 637.0], [16.7, 637.0], [16.8, 637.0], [16.9, 638.0], [17.0, 638.0], [17.1, 638.0], [17.2, 638.0], [17.3, 638.0], [17.4, 638.0], [17.5, 638.0], [17.6, 638.0], [17.7, 638.0], [17.8, 638.0], [17.9, 638.0], [18.0, 638.0], [18.1, 638.0], [18.2, 638.0], [18.3, 638.0], [18.4, 638.0], [18.5, 638.0], [18.6, 639.0], [18.7, 639.0], [18.8, 639.0], [18.9, 639.0], [19.0, 640.0], [19.1, 640.0], [19.2, 640.0], [19.3, 640.0], [19.4, 640.0], [19.5, 640.0], [19.6, 641.0], [19.7, 641.0], [19.8, 641.0], [19.9, 641.0], [20.0, 641.0], [20.1, 641.0], [20.2, 641.0], [20.3, 641.0], [20.4, 641.0], [20.5, 641.0], [20.6, 642.0], [20.7, 642.0], [20.8, 642.0], [20.9, 642.0], [21.0, 642.0], [21.1, 642.0], [21.2, 643.0], [21.3, 643.0], [21.4, 643.0], [21.5, 643.0], [21.6, 643.0], [21.7, 644.0], [21.8, 644.0], [21.9, 644.0], [22.0, 644.0], [22.1, 644.0], [22.2, 644.0], [22.3, 644.0], [22.4, 644.0], [22.5, 644.0], [22.6, 644.0], [22.7, 645.0], [22.8, 645.0], [22.9, 645.0], [23.0, 645.0], [23.1, 645.0], [23.2, 645.0], [23.3, 645.0], [23.4, 645.0], [23.5, 645.0], [23.6, 645.0], [23.7, 645.0], [23.8, 646.0], [23.9, 646.0], [24.0, 646.0], [24.1, 646.0], [24.2, 646.0], [24.3, 647.0], [24.4, 647.0], [24.5, 647.0], [24.6, 647.0], [24.7, 647.0], [24.8, 647.0], [24.9, 647.0], [25.0, 648.0], [25.1, 648.0], [25.2, 648.0], [25.3, 648.0], [25.4, 648.0], [25.5, 649.0], [25.6, 649.0], [25.7, 649.0], [25.8, 650.0], [25.9, 650.0], [26.0, 650.0], [26.1, 650.0], [26.2, 650.0], [26.3, 651.0], [26.4, 651.0], [26.5, 651.0], [26.6, 651.0], [26.7, 651.0], [26.8, 652.0], [26.9, 652.0], [27.0, 652.0], [27.1, 653.0], [27.2, 653.0], [27.3, 653.0], [27.4, 653.0], [27.5, 654.0], [27.6, 654.0], [27.7, 654.0], [27.8, 654.0], [27.9, 654.0], [28.0, 654.0], [28.1, 655.0], [28.2, 655.0], [28.3, 655.0], [28.4, 655.0], [28.5, 655.0], [28.6, 655.0], [28.7, 655.0], [28.8, 656.0], [28.9, 656.0], [29.0, 656.0], [29.1, 656.0], [29.2, 656.0], [29.3, 656.0], [29.4, 658.0], [29.5, 659.0], [29.6, 659.0], [29.7, 659.0], [29.8, 659.0], [29.9, 659.0], [30.0, 659.0], [30.1, 659.0], [30.2, 659.0], [30.3, 659.0], [30.4, 660.0], [30.5, 660.0], [30.6, 661.0], [30.7, 661.0], [30.8, 664.0], [30.9, 664.0], [31.0, 664.0], [31.1, 664.0], [31.2, 664.0], [31.3, 664.0], [31.4, 665.0], [31.5, 667.0], [31.6, 667.0], [31.7, 667.0], [31.8, 667.0], [31.9, 668.0], [32.0, 668.0], [32.1, 668.0], [32.2, 668.0], [32.3, 669.0], [32.4, 669.0], [32.5, 669.0], [32.6, 669.0], [32.7, 669.0], [32.8, 670.0], [32.9, 670.0], [33.0, 670.0], [33.1, 673.0], [33.2, 674.0], [33.3, 674.0], [33.4, 674.0], [33.5, 675.0], [33.6, 676.0], [33.7, 676.0], [33.8, 677.0], [33.9, 677.0], [34.0, 678.0], [34.1, 678.0], [34.2, 678.0], [34.3, 679.0], [34.4, 679.0], [34.5, 679.0], [34.6, 679.0], [34.7, 679.0], [34.8, 680.0], [34.9, 680.0], [35.0, 680.0], [35.1, 680.0], [35.2, 681.0], [35.3, 684.0], [35.4, 684.0], [35.5, 684.0], [35.6, 685.0], [35.7, 685.0], [35.8, 685.0], [35.9, 686.0], [36.0, 686.0], [36.1, 686.0], [36.2, 686.0], [36.3, 687.0], [36.4, 687.0], [36.5, 689.0], [36.6, 691.0], [36.7, 692.0], [36.8, 692.0], [36.9, 692.0], [37.0, 693.0], [37.1, 693.0], [37.2, 694.0], [37.3, 694.0], [37.4, 695.0], [37.5, 695.0], [37.6, 696.0], [37.7, 698.0], [37.8, 698.0], [37.9, 698.0], [38.0, 698.0], [38.1, 698.0], [38.2, 698.0], [38.3, 698.0], [38.4, 699.0], [38.5, 699.0], [38.6, 700.0], [38.7, 700.0], [38.8, 700.0], [38.9, 703.0], [39.0, 705.0], [39.1, 706.0], [39.2, 706.0], [39.3, 706.0], [39.4, 706.0], [39.5, 706.0], [39.6, 707.0], [39.7, 707.0], [39.8, 707.0], [39.9, 707.0], [40.0, 707.0], [40.1, 707.0], [40.2, 707.0], [40.3, 708.0], [40.4, 708.0], [40.5, 708.0], [40.6, 708.0], [40.7, 708.0], [40.8, 708.0], [40.9, 708.0], [41.0, 708.0], [41.1, 709.0], [41.2, 709.0], [41.3, 709.0], [41.4, 709.0], [41.5, 709.0], [41.6, 709.0], [41.7, 710.0], [41.8, 711.0], [41.9, 711.0], [42.0, 711.0], [42.1, 711.0], [42.2, 711.0], [42.3, 712.0], [42.4, 712.0], [42.5, 712.0], [42.6, 712.0], [42.7, 714.0], [42.8, 714.0], [42.9, 714.0], [43.0, 714.0], [43.1, 714.0], [43.2, 714.0], [43.3, 715.0], [43.4, 715.0], [43.5, 715.0], [43.6, 715.0], [43.7, 715.0], [43.8, 716.0], [43.9, 716.0], [44.0, 716.0], [44.1, 717.0], [44.2, 717.0], [44.3, 717.0], [44.4, 717.0], [44.5, 718.0], [44.6, 718.0], [44.7, 718.0], [44.8, 718.0], [44.9, 718.0], [45.0, 718.0], [45.1, 718.0], [45.2, 718.0], [45.3, 718.0], [45.4, 718.0], [45.5, 718.0], [45.6, 718.0], [45.7, 719.0], [45.8, 720.0], [45.9, 720.0], [46.0, 720.0], [46.1, 721.0], [46.2, 721.0], [46.3, 721.0], [46.4, 721.0], [46.5, 722.0], [46.6, 722.0], [46.7, 722.0], [46.8, 723.0], [46.9, 723.0], [47.0, 723.0], [47.1, 723.0], [47.2, 723.0], [47.3, 723.0], [47.4, 723.0], [47.5, 723.0], [47.6, 723.0], [47.7, 723.0], [47.8, 724.0], [47.9, 724.0], [48.0, 724.0], [48.1, 725.0], [48.2, 725.0], [48.3, 725.0], [48.4, 725.0], [48.5, 726.0], [48.6, 726.0], [48.7, 726.0], [48.8, 726.0], [48.9, 726.0], [49.0, 726.0], [49.1, 726.0], [49.2, 726.0], [49.3, 726.0], [49.4, 726.0], [49.5, 727.0], [49.6, 727.0], [49.7, 727.0], [49.8, 728.0], [49.9, 728.0], [50.0, 728.0], [50.1, 729.0], [50.2, 729.0], [50.3, 729.0], [50.4, 729.0], [50.5, 729.0], [50.6, 729.0], [50.7, 729.0], [50.8, 731.0], [50.9, 731.0], [51.0, 731.0], [51.1, 731.0], [51.2, 731.0], [51.3, 732.0], [51.4, 732.0], [51.5, 732.0], [51.6, 732.0], [51.7, 732.0], [51.8, 732.0], [51.9, 732.0], [52.0, 733.0], [52.1, 733.0], [52.2, 733.0], [52.3, 733.0], [52.4, 733.0], [52.5, 733.0], [52.6, 733.0], [52.7, 733.0], [52.8, 733.0], [52.9, 733.0], [53.0, 733.0], [53.1, 733.0], [53.2, 734.0], [53.3, 734.0], [53.4, 734.0], [53.5, 734.0], [53.6, 734.0], [53.7, 735.0], [53.8, 735.0], [53.9, 735.0], [54.0, 736.0], [54.1, 736.0], [54.2, 737.0], [54.3, 737.0], [54.4, 737.0], [54.5, 737.0], [54.6, 738.0], [54.7, 738.0], [54.8, 738.0], [54.9, 739.0], [55.0, 740.0], [55.1, 741.0], [55.2, 741.0], [55.3, 741.0], [55.4, 741.0], [55.5, 741.0], [55.6, 741.0], [55.7, 743.0], [55.8, 743.0], [55.9, 743.0], [56.0, 743.0], [56.1, 743.0], [56.2, 743.0], [56.3, 744.0], [56.4, 744.0], [56.5, 744.0], [56.6, 744.0], [56.7, 745.0], [56.8, 746.0], [56.9, 746.0], [57.0, 747.0], [57.1, 747.0], [57.2, 747.0], [57.3, 748.0], [57.4, 748.0], [57.5, 748.0], [57.6, 749.0], [57.7, 750.0], [57.8, 750.0], [57.9, 750.0], [58.0, 750.0], [58.1, 750.0], [58.2, 750.0], [58.3, 751.0], [58.4, 751.0], [58.5, 751.0], [58.6, 751.0], [58.7, 751.0], [58.8, 752.0], [58.9, 752.0], [59.0, 752.0], [59.1, 752.0], [59.2, 752.0], [59.3, 754.0], [59.4, 754.0], [59.5, 755.0], [59.6, 755.0], [59.7, 755.0], [59.8, 755.0], [59.9, 755.0], [60.0, 755.0], [60.1, 755.0], [60.2, 755.0], [60.3, 755.0], [60.4, 756.0], [60.5, 756.0], [60.6, 756.0], [60.7, 757.0], [60.8, 757.0], [60.9, 757.0], [61.0, 757.0], [61.1, 758.0], [61.2, 758.0], [61.3, 758.0], [61.4, 759.0], [61.5, 759.0], [61.6, 759.0], [61.7, 759.0], [61.8, 760.0], [61.9, 761.0], [62.0, 761.0], [62.1, 761.0], [62.2, 761.0], [62.3, 761.0], [62.4, 761.0], [62.5, 762.0], [62.6, 762.0], [62.7, 762.0], [62.8, 762.0], [62.9, 762.0], [63.0, 762.0], [63.1, 762.0], [63.2, 762.0], [63.3, 762.0], [63.4, 763.0], [63.5, 764.0], [63.6, 764.0], [63.7, 764.0], [63.8, 764.0], [63.9, 764.0], [64.0, 764.0], [64.1, 764.0], [64.2, 764.0], [64.3, 764.0], [64.4, 764.0], [64.5, 764.0], [64.6, 765.0], [64.7, 765.0], [64.8, 765.0], [64.9, 765.0], [65.0, 765.0], [65.1, 765.0], [65.2, 765.0], [65.3, 765.0], [65.4, 765.0], [65.5, 765.0], [65.6, 765.0], [65.7, 765.0], [65.8, 766.0], [65.9, 766.0], [66.0, 766.0], [66.1, 766.0], [66.2, 767.0], [66.3, 767.0], [66.4, 767.0], [66.5, 767.0], [66.6, 767.0], [66.7, 767.0], [66.8, 768.0], [66.9, 768.0], [67.0, 768.0], [67.1, 768.0], [67.2, 768.0], [67.3, 769.0], [67.4, 769.0], [67.5, 769.0], [67.6, 769.0], [67.7, 769.0], [67.8, 770.0], [67.9, 770.0], [68.0, 771.0], [68.1, 771.0], [68.2, 771.0], [68.3, 771.0], [68.4, 771.0], [68.5, 772.0], [68.6, 772.0], [68.7, 772.0], [68.8, 772.0], [68.9, 775.0], [69.0, 776.0], [69.1, 776.0], [69.2, 777.0], [69.3, 777.0], [69.4, 777.0], [69.5, 777.0], [69.6, 778.0], [69.7, 778.0], [69.8, 778.0], [69.9, 779.0], [70.0, 780.0], [70.1, 780.0], [70.2, 780.0], [70.3, 781.0], [70.4, 781.0], [70.5, 781.0], [70.6, 781.0], [70.7, 781.0], [70.8, 781.0], [70.9, 782.0], [71.0, 782.0], [71.1, 782.0], [71.2, 783.0], [71.3, 784.0], [71.4, 785.0], [71.5, 785.0], [71.6, 785.0], [71.7, 785.0], [71.8, 785.0], [71.9, 786.0], [72.0, 786.0], [72.1, 786.0], [72.2, 786.0], [72.3, 787.0], [72.4, 789.0], [72.5, 789.0], [72.6, 791.0], [72.7, 791.0], [72.8, 791.0], [72.9, 792.0], [73.0, 793.0], [73.1, 794.0], [73.2, 794.0], [73.3, 794.0], [73.4, 794.0], [73.5, 794.0], [73.6, 794.0], [73.7, 795.0], [73.8, 796.0], [73.9, 796.0], [74.0, 796.0], [74.1, 796.0], [74.2, 796.0], [74.3, 797.0], [74.4, 798.0], [74.5, 798.0], [74.6, 799.0], [74.7, 802.0], [74.8, 802.0], [74.9, 802.0], [75.0, 802.0], [75.1, 803.0], [75.2, 803.0], [75.3, 803.0], [75.4, 804.0], [75.5, 804.0], [75.6, 804.0], [75.7, 805.0], [75.8, 806.0], [75.9, 806.0], [76.0, 806.0], [76.1, 806.0], [76.2, 806.0], [76.3, 808.0], [76.4, 809.0], [76.5, 809.0], [76.6, 809.0], [76.7, 809.0], [76.8, 811.0], [76.9, 811.0], [77.0, 812.0], [77.1, 813.0], [77.2, 813.0], [77.3, 813.0], [77.4, 813.0], [77.5, 813.0], [77.6, 813.0], [77.7, 813.0], [77.8, 817.0], [77.9, 817.0], [78.0, 818.0], [78.1, 818.0], [78.2, 824.0], [78.3, 824.0], [78.4, 825.0], [78.5, 826.0], [78.6, 826.0], [78.7, 827.0], [78.8, 828.0], [78.9, 829.0], [79.0, 829.0], [79.1, 833.0], [79.2, 833.0], [79.3, 833.0], [79.4, 834.0], [79.5, 838.0], [79.6, 838.0], [79.7, 839.0], [79.8, 842.0], [79.9, 843.0], [80.0, 843.0], [80.1, 846.0], [80.2, 846.0], [80.3, 846.0], [80.4, 846.0], [80.5, 847.0], [80.6, 848.0], [80.7, 848.0], [80.8, 848.0], [80.9, 850.0], [81.0, 850.0], [81.1, 850.0], [81.2, 861.0], [81.3, 861.0], [81.4, 865.0], [81.5, 868.0], [81.6, 876.0], [81.7, 876.0], [81.8, 878.0], [81.9, 878.0], [82.0, 878.0], [82.1, 880.0], [82.2, 881.0], [82.3, 881.0], [82.4, 881.0], [82.5, 881.0], [82.6, 881.0], [82.7, 881.0], [82.8, 882.0], [82.9, 882.0], [83.0, 882.0], [83.1, 883.0], [83.2, 883.0], [83.3, 883.0], [83.4, 883.0], [83.5, 883.0], [83.6, 890.0], [83.7, 890.0], [83.8, 890.0], [83.9, 890.0], [84.0, 893.0], [84.1, 893.0], [84.2, 896.0], [84.3, 896.0], [84.4, 896.0], [84.5, 897.0], [84.6, 897.0], [84.7, 897.0], [84.8, 897.0], [84.9, 900.0], [85.0, 902.0], [85.1, 902.0], [85.2, 904.0], [85.3, 904.0], [85.4, 904.0], [85.5, 904.0], [85.6, 908.0], [85.7, 911.0], [85.8, 911.0], [85.9, 918.0], [86.0, 924.0], [86.1, 924.0], [86.2, 924.0], [86.3, 929.0], [86.4, 929.0], [86.5, 930.0], [86.6, 930.0], [86.7, 932.0], [86.8, 932.0], [86.9, 935.0], [87.0, 938.0], [87.1, 938.0], [87.2, 938.0], [87.3, 948.0], [87.4, 959.0], [87.5, 959.0], [87.6, 967.0], [87.7, 973.0], [87.8, 973.0], [87.9, 976.0], [88.0, 979.0], [88.1, 979.0], [88.2, 987.0], [88.3, 1007.0], [88.4, 1011.0], [88.5, 1011.0], [88.6, 1011.0], [88.7, 1012.0], [88.8, 1012.0], [88.9, 1013.0], [89.0, 1021.0], [89.1, 1022.0], [89.2, 1022.0], [89.3, 1022.0], [89.4, 1030.0], [89.5, 1030.0], [89.6, 1035.0], [89.7, 1035.0], [89.8, 1035.0], [89.9, 1038.0], [90.0, 1041.0], [90.1, 1044.0], [90.2, 1044.0], [90.3, 1044.0], [90.4, 1048.0], [90.5, 1048.0], [90.6, 1049.0], [90.7, 1050.0], [90.8, 1052.0], [90.9, 1052.0], [91.0, 1057.0], [91.1, 1062.0], [91.2, 1062.0], [91.3, 1063.0], [91.4, 1068.0], [91.5, 1068.0], [91.6, 1076.0], [91.7, 1076.0], [91.8, 1076.0], [91.9, 1076.0], [92.0, 1076.0], [92.1, 1078.0], [92.2, 1078.0], [92.3, 1079.0], [92.4, 1087.0], [92.5, 1087.0], [92.6, 1087.0], [92.7, 1097.0], [92.8, 1098.0], [92.9, 1098.0], [93.0, 1108.0], [93.1, 1116.0], [93.2, 1116.0], [93.3, 1132.0], [93.4, 1146.0], [93.5, 1147.0], [93.6, 1147.0], [93.7, 1147.0], [93.8, 1147.0], [93.9, 1147.0], [94.0, 1148.0], [94.1, 1177.0], [94.2, 1180.0], [94.3, 1180.0], [94.4, 1185.0], [94.5, 1190.0], [94.6, 1190.0], [94.7, 1200.0], [94.8, 1202.0], [94.9, 1202.0], [95.0, 1204.0], [95.1, 1208.0], [95.2, 1209.0], [95.3, 1209.0], [95.4, 1215.0], [95.5, 1239.0], [95.6, 1239.0], [95.7, 1246.0], [95.8, 1253.0], [95.9, 1270.0], [96.0, 1270.0], [96.1, 1291.0], [96.2, 1316.0], [96.3, 1316.0], [96.4, 1326.0], [96.5, 1328.0], [96.6, 1328.0], [96.7, 1329.0], [96.8, 1340.0], [96.9, 1349.0], [97.0, 1349.0], [97.1, 1357.0], [97.2, 1357.0], [97.3, 1357.0], [97.4, 1381.0], [97.5, 1438.0], [97.6, 1446.0], [97.7, 1446.0], [97.8, 1460.0], [97.9, 1467.0], [98.0, 1467.0], [98.1, 1526.0], [98.2, 1558.0], [98.3, 1558.0], [98.4, 1577.0], [98.5, 1577.0], [98.6, 1589.0], [98.7, 1589.0], [98.8, 1669.0], [98.9, 1697.0], [99.0, 1697.0], [99.1, 1712.0], [99.2, 1713.0], [99.3, 1728.0], [99.4, 1728.0], [99.5, 1920.0], [99.6, 1921.0], [99.7, 1921.0], [99.8, 2688.0], [99.9, 2826.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 272.0, "series": [{"data": [[600.0, 272.0], [2600.0, 1.0], [700.0, 255.0], [2800.0, 1.0], [800.0, 72.0], [900.0, 24.0], [1000.0, 33.0], [1100.0, 12.0], [1200.0, 11.0], [1300.0, 9.0], [1400.0, 4.0], [1500.0, 5.0], [1600.0, 2.0], [1700.0, 3.0], [1900.0, 2.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 692.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 692.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 14.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.7916666666666665, "minX": 1.77999264E12, "maxY": 12.0, "series": [{"data": [[1.7799927E12, 9.426829268292684], [1.77999264E12, 2.7916666666666665], [1.77999282E12, 11.505747126436786], [1.77999276E12, 12.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999282E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 683.0909090909091, "minX": 1.0, "maxY": 878.8, "series": [{"data": [[1.0, 878.8], [2.0, 721.3333333333334], [4.0, 683.0909090909091], [8.0, 748.7916666666666], [9.0, 824.2105263157895], [5.0, 699.2173913043479], [10.0, 793.809523809524], [11.0, 800.9545454545455], [3.0, 787.2631578947367], [6.0, 711.6190476190476], [12.0, 800.8684210526311], [7.0, 714.6190476190477]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[10.355524079320123, 785.8130311614738]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 128.0, "minX": 1.77999264E12, "maxY": 947.1, "series": [{"data": [[1.7799927E12, 947.1], [1.77999264E12, 184.8], [1.77999282E12, 669.9], [1.77999276E12, 916.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7799927E12, 656.0], [1.77999264E12, 128.0], [1.77999282E12, 464.0], [1.77999276E12, 634.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999282E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 761.2083333333331, "minX": 1.77999264E12, "maxY": 811.3949579831936, "series": [{"data": [[1.7799927E12, 769.50406504065], [1.77999264E12, 761.2083333333331], [1.77999282E12, 780.6666666666663], [1.77999276E12, 811.3949579831936]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999282E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 761.0416666666666, "minX": 1.77999264E12, "maxY": 811.3319327731094, "series": [{"data": [[1.7799927E12, 769.4268292682923], [1.77999264E12, 761.0416666666666], [1.77999282E12, 780.6379310344829], [1.77999276E12, 811.3319327731094]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999282E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05691056910569105, "minX": 1.77999264E12, "maxY": 0.7083333333333335, "series": [{"data": [[1.7799927E12, 0.05691056910569105], [1.77999264E12, 0.7083333333333335], [1.77999282E12, 0.05747126436781609], [1.77999276E12, 0.06302521008403364]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999282E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 602.0, "minX": 1.77999264E12, "maxY": 2826.0, "series": [{"data": [[1.7799927E12, 1713.0], [1.77999264E12, 1349.0], [1.77999282E12, 2826.0], [1.77999276E12, 1921.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7799927E12, 619.0], [1.77999264E12, 602.0], [1.77999282E12, 622.0], [1.77999276E12, 625.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7799927E12, 987.4000000000003], [1.77999264E12, 1093.0], [1.77999282E12, 938.0], [1.77999276E12, 1110.3999999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7799927E12, 1596.8500000000004], [1.77999264E12, 1349.0], [1.77999282E12, 2722.5], [1.77999276E12, 1845.1199999999972]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7799927E12, 731.0], [1.77999264E12, 708.0], [1.77999282E12, 718.0], [1.77999276E12, 747.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7799927E12, 1128.849999999999], [1.77999264E12, 1287.6499999999999], [1.77999282E12, 1203.5], [1.77999276E12, 1331.599999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999282E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 706.5, "minX": 1.0, "maxY": 833.0, "series": [{"data": [[1.0, 833.0], [2.0, 819.5], [4.0, 734.0], [8.0, 710.5], [5.0, 733.5], [3.0, 721.0], [6.0, 749.0], [7.0, 706.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 706.5, "minX": 1.0, "maxY": 833.0, "series": [{"data": [[1.0, 833.0], [2.0, 819.5], [4.0, 734.0], [8.0, 710.5], [5.0, 733.5], [3.0, 721.0], [6.0, 749.0], [7.0, 706.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.77999264E12, "maxY": 4.066666666666666, "series": [{"data": [[1.7799927E12, 4.066666666666666], [1.77999264E12, 0.85], [1.77999282E12, 2.85], [1.77999276E12, 4.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999282E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.77999264E12, "maxY": 4.1, "series": [{"data": [[1.7799927E12, 4.1], [1.77999264E12, 0.8], [1.77999282E12, 2.9], [1.77999276E12, 3.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999282E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.77999264E12, "maxY": 4.1, "series": [{"data": [[1.7799927E12, 4.1], [1.77999264E12, 0.8], [1.77999282E12, 2.9], [1.77999276E12, 3.966666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999282E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.77999264E12, "maxY": 4.1, "series": [{"data": [[1.7799927E12, 4.1], [1.77999264E12, 0.8], [1.77999282E12, 2.9], [1.77999276E12, 3.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999282E12, "title": "Total Transactions Per Second"}},
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

