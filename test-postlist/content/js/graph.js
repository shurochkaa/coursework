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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1249.0, "series": [{"data": [[0.0, 0.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 9.0], [1.2, 9.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 11.0], [1.7, 11.0], [1.8, 12.0], [1.9, 12.0], [2.0, 12.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 16.0], [3.1, 16.0], [3.2, 16.0], [3.3, 17.0], [3.4, 17.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 20.0], [4.2, 20.0], [4.3, 20.0], [4.4, 20.0], [4.5, 21.0], [4.6, 21.0], [4.7, 21.0], [4.8, 21.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 22.0], [5.3, 22.0], [5.4, 23.0], [5.5, 23.0], [5.6, 23.0], [5.7, 23.0], [5.8, 23.0], [5.9, 23.0], [6.0, 24.0], [6.1, 24.0], [6.2, 24.0], [6.3, 24.0], [6.4, 25.0], [6.5, 25.0], [6.6, 25.0], [6.7, 25.0], [6.8, 25.0], [6.9, 26.0], [7.0, 26.0], [7.1, 26.0], [7.2, 26.0], [7.3, 26.0], [7.4, 27.0], [7.5, 27.0], [7.6, 27.0], [7.7, 27.0], [7.8, 27.0], [7.9, 27.0], [8.0, 28.0], [8.1, 28.0], [8.2, 28.0], [8.3, 28.0], [8.4, 28.0], [8.5, 28.0], [8.6, 29.0], [8.7, 29.0], [8.8, 29.0], [8.9, 29.0], [9.0, 29.0], [9.1, 29.0], [9.2, 29.0], [9.3, 30.0], [9.4, 30.0], [9.5, 30.0], [9.6, 30.0], [9.7, 30.0], [9.8, 30.0], [9.9, 30.0], [10.0, 30.0], [10.1, 31.0], [10.2, 31.0], [10.3, 31.0], [10.4, 31.0], [10.5, 31.0], [10.6, 31.0], [10.7, 31.0], [10.8, 31.0], [10.9, 32.0], [11.0, 32.0], [11.1, 32.0], [11.2, 32.0], [11.3, 32.0], [11.4, 32.0], [11.5, 32.0], [11.6, 33.0], [11.7, 33.0], [11.8, 33.0], [11.9, 33.0], [12.0, 33.0], [12.1, 33.0], [12.2, 33.0], [12.3, 33.0], [12.4, 34.0], [12.5, 34.0], [12.6, 34.0], [12.7, 34.0], [12.8, 34.0], [12.9, 34.0], [13.0, 34.0], [13.1, 34.0], [13.2, 35.0], [13.3, 35.0], [13.4, 35.0], [13.5, 35.0], [13.6, 35.0], [13.7, 35.0], [13.8, 35.0], [13.9, 36.0], [14.0, 36.0], [14.1, 36.0], [14.2, 36.0], [14.3, 36.0], [14.4, 36.0], [14.5, 36.0], [14.6, 37.0], [14.7, 37.0], [14.8, 37.0], [14.9, 37.0], [15.0, 37.0], [15.1, 37.0], [15.2, 38.0], [15.3, 38.0], [15.4, 38.0], [15.5, 38.0], [15.6, 38.0], [15.7, 38.0], [15.8, 39.0], [15.9, 39.0], [16.0, 39.0], [16.1, 39.0], [16.2, 39.0], [16.3, 40.0], [16.4, 40.0], [16.5, 40.0], [16.6, 40.0], [16.7, 40.0], [16.8, 40.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 42.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 43.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 45.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 46.0], [19.3, 46.0], [19.4, 46.0], [19.5, 46.0], [19.6, 46.0], [19.7, 47.0], [19.8, 47.0], [19.9, 47.0], [20.0, 47.0], [20.1, 48.0], [20.2, 48.0], [20.3, 48.0], [20.4, 48.0], [20.5, 48.0], [20.6, 48.0], [20.7, 49.0], [20.8, 49.0], [20.9, 49.0], [21.0, 49.0], [21.1, 49.0], [21.2, 50.0], [21.3, 50.0], [21.4, 50.0], [21.5, 50.0], [21.6, 50.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 51.0], [22.1, 51.0], [22.2, 51.0], [22.3, 52.0], [22.4, 52.0], [22.5, 52.0], [22.6, 52.0], [22.7, 52.0], [22.8, 53.0], [22.9, 53.0], [23.0, 53.0], [23.1, 53.0], [23.2, 53.0], [23.3, 53.0], [23.4, 53.0], [23.5, 54.0], [23.6, 54.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 55.0], [24.2, 55.0], [24.3, 55.0], [24.4, 55.0], [24.5, 55.0], [24.6, 55.0], [24.7, 55.0], [24.8, 56.0], [24.9, 56.0], [25.0, 56.0], [25.1, 56.0], [25.2, 56.0], [25.3, 56.0], [25.4, 56.0], [25.5, 57.0], [25.6, 57.0], [25.7, 57.0], [25.8, 57.0], [25.9, 57.0], [26.0, 57.0], [26.1, 57.0], [26.2, 58.0], [26.3, 58.0], [26.4, 58.0], [26.5, 58.0], [26.6, 58.0], [26.7, 58.0], [26.8, 58.0], [26.9, 59.0], [27.0, 59.0], [27.1, 59.0], [27.2, 59.0], [27.3, 59.0], [27.4, 59.0], [27.5, 59.0], [27.6, 59.0], [27.7, 60.0], [27.8, 60.0], [27.9, 60.0], [28.0, 60.0], [28.1, 60.0], [28.2, 60.0], [28.3, 60.0], [28.4, 61.0], [28.5, 61.0], [28.6, 61.0], [28.7, 61.0], [28.8, 61.0], [28.9, 61.0], [29.0, 61.0], [29.1, 61.0], [29.2, 62.0], [29.3, 62.0], [29.4, 62.0], [29.5, 62.0], [29.6, 62.0], [29.7, 62.0], [29.8, 63.0], [29.9, 63.0], [30.0, 63.0], [30.1, 63.0], [30.2, 63.0], [30.3, 63.0], [30.4, 64.0], [30.5, 64.0], [30.6, 64.0], [30.7, 64.0], [30.8, 64.0], [30.9, 64.0], [31.0, 65.0], [31.1, 65.0], [31.2, 65.0], [31.3, 65.0], [31.4, 65.0], [31.5, 66.0], [31.6, 66.0], [31.7, 66.0], [31.8, 66.0], [31.9, 66.0], [32.0, 67.0], [32.1, 67.0], [32.2, 67.0], [32.3, 67.0], [32.4, 67.0], [32.5, 68.0], [32.6, 68.0], [32.7, 68.0], [32.8, 68.0], [32.9, 69.0], [33.0, 69.0], [33.1, 69.0], [33.2, 69.0], [33.3, 69.0], [33.4, 70.0], [33.5, 70.0], [33.6, 70.0], [33.7, 70.0], [33.8, 71.0], [33.9, 71.0], [34.0, 71.0], [34.1, 71.0], [34.2, 71.0], [34.3, 72.0], [34.4, 72.0], [34.5, 72.0], [34.6, 72.0], [34.7, 72.0], [34.8, 73.0], [34.9, 73.0], [35.0, 73.0], [35.1, 73.0], [35.2, 74.0], [35.3, 74.0], [35.4, 74.0], [35.5, 74.0], [35.6, 74.0], [35.7, 75.0], [35.8, 75.0], [35.9, 75.0], [36.0, 75.0], [36.1, 75.0], [36.2, 76.0], [36.3, 76.0], [36.4, 76.0], [36.5, 76.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 77.0], [37.0, 77.0], [37.1, 78.0], [37.2, 78.0], [37.3, 78.0], [37.4, 78.0], [37.5, 78.0], [37.6, 79.0], [37.7, 79.0], [37.8, 79.0], [37.9, 79.0], [38.0, 79.0], [38.1, 80.0], [38.2, 80.0], [38.3, 80.0], [38.4, 80.0], [38.5, 80.0], [38.6, 80.0], [38.7, 81.0], [38.8, 81.0], [38.9, 81.0], [39.0, 81.0], [39.1, 81.0], [39.2, 81.0], [39.3, 82.0], [39.4, 82.0], [39.5, 82.0], [39.6, 82.0], [39.7, 82.0], [39.8, 83.0], [39.9, 83.0], [40.0, 83.0], [40.1, 83.0], [40.2, 83.0], [40.3, 83.0], [40.4, 84.0], [40.5, 84.0], [40.6, 84.0], [40.7, 84.0], [40.8, 84.0], [40.9, 85.0], [41.0, 85.0], [41.1, 85.0], [41.2, 85.0], [41.3, 85.0], [41.4, 85.0], [41.5, 86.0], [41.6, 86.0], [41.7, 86.0], [41.8, 86.0], [41.9, 86.0], [42.0, 87.0], [42.1, 87.0], [42.2, 87.0], [42.3, 87.0], [42.4, 88.0], [42.5, 88.0], [42.6, 88.0], [42.7, 88.0], [42.8, 88.0], [42.9, 89.0], [43.0, 89.0], [43.1, 89.0], [43.2, 89.0], [43.3, 89.0], [43.4, 90.0], [43.5, 90.0], [43.6, 90.0], [43.7, 90.0], [43.8, 90.0], [43.9, 90.0], [44.0, 91.0], [44.1, 91.0], [44.2, 91.0], [44.3, 91.0], [44.4, 91.0], [44.5, 91.0], [44.6, 92.0], [44.7, 92.0], [44.8, 92.0], [44.9, 92.0], [45.0, 92.0], [45.1, 92.0], [45.2, 93.0], [45.3, 93.0], [45.4, 93.0], [45.5, 93.0], [45.6, 93.0], [45.7, 93.0], [45.8, 93.0], [45.9, 94.0], [46.0, 94.0], [46.1, 94.0], [46.2, 94.0], [46.3, 94.0], [46.4, 94.0], [46.5, 95.0], [46.6, 95.0], [46.7, 95.0], [46.8, 95.0], [46.9, 95.0], [47.0, 95.0], [47.1, 95.0], [47.2, 95.0], [47.3, 96.0], [47.4, 96.0], [47.5, 96.0], [47.6, 96.0], [47.7, 96.0], [47.8, 96.0], [47.9, 96.0], [48.0, 97.0], [48.1, 97.0], [48.2, 97.0], [48.3, 97.0], [48.4, 97.0], [48.5, 97.0], [48.6, 97.0], [48.7, 97.0], [48.8, 98.0], [48.9, 98.0], [49.0, 98.0], [49.1, 98.0], [49.2, 98.0], [49.3, 98.0], [49.4, 98.0], [49.5, 98.0], [49.6, 99.0], [49.7, 99.0], [49.8, 99.0], [49.9, 99.0], [50.0, 99.0], [50.1, 99.0], [50.2, 99.0], [50.3, 99.0], [50.4, 100.0], [50.5, 100.0], [50.6, 100.0], [50.7, 100.0], [50.8, 100.0], [50.9, 100.0], [51.0, 100.0], [51.1, 100.0], [51.2, 101.0], [51.3, 101.0], [51.4, 101.0], [51.5, 101.0], [51.6, 101.0], [51.7, 101.0], [51.8, 101.0], [51.9, 101.0], [52.0, 101.0], [52.1, 102.0], [52.2, 102.0], [52.3, 102.0], [52.4, 102.0], [52.5, 102.0], [52.6, 102.0], [52.7, 102.0], [52.8, 102.0], [52.9, 103.0], [53.0, 103.0], [53.1, 103.0], [53.2, 103.0], [53.3, 103.0], [53.4, 103.0], [53.5, 103.0], [53.6, 103.0], [53.7, 103.0], [53.8, 104.0], [53.9, 104.0], [54.0, 104.0], [54.1, 104.0], [54.2, 104.0], [54.3, 104.0], [54.4, 104.0], [54.5, 104.0], [54.6, 104.0], [54.7, 105.0], [54.8, 105.0], [54.9, 105.0], [55.0, 105.0], [55.1, 105.0], [55.2, 105.0], [55.3, 105.0], [55.4, 105.0], [55.5, 105.0], [55.6, 106.0], [55.7, 106.0], [55.8, 106.0], [55.9, 106.0], [56.0, 106.0], [56.1, 106.0], [56.2, 106.0], [56.3, 106.0], [56.4, 106.0], [56.5, 106.0], [56.6, 107.0], [56.7, 107.0], [56.8, 107.0], [56.9, 107.0], [57.0, 107.0], [57.1, 107.0], [57.2, 107.0], [57.3, 107.0], [57.4, 107.0], [57.5, 107.0], [57.6, 108.0], [57.7, 108.0], [57.8, 108.0], [57.9, 108.0], [58.0, 108.0], [58.1, 108.0], [58.2, 108.0], [58.3, 108.0], [58.4, 108.0], [58.5, 108.0], [58.6, 109.0], [58.7, 109.0], [58.8, 109.0], [58.9, 109.0], [59.0, 109.0], [59.1, 109.0], [59.2, 109.0], [59.3, 109.0], [59.4, 109.0], [59.5, 109.0], [59.6, 109.0], [59.7, 110.0], [59.8, 110.0], [59.9, 110.0], [60.0, 110.0], [60.1, 110.0], [60.2, 110.0], [60.3, 110.0], [60.4, 110.0], [60.5, 110.0], [60.6, 110.0], [60.7, 110.0], [60.8, 111.0], [60.9, 111.0], [61.0, 111.0], [61.1, 111.0], [61.2, 111.0], [61.3, 111.0], [61.4, 111.0], [61.5, 111.0], [61.6, 111.0], [61.7, 111.0], [61.8, 111.0], [61.9, 112.0], [62.0, 112.0], [62.1, 112.0], [62.2, 112.0], [62.3, 112.0], [62.4, 112.0], [62.5, 112.0], [62.6, 112.0], [62.7, 112.0], [62.8, 112.0], [62.9, 112.0], [63.0, 113.0], [63.1, 113.0], [63.2, 113.0], [63.3, 113.0], [63.4, 113.0], [63.5, 113.0], [63.6, 113.0], [63.7, 113.0], [63.8, 113.0], [63.9, 113.0], [64.0, 114.0], [64.1, 114.0], [64.2, 114.0], [64.3, 114.0], [64.4, 114.0], [64.5, 114.0], [64.6, 114.0], [64.7, 114.0], [64.8, 114.0], [64.9, 114.0], [65.0, 115.0], [65.1, 115.0], [65.2, 115.0], [65.3, 115.0], [65.4, 115.0], [65.5, 115.0], [65.6, 115.0], [65.7, 115.0], [65.8, 115.0], [65.9, 115.0], [66.0, 116.0], [66.1, 116.0], [66.2, 116.0], [66.3, 116.0], [66.4, 116.0], [66.5, 116.0], [66.6, 116.0], [66.7, 116.0], [66.8, 117.0], [66.9, 117.0], [67.0, 117.0], [67.1, 117.0], [67.2, 117.0], [67.3, 117.0], [67.4, 117.0], [67.5, 117.0], [67.6, 117.0], [67.7, 117.0], [67.8, 118.0], [67.9, 118.0], [68.0, 118.0], [68.1, 118.0], [68.2, 118.0], [68.3, 118.0], [68.4, 118.0], [68.5, 118.0], [68.6, 118.0], [68.7, 119.0], [68.8, 119.0], [68.9, 119.0], [69.0, 119.0], [69.1, 119.0], [69.2, 119.0], [69.3, 119.0], [69.4, 119.0], [69.5, 119.0], [69.6, 119.0], [69.7, 120.0], [69.8, 120.0], [69.9, 120.0], [70.0, 120.0], [70.1, 120.0], [70.2, 120.0], [70.3, 120.0], [70.4, 120.0], [70.5, 120.0], [70.6, 121.0], [70.7, 121.0], [70.8, 121.0], [70.9, 121.0], [71.0, 121.0], [71.1, 121.0], [71.2, 121.0], [71.3, 121.0], [71.4, 121.0], [71.5, 122.0], [71.6, 122.0], [71.7, 122.0], [71.8, 122.0], [71.9, 122.0], [72.0, 122.0], [72.1, 122.0], [72.2, 122.0], [72.3, 123.0], [72.4, 123.0], [72.5, 123.0], [72.6, 123.0], [72.7, 123.0], [72.8, 123.0], [72.9, 123.0], [73.0, 123.0], [73.1, 124.0], [73.2, 124.0], [73.3, 124.0], [73.4, 124.0], [73.5, 124.0], [73.6, 124.0], [73.7, 124.0], [73.8, 124.0], [73.9, 125.0], [74.0, 125.0], [74.1, 125.0], [74.2, 125.0], [74.3, 125.0], [74.4, 125.0], [74.5, 125.0], [74.6, 125.0], [74.7, 125.0], [74.8, 126.0], [74.9, 126.0], [75.0, 126.0], [75.1, 126.0], [75.2, 126.0], [75.3, 126.0], [75.4, 126.0], [75.5, 126.0], [75.6, 127.0], [75.7, 127.0], [75.8, 127.0], [75.9, 127.0], [76.0, 127.0], [76.1, 127.0], [76.2, 127.0], [76.3, 127.0], [76.4, 128.0], [76.5, 128.0], [76.6, 128.0], [76.7, 128.0], [76.8, 128.0], [76.9, 128.0], [77.0, 128.0], [77.1, 128.0], [77.2, 129.0], [77.3, 129.0], [77.4, 129.0], [77.5, 129.0], [77.6, 129.0], [77.7, 129.0], [77.8, 129.0], [77.9, 129.0], [78.0, 130.0], [78.1, 130.0], [78.2, 130.0], [78.3, 130.0], [78.4, 130.0], [78.5, 130.0], [78.6, 130.0], [78.7, 131.0], [78.8, 131.0], [78.9, 131.0], [79.0, 131.0], [79.1, 131.0], [79.2, 131.0], [79.3, 132.0], [79.4, 132.0], [79.5, 132.0], [79.6, 132.0], [79.7, 132.0], [79.8, 132.0], [79.9, 133.0], [80.0, 133.0], [80.1, 133.0], [80.2, 133.0], [80.3, 133.0], [80.4, 134.0], [80.5, 134.0], [80.6, 134.0], [80.7, 134.0], [80.8, 134.0], [80.9, 134.0], [81.0, 135.0], [81.1, 135.0], [81.2, 135.0], [81.3, 135.0], [81.4, 136.0], [81.5, 136.0], [81.6, 136.0], [81.7, 136.0], [81.8, 137.0], [81.9, 137.0], [82.0, 137.0], [82.1, 137.0], [82.2, 138.0], [82.3, 138.0], [82.4, 138.0], [82.5, 138.0], [82.6, 139.0], [82.7, 139.0], [82.8, 139.0], [82.9, 139.0], [83.0, 140.0], [83.1, 140.0], [83.2, 140.0], [83.3, 141.0], [83.4, 141.0], [83.5, 141.0], [83.6, 142.0], [83.7, 142.0], [83.8, 143.0], [83.9, 143.0], [84.0, 143.0], [84.1, 144.0], [84.2, 144.0], [84.3, 144.0], [84.4, 145.0], [84.5, 145.0], [84.6, 146.0], [84.7, 147.0], [84.8, 147.0], [84.9, 148.0], [85.0, 148.0], [85.1, 149.0], [85.2, 150.0], [85.3, 150.0], [85.4, 151.0], [85.5, 152.0], [85.6, 152.0], [85.7, 153.0], [85.8, 153.0], [85.9, 154.0], [86.0, 155.0], [86.1, 155.0], [86.2, 156.0], [86.3, 157.0], [86.4, 158.0], [86.5, 159.0], [86.6, 159.0], [86.7, 160.0], [86.8, 161.0], [86.9, 162.0], [87.0, 162.0], [87.1, 163.0], [87.2, 164.0], [87.3, 164.0], [87.4, 165.0], [87.5, 166.0], [87.6, 167.0], [87.7, 168.0], [87.8, 169.0], [87.9, 171.0], [88.0, 172.0], [88.1, 173.0], [88.2, 175.0], [88.3, 177.0], [88.4, 180.0], [88.5, 185.0], [88.6, 192.0], [88.7, 232.0], [88.8, 268.0], [88.9, 511.0], [89.0, 514.0], [89.1, 517.0], [89.2, 521.0], [89.3, 524.0], [89.4, 527.0], [89.5, 529.0], [89.6, 531.0], [89.7, 533.0], [89.8, 534.0], [89.9, 536.0], [90.0, 537.0], [90.1, 538.0], [90.2, 539.0], [90.3, 540.0], [90.4, 541.0], [90.5, 542.0], [90.6, 543.0], [90.7, 544.0], [90.8, 544.0], [90.9, 545.0], [91.0, 546.0], [91.1, 547.0], [91.2, 548.0], [91.3, 549.0], [91.4, 550.0], [91.5, 551.0], [91.6, 551.0], [91.7, 552.0], [91.8, 553.0], [91.9, 554.0], [92.0, 555.0], [92.1, 555.0], [92.2, 556.0], [92.3, 557.0], [92.4, 558.0], [92.5, 559.0], [92.6, 560.0], [92.7, 560.0], [92.8, 561.0], [92.9, 562.0], [93.0, 563.0], [93.1, 563.0], [93.2, 564.0], [93.3, 565.0], [93.4, 566.0], [93.5, 567.0], [93.6, 568.0], [93.7, 568.0], [93.8, 569.0], [93.9, 570.0], [94.0, 571.0], [94.1, 572.0], [94.2, 572.0], [94.3, 573.0], [94.4, 574.0], [94.5, 575.0], [94.6, 576.0], [94.7, 577.0], [94.8, 577.0], [94.9, 578.0], [95.0, 579.0], [95.1, 580.0], [95.2, 581.0], [95.3, 582.0], [95.4, 583.0], [95.5, 584.0], [95.6, 584.0], [95.7, 585.0], [95.8, 586.0], [95.9, 587.0], [96.0, 588.0], [96.1, 589.0], [96.2, 590.0], [96.3, 591.0], [96.4, 592.0], [96.5, 593.0], [96.6, 594.0], [96.7, 595.0], [96.8, 597.0], [96.9, 598.0], [97.0, 599.0], [97.1, 601.0], [97.2, 602.0], [97.3, 603.0], [97.4, 605.0], [97.5, 606.0], [97.6, 608.0], [97.7, 610.0], [97.8, 611.0], [97.9, 613.0], [98.0, 615.0], [98.1, 617.0], [98.2, 620.0], [98.3, 622.0], [98.4, 626.0], [98.5, 630.0], [98.6, 635.0], [98.7, 643.0], [98.8, 658.0], [98.9, 700.0], [99.0, 729.0], [99.1, 1000.0], [99.2, 1003.0], [99.3, 1030.0], [99.4, 1045.0], [99.5, 1058.0], [99.6, 1071.0], [99.7, 1084.0], [99.8, 1097.0], [99.9, 1112.0], [100.0, 1249.0]], "isOverall": false, "label": "LIST", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 50392.0, "series": [{"data": [[0.0, 50392.0], [1100.0, 173.0], [600.0, 1895.0], [1200.0, 12.0], [700.0, 190.0], [100.0, 38278.0], [200.0, 150.0], [800.0, 10.0], [500.0, 8183.0], [1000.0, 717.0]], "isOverall": false, "label": "LIST", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 323.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 88680.0, "series": [{"data": [[0.0, 88680.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10997.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 323.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.25205254515562, "minX": 1.73687868E12, "maxY": 92.24279724063265, "series": [{"data": [[1.7368788E12, 84.1407565613832], [1.73687868E12, 42.25205254515562], [1.73687886E12, 55.30205335804537], [1.73687874E12, 92.24279724063265]], "isOverall": false, "label": "POST", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73687886E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 7.115131578947365, "minX": 1.0, "maxY": 237.83931218499822, "series": [{"data": [[2.0, 8.367741935483876], [3.0, 7.115131578947365], [4.0, 7.456666666666663], [5.0, 8.801223241590204], [6.0, 10.608150470219433], [7.0, 12.275449101796411], [8.0, 14.542553191489366], [9.0, 16.058823529411764], [10.0, 17.052816901408438], [11.0, 21.128378378378372], [12.0, 24.212707182320433], [13.0, 23.307042253521146], [14.0, 26.868932038834956], [15.0, 28.652307692307698], [16.0, 26.679411764705907], [17.0, 31.67791411042944], [18.0, 28.22693266832917], [19.0, 42.23323170731708], [20.0, 34.273556231003035], [21.0, 45.49373881932022], [22.0, 36.92447129909364], [23.0, 34.446927374301715], [24.0, 43.84285714285715], [25.0, 54.532786885245905], [26.0, 53.60162601626019], [27.0, 51.164351851851876], [28.0, 58.659242761692646], [29.0, 55.09411764705883], [30.0, 35.54814814814816], [31.0, 77.34391534391536], [32.0, 66.41836734693874], [33.0, 66.4431630971993], [34.0, 66.10352941176467], [35.0, 48.874999999999986], [36.0, 79.73466476462201], [37.0, 81.76342281879195], [38.0, 72.39058171745143], [39.0, 64.34237288135601], [40.0, 84.2024793388429], [41.0, 87.22118380062307], [42.0, 85.56905370843997], [43.0, 98.43777777777781], [44.0, 80.64389534883726], [45.0, 82.91643454038996], [46.0, 102.93548387096776], [47.0, 89.54068241469817], [48.0, 65.96559633027518], [49.0, 91.66881028938907], [50.0, 106.48675034867502], [51.0, 102.45346062052502], [52.0, 78.05276381909547], [53.0, 114.15092879256972], [54.0, 118.68007483629556], [55.0, 97.3439252336448], [56.0, 125.99365482233497], [57.0, 124.23397435897428], [58.0, 112.5977198697068], [59.0, 123.85060240963853], [60.0, 127.46568627450966], [61.0, 89.64739884393056], [62.0, 121.2371294851795], [63.0, 141.5507487520797], [64.0, 131.86834094368334], [65.0, 141.8337408312961], [66.0, 147.69871794871793], [67.0, 86.82044887780559], [68.0, 156.58062330623306], [69.0, 155.12404287901984], [70.0, 155.0397623400365], [71.0, 148.1722488038278], [72.0, 156.16378830083534], [73.0, 150.53671562082758], [74.0, 165.83757575757596], [75.0, 129.90687679083095], [76.0, 115.92732558139541], [77.0, 157.28663967611334], [78.0, 171.58209839952573], [79.0, 172.5233265720082], [80.0, 127.84469696969695], [81.0, 184.73778602350046], [82.0, 178.21156192800456], [83.0, 167.7321063394682], [84.0, 180.1945492662472], [85.0, 156.12762237762237], [86.0, 186.60776160776152], [87.0, 169.6855036855037], [88.0, 192.13007432818767], [89.0, 200.7690987124465], [90.0, 237.83931218499822], [91.0, 194.56073105724087], [92.0, 189.86750788643536], [93.0, 176.5823746472758], [94.0, 169.93983338475772], [95.0, 175.37282692946542], [1.0, 9.726027397260278]], "isOverall": false, "label": "LIST", "isController": false}, {"data": [[69.90959999999897, 144.4001400000021]], "isOverall": false, "label": "LIST-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 95.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 62802.26666666667, "minX": 1.73687868E12, "maxY": 5342229.3, "series": [{"data": [[1.7368788E12, 4412259.433333334], [1.73687868E12, 4637759.45], [1.73687886E12, 3719242.0], [1.73687874E12, 5342229.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7368788E12, 74483.2], [1.73687868E12, 78301.2], [1.73687886E12, 62802.26666666667], [1.73687874E12, 90089.46666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73687886E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 73.13116740949248, "minX": 1.73687868E12, "maxY": 194.14482277077286, "series": [{"data": [[1.7368788E12, 194.14482277077286], [1.73687868E12, 73.13116740949248], [1.73687886E12, 128.09471784616935], [1.73687874E12, 176.39304071418903]], "isOverall": false, "label": "LIST", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73687886E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 72.74478067088909, "minX": 1.73687868E12, "maxY": 193.36460344190326, "series": [{"data": [[1.7368788E12, 193.36460344190326], [1.73687868E12, 72.74478067088909], [1.73687886E12, 127.76169341071947], [1.73687874E12, 172.1622480725014]], "isOverall": false, "label": "LIST", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73687886E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 27.82789897568229, "minX": 1.73687868E12, "maxY": 83.81237934858534, "series": [{"data": [[1.7368788E12, 83.81237934858534], [1.73687868E12, 27.82789897568229], [1.73687886E12, 54.0176559527875], [1.73687874E12, 76.89730150141996]], "isOverall": false, "label": "LIST", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73687886E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 5.0, "minX": 1.73687868E12, "maxY": 1249.0, "series": [{"data": [[1.7368788E12, 1249.0], [1.73687868E12, 1101.0], [1.73687886E12, 1116.0], [1.73687874E12, 1136.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7368788E12, 565.0], [1.73687868E12, 96.0], [1.73687886E12, 147.0], [1.73687874E12, 561.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7368788E12, 721.0], [1.73687868E12, 576.0], [1.73687886E12, 612.0], [1.73687874E12, 1050.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7368788E12, 593.0], [1.73687868E12, 532.0], [1.73687886E12, 562.9500000000007], [1.73687874E12, 592.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7368788E12, 10.0], [1.73687868E12, 5.0], [1.73687886E12, 6.0], [1.73687874E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7368788E12, 119.0], [1.73687868E12, 56.0], [1.73687886E12, 77.0], [1.73687874E12, 113.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73687886E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
    data: {"result": {"minY": 0.0, "minX": 39.0, "maxY": 1015.0, "series": [{"data": [[39.0, 7.0], [53.0, 11.0], [280.0, 7.0], [306.0, 187.0], [319.0, 156.0], [323.0, 145.0], [321.0, 170.0], [349.0, 162.0], [337.0, 127.0], [348.0, 29.0], [338.0, 18.0], [359.0, 147.0], [364.0, 50.0], [362.0, 112.0], [354.0, 111.0], [363.0, 51.0], [377.0, 94.0], [379.0, 130.0], [368.0, 105.0], [378.0, 55.0], [382.0, 83.0], [373.0, 57.0], [370.0, 56.0], [380.0, 53.0], [375.0, 39.0], [399.0, 119.0], [394.0, 113.0], [390.0, 108.0], [396.0, 106.5], [395.0, 77.0], [387.0, 67.0], [397.0, 85.0], [384.0, 48.0], [402.0, 109.0], [407.0, 115.0], [400.0, 117.0], [401.0, 83.0], [404.0, 116.0], [415.0, 112.0], [411.0, 123.0], [410.0, 118.0], [409.0, 103.0], [406.0, 110.0], [405.0, 107.0], [413.0, 123.0], [414.0, 115.0], [412.0, 120.0], [403.0, 111.0], [423.0, 126.0], [430.0, 113.0], [420.0, 115.0], [427.0, 122.0], [424.0, 121.0], [425.0, 119.0], [428.0, 116.0], [421.0, 112.0], [422.0, 108.0], [416.0, 108.0], [418.0, 107.0], [417.0, 111.0], [419.0, 124.0], [434.0, 120.0], [439.0, 125.0], [440.0, 122.0], [444.0, 116.0], [446.0, 111.0], [435.0, 114.0], [432.0, 135.0], [436.0, 141.0], [456.0, 7.0], [460.0, 124.0], [463.0, 121.0], [452.0, 104.0], [448.0, 130.0], [468.0, 129.0], [471.0, 109.0], [492.0, 36.0], [491.0, 136.0], [483.0, 124.0], [481.0, 146.0], [480.0, 115.0], [510.0, 9.0], [503.0, 13.0], [501.0, 119.0], [500.0, 113.0], [511.0, 27.0], [504.0, 108.0], [507.0, 18.0], [499.0, 22.0], [508.0, 30.0], [509.0, 29.0], [497.0, 94.0], [505.0, 124.0], [513.0, 70.0], [518.0, 30.0], [523.0, 57.0], [530.0, 35.0], [533.0, 56.0], [535.0, 56.0], [532.0, 93.0], [515.0, 107.0], [517.0, 129.0], [516.0, 99.0], [514.0, 93.0], [538.0, 31.0], [543.0, 61.0], [542.0, 74.0], [536.0, 80.0], [537.0, 72.0], [529.0, 47.0], [527.0, 40.0], [526.0, 79.5], [512.0, 102.0], [525.0, 64.0], [524.0, 102.0], [522.0, 52.0], [521.0, 98.0], [520.0, 55.0], [546.0, 75.0], [550.0, 65.0], [545.0, 75.0], [554.0, 76.0], [566.0, 92.0], [564.0, 103.0], [562.0, 92.0], [551.0, 110.0], [559.0, 86.0], [549.0, 94.0], [547.0, 96.0], [558.0, 88.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[527.0, 502.0], [515.0, 501.0], [514.0, 1003.0], [513.0, 251.5], [512.0, 1.5], [538.0, 1.0], [543.0, 1.0], [542.0, 1003.0], [523.0, 1.0], [529.0, 1.0], [521.0, 34.0], [520.0, 0.0], [525.0, 1001.0], [524.0, 6.0], [533.0, 1.0], [530.0, 1003.0], [536.0, 1002.0], [517.0, 1002.0], [516.0, 1.0], [549.0, 1.5], [550.0, 1.0], [546.0, 1.0], [554.0, 0.0], [547.0, 1.0], [558.0, 1007.0], [562.0, 3.0], [551.0, 1002.0], [564.0, 1004.5], [306.0, 1.0], [349.0, 551.5], [359.0, 2.0], [354.0, 1.0], [368.0, 1.0], [399.0, 1.0], [400.0, 501.0], [404.0, 1.0], [415.0, 1.0], [414.0, 310.5], [403.0, 1.0], [402.0, 1003.0], [401.0, 1.0], [406.0, 502.0], [407.0, 521.0], [409.0, 549.5], [416.0, 1.0], [430.0, 1.0], [420.0, 1015.0], [427.0, 543.5], [424.0, 1.0], [421.0, 2.0], [422.0, 502.0], [428.0, 51.0], [418.0, 1.0], [425.0, 84.0], [439.0, 559.0], [435.0, 1001.0], [436.0, 2.0], [463.0, 1.0], [491.0, 1.0], [483.0, 1.0], [480.0, 119.0], [509.0, 0.0], [511.0, 0.0], [505.0, 0.0], [508.0, 55.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 566.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 39.0, "maxY": 305.0, "series": [{"data": [[39.0, 7.0], [53.0, 11.0], [280.0, 7.0], [306.0, 187.0], [319.0, 156.0], [323.0, 145.0], [321.0, 170.0], [349.0, 162.0], [337.0, 127.0], [348.0, 29.0], [338.0, 18.0], [359.0, 147.0], [364.0, 50.0], [362.0, 112.0], [354.0, 111.0], [363.0, 51.0], [377.0, 94.0], [379.0, 130.0], [368.0, 105.0], [378.0, 55.0], [382.0, 83.0], [373.0, 57.0], [370.0, 56.0], [380.0, 53.0], [375.0, 39.0], [399.0, 119.0], [394.0, 113.0], [390.0, 108.0], [396.0, 106.5], [395.0, 77.0], [387.0, 67.0], [397.0, 85.0], [384.0, 48.0], [402.0, 109.0], [407.0, 115.0], [400.0, 117.0], [401.0, 83.0], [404.0, 116.0], [415.0, 112.0], [411.0, 123.0], [410.0, 118.0], [409.0, 103.0], [406.0, 110.0], [405.0, 107.0], [413.0, 123.0], [414.0, 115.0], [412.0, 120.0], [403.0, 111.0], [423.0, 126.0], [430.0, 113.0], [420.0, 115.0], [427.0, 122.0], [424.0, 121.0], [425.0, 119.0], [428.0, 116.0], [421.0, 111.5], [422.0, 108.0], [416.0, 108.0], [418.0, 107.0], [417.0, 111.0], [419.0, 124.0], [434.0, 120.0], [439.0, 125.0], [440.0, 122.0], [444.0, 116.0], [446.0, 111.0], [435.0, 114.0], [432.0, 135.0], [436.0, 141.0], [456.0, 7.0], [460.0, 124.0], [463.0, 121.0], [452.0, 104.0], [448.0, 130.0], [468.0, 129.0], [471.0, 109.0], [492.0, 36.0], [491.0, 136.0], [483.0, 124.0], [481.0, 146.0], [480.0, 115.0], [510.0, 9.0], [503.0, 13.0], [501.0, 119.0], [500.0, 113.0], [511.0, 27.0], [504.0, 108.0], [507.0, 18.0], [499.0, 22.0], [508.0, 30.0], [509.0, 29.0], [497.0, 94.0], [505.0, 124.0], [513.0, 70.0], [518.0, 30.0], [523.0, 57.0], [530.0, 35.0], [533.0, 56.0], [535.0, 56.0], [532.0, 93.0], [515.0, 107.0], [517.0, 129.0], [516.0, 99.0], [514.0, 93.0], [538.0, 31.0], [543.0, 61.0], [542.0, 74.0], [536.0, 80.0], [537.0, 72.0], [529.0, 47.0], [527.0, 40.0], [526.0, 79.5], [512.0, 102.0], [525.0, 64.0], [524.0, 102.0], [522.0, 52.0], [521.0, 98.0], [520.0, 55.0], [546.0, 75.0], [550.0, 65.0], [545.0, 75.0], [554.0, 76.0], [566.0, 92.0], [564.0, 103.0], [562.0, 92.0], [551.0, 110.0], [559.0, 86.0], [549.0, 94.0], [547.0, 96.0], [558.0, 88.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[527.0, 0.0], [515.0, 0.0], [514.0, 0.0], [513.0, 0.0], [512.0, 0.0], [538.0, 0.0], [543.0, 0.0], [542.0, 0.0], [523.0, 0.0], [529.0, 0.0], [521.0, 0.0], [520.0, 0.0], [525.0, 0.0], [524.0, 0.0], [533.0, 0.0], [530.0, 0.0], [536.0, 0.0], [517.0, 0.0], [516.0, 0.0], [549.0, 0.0], [550.0, 0.0], [546.0, 0.0], [554.0, 0.0], [547.0, 0.0], [558.0, 0.0], [562.0, 0.0], [551.0, 0.0], [564.0, 0.0], [306.0, 0.0], [349.0, 300.5], [359.0, 0.0], [354.0, 0.0], [368.0, 0.0], [399.0, 0.0], [400.0, 0.0], [404.0, 0.0], [415.0, 0.0], [414.0, 0.0], [403.0, 0.0], [402.0, 0.0], [401.0, 0.0], [406.0, 0.0], [407.0, 270.0], [409.0, 298.5], [416.0, 0.0], [430.0, 0.0], [420.0, 0.0], [427.0, 293.0], [424.0, 0.0], [421.0, 0.0], [422.0, 0.0], [428.0, 50.0], [418.0, 0.0], [425.0, 0.0], [439.0, 305.0], [435.0, 0.0], [436.0, 0.0], [463.0, 0.0], [491.0, 0.0], [483.0, 0.0], [480.0, 0.0], [509.0, 0.0], [511.0, 0.0], [505.0, 0.0], [508.0, 55.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 566.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 340.48333333333335, "minX": 1.73687868E12, "maxY": 493.05, "series": [{"data": [[1.7368788E12, 405.5], [1.73687868E12, 427.6333333333333], [1.73687886E12, 340.48333333333335], [1.73687874E12, 493.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73687886E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.73687868E12, "maxY": 489.6166666666667, "series": [{"data": [[1.7368788E12, 404.8], [1.73687868E12, 425.55], [1.73687886E12, 341.31666666666666], [1.73687874E12, 489.6166666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7368788E12, 0.25], [1.73687868E12, 0.13333333333333333], [1.73687886E12, 0.06666666666666667], [1.73687874E12, 1.9333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.73687868E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.7368788E12, 0.7333333333333333], [1.73687868E12, 0.5833333333333334], [1.73687886E12, 0.3333333333333333], [1.73687874E12, 1.3166666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73687886E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.4, "minX": 1.73687868E12, "maxY": 489.6166666666667, "series": [{"data": [[1.7368788E12, 0.9833333333333333], [1.73687868E12, 0.75], [1.73687886E12, 0.4], [1.73687874E12, 3.25]], "isOverall": false, "label": "LIST-failure", "isController": false}, {"data": [[1.7368788E12, 404.8], [1.73687868E12, 425.55], [1.73687886E12, 341.31666666666666], [1.73687874E12, 489.6166666666667]], "isOverall": false, "label": "LIST-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73687886E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.4, "minX": 1.73687868E12, "maxY": 489.6166666666667, "series": [{"data": [[1.7368788E12, 404.8], [1.73687868E12, 425.55], [1.73687886E12, 341.31666666666666], [1.73687874E12, 489.6166666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7368788E12, 0.9833333333333333], [1.73687868E12, 0.75], [1.73687886E12, 0.4], [1.73687874E12, 3.25]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73687886E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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

