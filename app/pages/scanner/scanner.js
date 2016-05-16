import {BarcodeScanner} from 'ionic-native';
import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/scanner/scanner.html'
})
// export class Scanner {
//
//     constructor() {
//       this.scan = () => {
//             BarcodeScanner.scan((result) => {
//                 alert("Code: ", result.text);
//             }, (error) => {
//                 alert("Error: ", error);
//             });
//         };
//     }
// }
export class Scanner {
  constructor() {
    this.scan = () => {
      BarcodeScanner.scan(
       function (result) {
           alert("We got a barcode\n" +
                 "Result: " + result.text + "\n" +
                 "Format: " + result.format + "\n" +
                 "Cancelled: " + result.cancelled);
       },
       function (error) {
           alert("Scanning failed: " + error);
       });
    }
  }
}
