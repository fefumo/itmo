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
        data: {"result": {"minY": 603.0, "minX": 0.0, "maxY": 1475.0, "series": [{"data": [[0.0, 603.0], [0.1, 603.0], [0.2, 610.0], [0.3, 610.0], [0.4, 611.0], [0.5, 611.0], [0.6, 613.0], [0.7, 613.0], [0.8, 613.0], [0.9, 617.0], [1.0, 617.0], [1.1, 632.0], [1.2, 632.0], [1.3, 632.0], [1.4, 632.0], [1.5, 632.0], [1.6, 632.0], [1.7, 632.0], [1.8, 632.0], [1.9, 632.0], [2.0, 632.0], [2.1, 633.0], [2.2, 633.0], [2.3, 633.0], [2.4, 634.0], [2.5, 634.0], [2.6, 634.0], [2.7, 634.0], [2.8, 634.0], [2.9, 634.0], [3.0, 634.0], [3.1, 634.0], [3.2, 634.0], [3.3, 634.0], [3.4, 634.0], [3.5, 634.0], [3.6, 634.0], [3.7, 634.0], [3.8, 634.0], [3.9, 634.0], [4.0, 634.0], [4.1, 634.0], [4.2, 634.0], [4.3, 635.0], [4.4, 635.0], [4.5, 635.0], [4.6, 635.0], [4.7, 635.0], [4.8, 635.0], [4.9, 635.0], [5.0, 635.0], [5.1, 635.0], [5.2, 635.0], [5.3, 636.0], [5.4, 636.0], [5.5, 636.0], [5.6, 636.0], [5.7, 636.0], [5.8, 636.0], [5.9, 636.0], [6.0, 636.0], [6.1, 636.0], [6.2, 636.0], [6.3, 636.0], [6.4, 636.0], [6.5, 636.0], [6.6, 636.0], [6.7, 636.0], [6.8, 636.0], [6.9, 636.0], [7.0, 636.0], [7.1, 636.0], [7.2, 636.0], [7.3, 636.0], [7.4, 636.0], [7.5, 636.0], [7.6, 636.0], [7.7, 636.0], [7.8, 637.0], [7.9, 637.0], [8.0, 637.0], [8.1, 637.0], [8.2, 638.0], [8.3, 638.0], [8.4, 638.0], [8.5, 638.0], [8.6, 638.0], [8.7, 638.0], [8.8, 639.0], [8.9, 639.0], [9.0, 639.0], [9.1, 639.0], [9.2, 639.0], [9.3, 639.0], [9.4, 639.0], [9.5, 639.0], [9.6, 639.0], [9.7, 639.0], [9.8, 640.0], [9.9, 640.0], [10.0, 640.0], [10.1, 640.0], [10.2, 640.0], [10.3, 640.0], [10.4, 640.0], [10.5, 640.0], [10.6, 640.0], [10.7, 641.0], [10.8, 641.0], [10.9, 641.0], [11.0, 641.0], [11.1, 641.0], [11.2, 641.0], [11.3, 641.0], [11.4, 641.0], [11.5, 641.0], [11.6, 641.0], [11.7, 641.0], [11.8, 641.0], [11.9, 641.0], [12.0, 642.0], [12.1, 642.0], [12.2, 642.0], [12.3, 642.0], [12.4, 642.0], [12.5, 642.0], [12.6, 642.0], [12.7, 643.0], [12.8, 643.0], [12.9, 643.0], [13.0, 643.0], [13.1, 643.0], [13.2, 643.0], [13.3, 643.0], [13.4, 643.0], [13.5, 643.0], [13.6, 643.0], [13.7, 644.0], [13.8, 644.0], [13.9, 644.0], [14.0, 644.0], [14.1, 644.0], [14.2, 644.0], [14.3, 644.0], [14.4, 645.0], [14.5, 645.0], [14.6, 645.0], [14.7, 645.0], [14.8, 645.0], [14.9, 645.0], [15.0, 645.0], [15.1, 645.0], [15.2, 645.0], [15.3, 645.0], [15.4, 646.0], [15.5, 646.0], [15.6, 646.0], [15.7, 646.0], [15.8, 646.0], [15.9, 646.0], [16.0, 646.0], [16.1, 646.0], [16.2, 646.0], [16.3, 646.0], [16.4, 646.0], [16.5, 646.0], [16.6, 646.0], [16.7, 646.0], [16.8, 646.0], [16.9, 647.0], [17.0, 647.0], [17.1, 647.0], [17.2, 647.0], [17.3, 647.0], [17.4, 647.0], [17.5, 647.0], [17.6, 647.0], [17.7, 647.0], [17.8, 647.0], [17.9, 647.0], [18.0, 647.0], [18.1, 647.0], [18.2, 647.0], [18.3, 647.0], [18.4, 647.0], [18.5, 647.0], [18.6, 648.0], [18.7, 648.0], [18.8, 648.0], [18.9, 648.0], [19.0, 648.0], [19.1, 648.0], [19.2, 648.0], [19.3, 648.0], [19.4, 648.0], [19.5, 648.0], [19.6, 648.0], [19.7, 648.0], [19.8, 649.0], [19.9, 649.0], [20.0, 649.0], [20.1, 649.0], [20.2, 649.0], [20.3, 649.0], [20.4, 649.0], [20.5, 649.0], [20.6, 649.0], [20.7, 649.0], [20.8, 649.0], [20.9, 649.0], [21.0, 649.0], [21.1, 649.0], [21.2, 650.0], [21.3, 650.0], [21.4, 650.0], [21.5, 650.0], [21.6, 650.0], [21.7, 650.0], [21.8, 650.0], [21.9, 650.0], [22.0, 651.0], [22.1, 651.0], [22.2, 651.0], [22.3, 651.0], [22.4, 651.0], [22.5, 651.0], [22.6, 651.0], [22.7, 651.0], [22.8, 651.0], [22.9, 652.0], [23.0, 652.0], [23.1, 652.0], [23.2, 652.0], [23.3, 652.0], [23.4, 652.0], [23.5, 652.0], [23.6, 652.0], [23.7, 652.0], [23.8, 652.0], [23.9, 652.0], [24.0, 652.0], [24.1, 652.0], [24.2, 653.0], [24.3, 653.0], [24.4, 654.0], [24.5, 654.0], [24.6, 654.0], [24.7, 655.0], [24.8, 655.0], [24.9, 655.0], [25.0, 655.0], [25.1, 655.0], [25.2, 656.0], [25.3, 656.0], [25.4, 656.0], [25.5, 656.0], [25.6, 656.0], [25.7, 656.0], [25.8, 656.0], [25.9, 657.0], [26.0, 657.0], [26.1, 657.0], [26.2, 657.0], [26.3, 657.0], [26.4, 658.0], [26.5, 658.0], [26.6, 658.0], [26.7, 658.0], [26.8, 658.0], [26.9, 658.0], [27.0, 658.0], [27.1, 658.0], [27.2, 659.0], [27.3, 659.0], [27.4, 659.0], [27.5, 659.0], [27.6, 659.0], [27.7, 659.0], [27.8, 659.0], [27.9, 659.0], [28.0, 659.0], [28.1, 659.0], [28.2, 659.0], [28.3, 659.0], [28.4, 660.0], [28.5, 660.0], [28.6, 660.0], [28.7, 660.0], [28.8, 660.0], [28.9, 660.0], [29.0, 660.0], [29.1, 660.0], [29.2, 660.0], [29.3, 660.0], [29.4, 660.0], [29.5, 660.0], [29.6, 661.0], [29.7, 661.0], [29.8, 661.0], [29.9, 661.0], [30.0, 661.0], [30.1, 662.0], [30.2, 662.0], [30.3, 663.0], [30.4, 663.0], [30.5, 664.0], [30.6, 665.0], [30.7, 665.0], [30.8, 665.0], [30.9, 665.0], [31.0, 666.0], [31.1, 666.0], [31.2, 666.0], [31.3, 666.0], [31.4, 666.0], [31.5, 666.0], [31.6, 667.0], [31.7, 667.0], [31.8, 667.0], [31.9, 667.0], [32.0, 667.0], [32.1, 668.0], [32.2, 668.0], [32.3, 669.0], [32.4, 669.0], [32.5, 669.0], [32.6, 669.0], [32.7, 670.0], [32.8, 671.0], [32.9, 671.0], [33.0, 673.0], [33.1, 673.0], [33.2, 673.0], [33.3, 674.0], [33.4, 674.0], [33.5, 674.0], [33.6, 674.0], [33.7, 675.0], [33.8, 676.0], [33.9, 676.0], [34.0, 678.0], [34.1, 678.0], [34.2, 678.0], [34.3, 678.0], [34.4, 678.0], [34.5, 678.0], [34.6, 678.0], [34.7, 678.0], [34.8, 679.0], [34.9, 679.0], [35.0, 680.0], [35.1, 680.0], [35.2, 682.0], [35.3, 682.0], [35.4, 682.0], [35.5, 683.0], [35.6, 683.0], [35.7, 683.0], [35.8, 683.0], [35.9, 684.0], [36.0, 685.0], [36.1, 685.0], [36.2, 685.0], [36.3, 685.0], [36.4, 685.0], [36.5, 687.0], [36.6, 687.0], [36.7, 687.0], [36.8, 687.0], [36.9, 687.0], [37.0, 688.0], [37.1, 688.0], [37.2, 688.0], [37.3, 688.0], [37.4, 688.0], [37.5, 688.0], [37.6, 690.0], [37.7, 691.0], [37.8, 691.0], [37.9, 691.0], [38.0, 691.0], [38.1, 691.0], [38.2, 692.0], [38.3, 692.0], [38.4, 692.0], [38.5, 692.0], [38.6, 693.0], [38.7, 693.0], [38.8, 693.0], [38.9, 693.0], [39.0, 693.0], [39.1, 694.0], [39.2, 694.0], [39.3, 694.0], [39.4, 694.0], [39.5, 694.0], [39.6, 695.0], [39.7, 695.0], [39.8, 695.0], [39.9, 697.0], [40.0, 697.0], [40.1, 699.0], [40.2, 699.0], [40.3, 699.0], [40.4, 700.0], [40.5, 700.0], [40.6, 700.0], [40.7, 700.0], [40.8, 701.0], [40.9, 701.0], [41.0, 701.0], [41.1, 703.0], [41.2, 703.0], [41.3, 703.0], [41.4, 704.0], [41.5, 704.0], [41.6, 704.0], [41.7, 704.0], [41.8, 704.0], [41.9, 705.0], [42.0, 705.0], [42.1, 705.0], [42.2, 705.0], [42.3, 705.0], [42.4, 705.0], [42.5, 705.0], [42.6, 706.0], [42.7, 706.0], [42.8, 706.0], [42.9, 706.0], [43.0, 706.0], [43.1, 707.0], [43.2, 707.0], [43.3, 707.0], [43.4, 707.0], [43.5, 707.0], [43.6, 708.0], [43.7, 708.0], [43.8, 708.0], [43.9, 708.0], [44.0, 708.0], [44.1, 708.0], [44.2, 708.0], [44.3, 709.0], [44.4, 709.0], [44.5, 709.0], [44.6, 710.0], [44.7, 710.0], [44.8, 710.0], [44.9, 710.0], [45.0, 711.0], [45.1, 711.0], [45.2, 712.0], [45.3, 712.0], [45.4, 712.0], [45.5, 716.0], [45.6, 716.0], [45.7, 717.0], [45.8, 717.0], [45.9, 717.0], [46.0, 717.0], [46.1, 717.0], [46.2, 717.0], [46.3, 717.0], [46.4, 717.0], [46.5, 717.0], [46.6, 717.0], [46.7, 719.0], [46.8, 720.0], [46.9, 720.0], [47.0, 720.0], [47.1, 720.0], [47.2, 720.0], [47.3, 722.0], [47.4, 722.0], [47.5, 722.0], [47.6, 722.0], [47.7, 722.0], [47.8, 722.0], [47.9, 723.0], [48.0, 724.0], [48.1, 724.0], [48.2, 724.0], [48.3, 724.0], [48.4, 725.0], [48.5, 726.0], [48.6, 726.0], [48.7, 726.0], [48.8, 726.0], [48.9, 728.0], [49.0, 728.0], [49.1, 728.0], [49.2, 728.0], [49.3, 728.0], [49.4, 728.0], [49.5, 728.0], [49.6, 728.0], [49.7, 729.0], [49.8, 729.0], [49.9, 729.0], [50.0, 729.0], [50.1, 729.0], [50.2, 729.0], [50.3, 729.0], [50.4, 729.0], [50.5, 729.0], [50.6, 730.0], [50.7, 730.0], [50.8, 730.0], [50.9, 730.0], [51.0, 730.0], [51.1, 730.0], [51.2, 730.0], [51.3, 730.0], [51.4, 731.0], [51.5, 731.0], [51.6, 731.0], [51.7, 731.0], [51.8, 731.0], [51.9, 732.0], [52.0, 732.0], [52.1, 732.0], [52.2, 732.0], [52.3, 732.0], [52.4, 732.0], [52.5, 732.0], [52.6, 732.0], [52.7, 732.0], [52.8, 732.0], [52.9, 732.0], [53.0, 732.0], [53.1, 732.0], [53.2, 732.0], [53.3, 732.0], [53.4, 732.0], [53.5, 732.0], [53.6, 732.0], [53.7, 732.0], [53.8, 732.0], [53.9, 732.0], [54.0, 732.0], [54.1, 733.0], [54.2, 733.0], [54.3, 733.0], [54.4, 733.0], [54.5, 733.0], [54.6, 733.0], [54.7, 733.0], [54.8, 733.0], [54.9, 733.0], [55.0, 733.0], [55.1, 733.0], [55.2, 733.0], [55.3, 734.0], [55.4, 734.0], [55.5, 734.0], [55.6, 734.0], [55.7, 734.0], [55.8, 734.0], [55.9, 734.0], [56.0, 734.0], [56.1, 734.0], [56.2, 734.0], [56.3, 735.0], [56.4, 735.0], [56.5, 735.0], [56.6, 735.0], [56.7, 735.0], [56.8, 735.0], [56.9, 735.0], [57.0, 735.0], [57.1, 735.0], [57.2, 735.0], [57.3, 736.0], [57.4, 736.0], [57.5, 736.0], [57.6, 736.0], [57.7, 736.0], [57.8, 736.0], [57.9, 736.0], [58.0, 736.0], [58.1, 736.0], [58.2, 736.0], [58.3, 736.0], [58.4, 736.0], [58.5, 737.0], [58.6, 737.0], [58.7, 737.0], [58.8, 737.0], [58.9, 737.0], [59.0, 738.0], [59.1, 738.0], [59.2, 738.0], [59.3, 738.0], [59.4, 738.0], [59.5, 739.0], [59.6, 739.0], [59.7, 739.0], [59.8, 739.0], [59.9, 739.0], [60.0, 739.0], [60.1, 739.0], [60.2, 740.0], [60.3, 740.0], [60.4, 741.0], [60.5, 741.0], [60.6, 741.0], [60.7, 741.0], [60.8, 741.0], [60.9, 741.0], [61.0, 741.0], [61.1, 741.0], [61.2, 741.0], [61.3, 741.0], [61.4, 742.0], [61.5, 742.0], [61.6, 742.0], [61.7, 742.0], [61.8, 742.0], [61.9, 742.0], [62.0, 742.0], [62.1, 742.0], [62.2, 743.0], [62.3, 743.0], [62.4, 743.0], [62.5, 743.0], [62.6, 743.0], [62.7, 743.0], [62.8, 743.0], [62.9, 744.0], [63.0, 744.0], [63.1, 744.0], [63.2, 744.0], [63.3, 744.0], [63.4, 744.0], [63.5, 744.0], [63.6, 745.0], [63.7, 746.0], [63.8, 746.0], [63.9, 746.0], [64.0, 746.0], [64.1, 746.0], [64.2, 746.0], [64.3, 746.0], [64.4, 746.0], [64.5, 746.0], [64.6, 746.0], [64.7, 746.0], [64.8, 746.0], [64.9, 747.0], [65.0, 747.0], [65.1, 747.0], [65.2, 747.0], [65.3, 747.0], [65.4, 747.0], [65.5, 747.0], [65.6, 747.0], [65.7, 747.0], [65.8, 748.0], [65.9, 748.0], [66.0, 748.0], [66.1, 749.0], [66.2, 749.0], [66.3, 749.0], [66.4, 751.0], [66.5, 751.0], [66.6, 751.0], [66.7, 751.0], [66.8, 752.0], [66.9, 753.0], [67.0, 753.0], [67.1, 753.0], [67.2, 753.0], [67.3, 754.0], [67.4, 754.0], [67.5, 754.0], [67.6, 754.0], [67.7, 754.0], [67.8, 754.0], [67.9, 754.0], [68.0, 754.0], [68.1, 755.0], [68.2, 755.0], [68.3, 756.0], [68.4, 756.0], [68.5, 757.0], [68.6, 761.0], [68.7, 761.0], [68.8, 761.0], [68.9, 761.0], [69.0, 761.0], [69.1, 763.0], [69.2, 763.0], [69.3, 765.0], [69.4, 765.0], [69.5, 765.0], [69.6, 767.0], [69.7, 767.0], [69.8, 768.0], [69.9, 768.0], [70.0, 768.0], [70.1, 768.0], [70.2, 773.0], [70.3, 774.0], [70.4, 774.0], [70.5, 778.0], [70.6, 778.0], [70.7, 780.0], [70.8, 781.0], [70.9, 781.0], [71.0, 781.0], [71.1, 781.0], [71.2, 781.0], [71.3, 782.0], [71.4, 782.0], [71.5, 783.0], [71.6, 783.0], [71.7, 783.0], [71.8, 789.0], [71.9, 789.0], [72.0, 789.0], [72.1, 789.0], [72.2, 790.0], [72.3, 790.0], [72.4, 790.0], [72.5, 790.0], [72.6, 790.0], [72.7, 794.0], [72.8, 794.0], [72.9, 794.0], [73.0, 795.0], [73.1, 795.0], [73.2, 796.0], [73.3, 796.0], [73.4, 801.0], [73.5, 801.0], [73.6, 801.0], [73.7, 801.0], [73.8, 801.0], [73.9, 801.0], [74.0, 801.0], [74.1, 801.0], [74.2, 802.0], [74.3, 802.0], [74.4, 805.0], [74.5, 805.0], [74.6, 805.0], [74.7, 809.0], [74.8, 809.0], [74.9, 810.0], [75.0, 810.0], [75.1, 812.0], [75.2, 812.0], [75.3, 812.0], [75.4, 812.0], [75.5, 812.0], [75.6, 814.0], [75.7, 815.0], [75.8, 815.0], [75.9, 816.0], [76.0, 816.0], [76.1, 818.0], [76.2, 821.0], [76.3, 821.0], [76.4, 821.0], [76.5, 821.0], [76.6, 822.0], [76.7, 823.0], [76.8, 823.0], [76.9, 824.0], [77.0, 824.0], [77.1, 825.0], [77.2, 826.0], [77.3, 826.0], [77.4, 827.0], [77.5, 827.0], [77.6, 827.0], [77.7, 827.0], [77.8, 830.0], [77.9, 830.0], [78.0, 830.0], [78.1, 830.0], [78.2, 830.0], [78.3, 831.0], [78.4, 831.0], [78.5, 831.0], [78.6, 831.0], [78.7, 831.0], [78.8, 831.0], [78.9, 833.0], [79.0, 833.0], [79.1, 833.0], [79.2, 833.0], [79.3, 833.0], [79.4, 833.0], [79.5, 833.0], [79.6, 834.0], [79.7, 834.0], [79.8, 835.0], [79.9, 835.0], [80.0, 835.0], [80.1, 836.0], [80.2, 836.0], [80.3, 838.0], [80.4, 838.0], [80.5, 839.0], [80.6, 840.0], [80.7, 840.0], [80.8, 842.0], [80.9, 842.0], [81.0, 844.0], [81.1, 846.0], [81.2, 846.0], [81.3, 847.0], [81.4, 847.0], [81.5, 850.0], [81.6, 850.0], [81.7, 850.0], [81.8, 851.0], [81.9, 851.0], [82.0, 852.0], [82.1, 853.0], [82.2, 853.0], [82.3, 853.0], [82.4, 853.0], [82.5, 854.0], [82.6, 854.0], [82.7, 855.0], [82.8, 855.0], [82.9, 855.0], [83.0, 856.0], [83.1, 856.0], [83.2, 857.0], [83.3, 858.0], [83.4, 858.0], [83.5, 858.0], [83.6, 858.0], [83.7, 860.0], [83.8, 861.0], [83.9, 861.0], [84.0, 861.0], [84.1, 861.0], [84.2, 863.0], [84.3, 864.0], [84.4, 864.0], [84.5, 866.0], [84.6, 866.0], [84.7, 866.0], [84.8, 868.0], [84.9, 868.0], [85.0, 872.0], [85.1, 872.0], [85.2, 876.0], [85.3, 876.0], [85.4, 880.0], [85.5, 883.0], [85.6, 883.0], [85.7, 883.0], [85.8, 883.0], [85.9, 883.0], [86.0, 886.0], [86.1, 886.0], [86.2, 887.0], [86.3, 887.0], [86.4, 888.0], [86.5, 888.0], [86.6, 888.0], [86.7, 895.0], [86.8, 895.0], [86.9, 902.0], [87.0, 902.0], [87.1, 902.0], [87.2, 906.0], [87.3, 906.0], [87.4, 907.0], [87.5, 907.0], [87.6, 907.0], [87.7, 907.0], [87.8, 907.0], [87.9, 907.0], [88.0, 907.0], [88.1, 908.0], [88.2, 913.0], [88.3, 913.0], [88.4, 915.0], [88.5, 915.0], [88.6, 916.0], [88.7, 916.0], [88.8, 916.0], [88.9, 919.0], [89.0, 919.0], [89.1, 919.0], [89.2, 922.0], [89.3, 922.0], [89.4, 922.0], [89.5, 922.0], [89.6, 926.0], [89.7, 926.0], [89.8, 926.0], [89.9, 927.0], [90.0, 927.0], [90.1, 928.0], [90.2, 928.0], [90.3, 928.0], [90.4, 928.0], [90.5, 928.0], [90.6, 929.0], [90.7, 929.0], [90.8, 930.0], [90.9, 935.0], [91.0, 935.0], [91.1, 940.0], [91.2, 940.0], [91.3, 940.0], [91.4, 952.0], [91.5, 952.0], [91.6, 952.0], [91.7, 952.0], [91.8, 953.0], [91.9, 961.0], [92.0, 961.0], [92.1, 961.0], [92.2, 961.0], [92.3, 962.0], [92.4, 962.0], [92.5, 962.0], [92.6, 970.0], [92.7, 970.0], [92.8, 970.0], [92.9, 970.0], [93.0, 975.0], [93.1, 975.0], [93.2, 975.0], [93.3, 976.0], [93.4, 976.0], [93.5, 994.0], [93.6, 996.0], [93.7, 996.0], [93.8, 997.0], [93.9, 997.0], [94.0, 999.0], [94.1, 1000.0], [94.2, 1000.0], [94.3, 1014.0], [94.4, 1014.0], [94.5, 1016.0], [94.6, 1017.0], [94.7, 1017.0], [94.8, 1018.0], [94.9, 1018.0], [95.0, 1018.0], [95.1, 1018.0], [95.2, 1021.0], [95.3, 1021.0], [95.4, 1021.0], [95.5, 1022.0], [95.6, 1022.0], [95.7, 1026.0], [95.8, 1028.0], [95.9, 1028.0], [96.0, 1031.0], [96.1, 1031.0], [96.2, 1057.0], [96.3, 1057.0], [96.4, 1057.0], [96.5, 1058.0], [96.6, 1058.0], [96.7, 1066.0], [96.8, 1066.0], [96.9, 1066.0], [97.0, 1076.0], [97.1, 1076.0], [97.2, 1086.0], [97.3, 1101.0], [97.4, 1101.0], [97.5, 1121.0], [97.6, 1121.0], [97.7, 1131.0], [97.8, 1131.0], [97.9, 1147.0], [98.0, 1148.0], [98.1, 1148.0], [98.2, 1152.0], [98.3, 1152.0], [98.4, 1182.0], [98.5, 1182.0], [98.6, 1182.0], [98.7, 1197.0], [98.8, 1197.0], [98.9, 1214.0], [99.0, 1218.0], [99.1, 1218.0], [99.2, 1257.0], [99.3, 1257.0], [99.4, 1257.0], [99.5, 1257.0], [99.6, 1257.0], [99.7, 1321.0], [99.8, 1321.0], [99.9, 1475.0], [100.0, 1475.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 239.0, "series": [{"data": [[1100.0, 9.0], [600.0, 239.0], [1200.0, 5.0], [1300.0, 1.0], [1400.0, 1.0], [700.0, 195.0], [800.0, 80.0], [900.0, 43.0], [1000.0, 19.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 592.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 592.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 592.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.905660377358489, "minX": 1.77999384E12, "maxY": 15.0, "series": [{"data": [[1.77999396E12, 14.233082706766918], [1.7799939E12, 15.0], [1.77999384E12, 9.905660377358489]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999396E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 698.5, "minX": 1.0, "maxY": 1197.0, "series": [{"data": [[2.0, 949.8], [8.0, 698.5], [9.0, 721.1428571428571], [10.0, 796.1818181818182], [11.0, 714.6666666666667], [3.0, 720.625], [12.0, 730.4], [13.0, 819.5384615384617], [14.0, 729.7142857142857], [15.0, 745.2305986696231], [1.0, 1197.0], [4.0, 907.4545454545455], [5.0, 751.2], [6.0, 794.5384615384615], [7.0, 946.5555555555555]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[13.459459459459456, 754.6300675675674]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 354.6666666666667, "minX": 1.77999384E12, "maxY": 1155.0, "series": [{"data": [[1.77999396E12, 512.05], [1.7799939E12, 1155.0], [1.77999384E12, 612.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999396E12, 354.6666666666667], [1.7799939E12, 800.0], [1.77999384E12, 424.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999396E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 742.1503759398493, "minX": 1.77999384E12, "maxY": 783.8113207547169, "series": [{"data": [[1.77999396E12, 742.1503759398493], [1.7799939E12, 744.6966666666669], [1.77999384E12, 783.8113207547169]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999396E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 742.1127819548869, "minX": 1.77999384E12, "maxY": 783.7044025157229, "series": [{"data": [[1.77999396E12, 742.1127819548869], [1.7799939E12, 744.6633333333339], [1.77999384E12, 783.7044025157229]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999396E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999384E12, "maxY": 0.27672955974842783, "series": [{"data": [[1.77999396E12, 0.0], [1.7799939E12, 0.06000000000000002], [1.77999384E12, 0.27672955974842783]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999396E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 603.0, "minX": 1.77999384E12, "maxY": 1475.0, "series": [{"data": [[1.77999396E12, 1147.0], [1.7799939E12, 1257.0], [1.77999384E12, 1475.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999396E12, 632.0], [1.7799939E12, 632.0], [1.77999384E12, 603.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999396E12, 919.6], [1.7799939E12, 921.7], [1.77999384E12, 1026.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999396E12, 1095.9999999999995], [1.7799939E12, 1217.6400000000003], [1.77999384E12, 1382.6000000000008]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999396E12, 729.0], [1.7799939E12, 719.5], [1.77999384E12, 741.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999396E12, 971.5], [1.7799939E12, 1011.3999999999994], [1.77999384E12, 1148.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999396E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 647.0, "minX": 1.0, "maxY": 831.0, "series": [{"data": [[1.0, 831.0], [2.0, 666.0], [4.0, 702.5], [8.0, 739.5], [9.0, 747.0], [5.0, 743.5], [11.0, 831.0], [6.0, 721.0], [3.0, 647.0], [7.0, 733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 647.0, "minX": 1.0, "maxY": 831.0, "series": [{"data": [[1.0, 831.0], [2.0, 666.0], [4.0, 702.5], [8.0, 739.5], [9.0, 747.0], [5.0, 743.5], [11.0, 831.0], [6.0, 721.0], [3.0, 647.0], [7.0, 733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.15, "minX": 1.77999384E12, "maxY": 5.0, "series": [{"data": [[1.77999396E12, 2.15], [1.7799939E12, 5.0], [1.77999384E12, 2.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999396E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.77999384E12, "maxY": 5.0, "series": [{"data": [[1.77999396E12, 2.216666666666667], [1.7799939E12, 5.0], [1.77999384E12, 2.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999396E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.77999384E12, "maxY": 5.0, "series": [{"data": [[1.77999396E12, 2.216666666666667], [1.7799939E12, 5.0], [1.77999384E12, 2.65]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999396E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.77999384E12, "maxY": 5.0, "series": [{"data": [[1.77999396E12, 2.216666666666667], [1.7799939E12, 5.0], [1.77999384E12, 2.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999396E12, "title": "Total Transactions Per Second"}},
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

